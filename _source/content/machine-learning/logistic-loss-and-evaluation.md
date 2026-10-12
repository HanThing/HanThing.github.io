---
title: "로지스틱 분류: 확률·로그 손실·기울기·평가의 구분"
description: p와 q, 점수 미분과 파라미터 기울기, softmax와 라벨 평가, Pipeline의 누수 방지를 실제 값으로 연결한다.
date: 2026-10-08
published: 2026-10-12
publish: true
draft: false
type: concept
courseId: machine-learning
lessonId: supervised-learning
topics: [머신러닝]
tags: [logistic-regression, cross-entropy, softmax, classification, pipeline]
sources:
  - 분류 손실과 회귀 오차 구분 학습 대화 (2026-10-08)
  - Q와 로그 손실 설명 학습 대화 (2026-10-08)
  - 문제 풀이 정보 찾기 분류 PRACTICE 학습 대화 (2026-10-08)
  - https://scikit-learn.org/stable/modules/generated/sklearn.metrics.log_loss.html
  - https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html
  - https://numpy.org/doc/stable/reference/generated/numpy.logaddexp.html
  - https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html
  - https://scikit-learn.org/stable/common_pitfalls.html
relatedReasons:
  learning/2026-10-08-logistic-loss: p-y를 b·w의 변화와 연결해 달라는 실제 질문의 흐름이다.
  learning/2026-10-08-wine-classification: 라벨·오류 위치·다중 클래스 평가와 Pipeline을 코드로 읽은 기록이다.
  machine-learning/linear-regression-gradient: 평균 기울기를 X.T @ error로 만드는 공통 구조를 설명한다.
---

**확률은 모델의 출력, 손실은 그 출력에 대한 벌점, 기울기는 파라미터를 바꿀 때 손실의 변화율이다.** 라벨과 평가 지표까지 이 구분을 유지하면 비슷하게 보이는 코드가 왜 다른 값을 반환하는지 설명할 수 있다.

## 모델에서 나오는 값과 정답으로 고르는 값

이진 분류에서 정답 y는 0 또는 1이다. 다음처럼 기호를 정한다.

$$z=b+\mathbf w^\top\mathbf x,\quad p=\sigma(z)=\frac1{1+e^{-z}}$$

| 값 | 뜻 | 계산에 정답 y가 필요한가? |
| --- | --- | --- |
| b, w | 학습으로 조정하는 파라미터 | 학습할 때 사용 |
| z | 확률로 바꾸기 전 점수 | 예측 시 필요 없음 |
| p | class 1의 예측 확률 | 필요 없음 |
| q | 모델이 실제 정답에 준 확률 | 필요 |
| -ln(q) | 한 샘플의 로그 손실 | 필요 |
| 예측 라벨 | 선택한 클래스 | 필요 없음 |

다음은 학습 대화의 숫자를 재계산한 예다.

```python
import numpy as np

y = np.array([1, 0, 1])
p = np.array([.8, .2, .1])
q = np.where(y == 1, p, 1-p)   # [.8, .8, .1]
row_loss = -np.log(q)         # [.223144, .223144, 2.302585]
loss = row_loss.mean()       # 약 .916291
label = (p >= .5).astype(int) # [1, 0, 0]
```

q는 모델의 예측 확률에서 정답 열을 고른 값이다. q≥.5를 예측 라벨로 쓰면 안 된다. 둘째 행은 q=.8이어도 정답과 예측 라벨은 0이다. 새 입력을 예측할 때는 y를 몰라 q를 고를 수도 없다.

이 코드의 p=.5 동점은 1로 처리한다. 임계값은 이 예제의 결정 규칙이며, 정밀도·재현율이나 오류 비용에 맞게 별도로 정할 수 있다. 다중 클래스에서는 모든 확률 중 최대인 클래스를 고르며, 최대 확률이 .5보다 작을 수도 있다.

## 로그 손실과 점수에서 직접 구하는 식

로그 손실은 정답 확률을 높일수록 작아진다. 독립으로 모델링한 표본의 정답 확률 곱을 최대화하는 목표를 로그의 합과 음수로 바꾸면 이 손실이 나온다. [scikit-learn log_loss](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.log_loss.html)

$$\ell=-\ln q=-y\ln p-(1-y)\ln(1-p)$$

시그모이드의 $p=e^z/(1+e^z)$를 대입하면 다음과 같다.

$$\ell=\ln(1+e^z)-yz$$

```python
def binary_loss(z, y):
    return np.mean(np.logaddexp(0, z) - y*z)
```

