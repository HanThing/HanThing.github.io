---
title: 정렬 key와 호출 가능한 객체
date: 2026-09-20
publish: true
courseId: python
lessonId: python-basics
topics: [실전 파이썬 준비하기]
type: concept
sources:
  - 2026-09-18 개인 Python 학습 대화 (아래 질문 기록으로 연결, 원문은 비공개 보존)
  - 개인 Python 학습 정리 (2026-09-20 이관)
tags: [python]
---

`sort(key=len)`에서 `key`에는 길이 결과가 아니라 함수가 전달된다. `sort`가 각 요소에 함수를 호출하고 반환값을 비교 기준으로 쓴다. 원래 리스트를 수정하고 `None`을 반환한다. `map`도 함수를 요소마다 호출하지만, 그 반환값을 새 흐름으로 만든다는 차이가 있다.

이어 보기: [[python/comprehensions]], [[python/iterables-and-iterators]]

이 개념이 필요했던 질문: [[learning/2026-09-18-lambda-map-sort|정렬의 key와 함수 반환값을 구분한 질문]].

## 퀴즈: 정렬된 리스트와 sort의 반환값은?

설명용 예제입니다. 실행 뒤 `words`와 `result`의 값은 무엇일까요? `key=len()`으로 쓰면 안 되는 이유도 설명해 보세요.

```python
words = ["pear", "fig", "banana"]
result = words.sort(key=len)
```

<details>
<summary>정답과 이유 보기</summary>

`words`는 `['fig', 'pear', 'banana']`, `result`는 `None`입니다. `sort`는 원래 리스트를 바꾸며 정렬 결과를 반환하지 않습니다. `key=len`은 함수를 넘겨 정렬 과정에서 각 단어에 호출하게 합니다. `len()`은 지금 인자 없이 함수를 호출하는 식이라 `TypeError`가 납니다. 길이 값들을 따로 만들고 싶다면 `list(map(len, words))`가 `[3, 4, 6]`을 만듭니다.

</details>

*복습을 위해 만든 보충 문제입니다. 실제 학습자의 응답 기록은 아닙니다.*
