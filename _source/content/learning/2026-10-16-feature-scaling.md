---
title: "Feature scaling: 언제 적용하고 어떤 열을 바꿀까?"
description: 범주를 나타내는 숫자와 수치의 단위를 구별하고, 열별 scaling의 판단 기준과 binning이 잃는 정보를 실제 질문으로 확인한다.
date: 2026-10-16
published: 2026-10-25
publish: true
draft: false
type: journal
courseId: machine-learning
lessonId: supervised-learning
topics: [머신러닝, 데이터 분석]
tags: [titanic, preprocessing, feature-scaling, discretization]
sources:
  - 타이타닉 미션의 feature scaling 학습 대화 (2026-10-16)
  - https://scikit-learn.org/stable/modules/preprocessing.html
  - https://scikit-learn.org/stable/auto_examples/compose/plot_column_transformer_mixed_types.html
relatedReasons:
  learning/2026-10-15-titanic-preprocessing: 승선항의 숫자 코드와 나이 구간이 무엇을 뜻하는지 앞선 질문에서 확인한다.
  machine-learning/logistic-loss-and-evaluation: 입력 값이 weight의 gradient에 곱해지는 식과 Pipeline의 fit 범위를 연결한다.
  data/numpy-broadcasting: feature별 평균과 표준편차로 standardization하는 배열 계산을 확인한다.
  learning/2026-10-19-titanic-validation: 원래 값과 binning을 같은 검증 조건에서 비교하는 후속 제안으로 이어진다.
---

2026년 10월 16일, 타이타닉 미션의 전처리를 살펴보다 feature scaling을 언제 적용해야 하는지 물었다. “성능이 항상 좋아지는 것은 아니다”라는 답만으로는 다음 행동을 정하기 어려웠다. 질문은 범주를 숫자로 표현하는 방법에서 시작해, 어떤 열을 바꿀지와 왜 바꿀지를 판단하는 기준으로 이어졌다.

아래 의도는 대화 맥락을 바탕으로 정리했다. 작은 숫자는 설명용 예시다. 당시 scaling 전후의 학습이나 검증 점수 비교를 실행한 기록은 없으므로 성능 개선을 확인한 글은 아니다.

## 질문: 범주를 숫자로 바꿨다면 평균과 표준편차도 의미가 있는가?

**상황:** 범주 숫자의 평균을 구하기 어렵다는 설명을 듣고, 숫자로 바꾼 범주는 모두 순서가 있는 것으로 취급하는지 물었다.

**의도:** 숫자로 저장할 수 있다는 사실과 그 숫자를 계산해 해석할 수 있다는 사실을 구별하려는 질문이다.

**핵심 답변:** 숫자가 무엇을 나타내는지 먼저 봐야 한다. 항구 이름에 임의로 붙인 코드와 실제 나이, 해당 범주에 속하는지를 나타내는 0·1은 서로 다르다. scaling을 한다고 임의의 코드에 올바른 거리나 순서가 생기지는 않는다.

`S → 0, C → 1, Q → 2`라는 항구 코드에서 평균이 1이라고 “평균 항구가 C”라고 해석할 수는 없다. 번호를 다른 순서로 붙이면 평균도 달라지지만 승객의 항구는 그대로다. 이 코드를 standardization해도 임의로 부여한 순서와 간격 문제는 남는다. [[learning/2026-10-15-titanic-preprocessing|앞선 전처리 질문]]에서 구별한 항구와 티켓의 정보 역할도 같은 기준으로 읽을 수 있다.

