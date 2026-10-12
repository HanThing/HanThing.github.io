---
title: "선형 회귀의 기울기: 손실 정의에서 X.T @ error까지"
description: 반 MSE의 미분을 실제 값과 shape으로 유도하고, 편향 열·평균 축·최소제곱·평가를 구분한다.
date: 2026-10-07
published: 2026-10-12
publish: true
draft: false
type: concept
courseId: machine-learning
lessonId: supervised-learning
topics: [머신러닝]
tags: [linear-regression, gradient-descent, numpy, matrix]
sources:
  - 회귀 SSE·오차 부호 학습 대화 (2026-10-02)
  - dW·db와 회귀 LAB 학습 대화 (2026-10-07)
  - 회귀 코드 진단 학습 대화 (2026-10-08)
  - https://numpy.org/doc/stable/reference/generated/numpy.matmul.html
  - https://numpy.org/doc/stable/user/basics.broadcasting.html
  - https://numpy.org/doc/stable/reference/generated/numpy.linalg.lstsq.html
  - https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html
relatedReasons:
  learning/2026-10-07-regression-gradient: 이 식을 읽으면서 생긴 실제 후속 질문과 코드 진단을 보존한 기록이다.
  data/numpy-linear-layers: 행렬곱으로 가중치와 편향을 적용하는 계산을 복습한다.
  machine-learning/logistic-loss-and-evaluation: 같은 행렬 구조가 로지스틱 회귀의 파라미터 기울기로 이어진다.
---

`X.T @ error / n`은 **샘플마다 생긴 오차를 파라미터별로 모아 평균 내는 계산**이다. 왜 전치하고 무엇으로 나누는지는 손실 함수를 먼저 쓰면 드러난다. 아래 예시는 학습 대화의 작은 배열을 재구성한 것이며, 사용자의 과제 실행 결과는 아니다.

## 손실을 먼저 정한다

한 특성의 회귀를 $\hat y_i=b+wx_i$, 오차를 $e_i=\hat y_i-y_i$로 정하자.

| 목적함수 | 정의 | w로 미분한 값 |
| --- | --- | --- |
| SSE | $\sum_i e_i^2$ | $2\sum_i e_ix_i$ |
| MSE | $\frac1n\sum_i e_i^2$ | $\frac2n\sum_i e_ix_i$ |
| 반 MSE | $\frac1{2n}\sum_i e_i^2$ | $\frac1n\sum_i e_ix_i$ |

상수 배수만 달라 정규화 항이 없는 고정 데이터에서는 최소화하는 파라미터가 같지만, 같은 학습률의 갱신 폭은 달라진다. “2를 생략해도 된다”는 말보다 **어느 손실을 미분했는지**를 명시한다. 여기서는 반 MSE를 쓴다.

$$
\frac{\partial J}{\partial w}
=\frac1{2n}\sum_i 2e_i\frac{\partial(b+wx_i-y_i)}{\partial w}
=\frac1n\sum_i e_ix_i
$$

$$\frac{\partial J}{\partial b}=\frac1n\sum_i e_i$$

w는 x와 곱해져 예측에 들어가므로 x가 남는다. b는 그대로 더해지므로 미분값 1이 곱해진다. 기울기는 현재 파라미터 근처의 손실 변화율이다. 큰 폭의 갱신 뒤에도 같은 변화율이 유지된다는 뜻은 아니다.

## 편향까지 한 벡터로 묶는다

```python
import numpy as np

x = np.array([0., 1., 2.])
y = np.array([1., 3., 5.])
Xb = np.c_[np.ones(len(x)), x]
theta = np.array([0., 0.])  # b, w

prediction = Xb @ theta
error = prediction - y
gradient = Xb.T @ error / len(y)
new_theta = theta - 0.1 * gradient
new_prediction = Xb @ new_theta
new_half_mse = np.mean((new_prediction - y) ** 2) / 2
```

실제 중간값은 다음과 같다.

```text
Xb = [[1,0], [1,1], [1,2]]        (3,2)
theta = [0,0]                      (2,)
prediction = [0,0,0]               (3,)
error = [-1,-3,-5]                 (3,)
Xb.T @ error = [-9,-13]            (2,)
gradient = [-3,-4.333333]          (2,)
new_theta = [0.3,0.433333]         (2,)
new_prediction = [0.3,0.733333,1.166667]
new_half_mse ≈ 3.387037
```

처음 반 MSE는 (1+9+25)/6=5.833333이다. 새 값은 **새 theta로 예측부터 다시 만들어** 구했다. 이전 error를 재사용하면 갱신 후 손실을 평가한 것이 아니다.

1의 열은 `[1,x]@[b,w]=b+xw`를 만들기 위한 장치다. b를 별도로 더해도 된다. 기본 `LinearRegression`은 자체 절편을 쓰므로 원래 특성 X를 전달하는 방식과 구별한다. [scikit-learn LinearRegression](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html)

## 왜 X.T인가: 어느 축을 더하는지 본다

예측의 한 행은 `b*1+w*x_i`다. 한 샘플의 여러 특성을 더한다. 반면 gradient의 j번째 값은 `sum_i Xb[i,j]*error[i]/n`이다. 한 파라미터의 여러 샘플 기여를 더한다.

