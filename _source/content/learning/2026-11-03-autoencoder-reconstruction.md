---
title: "Autoencoder는 왜 입력을 복원할까: target과 sigmoid 출력의 의미"
description: 입력 복원이 필요한 이유에서 출발해 latent representation, target, Transformer와의 차이, 이미지 외 입력과 sigmoid 출력 범위를 구별한다.
date: 2026-11-03
published: 2026-11-04
publish: true
draft: false
type: journal
courseId: deep-learning
lessonId: autoencoder-review
topics: [딥러닝]
tags: [autoencoder, reconstruction, sigmoid, target, transformer]
sources:
  - 부트캠프 딥러닝 관련 Autoencoder 학습 대화 (2026-10-26, 2026-11-03)
  - https://www.deeplearningbook.org/contents/autoencoders.html
  - https://arxiv.org/html/1706.03762v7
  - https://docs.pytorch.org/docs/stable/generated/torch.nn.Sigmoid.html
relatedReasons:
  learning/2026-11-02-embedding-attention-qkv: Transformer의 Encoder와 Attention 계산을 복원이라는 학습 목표와 구별한다.
  machine-learning/logistic-loss-and-evaluation: 분류에서 확률로 해석한 sigmoid 출력을 복원에서는 밝기 값으로 해석하는 차이를 연결한다.
---

10월 26일에는 “입력을 그대로 출력할 거라면 왜 학습하는가?”를 물었다. 11월 3일에는 Transformer의 Encoder–Decoder와 같은 개념인지, 이미지 외 데이터도 가능한지, sigmoid 출력과 입력을 빼도 되는지 질문했다.

아래 **의도는 대화 맥락을 바탕으로 정리한 해석**이다. 실제 질문과 제공받은 설명을 재구성한 기록이며, 독립 적용·모델 학습·과제 완료를 확인한 기록은 아니다. 숫자는 **설명용 예시**다. 원래 강의 화면이 필요한 질문은 포함하지 않았다.

## 질문: 입력을 다시 출력한다면 왜 Autoencoder를 학습하는가?

**상황:** 입력과 출력 사이의 loss를 줄인다는 설명을 듣고, 결국 같은 값을 만들 뿐인데 무슨 쓸모가 있는지 물었다.

**의도:** reconstruction이라는 학습 목표가 어떤 결과를 얻기 위한 수단인지 확인하려는 질문이다.

**핵심 답변:** 기본 Autoencoder는 `x → Encoder → z → Decoder → x̂`로 계산하고, 원본 x와 reconstruction x̂의 차이를 줄인다. 작은 bottleneck이나 regularization 같은 제약을 두면 복원에 필요한 정보를 representation z에 담도록 학습할 수 있다. 아무 제약 없이 복사하는 것만으로 유용한 representation이 보장되지는 않는다.

설명용 데이터가 항상 `x = [a, b, a+b, 2a, 3b]`라면 숫자는 다섯 개여도 a와 b 두 값으로 모두 결정된다. a=2, b=3이면 입력은 `[2,3,5,4,9]`다. 중간 표현 `[2,3]`에서 같은 다섯 값을 다시 만들 수 있다. 실제 모델이 반드시 a와 b라는 좌표를 발견한다는 뜻은 아니다.

