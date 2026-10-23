---
title: "위클리 페이퍼 #5 — vanishing gradient 확인과 zero_grad의 역할"
description: 20층 sigmoid 모델의 layer.weight.grad를 직접 비교하고, PyTorch의 gradient 누적이 update에 미치는 영향을 정리한다.
date: 2026-10-23
publish: true
draft: false
type: weekly
courseId: pytorch
lessonId: deep-learning-basics
topics: [PyTorch]
tags: [weekly-paper, pytorch, backpropagation, gradient, sigmoid]
sources:
  - 위클리 페이퍼 5회차 공지의 두 문항 (학습 대화에 제공된 원문, 2026-10-23 정리)
  - 위클리 페이퍼 5회차 답변·피드백과 20층 sigmoid 설명용 실험
  - https://docs.pytorch.org/docs/stable/generated/torch.Tensor.backward.html
  - https://docs.pytorch.org/docs/stable/generated/torch.optim.Optimizer.zero_grad.html
  - https://docs.pytorch.org/docs/stable/generated/torch.nn.Sigmoid.html
  - https://docs.pytorch.org/docs/stable/generated/torch.nn.ReLU.html
relatedReasons:
  machine-learning/linear-regression-gradient: chain rule로 loss를 weight에 대해 미분하는 과정과 연결한다.
  weekly/2026-10-08-learning-rate-and-classification: gradient와 learning rate가 update 크기에 함께 관여한다는 점을 복습한다.
---

첫 번째 질문에서는 sigmoid라는 조건을 보고 vanishing gradient를 의심했다. 하지만 원인을 예상하는 것과 실제로 확인하는 것은 달랐다. 그래서 20층 모델을 만들어 `layer.weight.grad`를 확인하는 설명용 실험을 요청했고, 화면에서 input layer에 가까워질수록 gradient가 작아지는 모습을 확인했다.

두 번째 질문에서는 `.backward()`가 gradient를 누적한다는 점을 설명했다. 답변을 다듬는 과정에서 초기화하는 단위와 update 방향을 더 정확하게 구분했다. 아래 문항은 대화에 제공된 공지를 바탕으로 기술 용어 표기를 다듬었다. 질문의 의도는 학습 대화 맥락을 정리한 것이다.

## 질문: 20층 sigmoid 모델에서 input layer 근처의 weight가 거의 바뀌지 않는다면?

**상황:** 20층 DNN의 activation function으로 sigmoid를 사용했다. output layer 근처는 잘 학습되는데 input layer 근처의 weight는 몇 epoch가 지나도 거의 그대로다. 어떤 원인을 의심하고, 어떻게 확인하고 해결할지 묻는 문제다.

**의도:** weight update가 작다는 현상을 gradient의 전달 과정과 연결하고, 추측을 실제 측정으로 확인하려는 질문이다.

**핵심 답변:** 먼저 **vanishing gradient**를 의심한다. `loss.backward()` 직후 layer별 `weight.grad`의 크기를 비교해 input layer 쪽에서 매우 작아지는지 확인한다. 그다음 hidden layer의 sigmoid를 ReLU 계열로 바꾸는 등의 방법을 적용하고 같은 조건에서 gradient와 loss 변화를 비교한다.

### sigmoid의 derivative가 작으면 왜 문제가 될까?

