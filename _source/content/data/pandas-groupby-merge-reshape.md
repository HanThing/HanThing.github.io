---
title: Pandas 집계와 결합 — agg, transform, merge에서 pipe까지
description: 각 단계가 무엇을 반환하는지 실제 표로 추적하며 고객별 집계, 주문별 변환, 키 결합, 긴 표와 넓은 표, 함수 연결을 구분한다.
date: 2026-09-28
published: 2026-09-29
publish: true
draft: false
type: concept
courseId: data-analysis
lessonId: dataframe
topics: [데이터 분석]
tags: [pandas, groupby, merge, reshape, pipeline]
sources:
  - 데이터 프레임 개념 총정리 학습 대화 (2026-09-28–29)
  - https://pandas.pydata.org/docs/user_guide/groupby.html
  - https://pandas.pydata.org/docs/reference/api/pandas.merge.html
  - https://pandas.pydata.org/docs/reference/api/pandas.pivot_table.html
  - https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.melt.html
  - https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.pipe.html
relatedReasons:
  learning/2026-09-29-dataframe: 반환값 설명의 생략과 agg 문법 변경을 지적하며 학습한 실제 질문 흐름이다.
  data/pandas-dataframe-selection: 집계 결과의 Series와 DataFrame, 인덱스와 일반 열을 구분하는 바탕이다.
  data/pandas-cleaning-validation: 집계 전 중복과 결측 처리 및 결합 후 검증 기준을 연결한다.
---

복잡한 표 코드는 **입력 표 → 중간 반환값 → 마지막 대입**으로 풀어 본다. 아래 질문은 실제 대화에서 가져왔으며 의도는 맥락에 따른 해석이다. 작은 표의 값은 설명용이다. 실습 전체를 완료했다는 기록은 아니며, 실제 작성과 정정은 [[learning/2026-09-29-dataframe|당일 학습 일지]]에서 구분한다.

## 질문: agg()는 원래 표에 새 열을 추가하는 함수인가?

**상황:** 고객별 요약표를 만들며 “계산한 뒤 대상 DataFrame에 새 열을 추가한다”고 이해해도 되는지 물었다. 이어 반환값과 함수의 필요성을 다시 확인했다.

**의도:** 함수 호출의 결과와 원본 표 수정 여부를 분리하려는 질문이다.

**핵심 답변:** 이 실습의 `groupby(...).agg(새이름=("대상열", "계산법"))`는 그룹별 계산을 이름 붙인 열에 담은 **새 요약 DataFrame**을 반환한다. 원래 주문 표에 열을 추가하지 않는다.

```python
import pandas as pd

orders = pd.DataFrame({
    "customer_id": [101, 101, 102],
    "amount": [10000, 30000, 6000],
})
summary = orders.groupby("customer_id").agg(
    total_amount=("amount", "sum"),
    avg_amount=("amount", "mean"),
)
```

| customer_id — 결과의 인덱스 | total_amount | avg_amount |
|---:|---:|---:|
| 101 | 40000 | 20000 |
| 102 | 6000 | 6000 |

입력은 주문당 한 행인 3행이고, 결과는 고객당 한 행인 2행이다. `groupby()`는 묶는 기준을 정하고 `agg()`는 각 묶음에서 수행할 계산을 지정한다. 합계·평균 등 여러 계산을 한 표에 모으고 이름을 정할 때 편리하다.

실습의 주문 요약에서는 다음 구분도 중요했다.

| 필요한 값 | 집계 | 혼동하기 쉬운 계산 |
|---|---|---|
| 서로 다른 주문 수 | `total_orders=("order_id", "nunique")` | 주문 번호를 `sum`하면 횟수가 아니라 번호의 합 |
| 알려진 구매금액 합계 | `total_amount=("amount", "sum")` | 결측 금액까지 복구한 실제 총액은 아님 |
| 평균·최대 금액 | `mean`, `max` | 결측 제외 여부와 대상 기간 확인 |
| 마지막 주문일 | `last_order_date=("order_date", "max")` | `min`은 가장 오래된 날짜 |