반대로 one-hot encoding의 한 열이 “S 항구인가?”를 `1, 0, 1, 0`으로 표시한다면 평균 0.5는 이 네 명 중 S 항구 승객이 절반이라는 뜻이다. 따라서 범주에서 만든 열은 평균이 전부 무의미하다는 말도 지나치다. 실제 순서가 있는 범주라도 이웃한 번호 사이의 간격까지 같은지는 별도로 판단한다. [scikit-learn의 categorical encoding 설명](https://scikit-learn.org/stable/modules/preprocessing.html#encoding-categorical-features)

## 질문: 일부 열만 feature scaling해도 되는가?

**상황:** 수치 열과 범주 열의 의미가 다르다면, 모든 열에 같은 처리를 하지 않아도 되는지 물었다.

**의도:** 표 전체를 한 번에 변환해야 한다는 생각에서 벗어나 열마다 알맞은 처리를 정하려는 질문이다.

**핵심 답변:** 필요한 열만 scaling할 수 있다. 예를 들어 원래의 `Age`, `Fare`에는 결측 대체 뒤 standardization을 적용하고, `Embarked`에는 one-hot encoding을 적용하는 흐름을 만들 수 있다. 이것은 가능한 구성이지 이 미션에서 최적이라고 확인한 결과는 아니다.

`ColumnTransformer`는 열 묶음마다 다른 처리를 적용하고 결과를 합친다. `Pipeline`은 한 경로 안의 처리 순서를 연결한다. 따라서 수치 열의 경로에 “결측 대체 → scaling”을 두고, 범주 열의 경로에는 별도의 encoding을 둘 수 있다. [scikit-learn의 Titanic 예시](https://scikit-learn.org/stable/auto_examples/compose/plot_column_transformer_mixed_types.html)도 두 도구를 함께 사용한다.

one-hot 열을 그대로 두는 구성을 출발점으로 삼을 수 있지만, one-hot에는 scaling이 절대 불가능하다는 뜻은 아니다. 모델이 거리를 계산하는 방법이나 regularization에 따라 표현을 다시 비교할 수 있다. 열의 저장 자료형만 보고 무조건 같은 처리를 정하지 않는다.

scaler가 평균과 표준편차를 배우는 범위도 구별해야 한다. 학습 부분에 `fit`한 기준을 검증 부분에 그대로 `transform`한다. 검증 부분에서 새 평균을 구하는 방식은 같은 규칙을 적용한 평가가 아니다. [[machine-learning/logistic-loss-and-evaluation|Pipeline의 fit과 transform]]에 이 순서를 정리해 두었다.

## 질문: feature scaling을 하면 성능이 항상 좋아지는가?

**상황:** scaling이 학습을 돕는다는 설명을 듣고, 적용하면 예측 성능이 반드시 좋아지는지 확인했다.

**의도:** 학습 계산을 다루기 편하게 만드는 것과 새 데이터의 예측이 좋아지는 것을 나누려는 질문이다.

**핵심 답변:** 항상 좋아지지는 않는다. scaling은 feature의 단위와 범위가 거리나 학습 계산에 미치는 영향을 바꾼다. 이것이 필요한지는 모델과 데이터에 따라 다르며, 최종 예측 성능은 같은 검증 조건에서 확인한다.

예를 들어 거리 기반 방법에서는 숫자 범위가 큰 열이 거리를 크게 좌우할 수 있다. gradient를 이용하는 학습에서는 feature마다 크게 다른 척도가 optimization을 어렵게 만들 수 있다. 반면 값의 순서에 따라 분할하는 tree에서는 일반적인 standardization이 보통 필수는 아니다. scaling이 새로운 예측 정보를 만들어 내는 것도 아니다.

`StandardScaler`는 각 열에서 학습 평균을 빼고 학습 표준편차로 나눈다. 평균을 0, 표준편차를 1에 맞추는 것과 분포를 반드시 normal distribution으로 만드는 것은 다르다. 배열 계산은 [[data/numpy-broadcasting|feature별 standardization]]에서 확인할 수 있다. [scikit-learn의 standardization 설명](https://scikit-learn.org/stable/modules/preprocessing.html#standardization-or-mean-removal-and-variance-scaling)

## 질문: 보장되지 않는다면 언제 scaling을 하라고 판단해야 하는가?

**상황:** “항상 좋아지는 것은 아니다”라는 답 뒤에 판단 기준을 다시 물었다. 특정 모델 이야기보다 feature scaling 자체의 결론을 알고 싶다고 요청했다.

**의도:** 결과를 보고 결정하라는 말에 앞서, 무엇을 근거로 비교 후보를 골라야 하는지 알고 싶었다.

**핵심 답변:** 모델이 숫자의 크기를 어떻게 쓰는지와 feature의 단위가 얼마나 다른지 함께 본다. 단위 차이가 거리나 gradient 계산을 크게 좌우한다면 scaling을 적용한 구성을 우선 비교할 이유가 있다. 그 이유와 실제 성능 개선 여부는 별개의 판단이다.

같은 몸무게도 `70 kg`과 `70000 g`으로 쓸 수 있다. 정보는 같지만 숫자는 1000배 다르다. 다른 열과 거리를 계산할 때 이 숫자를 그대로 쓰면 몸무게의 영향이 단위 선택에 따라 달라질 수 있다.

gradient에도 입력 값이 들어간다. regularization을 제외한 binary logistic regression의 평균 cross-entropy에서는 j번째 weight의 gradient를 `mean((p - y) * x_j)`로 쓸 수 있다. 같은 `p - y`에서 `x_j`의 척도가 커지면 그 곱도 커진다. weight와 gradient는 다른 값이며, 실제 update 크기에는 learning rate도 관여한다. 식의 연결은 [[machine-learning/logistic-loss-and-evaluation|p-y와 weight의 gradient]]를 참고한다.

이 질문에서 정한 다음 행동은 다음과 같다.

1. 임의의 범주 코드인지 실제 수치인지 열의 뜻을 확인한다.
2. 사용할 모델이 거리, gradient, regularization에서 척도의 영향을 받는지 확인한다.
3. 영향을 받는 수치 열에 scaling을 적용한 후보를 만든다. 기준값은 학습 부분에서만 구한다.
4. 같은 데이터 분할과 평가 기준으로 비교한다. 점수를 보지 않고 개선됐다고 결론 내리지 않는다.

이 절차는 당시 제안받은 판단 기준이다. 여기서 특정 scaler나 learning rate의 최적값을 찾은 것은 아니다.

## 질문: 나이를 구간 번호로 줄이는 binning도 feature scaling인가?

**상황:** 나이를 몇 개 구간으로 나누면 숫자 범위가 줄어드는 점을 보고, 이것도 scaling이라고 이해해도 되는지 물었다.

**의도:** 출력 숫자가 작아지는 모습이 비슷해도 원래 정보에 생기는 변화가 같은지 확인하려는 질문이다.

**핵심 답변:** binning은 같은 구간의 서로 다른 값을 하나로 묶는다. 여기서 비교하는 단위 변경이나 standardization은 같은 규칙으로 척도를 바꾼다. 숫자 범위가 줄었다는 사실만으로 같은 작업은 아니다.

설명용으로 나이 `21, 29, 31`을 비교하면 차이가 보인다.

| 원래 나이 | 10으로 나눈 값 | 10살 구간의 번호 |
| ---: | ---: | ---: |
| 21 | 2.1 | 2 |
| 29 | 2.9 | 2 |
| 31 | 3.1 | 3 |

구간은 `[20, 30)`, `[30, 40)`처럼 정했다고 가정했다. 나눈 값 `2.1`, `2.9`는 10을 곱해 원래 값으로 돌아갈 수 있다. 구간 번호 `2`만 남으면 원래 나이가 21인지 29인지 알 수 없다. 구간 번호를 나중에 scaling해도 사라진 차이가 되살아나지 않는다.

표준편차가 0이 아닌 열의 standardization도 사용한 평균·표준편차를 알고 반올림 등으로 값을 잃지 않았다면 원래 값으로 되돌릴 수 있다. 다만 정보를 더 많이 보존했다는 사실만으로 예측이 항상 더 좋다고 할 수는 없다. 원래 값과 binning을 같은 조건에서 비교하자는 후속 제안은 [[learning/2026-10-19-titanic-validation|타이타닉 검증 기록]]에 이어진다.