sigmoid를 σ라고 하면 derivative는 `σ(z) × (1−σ(z))`이고 최대값은 **0.25**다. 입력의 절댓값이 커져 output이 0이나 1에 가까워지는 saturation 영역에서는 derivative가 더 작아진다. [PyTorch Sigmoid 정의](https://docs.pytorch.org/docs/stable/generated/torch.nn.Sigmoid.html)

backpropagation은 chain rule로 각 연산의 derivative를 연결한다. 깊은 모델에서 작은 값이 반복해서 곱해지면 input layer까지 전달되는 gradient가 매우 작아질 수 있다. 기본 SGD에서는 다음 관계가 성립한다.

$$
\Delta w=-\eta\frac{\partial L}{\partial w}
$$

gradient가 작으면 같은 learning rate η에서도 weight update가 작다. 이것이 처음 문제의 현상과 연결된다. 다만 실제 gradient에는 weight와 다른 연산의 derivative도 들어가므로, **20층이라는 이유만으로 전체 gradient가 정확히 0.25²⁰이라고 계산할 수는 없다.**

### 질문이 남았던 부분: backpropagation에 왜 weight가 곱해질까?

처음에는 “forward 계산을 미분하는 것인데 weight가 다시 곱해지는가?”가 헷갈렸다. scalar 두 layer를 쓰면 구분이 된다.

```text
z1 = w1*x + b1
 a1 = sigmoid(z1)
z2 = w2*a1 + b2
 L = L(z2)
```

$$
\frac{\partial L}{\partial w_1}
=\frac{\partial L}{\partial z_2}
\times w_2\times\sigma'(z_1)\times x
$$

`z1`을 자기 weight `w1`로 미분하면 `x`가 남는다. 한편 다음 layer의 `z2`를 `a1`로 미분하면 **w2가 남는다.** weight를 임의로 다시 곱하는 것이 아니라, chain rule에 들어가는 local derivative 자체가 weight인 것이다. [[machine-learning/linear-regression-gradient|loss를 weight로 미분하는 과정]]과 같은 원리다.

### 어떻게 확인했나: backward 다음에 .grad 읽기

```python
optimizer.zero_grad(set_to_none=True)
prediction = model(x)
loss = criterion(prediction, y)
loss.backward()

for name, layer in model.named_modules():
    if isinstance(layer, torch.nn.Linear):
        grad = layer.weight.grad
        if grad is None:
            print(name, "gradient 없음")
        else:
            print(name, grad.abs().mean().item())

optimizer.step()
```

이 코드는 일반적인 모델에서 확인할 위치를 보여 주는 예시다. **`backward()` 이후, 다음 `zero_grad()` 이전**에 읽는다. 양수와 음수가 상쇄되지 않도록 단순 평균 대신 absolute value의 평균을 사용한다. `.grad is None`은 작은 gradient를 측정한 것이 아니므로, 계산 경로 연결과 `requires_grad` 설정 등을 별도로 확인해야 한다.

실제로 실행한 설명용 모델의 조건은 다음과 같다.

- `Linear(4, 4)` 20개, 각 layer 뒤에 sigmoid 적용. 마지막 layer에도 sigmoid를 썼다.
- Xavier uniform initialization, bias 0, seed 5, CPU·float64, PyTorch 2.14.0.
- random input 8×4, target은 모두 0, MSE loss, SGD의 learning rate 0.1.
- 한 번의 forward·backward와 한 번의 `optimizer.step()`을 실행했다.

| layer | mean absolute gradient |
| --- | ---: |
| L01 — input 근처 | 2.443 × 10⁻¹⁵ |
| L05 | 1.142 × 10⁻¹² |
| L10 | 1.027 × 10⁻⁸ |
| L15 | 1.375 × 10⁻⁵ |
| L20 — output 근처 | 1.999 × 10⁻² |

L20의 값은 L01보다 약 **8.18 × 10¹²배** 컸다. 한 번의 step 뒤 측정한 mean absolute weight change도 L01은 약 2.475 × 10⁻¹⁶, L20은 약 1.999 × 10⁻³이었다. 아주 작은 update에는 floating-point rounding 영향이 있다.

이 예에서는 gradient가 정확히 0이 아니어도 input 쪽 update가 사실상 매우 작았다. 따라서 “0인 layer를 찾는다”보다 **layer별 크기와 실제 update를 비교한다**가 더 정확한 확인 방법이다. 실제 학습 모델에서는 여러 batch와 step에 걸쳐 같은 패턴이 반복되는지도 확인한다. 한 번의 작은 gradient만으로 원인을 단정하지 않는다.

### 어떻게 해결할 것인가?

우선 hidden layer의 sigmoid를 **ReLU 또는 Leaky ReLU**로 바꾸어 비교하겠다. ReLU는 양수 영역에서 derivative가 1이므로 sigmoid처럼 그 영역에서 매번 0.25 이하가 곱해지는 문제를 줄인다. 음수 영역에서는 derivative가 0이므로 모든 gradient 문제를 해결하는 보장은 없다. [PyTorch ReLU 정의](https://docs.pytorch.org/docs/stable/generated/torch.nn.ReLU.html)

output activation은 task와 loss에 맞춰 선택한다. 모든 sigmoid를 무조건 ReLU로 바꾸는 것은 아니다. initialization도 activation에 맞게 점검하고, 깊은 모델에서는 normalization이나 residual connection 같은 구조적 방법도 검토할 수 있다. learning rate만 크게 올리면 output 쪽 update까지 커질 수 있으므로 원인 확인 없이 해결책으로 삼지 않는다. [[weekly/2026-10-08-learning-rate-and-classification|learning rate의 역할]]과도 연결된다.

이번에는 **vanishing gradient를 관찰하는 실험까지** 했다. ReLU 교체 전후의 성능 비교나 여러 epoch의 학습 개선은 아직 측정하지 않았다.

## 질문: optimizer.zero_grad()를 빼먹으면 왜 loss가 이상하게 튈까?

**상황:** PyTorch 학습 loop에서 `optimizer.zero_grad()`를 빠뜨렸더니 loss가 잘 줄지 않고 튀었다. 이 함수의 역할과 생략했을 때의 문제를 설명하는 문항이다.

**의도:** gradient 계산, 저장, parameter update가 각각 어떤 단계에서 일어나는지 구분하려는 질문이다.

**핵심 답변:** PyTorch의 `.backward()`는 새 gradient를 기존 parameter의 `.grad`에 **누적해서 더한다.** `optimizer.zero_grad()`는 optimizer가 관리하는 parameter들의 gradient를 초기화한다. 이를 생략하면 이전 batch에서 계산한 값까지 이번 update에 사용하므로, 의도한 update 크기와 방향이 달라질 수 있다. [Tensor.backward](https://docs.pytorch.org/docs/stable/generated/torch.Tensor.backward.html), [Optimizer.zero_grad](https://docs.pytorch.org/docs/stable/generated/torch.optim.Optimizer.zero_grad.html)

### 한 번의 update에서 각각 하는 일

```python
for epoch in range(num_epochs):
    for x, y in train_loader:
        optimizer.zero_grad(set_to_none=True)
        prediction = model(x)
        loss = criterion(prediction, y)
        loss.backward()
        optimizer.step()
```

- `zero_grad()`는 이전 gradient를 비운다. 학습된 weight를 초기화하는 함수가 아니다. 위 설정은 `.grad`를 `None`으로 만든다.
- `backward()`는 현재 loss로부터 gradient를 계산해 `.grad`에 누적한다.
- `step()`은 저장된 gradient를 이용해 parameter를 update한다. 이 호출이 `.grad`를 자동으로 비워 주지는 않는다.

처음 답변에서는 “epoch마다 초기화한다”고 말했다. 그러나 일반적인 mini-batch 학습에서는 **각 batch의 update에 사용할 gradient를 새로 계산하기 전에** 초기화한다. epoch 시작 때만 비우면 그 epoch 안에서는 이전 batch의 gradient가 계속 남는다.

### 누적되면 크기뿐 아니라 방향도 달라질 수 있다

설명용 숫자로, 이전 gradient가 `+3`이고 현재 batch의 gradient가 `−1`이라고 하자. 초기화했다면 `.grad`는 `−1`이지만, 초기화하지 않았다면 `+3 + (−1) = +2`가 된다.

기본 SGD의 update는 `−learning_rate × gradient`다. 현재 gradient만 쓰면 weight를 늘리지만, 누적된 값을 쓰면 weight를 줄인다. 이전 gradient는 이전 parameter 위치와 이전 batch에서 계산했을 수 있으므로 현재 loss를 줄이는 데 적절한 방향이라는 보장이 없다.

여기서 **gradient는 현재 위치에서 loss가 가장 가파르게 증가하는 방향**이다. 기본 gradient descent는 그 반대 방향을 사용한다. 유한한 step에서 loss가 항상 줄어든다는 보장은 없고 learning rate도 영향을 준다. Momentum이나 Adam은 update 규칙에 추가 상태가 들어가므로 위 식은 기본 SGD를 설명한 것이다.

누적은 크기를 무조건 키우는 것도 아니다. 부호에 따라 서로 상쇄될 수 있다. 따라서 “반드시 발산한다”보다 **update의 크기와 방향이 의도와 달라져 loss가 진동하거나 발산할 수 있다**고 설명하는 것이 정확하다. 방향과 크기 중 어느 쪽이 항상 더 큰 문제라고 단정할 필요도 없다.

### gradient accumulation을 의도했다면?

여러 mini-batch의 gradient를 모아 한 번에 update하는 학습 방식도 있다. 이때는 정해 둔 누적 구간의 시작에서 초기화하고, loss scaling과 step 시점을 맞춘다. 그러므로 초기화 생략이 언제나 오류인 것은 아니다. 이 문항의 문제는 **batch마다 update하려던 loop에서 이전 gradient를 의도치 않게 계속 사용한 것**이다.

2번은 동작 원리와 올바른 loop를 정리했다. `zero_grad()` 유무에 따른 loss curve 비교 실험은 이번 대화에서 실행하지 않았다.