| 샘플 x | 오차 | b 미분 기여 | w 미분 기여 |
| ---: | ---: | ---: | ---: |
| 0 | -1 | -1×1=-1 | -1×0=0 |
| 1 | -3 | -3×1=-3 | -3×1=-3 |
| 2 | -5 | -5×1=-5 | -5×2=-10 |
| 합 | | -9 | -13 |
| 샘플 평균 | | -3 | -13/3 |

전치하면 각 특성 열이 행이 되어 모든 샘플의 오차와 내적할 수 있다. 따라서 `Xb.T @ error`의 결과에는 이미 샘플 합이 들어 있다. 이 벡터에 `np.mean`을 적용하면 파라미터들을 섞는다. 필요한 것은 샘플 수로 나누는 것이다.

```python
gradient_a = Xb.T @ error / len(y)
gradient_b = np.mean(Xb * error[:, None], axis=0)
# 두 식 모두 [-3., -4.33333333]
```

두 번째 식은 행별 미분 기여를 (3,2)로 펼친 뒤 샘플 축을 평균 낸다. 파라미터의 의미가 다른 두 열은 그대로 남긴다.

## shape이 맞는 것과 뜻이 맞는 것은 별도다

`Xb:(n,d)`와 `theta:(d,)`의 행렬곱은 `(n,)`이다. 1차원 오른쪽 피연산자를 계산상 열로 다룬 뒤 그 차원을 결과에서 없애는 NumPy 규칙이다. 명시적으로 `(d,1)`을 넣으면 결과는 `(n,1)`이다. [NumPy matmul](https://numpy.org/doc/stable/reference/generated/numpy.matmul.html)

`*`는 원소별 곱이다. `Xb*theta`는 `(n,d)`를 남기므로 그 자체가 샘플별 예측은 아니다. 또한 `(n,)`에서 `(n,1)`을 빼면 같은 위치끼리만 비교하지 않고 `(n,n)`으로 브로드캐스팅될 수 있다. [NumPy broadcasting](https://numpy.org/doc/stable/user/basics.broadcasting.html)

설명용 `[2,4,6]`과 열벡터 `[[1],[3],[5]]`의 차이는 다음과 같다.

```text
[[ 1, 3, 5],
 [-1, 1, 3],
 [-3,-1, 1]]
```

이 문제에서 원하는 오차 `[1,1,1]`은 양쪽을 `(3,)`로 비교할 때 나온다. `len(error)==len(y)`만 확인해서는 이 오류를 잡지 못한다.

## 최소제곱·학습 API·성능 평가를 나눈다

최소제곱은 제곱오차를 작게 만드는 목표이며, 경사하강법은 그것을 푸는 방법 중 하나다. `np.linalg.lstsq`는 선형 최소제곱 문제의 해와 잔차 정보·rank·특이값을 반환한다. [NumPy lstsq](https://numpy.org/doc/stable/reference/generated/numpy.linalg.lstsq.html)

fit은 모델의 학습 메서드 이름이며 항상 경사하강법을 뜻하지 않는다. 평균만 저장하는 기준 모델도 fit을 제공한다. 구현 두 개의 예측 차이가 작다는 검사는 정답과의 오차가 작다는 뜻도 아니다. 학습에 쓰지 않은 입력으로 예측하고 그 정답과 비교하는 평가를 따로 한다.

## 퀴즈: mean은 어느 축에 적용해야 하는가?

새로 만든 보충 문제다. 반 MSE를 사용하고 샘플은 4개, theta=[b,w]다. `Xb.T @ error`가 `[8,-4]`이면 파라미터 기울기는 무엇인가? `np.mean([8,-4])`는 왜 맞지 않는가?

<details>
<summary>정답과 해설</summary>

기울기는 [2,-1]이다. 각 파라미터에 대한 샘플 합을 4로 나눈다. mean을 쓰면 (8-4)/2=2라는 스칼라가 되어 b와 w의 미분을 합쳐 버린다.

</details>

## 퀴즈: shape만으로 의도한 오차인지 확인할 수 있는가?

새로 만든 보충 문제다. 예측은 `np.array([2.,4.])`, 정답은 `np.array([[1.],[3.]])`이다. 뺄셈 결과와 shape을 쓰고, 샘플별 오차 두 개를 얻으려면 무엇을 맞춰야 하는지 설명하라.

<details>
<summary>정답과 해설</summary>

결과는 `[[1,3],[-1,1]]`, shape은 (2,2)다. 예측 (2,)가 (1,2)처럼, 정답이 (2,1)로 확장돼 모든 조합을 비교한다. 양쪽을 (2,)로 맞추면 [1,1]이 나온다. 코드를 실행할 수 있다는 사실만으로 샘플의 짝이 맞다고 볼 수 없다.

</details>

실제 질문의 흐름은 [[learning/2026-10-07-regression-gradient|회귀 학습 기록]]에, 분류로 이어지는 미분은 [[machine-learning/logistic-loss-and-evaluation|로지스틱 손실과 평가]]에 있다.

행렬곱으로 가중치와 편향을 적용하는 계산은 [[data/numpy-linear-layers|선형층]]에서 함께 확인한다.
