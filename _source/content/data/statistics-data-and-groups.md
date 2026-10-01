---
title: 통계 실습의 데이터 — 변수의 의미와 요약표의 인덱스
description: 숫자 dtype과 변수 유형, 개수와 비율, 결측치 요약표의 인덱스 정렬과 평균 대체의 한계를 연결한다.
date: 2026-09-29
publish: true
draft: false
type: concept
courseId: data-analysis
lessonId: statistics-and-visualization
topics: [데이터 분석]
tags: [statistics, pandas, missing-values]
sources:
  - 통계시각화 실습 환경 설명 학습 대화 (2026-09-29)
  - Find DataFrame column index 학습 대화 (2026-09-30)
  - 판매구분별 undefined 제외 수정 학습 대화 (2026-10-01)
  - https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html
  - https://pandas.pydata.org/docs/reference/api/pandas.Series.value_counts.html
relatedReasons:
  learning/2026-09-29-statistics: 변수 유형과 인덱스를 직접 설명한 응답 및 교정 기록이다.
  learning/2026-09-30-hotel-cancellation-eda: 판매 구분별 취소율의 합이 100이 아닌 이유를 물었던 기록이다.
  learning/2026-10-01-hotel-segment-comparison: 같은 판매 구분 안에서 리드타임 구간별 예약 구성비를 계산한 기록이다.
  data/statistics-distributions-and-plots: 변수의 의미를 정한 다음 분포와 그래프를 고르는 방법으로 이어진다.
  data/statistics-relations-and-interpretation: 그룹별 비율과 요약표의 라벨을 상관행렬 및 집단 비교에 적용한다.
  data/data-quality: 결측치를 채우거나 이상치를 지우기 전에 원인을 확인하는 기준이다.
  data/observation-unit: 승객 한 명과 변수 하나처럼 요약 전후 행의 의미를 구분한다.
---

통계 실습에서 먼저 정할 것은 **한 행이 무엇을 나타내고, 각 열의 값이 어떤 뜻인가**다. Titanic 실습의 한 행은 승객 한 명이다. 여섯 열은 `survived`, `pclass`, `sex`, `age`, `fare`, `embarked`다. 생존 여부를 예측한다면 `survived`는 타깃, 나머지 다섯 열은 입력 후보가 된다.

아래 질문은 실제 대화에서 가져왔으며 **의도는 맥락을 바탕으로 해석**했다. 코드는 설명용으로 재구성했다. 사용자 응답과 당시 관찰의 범위는 [[learning/2026-09-29-statistics|당일 학습 기록]]에서 구분한다.

## 질문: 자료형과 별개로 변수 타입을 왜 분류해야 하나?

**상황:** 숫자 dtype인 `survived`, `pclass`, `age`, `fare`를 모두 수치형으로 답한 뒤, 저장 자료형과 의미상의 변수 유형을 따로 나누는 이유를 물었다.

**의도:** 분류 이름을 외우는 일이 실제 계산과 그래프 선택에 어떤 차이를 만드는지 확인하려는 질문이다.

**핵심 답변:** dtype은 저장·연산 방식이고 변수 유형은 값의 의미다. 컴퓨터가 평균을 계산할 수 있어도 그 평균을 해석할 수 있는지는 별도 문제다.

| 변수 | 의미 | 이 실습에서 주로 보는 것 |
| --- | --- | --- |
| `age`, `fare` | 나이·요금이라는 양 | 평균, 중앙값, 퍼짐, 분포 |
| `sex`, `embarked` | 성별·항구라는 범주 | 범주별 개수와 비율 |
| `pclass` | 순서가 있는 객실 등급 | 등급별 개수·분포·생존율 |
| `survived` | 사망 0 / 생존 1 | 두 범주의 비율 |

항구 S·C·Q에 임의로 1·2·3을 붙여 평균을 내면 번호를 바꿀 때 평균도 달라진다. “평균 항구”라는 해석은 성립하지 않는다. `pclass=3`도 1등급의 어떤 양이 세 배라는 뜻이 아니다.

다만 **0·1의 평균은 1의 비율**이라는 유용한 예외가 있다.

```python
# 설명용 생존 여부
survived = [1, 0, 1, 1, 0]
sum(survived) / len(survived)  # 3 / 5 = 0.6
```

이 계산의 0.6은 생존율 60%다. 결측치가 있는 이진 Series에서 `.mean()`을 쓰면 기본적으로 결측치를 제외한 값들이 분모가 된다는 조건도 확인한다.

## 질문: 취소율을 모두 더하면 100이 아닌가? 예약 구성비와는 무엇이 다른가?

**상황:** 호텔 예약의 판매 구분별 취소율을 보고 합이 100이어야 하는지 물었다. 다음 날에는 판매 구분마다 리드타임 구간별 예약 구성비를 계산하며 다른 분모를 사용했다.

