---
title: 이터러블과 이터레이터
date: 2026-09-20
publish: true
tags: [python]
---

리스트는 여러 번 순회할 수 있는 이터러블이다. `zip`이나 `map` 객체 같은 이터레이터는 꺼낸 위치를 기억한다. `next()`로 하나를 꺼낸 뒤 `list()`로 모으면 남은 값만 수집되고, 소진된 이터레이터를 다시 수집하면 빈 리스트가 된다.

이어 보기: [[python/comprehensions]], [[python/sorting-and-callables]]

[소비 상태 실험](https://hanthing.github.io/learning/python-lab.html#iterators)
