---
title: 노트북 이름 공간과 내장 이름
date: 2026-09-20
publish: true
topics: [실전 파이썬 준비하기]
type: concept
updated: 2026-09-22
sources:
  - 2026-09-18 개인 Python 학습 대화 (아래 질문 기록으로 연결, 원문은 비공개 보존)
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

이 개념이 필요했던 질문: [[learning/2026-09-18-notebook-state|list 이름을 가린 뒤 오류가 남았던 기록]].

## 퀴즈: 셀을 고쳤는데도 list 호출이 실패하는 이유는?

설명용 상황입니다. 노트북에서 `list = [1, 2]`를 실행했습니다. 이후 그 셀을 `nums = [1, 2]`로 고쳐 실행했는데도 `list(map(str, nums))`가 실패합니다.

왜 그럴까요? `del list`를 한 번 실행한 뒤 다시 호출하면 무엇이 나오고, `del list`를 또 실행하면 어떻게 될까요?

<details>
<summary>정답과 이유 보기</summary>

셀의 글자를 바꿔도 커널에 남은 이전 `list` 이름은 자동 삭제되지 않습니다. 그 이름이 내장 함수를 가리고 있어 리스트 객체를 함수처럼 호출하려다 실패합니다. 첫 `del list` 이후에는 내장 `list`를 다시 찾아 `['1', '2']`를 만들 수 있습니다. 사용자 이름이 없는 상태에서 `del list`를 다시 하면 `NameError`가 납니다. 커널 재시작도 실행 상태를 초기화하지만 다른 변수들도 함께 사라집니다.

</details>

*복습을 위해 만든 보충 문제입니다. 실제 학습자의 응답 기록은 아닙니다.*