날짜는 비교 가능한 날짜형으로 정리하고 집계해야 한다. [[data/pandas-cleaning-validation|자료형·결측·중복 검증]]을 거치지 않으면 계산 문법이 맞아도 요약의 의미가 틀릴 수 있다.

## 질문: transform()은 실제로 무엇을 반환하는가?

**상황:** “평균을 각 행에 붙인다”라는 요약만으로는 반환 타입과 처리 순서를 이해할 수 없다고 지적했다. 새 열이 어느 단계에서 생기는지도 불명확했다.

**의도:** 결과를 추상적으로 설명하는 대신 인덱스와 값이 있는 중간 객체를 확인하려는 질문이다.

**핵심 답변:** 여기서 `orders.groupby("customer_id")["amount"].transform("mean")`은 원래 주문 행의 인덱스와 길이를 가진 Series를 반환한다. 열 추가는 그 다음 대입에서 일어난다.

```python
means = orders.groupby("customer_id")["amount"].transform("mean")
```

```text
0    20000.0
1    20000.0
2     6000.0
Name: amount, dtype: float64
```

1. `orders.groupby("customer_id")`는 그룹을 표현하는 객체를 만든다.
2. `["amount"]`는 그 그룹에서 계산할 열을 선택한다. 아직 평균값이 아니다.
3. `.transform("mean")`은 고객 101의 평균 20000을 그 고객의 두 주문 위치에, 고객 102의 평균 6000을 그 주문 위치에 대응시킨 Series를 반환한다.
4. 아래 대입을 실행해야 원래 표에 새 열이 생긴다.

```python
orders["customer_mean"] = means
```

이 순서는 표현식의 의미를 설명한 것이며 Pandas 내부 구현을 그대로 재현한 알고리즘 설명은 아니다.

| 구분 | named `agg()` 예제 | 열 하나의 `transform("mean")` |
|---|---|---|
| 한 결과가 대응하는 대상 | 고객 한 명 | 원래 주문 한 행 |
| 결과 행 수 | 고객 수 2 | 주문 수 3 |
| 인덱스 | 고객 번호 101, 102 | 원래 인덱스 0, 1, 2 |
| 이번 코드의 타입 | DataFrame | Series |
| 원본에 열이 생기는 때 | 이 호출만으로는 생기지 않음 | 역시 대입해야 생김 |

`amount - customer_mean`을 계산하면 각 주문이 해당 고객의 평균에서 얼마나 떨어져 있는지 구할 수 있다. `transform()`은 평균만을 위한 함수는 아니지만, 여기서는 이 예의 반환 길이와 인덱스를 먼저 익힌다.

## 질문: agg() 문법이 왜 갑자기 달라졌는가?

**상황:** named aggregation을 설명한 뒤 비교 예제에서 `...["amount"].agg("mean")`으로 문법을 바꾸자, 앞의 설명과 다르다고 질문했다. 답변도 설명 없이 사용법을 섞은 점을 인정했다.

**의도:** 배운 문법의 규칙과 새 문법의 관계를 일관되게 이해하려는 질문이다.

**핵심 답변:** 둘 다 집계지만 계산할 열을 정하는 위치와 반환 타입이 다르다. 한 가지 문법을 이해하는 중에 설명 없이 바꾸면 혼동을 키운다.

```python
# 결과 열 이름과 대상 열·계산법을 함께 지정: DataFrame
orders.groupby("customer_id").agg(
    avg_amount=("amount", "mean")
)

# 열을 먼저 하나 선택하고 계산법만 지정: Series
orders.groupby("customer_id")["amount"].agg("mean")
```

첫 번째의 `("amount", "mean")`은 튜플이다. `agg()`가 항상 DataFrame을 반환한다고 일반화하지 않는다. 두 결과 모두 이 예에서는 고객당 하나로 요약된다는 점이 `transform()`과의 공통 비교 기준이다.

## 질문: customer_id는 원래 열인데 왜 reset_index()가 필요한가?

