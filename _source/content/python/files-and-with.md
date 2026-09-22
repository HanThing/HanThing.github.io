---
title: 파일 객체와 with
date: 2026-09-20
publish: true
type: concept
sources:
  - 개인 Python 학습 정리 (2026-09-20 이관)
tags: [python]
---

`with open(...) as file:`에서 `file`은 열린 파일 객체다. 블록을 벗어나면 예외가 발생해도 파일을 닫지만, 예외 자체를 숨기지는 않는다. `read()`를 반복하면 현재 읽기 위치부터 이어지며, 다시 읽으려면 `seek()`나 새 스트림이 필요하다.

이어 보기: [[python/imports-and-packages]], [[python/iterables-and-iterators]]

[파일 상태 따라가기](https://hanthing.github.io/learning/python-lab.html#files)
