---
title: "Embedding에서 Attention까지: Q·K·V와 i·j를 실제 값으로 읽기"
description: Encoder와 Embedding을 혼동한 질문에서 출발해 lookup, Q·K·V 변환, softmax, 한 head의 weighted sum을 작은 행렬로 따라간다.
date: 2026-11-02
publish: true
draft: false
type: journal
courseId: deep-learning
lessonId: attention-review
topics: [딥러닝]
tags: [embedding, encoder, attention, transformer, softmax]
sources:
  - 부트캠프 딥러닝 관련 Embedding·Attention 학습 대화 (2026-11-02)
  - https://arxiv.org/html/1706.03762v7
relatedReasons:
  learning/2026-10-26-rnn-lstm-state: RNN이 이전 hidden state와 현재 입력을 함께 처리한다는 설명을 Encoder의 문맥 처리와 연결한다.
  machine-learning/logistic-loss-and-evaluation: 분류 확률로 썼던 softmax를 Attention의 위치별 혼합 비율과 구별한다.
---

“Encoder가 Embedding을 하는 것 아닌가?”라는 질문에서 시작했다. 설명을 듣다가 Q·K·V가 실제로 어떤 숫자인지, softmax가 정규분포를 만드는 것인지, 수식의 i와 j는 왜 나뉘는지 다시 물었다.

아래 **의도는 대화 맥락을 바탕으로 정리한 해석**이다. 질문과 당시 제공받은 설명을 재구성했으며, 독립적으로 이해를 적용하거나 모델을 학습했다는 기록은 아니다. 숫자는 계산을 보여 주기 위해 정한 **설명용 값**이다. 강의 화면 원본이 필요한 질문과 답변이 끝나지 않은 질문은 이 글에서 제외했다.

## 질문: Encoding과 Embedding은 무엇이 다른가?

**상황:** token을 vector로 바꾸는 설명과 Encoder가 입력을 처리한다는 설명을 함께 듣다가 둘의 차이를 물었다.

**의도:** 같은 숫자 변환처럼 보이는 두 과정의 역할을 구별하려는 질문이다.

**핵심 답변:** 여기서 token Embedding은 token ID로 기본 vector를 가져오는 단계이고, Encoder의 후속 layer는 여러 위치의 입력을 처리해 문맥을 반영한 representation을 만드는 단계다. Encoding은 정보를 다른 표현으로 바꾸는 넓은 말이므로 용어만으로 경계를 고정하면 안 된다.

같은 token ID는 같은 Embedding table의 같은 row를 가져온다. 하지만 뒤의 문맥 처리 결과는 주변 입력에 따라 달라질 수 있다. 단방향 RNN은 현재 입력과 이전 hidden state를 이용하고, Transformer Encoder의 self-attention은 허용된 입력 위치들을 함께 참고한다. [[learning/2026-10-26-rnn-lstm-state|RNN의 hidden state 전달]]이 이 차이를 읽는 출발점이다.

## 질문: Encoder가 Embedding을 하는 줄 알았는데 또 처리한다는 뜻인가?

**상황:** `token → Embedding → Encoder → Attention`이라는 도식에서, 이미 vector가 된 입력을 Encoder가 다시 처리한다는 부분이 헷갈렸다.

**의도:** 도식의 각 상자가 별도 역할인지, 전체 모델을 부르는 이름인지 확인하려는 질문이다.

**핵심 답변:** 넓게 부르는 Encoder에는 입력 Embedding까지 포함할 수 있다. 반면 “Embedding 뒤의 Encoder layer”라고 하면 문맥을 처리하는 부분을 가리킨다. 특히 Transformer에서는 Attention이 Encoder layer 안에도 들어 있으므로 위 도식을 모든 모델의 고정 순서로 읽으면 안 된다.