**의도:** 여러 퍼센트가 같은 전체를 나누는 값인지, 서로 다른 집단 안의 비율인지 구분하려는 질문이다.

**핵심 답변:** 비율 이름보다 분자와 분모를 먼저 쓴다. 그룹별 취소율은 분모가 각 그룹의 예약 수이므로 합이 100일 필요가 없다. 전체를 빠짐없이 나눈 구성비는 공통 분모를 사용한다.

| 비교하려는 것 | 분자 | 분모 |
|---|---|---|
| 판매 구분별 취소율 | 해당 구분의 취소 수 | 해당 구분의 예약 수 |
| 전체 취소 중 판매 구분의 몫 | 해당 구분의 취소 수 | 비교 대상 전체의 취소 수 |
| 한 판매 구분 안의 리드타임 구성비 | 해당 구분·구간의 예약 수 | 해당 구분의 모든 구간 예약 수 |

설명용 A 구분이 예약 10건·취소 4건, B 구분이 예약 20건·취소 6건이면 취소율은 40%·30%다. 전체 취소 10건의 몫은 40%·60%다. 각 그룹 취소율의 단순 평균 35%도 전체 취소율 `10/30`과 다르다. 분모의 규모가 다르기 때문이다.

리드타임 구성비가 각 판매 구분 안에서 100%가 되더라도, 분류되지 않아 집계에서 빠진 예약이 없다는 증거는 아니다. 포함한 행의 범위를 별도로 확인한다. [[learning/2026-09-30-hotel-cancellation-eda|취소율 질문]]과 [[learning/2026-10-01-hotel-segment-comparison|구성비 계산 질문]]을 이어 읽으면 분모가 바뀌는 지점을 볼 수 있다.

## 질문: value_counts() 결과도 Series인가? 무엇이 인덱스인가?

**상황:** 성별을 센 결과가 두 열짜리 표처럼 보여 Series인지 DataFrame인지 물었고, 원래 값인 `male`, `female`이 결과의 인덱스가 되는지 직접 확인했다.

**의도:** 화면의 모양보다 반환 객체의 구조와 각 숫자의 의미를 구분하려는 질문이다.

**핵심 답변:** `df["sex"].value_counts()`는 Series다. 서로 다른 성별 값이 인덱스가 되고 등장 횟수가 데이터 값이 된다. 왼쪽 인덱스를 데이터 열 하나로 세지 않는다.

```text
원래 Series             value_counts() 결과
0  male                 male      3
1  female               female    2
2  male
3  male
4  female
```

```python
counts = df["sex"].value_counts()
ratios = df["sex"].value_counts(normalize=True)
```

