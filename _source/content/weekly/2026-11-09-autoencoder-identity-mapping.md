---
title: "위클리 페이퍼 #7 — Autoencoder가 잘 복원하는데도 문제가 되는 이유"
description: identity mapping에서 출발해 reconstruction loss와 압축의 차이, capacity와 variance, bottleneck과 denoising의 역할을 내 말로 정리한다.
date: 2026-11-09
publish: true
draft: false
type: weekly
courseId: deep-learning
lessonId: autoencoder-review
topics: [딥러닝]
tags: [weekly-paper, autoencoder, identity-mapping, latent-representation, denoising, capacity]
sources:
  - 사용자가 제시한 위클리 페이퍼 7회차 공식 문항
  - 위클리 페이퍼 7회차 준비 대화의 사용자 답변·후속 질문과 AI의 설명·피드백 (2026-11-09 최종 정리)
  - https://www.deeplearningbook.org/contents/autoencoders.html
relatedReasons:
  learning/2026-11-03-autoencoder-reconstruction: 입력 복원의 목적과 target을 바탕으로 단순 복사를 막는 조건을 살펴본다.
  weekly/2026-11-02-cnn-and-lstm: 이미지의 인접 pixel 관계와 반복되는 패턴을 다룬 앞선 학습에 연결한다.
---

입력과 출력이 거의 같고 복원 오차도 0에 가깝다면 잘 학습한 것처럼 보인다. 그런데 이미지 압축을 위해 만든 Autoencoder가 입력을 그대로 복사할 뿐이라면, 내가 기대한 학습과는 다를 수 있다. 이번에는 이 차이를 설명하는 데서 시작했다.

처음에는 identity mapping이라는 개념을 몰랐다. 입력과 latent representation의 크기를 비교하며 이유를 설명할 수 있게 됐지만, “capacity가 충분하면 유용한 특징 없이도 복원할 수 있다”는 문장은 여전히 이해하기 어려웠다. Capacity가 크면 좋은 것인지, variance와 같은 개념인지도 다시 물었다.

*실제 준비 대화에서 내가 답한 내용과 후속 질문을 바탕으로 AI의 설명·피드백을 받아 재구성했다. 문장 정리와 설명용 숫자 예시에도 AI의 도움을 받았다. 모델을 직접 학습하거나 압축률·성능을 비교한 기록은 아니다. 과제 문항은 대화에 제시된 내용을 사용했다.*

## 이번 문항과 최종 답변

> 이미지 압축을 위해 오토인코더를 학습시켰는데, 결과를 확인해보니 그냥 입력을 그대로 복사해서 출력하는 것처럼 동작해요. 복원 오차는 거의 0이지만, 정작 유의미한 특징을 학습한 것 같지는 않아요. 어떤 문제가 생긴 것일까요? 어떻게 바로잡을 건가요?

먼저 **압축에 필요한 제약이 부족해 identity mapping을 학습했을 가능성**을 의심하겠다. Reconstruction loss는 입력과 출력의 차이를 줄이도록 요구한다. 하지만 그 과정에서 정보를 얼마나 압축했는지, 유용한 특징을 학습했는지까지 직접 보장하지는 않는다. 모델에 충분한 capacity가 있고 단순 복사를 막는 제약이 약하다면, 입력을 전달하는 것만으로도 loss를 작게 만들 수 있다.

이를 바로잡기 위해 latent representation의 크기와 Encoder–Decoder 구조를 확인하고, 더 작은 bottleneck을 두어 제한된 표현으로 복원하도록 하겠다. 또한 손상에 강한 표현을 학습하려면 **noise를 추가한 입력과 깨끗한 원본 target을 사용하는 Denoising Autoencoder**를 고려하겠다. 두 방법은 목적이 다르므로, 작은 bottleneck으로 얻는 압축과 denoising으로 얻는 복원 능력을 구분해서 평가해야 한다.

다만 **복원 오차가 작다는 사실만으로 identity mapping이나 학습 실패를 확정할 수는 없다.** 이미 제한된 code로 새로운 입력도 잘 복원한다면 좋은 결과일 수 있다. 주어진 상황은 먼저 확인해야 할 가설이다.

## Identity mapping은 입력을 그대로 내보내는 함수다

Identity mapping은 입력값을 그대로 출력하는 함수다.

```text
f(x) = x

입력: [2, 4, 6]
출력: [2, 4, 6]
```

