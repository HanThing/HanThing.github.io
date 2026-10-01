---
title: 판매 구분 비교 기록 — Undefined 제외와 예약 구성비
description: Undefined를 필요한 비교에서만 제외하고, 행 선택과 범주별 집계, transform으로 계산한 구성비, 같은 조건 비교의 해석을 정리한다.
date: 2026-10-01
publish: true
draft: false
type: journal
courseId: data-analysis
lessonId: dataframe
topics: [데이터 분석]
tags: [learning, pandas, groupby, transform, hotel-cancellation]
sources:
  - 판매구분별 undefined 제외 수정 학습 대화 (2026-10-01)
relatedReasons:
  learning/2026-09-30-hotel-cancellation-eda: 호텔 예약 표의 집계 구조와 취소율 분모를 먼저 질문했던 기록이다.
  data/pandas-dataframe-selection: 조건에 맞는 행 선택과 출력할 열 선택을 분리한다.
  data/pandas-cleaning-validation: 문자열 Undefined와 실제 결측, 분석별 제외 범위를 구분한다.
  data/pandas-groupby-merge-reshape: transform이 그룹 합계를 원래 행의 인덱스에 맞추는 이유를 설명한다.
  data/statistics-data-and-groups: 취소율과 같은 판매 구분 안의 예약 구성비가 서로 다른 비율임을 설명한다.
  data/statistics-relations-and-interpretation: 조건을 좁힌 관찰을 인과 효과로 확대하지 않는 기준을 연결한다.
---

[[learning/2026-09-30-hotel-cancellation-eda|전날 호텔별 취소율과 판매 구분을 살펴본 뒤]], 이날은 `Undefined`를 판매 구분 비교에서만 제외하는 코드로 시작했다. 이어 City Hotel의 Groups와 Online TA를 골라 리드타임 구간별로 비교하고, 각 판매 구분의 예약이 어느 구간에 분포하는지 계산했다.

아래 질문의 의도는 문맥에 따른 해석이다. 실제 사용자 질문·코드·자기 보고와 당시 답변의 설명을 구분했다. 코드는 필요한 흐름을 재구성한 예이며, 원자료의 상세 수치를 이 글 작성 단계에서 다시 계산하지 않았다. 과제 제출이나 전체 실습의 독립 수행을 확인한 기록은 아니다.

## 질문: Undefined는 판매 구분 비교에서만 제외하면 되는가?

**상황:** 전날 `Undefined`를 어떻게 다룰지 이야기한 뒤, 판매 구분별 집계 부분만 최소 수정해 달라고 요청했다.

**의도:** 필요한 분석 범위에만 제외 조건을 적용하고 전체 예약 정보는 유지하려는 질문이다.

**핵심 답변:** 집계 직전에 판매 구분이 `Undefined`가 아닌 행을 고르면 된다. `Undefined`는 NaN이 아닌 문자열이므로 `dropna()`로 같은 일을 할 수 없다. 판단 근거는 단순히 건수가 적다는 점이 아니라 해당 예약의 판매 구분을 알 수 없다는 점이다.

```python
segment_summary = (
    analysis.loc[analysis["market_segment"] != "Undefined"]
    .groupby(["hotel", "market_segment"])["is_canceled"]
    .agg(bookings="size", cancellations="sum", cancel_rate="mean")
    .reset_index()
)
```

이 코드는 현재 문자열 `Undefined`를 제외하는 조건이다. 모든 형태의 결측·비정상 범주를 한꺼번에 정리하는 규칙은 아니다. `analysis`에 필터 결과를 다시 대입하지 않았으므로 전체 분석용 표를 이 줄에서 줄이지 않는다. [[data/pandas-cleaning-validation|정리와 검증]]에 판단 기준을 남겼다.

## 질문: loc로 선택하면 원본도 삭제되는가?

**상황:** 제외 조건을 읽으며 `.loc` 선택이 기존 표 자체를 바꾸는지 물었다.

**의도:** 결과를 선택하는 연산과 기존 값에 대입하는 연산을 구분하려는 질문이다.

**핵심 답변:** 위 코드의 `.loc[조건]`은 조건에 맞는 행을 반환한다. 이를 별도 변수에 저장하는 것과 `analysis.loc[조건, "열"] = 값`으로 원본에 대입하는 것은 다르다. 이 설명은 모든 `.loc` 반환값이 언제나 완전히 독립적인 깊은 복사라는 뜻이 아니다.