첫 인자는 확률 p가 아니라 **점수 z**다. z=2이면 ln(1+e²)≈2.126928이다. y=1이면 2를 빼 .126928, y=0이면 0을 빼 2.126928이 된다. 마지막 mean은 행별 손실을 스칼라로 바꾼다. `logaddexp`는 지수 값을 직접 크게 만든 뒤 더하는 수치 문제를 줄인다. [NumPy logaddexp](https://numpy.org/doc/stable/reference/generated/numpy.logaddexp.html)

확률을 먼저 만들어 `-log(q)`로 계산할 때 q=0이면 무한대가 된다. 실제 라이브러리의 확률 클리핑과 점수 기반 안정화는 수치 구현상의 처리이므로 수학의 정의와 구분한다. 손실이 이미 음수가 아니라는 이유만으로 로그를 선택한 것은 아니며, 로그 손실을 제곱하면 다른 목적함수가 된다.

## p-y는 무엇을 미분한 값인가?

$$
\frac{\partial\ell}{\partial p}
=-\frac yp+\frac{1-y}{1-p}
=\frac{p-y}{p(1-p)}
$$

$$
\frac{\partial p}{\partial z}=p(1-p)
\quad\Longrightarrow\quad
\frac{\partial\ell}{\partial z}=p-y
$$

이것은 한 샘플의 **점수에 대한 미분**이다. z=b+wx라면 실제 파라미터까지 연쇄법칙을 한 번 더 적용한다.

$$
\frac{\partial\ell}{\partial b}=p-y,\qquad
\frac{\partial\ell}{\partial w}=x(p-y)
$$

샘플 n개의 평균 손실에서는 각각 합을 n으로 나눈다. 편향을 포함한 설계행렬 D와 theta=[b,w]를 쓰면 다음 코드가 된다.

```python
x = np.array([-1., 0., 1.])
y = np.array([0., 0., 1.])
D = np.c_[np.ones(3), x]         # (3,2)
theta = np.zeros(2)              # (2,)
z = D @ theta                   # [0,0,0], (3,)
p = 1 / (1 + np.exp(-z))         # [.5,.5,.5]
score_gradient = p - y          # [.5,.5,-.5], (3,)
parameter_gradient = D.T @ score_gradient / len(y)
# [1/6, -1/3], (2,)
theta_next = theta - .3 * parameter_gradient
# [-.05,.1]
```

현재 b 미분이 +1/6이므로 b를 조금 늘리면 평균 손실은 증가한다. w 미분은 -1/3이므로 w를 조금 늘리면 감소한다. 첫 샘플에서 p-y는 +.5지만 x=-1을 곱한 w 기여는 -.5다. **p-y의 부호를 곧바로 개별 w의 갱신 방향이라고 읽지 않는다.**

`D.T@(p-y)`는 [0.5,-1.0]이다. 여기에 mean을 적용하면 -.25라는 스칼라가 되어 두 파라미터를 섞는다. 필요한 것은 각각을 샘플 수 3으로 나누는 것이다. [[machine-learning/linear-regression-gradient|회귀의 반 MSE 기울기]]와 행렬 구조는 같고, 점수 미분에 들어가는 값이 달라진다.

## 클래스가 세 개면 softmax와 one-hot을 쓴다

클래스 번호는 이름표이고 점수는 그 입력에 대한 모델 계산값이다. 범주 자체의 등급이 아니다. 클래스별 점수 z=[1,2,0]을 softmax로 바꾸면 확률은 약 [.244728,.665241,.090031]이다.

$$p_k=\frac{e^{z_k}}{\sum_j e^{z_j}}$$

모든 점수에서 같은 상수를 빼면 확률은 유지된다. 최댓값을 빼는 구현은 큰 양수의 지수 계산을 피한다. 예측은 확률 최댓값의 클래스지만, 손실은 실제 정답의 확률을 선택한다. 정답이 class 0이면 손실은 -ln(.244728)≈1.407606이다.

소프트맥스와 한 정답의 교차 엔트로피에서 점수별 미분은 다음과 같다. 여기서 y는 클래스 번호 스칼라가 아니라 정답을 1로 표시한 **one-hot 벡터**다.

$$\frac{\partial\ell}{\partial z_k}=p_k-y_k$$

예측 [.7,.2,.1], 정답 [1,0,0]이면 미분은 [-.3,.2,.1]이다. 두 오답의 정답값은 모두 0이어도 예측 확률은 다를 수 있다. 정답 확률 .7을 유지한 채 나머지 .3의 배분을 바꾸면 그 행의 손실값은 같지만 각 점수에 대한 미분은 달라진다.

전체 배치에서는 `D:(n,d)`, `W:(d,K)`, `Z=D@W:(n,K)`로 둘 수 있다. `P-Y`는 점수 미분 행렬 (n,K)이고 실제 파라미터 기울기는 `D.T@(P-Y)/n`, shape (d,K)다. 이 행렬 표기는 학습 대화의 점수 미분을 확장한 보충 설명이다.

## 확률 평가와 라벨 평가

`predict_proba`의 열은 `classes_` 순서다. `[:,1]`이 항상 숫자 라벨 1이라는 뜻은 아니므로 클래스 목록을 확인한다. `LogisticRegression.score`는 기본적으로 정확도이며 로그 손실이 아니다. [LogisticRegression 문서](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html)

양성을 class 1로 정한 이진 분류의 구분은 다음과 같다.

| 실제 정답 | 예측 | 구분 |
| --- | --- | --- |
| 1 | 1 | TP |
| 0 | 1 | FP |
| 1 | 0 | FN |
| 0 | 0 | TN |

정확도는 (TP+TN)/전체, 정밀도는 TP/(TP+FP), 재현율은 TP/(TP+FN)다. 불리언 조건의 `sum`은 개수를, `flatnonzero`는 조건을 만족하는 위치를 반환한다. 해당 분모가 0인 상황에서는 지표 함수의 zero_division 설정과 해석을 확인한다.

다중 클래스 혼동행렬은 클래스 수×클래스 수이며 scikit-learn에서는 행이 정답, 열이 예측이다. 한 클래스씩 양성, 나머지를 음성으로 두어 TP·FP·FN·TN을 구할 수 있다. macro F1은 클래스별 F1을 같은 비중으로 평균 낸다. [confusion_matrix 문서](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html)

정확도가 같아도 정답에 준 확률이 다르면 로그 손실은 달라진다. 전부 다수 클래스로만 예측하는 모델은 정확도가 높아도 소수 클래스 재현율이 0일 수 있다.

## Pipeline의 fit과 transform을 분리한다

`make_pipeline(StandardScaler(), LogisticRegression(...))`은 실행 순서를 묶는 객체를 만든다. 학습 데이터로 fit할 때 scaler가 평균·표준편차를 구하고 변환한 뒤 모델을 학습한다. 평가할 때는 그 평균·표준편차를 **재사용**해 transform하고 예측한다.

분할 전에 전체 데이터로 scaler를 fit하거나 평가 자료로 다시 fit하면 평가 정보가 전처리에 들어갈 수 있다. Pipeline도 전체 데이터를 fit에 넣으면 이를 자동으로 막아 주지 않는다. **분할 뒤 학습 부분만 fit에 전달하는 사용 방식**이 필요하다. [scikit-learn의 데이터 누수와 Pipeline](https://scikit-learn.org/stable/common_pitfalls.html)

## 퀴즈: q로 예측 라벨을 결정하면 왜 틀리는가?

새로 만든 보충 문제다. class 1 확률 p=.2, 실제 정답 y=0이고 이진 예측 규칙은 p≥.5이면 1이다. q, 로그 손실, 예측 라벨을 각각 구하라. `(q>=.5)`를 정수로 바꾼 값은 무엇을 잘못 표현하는가?

<details>
<summary>정답과 해설</summary>

q=1-.2=.8, 손실은 -ln(.8)≈.223144, 예측 라벨은 0이다. q≥.5는 참이므로 정수1이지만 이는 class 1을 고른 것이 아니라 실제 정답에 절반 이상 확률을 줬다는 표시다. q를 만들 때 이미 y를 사용했다는 점도 새 데이터 예측과 맞지 않는다.

</details>

## 퀴즈: p-y가 양수면 w를 줄여야 하는가?

새로 만든 보충 문제다. 샘플 하나에 x=-2, y=0, p=.8이고 z=b+wx다. 로그 손실을 z, b, w로 미분한 값을 각각 구하고 경사하강법에서 w가 어느 쪽으로 움직이는지 설명하라.

<details>
<summary>정답과 해설</summary>

점수 미분은 p-y=.8, b 미분도 .8, w 미분은 x(p-y)=-1.6이다. 양의 학습률로 음수 기울기를 빼므로 w는 증가한다. x가 음수라 w를 늘리면 점수가 낮아지고 class 1 확률이 낮아지는 방향이다. 따라서 p-y만 보고 w의 부호를 정할 수 없다.

</details>

실제 후속 질문은 [[learning/2026-10-08-logistic-loss|로그 손실 학습 기록]]과 [[learning/2026-10-08-wine-classification|Wine 실습 기록]]에서 이어 읽을 수 있다.
