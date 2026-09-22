---
title: self와 객체 호출
date: 2026-09-20
publish: true
type: concept
sources:
  - 개인 Python 학습 정리 (2026-09-20 이관)
tags: [python]
---

`item.label()`은 개념적으로 `Item.label(item)`과 같다. 호출한 인스턴스가 첫 매개변수 `self`에 연결된다. 왼쪽 `self.value`는 인스턴스의 속성이고, 오른쪽 `value`는 전달받은 매개변수일 수 있으므로 둘을 구분한다.

이어 보기: [[python/imports-and-packages]], [[python/args-and-kwargs]]

[호출 변환 보기](https://hanthing.github.io/learning/python-lab.html#self)
