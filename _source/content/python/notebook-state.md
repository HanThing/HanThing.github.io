---
title: 노트북 이름 공간과 내장 이름
date: 2026-09-20
publish: true
type: concept
updated: 2026-09-22
sources:
  - 개인 Python 학습 정리 (2026-09-20 이관)
  - https://hanthing.github.io/notes/learning/2026-09-18-loop-exit
tags: [python]
---

`list = [...]`를 실행하면 사용자 이름이 내장 `list`를 가려서 `list(...)` 호출이 `TypeError`가 된다. 셀을 `nums = [...]`로 고치는 일은 이미 실행된 `list` 이름을 없애지 않는다. `del list`는 사용자 이름 연결만 제거하며, 다시 실행하면 제거할 이름이 없어 `NameError`가 난다. 커널 재시작은 소스 코드를 유지하고 실행 중인 이름 공간을 초기화한다.

`f(...)`는 호출, `nums[0]`은 인덱싱, `(1 + 2)`는 계산 묶음이다. `list(map(lambda x: x**2, [1,2,3,4,5]))`의 결과는 `[1,4,9,16,25]`다. `range(1,101,2)`는 끝값 101을 포함하지 않으므로 `sum(...)`은 1부터 99까지 홀수의 합인 `2500`이다.

이어 보기: [[python/imports-and-packages]], [[python/iterables-and-iterators]]

[이름 공간 실험](https://hanthing.github.io/learning/python-lab.html#notebook-state)

## 실행을 멈추는 것과 상태를 지우는 것

`break`는 현재 반복문을 끝낼 뿐 이미 만들어진 이름을 지우지 않는다. 커널 재시작은 실행 중인 이름 공간을 새로 시작하는 작업이다. “실패 문장만 건너뛰고 싶다”면 [[python/loop-exit|반복문의 종료 조건]]을 바꿀 문제이지 커널을 재시작할 문제가 아니다.

2026-09-22: [[learning/2026-09-18-loop-exit|반복문 종료를 물었던 학습 기록]]을 반영해 실행 흐름과 노트북 상태의 차이를 보완했다.