**상황:** 고객 요약을 연결하기 전에 `summary = customer_order_summary.reset_index()`를 보고, 고객 번호는 애초에 일반 열 아니었는지 물었다.

**의도:** 원본 표와 집계 결과 표의 구조를 구별하려는 질문이다.

**핵심 답변:** 원래 주문 표에서는 일반 열이다. 기본 설정의 `groupby("customer_id").agg(...)`로 만든 **새 요약표**에서는 그룹 기준이 인덱스가 된다. `reset_index()`는 그 인덱스를 일반 열로 꺼낸 새 표를 반환한다.

```text
원래 orders: customer_id가 일반 열
      ↓ groupby(...).agg(...)
요약 summary: customer_id가 인덱스
      ↓ reset_index()
연결용 표: customer_id가 일반 열, 새 인덱스는 0, 1, ...
```

원래 주문 표의 열이 이동한 것은 아니다. `reset_index()`가 금액을 다시 계산하는 것도 아니다. 이미 `.reset_index()`까지 실행한 요약표라면 같은 전처리를 무조건 반복하지 말고 현재 `columns`와 `index`를 확인한다. 처음부터 `groupby(..., as_index=False)`로 일반 열 형태의 결과를 받을 수도 있지만, 현재 코드의 반환값을 읽는 일이 먼저다.

## 질문: merge()에서 왼쪽과 오른쪽은 무엇이고 how는 무엇인가?

**상황:** 왼쪽·오른쪽을 정의하지 않은 설명이 어려웠고, 원본 주문 연결과 고객별 요약 연결을 오가며 행 수가 달라지는 이유를 다시 물었다.

**의도:** 무엇과 무엇을 어떤 기준으로 합치는지 작은 표 하나에서 확인하려는 질문이다.

**핵심 답변:** `left.merge(right, ...)`에서 호출하는 객체가 왼쪽, 인수로 전달한 표가 오른쪽이다. 화면에 놓인 위치를 말하는 것이 아니다. `on`은 연결 키, `how`는 어느 쪽 키의 행을 남길지 정한다.

설명용 왼쪽 고객은 `[101, 102]`, 오른쪽 요약 고객은 `[101, 999]`이며 각 표에서 키는 유일하다고 하자.

| `how` | 결과에 포함될 키 | 의미 |
|---|---|---|
| `left` | 101, 102 | 왼쪽 유지, 연결할 오른쪽 정보가 없으면 결측 |
| `right` | 101, 999 | 오른쪽 유지 |
| `inner` | 101 | 양쪽에 있는 키; 기본값 |
| `outer` | 101, 102, 999 | 양쪽 키 모두 |
| `cross` | 왼쪽 2행 × 오른쪽 2행 | 키 일치와 무관한 모든 조합, `on` 없이 사용 |

이 표는 실습에서 다룬 방식의 비교이며 모든 버전의 인수를 빠짐없이 열거한 목록은 아니다.

주문 원본에는 한 고객의 여러 주문이 있을 수 있다. 고객 한 행에 주문 두 행이 대응하면 `left` 결합도 두 행을 만든다. “왼쪽 유지”는 무조건 왼쪽과 같은 행 수를 보장한다는 뜻이 아니다. 양쪽에서 같은 키가 각각 두 번 나오면 그 키에 대한 조합이 네 행으로 늘어날 수 있다.

## 질문: validate는 일대일로 만들어 주는 속성인가?

**상황:** 고객 정보와 고객별 요약을 연결할 때 `validate="one_to_one"`의 의미를 물었다.

**의도:** 연결 동작, 기대 관계의 검사, 연결 성공 여부 표시를 구별하려는 질문이다.

**핵심 답변:** `validate`는 `merge()`에 전달하는 인수다. 지정한 키 유일성 조건을 검사하고 맞지 않으면 오류를 낸다. 중복을 지워 일대일로 고쳐 주거나 양쪽의 모든 키가 일치하는지 확인해 주는 기능이 아니다.