입력보다 작은 code를 사용하는 것은 undercomplete Autoencoder의 한 방식이다. **모든 Autoencoder의 code가 입력보다 작아야 하는 것은 아니다.** 제약과 capacity에 따라 단순 암기나 복사도 가능하므로 작은 code만으로 유용성을 단정할 수 없다. 이 구분은 [Deep Learning, Chapter 14 §14.1–14.2](https://www.deeplearningbook.org/contents/autoencoders.html)에 따른다.

## 질문: 의미는 latent representation에만 있고 출력은 중요하지 않은가?

**상황:** reconstruction을 통해 z를 얻어 나중에 활용하는 것이라면, 입력과 같아지는 출력에는 의미가 별로 없는지 다시 물었다.

**의도:** 학습 중 비교 기준과 학습 후 사용할 결과를 구별하려는 질문이다.

**핵심 답변:** representation learning에서는 z를 다른 작업의 feature로 사용할 수 있지만, 출력 x̂도 원본 정보를 얼마나 복원하는지 평가하는 학습 기준이다. denoising에서는 잡음을 줄인 출력 자체가 필요한 결과다. 입력과 출력은 같아지도록 학습하는 것이지 항상 정확히 같지는 않다.

Denoising Autoencoder에서는 잡음을 추가한 x̃를 입력하고 원래의 x를 target으로 삼는다. 즉 `x̃ → Encoder → z → Decoder → x̂`를 계산해 x와 x̂를 비교한다. 이때 입력 x̃를 그대로 복사하면 잡음까지 남는다. z의 각 성분에 사람이 이해하는 의미가 하나씩 대응한다고 보장할 수도 없다.

## 질문: 비지도 학습이면 target이 없는가, 입력이 target인가?

**상황:** 앞선 설명 뒤에 “별도 target이 없으니 input 자체가 target이 되겠다”는 해석을 말했다.

**의도:** loss 계산에 필요한 정답을 어디서 얻는지 확인한 발언이다.

**핵심 답변:** 기본 reconstruction에서는 **별도의 사람이 붙인 label이 필요하지 않을 뿐, target은 있다.** x를 target으로 사용하고 모델 출력 x̂와 비교한다.

예를 들어 `x=[0.2,0.8]`, `x̂=[0.3,0.6]`이면 element별 squared error는 `[0.01,0.04]`, MSE는 `(0.01+0.04)/2=0.025`다. target이 없어 loss를 못 구하는 상황이 아니다. 이 설명을 들었다는 기록과 새로운 데이터에서 직접 계산해 보였다는 증거는 구분한다.

## 질문: 원래 Transformer도 Encoder와 Decoder가 있으니 Autoencoder인가?

**상황:** 10월 26일에 최초 Transformer가 Autoencoder를 사용하는지 물었고, 11월 3일에도 「Attention Is All You Need」의 Encoder–Decoder와 Autoencoder의 관계를 다시 확인했다.

**의도:** 비슷한 구성 요소의 이름이 같은 학습 목표를 뜻하는지 구별하려는 질문이다.

**핵심 답변:** Encoder–Decoder는 역할과 구조에 관한 표현이고, Autoencoder는 reconstruction을 학습한다는 구분이다. 원래 Transformer 논문의 번역 모델은 입력 문장을 다른 언어의 target 문장으로 변환한다. Encoder와 Decoder가 있다는 이유만으로 Autoencoder라고 부르지 않는다.

| 모델 예시 | 입력 | 학습 target |
| --- | --- | --- |
| 기본 문장 Autoencoder | `나는 학생이다` | `나는 학생이다` |
| 번역 Encoder–Decoder | `나는 학생이다` | `I am a student` |

이 문장 쌍은 구분을 위한 설명용 예다. 원래 Transformer의 Encoder는 입력 token별 representation을 만들고 Decoder가 이를 참고한다. 입력을 최종 vector 하나로만 압축하는 구조로 읽으면 안 된다. [논문 §3](https://arxiv.org/html/1706.03762v7#S3)과 [[learning/2026-11-02-embedding-attention-qkv|Embedding·Attention 질문 기록]]을 연결해 읽을 수 있다.

## 질문: Autoencoder는 이미지가 아닌 입력에도 사용할 수 있는가?

**상황:** Autoencoder 설명에 이미지 예제가 자주 등장해서 이미지 전용 기술인지 물었다.

**의도:** 예제에 쓰인 데이터 형식이 모델의 정의에 포함되는지 확인하려는 질문이다.

**핵심 답변:** 핵심 조건은 이미지 여부가 아니라 입력으로부터 representation을 만들고 그에 맞는 reconstruction을 학습하는 것이다. 수치 vector, 음성, 시계열, 텍스트 등에도 구성할 수 있다. 입력 표현과 output, loss를 데이터에 맞춰야 한다.

수치 vector `[키, 몸무게, 심박수, 혈압]`를 입력한다면 같은 항목을 복원하는 네 값을 비교할 수 있다. 단위와 scale이 다른 열은 전처리와 loss의 상대적 기여도 함께 고려해야 한다. 텍스트의 token을 복원한다면 token ID의 숫자 차이를 MSE로 재는 대신 token 예측에 맞는 loss 등을 선택한다. 이미지 예제가 많다는 사실이 이미지에만 적용된다는 근거는 아니다.

## 질문: sigmoid 출력은 확률인데, 0~1 밖의 입력과도 빼기가 가능한가?

**상황:** reconstruction loss에서 입력과 출력을 빼는데, 입력은 임의의 수이고 sigmoid 출력은 0~1의 확률이라면 입력도 0~1일 때만 계산할 수 있는지 물었다.

**의도:** 빼기 연산의 가능 여부, output의 의미, 모델이 표현할 수 있는 범위를 구별하려는 질문이다.

**핵심 답변:** **빼기는 가능하다. 다만 target을 output 범위로 표현할 수 있는지가 다르다.** sigmoid는 각 값을 0과 1 사이로 보내는 activation function이며, 그 값을 반드시 확률로 해석해야 하는 것은 아니다. 이미지 복원에서는 scaling한 pixel 밝기로 해석할 수 있다.

[PyTorch Sigmoid 문서](https://docs.pytorch.org/docs/stable/generated/torch.nn.Sigmoid.html)의 식은 다음과 같다.

$$\sigma(t)=\frac{1}{1+e^{-t}}$$

수학적으로 유한한 t의 출력은 `0 < σ(t) < 1`이다. target이 200이면 `(200-x̂)²` 계산은 되지만 x̂를 200으로 만들 수 없다. x̂가 1에 가까워져도 squared error는 `199²=39,601`에 가까워질 뿐이다. 부동소수점 구현의 rounding은 이 표현 범위 문제를 해결하지 않는다.

| 복원할 target의 표현 | 가능한 output 설계 예 |
| --- | --- |
| pixel을 255로 나눈 0~1 값 | 마지막에 sigmoid 사용 |
| 범위를 제한하지 않은 실수 | 마지막에 범위를 제한하는 activation을 두지 않는 linear output 사용 |

첫 방법에서는 pixel 200의 target이 `200/255 ≈ 0.7843`이다. output 0.8은 이 설정에서는 복원한 밝기이며 “어떤 class일 확률 80%”를 뜻하지 않는다. [[machine-learning/logistic-loss-and-evaluation|로지스틱 분류의 sigmoid 확률]]은 분류 목표와 해석을 함께 정한 경우다. input의 scaling, target의 표현, 마지막 activation, loss를 함께 확인해야 한다.

## 아직 확인하지 않은 것

이 대화만으로 실제 모델의 마지막 activation, 원본 데이터 전처리, 학습 성능을 검증하지는 않았다. 새로운 예에서 target·output 범위·loss를 스스로 구별할 수 있는지도 별도 적용으로 확인해야 한다.
