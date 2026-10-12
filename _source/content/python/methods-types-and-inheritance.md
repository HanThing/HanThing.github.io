---
title: 메서드의 자동 인자와 객체의 타입 계약
description: 일반·클래스·정적 메서드의 호출 차이, 타입 힌트와 특별 메서드의 실제 규칙, 상속과 오버라이딩을 값으로 구분한다.
date: 2026-09-21
published: 2026-10-12
publish: true
draft: false
courseId: python
lessonId: objects-and-classes
topics: [실전 파이썬 준비하기]
type: concept
tags: [python, oop]
sources:
  - 강아지 클래스 self 매개변수 확인 학습 대화 (2026-09-21)
  - TextSample 문법과 메서드 설명 학습 대화 (2026-09-21)
relatedReasons:
  learning/2026-09-21-oop-text-pipeline: self·정적 메서드·타입 힌트·pass를 묻게 된 당시 코드와 후속 질문이다.
  python/self-and-objects: 인스턴스 호출이 첫 인자를 연결하는 기본 관계를 확인한다.
  python/object-state-and-composition: 메서드가 접근하는 상태의 소유자와 여러 객체의 연결을 설명한다.
---

메서드를 읽을 때는 **누가 자동으로 전달되는지**와 **무엇을 반환해야 하는지**를 나눠 보면 된다. `self`의 기본 관계는 [[python/self-and-objects]]에 정리했다. 여기서는 속성을 쓰지 않는 메서드, `@staticmethod`, 타입 힌트와 특별 메서드를 물었던 [[learning/2026-09-21-oop-text-pipeline|9월 21일 질문]]을 이어 간다.

## 호출할 때 자동으로 전달되는 값

일반 메서드가 인스턴스를 통해 호출되면 그 인스턴스가 첫 인자로 전달된다. `self`라는 이름 자체가 마법의 예약어인 것은 아니다. 관례적인 이름을 써서 호출 규칙을 드러내는 것이다.

아래는 세 종류를 비교하기 위한 **보충 예제**다.

```python
class Dog:
    species = "dog"

    def __init__(self, name):
        self.name = name

    def label(self):
        return self.name

    @classmethod
    def kind(cls):
        return cls.species

    @staticmethod
    def sound():
        return "멍"

dog = Dog("콩이")
print(dog.label())       # 콩이
print(Dog.label(dog))    # 콩이
print(Dog.kind())        # dog
print(dog.kind())        # dog
print(Dog.sound())       # 멍
print(dog.sound())       # 멍
```

| 호출 | 자동 인자 | 함수 본문에서 받는 값 |
| --- | --- | --- |
| `dog.label()` | `dog` | `self`가 `dog`를 가리킴 |
| `Dog.label(dog)` | 없음 | 직접 넣은 `dog`를 `self`가 받음 |
| `Dog.kind()` 또는 `dog.kind()` | `Dog` | `cls`가 `Dog`를 가리킴 |
| `Dog.sound()` 또는 `dog.sound()` | 없음 | 매개변수 없음 |

일반 메서드를 `def sound():`로 정의하고 `dog.sound()`로 호출하면 본문을 실행하기 전에 인자 개수가 맞지 않는다. “본문에서 `self`를 쓰지 않으니 없어도 된다”와 “호출할 때 인스턴스가 전달된다”는 별개다.

정적 메서드도 **명시적으로 받은 객체**의 속성에는 접근할 수 있다. 인스턴스를 자동 전달하지 않을 뿐, 속성 접근을 금지하지 않는다.

```python
class NameReader:
    @staticmethod
    def read(obj):
        return obj.name

print(NameReader.read(dog))  # 콩이
```

이 예시는 앞 코드의 `dog`를 이어서 사용한다. 인스턴스 자신의 상태를 읽는 역할이라면 보통 일반 메서드가 자연스럽다.

## 데코레이터는 정의할 때 적용된다

`@decorate`는 함수를 정의한 뒤 `decorate(그 함수)`의 결과를 같은 이름에 연결한다. 함수 객체를 넘기는 것과 함수를 호출해 반환값을 넘기는 것은 다르다.

```python
def decorate(func):
    print("데코레이터 적용")

    def wrapper():
        print("호출 전")
        return func()

    return wrapper

@decorate
def hello():
    return "안녕"

print(hello())
```

**보충 예제의 출력 순서**는 `데코레이터 적용`, `호출 전`, `안녕`이다. 첫 출력은 함수 정의 단계에서 발생한다. 나머지는 `hello()`를 호출할 때 발생한다. `@staticmethod`도 데코레이터 문법을 쓰지만, 위 예제처럼 메시지를 출력하는 일반 래퍼와 같은 일을 하는 것은 아니다. 클래스 속성으로 조회할 때 자동 인자를 붙이지 않도록 하는 역할이다.

## 타입 힌트와 실행 시 검사는 다르다

