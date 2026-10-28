---
title: "CNN filter는 무엇을 학습할까: weight sharing과 feature map"
description: filter의 weight가 무엇에 대응하는지 묻고, 겹치는 영역의 계산과 RGB channel, feature map, parameter update를 구별한다.
date: 2026-10-27
published: 2026-10-28
publish: true
draft: false
type: journal
courseId: deep-learning
lessonId: cnn-filter-review
topics: [딥러닝]
tags: [cnn, convolution, weight-sharing, feature-map]
sources:
  - 부트캠프 CNN filter 학습 대화 (2026-10-27)
  - https://docs.pytorch.org/docs/stable/generated/torch.nn.Conv2d.html
  - https://docs.pytorch.org/tutorials/beginner/basics/optimization_tutorial.html
relatedReasons:
  learning/2026-10-26-rnn-lstm-state: 시간마다 같은 weight를 쓰는 RNN과 공간 위치마다 같은 weight를 쓰는 CNN을 비교한다.
  weekly/2026-10-23-vanishing-gradient-and-zero-grad: forward 결과, gradient 계산, parameter update의 순서를 연결한다.
---

2026년 10월 27일 CNN을 공부하며 "필터가 weight야?"라고 물었다. 질문은 filter가 이미지 전체를 어떻게 훑는지, 작은 filter로 어떻게 많은 위치의 특징을 표현하는지, weight 하나가 입력의 무엇에 대응하는지로 이어졌다. 이 글은 그 질문을 10월 28일 정리한 기록이다.

아래 의도는 대화 맥락을 바탕으로 정리했다. 계산은 설명용 예시이며, 모델을 직접 학습하거나 성능을 비교한 기록은 아니다. 별도 언급이 없으면 `groups=1`, `stride=1`, `padding=0`, `dilation=1`인 일반적인 `Conv2d`를 기준으로 한다. 여기서 filter 하나는 출력 channel 하나를 만드는 weight 묶음을 뜻한다.

## 질문: filter가 weight인가? RGB마다 다른 weight가 있는가?

**상황:** filter와 weight가 같은 말인지 물은 뒤, RGB 입력에서는 channel마다 weight가 따로 있는지 확인했다.

**의도:** 그림에 보이는 작은 격자와 실제로 학습하는 parameter의 관계를 알고 싶었다.

**핵심 답변:** filter는 여러 weight를 묶은 tensor다. 입력 channel이 하나라면 `3×3` filter 하나에 weight 9개가 있고, RGB라면 `3×3×3=27`개가 있다. RGB의 각 channel에는 서로 다른 weight가 대응하며, 세 channel의 계산 결과를 합쳐 출력 channel 하나의 값을 만든다.

