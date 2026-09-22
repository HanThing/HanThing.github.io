---
title: 파일 객체와 with
date: 2026-09-20
publish: true
topics: [실전 파이썬 준비하기]
type: concept
sources:
  - 2026-09-18 개인 Python 학습 대화 (아래 질문 기록으로 연결, 원문은 비공개 보존)
  - 개인 Python 학습 정리 (2026-09-20 이관)
tags: [python]
---

`with open(...) as file:`에서 `file`은 열린 파일 객체다. 블록을 벗어나면 예외가 발생해도 파일을 닫지만, 예외 자체를 숨기지는 않는다. `read()`를 반복하면 현재 읽기 위치부터 이어지며, 다시 읽으려면 `seek()`나 새 스트림이 필요하다.

이어 보기: [[python/imports-and-packages]], [[python/iterables-and-iterators]]

[파일 상태 따라가기](https://hanthing.github.io/learning/python-lab.html#files)

이 개념이 필요했던 질문: [[learning/2026-09-18-files-and-strings|파일을 열고 줄을 나누는 과정에서 나온 질문]].

## 퀴즈: 두 번째 read와 블록 밖의 파일 상태는?

설명용 상황입니다. `sample.txt`에는 줄바꿈 없이 `abc`만 있습니다. 두 출력과 `with` 블록이 끝난 뒤 `file.closed`의 값은 무엇일까요?

```python
with open("sample.txt", encoding="utf-8") as file:
    print(repr(file.read()))
    print(repr(file.read()))
```

블록 안에서 예외가 나면 파일 닫기와 예외는 각각 어떻게 될까요?

<details>
<summary>정답과 이유 보기</summary>

출력은 `'abc'`, `''`이고 블록 밖의 `file.closed`는 `True`입니다. 첫 `read()`가 끝까지 읽어 위치가 파일 끝으로 이동했기 때문입니다. 열린 동안 `file.seek(0)`으로 처음으로 돌아가면 다시 읽을 수 있습니다. 예외가 나도 파일은 닫히지만 `with open(...)`이 예외를 없애 주지는 않습니다.

</details>

*복습을 위해 만든 보충 문제입니다. 실제 학습자의 응답 기록은 아닙니다.*
