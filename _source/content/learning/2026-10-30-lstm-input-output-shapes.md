---
title: "LSTM의 입력과 반환값: sequence, 마지막 layer와 마지막 time step"
description: 작은 입력의 실제 값부터 따라가며 input_size 설정과 input shape, output과 h_n·c_n이 모으는 축을 구별한다.
date: 2026-10-30
publish: true
draft: false
type: journal
courseId: deep-learning
lessonId: rnn-lstm-review
topics: [딥러닝]
tags: [lstm, shape, sequence, hidden-state, layer]
sources:
  - 부트캠프 LSTM 학습 대화 (2026-10-30)
  - https://docs.pytorch.org/docs/stable/generated/torch.nn.LSTM.html
  - https://docs.pytorch.org/docs/stable/generated/torch.nn.Linear.html
relatedReasons:
  learning/2026-10-29-rnn-time-step-layer: 시간 방향의 반복과 layer를 쌓는 방향을 구별한 뒤 LSTM 반환값의 축에 적용한다.
  learning/2026-10-26-rnn-lstm-state: hidden state와 cell state를 구별하는 식을 작은 숫자 예시의 계산에 사용한다.
  data/numpy-array-axes: 배열의 각 축을 주소로 읽는 방법을 batch·time·feature 인덱싱에 적용한다.
---

2026년 10월 30일 LSTM을 코드로 읽다가 “첫 번째 sequence 전체”와 “마지막 layer”라는 표현에서 막혔다. 이어 입력 shape와 모델 설정의 숫자가 다른 이유를 묻고, 크기를 줄여 실제 값이 어떻게 변하는지 보여 달라고 요청했다.

아래 의도는 대화 맥락을 바탕으로 정리한 해석이다. 예시는 설명용이며, 학습자가 모델을 학습하거나 과제 풀이를 완료했다는 기록은 아니다. 이 글은 **batched input, `batch_first=True`, 단방향, `proj_size=0`**인 LSTM을 다룬다. layer 사이 dropout도 0으로 둔다.

## 질문: x[0]이 첫 번째 sequence 전체라면 정확히 무엇인가?

**상황:** `x[0]`과 `x[0, 1]`을 설명받고도, 예시에서 sequence 전체가 어느 부분인지 다시 물었다.

**의도:** 이름 대신 실제 괄호와 값으로 선택 범위를 확인하려는 질문이다.

**핵심 답변:** `(batch, time, feature)`에서 첫 축 하나만 선택하면, 그 sample의 모든 time step과 feature가 남는다.

```python
x = torch.tensor([[[20.0], [21.0], [19.0]]])
# x.shape: (1, 3, 1)
x[0]        # [[20.0], [21.0], [19.0]] — shape (3, 1)
x[0, 1]     # [21.0]                    — shape (1,)
x[0, 1, 0]  # 21.0                      — scalar
```

여기서 sequence 하나는 시간 순서가 있는 `[20.0] → [21.0] → [19.0]` 전체다. time step마다 feature가 한 개라서 각 값에도 괄호가 있다. sequence length 3은 이 입력의 time 축 길이이며, 전체 dataset의 행 수와 항상 같다는 뜻은 아니다. [[data/numpy-array-axes|배열의 축을 주소로 읽는 방법]]을 그대로 적용할 수 있다.

## 질문: 마지막 LSTM layer가 대체 무엇인가?

**상황:** `output`은 마지막 layer의 모든 time step, `h_n`은 각 layer의 마지막 hidden state라는 설명이 이해되지 않았다.

**의도:** 두 설명에 쓰인 “마지막”이 같은 대상을 가리키는지 확인하려는 질문이다.

**핵심 답변:** 마지막 layer는 층 방향의 끝이고, 마지막 time step은 시간 방향의 끝이다. `num_layers=1`이면 유일한 layer가 마지막 layer다.

`input_size=1, hidden_size=4, num_layers=1`인 모델에 위의 `x`를 넣으면 다음과 같다.

| 반환값 | 담는 값 | shape |
| --- | --- | --- |
| `output` | 유일한 layer의 세 time step hidden state | `(1, 3, 4)` |
| `h_n` | 유일한 layer의 마지막 time step hidden state | `(1, 1, 4)` |
| `c_n` | 유일한 layer의 마지막 time step cell state | `(1, 1, 4)` |