RGB 입력에 filter 32개를 쓰면 weight shape은 `(32, 3, 3, 3)`이고 weight는 총 864개다. 출력 channel은 32개이지 96개가 아니다. `bias=True`라면 weight와 별도로 bias 32개가 더 있다. 이 구분은 [PyTorch Conv2d의 weight와 bias 정의](https://docs.pytorch.org/docs/stable/generated/torch.nn.Conv2d.html#torch.nn.Conv2d)를 따른다.

## 질문: filter가 훑는 영역이 겹치면 같은 입력을 어떻게 계산하는가?

**상황:** filter가 한 칸씩 움직일 때 이전에 본 입력을 다음 영역에서도 다시 쓰게 된다는 점을 물었다.

**의도:** 겹친 입력을 덮어쓰는지, 앞선 계산이 다음 계산을 바꾸는지 확인하려는 질문이다.

**핵심 답변:** 각 위치의 입력 영역을 읽어 별도의 출력 값을 만든다. 같은 입력이 여러 출력 계산에 참여해도 입력 자체를 바꾸지 않는다. 같은 filter의 weight를 각 위치에서 재사용하는 것이 weight sharing이다.

계산만 보기 위한 1차원 예로 입력 `[1, 2, 3, 4]`, filter `[10, 20]`, bias 0을 쓰자.

| 입력 영역 | 같은 weight로 계산 | 출력 |
| --- | --- | ---: |
| `[1, 2]` | `1×10 + 2×20` | 50 |
| `[2, 3]` | `2×10 + 3×20` | 80 |
| `[3, 4]` | `3×10 + 4×20` | 110 |

입력의 `2`는 첫 영역에서는 오른쪽 값, 다음 영역에서는 왼쪽 값이다. 그래서 각각 20과 10이 곱해진다. 같은 입력 값에 항상 같은 weight를 곱한다는 뜻은 아니다. `Conv2d`는 이러한 방식의 cross-correlation을 계산한다.

## 질문: 여러 filter로 지역적인 특징을 보는가? filter마다 feature map이 생기는가?

**상황:** 여러 filter가 이미지의 지역적인 특징을 보는지 물은 뒤, filter마다 feature map이 따로 생기는지 확인했다.

**의도:** filter 크기, filter 개수, 출력의 shape을 연결하려는 질문이다.

**핵심 답변:** `kernel_size`는 한 filter가 보는 공간 영역의 크기이고, `out_channels`는 filter 개수이자 출력 channel 수다. 이미지 하나에 filter 하나를 여러 위치로 적용하면 2차원 feature map 하나가 생긴다. filter 32개라면 feature map도 32개다.

입력이 `(1, 28, 28)`인 이미지 하나에 `3×3` filter 32개를 적용하면 출력은 `(32, 26, 26)`이다. batch가 N개면 입력 `(N, 1, 28, 28)`, 출력 `(N, 32, 26, 26)`으로 쓴다. 가로·세로가 26인 것은 이 글의 조건에서 `28-3+1=26`이기 때문이다. padding이나 stride가 달라지면 공간 크기도 달라진다.

## 질문: weight 9개로 이미지 전체를 표현하는가? feature map에도 weight가 있는가?

**상황:** `3×3` filter에 weight가 9개뿐이라면 큰 이미지의 많은 특징을 어디에 담는지, feature map에 별도의 weight가 있는지 물었다.

**의도:** 학습해서 저장하는 값과 입력마다 계산하는 값을 구별하려는 질문이다.

**핵심 답변:** weight는 여러 입력에 재사용하는 parameter이고, feature map은 현재 입력과 weight로 계산한 중간 결과다. feature map 자체를 이 layer의 독립 parameter로 저장해 학습하는 것은 아니다. 작은 filter를 많은 위치에 적용하므로 parameter 수보다 훨씬 많은 출력 값을 만들 수 있다.

입력 channel이 하나인 `100×100` 이미지에 `3×3` filter 하나를 적용하면 weight는 9개지만 feature map은 `98×98`, 즉 9,604개 값이다. 이미지가 바뀌면 같은 weight를 써도 feature map은 달라진다. filter가 이미지 전체를 weight 9개에 복사해 담는 과정은 아니다.

더 많은 filter와 layer는 다른 반응을 계산하고 앞선 반응을 조합한다. 예를 들어 입력 channel 32개를 출력 channel 64개로 바꾸는 `3×3` convolution의 weight 수는 `64×32×3×3=18,432`개다. 한 filter에 weight 9개라는 설명은 입력 channel이 하나인 조건에서만 맞는다.

## 질문: pixel 값으로 예측하는가? RGB 외에 다른 종류의 filter도 있는가?

**상황:** 이미지의 숫자로 예측값을 만드는 흐름을 확인한 뒤, RGB 외에도 filter 종류가 나뉘는지 물었다.

**의도:** 입력 channel, filter가 학습하는 패턴, 최종 예측을 연결하려는 질문이다.

**핵심 답변:** 이미지 분류 CNN은 보통 pixel 값에서 중간 feature를 계산하고, 이후 layer와 classification head가 class 점수를 만든다. convolution 한 번의 feature map이 곧 최종 class 예측인 것은 아니다. RGB는 입력 channel의 구분이며, filter의 역할을 빨강·초록·파랑 세 종류로 지정한다는 뜻도 아니다.

filter는 loss에 따라 weight를 학습한다. 학습된 filter가 경계나 색 대비 등에 반응할 수 있지만, 모든 filter에 사람이 해석하기 쉬운 이름을 붙일 수 있는 것은 아니다. 다음 convolution layer는 원래 RGB 대신 앞선 layer의 feature map을 입력 channel로 받아 조합할 수 있다.

## 질문: filter를 한 번 적용할 때마다 weight를 update하는가?

**상황:** 여러 filter로 여러 위치를 계산한다면 어느 시점에 weight를 바꾸는지 물었다.

**의도:** filter의 이동과 모델의 학습 단계를 구별하려는 질문이다.

**핵심 답변:** 일반적인 mini-batch 학습에서는 해당 batch의 forward 계산과 loss 계산을 마친 뒤, `backward()`로 gradient를 구하고 `optimizer.step()`으로 parameter를 update한다. 공간 위치 하나를 계산할 때마다 filter의 weight를 바꾸는 방식이 아니다.

공유된 weight의 gradient에는 그 weight가 사용된 여러 위치의 기여가 합쳐진다. 이 합산과 서로 다른 학습 step의 `.grad`가 누적되는 현상은 구별해야 한다. 후자는 의도한 gradient accumulation이 아니라면 `zero_grad()`로 초기화한다. [PyTorch의 optimization 설명](https://docs.pytorch.org/tutorials/beginner/basics/optimization_tutorial.html#optimizer)과 [[weekly/2026-10-23-vanishing-gradient-and-zero-grad|앞선 zero_grad 질문]]에서 이 순서를 확인할 수 있다.

## 질문: 학습의 목적은 loss가 작아지는 weight를 찾는 것인가?

**상황:** filter의 weight가 바뀌는 과정을 보고, 학습이 어떤 weight를 찾는 과정인지 다시 확인했다.

**의도:** 정해진 정답 weight를 맞히는 것인지, 예측과 정답의 차이를 줄이는 것인지 확인하려는 질문이다.

**핵심 답변:** 이 지도학습 설정에서는 예측과 target으로 loss를 구하고, 이를 줄이는 방향으로 weight와 bias를 조정한다. 정답 weight를 따로 받아 맞히는 것은 아니다. 다만 training loss를 낮추는 것만으로 새로운 데이터에서도 잘 예측한다고 결론낼 수는 없다.

학습 데이터의 loss를 줄이는 과정과 validation 데이터로 성능을 확인하는 과정을 나누어 본다. 이 대화에는 실제 학습이나 validation 결과가 없으므로, 특정 filter가 유용한 패턴을 배웠거나 성능이 좋아졌다고 판단하지 않는다.

## 질문: bias는 filter끼리 공유하는가?

**상황:** weight sharing을 배운 뒤 bias도 서로 다른 filter가 함께 쓰는지 물었다.

**의도:** 같은 값을 반복 사용하는 범위가 어디까지인지 확인하려는 질문이다.

**핵심 답변:** `bias=True`인 일반적인 `Conv2d`에는 출력 channel마다 bias 하나가 있다. 서로 다른 filter는 서로 다른 bias parameter를 쓰고, 같은 filter의 모든 공간 위치에는 같은 bias가 더해진다.

RGB의 channel별 곱셈 결과를 모두 더한 뒤 해당 filter의 bias 하나를 더한다. filter 32개라면 bias도 32개다. `bias=False`로 설정하면 bias parameter가 없다.

## 질문: Linear layer의 weight는 feature에 대응하는데 CNN의 weight는 무엇에 대응하는가?

**상황:** 앞서 배운 Linear layer에서는 weight를 입력 feature 번호와 연결할 수 있었지만, CNN에서는 그 대응이 모호하게 느껴졌다.

**의도:** weight 하나가 정확히 어떤 입력 값에 곱해지는지 알고 싶었다.

**핵심 답변:** Linear layer의 weight는 고정된 입력 feature 번호와 출력 번호에 대응한다. convolution의 weight는 출력 channel, 입력 channel, 현재 영역 안의 상대적 위치에 대응한다. 이미지의 특정 절대 위치에 고정된 값이 아니다.

RGB 입력을 R·G·B 순서로 저장하고 weight shape이 `(32, 3, 3, 3)`이라면, 0부터 세는 `weight[7, 1, 0, 2]`는 8번째 filter가 G channel에서 현재 영역의 맨 위·맨 오른쪽 값에 곱하는 weight다. 영역이 이동하면 이 weight에 곱해지는 pixel도 바뀐다.

[[learning/2026-10-26-rnn-lstm-state|RNN의 unfolding]]에서는 같은 weight를 시간에 따라 반복 사용했다. 여기서는 같은 weight를 공간 위치마다 반복 사용한다. 두 경우 모두 반복해서 생기는 계산 결과와 공유하는 parameter를 구별한다.

## 퀴즈: RGB 입력에 3×3 filter 16개를 적용하면 무엇이 몇 개 생기는가?

설명용 보충 문제다. `groups=1`, `bias=True`, `stride=1`, `padding=0`, `dilation=1`이다. `32×32` RGB 이미지 하나에 filter 16개를 적용할 때 weight 수, bias 수, 출력 shape을 각각 구해 보자.

<details>
<summary>정답과 이유</summary>

weight는 `16×3×3×3=432`개, bias는 16개다. 출력 shape은 `(16, 30, 30)`이다. filter마다 세 입력 channel을 함께 계산해 feature map 하나를 만들며, 이 조건에서 공간 크기는 `32-3+1=30`이다. feature map의 14,400개 값은 입력으로부터 계산한 결과이지, 추가로 학습하는 14,400개 parameter가 아니다.

</details>

## 남은 질문

같은 날 이어진 translation equivariance와 invariance, pooling, dilation 질문은 별도 정리가 필요하다. 화면·첨부에 의존한 질문의 상세 내용과 실제 모델 실행 결과는 이 글에서 확인하지 않았다.
