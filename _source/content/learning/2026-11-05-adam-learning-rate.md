---
title: "Adam은 learning rate를 바꿀까: gradient와 실제 update 구분하기"
description: Adam 선택 이유를 설명하다 생긴 혼동에서 출발해 mini-batch, gradient의 이동평균, 기본 lr과 parameter별 update를 구별한다.
date: 2026-11-05
publish: true
draft: false
type: journal
courseId: pytorch
lessonId: deep-learning-basics
topics: [PyTorch]
tags: [adam, optimizer, gradient, learning-rate, momentum]
sources:
  - 부트캠프 Autoencoder 미션과 딥러닝 복습의 Adam 질문·피드백 (2026-11-05)
  - https://docs.pytorch.org/docs/stable/generated/torch.optim.Adam.html
  - https://docs.pytorch.org/docs/stable/optim.html
relatedReasons:
  weekly/2026-10-23-vanishing-gradient-and-zero-grad: backward가 저장하는 gradient와 optimizer가 사용하는 update 규칙을 구별한다.
  weekly/2026-10-08-learning-rate-and-classification: 기본 SGD의 learning rate 설명에서 Adam의 적응적인 update로 확장한다.
  learning/2026-11-03-autoencoder-reconstruction: Autoencoder의 reconstruction 목표와 이를 최적화하는 optimizer의 역할을 연결한다.
---

Autoencoder 미션에서 Adam을 선택한 이유를 설명하다가 “SGD는 한 개씩, Adam은 batch로 학습한다”고 말했다. 피드백 뒤에는 “learning rate의 이동평균도 사용한다”고 다시 설명했다. 같은 날 복습에서는 “Adam은 learning rate도 조절하나?”, “그렇다면 lr은 고정이고 gradient만 조절하나?”라는 질문으로 이어졌다.

아래 **의도는 대화 맥락을 바탕으로 한 해석**이다. 질문과 피드백을 정리한 기록이며, optimizer별 성능 비교나 과제 완료를 검증한 기록은 아니다. 숫자는 **설명용 예시**다. 원래 문제의 이미지나 실제 loss 곡선을 확인해야 하는 질문은 제외했다.

## 질문: SGD는 한 개씩, Adam은 batch로 update하는가?

**상황:** optimizer 선택 이유를 설명하며 SGD는 sample마다 update하고 Adam은 batch 단위로 처리한다고 구분했다.

**의도:** 두 optimizer의 차이를 데이터 처리 단위와 update 규칙 중 어디에서 찾아야 하는지 확인하려는 발언이다.

**핵심 답변:** sample 또는 mini-batch를 사용하는 것은 데이터 구성과 학습 loop의 선택이다. **기본 SGD와 Adam 모두 같은 mini-batch의 gradient로 update할 수 있다.** PyTorch의 `torch.optim.SGD`라는 이름이 반드시 한 sample씩 처리한다는 뜻은 아니다.

예를 들어 이미지 4장으로 loss 하나를 계산하고 `backward()`를 한 뒤 `step()`을 호출하는 loop에서, optimizer를 기본 SGD에서 Adam으로 바꿔도 batch size는 4다. 바뀌는 것은 그 gradient로 parameter를 update하는 규칙이다. 실제 미션의 학습 단위나 성능은 이 예시로 확인한 것이 아니다.

## 질문: Adam은 learning rate의 이동평균도 사용하는가?

**상황:** 이전 gradient 정보를 반영하는 Momentum을 설명한 뒤, Adam은 learning rate의 이동평균까지 고려한다고 말했다.

**의도:** Adam이 유지하는 과거 정보가 무엇인지 구별하려는 발언이다.

**핵심 답변:** Adam이 유지하는 것은 **gradient의 이동평균과 gradient 제곱의 이동평균**이다. learning rate의 이동평균이 아니다. 두 통계로 parameter의 각 성분에 대한 update를 조절한다.

