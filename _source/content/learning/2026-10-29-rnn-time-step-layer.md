---
title: "RNN의 time step과 layer: 반복과 쌓기를 구분하기"
description: RNN을 이전 상태를 기억하는 Linear Regression으로 보아도 되는지 묻고, 같은 layer의 시간 반복과 서로 다른 layer의 연결을 구별한다.
date: 2026-10-29
publish: true
draft: false
type: journal
courseId: deep-learning
lessonId: rnn-lstm-review
topics: [딥러닝]
tags: [rnn, time-step, layer, hidden-state, affine]
sources:
  - 부트캠프 RNN 학습 대화 (2026-10-29)
  - https://docs.pytorch.org/docs/stable/generated/torch.nn.RNN.html
relatedReasons:
  learning/2026-10-26-rnn-lstm-state: 같은 parameter를 시간에 걸쳐 반복 사용하는 unfolding에서 출발해 layer 축을 따로 구분한다.
  data/numpy-linear-layers: weight와 bias로 출력을 만드는 affine transformation과 여러 layer의 연결을 복습한다.
---

2026년 10월 29일 RNN의 입력 순서를 살펴보다가 “이전 상태를 기억하는 Linear Regression이 내부에서 계산되는 것인가?”라고 물었다. 이어 layer라는 개념이 이해되지 않는다고 말했고, 더 쉬운 설명을 요청했다.

아래 의도는 대화 맥락을 바탕으로 정리했다. 숫자와 그림은 계산 관계를 보이기 위한 설명용 예시다. 직접 모델을 학습하거나 이해를 독립적으로 적용한 결과는 확인하지 않았다.

## 질문: RNN 내부에서는 이전 상태를 기억하는 Linear Regression이 계산되는가?

**상황:** 현재 입력뿐 아니라 이전 hidden state도 다음 계산에 들어간다는 설명을 듣고, 이를 이전 상태를 기억하는 Linear Regression이라고 표현했다.

**의도:** 익숙한 weight·bias 계산으로 RNN의 내부 연산을 이해하려는 질문이다.

**핵심 답변:** 현재 입력과 이전 hidden state를 weight로 조합한다는 연결은 맞다. 다만 기본 RNN의 hidden state 갱신은 affine transformation 뒤에 nonlinear activation을 적용하는 연산이다. 이 계산 자체를 Linear Regression 모델이라고 부르지는 않는다.

기본 `tanh` RNN의 한 layer를 다음처럼 적을 수 있다.

$$h_t=\tanh(W_xx_t+W_hh_{t-1}+b)$$

`x_t`는 현재 입력, `h_{t-1}`은 이전 hidden state, `h_t`는 갱신된 hidden state다. `W_x`, `W_h`는 weight이고 `b`는 bias다. bias까지 더한 괄호 안의 계산을 affine transformation이라고 한다. Linear Regression은 보통 입력에서 연속적인 target을 예측하는 모델을 뜻한다. RNN의 이 식은 다음 계산에 전달할 state를 만든다.

scalar만 쓰는 설명용 예에서 `x_t=2`, `h_{t-1}=0.5`, `W_x=0.3`, `W_h=0.8`, `b=0`이면 괄호 안은 `0.3×2+0.8×0.5=1`이다. 여기에 `tanh`를 적용한 새 state는 약 `0.762`다. 괄호 안의 값 1과 최종 state는 다르다.