이 조건에서 `output[0, -1]`과 `h_n[0, 0]`은 같다. `output`에는 cell state가 들어 있지 않다. `batch_first=True`는 input과 `output`의 축 순서에 적용되며, `h_n`·`c_n`의 축을 batch 우선으로 바꾸지는 않는다. [PyTorch LSTM 문서](https://docs.pytorch.org/docs/stable/generated/torch.nn.LSTM.html)의 Inputs/Outputs에서 이 차이를 확인할 수 있다.

## 질문: 다른 예시의 그림으로 마지막 layer를 보여 달라

**상황:** 하나의 layer만 그린 설명으로는 어느 부분이 마지막 layer인지 잘 보이지 않아, 다른 예시를 요청했다.

**의도:** time 방향과 layer 방향을 동시에 놓고 반환값의 선택 범위를 보려는 요청이다.

**핵심 답변:** 2-layer 모델이라면 아래 표의 B 행 전체가 마지막 layer다. 오른쪽 끝 A₃·B₃은 각 layer의 마지막 time step이다.

| layer / time | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 입력 | `[10]` | `[20]` | `[30]` |
| 첫 번째 layer | A₁ → | A₂ → | A₃ |
| 두 번째, 마지막 layer | B₁ → | B₂ → | B₃ |

같은 time의 A₁은 B₁ 계산의 입력, A₂는 B₂ 계산의 입력이 된다. 같은 행의 다음 time에는 그 layer의 hidden state와 cell state를 전달한다. 세로로 다음 layer에 전달하는 것은 hidden state다.

```text
output → [B₁, B₂, B₃]  (마지막 layer의 시간 전체)
h_n    → [A₃, B₃]       (각 layer의 마지막 시간)
c_n    → 각 layer의 마지막 시간 cell state
```

`hidden_size=2`라면 각 A와 B는 숫자 두 개다. 이때 `output.shape=(1,3,2)`, `h_n.shape=c_n.shape=(2,1,2)`이다. [[learning/2026-10-29-rnn-time-step-layer|time step과 layer의 구분]]이 반환값을 읽는 기준이 된다.

## 질문: input은 (2,48,1)인데 LSTM 설정은 1·32·2이면 안 맞는 것 아닌가?

**상황:** 입력의 세 숫자와 `input_size=1, hidden_size=32, num_layers=2`를 같은 종류의 shape처럼 비교했다.

**의도:** 어떤 숫자가 서로 맞아야 하는지, 각 layer에서 무엇이 바뀌는지 확인하려는 질문이다.

**핵심 답변:** 세 설정값은 input shape가 아니다. 입력의 마지막 축인 feature 크기 1이 `input_size=1`과 맞아야 한다. hidden size 32는 state의 폭, layer 수 2는 쌓는 층 수다.

```text
input                   (2, 48,  1)
  ↓ 첫 번째 LSTM layer: 입력 feature 1 → hidden feature 32
첫 layer의 시간별 state  (2, 48, 32)
  ↓ 두 번째 LSTM layer: 입력 feature 32 → hidden feature 32
output                  (2, 48, 32)
  ↓ nn.Linear(32, 1)
prediction              (2, 48,  1)
```

`nn.Linear(32,1)`은 마지막 축에 적용되어 앞의 batch·time 축을 유지한다. LSTM이 자동으로 온도 한 개를 예측하는 것은 아니며, 여기서는 별도의 Linear layer를 연결한 예다. 마지막 time만 예측하려면 `output[:, -1, :]`에 적용하여 `(2,1)`을 얻을 수도 있다. 이 문단은 질문에 나온 숫자의 관계를 설명하며, 원본 과제의 전체 조건을 검증한 풀이가 아니다.

## 질문: 크기를 줄이고 실제 숫자가 어떻게 변하는지 보여 달라

**상황:** shape를 그린 그림에서도 내부 값이 추상적이라서, 더 작은 입력과 실제 값으로 살펴보기를 요청했다.

**의도:** input, layer 사이의 state, 반환값을 숫자와 연결하려는 요청이다.

**핵심 답변:** 두 time step·두 layer·hidden size 2로 줄이면 마지막 layer의 두 값 묶음과 각 layer의 마지막 값 묶음을 직접 비교할 수 있다.

설명용으로 `x=[[[1.0],[2.0]]]`을 사용하고 초기 hidden/cell state를 0으로 둔다. 모든 input·forget·output gate의 weight와 bias를 0으로 두어 gate 값은 `sigmoid(0)=0.5`로 고정한다. candidate의 input weight는 첫 layer에서 `[[0.5],[-0.5]]`, 두 번째 layer에서 `[[0.5,0.25],[-0.25,0.5]]`로 둔다. 두 layer 모두 candidate의 recurrent weight는 `0.1 × I`, bias는 0이다. 이는 학습 결과가 아닌 임의로 정한 parameter다.

각 layer에서 `g=tanh(Wx+0.1h_prev)`, `c=0.5c_prev+0.5g`, `h=0.5tanh(c)`를 적용하면 아래 값이 나온다. 두 번째 layer의 `x`는 같은 time의 첫 layer hidden state다.

| layer | 첫 time의 hidden state | 둘째, 마지막 time의 hidden state |
| --- | --- | --- |
| 첫 layer | `[0.113516, -0.113516]` | `[0.230543, -0.230543]` |
| 마지막 layer | `[0.007092, -0.021220]` | `[0.018108, -0.053724]` |

따라서 반환값은 다음처럼 서로 다른 방향의 값들을 모은다. 표시값은 소수 여섯 자리로 반올림했다.

```text
output = [[[0.007092, -0.021220],
           [0.018108, -0.053724]]]   shape (1, 2, 2)

h_n = [[[0.230543, -0.230543]],
       [[0.018108, -0.053724]]]      shape (2, 1, 2)

c_n = [[[0.498690, -0.498690]],
       [[0.036232, -0.107865]]]      shape (2, 1, 2)
```

마지막 layer의 시간별 hidden state에 `y=2h[0]-h[1]+0.1`을 적용하면 약 `[[[0.135405],[0.189941]]]`이 된다. 이는 `Linear(2,1)`의 weight를 `[2,-1]`, bias를 `0.1`로 직접 정한 예시다. [[learning/2026-10-26-rnn-lstm-state|gate와 두 state의 식]]을 계산하면서, 값과 shape를 함께 추적할 수 있다.