| 값 | 키 중복에 관해 검사하는 조건 |
|---|---|
| `one_to_one` | 양쪽 모두 유일 |
| `one_to_many` | 왼쪽 유일 |
| `many_to_one` | 오른쪽 유일 |
| `many_to_many` | 중복을 제한하는 검사 없음 |

고객 정보와 고객별 요약이 각각 고객당 한 행이라면 다음 구조를 사용한다.

```python
# customer_order_summary의 customer_id가 아직 인덱스인 경우
summary = customer_order_summary.reset_index()
before_rows = len(customers_new)

customer_features = customers_new.merge(
    summary,
    on="customer_id",
    how="left",
    validate="one_to_one",
    indicator=True,
)
assert len(customer_features) == before_rows

unmatched_customers = customer_features.loc[
    customer_features["_merge"] == "left_only"
]
```

여기서 `_merge`의 `both`는 양쪽에서 연결됐고 `left_only`는 왼쪽에만 있다는 뜻이다. `right_only`는 오른쪽에만 있다는 뜻이지만 왼쪽 결합에는 오른쪽 전용 행이 포함되지 않는다. 그런 키까지 조사하려면 외부 결합 등 그 목적에 맞는 조회가 필요하다.

고객 행 수가 유지돼야 하는 이유는 **왼쪽을 모두 남기고 오른쪽 요약의 고객 키가 유일하기 때문**이다. 연결되지 않았다는 사실만으로 주문이 확실히 0건이라고 단정하지 않는다. 수집 누락, 기간 차이, 키 정리 문제도 확인해야 한다.

## 질문: pivot_table()을 하면 category와 amount 열이 사라지는가?

**상황:** 다음 날 피벗 결과에서 기존 열 이름이 보이지 않는 점과 `melt()`에서 외울 것·이해할 것을 물었다.

**의도:** 열 이름과 셀 값이 자리만 바뀌는 경우와 집계로 정보가 줄어드는 경우를 나누려는 질문이다.

**핵심 답변:** `category`의 값들이 새 열 이름이 되고 `amount` 값은 새 표의 칸을 채운다. 원본 표의 열은 그대로다. 다만 같은 고객·카테고리의 여러 주문을 합산하면 개별 주문 정보는 요약된다.

```python
orders_long = pd.DataFrame({
    "customer_id": [101, 101, 101, 102],
    "category": ["Books", "Books", "Food", "Food"],
    "amount": [10000, 2000, 8000, 5000],
})
pivot = pd.pivot_table(
    orders_long,
    index="customer_id",
    columns="category",
    values="amount",
    aggfunc="sum",
    fill_value=0,
)
```

| customer_id — 인덱스 | Books | Food |
|---:|---:|---:|
| 101 | 12000 | 8000 |
| 102 | 0 | 5000 |

결과의 한 칸을 말로 읽으면 된다. “고객 101의 Books 주문 금액을 더한 12000.” `index`는 행의 기준, `columns`는 열로 펼칠 분류, `values`는 계산할 값, `aggfunc`는 같은 칸에 여러 값이 있을 때의 계산이다. `fill_value=0`은 결과의 빈칸을 0으로 채우는 선택이며, 실제 데이터에서도 0이 적절한지는 별도로 판단한다.

출력 위쪽에 보이는 `category`는 일반 열이 아니라 열 축의 이름일 수 있다. `melt()`는 넓은 표의 열 이름과 칸 값을 다시 세로로 나열한다.

```python
long_again = pivot.reset_index().melt(
    id_vars="customer_id",
    var_name="category",
    value_name="amount",
)
```

| customer_id | category | amount |
|---:|---|---:|
| 101 | Books | 12000 |
| 102 | Books | 0 |
| 101 | Food | 8000 |
| 102 | Food | 5000 |

`id_vars`는 유지할 식별 열, `var_name`은 기존 열 이름을 담을 새 열의 이름, `value_name`은 기존 칸의 값을 담을 새 열의 이름이다. `value_vars`를 생략한 이 예에서는 식별 열 외의 나머지 열을 펼친다.

