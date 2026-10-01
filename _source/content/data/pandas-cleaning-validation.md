---
title: Pandas 정리와 검증 — 자료형, 결측, 중복, 파생 변수
description: 값을 바꾸는 이유와 처리 후 확인할 조건을 구분하고 변환 실패, 0 채우기, 중복 제거, 복사와 대입을 실제 질문으로 살펴본다.
date: 2026-09-28
published: 2026-09-29
publish: true
draft: false
type: concept
courseId: data-analysis
lessonId: dataframe
topics: [데이터 분석]
tags: [pandas, preprocessing, missing-data, validation]
sources:
  - 데이터 프레임 개념 총정리 학습 대화 (2026-09-28–29)
  - Find DataFrame column index 학습 대화 (2026-09-30)
  - 판매구분별 undefined 제외 수정 학습 대화 (2026-10-01)
  - https://pandas.pydata.org/docs/reference/api/pandas.to_numeric.html
  - https://pandas.pydata.org/docs/reference/api/pandas.to_datetime.html
  - https://pandas.pydata.org/docs/user_guide/missing_data.html
  - https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html
  - https://pandas.pydata.org/docs/reference/api/pandas.cut.html
relatedReasons:
  learning/2026-09-29-dataframe: 결측 처리의 목적과 중복 제거 코드의 실제 수정 과정을 보존한 기록이다.
  learning/2026-10-01-hotel-segment-comparison: 판매 구분을 모르는 예약을 전체 원본이 아닌 해당 비교에서만 제외한 판단이다.
  data/pandas-dataframe-selection: Series와 DataFrame의 구분이 열 변환과 표 전체 대입의 바탕이 된다.
  data/data-quality: 데이터가 사용할 목적에 맞게 정확하고 일관되는지 확인하는 문제로 이어진다.
---

데이터 정리는 빈칸을 없애는 작업이 아니다. **원래 값의 뜻을 보존하면서 필요한 계산이 가능하도록 바꾸고, 바꾼 결과가 기대 조건을 만족하는지 검사하는 작업**이다. 실제 질문의 의도는 문맥에서 해석했으며, 예제는 설명용으로 재구성했다. [[learning/2026-09-29-dataframe|학습 기록]]에는 직접 작성한 코드와 당시 답변의 정정을 구분해 두었다.

## 질문: coerce와 regex=False는 무엇을 바꾸는가?

**상황:** 쉼표가 든 금액을 숫자로 바꾸는 코드에서 두 인수의 뜻을 물었다. 날짜 변환 후 생긴 `NaT`를 보며 원래 비어 있던 값만 뜻하는지도 확인했다.

**의도:** 연속된 처리에서 문자열 정리와 자료형 변환을 분리하고, 변환 실패가 어떻게 드러나는지 이해하려는 질문이다.

**핵심 답변:** `str.replace(",", "", regex=False)`는 문자 쉼표를 지울 뿐 숫자로 변환하지 않는다. `pd.to_numeric(..., errors="coerce")`는 숫자로 해석할 수 없는 값을 결측으로 만든다. 날짜의 `pd.to_datetime(..., errors="coerce")`는 해석하지 못한 값을 `NaT`로 만든다.

```python
import pandas as pd

raw_amount = pd.Series(["55,000", "unknown", None, "0"])
text_amount = raw_amount.str.replace(",", "", regex=False)
amount = pd.to_numeric(text_amount, errors="coerce")
# 값: [55000.0, NaN, NaN, 0.0]

conversion_failed = raw_amount.notna() & amount.isna()
# 원래 값이 있었지만 숫자가 되지 못한 위치를 별도로 확인
```

`regex=False`는 패턴을 정규표현식이 아닌 문자 그대로 다룬다는 뜻이다. 특히 `.` 같은 문자는 정규표현식에서 특별한 의미를 가지므로 차이가 중요하다. `coerce`는 이 맥락에서 변환 불가능한 값을 결측으로 처리한다는 선택이다. 결측으로 만들었다고 원래 오류가 해결됐다는 뜻은 아니다.

`NaT`만 보고 원인을 알 수는 없다. 원래 빈칸, 존재하지 않는 날짜, 기대 형식과 다른 문자열이 모두 같은 결과가 될 수 있다. 여러 날짜 형식이 섞이면 유효해 보이는 날짜도 파싱 규칙 때문에 실패할 수 있다. 원문과 실패 마스크를 보존하고 실제 형식에 맞는 규칙을 정한다. 이 노트는 특정 날짜 문자열의 실패를 모든 Pandas 버전과 모든 인수 조합에서 같은 결과라고 일반화하지 않는다.

## 질문: 문자열 정리, 결측 찾기, 빈칸 채우기는 무엇이 다른가?

