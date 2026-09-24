---
title: self와 객체 호출
date: 2026-09-20
publish: true
courseId: python
lessonId: objects-and-classes
topics: [실전 파이썬 준비하기]
type: concept
sources:
  - 2026-09-18 개인 Python 학습 대화 (아래 질문 기록으로 연결, 원문은 비공개 보존)
  - 개인 Python 학습 정리 (2026-09-20 이관)
tags: [python]
---

`item.label()`은 개념적으로 `Item.label(item)`과 같다. 호출한 인스턴스가 첫 매개변수 `self`에 연결된다. 왼쪽 `self.value`는 인스턴스의 속성이고, 오른쪽 `value`는 전달받은 매개변수일 수 있으므로 둘을 구분한다.

이어 보기: [[python/imports-and-packages]], [[python/args-and-kwargs]]

이 개념이 필요했던 질문: [[learning/2026-09-18-objects-and-self|self와 객체의 실행 관계를 물었던 기록]].

## 퀴즈: 두 객체에서 self는 누구일까?

설명용 예제입니다. `a.label()`과 `b.label()`은 각각 무엇을 반환할까요? `a.label()`을 클래스에서 직접 호출하는 형태로도 써 보세요.

```python
class Item:
    def __init__(self, value):
        self.value = value
    def label(self):
        return self.value

a = Item("연필")
b = Item("공책")
```

<details>
<summary>정답과 이유 보기</summary>

각각 `"연필"`, `"공책"`입니다. `a.label()`은 이 예제에서 `Item.label(a)`처럼 이해할 수 있습니다. 호출한 객체가 `self`로 전달되므로 두 호출이 서로 다른 객체의 `value`를 읽습니다. 생성자의 오른쪽 `value`는 받은 인자이고 왼쪽 `self.value`는 그 객체에 저장하는 속성입니다.

</details>

*복습을 위해 만든 보충 문제입니다. 실제 학습자의 응답 기록은 아닙니다.*