[PyTorch Adam 문서](https://docs.pytorch.org/docs/stable/generated/torch.optim.Adam.html)에 따라 일반적인 최소화 설정에서 `weight_decay=0`, `amsgrad=False`인 경우를 쓰면 다음과 같다. 연산은 parameter의 각 성분에 적용된다.

$$
g_t=\nabla_\theta L_t,\qquad
m_t=\beta_1 m_{t-1}+(1-\beta_1)g_t
$$

$$
v_t=\beta_2 v_{t-1}+(1-\beta_2)g_t^2
$$

처음의 `m₀`, `v₀`는 0이다. `m`은 gradient의 부호와 크기에 관한 이력을, `v`는 gradient 제곱의 크기에 관한 이력을 반영한다. 초기에 0에서 시작한 영향을 보정한 값은 다음과 같다.

$$
\hat m_t=\frac{m_t}{1-\beta_1^t},\qquad
\hat v_t=\frac{v_t}{1-\beta_2^t}
$$

기본 SGD라고 할 때는 Momentum과 weight decay 등 추가 항이 없는 경우를 뜻한다. 이 경우 현재 gradient로 `θ ← θ − lr × g`를 계산한다. Momentum을 사용한 SGD에도 과거 정보가 들어가므로 “SGD는 언제나 과거를 사용하지 않는다”고 일반화하지 않는다.

## 질문: Adam이 적응적이라면 설정한 lr도 자동으로 바뀌는가?

**상황:** “Adam은 learning rate도 조절하나?”라고 직접 물었다.

**의도:** optimizer의 적응적인 동작과 사용자가 설정한 기본 learning rate를 구별하려는 질문이다.

**핵심 답변:** **별도 scheduler나 수동 변경이 없다면 설정한 기본 `lr`은 유지된다.** Adam은 다음 식의 비율을 통해 각 성분의 실제 update를 다르게 만든다.

$$
\Delta\theta_t=-\mathrm{lr}\frac{\hat m_t}{\sqrt{\hat v_t}+\epsilon},\qquad
\theta_t=\theta_{t-1}+\Delta\theta_t
$$

`eps`는 분모에 더해 numerical stability를 높이는 작은 값이다. `lr=0.001`로 시작한 Adam이 학습이 진행됐다는 이유만으로 그 설정을 `0.0001`로 바꾸는 것은 아니다. [learning rate scheduler](https://docs.pytorch.org/docs/stable/optim.html#how-to-adjust-learning-rate)는 기본 learning rate를 일정이나 기준에 따라 바꾸는 별도 기능이다.

“adaptive learning rate”라는 표현은 이 성분별 scaling을 가리킬 수 있다. 그래서 기본 `lr`과 **실제로 parameter가 얼마나 변했는지**를 함께 구별해야 한다. Adam도 기본 `lr`이 너무 크면 update가 불안정해질 수 있으며, 안정성이나 더 좋은 성능이 항상 보장되지는 않는다.

## 질문: 그러면 gradient 자체를 바꾸는 것인가?

**상황:** 앞선 답을 듣고 “lr은 고정이고 gradient만 조절되는가?”라고 다시 물었다.

**의도:** backpropagation 결과와 optimizer가 계산하는 update를 같은 값으로 이해해도 되는지 확인하려는 질문이다.

**핵심 답변:** **backpropagation으로 얻은 gradient를 재료로 삼아 update를 계산한다**고 설명하는 것이 정확하다. 기본 Adam의 `step()`이 backpropagation 자체를 다른 미분으로 바꾸는 것은 아니다.

설명용으로 어느 step에서 `lr=0.001`, `ε=10⁻⁸`이고 다음 보정값을 얻었다고 하자. 이 값들은 현재 gradient와 과거 이력에서 나온 통계의 예이며, 모델 실행 결과가 아니다.

| parameter 성분 | 현재 gradient g | 보정값 m̂ | 보정값 v̂ | 실제 update Δθ (근삿값) |
| --- | ---: | ---: | ---: | ---: |
| A | 2 | 1 | 4 | −0.0005 |
| B | 2 | 2 | 1 | −0.002 |

현재 gradient와 기본 `lr`이 같아도 과거 이력이 다르면 update가 달라질 수 있다. A는 `−0.001×1/(√4+ε)`, B는 `−0.001×2/(√1+ε)`로 계산한다. 두 경우 모두 기본 `lr`은 0.001이다.

[[weekly/2026-10-23-vanishing-gradient-and-zero-grad|기존 zero_grad 정리]]에서 `.grad` 초기화와 `backward()`의 누적을 다뤘다. Adam의 `m`, `v`는 optimizer가 따로 유지하는 상태다. **`zero_grad()`로 현재 gradient 저장 공간을 비우는 것과 Adam의 과거 통계를 지우는 것은 다르다.**

이번 질문에서 수정할 설명은 “Adam이 gradient와 learning rate를 함께 바꾼다”에서 **“gradient와 gradient 제곱의 이력을 이용해 성분별 update를 계산하며, 기본 lr은 별도로 설정한다”**로 바뀐다. 새로운 수치에서 직접 update를 계산할 수 있는지와 실제 미션 성능이 개선되는지는 아직 확인하지 않았다.

관련 글: [[weekly/2026-10-08-learning-rate-and-classification|learning rate와 기본 SGD]], [[learning/2026-11-03-autoencoder-reconstruction|Autoencoder의 복원 목표]].