**상황:** 공백·대소문자를 정리한 다음 `isna().sum()`, 평균·중앙값 채우기, `dropna()`를 연달아 보았다. 이후 “왜 그 값을 넣고, 어떤 기준으로 처리하는가”라는 설명을 다시 요청했다.

**의도:** 메서드 사용법보다 데이터의 의미에 근거한 처리 결정을 배우려는 질문이다.

**핵심 답변:** 문자열 정리는 표현을 통일하고, 결측 검사는 현재 비어 있다고 인식되는 위치를 찾는다. 채우기·유지·제외는 분석 목적과 원인에 따라 정할 별개의 결정이다. 평균이나 중앙값이 항상 올바른 대체값은 아니다.

```python
city = pd.Series([" SEOUL ", "busan ", None])
city.str.strip().str.title()  # ["Seoul", "Busan", None]
```

`strip()`은 양끝 공백, `lower()`는 소문자화, `title()`은 단어 첫 글자 중심의 대소문자 정리다. `title()` 앞에 `lower()`가 언제나 필요한 것은 아니다. 대소문자가 의미를 구분하는 식별자에는 이런 정리를 그대로 적용하면 안 된다. `Series.replace({"서울": "Seoul"})`는 값 전체의 대응을 바꾸고 `str.replace()`는 문자열 내부를 바꾼다는 차이도 있다.

`df.isna()`는 셀별 불리언 DataFrame, `df.isna().sum()`은 열별 결측 개수를 담은 Series다. `"unknown"`이나 `"bad-date"`는 변환 전에는 문자열로 존재하므로 자동으로 결측이 아니다. 자료형 변환 후 결측 수를 다시 보는 이유다.

| 상황 | 판단할 내용 |
|---|---|
| 소득을 모름 | 0원이라고 단정하지 않는다. 원천 복구, 결측 유지, 분석별 제외, 추정 등을 목적에 맞게 검토한다. |
| 주문 요약이 없음 | 수집 기간과 기록의 완전성을 확인해야 실제 주문 0건인지 말할 수 있다. |
| 가입일이 없음 | 가입 후 경과 일수 계산에서는 제외할 수 있지만 그 이유만으로 고객의 다른 정보까지 삭제할 필요는 없다. |
| 고객 식별자가 없음 | 평균 고객 번호로 채울 수 없다. 원천 복구나 해당 연결에서 제외할 기준이 필요하다. |
| 모델이 결측 입력을 받지 못함 | 학습 데이터에서 대체 규칙을 구하고 검증 데이터에 적용하며, 대체가 성능에 미치는 영향도 확인한다. |

알려진 금액이 `10000, 20000, NaN`이면 알려진 값의 합은 `30000`이다. 이것은 전체 실제 금액이 확실히 `30000`이라는 뜻이 아니다. 결측 한 건을 함께 보고해야 해석을 보존한다. 중앙값을 넣었다면 관측값이 아닌 추정값이 들어갔다는 사실도 남긴다. [[data/data-quality|데이터 품질]]과 [[data/interpretation|해석의 근거]]에 연결된다.

그룹별 중앙값을 구하는 `transform("median")`도 스스로 원본 결측을 채우지 않는다. 반환값을 어디에 대입하거나 `fillna()`에 어떻게 사용할지 지정해야 한다. 한 그룹이 전부 결측이면 중앙값도 결측일 수 있다.

`dropna(subset=["city"])`는 도시가 없는 행만 제외하고, 인수 없는 `dropna()`는 기본적으로 어느 열이든 결측인 행을 제외한다. 반환값을 저장하지 않은 호출은 그 자체로 원본을 수정하는 코드가 아니다.

## 질문: isna가 0인데 Undefined와 공백을 따로 확인해야 하는가?

**상황:** 호텔 예약 분석에서 결측 검사만으로 충분한지 사용자가 공백·대소문자 점검을 먼저 제안했다. 이어 `Undefined` 두 건을 전체 데이터에서 지워도 되는지 물었다.

**의도:** Pandas가 인식하는 결측과 분석에 필요한 의미를 알 수 없는 값을 구분하려는 질문이다.

**핵심 답변:** `Undefined`와 빈 문자열은 그 자체로 NaN이 아니다. `dropna()`로 문자열 `Undefined`를 제거할 수는 없다. 판매 구분을 모르는 예약을 해당 비교에서 제외하더라도, 그 예약의 호텔·취소 여부까지 전체 분석에서 삭제할 필요가 생긴 것은 아니다.

```python
analysis["market_segment"].map(repr).value_counts(dropna=False)
segment_data = analysis.loc[analysis["market_segment"] != "Undefined"]
```

