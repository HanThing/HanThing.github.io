---
title: import와 패키지
date: 2026-09-20
publish: true
courseId: python
lessonId: python-modules
topics: [실전 파이썬 준비하기]
type: concept
sources:
  - 2026-09-18 개인 Python 학습 대화 (아래 질문 기록으로 연결, 원문은 비공개 보존)
  - 개인 Python 학습 정리 (2026-09-20 이관)
tags: [python]
---

`import`는 파일을 현재 코드에 복사하거나 작업 폴더를 바꾸지 않는다. 모듈을 찾고, 처음이면 코드를 실행해 모듈 객체를 만든 뒤 이름을 연결한다. `__init__.py`는 패키지를 불러올 때 실행되는 초기화 파일이지 공개 이름의 허용 목록이 아니다.

이어 보기: [[python/self-and-objects]], [[python/files-and-with]]

이 개념이 필요했던 질문: [[learning/2026-09-18-imports-and-packages|import의 실행과 이름 연결을 물었던 기록]], [[learning/2026-09-18-frameworks|라이브러리와 프레임워크의 역할을 비교한 기록]].

## 퀴즈: 같은 모듈을 두 번 import하면?

설명용 예제입니다. `helper.py`의 내용은 `print("불러옴")` 한 줄뿐이고 현재 세션에서는 아직 읽지 않았습니다.

```python
import helper
import helper
```

`불러옴`은 몇 번 출력될까요? 이때 현재 작업 폴더도 바뀔까요? 일반 패키지의 `__init__.py`는 가져올 수 있는 이름의 허용 목록일까요?

<details>
<summary>정답과 이유 보기</summary>

이 조건에서는 한 번 출력됩니다. 처음 로드한 모듈은 캐시되어 두 번째 `import`가 같은 모듈 객체를 사용합니다. 작업 폴더는 바뀌지 않습니다. 일반 패키지의 `__init__.py`는 패키지를 초기화하는 코드이며 허용 목록이 아닙니다. 여기서는 명시적 재로딩이나 캐시 변경은 하지 않았다고 가정합니다.

</details>

*복습을 위해 만든 보충 문제입니다. 실제 학습자의 응답 기록은 아닙니다.*
