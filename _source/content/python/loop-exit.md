---
title: 반복문 종료와 for–else
description: break는 반복문을 끝낸다. for의 else는 항목을 모두 소진했을 때 실행한다.
date: 2026-09-22
publish: true
type: concept
tags: [python]
topics: [실전 파이썬 준비하기]
sources:
  - https://docs.python.org/3/tutorial/controlflow.html#else-clauses-on-loops
  - https://hanthing.github.io/notes/learning/2026-09-18-loop-exit
---

찾는 값을 발견하면 탐색을 멈추고, 끝까지 못 찾았을 때만 실패를 알리고 싶다면 `for`와 `else`를 함께 쓸 수 있다. [[learning/2026-09-18-loop-exit|여섯 번의 숫자 맞히기에서 프로그램 종료를 물었던 학습 기록]]에서 이어진 개념이다. 그 질문에서는 정답 안내 뒤에도 반복문 밖의 실패 안내로 흐름이 이어지는 코드가 문제였다. 아래 예제와 퀴즈는 그 관계를 복습하도록 재구성했다.

## 무엇을 끝내는가

| 문법 | 끝나는 범위 | 이후의 흐름 |
|---|---|---|
| `break` | 가장 가까운 반복문 | 반복문 다음 문장으로 이동하며 그 반복문의 `else`는 건너뛴다. |
| `return` | 현재 함수 호출 | 함수를 호출했던 곳으로 돌아간다. |
| `sys.exit()` | `SystemExit` 예외를 발생 | 처리되지 않으면 프로그램 종료로 이어진다. 실행 환경이 예외를 처리할 수 있다. |

실패 안내만 건너뛰려는 상황이라면 프로그램 전체를 종료할 필요가 없다. 들여쓰기와 분기 위치를 먼저 확인한다. 셀을 멈추는 것과 변수 상태를 지우는 것도 다르다. [[python/notebook-state|노트북 실행 상태]]

## for의 else는 언제 실행될까?

반복할 항목이 소진되면 `else`를 실행한다. `break`로 빠져나오면 실행하지 않는다. `return`이나 예외로 이 흐름을 벗어나도 실행하지 않는다. **“반복문이면 무조건 마지막에 실행”하는 절이 아니다.**

```python
for value in [2, 4, 6]:
    if value == 4:
        print("찾음")
        break
else:
    print("없음")
print("다음 작업")
```

`2`에서는 다음 항목으로, `4`에서는 `break`로 이동한다. 따라서 `찾음`, `다음 작업`이 차례로 출력된다. `없음`은 출력되지 않는다.

## 퀴즈: 끝까지 찾지 못하면 무엇이 출력될까?

다음 탐색에서 무엇이 어떤 순서로 출력될까? 답을 열기 전에 `else`에 도달하는 이유를 설명해 보자.

```python
for value in [2, 4, 6]:
    if value == 9:
        print("찾음")
        break
else:
    print("없음")
print("다음 작업")
```

<details>
<summary>정답과 실행 순서 보기</summary>

`없음`, `다음 작업`이 차례로 출력된다. `2`, `4`, `6` 모두 `9`가 아니므로 `break`에 도달하지 않는다. 항목을 소진한 뒤 `else`를 실행하고 반복문 다음 문장으로 이동한다.

</details>

## 퀴즈: 반복할 항목이 없으면 else는 실행될까?

```python
for value in []:
    print(value)
    break
else:
    print("끝")
```

아무것도 출력되지 않을까, `끝`이 출력될까? 반복 횟수 대신 `break`가 실행됐는지를 기준으로 설명해 보자.

<details>
<summary>정답과 이유 보기</summary>

`끝`이 출력된다. 처음부터 항목이 없어 반복문 본문에 들어가지 않고 항목 소진 상태가 된다. 본문에 적힌 `break`도 실행되지 않는다.

</details>

두 문제는 복습을 위해 새로 만든 문제다. 정답을 펼쳤다는 사실만으로 이해하거나 학습을 완료했다고 기록하지 않는다.

## 퀴즈: 정답을 찾았는데 실패 안내도 나온다면 어디를 고칠까?

다음은 숫자 맞히기 상황을 줄인 보충 문제다. `정답`만 출력하고, 두 후보 모두 정답이 아닐 때만 `실패`를 출력하고 싶다. 현재 출력은 무엇이며 `sys.exit()` 없이 어느 문장의 위치를 바꿔야 할까?

```python
answer = 7
for guess in [3, 7]:
    if guess == answer:
        print("정답")
        break
print("실패")
```

<details>
<summary>정답과 이유 보기</summary>

현재는 `정답`, `실패`가 차례로 출력된다. `break`는 반복문만 끝낸다. 실패 출력 앞에 `for`와 같은 들여쓰기의 `else:`를 두고, 그 안으로 `print("실패")`를 들여쓰면 된다. `[3, 7]`에서는 `break`가 실행돼 `else`를 건너뛰고, `[3, 5]`에서는 후보를 모두 소진한 뒤 실패를 출력한다.

</details>

이 문제에 대한 실제 사용자 응답은 없다. 처음 질문했던 요구와 연결해 분기 위치를 설명할 수 있는지 확인하는 보충 문제다.

## 근거와 갱신

- [Python 공식 문서: 반복문의 else](https://docs.python.org/3/tutorial/controlflow.html#else-clauses-on-loops)
- [Python 공식 문서: sys.exit](https://docs.python.org/3/library/sys.html#sys.exit)
- 2026-09-22: [[learning/2026-09-18-loop-exit|9월 18일 질문]]에서 종료 범위를 분리해 정리. 예제 출력은 정리 시 실행 확인했다.