행 수가 우연히 원래 주문과 같은 4여도 원본 복원은 아니다. 10000과 2000은 이미 12000으로 합쳐졌고, 원래 주문이 없던 고객 102의 Books 조합은 0인 행으로 나타난다. **인수 이름은 참고할 수 있어도 결과 한 칸의 의미와 집계의 정보 손실은 이해해야 한다.**

## 질문: 메서드 체이닝과 pipe()는 무엇을 다음 단계에 넘기는가?

**상황:** 마지막 두 절에서 연속된 메서드와 직접 만든 함수를 연결하는 코드를 순서대로 설명해 달라고 요청했다.

**의도:** 긴 표현식이 하나의 마법처럼 보이지 않도록 입력과 반환값을 단계별로 추적하려는 맥락이다.

**핵심 답변:** 체이닝은 앞 메서드가 반환한 객체에 다음 메서드를 호출한다. 여기서 `.pipe(함수, 추가인수)`는 앞의 표를 함수의 첫 번째 인수로 넘기고 그 함수의 반환값을 돌려준다.

```python
high_value = (
    orders_new
    .dropna(subset=["amount", "order_date"])
    .query("amount >= 15000")
    .sort_values("amount", ascending=False)
)
```

이 코드는 필요한 값이 없는 행 제외 → 금액 조건 선택 → 내림차순 정렬이다. 각 단계는 바로 이전 단계의 결과를 받으며 이 형태에서는 원본을 바꾸지 않는다. 인덱스도 자동으로 다시 매겨지지 않는다. 바깥 괄호는 줄을 나누기 위한 것이고 튜플을 만드는 쉼표가 없다.

직접 만든 함수도 같은 흐름에 넣을 수 있다.

```python
def clean_customer_text(df):
    out = df.copy()
    out["name"] = out["name"].str.strip().str.title()
    return out


def add_customer_features(df, reference_date):
    out = df.copy()
    out["days_since_signup"] = (
        reference_date - out["signup_date"]
    ).dt.days
    return out

reference_date = pd.Timestamp("2025-03-10")
customer_pipeline = (
    customers
    .pipe(clean_customer_text)
    .pipe(add_customer_features, reference_date=reference_date)
)
```

가입일이 이미 날짜형이라는 전제에서, 2025-03-01 가입자는 경과 9일, 2025-03-05 가입자는 5일이다. 위 연결은 아래 호출과 같다.

```python
step1 = clean_customer_text(customers)
customer_pipeline = add_customer_features(step1, reference_date=reference_date)
```

`reference_date=reference_date`의 왼쪽은 매개변수 이름, 오른쪽은 전달할 값이 든 변수다. `.pipe()` 자체가 복사하거나 데이터를 정리하지는 않는다. 위 예에서 원본이 유지되는 이유는 함수 내부에서 복사본을 만들어 반환하기 때문이다. 함수가 어떤 값을 반환하느냐에 따라 다음 단계가 받을 객체도 달라진다.

## 퀴즈: 결과가 대응하는 대상을 말하기

복습용 추가 문제다. 한 고객의 주문이 세 건 있다. 고객 평균을 `agg()`로 구한 결과와 `transform()`으로 구한 결과는 각각 몇 개의 값인가? 그 주문을 Books 합계 하나로 피벗한 다음 `melt()`하면 세 주문으로 돌아가는가?

<details>
<summary>정답과 이유</summary>

이 예의 단일 금액 평균 집계는 고객당 하나이므로 값 하나이고, `transform()` 결과는 원래 주문마다 대응하므로 값 세 개다. 같은 고객의 평균이 반복된다. 피벗 집계에서 세 주문 금액을 합쳤다면 `melt()`는 합계 한 값을 세로로 옮길 뿐 원래 세 금액을 복구하지 못한다.

</details>

출발점인 [[data/pandas-dataframe-selection|객체·인덱스·선택]]과 [[data/pandas-cleaning-validation|정리와 검증]]을 함께 보면 각 단계에서 달라지는 것과 보존되는 것을 연결할 수 있다.