원래 Transformer의 입력 쪽 흐름은 `token ID → Embedding과 위치 정보 → Encoder layers`이며, 각 layer에는 self-attention과 position-wise feed-forward network 등이 있다. 이 글에서는 그중 한 head의 Attention 계산을 따로 떼어 본다. 전체 Encoder가 Q·K·V 계산 하나만으로 끝나는 것은 아니다. 구조 구분은 [논문 §3.1–3.2](https://arxiv.org/html/1706.03762v7#S3.SS1)에 따른다.

## 질문: Attention head는 무엇인가?

**상황:** Attention 설명에서 head라는 단위를 처음 접하고 의미를 물었다.

**의도:** head 하나가 token 하나를 뜻하는지, 별도의 계산을 뜻하는지 구별하려는 질문이다.

**핵심 답변:** head 하나는 자체 projection parameter로 Q·K·V를 만들고, 관련도에 따른 weighted sum을 계산하는 한 갈래다. 모든 query 위치를 처리하면 head 하나에서도 위치별 output vector가 여러 개 나온다.

Multi-head attention은 여러 head의 output을 이어 붙이고 output projection을 적용한다. head마다 서로 다른 projection을 학습하지만, “첫 head는 문법, 둘째는 의미”처럼 역할을 미리 지정하는 것은 아니다. 이 구분은 [논문 §3.2.2](https://arxiv.org/html/1706.03762v7#S3.SS2.SSS2)에서 확인할 수 있다.

## 질문: Q·K·V로 바뀌는 과정을 실제 값으로 보여 달라

**상황:** 이름만으로는 Query, Key, Value가 어떻게 생기는지 와닿지 않아 예시값을 요청했다.

**의도:** 입력 vector가 세 종류의 vector가 되는 계산을 직접 확인하려는 질문이다.

**핵심 답변:** 입력 row vector에 서로 다른 학습 parameter matrix를 곱한다. 같은 head 안에서는 위치가 달라도 같은 세 matrix를 공유한다.

아래는 batch, bias, mask, dropout을 생략한 한 head의 self-attention 예다. 각 row가 token 위치이며 문장과 token 분리는 설명용이다. 실제 tokenizer가 단어마다 하나의 token을 만든다는 뜻은 아니다.

```text
X = [[2, 1],       # 위치 1: 나는
     [1, 2],       # 위치 2: 사과를
     [1, 1]]       # 위치 3: 먹었다

W_Q = [[1, 0],    W_K = [[0, 1],    W_V = [[2, 0],
       [1, 1]]           [1, 0]]           [0, 1]]

Q = X W_Q = [[3, 1],    K = X W_K = [[1, 2],    V = X W_V = [[4, 1],
             [3, 2],                 [2, 1],                 [2, 2],
             [2, 1]]                 [1, 1]]                 [2, 1]]
```

위치 2만 펼치면 `q₂=[1,2]W_Q=[3,2]`, `k₂=[1,2]W_K=[2,1]`, `v₂=[1,2]W_V=[2,2]`다. 세 parameter matrix는 계산을 쉽게 하려고 정했으며 학습 결과가 아니다. Q·K·V 값은 입력과 parameter에 따라 계산되고, parameter는 학습에서 업데이트되는 대상이다.

## 질문: softmax를 남에게 설명할 수 있게 정리하면?

**상황:** 지수 함수를 써 양수로 만든 뒤 합으로 나눈다는 흐름은 설명했지만, 그 결과를 “정규분포를 가진 확률”이라고 표현하고 `eˣ`와 `2ˣ`를 혼동했다.

**의도:** 계산 순서뿐 아니라 무엇을 만드는 함수인지 정확하게 설명하려는 요청이다.

**핵심 답변:** softmax는 여러 score를 각각 지수 함수에 넣고 그 합으로 나누어, 양수이며 합이 1인 비율 vector로 바꾼다. 정규화는 합을 맞추는 처리이고, normal distribution을 만든다는 뜻은 아니다.

$$
\operatorname{softmax}(s)_j=\frac{\exp(s_j)}{\sum_l\exp(s_l)}
$$

표준 정의의 `exp(x)`는 자연상수 e를 밑으로 한 `eˣ`다. 예를 들어 `[-1,0,2]`는 약 `[0.042,0.114,0.844]`가 된다. 각 결과는 자기 score만으로 정해지지 않고 다른 score들과 함께 정해진다. 두 결과의 비율은 `exp(s_a-s_b)`이므로 score 차이가 비율에 반영된다.

[[machine-learning/logistic-loss-and-evaluation|분류의 softmax]]는 class별 예측 확률에 쓸 수 있다. 여기서는 참고할 위치별 Value를 섞는 Attention weight로 쓴다. 높은 weight를 “그 token이 정답일 확률”로 읽지는 않는다. 구현에서는 모든 score에서 최댓값을 뺀 뒤 계산해도 같은 결과이며, 큰 지수값으로 인한 overflow를 줄일 수 있다.

## 질문: one head of attention은 실제로 어떻게 계산하는가?

**상황:** Q·K·V의 값을 본 뒤, 한 head가 이 값들로 무엇을 내보내는지 다시 물었다.

**의도:** projection 뒤의 score, softmax, weighted sum을 한 흐름으로 연결하려는 질문이다.

**핵심 답변:** 한 query와 모든 key의 내적으로 score를 만들고, `√d_k`로 나눈 후 softmax를 적용한다. 그 비율로 같은 위치의 Value를 곱해 더한다.

위 예시에서 위치 2의 `q₂=[3,2]`, `d_k=2`다.

```text
q₂ Kᵀ                    = [7, 8, 5]
score = [7, 8, 5] / √2    ≈ [4.950, 5.657, 3.536]
softmax(score)            ≈ [0.306, 0.620, 0.074]
z₂ = 0.306[4,1] + 0.620[2,2] + 0.074[2,1]
                           ≈ [2.611, 1.620]
```

각 단계의 표시값은 반올림했으며 최종 합은 반올림 전 비율로 계산했다. softmax의 세 값은 참고 위치 세 개의 비율이고, 최종 `z₂`는 feature 두 개를 가진 vector다. 모든 query를 처리하면 `QKᵀ`와 Attention weight의 shape은 `(3,3)`, `Z`의 shape은 `(3,2)`다. head 하나가 문장 전체를 vector 하나로 압축한다는 뜻은 아니다. 일반적으로 Value의 폭 `d_v`는 `d_k`와 달라도 된다.

## 질문: energy eᵢⱼ는 어느 단계에서 쓰는가?

**상황:** 숫자 계산을 본 뒤 이전에 등장한 energy라는 이름이 이 흐름의 어디에 해당하는지 물었다.

**의도:** 서로 다른 설명에서 쓰인 표기를 같은 단계에 대응시키려는 질문이다.

**핵심 답변:** energy는 보통 softmax 이전의 관련도 score를 가리킨다. 이 글에서는 scaling을 포함해 `eᵢⱼ=qᵢkⱼᵀ/√d_k`로 정의한다. 따라서 위 예시의 `e₂₁`은 `7/√2`다.

자료에 따라 scaling 이전의 내적을 energy라고 부를 수도 있으므로 정의를 먼저 확인해야 한다. RNN Encoder–Decoder Attention의 score 함수와 Transformer의 scaled dot product가 같은 수식이라는 뜻도 아니다. energy를 정규화한 `αᵢⱼ`와, 그 비율로 Value를 합친 `zᵢ`를 구별하면 된다.

## 질문: 같은 계산을 수식으로 압축하면?

**상황:** 숫자로 본 흐름을 다시 수학적 표현으로 정리해 달라고 요청했다.

**의도:** 각 기호를 실제 계산 단계와 연결한 채 필기하려는 요청이다.

**핵심 답변:** 한 query 위치 i의 output은 아래 순서로 계산한다. softmax의 합은 참고 위치 l 전체에 걸친다.

$$
q_i=x_iW_Q,\quad k_j=x_jW_K,\quad v_j=x_jW_V
$$
$$
e_{ij}=\frac{q_ik_j^T}{\sqrt{d_k}},\quad
\alpha_{ij}=\frac{\exp(e_{ij})}{\sum_{l=1}^{n}\exp(e_{il})},\quad
z_i=\sum_{j=1}^{n}\alpha_{ij}v_j
$$

모든 위치를 모으면 다음과 같다. softmax는 각 query row의 key 축에 적용한다.

$$
Z=\operatorname{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

이는 [논문 §3.2.1](https://arxiv.org/html/1706.03762v7#S3.SS2.SSS1)의 scaled dot-product attention을 입력 projection부터 풀어 쓴 형태다. 이 예에는 mask가 없으며, decoder의 causal mask를 설명하는 식은 아니다.

## 질문: 왜 Query는 xᵢ이고 Key·Value는 xⱼ인가?

**상황:** 같은 입력에서 출발하는데 수식에 i와 j가 나뉘어 있어 그 차이를 물었다.

**의도:** 기호가 다른 입력 종류를 뜻하는지, 같은 sequence의 위치를 뜻하는지 확인하려는 질문이다.

**핵심 답변:** 이 self-attention 예에서 i는 지금 output을 만들 위치, j는 참고할 위치다. i를 하나 고정하고 j를 전체 위치로 바꾸며 계산한다. i와 j는 같을 수도 있다.

`i=2`라면 `q₂`는 그대로 두고 `j=1,2,3`의 key와 비교한다. `α₂₁`은 `v₁`에, `α₂₂`는 `v₂`에, `α₂₃`은 `v₃`에 곱한다. Key와 Value가 같은 j를 쓰는 이유는 **관련도를 평가한 위치의 정보를 그 비율로 가져오기 때문**이다. 모든 위치에는 Q·K·V가 모두 있다.

Cross-attention에서는 Query와 Key·Value의 sequence 출처 자체가 다를 수 있다. 위 설명은 같은 X로 세 matrix를 만드는 self-attention의 조건이다.

## 질문: 입력 Embedding의 단계를 짧게 정리하면?

**상황:** Attention을 계산한 뒤 입력 Embedding 과정을 필기할 수 있도록 핵심만 정리해 달라고 요청했다. 앞선 미완료 요청과 구별해 답변이 남은 후속 질문을 정리했다.

**의도:** 앞에서 생략했던 입력 준비 과정을 짧은 순서로 연결하려는 요청이다.

**핵심 답변:** `텍스트 → token 분리 → token ID → Embedding lookup → 위치 정보 결합 → Encoder 입력` 순서로 읽으면 된다. tokenizer의 규칙과 특수 token은 모델에 따라 다르다.

원래 Transformer는 Embedding vector에 `√d_model`을 곱하고 positional encoding을 더한다. 모든 모델이 이 scaling과 같은 위치 표현을 쓰는 것은 아니다. 여기서는 [논문 §3.4–3.5](https://arxiv.org/html/1706.03762v7#S3.SS4)의 입력 준비 단계만 구별하며, 강의 화면의 개별 pos 표기는 확인하지 않았다.

## 질문: token ID에 해당하는 row vector를 가져온다는 말은?

**상황:** “학습되는 Embedding matrix에서 각 ID에 해당하는 row vector를 가져온다”는 문장을 다시 인용하며 의미를 물었다.

**의도:** ID와 vector 사이에 어떤 연산이 일어나는지 숫자로 보려는 질문이다.

**핵심 답변:** ID는 row를 고르는 정수 index다. ID 자체에 의미를 계산하는 수식을 적용하는 것이 아니라 학습 가능한 table의 해당 row를 읽는다.

```text
E = [[0.1, 0.0, 0.2],     # ID 0
     [0.4, 0.2, 0.1],     # ID 1
     [0.3, 0.7, 0.9],     # ID 2
     [0.0, 0.5, 0.2]]     # ID 3

ID 2    → E[2]       → [0.3, 0.7, 0.9]
ID [2,1] → E[[2,1]] → [[0.3, 0.7, 0.9],
                      [0.4, 0.2, 0.1]]
```

설명용 table의 shape은 `(vocabulary_size=4, embedding_dim=3)`다. ID 두 개를 조회하면 shape은 `(2,3)`이 된다. Embedding을 학습할 때 업데이트되는 것은 table의 parameter이며 ID 번호를 gradient로 바꾸는 것이 아니다. 이 숫자를 학습된 실제 언어의 의미라고 해석하지 않는다.

## 남은 확인

Q·K·V의 숫자와 수식을 설명받은 기록은 있지만, 별도의 입력으로 직접 계산한 답변은 아직 확인하지 않았다. 강의 화면에 의존하는 positional encoding·행렬 크기 질문, Transformer의 feed-forward network와 decoder 입력에 관한 후속 질문은 이 글의 검증 범위 밖에 남겼다. 아래 복습은 이 글의 구분을 다시 확인하는 자료이며 학습 완료 표시가 아니다.