첫 줄은 값의 표현을 살펴보는 검사이며 원본 문자열을 정리하는 대입이 아니다. `repr`은 앞뒤 공백이나 빈 문자열을 눈으로 구별하는 데 도움이 된다. `Online TA`에 일괄 `title()`을 적용하면 `Online Ta`가 되므로, 정리 전에 실제 범주 표기와 비교 규칙을 정한다.

두 번째 줄은 이 자료에서 확인한 문자열을 해당 비교에서 제외하는 예다. 소수이기 때문에 지우는 규칙이나 모든 결측을 처리하는 일반식은 아니다. 범주를 실제로 복구한 것도 아니다. [[learning/2026-10-01-hotel-segment-comparison|당시 제외 범위와 후속 질문]]을 함께 남겼다.

## 질문: duplicated() 결과를 고객 번호 열에 넣으면 중복이 제거되는가?

**상황:** 미션에서 다음 코드를 직접 작성하고 잘못된 점을 물었다.

```python
orders_new["customer_id"] = orders_new["customer_id"].duplicated()
```

**의도:** 중복을 발견하는 연산과 중복 행을 제거하는 연산, 열 대입과 표 전체 대입을 구분하려는 질문이다.

**핵심 답변:** `duplicated()`는 중복 여부를 담은 불리언 Series를 반환한다. 이 코드를 실행하면 고객 번호를 True/False로 바꾸며 행을 제거하지 않는다. 주문 한 건을 구분하려면 고객 번호가 아니라 주문 식별자인 `order_id`를 기준으로 검사해야 한다.

사용자가 수정해 제시한 코드는 다음과 같다.

```python
orders_new = orders_new.drop_duplicates(subset=["order_id"])
```

`subset`은 비교할 열을 정하지만 제거 대상은 그 행 전체다. 같은 고객의 주문 여러 건은 정상일 수 있고, 같은 주문이 중복 수집됐는지는 별도로 확인해야 한다.

| 함수 | 반환값 | 기본 동작의 뜻 |
|---|---|---|
| `duplicated(subset=["order_id"])` | 불리언 Series | 같은 키의 첫 행은 False, 이후 행은 True |
| `duplicated(subset=["order_id"], keep=False)` | 불리언 Series | 중복된 키를 가진 모든 행을 True로 표시 |
| `drop_duplicates(subset=["order_id"])` | DataFrame | 같은 키의 첫 행을 남긴 새 표 |

첫 행을 남겼다는 이유만으로 그 행이 더 정확한 기록이라고 볼 수는 없다. 같은 주문 번호인데 금액·날짜가 다른 경우 어느 기록을 남길지 근거가 필요하다.

한 열만 `drop_duplicates()`한 Series를 원래 열에 대입하면, 표의 행 수를 줄이지 않고 인덱스에 맞춰 값이 배치되면서 빈자리가 생길 수 있다. 표 전체에서 행을 제거하려는 문제라면 표 전체의 반환값을 저장해야 한다. [[data/pandas-dataframe-selection|선택과 Series의 인덱스]]가 여기서 다시 중요해진다.

## 질문: copy()를 썼는데 raw 표의 행 수가 그대로인 이유는?

**상황:** 중복 제거 뒤 정리한 표는 9행, 원본은 10행이라고 보고된 상황에서 두 변수가 같은 객체의 별명인지 물었다.

**의도:** 같은 이름으로 다시 저장하는 것, 같은 객체를 가리키는 것, 복사본을 만드는 것을 구분하려는 질문이다.

**핵심 답변:** `other = raw`는 같은 객체에 다른 이름을 붙이고, 이 실습처럼 단순 열 값을 가진 표의 `other = raw.copy()`는 별도 DataFrame을 만든다. 이후 `other = other.drop_duplicates(...)`는 제거 결과를 `other`라는 이름에 다시 연결한다. 원본의 행 수가 그대로인 것은 기대되는 결과다.

```python
orders_new = orders_raw.copy()
orders_new = orders_new.drop_duplicates(subset=["order_id"])
```

실습 중에는 `raw`라는 이름만 믿지 말고 실제로 어떤 셀에서 대입·변환했는지를 확인해야 한다. 원문에서도 “raw라서 아직 문자열”이라고 가정한 설명이 이후 정정됐다. 변수 이름은 변경 이력의 증거가 아니다.

## 질문: assert는 출력 뒤에 있어도 필요한가?

**상황:** 변환 전후 행 수를 출력하는 코드에 `assert`가 추가됐다. 이미 출력하고 끝난다면 어떤 역할이 더 있는지 물었다.

**의도:** 사람이 읽는 출력과 컴퓨터가 확인하는 조건의 차이를 파악하려는 질문이다.

**핵심 답변:** `print()`는 값을 보여 주고, `assert 조건`은 거짓일 때 `AssertionError`를 내어 그 지점 이후 실행을 멈춘다. 앞선 출력이나 데이터 변경을 되돌려 주지는 않는다.

