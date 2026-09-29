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
      "id": "data/statistics-data-and-groups",
      "title": "통계 실습의 데이터 — 변수의 의미와 요약표의 인덱스",
      "description": "숫자 dtype과 변수 유형, 개수와 비율, 결측치 요약표의 인덱스 정렬과 평균 대체의 한계를 연결한다.",
      "date": "2026-09-29",
      "published": "2026-09-29",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "statistics-and-visualization",
      "url": "/notes/data/statistics-data-and-groups",
      "links": [
        "learning/2026-09-29-statistics",
        "data/data-quality",
        "data/observation-unit",
        "data/statistics-distributions-and-plots",
        "data/statistics-relations-and-interpretation"
      ],
      "relatedReasons": {
        "learning/2026-09-29-statistics": "변수 유형과 인덱스를 직접 설명한 응답 및 교정 기록이다.",
        "data/statistics-distributions-and-plots": "변수의 의미를 정한 다음 분포와 그래프를 고르는 방법으로 이어진다.",
        "data/statistics-relations-and-interpretation": "그룹별 비율과 요약표의 라벨을 상관행렬 및 집단 비교에 적용한다.",
        "data/data-quality": "결측치를 채우거나 이상치를 지우기 전에 원인을 확인하는 기준이다.",
        "data/observation-unit": "승객 한 명과 변수 하나처럼 요약 전후 행의 의미를 구분한다."
      },
      "sources": [
        "통계시각화 실습 환경 설명 학습 대화 (2026-09-29)",
        "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html",
        "https://pandas.pydata.org/docs/reference/api/pandas.Series.value_counts.html"
      ]
    },
    {
      "id": "data/statistics-distributions-and-plots",
      "title": "분포를 그리는 코드 — Axes·히스토그램·KDE·박스플롯",
      "description": "그릴 값과 그릴 장소를 구분하고, IQR 경계·수염·이상치와 로그 변환의 해석을 연결한다.",
      "date": "2026-09-29",
      "published": "2026-09-29",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "statistics-and-visualization",
      "url": "/notes/data/statistics-distributions-and-plots",
      "links": [
        "data/statistics-data-and-groups",
        "learning/2026-09-29-statistics",
        "data/eda-and-causality",
        "data/statistics-relations-and-interpretation"
      ],
      "relatedReasons": {
        "learning/2026-09-29-statistics": "직접 그래프를 작성하려고 질문한 흐름과 실제 코드 교정을 기록했다.",
        "data/statistics-data-and-groups": "그릴 열의 의미와 개수·비율의 차이를 먼저 정한다.",
        "data/statistics-relations-and-interpretation": "한 변수의 분포를 생존 여부별 집단 비교로 확장한다.",
        "data/eda-and-causality": "평균 하나로 놓치는 분포를 그림으로 확인한다."
      },
      "sources": [
        "통계시각화 실습 환경 설명 학습 대화 (2026-09-29)",
        "https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.subplots.html",
        "https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.boxplot.html",
        "https://seaborn.pydata.org/generated/seaborn.histplot.html",
        "https://pandas.pydata.org/docs/reference/api/pandas.Series.quantile.html",
        "https://numpy.org/doc/stable/reference/generated/numpy.log1p.html"
      ]
    },
    {
      "id": "data/statistics-relations-and-interpretation",
      "title": "변수 사이의 관계 — 상관행렬과 그룹별 그래프를 읽는 법",
      "description": "corr의 표 구조, 선형 상관의 한계, 생존율과 박스플롯, 등급을 고정한 비교의 범위를 정리한다.",
      "date": "2026-09-29",
      "published": "2026-09-29",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "statistics-and-visualization",
      "url": "/notes/data/statistics-relations-and-interpretation",
      "links": [
        "learning/2026-09-29-statistics",
        "data/statistics-data-and-groups",
        "data/statistics-distributions-and-plots",
        "data/eda-and-causality"
      ],
      "relatedReasons": {
        "learning/2026-09-29-statistics": "실제 생존율 방향 오류와 등급을 고정한 후속 해석을 구분해 기록했다.",
        "data/statistics-data-and-groups": "이진 변수의 평균이 비율이 되는 이유와 요약표의 인덱스를 먼저 익힌다.",
        "data/statistics-distributions-and-plots": "박스·중앙값·수염을 알아야 두 집단의 분포를 비교할 수 있다.",
        "data/eda-and-causality": "관찰한 관계를 인과나 일반 법칙으로 확대하지 않는 기준이다."
      },
      "sources": [
        "통계시각화 실습 환경 설명 학습 대화 (2026-09-29)",
        "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.corr.html",
        "https://seaborn.pydata.org/generated/seaborn.barplot.html",
        "https://seaborn.pydata.org/generated/seaborn.heatmap.html"
      ]
    },
    {
      "id": "learning/2026-09-29-statistics",
      "title": "통계·시각화 실습 — 요약표의 구조에서 조건을 붙인 해석까지",
      "description": "실제 코드 작성과 응답을 바탕으로 변수 유형, 그래프 구성, 결측치 인덱스, 생존율 방향과 조건부 비교를 돌아본다.",
      "date": "2026-09-29",
      "published": "2026-09-29",
      "type": "journal",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "statistics-and-visualization",
      "url": "/notes/learning/2026-09-29-statistics",
      "links": [
        "data/statistics-data-and-groups",
        "data/statistics-distributions-and-plots",
        "data/statistics-relations-and-interpretation"
      ],
      "relatedReasons": {
        "data/statistics-data-and-groups": "변수의 의미, Series 인덱스, 결측치 요약과 평균 대체를 설명한다.",
        "data/statistics-distributions-and-plots": "Figure와 Axes, 분포 그림, IQR 수염, 로그 변환의 읽는 법이다.",
        "data/statistics-relations-and-interpretation": "상관행렬과 집단별 관찰을 해석할 때의 조건을 정리한다."
      },
      "sources": [
        "통계시각화 실습 환경 설명 학습 대화 (2026-09-29)"
      ]
    },
    {
      "id": "data/pandas-cleaning-validation",
      "title": "Pandas 정리와 검증 — 자료형, 결측, 중복, 파생 변수",
      "description": "값을 바꾸는 이유와 처리 후 확인할 조건을 구분하고 변환 실패, 0 채우기, 중복 제거, 복사와 대입을 실제 질문으로 살펴본다.",
      "date": "2026-09-28",
      "published": "2026-09-29",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "dataframe",
      "url": "/notes/data/pandas-cleaning-validation",
      "links": [
        "learning/2026-09-29-dataframe",
        "data/data-quality",
        "data/interpretation",
        "data/pandas-dataframe-selection",
        "data/pandas-groupby-merge-reshape"
      ],
      "relatedReasons": {
        "learning/2026-09-29-dataframe": "결측 처리의 목적과 중복 제거 코드의 실제 수정 과정을 보존한 기록이다.",
        "data/pandas-dataframe-selection": "Series와 DataFrame의 구분이 열 변환과 표 전체 대입의 바탕이 된다.",
        "data/data-quality": "데이터가 사용할 목적에 맞게 정확하고 일관되는지 확인하는 문제로 이어진다."
      },
      "sources": [
        "데이터 프레임 개념 총정리 학습 대화 (2026-09-28–29)",
        "https://pandas.pydata.org/docs/reference/api/pandas.to_numeric.html",
        "https://pandas.pydata.org/docs/reference/api/pandas.to_datetime.html",
        "https://pandas.pydata.org/docs/user_guide/missing_data.html",
        "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html",
        "https://pandas.pydata.org/docs/reference/api/pandas.cut.html"
      ]
    },
    {
      "id": "data/pandas-dataframe-selection",
      "title": "DataFrame과 선택 — 표의 의미, Series, 불리언 마스크",
      "description": "이미 있는 표를 다시 가공하는 이유에서 출발해 인덱스와 열, Series와 DataFrame, 조건 선택의 반환값을 구분한다.",
      "date": "2026-09-28",
      "published": "2026-09-29",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "dataframe",
      "url": "/notes/data/pandas-dataframe-selection",
      "links": [
        "learning/2026-09-29-dataframe",
        "data/eda-and-causality",
        "data/numpy-array-axes",
        "data/pandas-cleaning-validation",
        "data/pandas-groupby-merge-reshape"
      ],
      "relatedReasons": {
        "learning/2026-09-29-dataframe": "표의 목적과 선택 문법을 질문하고 짧은 퀴즈로 확인한 실제 학습 흐름이다.",
        "data/numpy-array-axes": "NumPy 배열의 축과 모양을 DataFrame의 행과 열에 연결한다.",
        "data/eda-and-causality": "표 가공과 그래프가 탐색 과정에서 어떤 역할을 하는지 연결한다."
      },
      "sources": [
        "데이터 프레임 개념 총정리 학습 대화 (2026-09-28–29)",
        "https://pandas.pydata.org/docs/user_guide/dsintro.html",
        "https://pandas.pydata.org/docs/user_guide/indexing.html"
      ]
    },
    {
      "id": "data/pandas-groupby-merge-reshape",
      "title": "Pandas 집계와 결합 — agg, transform, merge에서 pipe까지",
      "description": "각 단계가 무엇을 반환하는지 실제 표로 추적하며 고객별 집계, 주문별 변환, 키 결합, 긴 표와 넓은 표, 함수 연결을 구분한다.",
      "date": "2026-09-28",
      "published": "2026-09-29",
      "type": "concept",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "dataframe",
      "url": "/notes/data/pandas-groupby-merge-reshape",
      "links": [
        "learning/2026-09-29-dataframe",
        "data/pandas-cleaning-validation",
        "data/pandas-dataframe-selection"
      ],
      "relatedReasons": {
        "learning/2026-09-29-dataframe": "반환값 설명의 생략과 agg 문법 변경을 지적하며 학습한 실제 질문 흐름이다.",
        "data/pandas-dataframe-selection": "집계 결과의 Series와 DataFrame, 인덱스와 일반 열을 구분하는 바탕이다.",
        "data/pandas-cleaning-validation": "집계 전 중복과 결측 처리 및 결합 후 검증 기준을 연결한다."
      },
      "sources": [
        "데이터 프레임 개념 총정리 학습 대화 (2026-09-28–29)",
        "https://pandas.pydata.org/docs/user_guide/groupby.html",
        "https://pandas.pydata.org/docs/reference/api/pandas.merge.html",
        "https://pandas.pydata.org/docs/reference/api/pandas.pivot_table.html",
        "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.melt.html",
        "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.pipe.html"
      ]
    },
    {
      "id": "learning/2026-09-29-dataframe",
      "title": "DataFrame 학습 기록 — 표의 목적부터 집계와 파이프라인까지",
      "description": "9월 28–29일 실제 질문과 코드 수정, 설명의 정정을 따라 DataFrame의 반환값과 행의 의미를 정리한다.",
      "date": "2026-09-28",
      "published": "2026-09-29",
      "type": "journal",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "dataframe",
      "url": "/notes/learning/2026-09-29-dataframe",
      "links": [
        "data/pandas-dataframe-selection",
        "data/pandas-cleaning-validation",
        "data/pandas-groupby-merge-reshape",
        "data/eda-and-causality"
      ],
      "relatedReasons": {
        "data/pandas-dataframe-selection": "표를 다시 만드는 이유와 Series·DataFrame·조건 선택을 개념별로 정리했다.",
        "data/pandas-cleaning-validation": "변환 실패·결측·중복·복사·검증의 판단 기준을 묶었다.",
        "data/pandas-groupby-merge-reshape": "agg와 transform의 반환값에서 merge·피벗·pipe로 이어지는 흐름을 정리했다."
      },
      "sources": [
        "데이터 프레임 개념 총정리 학습 대화 (2026-09-28–29)"
      ]
    },
    {
      "id": "weekly/2026-09-28-four-questions",
      "title": "위클리 페이퍼 — 문제를 정의하고, 도구를 선택하는 기준",
      "description": "AI 엔지니어의 역량, 회사의 날짜 표현, 모델을 클래스로 만드는 이유, NumPy 성능 개선에 대한 나의 답변.",
      "date": "2026-09-28",
      "published": "2026-09-28",
      "type": "weekly",
      "topics": [
        "실전 파이썬 준비하기",
        "데이터 분석"
      ],
      "courseId": "python",
      "lessonId": "python-basics",
      "url": "/notes/weekly/2026-09-28-four-questions",
      "links": [
        "python/imports-and-packages",
        "python/self-and-objects",
        "data/numpy-linear-layers",
        "data/numpy-array-axes",
        "data/numpy-shape-views"
      ],
      "sources": [
        "코드잇 AI 스프린트 위클리 페이퍼 공식 네 문항 (2026-09-24 확인)",
        "위클리 페이퍼 발표 준비 대화 (2026-09-28 정리)",
        "https://docs.python.org/3/library/datetime.html",
        "https://docs.python.org/3/tutorial/classes.html",
        "https://docs.pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html",
        "https://numpy.org/doc/stable/user/whatisnumpy.html",
        "https://docs.python.org/3/faq/design.html#how-are-lists-implemented-in-cpython",
        "https://docs.python.org/3/library/threading.html#gil-and-performance-considerations"
      ]
    },
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
      "id": "data/statistics-data-and-groups#질문-자료형과-별개로-변수-타입을-왜-분류해야-하나",
      "title": "자료형과 별개로 변수 타입을 왜 분류해야 하나?",
      "url": "/notes/data/statistics-data-and-groups#질문-자료형과-별개로-변수-타입을-왜-분류해야-하나",
      "topic": "데이터 분석",
      "sourceTitle": "통계 실습의 데이터 — 변수의 의미와 요약표의 인덱스",
      "context": "숫자 dtype인 survived, pclass, age, fare를 모두 수치형으로 답한 뒤, 저장 자료형과 의미상의 변수 유형을 따로 나누는 이유를 물었다.",
      "intent": "분류 이름을 외우는 일이 실제 계산과 그래프 선택에 어떤 차이를 만드는지 확인하려는 질문이다.",
      "answer": "dtype은 저장·연산 방식이고 변수 유형은 값의 의미다. 컴퓨터가 평균을 계산할 수 있어도 그 평균을 해석할 수 있는지는 별도 문제다."
    },
    {
      "id": "data/statistics-data-and-groups#질문-value_counts-결과도-series인가-무엇이-인덱스인가",
      "title": "value_counts() 결과도 Series인가? 무엇이 인덱스인가?",
      "url": "/notes/data/statistics-data-and-groups#질문-value_counts-결과도-series인가-무엇이-인덱스인가",
      "topic": "데이터 분석",
      "sourceTitle": "통계 실습의 데이터 — 변수의 의미와 요약표의 인덱스",
      "context": "성별을 센 결과가 두 열짜리 표처럼 보여 Series인지 DataFrame인지 물었고, 원래 값인 male, female이 결과의 인덱스가 되는지 직접 확인했다.",
      "intent": "화면의 모양보다 반환 객체의 구조와 각 숫자의 의미를 구분하려는 질문이다.",
      "answer": "df[\"sex\"].value_counts()는 Series다. 서로 다른 성별 값이 인덱스가 되고 등장 횟수가 데이터 값이 된다. 왼쪽 인덱스를 데이터 열 하나로 세지 않는다."
    },
    {
      "id": "data/statistics-data-and-groups#질문-결측치-표를-만들었는데-행-인덱스는-갑자기-어디서-왔나",
      "title": "결측치 표를 만들었는데 행 인덱스는 갑자기 어디서 왔나?",
      "url": "/notes/data/statistics-data-and-groups#질문-결측치-표를-만들었는데-행-인덱스는-갑자기-어디서-왔나",
      "topic": "데이터 분석",
      "sourceTitle": "통계 실습의 데이터 — 변수의 의미와 요약표의 인덱스",
      "context": "pd.DataFrame({\"count\": ..., \"ratio\": ...})를 읽다가 age, fare가 왼쪽 행 이름에 붙는 이유가 납득되지 않아, 한 단계씩 확인 질문을 요청했다.",
      "intent": "원본의 열 이름이 요약 결과의 행 인덱스가 되는 경로를 추적하려는 질문이다.",
      "answer": "열별 집계는 각 열의 결과 하나를 만든다. 그 결과 Series의 인덱스가 원본 열 이름이고, Series들을 DataFrame에 넣으면 그 인덱스에 맞춰 행이 정렬된다. pandas DataFrame 문서"
    },
    {
      "id": "data/statistics-data-and-groups#질문-나이-결측치를-평균으로-채우면-평균은-유지되고-표준편차는-줄지-않나",
      "title": "나이 결측치를 평균으로 채우면 평균은 유지되고 표준편차는 줄지 않나?",
      "url": "/notes/data/statistics-data-and-groups#질문-나이-결측치를-평균으로-채우면-평균은-유지되고-표준편차는-줄지-않나",
      "topic": "데이터 분석",
      "sourceTitle": "통계 실습의 데이터 — 변수의 의미와 요약표의 인덱스",
      "context": "결측 나이를 삭제하는 대신 평균으로 대체하겠다고 제안하면서, 평균을 유지하지만 퍼짐을 줄이는 단점도 직접 설명했다.",
      "intent": "자신의 처리 방안이 타당한지 확인하고 다른 선택의 장단점을 비교하려는 질문이다.",
      "answer": "보존되는 것은 관측된 값들의 평균이다. 모르는 실제 나이까지 포함한 전체 평균이 보존된다는 뜻은 아니다. 평균을 여러 번 추가하면 평균에서 벗어난 정도는 늘지 않고 분모가 커져, 관측값 기준의 분산·표준편차가 줄어든다. 단, 원래 분산이 0이면 그대로 0이다."
    },
    {
      "id": "data/statistics-distributions-and-plots#질문-퍼짐-그래프와-히스토그램kde를-스스로-작성하려면-어떻게-읽어야-하나",
      "title": "퍼짐 그래프와 히스토그램·KDE를 스스로 작성하려면 어떻게 읽어야 하나?",
      "url": "/notes/data/statistics-distributions-and-plots#질문-퍼짐-그래프와-히스토그램kde를-스스로-작성하려면-어떻게-읽어야-하나",
      "topic": "데이터 분석",
      "sourceTitle": "분포를 그리는 코드 — Axes·히스토그램·KDE·박스플롯",
      "context": "표준편차가 퍼짐을 요약한다는 것은 알지만 fig, axes가 낯설어, 나중에 문제를 혼자 풀 수 있을 정도로 그래프 작성 과정을 설명해 달라고 했다.",
      "intent": "코드를 통째로 외우는 대신 비교 목적에서 각 인수를 선택할 수 있게 되려는 요청이다.",
      "answer": "plt.subplots()로 전체 그림과 그래프 영역을 만들고, Seaborn에 데이터·표현 방식·그릴 영역을 전달한다. 이후 해당 영역에 제목을 붙인다."
    },
    {
      "id": "data/statistics-distributions-and-plots#질문-plt와-sns는-다른-라이브러리인데-같은-그림인-줄-어떻게-아나-figure-때문에-ax를-생략하나",
      "title": "plt와 sns는 다른 라이브러리인데 같은 그림인 줄 어떻게 아나? figure() 때문에 ax를 생략하나?",
      "url": "/notes/data/statistics-distributions-and-plots#질문-plt와-sns는-다른-라이브러리인데-같은-그림인-줄-어떻게-아나-figure-때문에-ax를-생략하나",
      "topic": "데이터 분석",
      "sourceTitle": "분포를 그리는 코드 — Axes·히스토그램·KDE·박스플롯",
      "context": "plt.figure() 다음에 sns.boxplot()과 plt.title()이 이어지는데 같은 그림에 그리라는 명시적 연결이 보이지 않았다. 이후 figure()와 ax 생략의 관계를 다시 물었다.",
      "intent": "두 라이브러리가 그림을 공유하는 숨은 실행 상태를 확인하려는 질문이다.",
      "answer": "Seaborn은 Matplotlib을 기반으로 하며, 여기서 쓰는 Axes 수준 함수는 ax를 생략하면 현재 Axes를 사용한다. figure() 자체가 ax 생략을 허용하는 특별한 기능은 아니다."
    },
    {
      "id": "data/statistics-distributions-and-plots#질문-quantile은-무엇을-반환하고-lowerupper와-수염-끝은-어떻게-다른가",
      "title": "quantile()은 무엇을 반환하고, lower·upper와 수염 끝은 어떻게 다른가?",
      "url": "/notes/data/statistics-distributions-and-plots#질문-quantile은-무엇을-반환하고-lowerupper와-수염-끝은-어떻게-다른가",
      "topic": "데이터 분석",
      "sourceTitle": "분포를 그리는 코드 — Axes·히스토그램·KDE·박스플롯",
      "context": "사분위수 코드에서 quantile()만 이해하면 될 것 같다고 물었다. 이어 Q1·Q3에서 IQR의 일정 배수만큼 떨어진 경계와 그 안의 실제 최솟값·최댓값을 구분해 설명했다.",
      "intent": "분위수의 위치와 실제 값, 계산 경계와 그래프에 표시되는 수염을 연결하려는 질문이다.",
      "answer": "quantile(0.25)의 0.25는 위치를 정하는 비율이고, 반환값은 원래 변수의 단위를 가진 값이다. Q1·Q3의 차이가 IQR이며, 기본 1.5×IQR 규칙의 수염은 경계 안쪽의 실제 관측값까지 이어진다."
    },
    {
      "id": "data/statistics-distributions-and-plots#질문-왜-상자와-수염을-나눠-그리나-가운데-절반은-어떤-절반인가",
      "title": "왜 상자와 수염을 나눠 그리나? 가운데 절반은 어떤 절반인가?",
      "url": "/notes/data/statistics-distributions-and-plots#질문-왜-상자와-수염을-나눠-그리나-가운데-절반은-어떤-절반인가",
      "topic": "데이터 분석",
      "sourceTitle": "분포를 그리는 코드 — Axes·히스토그램·KDE·박스플롯",
      "context": "원래 세션 이후 정리 과정에서 상자와 수염을 나누는 이유, 특히 “가운데 50%”가 무엇의 절반인지 추가로 확인했다. 이 절은 그 후속 질문을 반영한 보충 설명이다.",
      "intent": "박스플롯의 부품 이름보다 각 부분이 보여 주는 정보의 차이를 이해하려는 질문이다.",
      "answer": "상자는 정렬한 자료의 25% 위치부터 75% 위치까지, 즉 중심부의 퍼짐을 보여 준다. 수염은 그 밖에도 관측값이 어디까지 이어지는지 보여 주되, IQR 경계 바깥 값은 별도 점으로 분리한다. 중심부와 바깥쪽 분포를 한 그림에서 따로 읽으려는 구성이다."
    },
    {
      "id": "data/statistics-distributions-and-plots#질문-로그-변환은-실제-요금-의미를-잃는-눈속임-아닌가-배열을-주면-x를-생략해도-되나",
      "title": "로그 변환은 실제 요금 의미를 잃는 눈속임 아닌가? 배열을 주면 x를 생략해도 되나?",
      "url": "/notes/data/statistics-distributions-and-plots#질문-로그-변환은-실제-요금-의미를-잃는-눈속임-아닌가-배열을-주면-x를-생략해도-되나",
      "topic": "데이터 분석",
      "sourceTitle": "분포를 그리는 코드 — Axes·히스토그램·KDE·박스플롯",
      "context": "np.log1p(df[\"fare\"])로 치우침을 줄여도 가로축이 실제 요금이 아니게 된다는 점을 지적했다. 세로축도 실제 개수가 아닌지, data에 값 자체를 넣으면 어떻게 되는지 함께 물었다.",
      "intent": "보기 좋은 모양과 해석 가능한 표현을 구분하고 데이터 전달 방식도 확인하려는 질문이다.",
      "answer": "로그 변환은 큰 값 사이의 간격을 압축하지만 읽는 단위가 바뀐다. 기본 histplot의 세로축은 여전히 해당 구간의 실제 개수다. 변환 후 구간 경계가 달라지므로 막대별 개수는 원래 그래프와 달라질 수 있다."
    },
    {
      "id": "data/statistics-relations-and-interpretation#질문-corr-결과는-series인가-행-이름과-열-이름도-값인가",
      "title": "corr() 결과는 Series인가? 행 이름과 열 이름도 값인가?",
      "url": "/notes/data/statistics-relations-and-interpretation#질문-corr-결과는-series인가-행-이름과-열-이름도-값인가",
      "topic": "데이터 분석",
      "sourceTitle": "변수 사이의 관계 — 상관행렬과 그룹별 그래프를 읽는 법",
      "context": "numeric_df.corr() 결과의 행·열 이름과 내부 숫자를 보고 Series인지 DataFrame인지 물었다. U자 데이터와 노이즈를 만든 코드가 상관계수 설명에 왜 필요한지도 함께 질문했다.",
      "intent": "결과 표의 구조를 이해한 뒤, 상관계수라는 요약값이 무엇을 설명하고 놓치는지 확인하려는 질문이다.",
      "answer": "DataFrame의 .corr()는 변수 쌍마다 상관계수를 계산한 DataFrame을 돌려준다. 행·열 라벨은 변수 이름이고 내부 값이 계수다. 기본 Pearson 상관계수는 선형 관계를 요약한다. pandas corr 문서"
    },
    {
      "id": "data/statistics-relations-and-interpretation#질문-groupby로-구한-평균은-무엇인가-barplot은-어떻게-생존율인-줄-아나",
      "title": "groupby로 구한 평균은 무엇인가? barplot은 어떻게 생존율인 줄 아나?",
      "url": "/notes/data/statistics-relations-and-interpretation#질문-groupby로-구한-평균은-무엇인가-barplot은-어떻게-생존율인-줄-아나",
      "topic": "데이터 분석",
      "sourceTitle": "변수 사이의 관계 — 상관행렬과 그룹별 그래프를 읽는 법",
      "context": "성별로 생존 열을 묶어 평균을 낸다는 설명은 직접 했지만, 요금을 이진 변수라고 표현하고 observed=False의 역할을 물었다.",
      "intent": "그룹을 나누는 열, 요약할 열, 집계 함수의 역할을 분리하려는 질문이다.",
      "answer": "groupby()가 그룹을 나누고 선택한 열의 .mean()이 평균을 구한다. Seaborn의 barplot()도 기본 집계가 평균이다. 생존율이라는 의미는 그래프 함수가 알아내는 것이 아니라 survived가 0·1로 코딩되어 있기 때문에 생긴다."
    },
    {
      "id": "data/statistics-relations-and-interpretation#질문-남성의-생존율과-pclass가-높은-사람의-생존율이-더-높은가-박스플롯은-어떻게-읽나",
      "title": "남성의 생존율과 pclass가 높은 사람의 생존율이 더 높은가? 박스플롯은 어떻게 읽나?",
      "url": "/notes/data/statistics-relations-and-interpretation#질문-남성의-생존율과-pclass가-높은-사람의-생존율이-더-높은가-박스플롯은-어떻게-읽나",
      "topic": "데이터 분석",
      "sourceTitle": "변수 사이의 관계 — 상관행렬과 그룹별 그래프를 읽는 법",
      "context": "처음 해석에서 남성의 생존율이 더 높고 pclass가 높을수록 생존율이 높다고 말했다. 이어 생존 여부별 나이·요금 박스플롯의 읽는 법을 물었다.",
      "intent": "그래프의 그룹 이름과 숫자를 실제 의미에 연결하고, 평균 막대에서 분포 비교로 넘어가려는 질문이다.",
      "answer": "당시 대화에 제시된 집계에서는 여성 생존율이 약 74.2%, 남성은 약 18.9%였다. 등급별로는 1등급 약 63.0%, 2등급 약 47.3%, 3등급 약 24.2%였다. 두 방향을 모두 고쳐 읽어야 한다. pclass 숫자가 작을수록 상위 객실 등급이다. 이 수치는 해당 표본의 관측 비율이지 성별·등급이 생존을 결정한다는 법칙이 아니다."
    },
    {
      "id": "data/statistics-relations-and-interpretation#질문-1등급-안에서-요금-분포가-비슷하다면-요금과-생존의-관계가-작다는-뜻인가",
      "title": "1등급 안에서 요금 분포가 비슷하다면, 요금과 생존의 관계가 작다는 뜻인가?",
      "url": "/notes/data/statistics-relations-and-interpretation#질문-1등급-안에서-요금-분포가-비슷하다면-요금과-생존의-관계가-작다는-뜻인가",
      "topic": "데이터 분석",
      "sourceTitle": "변수 사이의 관계 — 상관행렬과 그룹별 그래프를 읽는 법",
      "context": "“1등급 승객만 남겼을 때 생존 여부에 따른 요금 분포가 거의 비슷하다”는 가정에 대해, 요금과 생존의 관계가 크지 않아 보이며 먼저 등급과 요금의 관계를 확인하겠다고 답했다.",
      "intent": "전체 집단에서 본 요금 차이가 객실 등급의 구성 차이와 연결되는지 점검하려는 응답이다.",
      "answer": "후속 확인 방향은 타당하지만 해석에는 1등급 안에서라는 조건을 붙여야 한다. 이 가정만으로 2·3등급이나 전체 승객의 관계까지 결론 내릴 수 없다. 비슷해 보이는 박스만으로 관계의 크기를 정량화한 것도 아니다."
    },
    {
      "id": "learning/2026-09-29-statistics#질문-실습-환경과-데이터-로딩은-무엇을-준비하는-단계인가",
      "title": "실습 환경과 데이터 로딩은 무엇을 준비하는 단계인가?",
      "url": "/notes/learning/2026-09-29-statistics#질문-실습-환경과-데이터-로딩은-무엇을-준비하는-단계인가",
      "topic": "데이터 분석",
      "sourceTitle": "통계·시각화 실습 — 요약표의 구조에서 조건을 붙인 해석까지",
      "context": "통계·시각화 노트북의 환경 설정과 데이터 로딩 부분부터 설명을 요청했다.",
      "intent": "라이브러리와 설정을 먼저 이해하고, 이후에 쓰는 df가 어디서 왔는지 확인하려는 요청이다.",
      "answer": "NumPy는 수치 연산, pandas는 표와 집계, Matplotlib은 그림·축 관리, Seaborn은 통계 그래프를 맡는다. 표시 옵션을 바꾸는 것과 실제 데이터를 바꾸는 것은 다르다. 로딩 코드에서는 실제 Titanic 자료를 가져오는 경로와 실패 시 만든 합성 데이터 경로를 구분해야 한다."
    },
    {
      "id": "learning/2026-09-29-statistics#질문-샘플-수피처-수수치형-열타깃을-이렇게-읽으면-맞나",
      "title": "샘플 수·피처 수·수치형 열·타깃을 이렇게 읽으면 맞나?",
      "url": "/notes/learning/2026-09-29-statistics#질문-샘플-수피처-수수치형-열타깃을-이렇게-읽으면-맞나",
      "topic": "데이터 분석",
      "sourceTitle": "통계·시각화 실습 — 요약표의 구조에서 조건을 붙인 해석까지",
      "context": "첫 체크포인트에서 표의 행·열 수와 dtype을 보고 직접 답했다. 범주형의 의미는 아직 모르겠다고 밝혔다.",
      "intent": "화면에 보이는 정보를 분석 대상과 연결해 스스로 읽어 보려는 시도다.",
      "answer": "shape는 헤더를 제외한 데이터 크기다. 총 열 수와 타깃을 제외한 입력 열 수도 구분한다. 숫자 dtype을 의미상의 수치형 변수와 동일하게 세면 pclass·survived의 해석을 놓친다."
    },
    {
      "id": "learning/2026-09-29-statistics#질문-그래프를-혼자-그릴-수-있게-figaxes와-각-인수를-설명해-줄-수-있나",
      "title": "그래프를 혼자 그릴 수 있게 fig·axes와 각 인수를 설명해 줄 수 있나?",
      "url": "/notes/learning/2026-09-29-statistics#질문-그래프를-혼자-그릴-수-있게-figaxes와-각-인수를-설명해-줄-수-있나",
      "topic": "데이터 분석",
      "sourceTitle": "통계·시각화 실습 — 요약표의 구조에서 조건을 붙인 해석까지",
      "context": "퍼짐 비교와 히스토그램·KDE를 배우면서, 별도 설명 자료보다 나중에 직접 문제를 풀 수 있도록 코드의 구성을 설명해 달라고 했다. plt와 sns가 같은 그림을 쓰는 이유도 물었다.",
      "intent": "눈앞의 그림을 보는 것에서, 목적에 맞는 데이터를 골라 원하는 영역에 그리는 단계로 가려는 요청이다.",
      "answer": "fig는 전체 그림, ax는 그래프 영역 하나다. data·x는 사용할 값, bins는 히스토그램의 구간 수, ax는 그릴 장소를 정한다. Axes 수준 함수에서 ax를 생략하면 현재 영역을 사용한다."
    },
    {
      "id": "learning/2026-09-29-statistics#질문-사분위수와-실제-수염-끝은-다르지-않나-로그를-씌우면-의미를-잃지-않나",
      "title": "사분위수와 실제 수염 끝은 다르지 않나? 로그를 씌우면 의미를 잃지 않나?",
      "url": "/notes/learning/2026-09-29-statistics#질문-사분위수와-실제-수염-끝은-다르지-않나-로그를-씌우면-의미를-잃지-않나",
      "topic": "데이터 분석",
      "sourceTitle": "통계·시각화 실습 — 요약표의 구조에서 조건을 붙인 해석까지",
      "context": "quantile() 설명 뒤 IQR 경계가 실제 수염 끝과 다르다는 점을 짚었다. 이후 요금에 로그를 씌우면 눈속임처럼 보일 수 있고 원래 개수가 유지되는지도 물었다.",
      "intent": "그림을 만드는 규칙이 원래 값을 어떻게 요약하거나 변환하는지 확인하려는 질문이다.",
      "answer": "IQR 경계는 계산한 기준선이고, 기본 박스플롯의 수염은 그 안에 있는 실제 관측값까지 간다. 로그 변환은 원 단위의 간격을 바꾸므로 원래 요금 그래프와 같은 의미로 읽을 수 없다. 관측을 없애는 것은 아니지만 구간 경계가 바뀌어 막대별 개수는 달라질 수 있다."
    },
    {
      "id": "learning/2026-09-29-statistics#질문-corr-표와-결측치-표의-행-인덱스는-어디서-오는가",
      "title": "corr 표와 결측치 표의 행 인덱스는 어디서 오는가?",
      "url": "/notes/learning/2026-09-29-statistics#질문-corr-표와-결측치-표의-행-인덱스는-어디서-오는가",
      "topic": "데이터 분석",
      "sourceTitle": "통계·시각화 실습 — 요약표의 구조에서 조건을 붙인 해석까지",
      "context": "상관행렬의 행·열 라벨과 내부 값의 차이를 질문했다. 결측치 요약표에서는 행 인덱스가 갑자기 생기는 것 같아 “질문을 더 해 달라”고 요청했다.",
      "intent": "객체의 이름만 외우지 않고 원본 열 → 집계 Series → 요약 DataFrame으로 바뀌는 구조를 따라가려는 질문이다.",
      "answer": "corr()의 행·열 라벨은 비교하는 변수 이름이다. 결측치 집계 Series의 인덱스도 원본 열 이름이며, 이 Series를 DataFrame의 열로 넣으면 인덱스 라벨에 맞춰 행이 정렬된다. 요약 결과의 행은 더 이상 승객 한 명을 뜻하지 않는다."
    },
    {
      "id": "learning/2026-09-29-statistics#질문-미션-코드에서-무엇이-문제이고-그래프-이름은-어떻게-붙이나",
      "title": "미션 코드에서 무엇이 문제이고, 그래프 이름은 어떻게 붙이나?",
      "url": "/notes/learning/2026-09-29-statistics#질문-미션-코드에서-무엇이-문제이고-그래프-이름은-어떻게-붙이나",
      "topic": "데이터 분석",
      "sourceTitle": "통계·시각화 실습 — 요약표의 구조에서 조건을 붙인 해석까지",
      "context": "미션으로 넘어가 “마지막 데이터셋”이 따로 있는지 물었고, 범주별 반복 그림과 비율 그래프의 오류를 차례로 점검했다.",
      "intent": "문제의 대상을 먼저 확인하고, 작성한 코드를 실행 가능한 그림 구성으로 고치려는 요청이다.",
      "answer": "문제의 “마지막에 데이터셋을 요약”은 별도 데이터셋 이름이 아니라 현재 df를 요약하라는 뜻이었다. 오류는 변수와 문자열, 반복 대상의 짝, 반환 객체의 개수, 키워드 인수를 구분하며 고쳤다."
    },
    {
      "id": "learning/2026-09-29-statistics#질문-나이-결측치를-평균으로-채우면-평균은-유지되고-퍼짐은-줄어들지-않나",
      "title": "나이 결측치를 평균으로 채우면 평균은 유지되고 퍼짐은 줄어들지 않나?",
      "url": "/notes/learning/2026-09-29-statistics#질문-나이-결측치를-평균으로-채우면-평균은-유지되고-퍼짐은-줄어들지-않나",
      "topic": "데이터 분석",
      "sourceTitle": "통계·시각화 실습 — 요약표의 구조에서 조건을 붙인 해석까지",
      "context": "미션 5에서 결측치를 단순히 삭제하는 대신 나이의 평균으로 채우겠다고 제안하고, 평균은 유지되지만 표준편차는 줄어든다고 설명했다.",
      "intent": "행을 보존하는 이점과 분포를 바꾸는 단점을 함께 고려한 제안이다.",
      "answer": "관측된 값의 평균으로 채우면 그 관측 평균은 유지된다. 다만 결측된 사람의 실제 나이를 모르므로 원래 전체 집단의 평균을 복구했다고 말할 수 없다. 평균에 값이 몰리면 퍼짐과 다른 변수와의 관계도 달라질 수 있다."
    },
    {
      "id": "learning/2026-09-29-statistics#질문-생존율-방향을-맞게-읽었나-박스가-겹치면-관계가-없는가",
      "title": "생존율 방향을 맞게 읽었나? 박스가 겹치면 관계가 없는가?",
      "url": "/notes/learning/2026-09-29-statistics#질문-생존율-방향을-맞게-읽었나-박스가-겹치면-관계가-없는가",
      "topic": "데이터 분석",
      "sourceTitle": "통계·시각화 실습 — 요약표의 구조에서 조건을 붙인 해석까지",
      "context": "미션 6의 근거 있는 관찰을 쓰며 “남성이 여성보다 생존율이 높다”, “pclass가 높을수록 생존율이 높다”고 말했다. 이어 박스플롯 해석을 요청했다.",
      "intent": "집계·그림을 문장으로 옮기고, 중심과 퍼짐을 근거로 관찰을 쓰려는 시도다.",
      "answer": "당시 제시된 집계는 여성 약 74.2%·남성 약 18.9%, 1등급 약 63.0%·2등급 약 47.3%·3등급 약 24.2%였다. 처음의 두 방향은 모두 교정했다. 객실 등급은 숫자가 작을수록 상위 등급이다."
    },
    {
      "id": "learning/2026-09-29-statistics#질문-미션-8의-답을-근거와-함께-채워-줄-수-있나",
      "title": "미션 8의 답을 근거와 함께 채워 줄 수 있나?",
      "url": "/notes/learning/2026-09-29-statistics#질문-미션-8의-답을-근거와-함께-채워-줄-수-있나",
      "topic": "데이터 분석",
      "sourceTitle": "통계·시각화 실습 — 요약표의 구조에서 조건을 붙인 해석까지",
      "context": "마지막 요약 미션은 답을 직접 채우고 근거를 설명해 달라고 명시적으로 요청했다.",
      "intent": "앞서 확인한 품질·분포·관계를 한 편의 분석 요약으로 묶는 형태를 보려는 요청이다.",
      "answer": "당시 답변은 자료 품질 → 단변량 분포 → 변수 간 관계 → 추가 확인 → 모델링 전 준비 순서로 예시 답안을 제시했다. 이는 설명자가 제공한 답안이며 사용자가 독립적으로 작성하거나 제출한 결과로 세지 않는다."
    },
    {
      "id": "data/pandas-cleaning-validation#질문-coerce와-regexfalse는-무엇을-바꾸는가",
      "title": "coerce와 regex=False는 무엇을 바꾸는가?",
      "url": "/notes/data/pandas-cleaning-validation#질문-coerce와-regexfalse는-무엇을-바꾸는가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 정리와 검증 — 자료형, 결측, 중복, 파생 변수",
      "context": "쉼표가 든 금액을 숫자로 바꾸는 코드에서 두 인수의 뜻을 물었다. 날짜 변환 후 생긴 NaT를 보며 원래 비어 있던 값만 뜻하는지도 확인했다.",
      "intent": "연속된 처리에서 문자열 정리와 자료형 변환을 분리하고, 변환 실패가 어떻게 드러나는지 이해하려는 질문이다.",
      "answer": "str.replace(\",\", \"\", regex=False)는 문자 쉼표를 지울 뿐 숫자로 변환하지 않는다. pd.to_numeric(..., errors=\"coerce\")는 숫자로 해석할 수 없는 값을 결측으로 만든다. 날짜의 pd.to_datetime(..., errors=\"coerce\")는 해석하지 못한 값을 NaT로 만든다."
    },
    {
      "id": "data/pandas-cleaning-validation#질문-문자열-정리-결측-찾기-빈칸-채우기는-무엇이-다른가",
      "title": "문자열 정리, 결측 찾기, 빈칸 채우기는 무엇이 다른가?",
      "url": "/notes/data/pandas-cleaning-validation#질문-문자열-정리-결측-찾기-빈칸-채우기는-무엇이-다른가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 정리와 검증 — 자료형, 결측, 중복, 파생 변수",
      "context": "공백·대소문자를 정리한 다음 isna().sum(), 평균·중앙값 채우기, dropna()를 연달아 보았다. 이후 “왜 그 값을 넣고, 어떤 기준으로 처리하는가”라는 설명을 다시 요청했다.",
      "intent": "메서드 사용법보다 데이터의 의미에 근거한 처리 결정을 배우려는 질문이다.",
      "answer": "문자열 정리는 표현을 통일하고, 결측 검사는 현재 비어 있다고 인식되는 위치를 찾는다. 채우기·유지·제외는 분석 목적과 원인에 따라 정할 별개의 결정이다. 평균이나 중앙값이 항상 올바른 대체값은 아니다."
    },
    {
      "id": "data/pandas-cleaning-validation#질문-duplicated-결과를-고객-번호-열에-넣으면-중복이-제거되는가",
      "title": "duplicated() 결과를 고객 번호 열에 넣으면 중복이 제거되는가?",
      "url": "/notes/data/pandas-cleaning-validation#질문-duplicated-결과를-고객-번호-열에-넣으면-중복이-제거되는가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 정리와 검증 — 자료형, 결측, 중복, 파생 변수",
      "context": "미션에서 다음 코드를 직접 작성하고 잘못된 점을 물었다.",
      "intent": "중복을 발견하는 연산과 중복 행을 제거하는 연산, 열 대입과 표 전체 대입을 구분하려는 질문이다.",
      "answer": "duplicated()는 중복 여부를 담은 불리언 Series를 반환한다. 이 코드를 실행하면 고객 번호를 True/False로 바꾸며 행을 제거하지 않는다. 주문 한 건을 구분하려면 고객 번호가 아니라 주문 식별자인 order_id를 기준으로 검사해야 한다."
    },
    {
      "id": "data/pandas-cleaning-validation#질문-copy를-썼는데-raw-표의-행-수가-그대로인-이유는",
      "title": "copy()를 썼는데 raw 표의 행 수가 그대로인 이유는?",
      "url": "/notes/data/pandas-cleaning-validation#질문-copy를-썼는데-raw-표의-행-수가-그대로인-이유는",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 정리와 검증 — 자료형, 결측, 중복, 파생 변수",
      "context": "중복 제거 뒤 정리한 표는 9행, 원본은 10행이라고 보고된 상황에서 두 변수가 같은 객체의 별명인지 물었다.",
      "intent": "같은 이름으로 다시 저장하는 것, 같은 객체를 가리키는 것, 복사본을 만드는 것을 구분하려는 질문이다.",
      "answer": "other = raw는 같은 객체에 다른 이름을 붙이고, 이 실습처럼 단순 열 값을 가진 표의 other = raw.copy()는 별도 DataFrame을 만든다. 이후 other = other.drop_duplicates(...)는 제거 결과를 other라는 이름에 다시 연결한다. 원본의 행 수가 그대로인 것은 기대되는 결과다."
    },
    {
      "id": "data/pandas-cleaning-validation#질문-assert는-출력-뒤에-있어도-필요한가",
      "title": "assert는 출력 뒤에 있어도 필요한가?",
      "url": "/notes/data/pandas-cleaning-validation#질문-assert는-출력-뒤에-있어도-필요한가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 정리와 검증 — 자료형, 결측, 중복, 파생 변수",
      "context": "변환 전후 행 수를 출력하는 코드에 assert가 추가됐다. 이미 출력하고 끝난다면 어떤 역할이 더 있는지 물었다.",
      "intent": "사람이 읽는 출력과 컴퓨터가 확인하는 조건의 차이를 파악하려는 질문이다.",
      "answer": "print()는 값을 보여 주고, assert 조건은 거짓일 때 AssertionError를 내어 그 지점 이후 실행을 멈춘다. 앞선 출력이나 데이터 변경을 되돌려 주지는 않는다."
    },
    {
      "id": "data/pandas-cleaning-validation#질문-새-열은-자동으로-생기는가-나이-구간의-경계는-어떻게-읽는가",
      "title": "새 열은 자동으로 생기는가? 나이 구간의 경계는 어떻게 읽는가?",
      "url": "/notes/data/pandas-cleaning-validation#질문-새-열은-자동으로-생기는가-나이-구간의-경계는-어떻게-읽는가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 정리와 검증 — 자료형, 결측, 중복, 파생 변수",
      "context": "order_year라는 새 열을 대입하는 코드와 pd.cut()의 bins, labels, right=False를 질문했다. 실제 붙여넣은 코드에는 경계 5개와 라벨 5개가 있었다.",
      "intent": "Pandas가 어떤 의미를 자동 추론하는지와 사용자가 직접 정한 규칙을 구분하려는 질문이다.",
      "answer": "df[\"새 이름\"] = 값은 그 이름의 열을 만들고, 같은 이름이 이미 있으면 덮어쓴다. cut()의 경계가 6개면 연속 구간은 5개이므로 라벨도 5개여야 한다. right=False에서는 왼쪽을 포함하고 오른쪽을 제외한다."
    },
    {
      "id": "data/pandas-dataframe-selection#질문-이미-표인-데이터를-왜-다시-표로-만드는가",
      "title": "이미 표인 데이터를 왜 다시 표로 만드는가?",
      "url": "/notes/data/pandas-dataframe-selection#질문-이미-표인-데이터를-왜-다시-표로-만드는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame과 선택 — 표의 의미, Series, 불리언 마스크",
      "context": "DataFrame 실습의 목표를 “표를 만든다”라고 설명하자, 원본부터 표인데 왜 또 만드는지, 그래프와 AI 학습은 어디에 연결되는지 물었다.",
      "intent": "개별 문법을 외우기 전에 전체 작업의 목적과 결과물의 쓰임을 확인하려는 질문이다.",
      "answer": "표라는 외형을 만드는 것이 아니라, 풀려는 문제에 맞게 한 행의 단위와 열의 의미를 바꾸는 것이다. 고객 표는 고객당 한 행, 주문 표는 주문당 한 행, 행동 기록은 행동당 한 행일 수 있다. 다음 달 구매를 예측하려면 고객과 예측 기준 시점에 맞춘 입력표가 필요하다."
    },
    {
      "id": "data/pandas-dataframe-selection#질문-numpy도-표를-만들-수-있는데-왜-pandas를-쓰는가",
      "title": "NumPy도 표를 만들 수 있는데 왜 Pandas를 쓰는가?",
      "url": "/notes/data/pandas-dataframe-selection#질문-numpy도-표를-만들-수-있는데-왜-pandas를-쓰는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame과 선택 — 표의 의미, Series, 불리언 마스크",
      "context": "NumPy 배열로도 행과 열을 만들 수 있으니 DataFrame의 별도 역할이 불분명했다. tabular를 튜플과 연결해서 이해하기도 했다.",
      "intent": "데이터의 형태, 파이썬 객체, 그 객체를 다루는 라이브러리를 나누려는 질문이다.",
      "answer": "tabular data는 행과 열로 된 데이터라는 뜻이고 특정 라이브러리 이름이 아니다. Pandas는 도구 모음이고, DataFrame은 그 도구가 제공하는 2차원 표 객체다. NumPy 배열은 수치 배열 계산에, Pandas는 이름이 있는 열·행 인덱스·서로 다른 열 자료형·조건 선택·그룹 집계·키 결합을 다루는 데 편리하다."
    },
    {
      "id": "data/pandas-dataframe-selection#질문-인덱스는-기본키인가-표를-만드는-문법은-열-기준뿐인가",
      "title": "인덱스는 기본키인가? 표를 만드는 문법은 열 기준뿐인가?",
      "url": "/notes/data/pandas-dataframe-selection#질문-인덱스는-기본키인가-표를-만드는-문법은-열-기준뿐인가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame과 선택 — 표의 의미, Series, 불리언 마스크",
      "context": "고객 표 왼쪽의 0, 1, 2와 customer_id를 함께 보고, 기본키를 행 이름으로 이해했다. 딕셔너리로 만드는 표가 열 중심이라는 점은 설명했지만 행 중심 생성 방법도 물었다.",
      "intent": "화면의 행 번호, 데이터의 식별자, 생성 코드의 자료구조를 구분하려는 질문이다.",
      "answer": "인덱스는 Pandas가 행을 식별·선택·정렬하는 데 쓰는 레이블이며 중복될 수도 있다. 업무상 기본키는 각 대상을 유일하게 구분하고 결측이 없어야 한다. customer_id가 그 조건을 충족하는지는 검사해야 하고, 이름·도시·소득이 모두 식별키가 되는 것은 아니다."
    },
    {
      "id": "data/pandas-dataframe-selection#질문-series는-튜플이나-딕셔너리인가-대괄호-하나가-왜-결과를-바꾸는가",
      "title": "Series는 튜플이나 딕셔너리인가? 대괄호 하나가 왜 결과를 바꾸는가?",
      "url": "/notes/data/pandas-dataframe-selection#질문-series는-튜플이나-딕셔너리인가-대괄호-하나가-왜-결과를-바꾸는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame과 선택 — 표의 의미, Series, 불리언 마스크",
      "context": "orders[\"amount\"]는 Series라는 말을 들었지만 Series 자체의 설명이 부족했다. columns = [\"amount\"]가 실제 데이터를 담는지, 이후 orders[columns]가 무엇인지도 혼동했다.",
      "intent": "문법의 모양을 외우기보다 각각의 표현식이 만드는 객체를 확인하려는 질문이다.",
      "answer": "Series는 인덱스가 붙은 1차원 데이터 객체다. 인덱스와 값을 묶은 튜플들의 리스트나 파이썬 딕셔너리와 같은 타입은 아니다. 하나의 열 이름 문자열로 선택하면 Series, 열 이름의 리스트로 선택하면 DataFrame을 받는다."
    },
    {
      "id": "data/pandas-dataframe-selection#질문-비교-결과는-무엇이고-왜-and-대신-와-괄호를-쓰는가",
      "title": "비교 결과는 무엇이고, 왜 and 대신 &와 괄호를 쓰는가?",
      "url": "/notes/data/pandas-dataframe-selection#질문-비교-결과는-무엇이고-왜-and-대신-와-괄호를-쓰는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame과 선택 — 표의 의미, Series, 불리언 마스크",
      "context": "loc의 입력 개수와 마스크의 실제 값을 물었다. &가 반복 가능한 객체라면 어디에나 적용되는지, 조건을 감싼 괄호가 튜플을 만드는지도 질문했다.",
      "intent": "조건식에서 행 선택까지 한 번에 설명하지 않고 중간 반환값을 확인하려는 질문이다.",
      "answer": "열과 숫자의 비교는 각 원소를 비교한 불리언 Series를 만든다. 이를 .loc[행 선택, 열 선택]의 행 자리에 넣으면 True인 행을 선택한다. &와 |는 Series의 조건들을 원소별로 결합한다. 괄호는 연산 우선순위를 명확히 한다."
    },
    {
      "id": "data/pandas-groupby-merge-reshape#질문-agg는-원래-표에-새-열을-추가하는-함수인가",
      "title": "agg()는 원래 표에 새 열을 추가하는 함수인가?",
      "url": "/notes/data/pandas-groupby-merge-reshape#질문-agg는-원래-표에-새-열을-추가하는-함수인가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 집계와 결합 — agg, transform, merge에서 pipe까지",
      "context": "고객별 요약표를 만들며 “계산한 뒤 대상 DataFrame에 새 열을 추가한다”고 이해해도 되는지 물었다. 이어 반환값과 함수의 필요성을 다시 확인했다.",
      "intent": "함수 호출의 결과와 원본 표 수정 여부를 분리하려는 질문이다.",
      "answer": "이 실습의 groupby(...).agg(새이름=(\"대상열\", \"계산법\"))는 그룹별 계산을 이름 붙인 열에 담은 새 요약 DataFrame을 반환한다. 원래 주문 표에 열을 추가하지 않는다."
    },
    {
      "id": "data/pandas-groupby-merge-reshape#질문-transform은-실제로-무엇을-반환하는가",
      "title": "transform()은 실제로 무엇을 반환하는가?",
      "url": "/notes/data/pandas-groupby-merge-reshape#질문-transform은-실제로-무엇을-반환하는가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 집계와 결합 — agg, transform, merge에서 pipe까지",
      "context": "“평균을 각 행에 붙인다”라는 요약만으로는 반환 타입과 처리 순서를 이해할 수 없다고 지적했다. 새 열이 어느 단계에서 생기는지도 불명확했다.",
      "intent": "결과를 추상적으로 설명하는 대신 인덱스와 값이 있는 중간 객체를 확인하려는 질문이다.",
      "answer": "여기서 orders.groupby(\"customer_id\")[\"amount\"].transform(\"mean\")은 원래 주문 행의 인덱스와 길이를 가진 Series를 반환한다. 열 추가는 그 다음 대입에서 일어난다."
    },
    {
      "id": "data/pandas-groupby-merge-reshape#질문-agg-문법이-왜-갑자기-달라졌는가",
      "title": "agg() 문법이 왜 갑자기 달라졌는가?",
      "url": "/notes/data/pandas-groupby-merge-reshape#질문-agg-문법이-왜-갑자기-달라졌는가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 집계와 결합 — agg, transform, merge에서 pipe까지",
      "context": "named aggregation을 설명한 뒤 비교 예제에서 ...[\"amount\"].agg(\"mean\")으로 문법을 바꾸자, 앞의 설명과 다르다고 질문했다. 답변도 설명 없이 사용법을 섞은 점을 인정했다.",
      "intent": "배운 문법의 규칙과 새 문법의 관계를 일관되게 이해하려는 질문이다.",
      "answer": "둘 다 집계지만 계산할 열을 정하는 위치와 반환 타입이 다르다. 한 가지 문법을 이해하는 중에 설명 없이 바꾸면 혼동을 키운다."
    },
    {
      "id": "data/pandas-groupby-merge-reshape#질문-customer_id는-원래-열인데-왜-reset_index가-필요한가",
      "title": "customer_id는 원래 열인데 왜 reset_index()가 필요한가?",
      "url": "/notes/data/pandas-groupby-merge-reshape#질문-customer_id는-원래-열인데-왜-reset_index가-필요한가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 집계와 결합 — agg, transform, merge에서 pipe까지",
      "context": "고객 요약을 연결하기 전에 summary = customer_order_summary.reset_index()를 보고, 고객 번호는 애초에 일반 열 아니었는지 물었다.",
      "intent": "원본 표와 집계 결과 표의 구조를 구별하려는 질문이다.",
      "answer": "원래 주문 표에서는 일반 열이다. 기본 설정의 groupby(\"customer_id\").agg(...)로 만든 새 요약표에서는 그룹 기준이 인덱스가 된다. reset_index()는 그 인덱스를 일반 열로 꺼낸 새 표를 반환한다."
    },
    {
      "id": "data/pandas-groupby-merge-reshape#질문-merge에서-왼쪽과-오른쪽은-무엇이고-how는-무엇인가",
      "title": "merge()에서 왼쪽과 오른쪽은 무엇이고 how는 무엇인가?",
      "url": "/notes/data/pandas-groupby-merge-reshape#질문-merge에서-왼쪽과-오른쪽은-무엇이고-how는-무엇인가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 집계와 결합 — agg, transform, merge에서 pipe까지",
      "context": "왼쪽·오른쪽을 정의하지 않은 설명이 어려웠고, 원본 주문 연결과 고객별 요약 연결을 오가며 행 수가 달라지는 이유를 다시 물었다.",
      "intent": "무엇과 무엇을 어떤 기준으로 합치는지 작은 표 하나에서 확인하려는 질문이다.",
      "answer": "left.merge(right, ...)에서 호출하는 객체가 왼쪽, 인수로 전달한 표가 오른쪽이다. 화면에 놓인 위치를 말하는 것이 아니다. on은 연결 키, how는 어느 쪽 키의 행을 남길지 정한다."
    },
    {
      "id": "data/pandas-groupby-merge-reshape#질문-validate는-일대일로-만들어-주는-속성인가",
      "title": "validate는 일대일로 만들어 주는 속성인가?",
      "url": "/notes/data/pandas-groupby-merge-reshape#질문-validate는-일대일로-만들어-주는-속성인가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 집계와 결합 — agg, transform, merge에서 pipe까지",
      "context": "고객 정보와 고객별 요약을 연결할 때 validate=\"one_to_one\"의 의미를 물었다.",
      "intent": "연결 동작, 기대 관계의 검사, 연결 성공 여부 표시를 구별하려는 질문이다.",
      "answer": "validate는 merge()에 전달하는 인수다. 지정한 키 유일성 조건을 검사하고 맞지 않으면 오류를 낸다. 중복을 지워 일대일로 고쳐 주거나 양쪽의 모든 키가 일치하는지 확인해 주는 기능이 아니다."
    },
    {
      "id": "data/pandas-groupby-merge-reshape#질문-pivot_table을-하면-category와-amount-열이-사라지는가",
      "title": "pivot_table()을 하면 category와 amount 열이 사라지는가?",
      "url": "/notes/data/pandas-groupby-merge-reshape#질문-pivot_table을-하면-category와-amount-열이-사라지는가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 집계와 결합 — agg, transform, merge에서 pipe까지",
      "context": "다음 날 피벗 결과에서 기존 열 이름이 보이지 않는 점과 melt()에서 외울 것·이해할 것을 물었다.",
      "intent": "열 이름과 셀 값이 자리만 바뀌는 경우와 집계로 정보가 줄어드는 경우를 나누려는 질문이다.",
      "answer": "category의 값들이 새 열 이름이 되고 amount 값은 새 표의 칸을 채운다. 원본 표의 열은 그대로다. 다만 같은 고객·카테고리의 여러 주문을 합산하면 개별 주문 정보는 요약된다."
    },
    {
      "id": "data/pandas-groupby-merge-reshape#질문-메서드-체이닝과-pipe는-무엇을-다음-단계에-넘기는가",
      "title": "메서드 체이닝과 pipe()는 무엇을 다음 단계에 넘기는가?",
      "url": "/notes/data/pandas-groupby-merge-reshape#질문-메서드-체이닝과-pipe는-무엇을-다음-단계에-넘기는가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 집계와 결합 — agg, transform, merge에서 pipe까지",
      "context": "마지막 두 절에서 연속된 메서드와 직접 만든 함수를 연결하는 코드를 순서대로 설명해 달라고 요청했다.",
      "intent": "긴 표현식이 하나의 마법처럼 보이지 않도록 입력과 반환값을 단계별로 추적하려는 맥락이다.",
      "answer": "체이닝은 앞 메서드가 반환한 객체에 다음 메서드를 호출한다. 여기서 .pipe(함수, 추가인수)는 앞의 표를 함수의 첫 번째 인수로 넘기고 그 함수의 반환값을 돌려준다."
    },
    {
      "id": "learning/2026-09-29-dataframe#질문-이미-표가-있는데-왜-또-표를-만드는가",
      "title": "이미 표가 있는데 왜 또 표를 만드는가?",
      "url": "/notes/learning/2026-09-29-dataframe#질문-이미-표가-있는데-왜-또-표를-만드는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame 학습 기록 — 표의 목적부터 집계와 파이프라인까지",
      "context": "DataFrame 실습의 큰 그림을 요청했다. 첫 설명의 “모델이나 분석이 사용할 표를 만든다”는 표현에, 원본도 표인데 무엇을 바꾸는지, 그래프는 왜 필요한지 다시 질문했다.",
      "intent": "낯선 함수를 나열하기 전에 입력 데이터와 최종 결과물의 관계를 파악하려는 질문이다.",
      "answer": "바꾸는 것은 표의 외형보다 한 행의 의미다. 주문 한 건·고객 한 명·행동 한 번이 각각 다른 행 단위이며, 예측 문제에서는 고객과 기준 시점에 맞춰 입력을 구성해야 한다. 집계·결합·기간 제한을 하는 이유가 여기에서 나온다."
    },
    {
      "id": "learning/2026-09-29-dataframe#질문-eda와-전처리는-어디에서-나뉘는가",
      "title": "EDA와 전처리는 어디에서 나뉘는가?",
      "url": "/notes/learning/2026-09-29-dataframe#질문-eda와-전처리는-어디에서-나뉘는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame 학습 기록 — 표의 목적부터 집계와 파이프라인까지",
      "context": "EDA를 원본을 그래프로 보며 특징을 찾고 가공하는 과정으로 설명한 뒤, 조사에 근거한 전처리가 시작되면 EDA 밖으로 나가는지 물었다. tabular를 튜플과 연결해 듣기도 했다.",
      "intent": "활동 이름, 데이터 형태, 사용하는 도구를 서로 다른 층위로 구분하려는 질문이다.",
      "answer": "EDA는 이해를 위한 질문과 조사이고 전처리는 데이터를 바꾸는 연산이다. EDA 중 날짜나 문자열을 정리하고 다시 탐색할 수 있다. tabular는 표 형태라는 말이며 파이썬 튜플을 뜻하지 않는다."
    },
    {
      "id": "learning/2026-09-29-dataframe#질문-한-행-기본키-자료형-결측을-어떻게-읽는가",
      "title": "한 행, 기본키, 자료형, 결측을 어떻게 읽는가?",
      "url": "/notes/learning/2026-09-29-dataframe#질문-한-행-기본키-자료형-결측을-어떻게-읽는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame 학습 기록 — 표의 목적부터 집계와 파이프라인까지",
      "context": "고객 표를 보고 한 행은 고객 한 명이라고 답했다. 기본키를 행 이름과 연결했고 여러 열이 후보라고 생각했으며, 결측도 모든 열에 있을 것이라고 추측했다.",
      "intent": "표의 구조를 스스로 읽은 뒤 어떤 부분이 데이터 의미이고 어떤 부분이 도구의 표시인지 점검하는 맥락이다.",
      "answer": "고객 한 명이라는 행 단위는 맞았다. 기본키는 그 고객을 유일하게 구분하고 결측이 없는 식별자여야 한다. 화면의 인덱스가 자동으로 그런 조건을 충족하는 업무상 키가 되는 것은 아니다. 결측은 전체 인상이 아니라 실제 열별 결과로 확인해야 한다."
    },
    {
      "id": "learning/2026-09-29-dataframe#질문-series를-설명하지-않고-선택-문법부터-넘어가도-되는가",
      "title": "Series를 설명하지 않고 선택 문법부터 넘어가도 되는가?",
      "url": "/notes/learning/2026-09-29-dataframe#질문-series를-설명하지-않고-선택-문법부터-넘어가도-되는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame 학습 기록 — 표의 목적부터 집계와 파이프라인까지",
      "context": "orders_raw[\"category\"], 단일 열과 여러 열 선택, .loc의 두 입력을 차례로 질문했다. Series를 처음에는 인덱스가 붙은 1차원 리스트에 가깝게 설명했지만, 튜플·딕셔너리와의 차이와 혼합 자료형을 다시 확인했다.",
      "intent": "코드의 일부를 생략하지 않고 각 표현식이 돌려주는 객체부터 이해하려는 질문이다.",
      "answer": "Series는 인덱스가 있는 별도 1차원 객체다. df[\"amount\"]는 Series, df\"amount\"는 한 열짜리 DataFrame이다. columns = [\"amount\"]에는 실제 금액이 아니라 열 이름 문자열이 들어 있으며, 이를 df[columns]에 전달해야 데이터를 선택한다."
    },
    {
      "id": "learning/2026-09-29-dataframe#질문-결측에-무엇을-넣을지는-왜-결정하지-않는가",
      "title": "결측에 무엇을 넣을지는 왜 결정하지 않는가?",
      "url": "/notes/learning/2026-09-29-dataframe#질문-결측에-무엇을-넣을지는-왜-결정하지-않는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame 학습 기록 — 표의 목적부터 집계와 파이프라인까지",
      "context": "coerce, regex=False, NaT, 문자열 정리, isna().sum(), 결측 대체 예제를 확인했다. 그 뒤 설명이 방법에 머문다며 목적과 판단 기준을 구체적으로 요청했다.",
      "intent": "평균·중앙값을 넣는 문법을 외우는 대신 실제로 그렇게 해도 되는 근거를 이해하려는 질문이다.",
      "answer": "모르는 값과 0인 값은 다르다. 원천에서 복구할 수 있는지, 해당 계산에서만 제외할 수 있는지, 결측 그대로 사용할 수 있는지, 추정이 필요한지를 분석 목적에 맞춰 판단한다. “누락 비율이 이 정도면 무조건 채운다”라는 보편 규칙은 없다."
    },
    {
      "id": "learning/2026-09-29-dataframe#질문-copy를-썼는데-왜-원본은-그대로인가",
      "title": "copy()를 썼는데 왜 원본은 그대로인가?",
      "url": "/notes/learning/2026-09-29-dataframe#질문-copy를-썼는데-왜-원본은-그대로인가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame 학습 기록 — 표의 목적부터 집계와 파이프라인까지",
      "context": "copy()를 별명 만들기처럼 이해해, 정리본에서 중복을 제거했는데 원본 길이가 10인 이유를 물었다.",
      "intent": "별명·복사본·반환값 재대입의 차이를 이해하려는 질문이다.",
      "answer": "new = raw와 new = raw.copy()는 다르다. 이 실습의 복사본에서 제거한 결과를 new에 다시 저장해도 원본의 행 수를 줄이는 것은 아니다."
    },
    {
      "id": "learning/2026-09-29-dataframe#질문-agg와-transform의-반환값을-왜-계속-헷갈리는가",
      "title": "agg와 transform의 반환값을 왜 계속 헷갈리는가?",
      "url": "/notes/learning/2026-09-29-dataframe#질문-agg와-transform의-반환값을-왜-계속-헷갈리는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame 학습 기록 — 표의 목적부터 집계와 파이프라인까지",
      "context": "“그룹 평균을 각 행에 붙인다”라는 짧은 설명을 듣고도 이해되지 않았고, 실제 Series와 처리 순서가 빠졌다고 지적했다. 이후 미션에서도 agg()가 원래 표에 새 열을 붙이는지, 왜 필요한지 다시 물었다.",
      "intent": "비슷한 계산 결과를 단순한 말로 구별하는 대신 실제 인덱스·길이·타입을 확인하려는 질문이다.",
      "answer": "집계는 고객당 결과 하나를 만들고, 이 예의 transform()은 원래 주문 행마다 그 고객의 값을 대응시킨 Series를 만든다. 새 열은 마지막 대입에서 생긴다. named agg()는 새 요약 DataFrame을 반환하며 원본에 열을 추가하지 않는다."
    },
    {
      "id": "learning/2026-09-29-dataframe#질문-출력이-이미-됐는데-assert는-왜-필요한가",
      "title": "출력이 이미 됐는데 assert는 왜 필요한가?",
      "url": "/notes/learning/2026-09-29-dataframe#질문-출력이-이미-됐는데-assert는-왜-필요한가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame 학습 기록 — 표의 목적부터 집계와 파이프라인까지",
      "context": "transform()을 이미 실행한 뒤 이전 행 수를 어떻게 확인하는지, 그리고 출력 뒤 검사문이 어떤 역할을 하는지 물었다.",
      "intent": "전후 상태의 기록과 자동 검사의 역할을 이해하려는 질문이다.",
      "answer": "과거 상태가 일반적으로 자동 저장되는 것은 아니므로 전후 비교 기준은 작업 전에 기록해야 한다. 이 열 추가는 행 수를 유지하지만, 실제 전후 기록을 남기려면 셀 앞에서 저장한 뒤 다시 실행해 비교한다. assert는 조건이 틀리면 오류를 내어 이후 실행을 멈춘다."
    },
    {
      "id": "learning/2026-09-29-dataframe#질문-merge에서-왼쪽-how-validate가-각각-무엇인가",
      "title": "merge에서 왼쪽, how, validate가 각각 무엇인가?",
      "url": "/notes/learning/2026-09-29-dataframe#질문-merge에서-왼쪽-how-validate가-각각-무엇인가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame 학습 기록 — 표의 목적부터 집계와 파이프라인까지",
      "context": "결합 설명을 여러 번 듣고도 어렵다고 했고, 잠시 설명을 중단한 뒤 문제 풀이로 전환했다. 이후 미션 6에서 고객 정보와 고객별 주문 요약 두 표만 놓고 다시 개념을 설명해 달라고 요청했다.",
      "intent": "원본 주문의 일대다 연결과 고객 요약의 일대일 연결을 섞지 않고, 현재 문제의 두 표에서 이해하려는 질문이다.",
      "answer": "customers_new.merge(summary, ...)에서 고객 표가 왼쪽, 인수의 요약표가 오른쪽이다. how=\"left\"는 모든 왼쪽 고객을 남기고, validate=\"one_to_one\"은 양쪽 고객 키가 각각 유일한지 검사한다. indicator=True는 연결 상태를 _merge 열로 표시한다."
    },
    {
      "id": "learning/2026-09-29-dataframe#질문-피벗하면-기존-열-이름은-어디로-가는가",
      "title": "피벗하면 기존 열 이름은 어디로 가는가?",
      "url": "/notes/learning/2026-09-29-dataframe#질문-피벗하면-기존-열-이름은-어디로-가는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame 학습 기록 — 표의 목적부터 집계와 파이프라인까지",
      "context": "9월 28일 pivot_table()과 melt() 설명 뒤, 다음 날 category와 amount가 새 표에서 사라지는지 다시 물었다. 이어 외울 부분과 이해할 부분을 나눠 달라고 했다.",
      "intent": "문법의 인수보다 결과 표의 행·열·칸이 무엇을 나타내는지 파악하려는 질문이다.",
      "answer": "category의 값은 새 열 이름, amount의 값은 그 열의 칸으로 배치된다. 같은 고객과 카테고리의 주문 여러 건은 지정한 함수로 집계된다. melt()는 열 이름과 칸 값을 세로로 옮기지만 집계 전 주문들을 복원하지 않는다."
    },
    {
      "id": "learning/2026-09-29-dataframe#질문-연속된-메서드와-pipe는-어떤-순서로-실행되는가",
      "title": "연속된 메서드와 pipe는 어떤 순서로 실행되는가?",
      "url": "/notes/learning/2026-09-29-dataframe#질문-연속된-메서드와-pipe는-어떤-순서로-실행되는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame 학습 기록 — 표의 목적부터 집계와 파이프라인까지",
      "context": "마지막으로 체이닝과 .pipe() 절의 진행을 요청했다. 결측 제외, 금액 조건 선택, 정렬과 직접 만든 두 함수를 차례로 확인했다.",
      "intent": "앞 단계에서 반환한 객체가 다음 단계의 입력이 된다는 흐름을 따라가는 맥락이다.",
      "answer": "체이닝은 앞 메서드의 반환값에 다음 메서드를 호출한다. .pipe(func)는 표를 함수의 첫 인수로 넘기며, 정리나 복사는 .pipe() 자체가 아니라 호출된 함수 내부에서 수행한다."
    },
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
      "id": "data/statistics-data-and-groups#퀴즈-순서가-다른-두-series와-결측치-없는-표",
      "title": "순서가 다른 두 Series와 결측치 없는 표",
      "url": "/notes/data/statistics-data-and-groups#퀴즈-순서가-다른-두-series와-결측치-없는-표",
      "topic": "데이터 분석",
      "sourceTitle": "통계 실습의 데이터 — 변수의 의미와 요약표의 인덱스"
    },
    {
      "id": "data/statistics-distributions-and-plots#퀴즈-위-경계가-60인데-왜-수염은-55에서-끝날까",
      "title": "위 경계가 60인데 왜 수염은 55에서 끝날까?",
      "url": "/notes/data/statistics-distributions-and-plots#퀴즈-위-경계가-60인데-왜-수염은-55에서-끝날까",
      "topic": "데이터 분석",
      "sourceTitle": "분포를 그리는 코드 — Axes·히스토그램·KDE·박스플롯"
    },
    {
      "id": "data/statistics-relations-and-interpretation#퀴즈-어떤-범위까지-말할-수-있을까",
      "title": "어떤 범위까지 말할 수 있을까?",
      "url": "/notes/data/statistics-relations-and-interpretation#퀴즈-어떤-범위까지-말할-수-있을까",
      "topic": "데이터 분석",
      "sourceTitle": "변수 사이의 관계 — 상관행렬과 그룹별 그래프를 읽는 법"
    },
    {
      "id": "learning/2026-09-29-statistics#퀴즈-실제로-답한-구조비율-확인-문제",
      "title": "실제로 답한 구조·비율 확인 문제",
      "url": "/notes/learning/2026-09-29-statistics#퀴즈-실제로-답한-구조비율-확인-문제",
      "topic": "데이터 분석",
      "sourceTitle": "통계·시각화 실습 — 요약표의 구조에서 조건을 붙인 해석까지"
    },
    {
      "id": "data/pandas-cleaning-validation#퀴즈-무엇을-확인했고-무엇은-모르는가",
      "title": "무엇을 확인했고 무엇은 모르는가?",
      "url": "/notes/data/pandas-cleaning-validation#퀴즈-무엇을-확인했고-무엇은-모르는가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 정리와 검증 — 자료형, 결측, 중복, 파생 변수"
    },
    {
      "id": "data/pandas-dataframe-selection#퀴즈-선택-결과를-먼저-말하기",
      "title": "선택 결과를 먼저 말하기",
      "url": "/notes/data/pandas-dataframe-selection#퀴즈-선택-결과를-먼저-말하기",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame과 선택 — 표의 의미, Series, 불리언 마스크"
    },
    {
      "id": "data/pandas-groupby-merge-reshape#퀴즈-결과가-대응하는-대상을-말하기",
      "title": "결과가 대응하는 대상을 말하기",
      "url": "/notes/data/pandas-groupby-merge-reshape#퀴즈-결과가-대응하는-대상을-말하기",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 집계와 결합 — agg, transform, merge에서 pipe까지"
    },
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
