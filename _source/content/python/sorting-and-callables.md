---
title: 정렬 key와 호출 가능한 객체
date: 2026-09-20
publish: true
tags: [python]
---

`sort(key=len)`에서 `key`에는 길이 결과가 아니라 함수가 전달된다. `sort`가 각 요소에 함수를 호출하고 반환값을 비교 기준으로 쓴다. 원래 리스트를 수정하고 `None`을 반환한다. `map`도 함수를 요소마다 호출하지만, 그 반환값을 새 흐름으로 만든다는 차이가 있다.

이어 보기: [[python/comprehensions]], [[python/iterables-and-iterators]]

[정렬 기준 실험](https://hanthing.github.io/learning/python-lab.html#sorting)
