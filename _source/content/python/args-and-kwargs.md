---
title: args와 kwargs의 두 방향
date: 2026-09-20
publish: true
topics: [실전 파이썬 준비하기]
type: concept
sources:
  - 개인 Python 학습 정리 (2026-09-20 이관)
tags: [python]
---

함수 정의에서 `*args`는 남는 위치 인자를 튜플로, `**kwargs`는 남는 키워드 인자를 딕셔너리로 모은다. 호출에서 `*`와 `**`는 반대로 이터러블과 매핑을 인자로 푼다. 딕셔너리 하나를 그대로 넘기는 것과 `**mapping`은 다르다.

이어 보기: [[python/self-and-objects]], [[python/iterables-and-iterators]]

[입력 바인딩 보기](https://hanthing.github.io/learning/python-lab.html#arguments)

## 퀴즈: 모아서 받은 인자를 다시 풀어 전달하면?

설명용 예제입니다. 아래에서 `args`, `kwargs`, 마지막 호출의 결과는 각각 무엇일까요?

```python
def pack(*args, **kwargs):
    return args, kwargs

args, kwargs = pack(2, 3, unit="개")
def total(a, b, unit):
    return f"{a + b}{unit}"

result = total(*args, **kwargs)
```

<details>
<summary>정답과 이유 보기</summary>

`args`는 `(2, 3)`, `kwargs`는 `{"unit": "개"}`, `result`는 `"5개"`입니다. 정의할 때는 모으고, 호출할 때는 각각 `a`, `b`, `unit`에 풀어 전달합니다. `total(args, kwargs)`로 쓰면 두 객체 자체가 전달되고 `unit` 인자가 빠집니다.

</details>

*복습을 위해 만든 보충 문제입니다. 실제 학습자의 응답 기록은 아닙니다.*