필터를 적용했는지 확인하려면 원본을 추측하지 말고 선택 결과의 행과 범주를 확인한다. [[data/pandas-dataframe-selection|선택 결과와 대입]]과 연결된다.

## 질문: Groups와 Online TA만 골랐는데 왜 다른 열이 계속 보이는가?

**상황:** City Hotel 중 두 판매 구분을 선택한 뒤 다른 열도 보인다고 질문했다. 직접 제시한 코드에는 실제 범주 `Online TA`와 대소문자가 다른 `Online Ta`도 있었다.

**의도:** 선택 조건의 값과 출력 열 이름을 구별하려는 질문이다.

**핵심 답변:** Groups와 Online TA는 열 이름이 아니라 `market_segment` 열 안의 값이다. 조건은 그 값을 가진 **예약 행**을 고른다. 열을 따로 지정하지 않았다면 선택된 행의 다른 정보도 모두 남는다. 문자열 비교에서는 `Online TA`처럼 실제 값과 맞춰야 한다.

```python
mask = (
    (analysis["hotel"] == "City Hotel")
    & analysis["market_segment"].isin(["Groups", "Online TA"])
)
city_selected = analysis.loc[mask]

# 필터에 사용한 두 열만 보면서 확인
city_selected.loc[:, ["hotel", "market_segment"]].value_counts()
```

당시 답변도 처음에 “행을 고른다”는 말을 분명하게 하지 않은 점을 정정했다. 다른 열이 보인다는 사실만으로 필터가 실패했다고 판단할 수는 없다.

## 질문: df["market_segment"]와 df.loc["market_segment"]는 같은가?

**상황:** 일반 대괄호 선택과 `.loc` 선택에서 같은 문자열을 넣으면 같은 대상을 고르는지 물었다.

**의도:** 같은 이름이라도 들어가는 위치에 따라 선택 축이 달라지는 이유를 이해하려는 질문이다.

**핵심 답변:** 이 DataFrame에서 `df["market_segment"]`는 열 선택이다. `df.loc["market_segment"]`는 그 이름을 가진 행 레이블을 찾는다. `.loc`로 같은 열을 고르려면 `df.loc[:, "market_segment"]`처럼 모든 행과 해당 열을 지정한다.

쉼표 앞은 행, 뒤는 열이다. 값에 대한 조건 마스크를 어느 자리에 넣었는지도 함께 읽는다.

## 질문: 취소 여부 열의 size와 sum이 왜 다른 값인가?

**상황:** 두 판매 구분을 리드타임 구간별로 집계하며 `size`, `sum`, `mean`의 의미를 다시 확인했다.

**의도:** 원본 예약 수와 취소 수, 취소율을 계산식 수준에서 연결하려는 질문이다.

**핵심 답변:** 설명용 취소 여부가 `[1, 0, 1, 0, 0]`이라면 행 수는 5, 합은 2, 평균은 0.4다. 각각 예약 5건, 취소 2건, 취소율 40%가 된다. 합이 취소 수가 되는 이유는 이 열에서 1이 취소, 0이 비취소라는 코딩 때문이다.

임의의 숫자 열에 `sum()`을 사용한다고 항상 건수가 되는 것은 아니다. 결측 여부와 [[data/statistics-data-and-groups|변수의 의미와 비율의 분모]]도 같이 확인한다.

## 질문: 코드가 잘못됐다는 설명이 실제 코드와 다른데 무엇을 고쳐야 하는가?

**상황:** 답변이 집계 코드의 괄호와 `reset_index()` 위치를 오류 원인으로 지목했다. 사용자는 `cancel_rate`가 이미 `agg()` 안에 있고 괄호도 맞는다고 반박했다.

**의도:** 실제 코드와 일치하지 않는 진단을 바로잡으려는 질문이다.

**핵심 답변:** 이후 답변은 실행된 결과 표를 확인했다고 보고하며 앞선 진단을 정정했다. 당시 문제로 읽힌 것은 실행을 중단한 문법 오류가 아니라 범주형 그룹 집계의 기본값 변경을 알리는 `FutureWarning`이었다. 원하는 동작에 맞춰 `observed`를 명시하는 설명으로 바뀌었다.

이 대목은 사용자가 잘못된 괄호를 고쳐 해결한 사례가 아니다. 화면과 코드를 잘못 읽은 답변을 사용자가 지적한 사례다. 경고와 예외를 구분하고, 실제 코드·결과·메시지를 함께 봐야 한다.