```python
before_rows = len(orders_new)
orders_new["customer_mean"] = (
    orders_new.groupby("customer_id")["amount"].transform("mean")
)
assert len(orders_new) == before_rows
print("행 수가 유지됐습니다.")
```

성공 메시지를 검사 뒤에 두면 실패했을 때 그 메시지는 나오지 않는다. 일반적으로 과거 행 수가 자동 저장되지는 않으므로 행이 바뀔 수 있는 작업은 실행 전에 기준을 기록한다.

```python
assert customers_new["customer_id"].notna().all()
assert customers_new["customer_id"].is_unique
```

유일성만 검사해서 결측까지 없다고 결론 내리지 않는다. 허용 성별 값의 집합을 검사할 때 미리 `dropna()`했다면 그 검사는 결측 금지를 확인하지 않는다. “기본 검증 통과”라는 문구도 작성한 조건을 통과했다는 뜻이며 데이터 전체가 완벽하다는 뜻은 아니다.

## 질문: 새 열은 자동으로 생기는가? 나이 구간의 경계는 어떻게 읽는가?

**상황:** `order_year`라는 새 열을 대입하는 코드와 `pd.cut()`의 `bins`, `labels`, `right=False`를 질문했다. 실제 붙여넣은 코드에는 경계 5개와 라벨 5개가 있었다.

**의도:** Pandas가 어떤 의미를 자동 추론하는지와 사용자가 직접 정한 규칙을 구분하려는 질문이다.

**핵심 답변:** `df["새 이름"] = 값`은 그 이름의 열을 만들고, 같은 이름이 이미 있으면 덮어쓴다. `cut()`의 경계가 6개면 연속 구간은 5개이므로 라벨도 5개여야 한다. `right=False`에서는 왼쪽을 포함하고 오른쪽을 제외한다.

```python
age_group = pd.cut(
    pd.Series([19, 20, 49, 50, 100]),
    bins=[0, 20, 30, 40, 50, float("inf")],
    labels=["<20s", "20s", "30s", "40s", "50+"],
    right=False,
)
# 19 → <20s, 20 → 20s, 49 → 40s, 50과 100 → 50+
```

라벨을 `"50+"`로 쓴 것만으로 상한이 사라지지 않는다. 마지막 경계가 100이면 `[50, 100)`이므로 100은 빠진다. `qcut()`은 값의 간격이 아니라 분위수 기준으로 나누며 같은 값이 많으면 동일한 개수로 깔끔히 나뉘지 않을 수 있다.

고정 기준일에서 날짜를 빼면 Timedelta가 되고 `.dt.days`로 일수를 꺼낸다. `.dt.day`는 날짜의 일(day-of-month)이므로 다르다. `일수 / 365.25`나 `일수 // 365`는 나이의 근사이며 정확한 생일 기준 만 나이와 같다고 보장하지 않는다. 날짜 열의 `.dt.year`, `.dt.weekday`는 각각 연도와 요일 번호를 추출한다.

`map({"male": 0, "female": 1})`은 이 규칙에 없는 값은 결측이 될 수 있고, `replace()`는 매핑에 없는 값을 보통 그대로 남긴다. 범주에 숫자를 붙였다고 자연스러운 크기 순서가 생기는 것도 아니다.

열 전체의 `x * 2`와 `x.apply(lambda value: value * 2)`는 단순 예에서 같은 값이 나오지만, 후자는 함수를 값마다 적용한다. 여기의 매개변수 이름과 `"x"`라는 열 이름은 별개다. 기본 연산·`str`·`dt`·`map` 등으로 표현 가능하면 그 기능을 먼저 검토한다. 벡터화라는 말이 자동 병렬 실행을 뜻하지는 않는다.

## 퀴즈: 무엇을 확인했고 무엇은 모르는가?

복습용 추가 문제다. 주문 번호가 유일하고, 금액이 `[10000, 20000, NaN]`인 표에서 `amount.sum()`이 `30000`을 반환했다. “중복도 없고 총매출은 정확히 30000원이다”라고 보고해도 되는가?

<details>
<summary>정답과 이유</summary>

그대로 보고하면 안 된다. 키의 유일성은 금액의 완전성이나 정확성을 보장하지 않는다. 알려진 금액의 합계가 30000원이며 금액 결측이 한 건 있다는 점을 함께 제시하고 원인을 확인해야 한다. 고객 식별자도 기본키로 쓴다면 유일성 외에 결측 여부를 검사한다.

</details>

정리한 주문을 고객별로 요약하고 결합하는 단계는 [[data/pandas-groupby-merge-reshape|집계·결합·파이프라인]]에서 이어진다.
