// Generated from public Markdown by _source/generate-catalog.mjs.
window.HANTHING_CONTENT = {
  "curriculumSource": "https://docs.google.com/spreadsheets/d/1vF_S-DV4Pm0qRnsspfpEmKRvyj0j4Miam4YofqXPM04/edit?gid=624392885",
  "courses": [
    {
      "id": "python",
      "title": "실전 파이썬 준비하기",
      "lessons": [
        {
          "id": "python-basics",
          "title": "파이썬 기초 복습",
          "kind": "supplemental"
        },
        {
          "id": "data-overview",
          "title": "데이터 활용 오버뷰",
          "kind": "official"
        },
        {
          "id": "python-modules",
          "title": "파이썬 응용하기(모듈, 라이브러리)",
          "kind": "official"
        },
        {
          "id": "objects-and-classes",
          "title": "객체와 클래스",
          "kind": "official"
        }
      ]
    },
    {
      "id": "data-analysis",
      "title": "데이터 분석",
      "lessons": [
        {
          "id": "data-toolkit",
          "title": "데이터 사이언스 Toolkit",
          "kind": "official"
        },
        {
          "id": "statistics-and-visualization",
          "title": "기초 통계와 데이터 시각화",
          "kind": "official"
        },
        {
          "id": "dataframe",
          "title": "DataFrame 마스터하기",
          "kind": "official"
        }
      ]
    },
    {
      "id": "machine-learning",
      "title": "머신러닝",
      "lessons": []
    },
    {
      "id": "pytorch",
      "title": "PyTorch",
      "lessons": []
    },
    {
      "id": "deep-learning",
      "title": "딥러닝",
      "lessons": []
    },
    {
      "id": "computer-vision",
      "title": "컴퓨터 비전",
      "lessons": []
    },
    {
      "id": "version-control",
      "title": "버전관리 및 협업하기",
      "lessons": []
    },
    {
      "id": "beginner-project",
      "title": "AI 엔지니어 초급 프로젝트",
      "lessons": []
    },
    {
      "id": "nlp",
      "title": "자연어 처리",
      "lessons": []
    },
    {
      "id": "llm",
      "title": "대규모 언어 모델(LLM)",
      "lessons": []
    },
    {
      "id": "intermediate-project",
      "title": "AI 엔지니어 중급 프로젝트",
      "lessons": []
    },
    {
      "id": "docker",
      "title": "Docker",
      "lessons": []
    },
    {
      "id": "model-deployment",
      "title": "모델 배포하기",
      "lessons": []
    },
    {
      "id": "inference-optimization",
      "title": "추론 최적화",
      "lessons": []
    },
    {
      "id": "advanced-project",
      "title": "AI 엔지니어 고급 프로젝트",
      "lessons": []
    }
  ],
  "notes": [
    {
      "id": "data/numpy-array-axes",
      "title": "NumPy 배열 — shape과 axis를 주소로 읽기",
      "description": "리스트와 ndarray의 차이부터 다차원 인덱싱, 불리언 선택과 축별 평균까지.",
      "date": "2026-09-23",
      "published": "2026-09-24",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "data-toolkit",
      "url": "/notes/data/numpy-array-axes",
      "links": [
        "learning/2026-09-23-numpy-and-tensors",
        "data/observation-unit",
        "data/numpy-vectors-matmul",
        "data/numpy-shape-views",
        "data/numpy-broadcasting"
      ],
      "sources": [
        "Explain NumPy and tensors 학습 대화 (2026-09-23)",
        "https://numpy.org/doc/stable/user/absolute_beginners.html",
        "https://numpy.org/doc/stable/user/basics.indexing.html"
      ]
    },
    {
      "id": "data/numpy-broadcasting",
      "title": "브로드캐스팅 — 어떤 값을 어디에 재사용하는가",
      "description": "오른쪽 축 정렬, None과 keepdims, 정규분포 난수와 feature별 표준화를 연결한다.",
      "date": "2026-09-23",
      "published": "2026-09-24",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "data-toolkit",
      "url": "/notes/data/numpy-broadcasting",
      "links": [
        "learning/2026-09-23-numpy-and-tensors",
        "data/numpy-array-axes",
        "data/numpy-linear-layers",
        "data/numpy-shape-views",
        "data/numpy-vectors-matmul"
      ],
      "sources": [
        "Explain NumPy and tensors 학습 대화 (2026-09-23)",
        "https://numpy.org/doc/stable/user/basics.broadcasting.html",
        "https://numpy.org/doc/stable/reference/random/generated/numpy.random.Generator.normal.html"
      ]
    },
    {
      "id": "data/numpy-linear-layers",
      "title": "선형층 — 샘플은 유지하고 feature를 바꾸는 계산",
      "description": "X @ W + b의 축, 가중치와 편향의 역할, 두 선형층과 학습의 차이를 설명한다.",
      "date": "2026-09-23",
      "published": "2026-09-24",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "data-toolkit",
      "url": "/notes/data/numpy-linear-layers",
      "links": [
        "data/numpy-array-axes",
        "data/numpy-vectors-matmul",
        "data/numpy-broadcasting",
        "learning/2026-09-23-numpy-and-tensors"
      ],
      "sources": [
        "Explain NumPy and tensors 학습 대화 (2026-09-23)",
        "https://numpy.org/doc/stable/reference/generated/numpy.matmul.html",
        "https://numpy.org/doc/stable/user/basics.broadcasting.html"
      ]
    },
    {
      "id": "data/numpy-shape-views",
      "title": "NumPy 모양 변경 — 새 축, 뷰, reshape와 stack",
      "description": "배열 객체와 데이터 공유를 구분하고 실제 값으로 모양 변경을 확인한다.",
      "date": "2026-09-23",
      "published": "2026-09-24",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "data-toolkit",
      "url": "/notes/data/numpy-shape-views",
      "links": [
        "learning/2026-09-23-numpy-and-tensors",
        "data/numpy-array-axes",
        "data/numpy-broadcasting"
      ],
      "sources": [
        "Explain NumPy and tensors 학습 대화 (2026-09-23)",
        "https://numpy.org/doc/stable/user/basics.copies.html",
        "https://numpy.org/doc/stable/reference/generated/numpy.stack.html",
        "https://numpy.org/doc/stable/reference/generated/numpy.concatenate.html"
      ]
    },
    {
      "id": "data/numpy-vectors-matmul",
      "title": "벡터의 길이에서 행렬곱과 코사인 유사도까지",
      "description": "원소별 곱과 내적, norm과 표준편차, 배치 벡터의 정규화와 검색을 구분한다.",
      "date": "2026-09-23",
      "published": "2026-09-24",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "data-toolkit",
      "url": "/notes/data/numpy-vectors-matmul",
      "links": [
        "learning/2026-09-23-numpy-and-tensors",
        "data/numpy-array-axes",
        "data/numpy-broadcasting",
        "data/numpy-linear-layers",
        "data/numpy-shape-views"
      ],
      "sources": [
        "Explain NumPy and tensors 학습 대화 (2026-09-23)",
        "https://numpy.org/doc/stable/reference/generated/numpy.matmul.html",
        "https://numpy.org/doc/stable/reference/generated/numpy.linalg.norm.html"
      ]
    },
    {
      "id": "learning/2026-09-23-numpy-and-tensors",
      "title": "NumPy와 텐서 — shape을 읽는 법에서 벡터 검색까지",
      "description": "실제 질문, 브로드캐스팅 풀이, 마지막 자기 설명의 교정을 모은 9월 23일 학습 기록.",
      "date": "2026-09-23",
      "published": "2026-09-24",
      "type": "journal",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "data-toolkit",
      "url": "/notes/learning/2026-09-23-numpy-and-tensors",
      "links": [
        "data/numpy-array-axes",
        "data/numpy-shape-views",
        "data/numpy-broadcasting",
        "data/numpy-vectors-matmul",
        "data/numpy-linear-layers"
      ],
      "sources": [
        "Explain NumPy and tensors 학습 대화 (2026-09-23)",
        "https://numpy.org/doc/stable/user/absolute_beginners.html"
      ]
    },
    {
      "id": "python/loop-exit",
      "title": "반복문 종료와 for–else",
      "description": "break는 반복문을 끝낸다. for의 else는 항목을 모두 소진했을 때 실행한다.",
      "date": "2026-09-22",
      "published": "2026-09-22",
      "type": "concept",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/python/loop-exit",
      "links": [
        "learning/2026-09-18-loop-exit",
        "python/notebook-state"
      ],
      "sources": [
        "https://docs.python.org/3/tutorial/controlflow.html#else-clauses-on-loops",
        "https://hanthing.github.io/notes/learning/2026-09-18-loop-exit"
      ]
    },
    {
      "id": "learning/2026-09-18-collections-and-palindrome",
      "title": "회문 비교와 중복 제거에서 어떤 값을 써야 할까?",
      "description": "대소문자 무시 조건, 문자열 반환값, 양끝 인덱스, set과 items의 결과를 확인한 기록.",
      "date": "2026-09-18",
      "published": "2026-09-22",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/learning/2026-09-18-collections-and-palindrome",
      "links": [
        "python/iterables-and-iterators",
        "python/loop-exit",
        "learning/2026-09-18-files-and-strings"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 — 회문 코드 점검·중복 제거·딕셔너리 items 질문 (공개용 질문 발췌·설명 재구성)"
      ]
    },
    {
      "id": "learning/2026-09-18-comprehensions",
      "title": "한 줄에 for가 두 번 나오는 컴프리헨션",
      "description": "중첩 리스트를 펼치는 문제에서 for의 순서와 맨 앞 x의 역할을 물은 기록.",
      "date": "2026-09-18",
      "published": "2026-09-22",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/learning/2026-09-18-comprehensions",
      "links": [
        "python/comprehensions",
        "learning/2026-09-18-lambda-map-sort"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 — 중첩 리스트 평탄화·컴프리헨션 질문 (공개용 질문 발췌·설명 재구성)"
      ]
    },
    {
      "id": "learning/2026-09-18-files-and-strings",
      "title": "파일에서 읽은 한 줄은 어떤 값을 거쳐 단어가 될까?",
      "description": "split·strip부터 파일 객체, with, 읽기 위치, 언패킹까지 단어장 예제의 흐름을 풀어 본 기록.",
      "date": "2026-09-18",
      "published": "2026-09-22",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/learning/2026-09-18-files-and-strings",
      "links": [
        "learning/2026-09-18-objects-and-self",
        "learning/2026-09-18-lambda-map-sort",
        "python/files-and-with",
        "python/iterables-and-iterators",
        "python/args-and-kwargs"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 — 문자열 분리·단어장 파일·with·읽기 위치·언패킹 질문 (공개용 질문 발췌·설명 재구성)"
      ]
    },
    {
      "id": "learning/2026-09-18-frameworks",
      "title": "라이브러리와 프레임워크의 차이가 왜 필요할까?",
      "description": "용어 구분에 그치지 않고, 공통 실행 흐름을 맡기는 이유와 한계를 따져 물은 기록.",
      "date": "2026-09-18",
      "published": "2026-09-22",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-modules",
      "url": "/notes/learning/2026-09-18-frameworks",
      "links": [
        "python/imports-and-packages",
        "learning/2026-09-18-imports-and-packages"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 — 라이브러리·프레임워크·IoC 질문 (공개용 질문 발췌·설명 재구성)"
      ]
    },
    {
      "id": "learning/2026-09-18-imports-and-packages",
      "title": "import는 파일을 옮기는 걸까, 이름을 연결하는 걸까?",
      "description": "모듈·패키지의 구조부터 __init__.py의 실행 주체까지, 설명의 조건이 바뀌며 생긴 혼동을 바로잡은 기록.",
      "date": "2026-09-18",
      "published": "2026-09-22",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-modules",
      "url": "/notes/learning/2026-09-18-imports-and-packages",
      "links": [
        "learning/2026-09-18-notebook-state",
        "python/imports-and-packages",
        "learning/2026-09-18-objects-and-self",
        "learning/2026-09-18-frameworks"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 — 모듈·패키지·파일 작성·초기화 질문 (공개용 질문 발췌·설명 재구성)"
      ]
    },
    {
      "id": "learning/2026-09-18-lambda-map-sort",
      "title": "lambda, map, sort의 key에서 누가 함수를 호출할까?",
      "description": "제곱 리스트와 길이순 정렬을 비교하며, 함수 자체와 반환값·고정 매개변수 이름을 구분한 질문들.",
      "date": "2026-09-18",
      "published": "2026-09-22",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/learning/2026-09-18-lambda-map-sort",
      "links": [
        "python/sorting-and-callables",
        "python/iterables-and-iterators",
        "learning/2026-09-18-notebook-state"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 — 제곱 리스트·길이순 정렬 질문 (공개용 질문 발췌·설명 재구성)"
      ]
    },
    {
      "id": "learning/2026-09-18-loop-exit",
      "title": "정답을 맞혔는데 왜 실패 안내까지 실행될까?",
      "description": "여섯 번의 숫자 맞히기에서 프로그램 종료를 물었던 실제 의도와 for–else로 분리한 성공·실패 흐름.",
      "date": "2026-09-18",
      "published": "2026-09-22",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/learning/2026-09-18-loop-exit",
      "links": [
        "python/loop-exit",
        "python/notebook-state"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 — 7번 숫자 맞히기의 종료 질문·당시 코드 확인 (공개용 질문 발췌·설명 재구성)"
      ]
    },
    {
      "id": "learning/2026-09-18-notebook-state",
      "title": "코드를 고쳤는데 list 오류가 계속 나는 이유",
      "description": "내장 이름을 가린 변수, 노트북의 실행 상태, 누적 변수의 초기값을 실제 오류에서 구분한 기록.",
      "date": "2026-09-18",
      "published": "2026-09-22",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/learning/2026-09-18-notebook-state",
      "links": [
        "python/notebook-state",
        "python/iterables-and-iterators",
        "learning/2026-09-18-lambda-map-sort"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 — 노트북 17번 list 오류·16번 홀수 합 질문 (공개용 질문 발췌·설명 재구성)"
      ]
    },
    {
      "id": "learning/2026-09-18-objects-and-self",
      "title": "객체·인스턴스·self는 어떤 대상을 가리킬까?",
      "description": "학생 등급 문제를 바탕으로 이름과 객체, 내장 타입과 클래스, 두 종류의 초기화를 연결한 질문들.",
      "date": "2026-09-18",
      "published": "2026-09-22",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "objects-and-classes",
      "url": "/notes/learning/2026-09-18-objects-and-self",
      "links": [
        "learning/2026-09-18-imports-and-packages",
        "python/self-and-objects",
        "learning/2026-09-18-files-and-strings"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 — 객체·인스턴스·학생 등급 문제·self 질문 (공개용 질문 발췌·설명 재구성)"
      ]
    },
    {
      "id": "python/args-and-kwargs",
      "title": "args와 kwargs의 두 방향",
      "description": "함수 정의에서 *args는 남는 위치 인자를 튜플로, **kwargs는 남는 키워드 인자를 딕셔너리로 모은다. 호출에서 *와 **는 반대로 이터러블과 매핑을 인자로 푼다. 딕셔너리 하나를 그대로 넘기는 것과 **mapping은 다르다.",
      "date": "2026-09-20",
      "published": "2026-09-20",
      "type": "concept",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/python/args-and-kwargs",
      "links": [
        "python/self-and-objects",
        "python/iterables-and-iterators"
      ],
      "sources": [
        "개인 Python 학습 정리 (2026-09-20 이관)"
      ]
    },
    {
      "id": "python/comprehensions",
      "title": "리스트 컴프리헨션 읽기",
      "description": "[x for row in matrix for x in row]은 바깥 row 반복 뒤 안쪽 x 반복 순서로 읽는다. 맨 앞의 x는 각 반복에서 결과에 넣을 표현식이다. 여러 동작이 필요하거나 순서가 헷갈리면 같은 구조의 일반 for문으로 먼저 펼친다.",
      "date": "2026-09-20",
      "published": "2026-09-20",
      "type": "concept",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/python/comprehensions",
      "links": [
        "python/iterables-and-iterators",
        "python/sorting-and-callables",
        "learning/2026-09-18-comprehensions"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 (아래 질문 기록으로 연결, 원문은 비공개 보존)",
        "개인 Python 학습 정리 (2026-09-20 이관)"
      ]
    },
    {
      "id": "python/files-and-with",
      "title": "파일 객체와 with",
      "description": "with open(...) as file:에서 file은 열린 파일 객체다. 블록을 벗어나면 예외가 발생해도 파일을 닫지만, 예외 자체를 숨기지는 않는다. read()를 반복하면 현재 읽기 위치부터 이어지며, 다시 읽으려면 seek()나 새 스트림이 필요하다.",
      "date": "2026-09-20",
      "published": "2026-09-20",
      "type": "concept",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/python/files-and-with",
      "links": [
        "python/imports-and-packages",
        "python/iterables-and-iterators",
        "learning/2026-09-18-files-and-strings"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 (아래 질문 기록으로 연결, 원문은 비공개 보존)",
        "개인 Python 학습 정리 (2026-09-20 이관)"
      ]
    },
    {
      "id": "python/imports-and-packages",
      "title": "import와 패키지",
      "description": "import는 파일을 현재 코드에 복사하거나 작업 폴더를 바꾸지 않는다. 모듈을 찾고, 처음이면 코드를 실행해 모듈 객체를 만든 뒤 이름을 연결한다. __init__.py는 패키지를 불러올 때 실행되는 초기화 파일이지 공개 이름의 허용 목록이 아니다.",
      "date": "2026-09-20",
      "published": "2026-09-20",
      "type": "concept",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-modules",
      "url": "/notes/python/imports-and-packages",
      "links": [
        "python/self-and-objects",
        "python/files-and-with",
        "learning/2026-09-18-imports-and-packages",
        "learning/2026-09-18-frameworks"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 (아래 질문 기록으로 연결, 원문은 비공개 보존)",
        "개인 Python 학습 정리 (2026-09-20 이관)"
      ]
    },
    {
      "id": "python/iterables-and-iterators",
      "title": "이터러블과 이터레이터",
      "description": "리스트는 여러 번 순회할 수 있는 이터러블이다. zip이나 map 객체 같은 이터레이터는 꺼낸 위치를 기억한다. next()로 하나를 꺼낸 뒤 list()로 모으면 남은 값만 수집되고, 소진된 이터레이터를 다시 수집하면 빈 리스트가 된다.",
      "date": "2026-09-20",
      "published": "2026-09-20",
      "type": "concept",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/python/iterables-and-iterators",
      "links": [
        "python/comprehensions",
        "python/sorting-and-callables",
        "learning/2026-09-18-lambda-map-sort"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 (아래 질문 기록으로 연결, 원문은 비공개 보존)",
        "개인 Python 학습 정리 (2026-09-20 이관)"
      ]
    },
    {
      "id": "python/notebook-state",
      "title": "노트북 이름 공간과 내장 이름",
      "description": "list = [...]를 실행하면 사용자 이름이 내장 list를 가려서 list(...) 호출이 TypeError가 된다. 셀을 nums = [...]로 고치는 일은 이미 실행된 list 이름을 없애지 않는다. del list는 사용자 이름 연결만 제거하며, 다시 실행",
      "date": "2026-09-20",
      "published": "2026-09-20",
      "type": "concept",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/python/notebook-state",
      "links": [
        "python/imports-and-packages",
        "python/iterables-and-iterators",
        "python/loop-exit",
        "learning/2026-09-18-loop-exit",
        "learning/2026-09-18-notebook-state"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 (아래 질문 기록으로 연결, 원문은 비공개 보존)",
        "개인 Python 학습 정리 (2026-09-20 이관)",
        "https://hanthing.github.io/notes/learning/2026-09-18-loop-exit"
      ]
    },
    {
      "id": "python/self-and-objects",
      "title": "self와 객체 호출",
      "description": "item.label()은 개념적으로 Item.label(item)과 같다. 호출한 인스턴스가 첫 매개변수 self에 연결된다. 왼쪽 self.value는 인스턴스의 속성이고, 오른쪽 value는 전달받은 매개변수일 수 있으므로 둘을 구분한다.",
      "date": "2026-09-20",
      "published": "2026-09-20",
      "type": "concept",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "objects-and-classes",
      "url": "/notes/python/self-and-objects",
      "links": [
        "python/imports-and-packages",
        "python/args-and-kwargs",
        "learning/2026-09-18-objects-and-self"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 (아래 질문 기록으로 연결, 원문은 비공개 보존)",
        "개인 Python 학습 정리 (2026-09-20 이관)"
      ]
    },
    {
      "id": "python/sorting-and-callables",
      "title": "정렬 key와 호출 가능한 객체",
      "description": "sort(key=len)에서 key에는 길이 결과가 아니라 함수가 전달된다. sort가 각 요소에 함수를 호출하고 반환값을 비교 기준으로 쓴다. 원래 리스트를 수정하고 None을 반환한다. map도 함수를 요소마다 호출하지만, 그 반환값을 새 흐름으로 만든다는 차이가",
      "date": "2026-09-20",
      "published": "2026-09-20",
      "type": "concept",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/python/sorting-and-callables",
      "links": [
        "python/comprehensions",
        "python/iterables-and-iterators",
        "learning/2026-09-18-lambda-map-sort"
      ],
      "sources": [
        "2026-09-18 개인 Python 학습 대화 (아래 질문 기록으로 연결, 원문은 비공개 보존)",
        "개인 Python 학습 정리 (2026-09-20 이관)"
      ]
    },
    {
      "id": "data/data-quality",
      "title": "데이터 품질 — 고치기 전에 원인을 찾기",
      "description": "빈칸을 0으로 채우고, 큰 값을 지우고, 같은 고객을 한 행만 남기는 것이 언제나 정답일까요? 처리 규칙보다 먼저 원인을 확인해야 합니다.",
      "date": "2026-09-17",
      "published": "2026-09-17",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "python",
      "lessonId": "data-overview",
      "url": "/notes/data/data-quality",
      "links": [
        "data/observation-unit",
        "data/eda-and-causality",
        "data/interpretation"
      ],
      "sources": [
        "데이터 사이언스 오버뷰 강의 자료 (2026-09-17 정리, 본문 쪽수 참조)"
      ]
    },
    {
      "id": "data/data-science-overview",
      "title": "데이터 사이언스 — 질문에서 판단까지",
      "description": "“매출을 분석해 주세요”라는 요청만으로는 필요한 작업을 정할 수 없습니다. 비교할 기간과 취소 주문의 처리 기준, 결과로 내릴 결정을 먼저 정해야 합니다.",
      "date": "2026-09-17",
      "published": "2026-09-17",
      "type": "concept",
      "topics": [
        "실전 파이썬 준비하기",
        "데이터 분석"
      ],
      "courseId": "python",
      "lessonId": "data-overview",
      "url": "/notes/data/data-science-overview",
      "links": [
        "data/observation-unit",
        "data/data-quality",
        "data/wrangling",
        "data/eda-and-causality",
        "data/interpretation",
        "wiki-workflow",
        "bootcamp/roadmap"
      ],
      "sources": [
        "데이터 사이언스 오버뷰 강의 자료 (2026-09-17 정리, 본문 쪽수 참조)"
      ]
    },
    {
      "id": "data/eda-and-causality",
      "title": "EDA와 해석 — 평균 뒤의 분포 보기",
      "description": "배송 시간 A가 [4, 5, 5, 5, 5, 6]일, B가 [1, 1, 1, 9, 9, 9]일이면 둘 다 평균은 5일입니다. 그러나 고객이 겪는 경험은 다릅니다. 요약 통계만으로 전체 모양을 알 수는 없습니다.",
      "date": "2026-09-17",
      "published": "2026-09-17",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "python",
      "lessonId": "data-overview",
      "url": "/notes/data/eda-and-causality",
      "links": [
        "data/data-quality",
        "data/interpretation",
        "questions"
      ],
      "sources": [
        "데이터 사이언스 오버뷰 강의 자료 (2026-09-17 정리, 본문 쪽수 참조)"
      ]
    },
    {
      "id": "data/interpretation",
      "title": "결과 해석 — 보이는 차이를 믿기 전에",
      "description": "매출이 100에서 110만 원으로 늘면 증가율은 **10%**입니다. 축을 90에서 시작하는 막대그래프에서는 길이가 10과 20이 되어 두 배처럼 보입니다. 값의 비율과 표시된 길이의 비율은 다릅니다.",
      "date": "2026-09-17",
      "published": "2026-09-17",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "python",
      "lessonId": "data-overview",
      "url": "/notes/data/interpretation",
      "links": [
        "data/eda-and-causality",
        "data/data-science-overview",
        "questions"
      ],
      "sources": [
        "데이터 사이언스 오버뷰 강의 자료 (2026-09-17 정리, 본문 쪽수 참조)"
      ]
    },
    {
      "id": "data/observation-unit",
      "title": "관측 단위 — 한 행은 무엇인가",
      "description": "숫자를 계산하기 전에 한 행이 나타내는 대상을 정합니다. 주문 한 건과 고객 한 명은 다른 단위입니다.",
      "date": "2026-09-17",
      "published": "2026-09-17",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "python",
      "lessonId": "data-overview",
      "url": "/notes/data/observation-unit",
      "links": [
        "data/data-quality",
        "data/wrangling",
        "data/data-science-overview"
      ],
      "sources": [
        "데이터 사이언스 오버뷰 강의 자료 (2026-09-17 정리, 본문 쪽수 참조)"
      ]
    },
    {
      "id": "data/wrangling",
      "title": "변형·집계·병합 — 표의 단위가 바뀌는 순간",
      "description": "데이터를 정리한다는 것은 질문에 답할 수 있는 모양으로 바꾼다는 뜻입니다. 형식을 통일하는 작업과 값을 추측해서 만드는 작업은 구별해야 합니다.",
      "date": "2026-09-17",
      "published": "2026-09-17",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "python",
      "lessonId": "data-overview",
      "url": "/notes/data/wrangling",
      "links": [
        "data/observation-unit",
        "data/data-quality",
        "data/eda-and-causality",
        "python/index"
      ],
      "sources": [
        "데이터 사이언스 오버뷰 강의 자료 (2026-09-17 정리, 본문 쪽수 참조)"
      ]
    }
  ],
  "references": [
    {
      "id": "bootcamp/roadmap",
      "title": "부트캠프 학습 지도와 일정",
      "description": "공식 커리큘럼의 과목 순서와 예정 일정, 미션 제출일을 현재 학습 노트와 연결합니다.",
      "date": "2026-09-22",
      "published": "2026-09-22",
      "type": "reference",
      "topics": [
        "실전 파이썬 준비하기",
        "데이터 분석"
      ],
      "url": "/notes/bootcamp/roadmap",
      "links": [
        "python/self-and-objects",
        "python/imports-and-packages",
        "python/args-and-kwargs",
        "data/data-science-overview",
        "data/eda-and-causality",
        "data/wrangling",
        "wiki-workflow",
        "questions"
      ],
      "sources": [
        "https://docs.google.com/spreadsheets/d/1vF_S-DV4Pm0qRnsspfpEmKRvyj0j4Miam4YofqXPM04/edit?gid=624392885"
      ]
    }
  ],
  "questions": [
    {
      "id": "data/numpy-array-axes#질문-numpy는-그냥-같은-타입만-담는-리스트인가-텐서는-무엇인가",
      "title": "NumPy는 그냥 같은 타입만 담는 리스트인가? 텐서는 무엇인가?",
      "url": "/notes/data/numpy-array-axes#질문-numpy는-그냥-같은-타입만-담는-리스트인가-텐서는-무엇인가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy 배열 — shape과 axis를 주소로 읽기",
      "context": "NumPy와 텐서를 처음 접하며, 배열을 리스트와 구분해야 하는 이유와 dtype이 제한하는 범위를 물었다.",
      "intent": "문법보다 데이터 구조와 계산 방식의 차이를 이해하려는 질문이다.",
      "answer": "ndarray는 N차원 배열이다. 숫자 배열은 하나의 dtype으로 해석하는 데이터 버퍼와 shape, strides 등의 정보를 함께 갖는다. 리스트처럼 각 항목의 파이썬 객체를 하나씩 다루는 방식과 달리, 많은 수치 연산을 NumPy 내부 루프로 처리할 수 있다. 배열이 항상 연속된 메모리를 차지하는 것은 아니다. 슬라이스나 전치로 만든 뷰는 다른 간격으로 같은 데이터를 읽을 수 있다."
    },
    {
      "id": "data/numpy-array-axes#질문-shape-ndim-size와-벡터의-차원은-어떻게-다른가",
      "title": "shape, ndim, size와 벡터의 차원은 어떻게 다른가?",
      "url": "/notes/data/numpy-array-axes#질문-shape-ndim-size와-벡터의-차원은-어떻게-다른가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy 배열 — shape과 axis를 주소로 읽기",
      "context": "ndarray의 N, 수학에서 배운 벡터의 차원, (5,)와 (1, 5)의 차이를 함께 질문했다.",
      "intent": "같은 “차원”이라는 말이 서로 다른 대상을 세는 혼동을 풀려는 질문이다.",
      "answer": "ndim은 축 개수, shape은 축별 길이, size는 전체 원소 수다. 수학의 벡터 차원은 여기서는 성분 개수다. [3, 4]는 2차원 벡터를 담은 1차원 배열이다."
    },
    {
      "id": "data/numpy-array-axes#질문-arange는-무엇이고-배열은-어떻게-만드는가",
      "title": "arange는 무엇이고, 배열은 어떻게 만드는가?",
      "url": "/notes/data/numpy-array-axes#질문-arange는-무엇이고-배열은-어떻게-만드는가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy 배열 — shape과 axis를 주소로 읽기",
      "context": "np.arange(24).reshape(2, 3, 4)를 읽기 전에 arange부터 설명해 달라고 했고, 이후 linspace, zeros, ones도 물었다.",
      "intent": "한 줄에 묶인 호출을 생성과 모양 변경으로 나누어 읽으려는 질문이다.",
      "answer": "arange는 일정 간격으로 값을 만들고 끝값을 제외한다. linspace는 기본적으로 양 끝을 포함하여 지정한 개수만큼 만든다. zeros와 ones에는 원하는 shape을 준다."
    },
    {
      "id": "data/numpy-array-axes#질문-x-0을-왜-아까는-행-지금은-열이라고-하나",
      "title": "x[:, 0]을 왜 아까는 행, 지금은 열이라고 하나?",
      "url": "/notes/data/numpy-array-axes#질문-x-0을-왜-아까는-행-지금은-열이라고-하나",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy 배열 — shape과 axis를 주소로 읽기",
      "context": "앞 설명의 배열은 3차원인데, 강사의 화면에는 2차원 점수표가 있었다. 같은 [:, 0]을 두고 설명이 달라져 질문했다.",
      "intent": "표현이 달라진 이유가 인덱싱 규칙의 변화인지, 대상 배열의 변화인지 확인하려는 질문이다.",
      "answer": "규칙은 같다. :는 그 축을 모두 유지하고, 정수 0은 해당 축의 첫 위치를 선택해 그 축을 없앤다. 당시 설명이 현재 화면의 shape을 먼저 확인하지 않아 혼동을 만들었다. 고차원에서 “행·열”만 외우면 이 차이를 놓친다."
    },
    {
      "id": "data/numpy-array-axes#질문-axis0인데-왜-열-평균이고-axis1이면-샘플-평균인가",
      "title": "axis=0인데 왜 열 평균이고, axis=1이면 샘플 평균인가?",
      "url": "/notes/data/numpy-array-axes#질문-axis0인데-왜-열-평균이고-axis1이면-샘플-평균인가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy 배열 — shape과 axis를 주소로 읽기",
      "context": "(100, 5) 배열에서 feature별 평균과 sample별 평균을 구하며 어떤 축을 지정할지 반복해서 확인했다.",
      "intent": "남길 결과와 계산에 모을 축을 구분하려는 질문이다.",
      "answer": "축약 연산의 axis에는 어느 번호를 움직이며 값들을 모을지를 적는다. (샘플, 특성) 배열에서 샘플 번호를 움직여 평균 내면 특성별 평균이 남는다."
    },
    {
      "id": "data/numpy-array-axes#질문-조건에-맞는-값만-고르는-것과-행-전체를-고르는-것은-어떻게-다른가",
      "title": "조건에 맞는 값만 고르는 것과 행 전체를 고르는 것은 어떻게 다른가?",
      "url": "/notes/data/numpy-array-axes#질문-조건에-맞는-값만-고르는-것과-행-전체를-고르는-것은-어떻게-다른가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy 배열 — shape과 axis를 주소로 읽기",
      "context": "점수 실습에서 불리언 인덱싱의 결과 shape을 물었고, 이후 X[X[:, 0] > 0]가 첫 feature가 양수인 행을 고르는지 확인했다.",
      "intent": "조건 배열이 무엇을 선택하는지 안쪽부터 읽으려는 질문이다.",
      "answer": "원본과 같은 shape의 불리언 마스크는 조건을 만족하는 원소들을 1차원으로 모은다. 첫 축 길이의 1차원 마스크는 행을 선택한다."
    },
    {
      "id": "data/numpy-broadcasting#질문-수학에-없던-브로드캐스팅을-왜-쓰는가",
      "title": "수학에 없던 브로드캐스팅을 왜 쓰는가?",
      "url": "/notes/data/numpy-broadcasting#질문-수학에-없던-브로드캐스팅을-왜-쓰는가",
      "topic": "데이터 분석",
      "sourceTitle": "브로드캐스팅 — 어떤 값을 어디에 재사용하는가",
      "context": "행렬 덧셈은 같은 크기끼리 한다고 배웠는데 다른 shape을 더하는 기능이 등장해 필요성을 물었다.",
      "intent": "규칙을 외우기 전에 해결하려는 문제를 이해하려는 질문이다.",
      "answer": "모든 학생의 국어에 5점, 영어에 10점을 더하려면 보정값 [5, 10]을 학생마다 재사용하면 된다. 같은 보정 배열을 학생 수만큼 미리 복제할 필요가 없다. 계산은 여전히 각 원소에서 일어난다."
    },
    {
      "id": "data/numpy-broadcasting#질문-5-5에-5를-더하면-어느-5에-맞추는가",
      "title": "(5, 5)에 (5,)를 더하면 어느 5에 맞추는가?",
      "url": "/notes/data/numpy-broadcasting#질문-5-5에-5를-더하면-어느-5에-맞추는가",
      "topic": "데이터 분석",
      "sourceTitle": "브로드캐스팅 — 어떤 값을 어디에 재사용하는가",
      "context": "앞뒤 축 길이가 모두 5라서 어느 방향으로 더하려는지 shape만으로 알 수 없다고 지적했다.",
      "intent": "계산 방향이 수학적으로 필연적인지, 라이브러리의 약속인지 구분하려는 질문이다.",
      "answer": "NumPy는 의도를 추측하지 않고 오른쪽부터 축을 맞춘다. 없는 앞축은 길이 1로 간주한다. 대응하는 길이가 같거나 한쪽이 1이면 계산할 수 있다. 어느 방향을 기본값으로 삼을지는 정해진 규칙이며, 다른 방향은 shape으로 표현한다."
    },
    {
      "id": "data/numpy-broadcasting#질문-10-1과-5에서도-왜-10-5가-나오는가",
      "title": "(10, 1)과 (5,)에서도 왜 (10, 5)가 나오는가?",
      "url": "/notes/data/numpy-broadcasting#질문-10-1과-5에서도-왜-10-5가-나오는가",
      "topic": "데이터 분석",
      "sourceTitle": "브로드캐스팅 — 어떤 값을 어디에 재사용하는가",
      "context": "(10, 5) + (5,)와 (10, 1) + (5,)가 같은 결과 shape이라는 점을 질문했다.",
      "intent": "큰 입력 하나에 맞추는 것으로만 이해한 규칙을 확장하려는 질문이다.",
      "answer": "두 번째 식은 양쪽이 서로 다른 축에서 재사용된다. (10, 1)은 마지막 축에서, (1, 5)로 비교되는 다른 입력은 앞축에서 재사용된다. 결과가 어느 입력보다도 클 수 있다. shape이 같다고 값까지 같다는 뜻은 아니다."
    },
    {
      "id": "data/numpy-broadcasting#질문-normal의-평균과-표준편차는-한-묶음-안의-숫자에-적용되는가",
      "title": "normal의 평균과 표준편차는 한 묶음 안의 숫자에 적용되는가?",
      "url": "/notes/data/numpy-broadcasting#질문-normal의-평균과-표준편차는-한-묶음-안의-숫자에-적용되는가",
      "topic": "데이터 분석",
      "sourceTitle": "브로드캐스팅 — 어떤 값을 어디에 재사용하는가",
      "context": "loc=[100, 50, 10], scale=[20, 5, 2], size=(1000, 3)으로 만든 데이터의 분포를 물었다.",
      "intent": "샘플 안의 위치와 축, 모집단의 생성 기준과 실제 표본 통계를 구분하려는 질문이다.",
      "answer": "각 열은 서로 다른 정규분포에서 생성된다. 첫 위치는 평균 100·표준편차 20인 분포, 두 번째는 50·5, 세 번째는 10·2다. 한 행의 세 숫자를 평균 내서 100, 50, 10을 얻는다는 뜻이 아니다."
    },
    {
      "id": "data/numpy-broadcasting#질문-feature별-평균을-빼고-표준편차로-나누는-것도-브로드캐스팅인가",
      "title": "feature별 평균을 빼고 표준편차로 나누는 것도 브로드캐스팅인가?",
      "url": "/notes/data/numpy-broadcasting#질문-feature별-평균을-빼고-표준편차로-나누는-것도-브로드캐스팅인가",
      "topic": "데이터 분석",
      "sourceTitle": "브로드캐스팅 — 어떤 값을 어디에 재사용하는가",
      "context": "표준화 실습에서 mean의 shape과 X - mean을 물었고, 당시 사용 코드에서는 std 계산이 사용보다 뒤에 있었다.",
      "intent": "통계 공식과 배열의 실제 실행 순서를 연결하려는 질문이다.",
      "answer": "(N, D) 데이터의 feature별 통계는 (D,)이다. j번째 feature의 평균과 표준편차를 모든 샘플에서 공통으로 쓴다. 정의하는 줄이 사용하는 줄보다 앞에 있어야 현재 X의 통계로 계산한다."
    },
    {
      "id": "data/numpy-linear-layers#질문-feature란-무엇이며-이-배열에는-몇-개인가",
      "title": "feature란 무엇이며, 이 배열에는 몇 개인가?",
      "url": "/notes/data/numpy-linear-layers#질문-feature란-무엇이며-이-배열에는-몇-개인가",
      "topic": "데이터 분석",
      "sourceTitle": "선형층 — 샘플은 유지하고 feature를 바꾸는 계산",
      "context": "선형층 단원을 읽다가 feature의 뜻과 개수를 물었다. 이어서 샘플별 평균과 feature별 평균을 구분하려 했다.",
      "intent": "shape의 숫자가 실제 데이터에서 무엇을 세는지 알고 계산하려는 질문이다.",
      "answer": "이 실습에서는 한 행이 샘플 하나, 한 열이 샘플을 설명하는 특성 하나다. X.shape=(32,10)이면 샘플 32개와 입력 feature 10개다. 이 배치는 문제에서 정한 약속이며 모든 배열의 첫 축이 항상 샘플인 것은 아니다."
    },
    {
      "id": "data/numpy-linear-layers#질문-x--w-뒤에-b를-더할-때도-브로드캐스팅하는가",
      "title": "X @ W 뒤에 b를 더할 때도 브로드캐스팅하는가?",
      "url": "/notes/data/numpy-linear-layers#질문-x--w-뒤에-b를-더할-때도-브로드캐스팅하는가",
      "topic": "데이터 분석",
      "sourceTitle": "선형층 — 샘플은 유지하고 feature를 바꾸는 계산",
      "context": "행렬곱 결과에 1차원 편향을 더하는 코드와 결과 shape을 확인했다.",
      "intent": "feature 변환과 반복 덧셈을 분리해 이해하려는 질문이다.",
      "answer": "그렇다. X:(32,10), W:(10,5)이면 X@W:(32,5)다. b:(5,)를 더하면 같은 편향 5개가 모든 샘플에 재사용된다. b의 각 값은 샘플이 아니라 출력 feature에 대응한다."
    },
    {
      "id": "data/numpy-linear-layers#질문-feature-10개를-8개로-왜-바꾸는가-무엇을-얻는가",
      "title": "feature 10개를 8개로 왜 바꾸는가? 무엇을 얻는가?",
      "url": "/notes/data/numpy-linear-layers#질문-feature-10개를-8개로-왜-바꾸는가-무엇을-얻는가",
      "topic": "데이터 분석",
      "sourceTitle": "선형층 — 샘플은 유지하고 feature를 바꾸는 계산",
      "context": "두 층을 연결하는 실습에서 (32,10) → (32,8) → (32,3)으로 바뀌는 shape을 보고 목적을 물었다.",
      "intent": "곱셈이 가능하다는 사실을 넘어, 변환된 숫자를 만드는 이유를 알고 싶다는 질문이다.",
      "answer": "입력 특성들을 다른 가중치로 조합해 다음 계산에 쓸 표현을 만든다. 8은 이 실습에서 선택한 출력 폭이지, 입력이 10이면 반드시 8로 줄여야 한다는 규칙이 아니다. 좋은 조합인지 여부는 과제와 학습 결과로 판단한다."
    },
    {
      "id": "data/numpy-linear-layers#질문-bias는-왜-필요하며-b를-101로-바꾸면-되는가",
      "title": "bias는 왜 필요하며, b를 (10,1)로 바꾸면 되는가?",
      "url": "/notes/data/numpy-linear-layers#질문-bias는-왜-필요하며-b를-101로-바꾸면-되는가",
      "topic": "데이터 분석",
      "sourceTitle": "선형층 — 샘플은 유지하고 feature를 바꾸는 계산",
      "context": "가중치만으로 충분하지 않은 이유를 묻고, 브로드캐스팅을 위해 편향을 열 모양으로 바꾸는 방안을 제시했다.",
      "intent": "편향의 역할과 shape 조작의 목적을 연결하려는 질문이다.",
      "answer": "편향은 입력이 0이어도 남는 출력을 표현한다. 예를 들어 이익=.3*매출-50에서 고정비 -50이다. W만 쓰면 입력이 0일 때 출력도 0이다. 편향 shape은 출력 feature에 맞춰야 하며 무조건 (10,1)로 바꾸지 않는다."
    },
    {
      "id": "data/numpy-linear-layers#질문-두-선형층에서-h와-y는-무엇이고-이것만으로-학습이-되는가",
      "title": "두 선형층에서 H와 Y는 무엇이고, 이것만으로 학습이 되는가?",
      "url": "/notes/data/numpy-linear-layers#질문-두-선형층에서-h와-y는-무엇이고-이것만으로-학습이-되는가",
      "topic": "데이터 분석",
      "sourceTitle": "선형층 — 샘플은 유지하고 feature를 바꾸는 계산",
      "context": "H=X@W1+b1, Y=H@W2+b2인 도전 문제를 다루며 두 결과의 역할과 전체 계산 목적을 물었다.",
      "intent": "중간값과 파라미터, 계산 실행과 학습을 구분하려는 질문이다.",
      "answer": "H는 첫 층이 계산한 중간 표현이고 Y는 두 번째 층의 출력이다. W와 b가 바뀌지 않는다면 같은 식으로 출력만 계산하는 순전파다. 학습에는 목표와의 오차를 평가하고 W와 b를 갱신하는 과정이 추가로 필요하다."
    },
    {
      "id": "data/numpy-shape-views#질문-none으로-축을-추가하면-새-배열인가-원래-배열을-바꾸는가",
      "title": "None으로 축을 추가하면 새 배열인가, 원래 배열을 바꾸는가?",
      "url": "/notes/data/numpy-shape-views#질문-none으로-축을-추가하면-새-배열인가-원래-배열을-바꾸는가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy 모양 변경 — 새 축, 뷰, reshape와 stack",
      "context": "x[:, None]을 본 뒤 원본 shape도 바뀌는지, 새 배열이라면 데이터도 복사하는지 물었다.",
      "intent": "“새 ndarray”와 “새 데이터”를 분리해서 이해하려는 질문이다.",
      "answer": "이 기본 인덱싱은 같은 데이터를 공유하는 새 배열 객체인 뷰를 만든다. 원본 객체의 shape은 그대로지만 공유 데이터의 값을 바꾸면 양쪽에서 보인다. None은 이 자리에서 새 축을 넣는 인덱스이며 함수가 아니다. np.newaxis와 같다."
    },
    {
      "id": "data/numpy-shape-views#질문-concatenate와-stack은-고차원에서-실제로-무엇이-달라지는가",
      "title": "concatenate와 stack은 고차원에서 실제로 무엇이 달라지는가?",
      "url": "/notes/data/numpy-shape-views#질문-concatenate와-stack은-고차원에서-실제로-무엇이-달라지는가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy 모양 변경 — 새 축, 뷰, reshape와 stack",
      "context": "추상적인 shape 설명 대신 실제 숫자가 있는 예를 요청했고, stack(axis=1)이 원래 배열을 전치하는 것처럼 보인다고 물었다.",
      "intent": "축 번호만 외우지 않고 어느 값이 어느 주소로 가는지 확인하려는 질문이다.",
      "answer": "concatenate는 기존 축을 늘린다. 연결 축을 제외한 shape이 같아야 한다. stack은 같은 shape의 배열들에 새 축을 넣고, 그 새 축의 번호로 원본 배열을 고른다. 두 연산 모두 여기서 입력을 브로드캐스팅해 맞춰 주지 않는다."
    },
    {
      "id": "data/numpy-vectors-matmul#질문-두-벡터를-빼는-것이-왜-거리와-연결되는가",
      "title": "두 벡터를 빼는 것이 왜 거리와 연결되는가?",
      "url": "/notes/data/numpy-vectors-matmul#질문-두-벡터를-빼는-것이-왜-거리와-연결되는가",
      "topic": "데이터 분석",
      "sourceTitle": "벡터의 길이에서 행렬곱과 코사인 유사도까지",
      "context": "벡터 단원에서 두 끝점 사이의 거리를 읽고, 두 벡터의 차이가 한 끝점에서 다른 끝점으로 이동하는 벡터라는 설명을 직접 제시했다.",
      "intent": "거리 공식을 외우기보다 빼기와 길이의 관계를 확인하려는 질문이다.",
      "answer": "a=[1,2], b=[4,6]이면 b-a=[3,4]는 a에서 b로 가는 이동이다. 그 길이 sqrt(3²+4²)=5가 두 점 사이 거리다. 반대로 빼면 방향은 반대지만 길이는 같다."
    },
    {
      "id": "data/numpy-vectors-matmul#질문-행렬의--연산도-행렬곱이라고-생각했는데-무엇이-다른가",
      "title": "행렬의 * 연산도 행렬곱이라고 생각했는데, 무엇이 다른가?",
      "url": "/notes/data/numpy-vectors-matmul#질문-행렬의--연산도-행렬곱이라고-생각했는데-무엇이-다른가",
      "topic": "데이터 분석",
      "sourceTitle": "벡터의 길이에서 행렬곱과 코사인 유사도까지",
      "context": "행렬곱 단원으로 넘어가며 *를 행렬곱이라고 생각했다고 밝혔다.",
      "intent": "연산 기호가 바뀌면 원소를 결합하는 방식이 어떻게 달라지는지 확인하려는 질문이다.",
      "answer": "*는 대응하는 원소끼리 곱한다. @는 1차원 배열끼리면 내적, 2차원 배열끼리면 행렬곱이다. 행렬곱에서는 왼쪽의 한 행과 오른쪽의 한 열을 곱해 더한다."
    },
    {
      "id": "data/numpy-vectors-matmul#질문-코사인-유사도에서-norm은-왜-axis1인가-query에도-axis1을-쓰는가",
      "title": "코사인 유사도에서 norm은 왜 axis=1인가? query에도 axis=1을 쓰는가?",
      "url": "/notes/data/numpy-vectors-matmul#질문-코사인-유사도에서-norm은-왜-axis1인가-query에도-axis1을-쓰는가",
      "topic": "데이터 분석",
      "sourceTitle": "벡터의 길이에서 행렬곱과 코사인 유사도까지",
      "context": "E.shape=(100,64), query.shape=(64,)인 검색 문제에서 행별 norm과 query의 norm을 계산하려 했다. 샘플 100개가 있는 축과 길이를 계산할 축을 혼동하기 쉬운 지점이었다.",
      "intent": "축 이름 대신 실제로 합쳐지는 성분을 기준으로 계산하려는 질문이다.",
      "answer": "E의 각 행이 벡터 하나라면 64개 성분을 제곱해 더해야 한다. 따라서 마지막 축인 axis=1을 줄여 길이 100개를 얻는다. query는 1차원이므로 axis=1 자체가 없다."
    },
    {
      "id": "data/numpy-vectors-matmul#질문-a--b--c는-a--b--c와-같은가",
      "title": "a / b * c는 a / (b * c)와 같은가?",
      "url": "/notes/data/numpy-vectors-matmul#질문-a--b--c는-a--b--c와-같은가",
      "topic": "데이터 분석",
      "sourceTitle": "벡터의 길이에서 행렬곱과 코사인 유사도까지",
      "context": "코사인 유사도의 분모에 두 norm을 넣는 코드를 작성하다 연산 순서를 물었다. 이후 nplinalg.norm(query)라는 이름 오류도 나타났다.",
      "intent": "수식의 분모 전체를 파이썬으로 옮기는 방법과 코드 오류 위치를 구분하려는 질문이다.",
      "answer": "*와 /는 우선순위가 같고 왼쪽부터 계산한다. a/b*c는 (a/b)*c다. 분모가 b*c이면 괄호가 필요하다. 라이브러리 호출은 점을 포함한 np.linalg.norm(query)다."
    },
    {
      "id": "data/numpy-vectors-matmul#질문-표준화와-norm으로-나누기는-무엇이-다른가-길이가-1이면-원래-정보는-사라지는가",
      "title": "표준화와 norm으로 나누기는 무엇이 다른가? 길이가 1이면 원래 정보는 사라지는가?",
      "url": "/notes/data/numpy-vectors-matmul#질문-표준화와-norm으로-나누기는-무엇이-다른가-길이가-1이면-원래-정보는-사라지는가",
      "topic": "데이터 분석",
      "sourceTitle": "벡터의 길이에서 행렬곱과 코사인 유사도까지",
      "context": "표준편차로 나눈 앞 실습과 벡터 길이로 나누는 검색 실습을 비교했다. 정규화한 벡터가 기저인지, 길이가 없어지는 것인지, 원래 정보가 어떻게 되는지도 물었다.",
      "intent": "비슷하게 보이는 나눗셈이 서로 다른 정보를 보존한다는 점을 이해하려는 질문이다.",
      "answer": "feature별 표준화는 (X-평균)/표준편차로 각 특성의 기준과 척도를 맞춘다. L2 정규화는 각 벡터를 자기 길이로 나눠 방향은 유지하고 길이를 1로 만든다. 길이가 없어지는 것은 아니며, 정규화 결과만 남기면 원래 크기를 복원할 수 없다."
    },
    {
      "id": "data/numpy-vectors-matmul#질문-keepdims가-없으면-왜-안-되는가-axis0으로-나누거나-전치하면-되는가",
      "title": "keepdims가 없으면 왜 안 되는가? axis=0으로 나누거나 전치하면 되는가?",
      "url": "/notes/data/numpy-vectors-matmul#질문-keepdims가-없으면-왜-안-되는가-axis0으로-나누거나-전치하면-되는가",
      "topic": "데이터 분석",
      "sourceTitle": "벡터의 길이에서 행렬곱과 코사인 유사도까지",
      "context": "query 10개와 임베딩 1,000개를 한꺼번에 비교하는 문제에서 행별 norm의 (10,)과 (10,1) 차이, 전치를 통한 해결 가능성을 물었다.",
      "intent": "각 벡터에 자기 길이가 적용되도록 shape을 맞추려는 질문이다.",
      "answer": "(10,64)를 행별 길이 (10,1)로 나누면 각 행의 64개 성분에 같은 길이가 적용된다. (10,)은 오른쪽 정렬에서 64와 충돌한다. 1차원 배열의 .T는 shape을 바꾸지 않는다. axis=0은 계산 대상 자체를 바꾼다."
    },
    {
      "id": "learning/2026-09-23-numpy-and-tensors#질문-numpy의-본질은-무엇이고-처음-보는-텐서는-어떻게-이해해야-하는가",
      "title": "NumPy의 본질은 무엇이고, 처음 보는 텐서는 어떻게 이해해야 하는가?",
      "url": "/notes/learning/2026-09-23-numpy-and-tensors#질문-numpy의-본질은-무엇이고-처음-보는-텐서는-어떻게-이해해야-하는가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy와 텐서 — shape을 읽는 법에서 벡터 검색까지",
      "context": "텐서를 처음 접한 상태에서 NumPy를 기능 목록보다 본질부터 설명해 달라고 요청했다. 이후 “축·인덱싱이 특별한가”, “숫자만 다루는가”, “dtype 때문에 빠른가”라는 질문으로 이어졌다.",
      "intent": "새로운 용어를 기존 파이썬 리스트·객체 개념과 연결해 이해하려는 질문이다.",
      "answer": "이 실습의 텐서는 여러 축을 가진 수치 배열로 출발하면 된다. NumPy의 ndarray는 데이터와 dtype·shape·strides 같은 정보를 함께 다룬다. 배열 연산을 한꺼번에 표현할 수 있지만, 문자열·object dtype도 있어 모든 배열이 숫자만 담거나 같은 성능을 내는 것은 아니다."
    },
    {
      "id": "learning/2026-09-23-numpy-and-tensors#질문-아까는-x0이-행이라더니-수업에서는-왜-열인가",
      "title": "아까는 x[:,0]이 행이라더니, 수업에서는 왜 열인가?",
      "url": "/notes/learning/2026-09-23-numpy-and-tensors#질문-아까는-x0이-행이라더니-수업에서는-왜-열인가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy와 텐서 — shape을 읽는 법에서 벡터 검색까지",
      "context": "3차원 예의 x[:,0] 설명과 수업의 2차원 배열 설명을 비교하며 모순을 지적했다.",
      "intent": "앞 설명의 전제가 달라졌는지, 같은 문법의 의미가 달라진 것인지 확인하려는 질문이다.",
      "answer": "인덱스는 항상 앞축부터 대응한다. (2,3,4)의 x[:,0]은 두 묶음에서 두 번째 축의 첫 항목을 골라 (2,4)가 된다. (3,4)의 x[:,0]은 각 행에서 첫 성분을 골라 (3,)가 된다. shape을 생략한 채 행·열 이름만 붙였던 설명이 혼동을 만들었다."
    },
    {
      "id": "learning/2026-09-23-numpy-and-tensors#질문-축을-추가하면-새-배열인가-값을-바꾸면-원본도-달라지는가",
      "title": "축을 추가하면 새 배열인가? 값을 바꾸면 원본도 달라지는가?",
      "url": "/notes/learning/2026-09-23-numpy-and-tensors#질문-축을-추가하면-새-배열인가-값을-바꾸면-원본도-달라지는가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy와 텐서 — shape을 읽는 법에서 벡터 검색까지",
      "context": "None, reshape, concatenate, stack을 배우면서 새 배열이라는 말이 복사라는 뜻인지 물었다. 고차원 배열의 shape을 개발자가 어떻게 추적하는지도 질문했다.",
      "intent": "객체가 새로 생기는 것과 데이터가 복제되는 것을 구분하고, 실제 값이 어디로 가는지 확인하려는 질문이다.",
      "answer": "x[:,None]은 별도 ndarray 객체지만 원본 데이터를 공유하는 뷰다. .copy()와 다르다. concatenate는 기존 축을 이어 붙이고 stack은 새 축을 만든다. shape만 같아도 원소 배치는 다를 수 있으므로 작은 배열에서 인덱스를 대응시켜 본다."
    },
    {
      "id": "learning/2026-09-23-numpy-and-tensors#질문-브로드캐스팅은-왜-필요하며-설명이-왜-아직-추상적인가",
      "title": "브로드캐스팅은 왜 필요하며, 설명이 왜 아직 추상적인가?",
      "url": "/notes/learning/2026-09-23-numpy-and-tensors#질문-브로드캐스팅은-왜-필요하며-설명이-왜-아직-추상적인가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy와 텐서 — shape을 읽는 법에서 벡터 검색까지",
      "context": "같은 크기의 행렬끼리 더한다는 수학 규칙과 브로드캐스팅의 차이, (10,5)+(5,), (10,1)+(5,), (5,5)+(5,)의 계산 방향을 연달아 물었다. 설명이 추상적이라고 말했고, 학습 깊이를 임의로 제한하지 말라고 요청했다.",
      "intent": "규칙만 암기하는 대신 각 값이 어느 위치에 재사용되는지 납득하려는 질문이다.",
      "answer": "오른쪽부터 축을 맞추고 길이가 같거나 한쪽이 1이면 확장한다. “모든 학생에게 과목별 보정 점수를 더한다”처럼 목적을 잡고, result[i,j]에 들어가는 값을 직접 계산하면 재사용 방향이 드러난다."
    },
    {
      "id": "learning/2026-09-23-numpy-and-tensors#질문-벡터의-길이와-표준편차는-어떻게-다르며-정규화하면-무엇을-잃는가",
      "title": "벡터의 길이와 표준편차는 어떻게 다르며, 정규화하면 무엇을 잃는가?",
      "url": "/notes/learning/2026-09-23-numpy-and-tensors#질문-벡터의-길이와-표준편차는-어떻게-다르며-정규화하면-무엇을-잃는가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy와 텐서 — shape을 읽는 법에서 벡터 검색까지",
      "context": "벡터 차이가 끝점 사이의 이동이라는 설명을 직접 제시한 뒤, 코사인 유사도와 배치 검색 실습으로 넘어갔다. norm의 axis, 분모 괄호, query의 1차원 shape, 길이 1의 의미를 차례로 물었다.",
      "intent": "공식과 실제 배열 계산을 연결하고, 표준화와 L2 정규화가 보존하는 정보를 구분하려는 질문이다.",
      "answer": "표준편차는 평균 주변의 퍼짐이고 벡터 norm은 원점에서의 길이다. L2 정규화는 방향을 유지하고 크기를 1로 만든다. 각 행을 벡터로 볼 때 axis=1, keepdims=True로 자기 길이를 나누고, 정규화된 벡터들의 행렬곱으로 코사인 유사도를 구한다."
    },
    {
      "id": "learning/2026-09-23-numpy-and-tensors#질문-feature를-10개에서-8개로-바꾸고-bias를-더하는-목적은-무엇인가",
      "title": "feature를 10개에서 8개로 바꾸고 bias를 더하는 목적은 무엇인가?",
      "url": "/notes/learning/2026-09-23-numpy-and-tensors#질문-feature를-10개에서-8개로-바꾸고-bias를-더하는-목적은-무엇인가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy와 텐서 — shape을 읽는 법에서 벡터 검색까지",
      "context": "두 선형층에서 H와 Y를 계산한 뒤 shape 변화의 목적, feature의 의미, 편향의 필요성을 물었다.",
      "intent": "실행되는 코드에서 한 걸음 더 나아가 무엇을 표현하고 학습하는지 확인하려는 질문이다.",
      "answer": "가중치는 입력 특성의 조합을 만들고 편향은 입력이 0이어도 남는 출력을 표현한다. 중간 폭 8은 예제의 선택이다. 무작위 가중치로 순전파를 실행하는 것만으로 학습이 이루어지지는 않는다."
    },
    {
      "id": "learning/2026-09-18-collections-and-palindrome#질문-회문-문제의-대소문자를-무시한다는-조건은-어떻게-충족할까",
      "title": "회문 문제의 대소문자를 무시한다는 조건은 어떻게 충족할까?",
      "url": "/notes/learning/2026-09-18-collections-and-palindrome#질문-회문-문제의-대소문자를-무시한다는-조건은-어떻게-충족할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "회문 비교와 중복 제거에서 어떤 값을 써야 할까?",
      "context": "앞에서 읽어도 뒤에서 읽어도 같은 문자열인지 판단하는 문제에서 “대소문자를 무시”하는 조건을 보고 힌트를 요청했다.",
      "intent": "완성 정답을 받기보다 비교 전에 해야 할 처리를 찾으려 했다.",
      "answer": "당시 영문 예에서는 .lower()로 모두 소문자로 바꾼 뒤 비교할 수 있다. .lower()는 원본 문자열을 직접 고치지 않으므로 반환된 문자열을 사용해야 한다."
    },
    {
      "id": "learning/2026-09-18-collections-and-palindrome#질문-lower를-썼는데-회문-판별-코드가-왜-틀릴까",
      "title": "lower를 썼는데 회문 판별 코드가 왜 틀릴까?",
      "url": "/notes/learning/2026-09-18-collections-and-palindrome#질문-lower를-썼는데-회문-판별-코드가-왜-틀릴까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "회문 비교와 중복 제거에서 어떤 값을 써야 할까?",
      "context": "힌트 뒤 사용자는 “뭐가 문제지?”라고 물었다. 당시 코드를 확인한 설명에서는 text.lower()의 결과를 저장하지 않은 점과 text[len(text)-1]로 오른쪽 비교 위치를 고정한 점이 확인됐다.",
      "intent": "첫 힌트를 적용한 코드에서 여전히 조건이 맞지 않는 위치를 찾으려 했다. 구체적인 제목은 당시 확인된 코드 맥락을 복원한 것이며 사용자의 짧은 질문을 그대로 인용한 문장은 아니다.",
      "answer": "변환 결과를 text에 다시 저장해야 하고, 왼쪽 인덱스 i가 움직이면 오른쪽도 len(text)-1-i로 움직여야 한다. level에서 두 번째 비교는 e와 마지막 l이 아니라 양쪽의 e여야 한다."
    },
    {
      "id": "learning/2026-09-18-collections-and-palindrome#질문-중복값을-제거하고-정렬된-리스트로-만들려면",
      "title": "중복값을 제거하고 정렬된 리스트로 만들려면?",
      "url": "/notes/learning/2026-09-18-collections-and-palindrome#질문-중복값을-제거하고-정렬된-리스트로-만들려면",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "회문 비교와 중복 제거에서 어떤 값을 써야 할까?",
      "context": "사용자는 “중복값 제거 어떻게 하지?”라고 물었다. 당시 설명은 문제에서 요구한 정렬된 리스트까지 연결했다.",
      "intent": "같은 값이 여러 번 나온 입력에서 각 값을 한 번만 남기는 방법을 알고 싶었다.",
      "answer": "set은 중복 원소를 담지 않지만 순서를 보장하지 않는다. 이 문제처럼 정렬된 리스트가 필요하면 sorted(set(numbers))로 중복 제거와 정렬을 이어서 한다."
    },
    {
      "id": "learning/2026-09-18-collections-and-palindrome#질문-dictitems는-키와-값을-담은-튜플-하나를-반환할까",
      "title": "dict.items()는 키와 값을 담은 튜플 하나를 반환할까?",
      "url": "/notes/learning/2026-09-18-collections-and-palindrome#질문-dictitems는-키와-값을-담은-튜플-하나를-반환할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "회문 비교와 중복 제거에서 어떤 값을 써야 할까?",
      "context": "딕셔너리의 items가 키·값 튜플을 반환하는 함수인지 확인했다. 앞서 두 값을 두 변수에 나누어 받는 언패킹을 배운 상태였다.",
      "intent": "반환 객체 전체와 반복할 때 꺼내는 항목 하나를 구분하려 했다.",
      "answer": "items()는 딕셔너리 뷰를 반환하고, 그것을 순회할 때 각 항목이 (키, 값) 튜플이다. 뷰 자체를 튜플 하나라고 부르면 반복 구조를 놓친다."
    },
    {
      "id": "learning/2026-09-18-comprehensions#질문-리스트를-펼치는-코드에서-for를-왜-옆으로-두-번-쓸까",
      "title": "리스트를 펼치는 코드에서 for를 왜 옆으로 두 번 쓸까?",
      "url": "/notes/learning/2026-09-18-comprehensions#질문-리스트를-펼치는-코드에서-for를-왜-옆으로-두-번-쓸까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "한 줄에 for가 두 번 나오는 컴프리헨션",
      "context": "13번 설명을 요청한 뒤 “for문 옆에 또 for문을 쓸 수 있는 건 몰랐다”며, 일반 반복문처럼 줄을 내리고 들여쓰지 않는 형태를 짚었다.",
      "intent": "한 줄에 놓인 두 반복이 순차 실행인지 중첩 실행인지 이해하려 했다.",
      "answer": "리스트 컴프리헨션 안에서는 for 절을 나란히 쓸 수 있다. 왼쪽이 바깥 반복, 오른쪽이 안쪽 반복이다. row 하나를 꺼낸 뒤 그 안의 x를 모두 처리하고 다음 row로 이동한다."
    },
    {
      "id": "learning/2026-09-18-comprehensions#질문-맨-앞-x는-리스트-요소를-담는-매개변수일까",
      "title": "맨 앞 x는 리스트 요소를 담는 매개변수일까?",
      "url": "/notes/learning/2026-09-18-comprehensions#질문-맨-앞-x는-리스트-요소를-담는-매개변수일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "한 줄에 for가 두 번 나오는 컴프리헨션",
      "context": "flat = [x for row in matrix for x in row]의 첫 x를 보고, 리스트 요소를 담는 매개변수인지 물었다.",
      "intent": "같은 글자 x가 두 번 나올 때 값을 받는 자리와 결과를 만드는 자리를 구분하려 했다.",
      "answer": "for x in row의 x가 반복에서 꺼낸 값을 받는 변수다. 맨 앞의 x는 결과 리스트에 넣을 표현식이다. 함수의 매개변수가 아니다."
    },
    {
      "id": "learning/2026-09-18-comprehensions#질문-컴프리헨션과-일반-for-중-어느-코드가-더-나을까",
      "title": "컴프리헨션과 일반 for 중 어느 코드가 더 나을까?",
      "url": "/notes/learning/2026-09-18-comprehensions#질문-컴프리헨션과-일반-for-중-어느-코드가-더-나을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "한 줄에 for가 두 번 나오는 컴프리헨션",
      "context": "같은 평탄화 작업을 한 줄 표현과 들여쓴 두 반복문으로 설명받은 뒤 어느 쪽이 나은지 물었다.",
      "intent": "짧은 정답을 외우기보다 읽기 쉬운 코드를 선택하는 기준을 알고 싶었다.",
      "answer": "단순히 값을 모아 새 리스트를 만드는 이 문제에서는 컴프리헨션이 간결하다. 흐름을 배우거나 중간값을 출력할 때는 일반 for가 편하다. 조건과 부수 작업이 복잡해지면 줄 수보다 읽기 쉬운 쪽을 택한다."
    },
    {
      "id": "learning/2026-09-18-files-and-strings#질문-split은-구분자를-여러-개-지정할-수-있을까-re는-무엇일까",
      "title": "split은 구분자를 여러 개 지정할 수 있을까? re는 무엇일까?",
      "url": "/notes/learning/2026-09-18-files-and-strings#질문-split은-구분자를-여러-개-지정할-수-있을까-re는-무엇일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "파일에서 읽은 한 줄은 어떤 값을 거쳐 단어가 될까?",
      "context": "파일 읽기 설명에 앞서 문자열을 여러 구분자로 나누는 방법을 물었고, 답변의 re.split을 보고 re가 무엇인지 되물었다.",
      "intent": "쉼표·세미콜론·공백 중 어느 하나에서 나누는 규칙을 표현하려 했다.",
      "answer": "문자열의 split(\",;\")는 ,;라는 연속 문자열을 구분자로 본다. 여러 종류 중 하나를 쓰려면 정규 표현식을 다루는 표준 모듈 re의 split 등을 사용할 수 있다. 공백류만 나누려면 인자 없는 text.split()으로 충분하다."
    },
    {
      "id": "learning/2026-09-18-files-and-strings#질문-strip에-쉼표를-넣었는데-가운데-쉼표는-왜-남을까",
      "title": "strip에 쉼표를 넣었는데 가운데 쉼표는 왜 남을까?",
      "url": "/notes/learning/2026-09-18-files-and-strings#질문-strip에-쉼표를-넣었는데-가운데-쉼표는-왜-남을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "파일에서 읽은 한 줄은 어떤 값을 거쳐 단어가 될까?",
      "context": "여러 제거 문자를 지정하는 설명에서 \",사과,바나나;\".strip(\",;\")의 결과를 보고 중간 쉼표가 남는 이유를 물었다.",
      "intent": "지정한 문자를 문자열 전체에서 지우는 기능인지, 끝에서만 처리하는 기능인지 확인하려 했다.",
      "answer": "strip은 양 끝에서 지정된 문자들을 제거한다. 왼쪽은 사를 만나면, 오른쪽은 나를 만나면 멈추므로 내부 쉼표는 남는다. 결과는 \"사과,바나나\"다."
    },
    {
      "id": "learning/2026-09-18-files-and-strings#질문-with-a-as-b는-무슨-뜻이고-f는-파일-경로를-담은-포인터일까",
      "title": "with A as B는 무슨 뜻이고 f는 파일 경로를 담은 포인터일까?",
      "url": "/notes/learning/2026-09-18-files-and-strings#질문-with-a-as-b는-무슨-뜻이고-f는-파일-경로를-담은-포인터일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "파일에서 읽은 한 줄은 어떤 값을 거쳐 단어가 될까?",
      "context": "사용자는 with A as B를 말로 어떻게 이해할지, f가 정확히 무엇인지 함께 물었다. 파일 위치를 가리키는 포인터처럼 생각해도 되는지도 확인했다.",
      "intent": "문법의 이름보다 각 값의 실체를 알고 싶었다. 특히 경로 문자열과 파일 객체를 구분하려는 질문이었다.",
      "answer": "이 예에서 open은 열린 파일을 다루는 객체를 반환하고 f는 그 객체를 참조하는 이름이다. with 구역에서 이를 사용하고, 구역을 벗어나면 파일을 닫도록 정리한다. f는 파일 경로 문자열 자체가 아니다."
    },
    {
      "id": "learning/2026-09-18-files-and-strings#질문-파일에-쓰기-권한이-없는데-w로-열면-어떻게-될까",
      "title": "파일에 쓰기 권한이 없는데 w로 열면 어떻게 될까?",
      "url": "/notes/learning/2026-09-18-files-and-strings#질문-파일에-쓰기-권한이-없는데-w로-열면-어떻게-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "파일에서 읽은 한 줄은 어떤 값을 거쳐 단어가 될까?",
      "context": "사용자는 파일의 접근 권한과 open에 전달하는 읽기·쓰기 모드가 어떤 관계인지 물었다.",
      "intent": "코드에서 쓰기 모드를 정하는 것만으로 실제 파일을 수정할 수 있게 되는지 확인하려 했다.",
      "answer": "운영체제가 허용한 접근 권한과 이번 파일 객체의 열기 모드는 별개다. \"w\"가 권한을 새로 주지는 않는다. 쓰기 권한이 없으면 열기가 실패할 수 있고, 권한이 있어도 \"r\"로 연 객체로는 쓸 수 없다."
    },
    {
      "id": "learning/2026-09-18-files-and-strings#질문-close하지-않으면-실행이-파일에-머물러-다음-코드에-영향을-줄까",
      "title": "close하지 않으면 실행이 파일에 머물러 다음 코드에 영향을 줄까?",
      "url": "/notes/learning/2026-09-18-files-and-strings#질문-close하지-않으면-실행이-파일에-머물러-다음-코드에-영향을-줄까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "파일에서 읽은 한 줄은 어떤 값을 거쳐 단어가 될까?",
      "context": "사용자는 닫지 않으면 파일을 편집하는 상태에 실행이 머물러 이후 코드에 영향을 주는 것인지 자신의 이해를 확인했다.",
      "intent": "파일을 닫아야 하는 이유가 실행 순서 때문인지 자원 관리 때문인지 구분하려 했다.",
      "answer": "파일이 열려 있어도 다음 코드는 계속 실행된다. 닫는 이유는 열린 자원을 정리하고 남아 있는 쓰기 버퍼를 전달하기 위해서다. 파일이 열려 있다는 상태와 실행 흐름이 그곳에 갇혀 있다는 설명은 다르다."
    },
    {
      "id": "learning/2026-09-18-files-and-strings#질문-read가-반환하는-것은-문자열일까-객체일까",
      "title": "read가 반환하는 것은 문자열일까, 객체일까?",
      "url": "/notes/learning/2026-09-18-files-and-strings#질문-read가-반환하는-것은-문자열일까-객체일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "파일에서 읽은 한 줄은 어떤 값을 거쳐 단어가 될까?",
      "context": "열린 파일 객체 설명 뒤 read()가 반환하는 값의 종류를 물었고, 객체라는 용어 자체도 다시 확인했다.",
      "intent": "f와 파일 내용이 같은 것인지, 문자열과 객체가 서로 다른 분류인지 알고 싶었다.",
      "answer": "텍스트 모드의 read()는 문자열 객체를 반환한다. 따라서 “문자열인가, 객체인가”는 양자택일이 아니다. f는 파일 객체이고 읽은 내용은 별도의 문자열이다. 바이너리 모드에서는 바이트 객체를 반환한다."
    },
    {
      "id": "learning/2026-09-18-files-and-strings#질문-readline의-한-줄은-무엇이며-어디까지-읽었는지-누가-기억할까",
      "title": "readline의 한 줄은 무엇이며 어디까지 읽었는지 누가 기억할까?",
      "url": "/notes/learning/2026-09-18-files-and-strings#질문-readline의-한-줄은-무엇이며-어디까지-읽었는지-누가-기억할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "파일에서 읽은 한 줄은 어떤 값을 거쳐 단어가 될까?",
      "context": "readline()의 “한 줄”이 무엇으로 정해지는지, 다음 호출이 어떻게 이어지는 곳에서 읽는지 물었다.",
      "intent": "화면에서 보이는 줄과 파일의 줄바꿈, 파일 내용과 읽기 상태를 구분하려 했다.",
      "answer": "텍스트 파일에서 한 줄은 줄바꿈이나 파일 끝으로 구분된다. 화면 너비 때문에 꺾여 보이는 줄과는 다르다. 열린 파일 객체와 입출력 시스템이 현재 읽기 위치를 관리하므로 다음 읽기는 이어지는 위치에서 시작한다."
    },
    {
      "id": "learning/2026-09-18-files-and-strings#질문-for-line-in-f의-line은-정해진-이름일까",
      "title": "for line in f의 line은 정해진 이름일까?",
      "url": "/notes/learning/2026-09-18-files-and-strings#질문-for-line-in-f의-line은-정해진-이름일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "파일에서 읽은 한 줄은 어떤 값을 거쳐 단어가 될까?",
      "context": "한 줄씩 읽는 코드에서 line을 임의로 지어도 되는지 물었다.",
      "intent": "한 줄씩 읽히는 이유가 변수 이름 때문인지 파일 객체의 동작 때문인지 구분하려 했다.",
      "answer": "line은 작성자가 정한 변수 이름이다. for row in f로 바꿔도 파일 객체는 다음 줄을 제공한다. 읽은 문자열을 이후 코드에서도 같은 이름으로 사용하면 된다."
    },
    {
      "id": "learning/2026-09-18-files-and-strings#질문-linesplit--1에서-막혀-뒤-코드를-이해할-수-없어요",
      "title": "line.split(\": \", 1)에서 막혀 뒤 코드를 이해할 수 없어요",
      "url": "/notes/learning/2026-09-18-files-and-strings#질문-linesplit--1에서-막혀-뒤-코드를-이해할-수-없어요",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "파일에서 읽은 한 줄은 어떤 값을 거쳐 단어가 될까?",
      "context": "단어장 예제의 eng, kor = line.split(\": \", 1)을 보고, 특히 오른쪽 호출이 이해되지 않아 다음 줄로 넘어갈 수 없다고 말했다.",
      "intent": "한 줄 문자열이 두 변수로 바뀌는 중간 결과를 먼저 확인하려 했다.",
      "answer": "\": \"는 콜론과 공백을 합친 구분자이고 1은 최대 분할 횟수다. 첫 번째 값을 선택하는 인덱스가 아니다. \"apple: 사과\"를 한 번 나누면 ['apple', '사과']가 된다."
    },
    {
      "id": "learning/2026-09-18-files-and-strings#질문-오른쪽이-두-값을-가진-튜플이어도-eng-kor로-받을-수-있을까",
      "title": "오른쪽이 두 값을 가진 튜플이어도 eng, kor로 받을 수 있을까?",
      "url": "/notes/learning/2026-09-18-files-and-strings#질문-오른쪽이-두-값을-가진-튜플이어도-eng-kor로-받을-수-있을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "파일에서 읽은 한 줄은 어떤 값을 거쳐 단어가 될까?",
      "context": "split의 리스트 결과를 두 변수로 받는 설명 뒤, 오른쪽이 튜플이어도 같은 문법을 쓸 수 있는지 물었다.",
      "intent": "방금 본 문법이 split에만 붙는 특별한 기능인지 더 일반적인 값 배정인지 알고 싶었다.",
      "answer": "eng, kor = (\"apple\", \"사과\")도 가능하다. 순회 가능한 값들을 왼쪽 변수에 나누어 배정하는 언패킹이다. 이 두 변수 형태에서는 오른쪽도 정확히 두 값이어야 한다."
    },
    {
      "id": "learning/2026-09-18-frameworks#질문-외부-패키지를-라이브러리라고-부르는-걸까",
      "title": "외부 패키지를 라이브러리라고 부르는 걸까?",
      "url": "/notes/learning/2026-09-18-frameworks#질문-외부-패키지를-라이브러리라고-부르는-걸까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "라이브러리와 프레임워크의 차이가 왜 필요할까?",
      "context": "외부에 있는 패키지라서 라이브러리인지, 패키지가 여러 개 모여야 라이브러리인지 물었다.",
      "intent": "모듈·패키지·라이브러리를 크기순의 고정 계층으로 이해해도 되는지 확인하려 했다.",
      "answer": "패키지는 모듈을 묶는 구조를, 라이브러리는 가져다 쓰는 기능 모음을 가리킨다. 같은 대상을 두 관점으로 부를 수 있다. 외부 설치 여부나 패키지 개수만으로 라이브러리인지 결정하지 않는다."
    },
    {
      "id": "learning/2026-09-18-frameworks#질문-어차피-내가-실행하는데-제어의-역전은-말장난-아닐까",
      "title": "어차피 내가 실행하는데 제어의 역전은 말장난 아닐까?",
      "url": "/notes/learning/2026-09-18-frameworks#질문-어차피-내가-실행하는데-제어의-역전은-말장난-아닐까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "라이브러리와 프레임워크의 차이가 왜 필요할까?",
      "context": "IoC 설명을 요청한 뒤, 내가 함수를 호출하든 프레임워크를 실행하든 결국 내 코드가 실행되는데 왜 구분하는지 물었다.",
      "intent": "“누가 호출한다”는 표현의 차이가 실제 구현 부담에 어떤 차이를 만드는지 알고 싶었다.",
      "answer": "프레임워크를 시작하는 호출과 시작 이후의 실행 흐름을 관리하는 일은 다르다. 예를 들어 웹 프레임워크는 요청을 기다리고 적절한 사용자 함수를 호출한 뒤 응답을 보내는 흐름을 맡는다. 사용자는 그 흐름의 참여 지점에 자기 기능을 연결한다."
    },
    {
      "id": "learning/2026-09-18-frameworks#질문-프로그램마다-흐름이-다른데-무엇이-공통이라는-걸까",
      "title": "프로그램마다 흐름이 다른데 무엇이 공통이라는 걸까?",
      "url": "/notes/learning/2026-09-18-frameworks#질문-프로그램마다-흐름이-다른데-무엇이-공통이라는-걸까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "라이브러리와 프레임워크의 차이가 왜 필요할까?",
      "context": "사용자는 프로그램 종류에 따라 흐름이 달라지는 예외를 지적했다. 이어 반복되는 처리가 이미 구현돼 있어 덜 신경 써도 된다는 이해가 맞는지, 제공 기능을 잘 파악하는 것 외에 어떤 이점이 있는지 물었다.",
      "intent": "프레임워크가 유용한 범위와 자신이 여전히 맡아야 할 일을 확인하려 했다.",
      "answer": "공통이란 모든 프로그램에 동일하다는 뜻이 아니라 비슷한 종류의 프로그램에서 반복된다는 뜻이다. 제공되는 흐름이 목적과 맞을 때 재사용하고, 다른 부분은 정해진 확장 지점에 연결한다. 틀에 맞지 않으면 다른 도구나 직접 구현이 더 나을 수 있다."
    },
    {
      "id": "learning/2026-09-18-imports-and-packages#질문-모듈은-py-하나일까-여러-파일을-묶은-것일까",
      "title": "모듈은 .py 하나일까, 여러 파일을 묶은 것일까?",
      "url": "/notes/learning/2026-09-18-imports-and-packages#질문-모듈은-py-하나일까-여러-파일을-묶은-것일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "import는 파일을 옮기는 걸까, 이름을 연결하는 걸까?",
      "context": "수업의 모듈 설명을 보고 파이썬 파일 하나를 뜻하는지, 여러 파일을 모은 것을 뜻하는지 물었다.",
      "intent": "이후 import 예제를 읽을 때 파일·폴더·기능의 단위를 정확히 잡으려 했다.",
      "answer": "입문 예에서는 .py 하나를 모듈, 모듈들을 묶은 구조를 패키지로 구분한다. 다만 패키지도 모듈의 한 종류이고 내장 모듈처럼 .py 파일이 아닌 모듈도 있으므로, 단순한 파일 개수 공식이 전부는 아니다."
    },
    {
      "id": "learning/2026-09-18-imports-and-packages#질문-지금-쓰는-ipynb도-모듈로-import할-수-있을까",
      "title": "지금 쓰는 .ipynb도 모듈로 import할 수 있을까?",
      "url": "/notes/learning/2026-09-18-imports-and-packages#질문-지금-쓰는-ipynb도-모듈로-import할-수-있을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "import는 파일을 옮기는 걸까, 이름을 연결하는 걸까?",
      "context": "Colab에서 공부 중이어서, 파이썬 코드가 들어 있는 노트북 파일도 같은 모듈인지 물었다.",
      "intent": ".py 예제와 자신이 실제 작성하는 노트북의 관계를 이해하려 했다.",
      "answer": ".ipynb는 코드·설명·출력 등을 함께 담은 노트북 형식이다. 보통의 import가 .py처럼 직접 읽는 형식은 아니다. 재사용할 코드를 .py로 분리하면 노트북에서 가져다 쓸 수 있다."
    },
    {
      "id": "learning/2026-09-18-imports-and-packages#질문-print와-input은-왜-import하지-않아도-쓸-수-있을까",
      "title": "print와 input은 왜 import하지 않아도 쓸 수 있을까?",
      "url": "/notes/learning/2026-09-18-imports-and-packages#질문-print와-input은-왜-import하지-않아도-쓸-수-있을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "import는 파일을 옮기는 걸까, 이름을 연결하는 걸까?",
      "context": "함수를 쓰려면 정의된 모듈을 가져와야 한다는 설명과, 항상 바로 사용하던 print()·input()이 맞지 않는다고 느꼈다.",
      "intent": "함수가 정의된 위치와 이름을 바로 사용할 수 있는 조건을 연결하려 했다.",
      "answer": "print와 input은 내장 이름으로 제공돼 파이썬이 이름을 찾을 때 자동으로 확인한다. 모든 모듈의 모든 함수가 자동으로 제공되는 것은 아니다."
    },
    {
      "id": "learning/2026-09-18-imports-and-packages#질문-패키지를-import했는데-그-안의-basic도-가져온-것-아닐까",
      "title": "패키지를 import했는데 그 안의 basic도 가져온 것 아닐까?",
      "url": "/notes/learning/2026-09-18-imports-and-packages#질문-패키지를-import했는데-그-안의-basic도-가져온-것-아닐까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "import는 파일을 옮기는 걸까, 이름을 연결하는 걸까?",
      "context": "from calculator import basic 대신 import calculator만 하면 되는지 질문했다. 이어 폴더 안에 basic.py가 있으니 calculator.basic으로 접근할 수 있어야 하는 것 아닌지 여러 차례 확인했다.",
      "intent": "패키지를 가져온다는 말이 폴더 안 모든 파일을 한꺼번에 사용할 수 있게 한다는 뜻인지 알고 싶었다.",
      "answer": "디스크에 파일이 존재하는 것과 실행 중 모듈이 로드된 것은 다르다. __init__.py가 비어 있고 basic을 아직 불러오지 않은 새 환경이라면, import calculator만으로 calculator.basic이 생기지는 않는다."
    },
    {
      "id": "learning/2026-09-18-imports-and-packages#질문-initpy는-정확히-무엇이고-초기화는-무엇을-할까",
      "title": "init.py는 정확히 무엇이고 초기화는 무엇을 할까?",
      "url": "/notes/learning/2026-09-18-imports-and-packages#질문-initpy는-정확히-무엇이고-초기화는-무엇을-할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "import는 파일을 옮기는 걸까, 이름을 연결하는 걸까?",
      "context": "패키지 설명에서 계속 등장하는 __init__.py의 이름과 역할을 물었다.",
      "intent": "낯선 파일 이름의 뜻부터 패키지를 사용할 때 맡는 역할까지 구체적으로 이해하려 했다.",
      "answer": "여기서는 일반 패키지를 처음 불러올 때 실행되는 파이썬 파일이다. 필요한 초기 준비를 적으며 비워 둘 수도 있다. 초기화가 삭제를 뜻하지는 않는다."
    },
    {
      "id": "learning/2026-09-18-imports-and-packages#질문-import하면-파일이-내-위치로-오는-걸까-init은-어디서-실행될까",
      "title": "import하면 파일이 내 위치로 오는 걸까? init은 어디서 실행될까?",
      "url": "/notes/learning/2026-09-18-imports-and-packages#질문-import하면-파일이-내-위치로-오는-걸까-init은-어디서-실행될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "import는 파일을 옮기는 걸까, 이름을 연결하는 걸까?",
      "context": "사용자는 패키지가 자신의 위치로 “온다”고 이해해 혼동된다며 더 정확한 용어를 요청했다.",
      "intent": "파일 이동·현재 폴더·코드 실행 위치가 같은 말처럼 쓰이는 문제를 풀려 했다.",
      "answer": "import는 파일을 복사하거나 현재 작업 폴더를 바꾸는 명령이 아니다. 실행 중인 파이썬이 패키지 코드를 처리하고, 그 패키지의 이름 공간을 현재 코드에서 접근할 수 있게 연결한다."
    },
    {
      "id": "learning/2026-09-18-imports-and-packages#질문--calculatorinitpy는-주석인데-실제-코드는-어디에-적을까",
      "title": "# calculator/init.py는 주석인데, 실제 코드는 어디에 적을까?",
      "url": "/notes/learning/2026-09-18-imports-and-packages#질문--calculatorinitpy는-주석인데-실제-코드는-어디에-적을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "import는 파일을 옮기는 걸까, 이름을 연결하는 걸까?",
      "context": "설명 코드의 # calculator/__init__.py가 주석인지 확인했고, 이어 Colab에서 실제 파일을 어디에 작성·저장하는지 물었다. 셀에 쓰는 예와 파일 편집기로 쓰는 예의 경계가 불분명했다.",
      "intent": "설명용 파일명 표시를 실제 파일 생성 동작으로 오해하지 않고 수업의 작성 방식을 따르려 했다.",
      "answer": "#부터 줄 끝까지는 실행되지 않는 주석이다. 파일 위치를 설명한 줄을 복사해도 파일이 생기지 않는다. 그 경로에 실제 .py 파일을 만들어 코드를 저장하는 작업은 별도로 필요하다."
    },
    {
      "id": "learning/2026-09-18-imports-and-packages#질문-명령어-말고-수업처럼-파일을-만들고-열어서-붙여넣으려면",
      "title": "명령어 말고 수업처럼 파일을 만들고 열어서 붙여넣으려면?",
      "url": "/notes/learning/2026-09-18-imports-and-packages#질문-명령어-말고-수업처럼-파일을-만들고-열어서-붙여넣으려면",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "import는 파일을 옮기는 걸까, 이름을 연결하는 걸까?",
      "context": "사용자는 calculator.py를 어디에 작성하고 저장하는지 반복해 물었다. 답변은 계속 %%writefile을 제시했지만, 사용자가 원한 것은 수업에서 본 파일 목록의 새 파일 생성·편집 방식이었다.",
      "intent": "파일을 만드는 결과만이 아니라 자신이 본 작업 방식과 저장 위치를 연결하려 했다. 사용자는 “파일을 만든 후에 그걸 열어가지고 거기다가 복사 붙여넣기”하고 싶다고 명시했다.",
      "answer": "노트북 셀의 %%writefile은 셀 내용을 별도 파일로 저장하는 방식이고, 파일 목록에서 생성한 .py를 편집하는 방식은 그 파일에 직접 코드를 적는 방식이다. 후자의 파일 본문에는 %%writefile 줄을 넣지 않는다."
    },
    {
      "id": "learning/2026-09-18-imports-and-packages#질문-initpy는-main이-실행할까-import문이-실행할까",
      "title": "init.py는 main이 실행할까, import문이 실행할까?",
      "url": "/notes/learning/2026-09-18-imports-and-packages#질문-initpy는-main이-실행할까-import문이-실행할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "import는 파일을 옮기는 걸까, 이름을 연결하는 걸까?",
      "context": "클래스 초기화와 비교하던 중, 패키지 초기화 파일을 “누가, 어느 순간” 실행하는지 다시 물었다.",
      "intent": "파일 이름과 실행 주체, 실행을 시작하는 계기를 구분하려 했다.",
      "answer": "실제 실행 주체는 파이썬 인터프리터이고, import가 계기다. 처음 패키지를 준비할 때 초기화 코드를 실행한 뒤 import 다음 줄로 돌아온다. main.py라는 파일 이름 자체에 초기화를 맡기는 특별한 역할이 있는 것은 아니다."
    },
    {
      "id": "learning/2026-09-18-imports-and-packages#질문-제작자가-init에-모듈을-미리-정하면-사용하는-쪽은-어떻게-선택할까",
      "title": "제작자가 init에 모듈을 미리 정하면 사용하는 쪽은 어떻게 선택할까?",
      "url": "/notes/learning/2026-09-18-imports-and-packages#질문-제작자가-init에-모듈을-미리-정하면-사용하는-쪽은-어떻게-선택할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "import는 파일을 옮기는 걸까, 이름을 연결하는 걸까?",
      "context": "사용자는 “__init__.py가 어떤 모듈을 연결할지 선택한다”는 설명에 모순을 지적했다. 파일 내용은 제작자가 이미 정했는데 호출하는 사람이 원하는 모듈을 고른다는 설명과 어떻게 함께 성립하는지 물었다.",
      "intent": "패키지의 기본 준비와 사용자의 구체적인 import 요청이 충돌하는지 확인하려 했다.",
      "answer": "__init__.py는 허용할 모듈을 선택하는 함수나 허용 목록이 아니다. 제작자가 적은 초기화 코드와 사용자가 요청한 하위 모듈 로딩은 각각 진행할 수 있다."
    },
    {
      "id": "learning/2026-09-18-lambda-map-sort#질문-lambda는-무엇이고-왜-쓰는-걸까",
      "title": "lambda는 무엇이고 왜 쓰는 걸까?",
      "url": "/notes/learning/2026-09-18-lambda-map-sort#질문-lambda는-무엇이고-왜-쓰는-걸까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "lambda, map, sort의 key에서 누가 함수를 호출할까?",
      "context": "squares = list(map(lambda x: x**2, nums))를 문법 요소별로 설명받은 뒤, “람다의 본질”과 사용하는 이유를 다시 물었다.",
      "intent": "코드 한 줄을 외우기보다, lambda가 어떤 기능을 대신하는지 이해하려는 질문이었다.",
      "answer": "lambda x: x**2는 값 하나를 받아 제곱한 결과를 반환하는 함수다. 리스트를 순회하는 기능은 없다. 짧은 식으로 표현할 함수를 다른 함수에 바로 전달할 때 쓴다."
    },
    {
      "id": "learning/2026-09-18-lambda-map-sort#질문-map은-결국-함수를-호출하기-위해-있는-걸까",
      "title": "map은 결국 함수를 호출하기 위해 있는 걸까?",
      "url": "/notes/learning/2026-09-18-lambda-map-sort#질문-map은-결국-함수를-호출하기-위해-있는-걸까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "lambda, map, sort의 key에서 누가 함수를 호출할까?",
      "context": "lambda 설명 뒤 map의 역할을 물었고, “결국 함수 호출의 역할을 위해 map이 있는 거네?”라고 확인했다.",
      "intent": "함수를 만드는 역할과 여러 값에 적용하는 역할을 분리하려 했다.",
      "answer": "함수 한 번은 square(3)으로도 호출한다. map(square, nums)는 여러 입력에 같은 함수를 적용하는 반복을 맡는다. 결과는 필요할 때 꺼내는 이터레이터이며, list(...)가 결과를 소비해 새 리스트를 만든다."
    },
    {
      "id": "learning/2026-09-18-lambda-map-sort#질문-map을-쓰지-않았는데-sort가-각-단어에-함수를-적용하는-이유는",
      "title": "map을 쓰지 않았는데 sort가 각 단어에 함수를 적용하는 이유는?",
      "url": "/notes/learning/2026-09-18-lambda-map-sort#질문-map을-쓰지-않았는데-sort가-각-단어에-함수를-적용하는-이유는",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "lambda, map, sort의 key에서 누가 함수를 호출할까?",
      "context": "15번의 words.sort(key=lambda x: len(x))를 보고, 앞선 제곱 문제처럼 map으로 요소를 전달하지 않았는데 왜 가능한지 물었다.",
      "intent": "람다가 단어 하나를 받는 순간과 그 호출을 담당하는 코드를 찾으려 했다.",
      "answer": "이 경우에는 sort가 각 단어에 기준 함수를 적용한다. map은 반환값을 새 결과로 제공하고, sort는 반환값을 비교 기준으로 삼아 원래 요소의 순서를 바꾼다."
    },
    {
      "id": "learning/2026-09-18-lambda-map-sort#질문-key에-5가-들어간다면-sortkey5는-무슨-뜻일까",
      "title": "key에 5가 들어간다면 sort(key=5)는 무슨 뜻일까?",
      "url": "/notes/learning/2026-09-18-lambda-map-sort#질문-key에-5가-들어간다면-sortkey5는-무슨-뜻일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "lambda, map, sort의 key에서 누가 함수를 호출할까?",
      "context": "“key에 5, 4, 6, 6이 저장된다”는 해석을 말한 뒤, sort(key=5)가 되는 것인지 물었다. 앞선 설명에서 함수와 결과가 명확히 구분되지 않은 지점이었다.",
      "intent": "len(\"apple\")의 결과 5가 정렬 호출의 어느 자리에 들어가는지 확인하려 했다.",
      "answer": "key에 전달하는 것은 len 같은 함수 자체다. 5는 sort가 그 함수를 호출해 얻은 기준값이다. 실제로 key=5를 전달하면 숫자를 함수처럼 호출할 수 없어 오류가 난다."
    },
    {
      "id": "learning/2026-09-18-lambda-map-sort#질문-반환값으로-정렬한다면-key라는-이름은-왜-필요할까",
      "title": "반환값으로 정렬한다면 key라는 이름은 왜 필요할까?",
      "url": "/notes/learning/2026-09-18-lambda-map-sort#질문-반환값으로-정렬한다면-key라는-이름은-왜-필요할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "lambda, map, sort의 key에서 누가 함수를 호출할까?",
      "context": "“결국 함수의 반환을 사용하는 거잖아. key가 왜 필요해?”라고 물었다. 이어 매개변수는 람다의 x가 아닌지 확인했다.",
      "intent": "서로 다른 함수의 매개변수를 한 자리처럼 읽던 혼동을 해소하려 했다.",
      "answer": "key는 sort가 기준 함수를 받는 매개변수 이름이고, x는 전달한 람다가 단어 하나를 받는 매개변수다. 함수를 받는 자리와 단어를 받는 자리가 다르다."
    },
    {
      "id": "learning/2026-09-18-lambda-map-sort#질문-dict도-아닌데-왜-key가-나오고-sortx1은-왜-안-될까",
      "title": "dict도 아닌데 왜 key가 나오고, sort(x=1)은 왜 안 될까?",
      "url": "/notes/learning/2026-09-18-lambda-map-sort#질문-dict도-아닌데-왜-key가-나오고-sortx1은-왜-안-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "lambda, map, sort의 key에서 누가 함수를 호출할까?",
      "context": "사용자는 key를 보고 딕셔너리의 키를 떠올렸으며, sort(x=1)은 무엇을 뜻하는지도 물었다.",
      "intent": "key가 임의로 지은 이름인지, 함수가 정해 둔 이름인지 구분하려 했다.",
      "answer": "여기서 정렬은 sort가 하는 일이다. key는 sort가 미리 정한 매개변수 이름이라 마음대로 바꿀 수 없다. 람다의 x는 직접 정의한 매개변수이므로 word로 바꿔도 된다."
    },
    {
      "id": "learning/2026-09-18-lambda-map-sort#질문-sort는-인자를-안-줘도-요소를-하나씩-살펴보는-거였지",
      "title": "sort()는 인자를 안 줘도 요소를 하나씩 살펴보는 거였지?",
      "url": "/notes/learning/2026-09-18-lambda-map-sort#질문-sort는-인자를-안-줘도-요소를-하나씩-살펴보는-거였지",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "lambda, map, sort의 key에서 누가 함수를 호출할까?",
      "context": "key를 구분한 뒤에도 17번에는 map이 필요하고 15번에는 필요 없는 이유를 다시 물었다. 이어 sort() 자체가 요소를 처리한다는 점을 확인했다.",
      "intent": "고정된 한 문법의 암기에서, 각 함수가 맡는 실행 역할로 이해를 연결하려 했다.",
      "answer": "words.sort()는 words 자체가 정렬 대상이므로 별도의 리스트 인자가 필요 없다. key를 생략하면 단어 자체로 비교하고, key=len을 주면 길이를 비교한다. 요소를 처리하는 쪽은 여전히 sort다."
    },
    {
      "id": "learning/2026-09-18-loop-exit#질문-정답을-맞혔으니-break-대신-프로그램-실행을-끝내려면",
      "title": "정답을 맞혔으니 break 대신 프로그램 실행을 끝내려면?",
      "url": "/notes/learning/2026-09-18-loop-exit#질문-정답을-맞혔으니-break-대신-프로그램-실행을-끝내려면",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "정답을 맞혔는데 왜 실패 안내까지 실행될까?",
      "context": "사용자는 “7번 문제 9번 라인 break 대신에, 정답을 했으니까 그냥 이제 실행을 끝내고 싶은 상황”이라고 특정 위치와 원하는 동작을 말했다. 당시 코드를 확인한 답변에서는 마지막 \"아쉽습니다...\" 출력이 반복문 밖에 있었다고 설명했다.",
      "intent": "사용자가 직접 말한 요구는 정답을 맞힌 뒤 실행을 끝내는 것이었다. 답변은 이를 현재 코드에서 성공 뒤 실패 안내가 나오지 않게 하려는 요구로 해석했다. 프로그램 전체 종료가 반드시 필요한 별도 요구로 확인된 것은 아니다.",
      "answer": "break는 가장 가까운 반복문만 끝내므로 그 다음 문장은 실행된다. 이 문제에서는 정답이면 break하고, 여섯 번 모두 실패한 경우의 안내를 for에 붙은 else로 옮기면 성공·실패 흐름을 구분할 수 있다."
    },
    {
      "id": "learning/2026-09-18-notebook-state#질문-17번에서-list-object-is-not-callable은-왜-나올까",
      "title": "17번에서 list object is not callable은 왜 나올까?",
      "url": "/notes/learning/2026-09-18-notebook-state#질문-17번에서-list-object-is-not-callable은-왜-나올까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "코드를 고쳤는데 list 오류가 계속 나는 이유",
      "context": "숫자 리스트에 list라는 이름을 붙인 뒤 list(map(...))를 실행했다. 기대한 것은 제곱한 숫자 리스트였지만, 리스트를 호출할 수 없다는 오류가 났다.",
      "intent": "제곱 계산식이 틀렸는지, 오류 메시지의 list가 무엇을 가리키는지 확인하려 했다.",
      "answer": "list = [1, 2, 3, 4, 5]를 실행해 내장 list 이름을 가렸다. 이후 list(...)는 리스트 생성 기능이 아니라 그 숫자 리스트를 호출하려 하므로 실패한다."
    },
    {
      "id": "learning/2026-09-18-notebook-state#질문-이름을-nums로-고쳤는데-왜-같은-오류가-남을까",
      "title": "이름을 nums로 고쳤는데 왜 같은 오류가 남을까?",
      "url": "/notes/learning/2026-09-18-notebook-state#질문-이름을-nums로-고쳤는데-왜-같은-오류가-남을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "코드를 고쳤는데 list 오류가 계속 나는 이유",
      "context": "사용자가 “지금은 또 왜 안 되지?”라고 물었다. 당시 화면 확인에서는 편집한 이름은 올바르게 바뀌어 있었고, 앞서 실행한 list 이름이 남은 상태로 설명됐다.",
      "intent": "코드의 글자를 수정하면 실행 환경도 함께 이전 상태를 잊을 것이라는 기대와 실제 동작의 차이를 이해하려 했다. 이 기대는 질문 흐름에서 추론한 것이다.",
      "answer": "셀의 텍스트와 실행 중인 파이썬의 이름 공간은 다르다. nums = ...를 실행하면 nums가 생기지만 예전 list가 자동 삭제되지는 않는다. 노트북 셀들은 같은 실행 상태를 공유한다."
    },
    {
      "id": "learning/2026-09-18-notebook-state#질문-del-list로-해결됐는데-정확히-무엇을-지운-걸까",
      "title": "del list로 해결됐는데, 정확히 무엇을 지운 걸까?",
      "url": "/notes/learning/2026-09-18-notebook-state#질문-del-list로-해결됐는데-정확히-무엇을-지운-걸까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "코드를 고쳤는데 list 오류가 계속 나는 이유",
      "context": "사용자는 del list 뒤 문제가 해결됐다고 직접 말하며 “이런 현상이 왜 발생하는지 정확히 이해하고 가고 싶다”고 요청했다.",
      "intent": "일회성 해결 명령만 기억하지 않고, 이름과 객체·내장 기능의 관계를 이해하려는 요청이었다.",
      "answer": "여기서 del list는 사용자가 만든 list라는 이름 연결을 제거했다. 코드 셀이나 파일을 지우는 것이 아니다. 그러면 이름을 찾을 때 내장 list를 다시 사용할 수 있다."
    },
    {
      "id": "learning/2026-09-18-notebook-state#질문-홀수-합을-for-없이-구할-수-있을까-내-for-코드는-문법이-틀렸을까",
      "title": "홀수 합을 for 없이 구할 수 있을까? 내 for 코드는 문법이 틀렸을까?",
      "url": "/notes/learning/2026-09-18-notebook-state#질문-홀수-합을-for-없이-구할-수-있을까-내-for-코드는-문법이-틀렸을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "코드를 고쳤는데 list 오류가 계속 나는 이유",
      "context": "16번은 1부터 100까지 홀수의 합을 구하는 문제였다. 사용자는 반복문 없는 방법을 물은 뒤, 작성한 반복문이 왜 틀렸는지 질문했다. 당시 설명에 따르면 이전 오류 결과에는 초기값 없이 sum += num을 실행한 흔적이 있었고, 화면의 수정 코드에는 sum = 0이 추가돼 있었다.",
      "intent": "반복 방법의 선택과 실제 오류 원인을 구분하려 했다. “문법이 틀렸다”는 질문을 실행 상태와 자료형 문제로 바로잡는 과정이었다.",
      "answer": "반복문을 직접 쓰지 않아도 sum(range(1, 101, 2))로 합을 구할 수 있다. 직접 누적하려면 숫자 초기값이 필요하다. 초기값 없이 내장 sum에 숫자를 더하면 오류가 난다. 수정 전 출력이 남아 있다면 현재 코드와 실행 결과도 구분해야 한다."
    },
    {
      "id": "learning/2026-09-18-objects-and-self#질문-객체가-도대체-무엇일까-변수와-다른-것일까",
      "title": "객체가 도대체 무엇일까? 변수와 다른 것일까?",
      "url": "/notes/learning/2026-09-18-objects-and-self#질문-객체가-도대체-무엇일까-변수와-다른-것일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "객체·인스턴스·self는 어떤 대상을 가리킬까?",
      "context": "클래스 설명을 요청한 뒤에도 객체라는 말이 이해되지 않는다고 했다. 파일 객체, 문자열, 학생 객체가 한 용어로 불리고 있었다.",
      "intent": "추상적인 “데이터와 기능의 묶음” 대신 코드에서 실제로 가리키는 대상을 찾으려 했다.",
      "answer": "score = 85에서 85는 정수 객체이고 score는 그것을 참조하는 이름이다. 학생을 표현하는 객체도 같은 관계로 이름을 붙여 접근한다. 변수를 두 개 만든다고 항상 객체가 두 개 생기지는 않는다."
    },
    {
      "id": "learning/2026-09-18-objects-and-self#질문-내가-만든-클래스의-객체만-인스턴스라고-부르는-걸까",
      "title": "내가 만든 클래스의 객체만 인스턴스라고 부르는 걸까?",
      "url": "/notes/learning/2026-09-18-objects-and-self#질문-내가-만든-클래스의-객체만-인스턴스라고-부르는-걸까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "객체·인스턴스·self는 어떤 대상을 가리킬까?",
      "context": "사용자는 객체가 더 큰 개념이고 인스턴스는 직접 정의한 클래스로 만든 객체라고 자신의 이해를 설명했다. student1은 객체 자체보다 주소를 담는 이름 같다는 생각도 말했다.",
      "intent": "객체·인스턴스·변수를 서로 다른 단계로 분류하려 했다.",
      "answer": "객체는 구체적인 대상, 인스턴스는 그 대상이 특정 클래스에 속한다는 관계를 강조하는 말이다. 85도 int의 인스턴스다. 사용자 정의 클래스만 해당하는 것은 아니다. 변수는 주소를 직접 조작하는 포인터라기보다 객체를 참조하는 이름으로 이해한다."
    },
    {
      "id": "learning/2026-09-18-objects-and-self#질문-일반-값도-타입의-인스턴스라면-int-같은-타입도-클래스일까",
      "title": "일반 값도 타입의 인스턴스라면 int 같은 타입도 클래스일까?",
      "url": "/notes/learning/2026-09-18-objects-and-self#질문-일반-값도-타입의-인스턴스라면-int-같은-타입도-클래스일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "객체·인스턴스·self는 어떤 대상을 가리킬까?",
      "context": "숫자도 인스턴스라는 설명 뒤, 그렇다면 타입도 클래스인지 되물었다. 새로 정의하는 class와 기존의 int, str, list가 연결되지 않은 지점이었다.",
      "intent": "사용자 정의 타입과 파이썬이 제공하는 타입을 하나의 관계로 이해하려 했다.",
      "answer": "파이썬의 int, str, list도 클래스다. class Student:는 필요한 타입을 직접 정의하는 문법이고, 이미 있는 클래스는 따로 정의하지 않고 사용한다."
    },
    {
      "id": "learning/2026-09-18-objects-and-self#질문-클래스의-__init__과-패키지의-initpy는-같은-초기화일까",
      "title": "클래스의 __init__과 패키지의 init.py는 같은 초기화일까?",
      "url": "/notes/learning/2026-09-18-objects-and-self#질문-클래스의-__init__과-패키지의-initpy는-같은-초기화일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "객체·인스턴스·self는 어떤 대상을 가리킬까?",
      "context": "학생 클래스 문제에서 __init__을 보고, 앞서 배운 패키지의 초기화 파일과 비교해 달라고 요청했다.",
      "intent": "비슷한 이름 때문에 같은 실행 장치로 이해해도 되는지 확인하려 했다.",
      "answer": "__init__.py는 일반 패키지를 처음 불러올 때 실행하는 파일이고, __init__ 메서드는 새 인스턴스의 초기 상태를 설정한다. 사용하는 계기와 대상이 다르다."
    },
    {
      "id": "learning/2026-09-18-objects-and-self#질문-6번-학생-등급-문제에서-self는-왜-필요할까",
      "title": "6번 학생 등급 문제에서 self는 왜 필요할까?",
      "url": "/notes/learning/2026-09-18-objects-and-self#질문-6번-학생-등급-문제에서-self는-왜-필요할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "객체·인스턴스·self는 어떤 대상을 가리킬까?",
      "context": "6번 문제의 설명을 요청한 뒤, 작성 중이던 Student 초기화 코드에서 self를 더 깊게 설명해 달라고 했다. 당시 확인된 부분은 self.name = name, self.score = score였다.",
      "intent": "같은 클래스의 메서드가 학생마다 다른 이름·점수를 어떻게 사용하는지 알고 싶었다. 이 구체화는 질문과 당시 코드에 근거한 해석이다.",
      "answer": "일반 인스턴스 메서드의 self는 이번 호출이 다루는 객체를 받는다. student1.get_grade()를 호출하면 self는 그 학생을 가리킨다. self.score는 그 학생의 점수다."
    }
  ],
  "quizzes": [
    {
      "id": "data/numpy-array-axes#퀴즈-무엇을-모으고-무엇을-남길까",
      "title": "무엇을 모으고 무엇을 남길까?",
      "url": "/notes/data/numpy-array-axes#퀴즈-무엇을-모으고-무엇을-남길까",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy 배열 — shape과 axis를 주소로 읽기"
    },
    {
      "id": "data/numpy-broadcasting#퀴즈-행마다-자기-평균을-빼려면",
      "title": "행마다 자기 평균을 빼려면?",
      "url": "/notes/data/numpy-broadcasting#퀴즈-행마다-자기-평균을-빼려면",
      "topic": "데이터 분석",
      "sourceTitle": "브로드캐스팅 — 어떤 값을 어디에 재사용하는가"
    },
    {
      "id": "data/numpy-linear-layers#퀴즈-배치-크기를-바꾸면-가중치-수가-달라지는가",
      "title": "배치 크기를 바꾸면 가중치 수가 달라지는가?",
      "url": "/notes/data/numpy-linear-layers#퀴즈-배치-크기를-바꾸면-가중치-수가-달라지는가",
      "topic": "데이터 분석",
      "sourceTitle": "선형층 — 샘플은 유지하고 feature를 바꾸는 계산"
    },
    {
      "id": "data/numpy-shape-views#퀴즈-객체와-데이터는-각각-몇-개인가",
      "title": "객체와 데이터는 각각 몇 개인가?",
      "url": "/notes/data/numpy-shape-views#퀴즈-객체와-데이터는-각각-몇-개인가",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy 모양 변경 — 새 축, 뷰, reshape와 stack"
    },
    {
      "id": "data/numpy-vectors-matmul#퀴즈-행별-단위-벡터의-유사도-표는-어떤-shape인가",
      "title": "행별 단위 벡터의 유사도 표는 어떤 shape인가?",
      "url": "/notes/data/numpy-vectors-matmul#퀴즈-행별-단위-벡터의-유사도-표는-어떤-shape인가",
      "topic": "데이터 분석",
      "sourceTitle": "벡터의 길이에서 행렬곱과 코사인 유사도까지"
    },
    {
      "id": "learning/2026-09-23-numpy-and-tensors#퀴즈-실제로-답한-세-가지-브로드캐스팅-문제",
      "title": "실제로 답한 세 가지 브로드캐스팅 문제",
      "url": "/notes/learning/2026-09-23-numpy-and-tensors#퀴즈-실제로-답한-세-가지-브로드캐스팅-문제",
      "topic": "데이터 분석",
      "sourceTitle": "NumPy와 텐서 — shape을 읽는 법에서 벡터 검색까지"
    },
    {
      "id": "python/loop-exit#퀴즈-끝까지-찾지-못하면-무엇이-출력될까",
      "title": "끝까지 찾지 못하면 무엇이 출력될까?",
      "url": "/notes/python/loop-exit#퀴즈-끝까지-찾지-못하면-무엇이-출력될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "반복문 종료와 for–else"
    },
    {
      "id": "python/loop-exit#퀴즈-반복할-항목이-없으면-else는-실행될까",
      "title": "반복할 항목이 없으면 else는 실행될까?",
      "url": "/notes/python/loop-exit#퀴즈-반복할-항목이-없으면-else는-실행될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "반복문 종료와 for–else"
    },
    {
      "id": "python/loop-exit#퀴즈-정답을-찾았는데-실패-안내도-나온다면-어디를-고칠까",
      "title": "정답을 찾았는데 실패 안내도 나온다면 어디를 고칠까?",
      "url": "/notes/python/loop-exit#퀴즈-정답을-찾았는데-실패-안내도-나온다면-어디를-고칠까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "반복문 종료와 for–else"
    },
    {
      "id": "python/args-and-kwargs#퀴즈-모아서-받은-인자를-다시-풀어-전달하면",
      "title": "모아서 받은 인자를 다시 풀어 전달하면?",
      "url": "/notes/python/args-and-kwargs#퀴즈-모아서-받은-인자를-다시-풀어-전달하면",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "args와 kwargs의 두 방향"
    },
    {
      "id": "python/comprehensions#퀴즈-중첩된-반복을-펼치면-어떤-순서일까",
      "title": "중첩된 반복을 펼치면 어떤 순서일까?",
      "url": "/notes/python/comprehensions#퀴즈-중첩된-반복을-펼치면-어떤-순서일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "리스트 컴프리헨션 읽기"
    },
    {
      "id": "python/files-and-with#퀴즈-두-번째-read와-블록-밖의-파일-상태는",
      "title": "두 번째 read와 블록 밖의 파일 상태는?",
      "url": "/notes/python/files-and-with#퀴즈-두-번째-read와-블록-밖의-파일-상태는",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "파일 객체와 with"
    },
    {
      "id": "python/imports-and-packages#퀴즈-같은-모듈을-두-번-import하면",
      "title": "같은 모듈을 두 번 import하면?",
      "url": "/notes/python/imports-and-packages#퀴즈-같은-모듈을-두-번-import하면",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "import와 패키지"
    },
    {
      "id": "python/iterables-and-iterators#퀴즈-하나를-꺼낸-뒤-list로-모으면",
      "title": "하나를 꺼낸 뒤 list로 모으면?",
      "url": "/notes/python/iterables-and-iterators#퀴즈-하나를-꺼낸-뒤-list로-모으면",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "이터러블과 이터레이터"
    },
    {
      "id": "python/notebook-state#퀴즈-셀을-고쳤는데도-list-호출이-실패하는-이유는",
      "title": "셀을 고쳤는데도 list 호출이 실패하는 이유는?",
      "url": "/notes/python/notebook-state#퀴즈-셀을-고쳤는데도-list-호출이-실패하는-이유는",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "노트북 이름 공간과 내장 이름"
    },
    {
      "id": "python/self-and-objects#퀴즈-두-객체에서-self는-누구일까",
      "title": "두 객체에서 self는 누구일까?",
      "url": "/notes/python/self-and-objects#퀴즈-두-객체에서-self는-누구일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self와 객체 호출"
    },
    {
      "id": "python/sorting-and-callables#퀴즈-정렬된-리스트와-sort의-반환값은",
      "title": "정렬된 리스트와 sort의 반환값은?",
      "url": "/notes/python/sorting-and-callables#퀴즈-정렬된-리스트와-sort의-반환값은",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "정렬 key와 호출 가능한 객체"
    },
    {
      "id": "data/data-quality#퀴즈-평균을-크게-바꾸는-값은-지워야-할까",
      "title": "평균을 크게 바꾸는 값은 지워야 할까?",
      "url": "/notes/data/data-quality#퀴즈-평균을-크게-바꾸는-값은-지워야-할까",
      "topic": "데이터 분석",
      "sourceTitle": "데이터 품질 — 고치기 전에 원인을 찾기"
    },
    {
      "id": "data/data-science-overview#퀴즈-매출-분석을-시작하기-전에-무엇을-정할까",
      "title": "매출 분석을 시작하기 전에 무엇을 정할까?",
      "url": "/notes/data/data-science-overview#퀴즈-매출-분석을-시작하기-전에-무엇을-정할까",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "데이터 사이언스 — 질문에서 판단까지"
    },
    {
      "id": "data/eda-and-causality#퀴즈-평균-배송일이-같으면-경험도-같을까",
      "title": "평균 배송일이 같으면 경험도 같을까?",
      "url": "/notes/data/eda-and-causality#퀴즈-평균-배송일이-같으면-경험도-같을까",
      "topic": "데이터 분석",
      "sourceTitle": "EDA와 해석 — 평균 뒤의 분포 보기"
    },
    {
      "id": "data/interpretation#퀴즈-막대-길이가-두-배면-매출도-두-배일까",
      "title": "막대 길이가 두 배면 매출도 두 배일까?",
      "url": "/notes/data/interpretation#퀴즈-막대-길이가-두-배면-매출도-두-배일까",
      "topic": "데이터 분석",
      "sourceTitle": "결과 해석 — 보이는 차이를 믿기 전에"
    },
    {
      "id": "data/observation-unit#퀴즈-고객이-두-번-등장하면-중복일까",
      "title": "고객이 두 번 등장하면 중복일까?",
      "url": "/notes/data/observation-unit#퀴즈-고객이-두-번-등장하면-중복일까",
      "topic": "데이터 분석",
      "sourceTitle": "관측 단위 — 한 행은 무엇인가"
    },
    {
      "id": "data/wrangling#퀴즈-병합-뒤-매출이-두-배가-된-이유는",
      "title": "병합 뒤 매출이 두 배가 된 이유는?",
      "url": "/notes/data/wrangling#퀴즈-병합-뒤-매출이-두-배가-된-이유는",
      "topic": "데이터 분석",
      "sourceTitle": "변형·집계·병합 — 표의 단위가 바뀌는 순간"
    }
  ]
};