## 질문: observed=True는 어떤 그룹을 남기는가?

**상황:** `pd.cut()`으로 만든 `lead_group`과 `market_segment`를 묶는 코드에서 `observed=True`의 의미를 물었다.

**의도:** 경고를 없애기 위한 옵션으로만 외우지 않고 결과 행이 어떻게 달라지는지 이해하려는 질문이다.

**핵심 답변:** 범주형 dtype에는 현재 행에서 관측되지 않은 범주도 정의돼 있을 수 있다. `observed=True`는 실제 관측된 범주 조합으로 결과를 제한한다. 관측되지 않은 조합까지 포함하는 집계에서는 예약 수가 0이거나 평균이 NaN인 행이 생길 수 있다. 모든 조합이 관측됐다면 이 옵션의 결과 차이가 없을 수도 있다.

```python
city_summary = (
    city_selected.groupby(["lead_group", "market_segment"], observed=True)
    ["is_canceled"]
    .agg(bookings="size", cancellations="sum", cancel_rate="mean")
    .reset_index()
)
city_summary["cancel_pct"] = city_summary["cancel_rate"] * 100
```

`observed=True`는 `Undefined` 문자열을 제거하는 조건도, 취소율을 계산하는 함수도 아니다. 앞의 행 필터와 뒤의 집계 함수가 각각 맡는 역할이 다르다.

## 질문: 표에는 두 판매 구분이 있는데 그래프에는 왜 구분이 안 되는가?

**상황:** 집계 표에는 Groups와 Online TA가 따로 있는데 그림에서 분리되지 않아 `hue`를 질문했다. `data`와 축 이름의 따옴표 사용, 같은 y축 범위도 확인했다.

**의도:** 표의 분류 열을 그림의 막대와 범례에 연결하려는 질문이다.

**핵심 답변:** 같은 `lead_group` 안에서 두 판매 구분을 따로 보려면 `hue="market_segment"`를 전달한다. 이를 빠뜨리면 같은 x값에 있는 여러 요약 행이 다시 함께 집계될 수 있다. 그 평균은 원본 예약 수를 반영한 전체 취소율과 같다고 보장할 수 없다.

```python
fig, ax = plt.subplots()
sns.barplot(
    data=city_summary,
    x="lead_group",
    y="cancel_pct",
    hue="market_segment",
    errorbar=None,
    ax=ax,
)
ax.set_ylim(0, 100)
ax.set_ylabel("Cancellation rate (%)")
```

`city_summary`는 DataFrame 변수이고, `lead_group`, `cancel_pct`, `market_segment`는 그 표의 열 이름 문자열이다. 코드는 그림 구성을 위한 재구성으로, 당시 그림을 새로 실행·저장했다는 기록은 아니다.

## 질문: 예약 구성비의 분모는 무엇이며 어떻게 계산하는가?

**상황:** 판매 구분마다 예약이 각 리드타임 구간에 얼마나 분포하는지 계산하려 했다. 분모를 찾는 힌트를 받은 뒤 어렵다고 말했고, 이어 전체 계산 코드를 요청했다.

**의도:** “같은 판매 구분 안에서의 비중”을 행별 나눗셈으로 구현하려는 질문이다.

**핵심 답변:** 분자는 해당 판매 구분·리드타임 구간의 예약 수다. 분모는 같은 판매 구분의 모든 리드타임 구간 예약 수를 합한 값이다. 앞에서 City Hotel만 골랐으므로 아래 분모도 City Hotel 안에서 계산된다.

```python
segment_total = city_summary.groupby("market_segment")["bookings"].transform("sum")
city_summary["segment_pct"] = city_summary["bookings"] / segment_total * 100

city_summary.groupby("market_segment")["segment_pct"].sum()
```

이 구성비는 취소율이 아니다. 집계에 포함된 구간들이 해당 판매 구분의 예약 전체를 빠짐없이 나눈 경우, 각 판매 구분 안의 합이 반올림 오차를 제외하고 100%가 된다. `lead_group`이 결측인 행이 집계에서 빠졌다면 합이 100이어도 전체 예약의 분류가 끝났다는 증거는 아니다.

## 질문: Groups와 Online TA를 코드에 적지 않았는데 어떻게 따로 100이 되는가?

**상황:** 사용자는 구성비 합계 출력이 두 구분 모두 100이라고 보고했다. 그런데 계산 코드에 두 이름을 직접 쓰지 않았으므로 어떻게 구분했는지 물었다.

