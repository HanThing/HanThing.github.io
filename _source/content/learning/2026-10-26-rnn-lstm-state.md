---
title: "RNN에서 LSTM으로: unfolding, cell state와 gate"
description: 과거가 hidden state에 반영되어도 왜 오래 기억하기 어려운지 묻고, LSTM의 state와 gate를 식과 작은 수치 예로 구별한다.
date: 2026-10-26
publish: true
draft: false
type: journal
courseId: deep-learning
lessonId: rnn-lstm-review
topics: [딥러닝]
tags: [rnn, lstm, unfolding, cell-state, gradient]
sources:
  - 부트캠프 RNN·LSTM 학습 대화 (2026-10-26)
  - https://docs.pytorch.org/docs/stable/generated/torch.nn.RNN.html
  - https://docs.pytorch.org/docs/stable/generated/torch.nn.LSTMCell.html
relatedReasons:
  weekly/2026-10-23-vanishing-gradient-and-zero-grad: layer를 거슬러 전달되는 gradient의 곱을 시간 방향의 반복 계산과 비교한다.
---

2026년 10월 26일 RNN과 LSTM을 공부하며, “과거가 이미 `h_{t-1}`에 반영되어 있다면 왜 오래된 정보를 기억하기 어려운가?”라고 물었다. 비유보다 실제 계산을 보고 싶어 gate와 state의 식을 요청했고, 설명마다 바뀐 기호 때문에 같은 식인지 다시 확인했다.

아래 의도는 대화 맥락을 바탕으로 정리했다. 수치 계산은 설명용 예시이며, 모델을 학습하거나 RNN과 LSTM의 성능을 비교한 기록은 아니다. 식은 projection과 peephole connection을 쓰지 않는 기본 LSTM을 기준으로 한다.

## 질문: unfolding은 무엇이며, 반복 계산을 펼친다는 말은 무슨 뜻인가?

**상황:** unfolding이 RNN의 반복 계산을 시간 순서대로 펼치는 것이라는 설명을 들었지만, 그 말만으로는 실제로 무엇이 달라지는지 보이지 않았다.

**의도:** 그림에 cell이 여러 개 보이는 이유와 실제 계산 횟수, weight를 공유한다는 말의 관계를 확인하려는 질문이다.

**핵심 답변:** 같은 RNN cell을 여러 time step에 적용하는 계산을 한 단계씩 적는 것이다. cell을 새로 학습하는 것이 아니라 같은 weight를 반복 사용한다. unfolding은 unrolling이라고도 한다.

단순한 RNN의 식을 다음처럼 쓰면 `t`가 달라져도 `W_x`, `W_h`, `b`는 같다.

$$h_t=\tanh(W_xx_t+W_hh_{t-1}+b)$$

