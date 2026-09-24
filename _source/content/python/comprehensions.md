---
title: 리스트 컴프리헨션 읽기
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

`[x for row in matrix for x in row]`은 바깥 `row` 반복 뒤 안쪽 `x` 반복 순서로 읽는다. 맨 앞의 `x`는 각 반복에서 결과에 넣을 표현식이다. 여러 동작이 필요하거나 순서가 헷갈리면 같은 구조의 일반 `for`문으로 먼저 펼친다.

이어 보기: [[python/iterables-and-iterators]], [[python/sorting-and-callables]]

이 개념이 필요했던 질문: [[learning/2026-09-18-comprehensions|두 for와 맨 앞 x를 물었던 기록]].

## 퀴즈: 중첩된 반복을 펼치면 어떤 순서일까?

설명용 예제입니다. `matrix = [[1, 2], [3]]`일 때 `[x * 10 for row in matrix for x in row]`의 결과를 예측하고 일반 `for`문으로 펼쳐 보세요.

<details>
<summary>정답과 이유 보기</summary>

결과는 `[10, 20, 30]`입니다. 먼저 한 행을 고르고, 그 행의 값을 차례로 꺼내 결과에 넣습니다.

```python
result = []
for row in matrix:
    for x in row:
        result.append(x * 10)
```

앞의 `x * 10`은 먼저 실행할 반복문이 아니라, 각 반복에서 결과에 넣을 값입니다.

</details>

*복습을 위해 만든 보충 문제입니다. 실제 학습자의 응답 기록은 아닙니다.*
