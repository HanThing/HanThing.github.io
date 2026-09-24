---
title: NumPy 모양 변경 — 새 축, 뷰, reshape와 stack
description: 배열 객체와 데이터 공유를 구분하고 실제 값으로 모양 변경을 확인한다.
date: 2026-09-23
published: 2026-09-24
publish: true
draft: false
type: concept
courseId: data-analysis
lessonId: data-toolkit
topics: [데이터 분석]
tags: [numpy, shape, view]
sources:
  - Explain NumPy and tensors 학습 대화 (2026-09-23)
  - https://numpy.org/doc/stable/user/basics.copies.html
  - https://numpy.org/doc/stable/reference/generated/numpy.stack.html
  - https://numpy.org/doc/stable/reference/generated/numpy.concatenate.html
---

`shape`이 바뀌었다고 값이 복사됐다는 뜻은 아니다. **객체, 데이터, 좌표 해석**을 따로 본다. 실제 질문의 의도는 맥락에서 해석했으며, 예제는 당시 설명을 재구성했다. [[learning/2026-09-23-numpy-and-tensors|당일 학습 기록]]에서 전체 흐름을 볼 수 있다.

## 질문: None으로 축을 추가하면 새 배열인가, 원래 배열을 바꾸는가?

**상황:** `x[:, None]`을 본 뒤 원본 shape도 바뀌는지, 새 배열이라면 데이터도 복사하는지 물었다.

**의도:** “새 ndarray”와 “새 데이터”를 분리해서 이해하려는 질문이다.

**핵심 답변:** 이 기본 인덱싱은 같은 데이터를 공유하는 새 배열 객체인 뷰를 만든다. 원본 객체의 shape은 그대로지만 공유 데이터의 값을 바꾸면 양쪽에서 보인다. `None`은 이 자리에서 새 축을 넣는 인덱스이며 함수가 아니다. `np.newaxis`와 같다.

```python
import numpy as np
x = np.array([10, 20, 30])
y = x[:, None]
x.shape                 # (3,)
y.shape                 # (3, 1)
x is y                  # False
np.shares_memory(x, y)   # True
y[1, 0] = 99
x                       # [10, 99, 30]
```

`z = x`는 같은 객체에 이름을 붙이고, `z = x.copy()`는 데이터를 복사한다. `x = x[:, None]`은 x라는 이름을 새 뷰에 다시 연결한다. 기존 객체의 shape을 직접 수정한 것과는 다르다.

새 축은 길이가 1이어서 그 자리에 쓸 수 있는 번호도 `0`뿐이다. `A.shape == (2, 3)`이면 `A[None, :, :]`, `A[:, None, :]`, `A[:, :, None]`은 각각 `(1, 2, 3)`, `(2, 1, 3)`, `(2, 3, 1)`이다.

## 자기 설명 점검: reshape와 전치의 차이

**상황:** 마지막 자기 설명에서 “reshape는 shape만 바꾸고 transpose는 축 순서를 바꾼다”고 정리했다. 앞 설명에서는 둘의 결과가 같은 shape이어도 값 배치가 달라지는 예를 다뤘다.

**의도:** shape 일치만으로 같은 변환인지 판단할 수 있는지 확인하는 맥락이다.

**핵심 답변:** `reshape`는 지정된 순서로 원소를 읽어 새 모양으로 배치한다. 전치는 축의 대응을 바꾼다. reshape는 전체 원소 수를 유지해야 하며, 데이터 배치에 따라 뷰 또는 복사본이 된다.

```python
A = np.array([[1, 2, 3], [4, 5, 6]])
A.reshape(3, 2) # [[1, 2], [3, 4], [5, 6]]
A.T             # [[1, 4], [2, 5], [3, 6]]
```

