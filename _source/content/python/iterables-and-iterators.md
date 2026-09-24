---
title: 이터러블과 이터레이터
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

리스트는 여러 번 순회할 수 있는 이터러블이다. `zip`이나 `map` 객체 같은 이터레이터는 꺼낸 위치를 기억한다. `next()`로 하나를 꺼낸 뒤 `list()`로 모으면 남은 값만 수집되고, 소진된 이터레이터를 다시 수집하면 빈 리스트가 된다.

이어 보기: [[python/comprehensions]], [[python/sorting-and-callables]]

이 개념이 필요했던 질문: [[learning/2026-09-18-lambda-map-sort|map이 값을 함수에 전달하는 과정을 물었던 기록]].

## 퀴즈: 하나를 꺼낸 뒤 list로 모으면?

설명용 예제입니다. `first`, `rest`, `again`의 값을 각각 예측해 보세요.

```python
values = [1, 2, 3]
it = map(lambda x: x * 2, values)
first = next(it)
rest = list(it)
again = list(it)
```

그 뒤 `list(values)`를 실행해도 빈 리스트가 될까요?

<details>
<summary>정답과 이유 보기</summary>

`first`는 `2`, `rest`는 `[4, 6]`, `again`은 `[]`입니다. 같은 이터레이터 `it`에서 이미 꺼낸 값은 다시 나오지 않습니다. 원래 리스트 `values`는 그대로 남아 있으므로 `list(values)`는 `[1, 2, 3]`입니다. 리스트와 그 리스트를 읽는 이터레이터를 구별해야 합니다.

</details>

*복습을 위해 만든 보충 문제입니다. 실제 학습자의 응답 기록은 아닙니다.*