Autoencoder에서는 전체 `Decoder(Encoder(x))`가 이런 동작을 할 수 있다. 중간 layer의 값까지 입력과 똑같아야 하는 것은 아니다. Encoder가 값을 바꿨다가 Decoder가 그 변환을 되돌려도 전체 결과는 입력과 같아질 수 있다.

처음에 중간 표현을 Residual Representation이라고 불렀는데, 여기서 말하려던 용어는 **latent representation**이었다. 기본 구조는 다음과 같다.

```text
x → Encoder → z → Decoder → x̂
                 ↑
        latent representation
```

여기서 중요한 것은 출력이 입력과 비슷하다는 사실 자체가 아니다. **제한된 z를 거치며 어떤 정보를 담아 복원했는가**가 압축 목적에서 중요하다.

## 입력 숫자 100개를 100개와 5개로 표현한다면

학습 중 입력이 숫자 100개일 때 latent representation도 100개인 경우와, 5개인 경우를 비교했다. 나는 100개인 쪽이 입력을 그대로 전달하기 쉽다고 답했다. 입력값을 하나씩 보관할 공간이 있기 때문이다.

```text
100 → 100 → 100 : 같은 수의 값으로 입력을 전달할 여지가 있다.
100 →   5 → 100 : 제한된 값으로 복원에 필요한 정보를 표현해야 한다.
```

작은 bottleneck은 모델이 입력의 모든 값을 따로 보관하기 어렵게 만든다. 따라서 데이터의 반복되는 구조나 값 사이의 관계를 활용하도록 유도할 수 있다.

하지만 “latent 차원이 입력과 같으면 반드시 identity mapping이 된다”는 설명은 지나치다. 같은 차원이어도 다른 제약을 통해 유용한 표현을 학습할 수 있다. 반대로 작은 bottleneck만으로 원하는 특징을 반드시 배운다고 보장할 수도 없다. Encoder와 Decoder의 capacity, 데이터, 학습 조건도 함께 봐야 한다.

또한 **숫자 개수를 줄이는 것과 실제 파일 용량을 줄이는 것은 구분해야 한다.** 실제 이미지 압축에서는 값을 저장하는 bit 수와 부가 정보까지 포함한 크기를 확인해야 한다.

## Loss가 원하는 것과 내가 기대하는 것이 달랐다

설명을 듣다가 특히 중요하다고 느낀 문장은 이것이었다.

> 복원 오차만 최소화하도록 학습하고 모델에 충분한 capacity가 있다면, 압축에 유용한 특징을 추출하지 않고도 입력을 복원할 수 있기 때문입니다.

이 문장을 이해하기 위해서는 **학습에서 직접 줄이는 값**과 **그 학습을 통해 얻고 싶은 능력**을 나눠야 했다.

- 직접 줄이는 값: 원본 x와 reconstruction x̂ 사이의 loss
- 얻고 싶은 능력: 제한된 표현에 복원에 필요한 정보를 담는 능력

모델은 사람이 기대하는 압축을 알아서 선택하지 않는다. Loss가 출력의 차이만 확인하고 구조에도 제약이 없다면, 복사하는 해법도 loss를 잘 줄이는 해법이다.

AI가 제시한 설명용 예시로, 입력이 항상 `[a, 2a, 3a]` 형태라고 해 보자. a가 2이면 입력은 `[2, 4, 6]`이다.

```text
방법 A: z = [2, 4, 6]
        Decoder가 세 값을 그대로 출력 → [2, 4, 6]

방법 B: z = [2]
        Decoder가 [z, 2z, 3z]로 출력 → [2, 4, 6]
```

두 방법 모두 복원 오차는 0이다. 하지만 B는 데이터의 관계를 이용해 숫자 하나로 표현했다. **Loss만 보면 둘 다 정답이므로, 압축을 원한다면 그에 맞는 제약이 필요하다.** 실제 모델이 반드시 이 좌표나 규칙을 그대로 발견한다는 뜻은 아니다.