전치에는 `A.T[j, i] == A[i, j]`라는 좌표 관계가 있다. 샘플과 feature의 축을 교환하려는 경우 reshape로 대신하면 값의 의미를 섞을 수 있다. 1차원 배열의 `.T`는 축이 하나뿐이라 `(5,)`를 `(5, 1)`로 만들지 않는다. 이때는 `[:, None]`이나 `reshape(5, 1)`을 사용한다.

## 질문: concatenate와 stack은 고차원에서 실제로 무엇이 달라지는가?

**상황:** 추상적인 shape 설명 대신 실제 숫자가 있는 예를 요청했고, `stack(axis=1)`이 원래 배열을 전치하는 것처럼 보인다고 물었다.

**의도:** 축 번호만 외우지 않고 어느 값이 어느 주소로 가는지 확인하려는 질문이다.

**핵심 답변:** `concatenate`는 기존 축을 늘린다. 연결 축을 제외한 shape이 같아야 한다. `stack`은 같은 shape의 배열들에 새 축을 넣고, 그 새 축의 번호로 원본 배열을 고른다. 두 연산 모두 여기서 입력을 브로드캐스팅해 맞춰 주지 않는다.

```python
A = np.array([[1, 2, 3], [4, 5, 6]])
B = np.array([[10, 20, 30], [40, 50, 60]])

np.concatenate([A, B], axis=0)
# (4, 3): [[1,2,3], [4,5,6], [10,20,30], [40,50,60]]
np.concatenate([A, B], axis=1)
# (2, 6): [[1,2,3,10,20,30], [4,5,6,40,50,60]]

S0 = np.stack([A, B], axis=0) # (2, 2, 3)
S1 = np.stack([A, B], axis=1) # (2, 2, 3)
S2 = np.stack([A, B], axis=2) # (2, 3, 2)
```

S0과 S1은 **shape까지 같지만 값의 대응이 다르다.**

```text
S0[0, i, j] = A[i, j]    S0[1, i, j] = B[i, j]
S1[i, 0, j] = A[i, j]    S1[i, 1, j] = B[i, j]
S2[i, j, 0] = A[i, j]    S2[i, j, 1] = B[i, j]

S1 = [[[1, 2, 3], [10, 20, 30]],
      [[4, 5, 6], [40, 50, 60]]]
```

1차원 배열 두 개에서는 `stack(axis=1)`이 `stack(axis=0).T`와 같게 보인다. 하지만 입력 배열을 전치하는 정의가 아니다. 고차원에서는 **새 축의 위치**로 읽는 편이 정확하다.

3차원에서도 규칙은 같다. `P.shape == (2, 2, 2)`와 `Q.shape == (2, 1, 2)`는 `concatenate(axis=1)`로 `(2, 3, 2)`가 된다. 예를 들어 P의 첫 묶음이 `[[1, 2], [3, 4]]`, Q의 첫 묶음이 `[[10, 20]]`이면 연결 후 첫 묶음은 `[[1, 2], [3, 4], [10, 20]]`이다. 두 입력의 shape이 다르므로 그대로 stack할 수는 없다.

## 퀴즈: 객체와 데이터는 각각 몇 개인가?

`a = np.array([1, 2]); b = a; c = a[:, None]; d = a.copy()` 실행 후 `c[0, 0] = 9`로 바꾼다. a, b, d의 첫 값과 a의 shape은?

<details>
<summary>정답과 이유 보기</summary>

a와 b는 9, d는 1이다. a의 shape은 `(2,)` 그대로다. b는 같은 객체, c는 데이터를 공유하는 뷰, d는 독립 복사본이다.

</details>

*복습용 보충 문제이며 실제 응답 기록은 아니다.*

연결: [[data/numpy-array-axes|배열과 축]] · [[data/numpy-broadcasting|길이 1인 축이 필요한 이유]]

**공식 근거:** [복사와 뷰](https://numpy.org/doc/stable/user/basics.copies.html), [stack](https://numpy.org/doc/stable/reference/generated/numpy.stack.html), [concatenate](https://numpy.org/doc/stable/reference/generated/numpy.concatenate.html).