**의도:** 그룹 이름을 직접 반복하지 않고 같은 값끼리 계산하는 동작을 이해하려는 질문이다.

**핵심 답변:** `groupby("market_segment")`가 그 열의 같은 값끼리 묶는다. `transform("sum")`은 각 묶음의 합을 그 묶음에 속한 모든 원래 행 위치로 돌려준다. 그룹 이름을 코드에 하나씩 적을 필요가 없다.

아래는 이 글의 설명용 값이며 실제 예약 수가 아니다.

| 행 | 판매 구분 | 구간 예약 수 | transform 합계 | 구성비 |
|---:|---|---:|---:|---:|
| 0 | Groups | 30 | 100 | 30% |
| 1 | Groups | 70 | 100 | 70% |
| 2 | Online TA | 50 | 200 | 25% |
| 3 | Online TA | 150 | 200 | 75% |

100·100 출력은 사용자의 당시 보고다. 이 보고만으로 이후 모든 그룹 집계에 독립적으로 적용할 수 있다고 확대하지 않는다.

## 질문: transform("sum") 대신 sum()만 쓰면 왜 안 되는가?

**상황:** 같은 합계를 구하는데 `transform()`을 빼면 안 되는지 물었다.

**의도:** 수치 계산이 같아도 반환 길이와 인덱스가 다른 이유를 확인하려는 질문이다.

**핵심 답변:** 위 설명용 표에서 `sum()`은 Groups 100, Online TA 200이라는 두 값으로 줄인다. 인덱스도 판매 구분 이름이다. `transform("sum")`은 원래 네 행의 인덱스 0·1·2·3에 100·100·200·200을 대응시킨다. Pandas의 Series 나눗셈은 인덱스 레이블을 맞추므로 두 결과를 같은 모양으로 취급할 수 없다.

일반 합계가 쓸모없다는 뜻이 아니다. 별도의 그룹별 표가 필요하면 `sum()`이 맞고, 원래 행마다 그 그룹의 합계로 나누려면 `transform()`이 간단하다. [[data/pandas-groupby-merge-reshape|집계와 transform의 반환값]]에서 비교한다.

## 질문: 같은 리드타임 구간에서 비교하면 어떤 결론까지 말할 수 있는가?

**상황:** 판매 구분별 예약 구성비 표를 읽고 해석을 요청한 뒤, 최종 답변에 참고할 예시 문장도 요청했다.

**의도:** 전체 취소율 차이와 예약 시점 구성의 차이를 나눠 해석하려는 질문이다.

**핵심 답변:** 먼저 판매 구분별로 긴 리드타임 예약의 비중이 다른지 보고, 이어 같은 호텔·리드타임 구간 안에서도 취소율 차이가 남는지 확인한다. 구성 차이는 전체 비율 차이를 이해할 단서이며, 같은 구간 안의 비교도 인과 효과를 확정하지는 않는다.

당시 답변은 Groups에서 긴 리드타임 예약의 비중이 더 크고, City Hotel의 같은 리드타임 구간 안에서도 취소율 차이가 남는다고 표를 읽었다. 이는 **당시 답변의 관찰 보고**이며 이 글에서 원자료로 재검산한 결과가 아니다. 상세 수치는 재현 검증 없이 새로운 확정 결과로 싣지 않았다.

같은 구간이어도 정확한 예약 일수와 다른 예약 특성까지 같지는 않다. 따라서 “리드타임 구성만으로 모든 차이를 설명한다”거나 “판매 구분이 취소를 일으켰다”는 결론으로 넘어가지 않는다. [[data/statistics-relations-and-interpretation|조건을 좁힌 비교의 해석]]과 연결된다.

## 파일 문제와 남은 확인

초반에는 CSV 경로에서 `FileNotFoundError`가 났다. 당시 답변은 파일 패널을 확인했다고 보고하고 파일 업로드와 실제 경로 확인을 안내했다. 그 안내 뒤 업로드·재실행이 성공했는지는 이 기록에서 독립적으로 확인하지 못했다.

`Undefined`의 실제 판매 구분은 복구되지 않았다. 운영 제안과 최종 해석 문장은 요청에 따라 받은 참고 예시이며, 사용자가 작성·제출한 최종 결론으로 기록하지 않는다. 다음 복습에서는 새로운 작은 표에서 **선택할 행, 집계 결과의 인덱스, 비율의 분모**를 먼저 말해 보는 것이 이 기록과 연결되는 확인 과제다.