`text: str`과 `-> str`은 기대하는 타입을 적은 표기다. 표기만으로 Python이 모든 입력과 반환값을 검사하지는 않는다.

```python
def echo(text: str) -> str:
    return text

print(echo(3))  # 3
```

이 **보충 예제**는 숫자를 그대로 반환한다. 타입 검사 도구는 다른 판단을 할 수 있지만 함수 실행 자체를 힌트가 막지는 않는다. 입력을 제한하려면 별도의 검사가 필요하다.

```python
class TextSample:
    def __init__(self, text: str):
        if not isinstance(text, str):
            raise TypeError("text는 문자열이어야 합니다")
        self.text = text

    def __str__(self) -> str:
        return self.text

    def __len__(self) -> int:
        return len(self.text)

sample = TextSample("AI")
print(str(sample))  # AI
print(len(sample))  # 2
```

`isinstance(값, 클래스)`는 해당 클래스와 그 하위 클래스의 인스턴스인지 확인한다. 따라서 `isinstance(True, int)`도 `True`다. `bool`이 `int`의 하위 클래스이기 때문이다. “정수만 받되 불리언은 제외한다”는 요구라면 이 차이를 검사에 반영해야 한다.

## 특별 메서드는 호출한 연산의 규칙을 따른다

`__str__`의 `-> str` 힌트는 설명이지만, `str(obj)`가 `__str__`의 반환값에 요구하는 문자열 규칙은 실제로 검사된다. `__len__`도 길이로 쓸 수 있는 음이 아닌 정수를 반환해야 한다. 길이에는 실행 환경에서 표현할 수 있는 상한도 있다.

| 작성한 메서드 | 직접 호출 | 해당 연산으로 호출 |
| --- | --- | --- |
| `def __str__(self): return 3` | `obj.__str__()`는 `3` 반환 | `str(obj)`는 `TypeError` |
| `def __len__(self): return -1` | `obj.__len__()`는 `-1` 반환 | `len(obj)`는 `ValueError` |
| `def __len__(self): return 2.5` | `obj.__len__()`는 `2.5` 반환 | `len(obj)`는 `TypeError` |

따라서 “함수는 아무 값이나 반환할 수 있다”만으로 특별 메서드를 설명하면 부족하다. 그 값을 **누가 어떤 용도로 사용하는지**까지 봐야 한다. `print(sample)`은 이 예제에서 문자열 표현을 사용한다. `__str__`에 모든 속성을 표시할 필요는 없으며, 일부만 보인다고 다른 속성이 사라지는 것도 아니다.

## 상속은 함수 본문을 미리 실행하지 않는다

클래스 정의문을 실행하면 클래스 객체가 만들어진다. `class Square(Shape):`는 부모와의 관계를 정하지만, 부모의 모든 메서드 본문을 실행하는 문장이 아니다. 메서드 본문은 호출할 때 실행된다.

다음은 `pass`와 오버라이딩을 구분하는 **보충 예제**다.

```python
class Shape:
    def area(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side ** 2

print(Shape().area())     # None
print(Square(3).area())   # 9
```

`pass`는 아무 작업도 하지 않는 문장이다. 이 함수는 `return` 없이 끝나므로 `None`을 반환한다. 자식에게 구현을 강제하는 장치가 아니다. `Square`는 같은 이름의 메서드를 정의해 호출 결과를 바꾼다. 이를 오버라이딩이라고 한다. 추상 메서드처럼 구현을 강제하려면 별도 기능이 필요하지만, 위 코드에는 그런 기능이 없다.

속성의 소유자와 여러 객체의 연결은 [[python/object-state-and-composition]]에서 이어진다.

## 퀴즈: 호출 규칙과 반환 규칙 중 무엇이 작동할까?

아래는 새로 만든 복습 문제다. 코드를 실행하기 전에 각 결과를 예상해 보자.

```python
class Sample:
    def show():
        return "값"

    @staticmethod
    def number(value: int):
        return value

    def __str__(self):
        return 7

s = Sample()
```

1. `s.show()`와 `Sample.show()`의 차이는 무엇인가?
2. `s.number("3")`은 숫자 3과 문자열 `"3"` 중 무엇을 반환하는가?
3. `s.__str__()`과 `str(s)`의 결과는 같은가?

<details>
<summary>정답과 이유</summary>

1. `s.show()`는 인스턴스를 자동 전달하지만 매개변수가 없어 `TypeError`가 난다. `Sample.show()`는 인자를 전달하지 않아 `"값"`을 반환한다.
2. 문자열 `"3"`을 반환한다. 정적 메서드는 `self`를 자동으로 붙이지 않으며, 타입 힌트가 문자열을 숫자로 변환하지 않는다.
3. 직접 호출은 정수 `7`을 반환한다. `str(s)`는 반환값이 문자열이 아니어서 `TypeError`가 난다.

</details>