[PyTorch RNN 문서](https://docs.pytorch.org/docs/stable/generated/torch.nn.RNN.html)는 기본 activation이 `tanh`이고 `relu`도 선택할 수 있다고 명시한다. 문서의 입력 쪽 bias와 hidden state 쪽 bias는 위 식에서 하나의 `b`로 합쳐 적었다. hidden state가 곧 최종 예측값이라는 뜻도 아니다. 예측에는 목적에 맞는 output layer 등을 연결할 수 있다.

## 질문: RNN에서 layer라는 개념이 이해되지 않는다

**상황:** 이전 state를 받아 다음 state를 만드는 과정을 따라가다가 layer가 무엇인지 물었다. 시간에 따른 반복과 layer를 쌓는 구조를 구별하는 설명이 필요했다.

**의도:** 계산 그림에서 무엇이 같은 layer의 반복이고 무엇이 별도의 layer인지 확인하려는 질문이다.

**핵심 답변:** time step은 sequence에서 몇 번째 입력을 처리하는지를 나타낸다. layer는 입력을 받아 결과를 만드는 연산 단위다. RNN layer 하나로 세 입력을 처리하면 같은 layer를 세 time step에 걸쳐 사용하는 것이다. 세 입력을 처리했다고 layer가 세 개 생기지 않는다.

두 RNN layer를 쌓으면 두 방향을 따로 읽어야 한다. 아래 그림은 한 방향으로 처리하는 기본 stacked RNN의 설명용 구조다.

```text
                    time step 1    time step 2    time step 3
layer 2              h₁⁽²⁾ ─────→ h₂⁽²⁾ ─────→ h₃⁽²⁾
                       ↑             ↑             ↑
layer 1              h₁⁽¹⁾ ─────→ h₂⁽¹⁾ ─────→ h₃⁽¹⁾
                       ↑             ↑             ↑
입력                   x₁            x₂            x₃
```

오른쪽으로는 같은 layer의 hidden state가 다음 time step으로 전달된다. 위쪽으로는 아래 layer의 현재 출력을 위 layer가 입력으로 받는다. `h_t⁽ˡ⁾`의 `t`는 time step, `l`은 layer 번호이며 제곱이 아니다.

| 구분 | time step이 늘 때 | layer를 쌓을 때 |
| --- | --- | --- |
| 달라지는 것 | 현재 입력과 이전 hidden state | 입력을 처리하는 layer와 그 parameter 묶음 |
| weight 관계 | 같은 layer의 weight를 반복 사용 | 기본 stacked RNN에서는 layer마다 별도의 weight 사용 |
| PyTorch에서 대응하는 설정 | 입력 sequence의 길이 | `num_layers` |

예를 들어 sequence 길이가 3이고 `num_layers=2`이면 layer 수는 2, time step 수는 3이다. 각 layer에서 hidden state 갱신을 세 번 수행한다. PyTorch 문서의 계산 예도 time step을 순회하는 loop 안에서 layer를 순회하며, layer 번호별 weight를 사용한다.

이 구분은 [[learning/2026-10-26-rnn-lstm-state|앞선 unfolding 기록]]의 “같은 parameter를 시간에 걸쳐 반복 사용한다”는 설명에 layer 방향을 추가한 것이다. 학습 중 optimizer가 parameter를 갱신하는 것과 time step마다 다른 parameter를 두는 것은 별개의 일이다.

## 질문: layer를 더 쉽게 설명해 달라

**상황:** time step과 layer의 구분을 들은 뒤에도 더 쉬운 설명을 요청했다.

**의도:** 여러 기호에 앞서 한 계산의 결과가 다음 계산의 입력이 된다는 관계를 숫자로 확인하려는 요청이다.

**핵심 답변:** 입력 2를 첫 연산 `×3+1`에 넣어 7을 만들고, 그 결과를 다른 연산 `×2+4`에 넣어 18을 만들면 두 연산을 차례로 연결한 것이다. 반면 RNN에서 입력을 하나씩 처리하며 같은 layer를 다시 쓰는 것은 시간에 따른 반복이다.

```text
서로 다른 두 연산을 연결: 2 → (×3+1) → 7 → (×2+4) → 18
같은 RNN layer의 반복:  (x₁,h₀) → h₁, (x₂,h₁) → h₂, (x₃,h₂) → h₃
```

첫 줄은 연결 관계만 보여 주는 예시이며 실제 RNN의 전체 계산이 아니다. 두 affine transformation만 연결하면 `2(3x+1)+4=6x+6`으로 합칠 수 있다. 따라서 layer를 쌓았다는 사실만으로 복잡한 nonlinear 관계를 표현한다고 결론 내리지는 않는다. 이 구분은 [[data/numpy-linear-layers|NumPy의 linear layer 기록]]에서도 확인할 수 있다.

두 번째 줄에서는 매번 현재 입력과 이전 state가 바뀌지만 같은 RNN layer의 parameter를 사용한다. **시간을 따라 같은 layer를 다시 쓰는지, 그 결과를 별도의 layer에 넘기는지**를 먼저 보면 그림의 두 축을 구별할 수 있다.

## 남은 확인

뒤이어 슬라이드에 대한 질문도 있었지만, 해당 슬라이드 원문을 확인하지 못해 이 기록에는 구체적인 shape 해석을 포함하지 않았다. `output`과 마지막 hidden state의 shape를 읽는 문제는 입력과 모델 설정을 확인한 뒤 별도로 다룰 필요가 있다.