`normalize=True`는 개수를 비율로 바꾼다. 기본 설정은 결측치를 제외하므로, 결측치가 있는 열의 분모는 전체 행 수와 다를 수 있다. 결측 범주까지 함께 셀 때는 `dropna=False`를 명시한다. [pandas의 value_counts 문서](https://pandas.pydata.org/docs/reference/api/pandas.Series.value_counts.html)

세 가지 작업은 각각 독립적이다.

| 코드 | 결과 |
| --- | --- |
| `df["sex"].value_counts()` | 범주별 개수 Series |
| `sns.countplot(data=df, x="sex")` | 원본 행을 세어 그린 인원수 막대 |
| `sns.barplot(data=df, x="sex", y="survived")` | 기본 평균을 이용한 성별 생존율 막대 |

앞에서 비율을 계산했다고 뒤의 `countplot()`이 자동으로 비율을 그리지는 않는다. 타깃이 생존 80%, 사망 20%라면 전부 생존이라고 예측해도 정확도는 80%다. 타깃 분포를 먼저 봐야 성능 숫자를 과신하지 않는다.

## 질문: 결측치 표를 만들었는데 행 인덱스는 갑자기 어디서 왔나?

**상황:** `pd.DataFrame({"count": ..., "ratio": ...})`를 읽다가 `age`, `fare`가 왼쪽 행 이름에 붙는 이유가 납득되지 않아, 한 단계씩 확인 질문을 요청했다.

**의도:** 원본의 열 이름이 요약 결과의 행 인덱스가 되는 경로를 추적하려는 질문이다.

**핵심 답변:** 열별 집계는 각 열의 결과 하나를 만든다. 그 결과 Series의 인덱스가 원본 열 이름이고, Series들을 DataFrame에 넣으면 그 인덱스에 맞춰 행이 정렬된다. [pandas DataFrame 문서](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html)

```python
missing = pd.DataFrame({
    "count": df.isna().sum(),
    "ratio": df.isna().mean(),
})
```

| 단계 | 자료 구조 | 한 칸 또는 한 값의 뜻 |
| --- | --- | --- |
| `df` | 승객 × 변수 DataFrame | 관측값 |
| `df.isna()` | 같은 shape의 불리언 DataFrame | 결측이면 True |
| `.sum()` | 변수 이름이 인덱스인 Series | 열별 결측 개수 |
| `.mean()` | 변수 이름이 인덱스인 Series | 열별 결측 비율 |
| `missing` | 변수 × 요약 지표 DataFrame | `count`와 `ratio` |

`isna()` 뒤에는 모든 칸이 True/False이므로 평균의 분모는 전체 행 수다. 100행 중 나이가 20개 비면 `20/100=0.2`다. 0이나 빈 문자열은 그 자체만으로 `isna()`의 결측 판정 대상이 아니다.

다음은 당시 확인 문제에 사용된 **설명용 Series**다.

```python
counts = pd.Series([1, 2], index=["age", "fare"])
ratios = pd.Series([0.2, 0.1], index=["fare", "age"])
missing = pd.DataFrame({"count": counts, "ratio": ratios})
```

```text
      count  ratio
age       1    0.1
fare      2    0.2
```

첫 번째 위치끼리 기계적으로 붙인 것이 아니다. **인덱스 이름 `age`끼리 맞추므로 `age`의 ratio는 0.1**이다.

```python
missing_plot = missing[missing["count"] > 0].sort_values(
    "ratio", ascending=False
)
```

조건은 `count`로 검사하지만 남기는 것은 행 전체다. 모든 결측 개수가 0이면 결과는 0행 2열이다. `len(missing_plot)`은 열 수 2가 아니라 행 수 0이다. 정렬 역시 반환값을 받아야 다음 작업에 그 순서를 사용할 수 있다.

## 질문: 나이 결측치를 평균으로 채우면 평균은 유지되고 표준편차는 줄지 않나?

**상황:** 결측 나이를 삭제하는 대신 평균으로 대체하겠다고 제안하면서, 평균을 유지하지만 퍼짐을 줄이는 단점도 직접 설명했다.

**의도:** 자신의 처리 방안이 타당한지 확인하고 다른 선택의 장단점을 비교하려는 질문이다.

**핵심 답변:** 보존되는 것은 **관측된 값들의 평균**이다. 모르는 실제 나이까지 포함한 전체 평균이 보존된다는 뜻은 아니다. 평균을 여러 번 추가하면 평균에서 벗어난 정도는 늘지 않고 분모가 커져, 관측값 기준의 분산·표준편차가 줄어든다. 단, 원래 분산이 0이면 그대로 0이다.

편집 단계의 보충 예로 관측 나이가 `[20, 40]`, 결측이 두 개라면 평균 대체 후 `[20, 40, 30, 30]`이다. 평균은 모두 30이고, `ddof=0` 기준 표준편차는 10에서 약 7.07로 줄어든다. 이 예는 실제 승객 나이의 복원이 아니다.

| 선택 | 얻는 것 | 확인할 한계 |
| --- | --- | --- |
| 결측 행 삭제 | 추측값을 넣지 않음 | 다른 열의 정보도 잃고 표본 구성이 달라질 수 있음 |
| 전체 평균·중앙값 대체 | 간단하게 행을 유지 | 한 값에 몰려 분포와 변수 간 관계가 바뀜 |
| 그룹별 중앙값 대체 | 실제로 존재하는 그룹 차이를 일부 반영 | 작은 그룹·결측 그룹을 확인해야 하며 정답 복원이 아님 |

모델링에 사용한다면 학습·평가 데이터를 먼저 나누고, 대체값은 학습 데이터에서만 정한다. 처리 이유는 [[data/data-quality|데이터 품질]]과 연결해 남긴다.

## 퀴즈: 순서가 다른 두 Series와 결측치 없는 표

`counts`의 인덱스와 값이 `age: 0, fare: 0`이고 `ratios`는 역순으로 `fare: 0.0, age: 0.0`이다. 둘을 `count`, `ratio` 열로 합친 뒤 `count > 0`인 행만 남기면 shape과 `len()`은 각각 무엇인가?

<details>
<summary>정답과 이유 보기</summary>

인덱스 이름으로 정렬하므로 합친 표는 2행 2열이다. 필터 조건을 만족하는 행은 없어서 결과 shape은 `(0, 2)`, `len()`은 0이다. 인덱스 정렬과 행 필터를 별도 단계로 읽는다.

</details>

*새로 만든 보충 문제이며 사용자 응답 기록은 아니다.*

**연결:** [[data/observation-unit|한 행의 의미]] · [[data/statistics-distributions-and-plots|분포와 그래프 코드]] · [[data/statistics-relations-and-interpretation|상관표와 집단 비교]] · [[learning/2026-09-29-statistics|실제 질문과 응답 기록]]