`x_t`는 현재 입력, `h_{t-1}`은 이전 hidden state다. [PyTorch의 RNN 문서](https://docs.pytorch.org/docs/stable/generated/torch.nn.RNN.html)는 이 반복을 time step별 loop로도 보여 준다.

계산 순서만 보기 위해 activation function을 생략한 **설명용 규칙** `h_t=2h_{t-1}+x_t`를 쓰자. `h_0=0`, 입력이 `3, 5, 2`라면 다음과 같다.

| time step | 입력 | 같은 규칙을 적용한 계산 | 새 state |
| ---: | ---: | --- | ---: |
| 1 | 3 | `2 × 0 + 3` | 3 |
| 2 | 5 | `2 × 3 + 5` | 11 |
| 3 | 2 | `2 × 11 + 2` | 24 |

반복문으로 세 번 실행해도, 위 표처럼 펼쳐 써도 계산은 같다. 세 단계 모두 같은 계수 `2`를 쓴다. 이 규칙은 unfolding을 보여 주기 위한 것이며 실제 RNN의 activation이나 학습 동작까지 재현하지는 않는다.

## 질문: 과거가 hidden state에 들어 있는데 왜 오래된 정보를 기억하기 어려운가?

**상황:** `h_{t-1}`이 과거 입력의 영향을 받는다는 설명을 듣고, 과거가 이미 반영되어 있는데 오래된 정보를 잊는다는 말이 왜 나오는지 물었다.

**의도:** 과거의 영향을 받은 값이라는 사실과 과거 정보를 필요한 만큼 보존한다는 사실을 구별하려는 질문이다.

**핵심 답변:** hidden state는 과거 입력 전체의 복사본이 아니다. 새 입력과 이전 state를 같은 크기의 state로 계속 변환한다. 그 과정에서 필요한 차이가 약해지거나 사라질 수 있고, 먼 과거를 이용하도록 weight를 학습시키는 gradient도 작아질 수 있다.

예를 들어 설명용 규칙 `h_t=0.5h_{t-1}+x_t`에서 뒤의 입력이 모두 0이면, 이전 state의 값 8은 `4 → 2 → 1`로 줄어든다. 과거의 영향이 남아 있다는 말은 맞지만, 그 영향의 크기가 유지된다는 뜻은 아니다. 모든 RNN이 이 비율로 잊는다는 예측은 아니다.

long-term dependency는 멀리 떨어진 입력 사이의 관계를 출력에 활용해야 하는 경우다. 예를 들어 sequence 첫 위치의 A/B에 따라 맨 끝의 답이 달라진다면, 그 차이를 마지막까지 사용할 수 있어야 한다. forward 계산에서 정보를 보존하는 문제와 backpropagation에서 먼 시점까지 학습 신호를 전달하는 문제는 연결되어 있지만 같은 값에 관한 설명은 아니다. state는 계산 결과이고, gradient는 loss가 어떤 값의 변화에 얼마나 민감한지를 나타낸다.

## 질문: LSTM의 gate와 state는 어떤 식으로 계산하는가?

**상황:** LSTM의 설명을 비유 없이 정확하게 듣고 싶다고 요청한 뒤, gate와 state를 구하는 식을 모두 물었다.

**의도:** 무엇이 입력이고 무엇이 계산 결과인지, 각 기호가 어느 단계에서 쓰이는지를 한 흐름으로 확인하려는 질문이다.

**핵심 답변:** LSTM cell은 `x_t`, `h_{t-1}`, `c_{t-1}`을 받아 새 hidden state `h_t`와 cell state `c_t`를 만든다. 세 gate와 candidate를 계산하고, cell state를 갱신한 다음 hidden state를 계산한다.

$$
\begin{aligned}
f_t&=\sigma(W_fx_t+U_fh_{t-1}+b_f)\\
i_t&=\sigma(W_ix_t+U_ih_{t-1}+b_i)\\
g_t&=\tanh(W_gx_t+U_gh_{t-1}+b_g)\\
o_t&=\sigma(W_ox_t+U_oh_{t-1}+b_o)\\
c_t&=f_t\odot c_{t-1}+i_t\odot g_t\\
h_t&=o_t\odot\tanh(c_t)
\end{aligned}
$$

| 기호 | 역할 |
| --- | --- |
| `f_t` | forget gate. 이전 cell state를 얼마나 남길지 조절한다. |
| `i_t` | input gate. candidate를 얼마나 더할지 조절한다. |
| `g_t` | 이번에 더할 candidate. gate와 달리 `tanh`를 통과해 음수도 될 수 있다. |
| `o_t` | output gate. `tanh(c_t)`를 hidden state에 얼마나 드러낼지 조절한다. |
| `c_t` | cell state. 이전 값의 일부와 새 candidate의 일부를 더한 값이다. |
| `h_t` | hidden state. 현재 cell의 출력으로 쓰이며 다음 time step에도 전달된다. |

`W`, `U`, `b`는 학습하는 parameter이며 시간에 걸쳐 공유한다. gate 값 자체는 이 parameter와 현재 입력·이전 hidden state로 계산한 결과다. sigmoid를 통과한 gate의 각 성분은 0과 1 사이에 있다. `g_t`와 `tanh(c_t)`는 −1과 1 사이지만, **`c_t` 자체가 그 범위로 제한되지는 않는다.**

위 식의 `b`는 입력 쪽과 hidden state 쪽 bias를 합쳐 쓴 표기다. [PyTorch LSTMCell 문서](https://docs.pytorch.org/docs/stable/generated/torch.nn.LSTMCell.html)는 두 bias를 따로 적고, 출력으로 `(h_1, c_1)`을 반환한다고 명시한다.

한 성분만 보는 설명용 예로 `c_{t-1}=0.8`, `f_t=0.9`, `i_t=0.2`, `g_t=-0.5`라면 `c_t=0.9×0.8+0.2×(-0.5)=0.62`다. 이어 `o_t=0.7`이면 `h_t=0.7×tanh(0.62)≈0.386`이 된다.

## 질문: c̃는 어디에 쓰이며, g를 쓰던 식과 왜 달라 보이는가?

**상황:** candidate를 `g_t`로 설명하다가 `c̃_t`라는 표기가 나오자, 이전 cell state에 forget gate를 곱하고 `i_t`와 `g_t`의 곱을 더하던 식이 바뀐 것인지 물었다. 이때 곱셈을 “내적”, `i_t`를 “input state”라고 표현했다.

**의도:** 다른 기호가 같은 값을 뜻하는지 확인하고, 식의 연산과 각 값의 이름을 맞추려는 질문이다.

**핵심 답변:** 이 설명에서 `g_t`와 `c̃_t`는 같은 candidate다. `i_t⊙g_t`는 `i_t⊙c̃_t`와 같은 항이다. `i_t`는 input gate이며, `⊙`는 dot product가 아니라 같은 위치의 성분끼리 곱하는 elementwise product다.

예를 들어 `[0.2, 0.3]⊙[0.4, 0.5]`의 결과는 `[0.08, 0.15]`다. dot product처럼 합해 `0.23`으로 줄이지 않는다. 따라서 cell state의 성분별로 이전 값과 새 candidate를 조절할 수 있다.

표기 변경이 새 연산을 뜻하지는 않는다. 다만 `g_t`는 더할 후보이고 `c_t`는 갱신된 state이므로, 둘을 같은 값으로 취급해서는 안 된다.

## 질문: o_t는 언제 쓰이며, h_t가 output state인가?

**상황:** cell state 식을 따라간 뒤 output gate가 어느 계산에서 쓰이는지 물었다. 이어 `o_t`와 `h_t` 중 무엇이 출력에 해당하는지 다시 확인했다.

**의도:** gate 자체와 gate를 적용한 결과를 구별하고, LSTM cell의 출력과 모델의 최종 예측을 나누려는 질문이다.

**핵심 답변:** `o_t`는 `h_t=o_t⊙tanh(c_t)`에서 쓰이는 output gate다. `h_t`는 hidden state이며 cell의 출력으로 쓰인다. 분류 모델의 최종 label이나 확률과 자동으로 같은 값은 아니다. 최종 예측에는 별도의 output layer 등을 연결할 수 있다.

같은 `c_t=0.8`에서 `tanh(c_t)≈0.664`다. `o_t=0.9`이면 `h_t≈0.598`, `o_t=0.1`이면 `h_t≈0.066`이다. 이 계산에서 output gate를 작게 한다고 이미 계산된 `c_t`를 직접 지우는 것은 아니다. 다만 다음 시점의 gate 계산에는 `h_t`가 들어가므로 이후의 state 변화에는 간접적으로 영향을 줄 수 있다.

## 질문: cell state를 추가하면 왜 먼 시점까지 gradient를 전달하기 쉬워지는가?

**상황:** cell state의 계산은 어느 정도 이해한 것 같다고 말했지만, 그것이 gradient 전달과 어떻게 연결되는지는 다시 물었다. weight의 변화에 관한 표현만으로는 long-term dependency가 나아지는 이유가 보이지 않았다.

**의도:** LSTM이 좋다는 결론보다, 일반 RNN과 달라진 계산 경로와 그 효과의 조건을 확인하려는 질문이다.

**핵심 답변:** cell state에는 이전 값을 forget gate와 곱해 더하는 경로가 있다. 이 경로에서는 매 time step마다 새로운 `tanh`를 반드시 통과하지 않는다. forget gate가 1에 가까우면 이 직접 경로를 따라 정보와 gradient를 유지하기 쉬워진다. 모든 조건에서 vanishing gradient가 사라진다는 뜻은 아니다.

scalar RNN을 `h_t=tanh(wh_{t-1}+ux_t+b)`로 단순화하면, 한 단계의 hidden state 미분은 `w(1-h_t²)`다. 여러 시점을 거슬러 가면 이런 인자가 곱해진다. 설명용으로 각 인자가 0.5인 경로를 가정하면 20번의 곱은 `0.5²⁰≈0.000000954`가 된다. [[weekly/2026-10-23-vanishing-gradient-and-zero-grad|앞선 vanishing gradient 질문]]에서 본 chain rule을 시간 방향에 적용한 것이다.

LSTM에서 **gate와 candidate를 고정해 cell state의 직접 연결만 보면**, 한 성분의 `c_{t-1} → c_t` 미분은 `f_t`다. 매 단계에서 이 값이 0.99라면 그 경로의 20번 곱은 `0.99²⁰≈0.818`이다. 이것은 경로를 비교하는 설명용 계산이며 실제 학습에서 측정한 gradient가 아니다.

전체 미분에는 `h_{t-1}`을 거쳐 gate와 candidate로 이어지는 다른 경로도 있다. 따라서 전체 derivative가 무조건 `f_t` 하나라고 쓰면 안 된다. forget gate가 작아지면 직접 경로에서도 영향이 줄고, hidden state로 드러나는 양에는 output gate와 `tanh`가 관여한다. LSTM은 보존하기 쉬운 경로와 그 경로를 조절하는 gate를 제공하지만, 먼 과거를 필요한 만큼 활용하는지는 데이터와 학습 결과로 확인해야 한다.

## 남은 확인

이 기록은 질문에 제공된 설명과 식의 관계를 정리한 것이다. 직접 sequence를 학습시키거나 time step별 gradient를 측정한 결과는 아직 없다. 후속으로 비교한다면 같은 입력·목표·평가 조건에서 RNN과 LSTM의 오차와 gradient를 함께 확인해야 한다. 수식 예시의 숫자만으로 성능 차이를 결론 내리지 않는다.