이 설명은 [Deep Learning, Chapter 14의 undercomplete·regularized Autoencoder 논의](https://www.deeplearningbook.org/contents/autoencoders.html)와 연결된다. 작은 code와 reconstruction 목표만으로도 Encoder–Decoder의 capacity가 지나치게 크면 유용한 표현을 보장하기 어렵다는 점도 함께 다룬다.

## Capacity가 충분한 것은 좋은가, 나쁜가?

나는 capacity가 충분한 상황을 문제의 원인으로 설명하면서도, 모델 학습에서 이것이 좋은 것인지 나쁜 것인지 헷갈렸다.

**Capacity는 모델이 얼마나 다양한 함수를 표현할 수 있는지에 관한 능력**이다. Layer의 폭과 깊이, activation function, 연결 구조 등이 영향을 준다. Latent dimension이나 parameter 수 하나와 같은 개념은 아니다.

Capacity가 너무 작으면 필요한 관계조차 표현하기 어려워 underfitting이 생길 수 있다. 충분한 capacity는 복잡한 패턴을 배우는 데 도움이 된다. 다만 데이터와 제약에 비해 너무 크면 학습 데이터에만 맞추는 해법도 가능해진다. 따라서 capacity 자체를 좋고 나쁨으로 나누기보다, **원하는 학습 목표와 제약에 맞는지**를 봐야 한다.

이 Autoencoder의 문제에서도 capacity가 있다는 사실 자체가 잘못은 아니다. 복원만 잘하면 되는 목표 아래에서 단순 복사까지 허용되는 조건이 문제다.

### Variance와 비슷한 개념 아닐까?

이 설명을 듣고 나는 variance와 비슷한 개념 같다고 물었다. 둘은 관련이 있지만 같은 개념은 아니었다.

| 개념 | 살펴보는 것 |
| --- | --- |
| Capacity | 모델이 표현할 수 있는 함수의 범위 |
| Variance | 학습 데이터를 바꾸었을 때 학습된 예측이 얼마나 달라지는지 |

높은 capacity가 높은 variance로 이어질 수는 있지만 항상 그렇지는 않다. 특히 identity mapping은 새로운 입력도 그대로 복사할 수 있다. 따라서 **identity mapping을 배웠다는 이유만으로 overfitting이나 높은 variance라고 단정할 수 없다.** 새로운 입력에서도 잘 복사하지만 압축에는 도움이 되지 않는 모델도 가능하다.

## Bottleneck을 줄였더니 복원 오차가 커진다면

처음의 `100 → 100 → 100` 모델과 bottleneck을 줄인 `100 → 5 → 100` 모델을 비교한다면, 두 번째 모델의 복원 오차가 더 클 수 있다. 담을 수 있는 정보가 줄었기 때문이다.

나는 압축 측면에서는 더 나아졌다고 볼 수 있고, epoch를 늘려 loss를 줄이면 중요한 특징을 더 잘 학습할 수 있을 것이라고 답했다. 여기에는 조건이 필요했다.

작은 표현을 사용한다는 점은 압축 목적에 가까워졌다고 볼 수 있다. 하지만 **epoch를 더 돌리거나 training loss를 더 낮춘다는 사실만으로 유용한 표현이나 새로운 데이터에서의 성능이 보장되지는 않는다.** Bottleneck이 너무 작으면 필요한 정보도 잃을 수 있다. 압축 정도와 복원 품질을 함께 비교해야 한다.

## Denoising에서는 그대로 복사해도 정답이 되지 않는다

두 번째 해결책으로 내가 설명한 방법은 입력에 noise를 추가하고, 깨끗한 원본을 target으로 사용하는 것이다.

```text
noise를 추가한 x̃ → Encoder → z → Decoder → x̂
                                              ↓
                                 깨끗한 원본 x와 loss 계산
```

설명용 숫자 예시는 다음과 같다.

```text
깨끗한 target x : [10, 10, 10, 10, 10]
손상된 입력 x̃  : [10, 10, 90, 10, 10]
그대로 복사한 x̂: [10, 10, 90, 10, 10]
```

입력을 그대로 복사하면 세 번째 값에서 target과 차이가 남는다. 이 예시의 MSE는 `80² / 5 = 1,280`이다. 깨끗한 target을 정확히 복원하면 MSE는 0이 될 수 있다. 따라서 “loss가 무조건 발생한다”보다 **“손상된 입력을 그대로 복사하면 원본과 다른 부분에서 loss가 남는다”**가 정확한 설명이다.

나는 주변 pixel과의 관계나 반복되는 패턴을 학습해야 noise를 줄일 수 있다고 설명했다. 다만 실제 이미지에서는 갑자기 밝기가 바뀌는 경계도 있으므로, 튀는 값을 무조건 평균으로 바꾸라는 뜻은 아니다. 여러 학습 예시에서 손상된 입력과 깨끗한 target의 관계를 배우는 것이다.

같은 손상 이미지를 입력과 target 양쪽에 넣으면 어떻게 될지도 질문받았다. 나는 그 방법으로는 문제를 해결할 수 없다고 답했다. **동일한 noisy input을 target으로 두면, noise까지 복사하는 것이 다시 loss를 줄이는 해법이 되기 때문**이다. 이는 같은 손상본을 양쪽에 사용하는 경우에 대한 설명이다.

또한 denoising은 모든 Autoencoder의 필수 목적이 아니며, 그 자체로 실제 저장 용량을 줄여 주는 것도 아니다. 이번 문제에서는 단순 복사를 막고 손상에 강한 표현을 유도하는 추가 방법으로 구분했다.

## 업데이트되는 것은 latent 값 자체가 아니라 parameter다

마지막 답변에서는 “latent representation의 weight가 업데이트된다”는 표현도 다듬었다. 일반적인 Autoencoder에서 z는 입력을 Encoder에 통과시켜 계산한 값이다. z 자체가 별도의 학습 weight인 것은 아니다.

```text
1. Encoder와 Decoder가 x̂를 계산한다.
2. x̂와 target의 loss를 계산한다.
3. Backpropagation으로 parameter에 대한 gradient를 계산한다.
4. Optimizer가 Encoder와 Decoder의 weight·bias를 업데이트한다.
5. 다음 forward pass에서 바뀐 parameter로 z와 x̂를 다시 계산한다.
```

모델이 먼저 noise를 정확히 판별한 다음 업데이트하는 별도 단계를 반드시 거치는 것도 아니다. 깨끗한 target과의 차이를 줄이도록 parameter가 바뀌면서, 손상된 입력에서 원본을 복원하는 계산을 학습한다.

## 내 답변을 다시 정리하면

이 모델은 압축에 필요한 제약이 부족해서 identity mapping을 학습했을 가능성이 있다. 입력과 latent representation의 크기가 비슷하고 모델의 capacity가 충분하면, 중요한 관계를 압축해서 표현하지 않고도 입력을 출력으로 전달해 reconstruction loss를 작게 만들 수 있기 때문이다.

이를 해결하기 위해 먼저 더 작은 bottleneck을 설정하겠다. 제한된 latent representation으로 입력을 복원하도록 만들어, 데이터의 관계나 반복되는 패턴을 활용하게 유도하는 것이다. 또한 denoising이 필요하다면 noise를 추가한 입력과 깨끗한 원본 target으로 학습하겠다. 이때 손상된 입력을 그대로 복사하면 원본과 차이가 남으므로, 그 loss를 줄이는 방향으로 Encoder와 Decoder의 parameter가 업데이트된다.

다만 작은 bottleneck이나 denoising을 적용했다는 사실만으로 유용한 특징을 학습했다고 결론 내리지는 않겠다. 복원 오차가 작다는 것과 압축에 성공했다는 것은 별도로 확인해야 한다.

### 이후 확인할 방법 — AI 피드백으로 추가한 검증 계획

다음은 내가 직접 실험한 결과가 아니라, 답변 뒤 AI의 피드백으로 추가한 확인 방법이다.

1. Latent dimension과 입력을 우회해 전달하는 연결 등 실제 구조를 확인한다.
2. 동일한 validation data에서 bottleneck 크기를 바꿔 압축 정도와 reconstruction 품질을 함께 비교한다. Training loss만으로 판단하지 않는다.
3. 실제 이미지 압축이 목표라면 latent 값의 개수뿐 아니라 저장에 필요한 bit 수와 부가 정보도 확인한다.
4. Denoising이 목표라면 보지 않은 이미지와 손상 조건에서 복원 결과를 확인한다. Noise가 줄어도 경계나 중요한 세부 정보가 사라지지 않는지 함께 살펴본다.

## 함께 읽기와 출처

- [[learning/2026-11-03-autoencoder-reconstruction|Autoencoder의 복원 목적과 target]]: 왜 입력을 다시 출력하는지, target이 어디에서 오는지 정리한 앞선 학습이다.
- [[weekly/2026-11-02-cnn-and-lstm|위클리 페이퍼 #6 — CNN과 LSTM]]: 인접 pixel 관계와 반복되는 패턴을 다룬 내용을 연결해 볼 수 있다.
- [Deep Learning, Chapter 14 — Autoencoders](https://www.deeplearningbook.org/contents/autoencoders.html): undercomplete·regularized·denoising Autoencoder와 capacity에 관한 참고 자료다.

이 글은 대화에서 설명하고 교정한 내용을 정리한 것이다. 모델의 실제 구조와 학습 결과를 확인한 진단 보고서나 과제 제출 완료 기록은 아니다.
