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
      "lessons": [
        {
          "id": "supervised-learning",
          "title": "지도학습",
          "kind": "official"
        }
      ]
    },
    {
      "id": "pytorch",
      "title": "PyTorch",
      "lessons": [
        {
          "id": "deep-learning-basics",
          "title": "딥러닝 기본기",
          "kind": "official"
        },
        {
          "id": "pytorch-usage",
          "title": "PyTorch 활용하기",
          "kind": "official"
        }
      ]
    },
    {
      "id": "deep-learning",
      "title": "딥러닝",
      "lessons": [
        {
          "id": "rnn-lstm-review",
          "title": "RNN과 LSTM 복습",
          "kind": "supplemental"
        },
        {
          "id": "cnn-filter-review",
          "title": "CNN filter 복습",
          "kind": "supplemental"
        }
      ]
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
      "id": "learning/2026-10-30-lstm-input-output-shapes",
      "title": "LSTM의 입력과 반환값: sequence, 마지막 layer와 마지막 time step",
      "description": "작은 입력의 실제 값부터 따라가며 input_size 설정과 input shape, output과 h_n·c_n이 모으는 축을 구별한다.",
      "date": "2026-10-30",
      "published": "2026-10-30",
      "type": "journal",
      "topics": [
        "딥러닝"
      ],
      "courseId": "deep-learning",
      "lessonId": "rnn-lstm-review",
      "url": "/notes/learning/2026-10-30-lstm-input-output-shapes",
      "links": [
        "data/numpy-array-axes",
        "learning/2026-10-29-rnn-time-step-layer",
        "learning/2026-10-26-rnn-lstm-state"
      ],
      "relatedReasons": {
        "learning/2026-10-29-rnn-time-step-layer": "시간 방향의 반복과 layer를 쌓는 방향을 구별한 뒤 LSTM 반환값의 축에 적용한다.",
        "learning/2026-10-26-rnn-lstm-state": "hidden state와 cell state를 구별하는 식을 작은 숫자 예시의 계산에 사용한다.",
        "data/numpy-array-axes": "배열의 각 축을 주소로 읽는 방법을 batch·time·feature 인덱싱에 적용한다."
      },
      "sources": [
        "부트캠프 LSTM 학습 대화 (2026-10-30)",
        "https://docs.pytorch.org/docs/stable/generated/torch.nn.LSTM.html",
        "https://docs.pytorch.org/docs/stable/generated/torch.nn.Linear.html"
      ]
    },
    {
      "id": "learning/2026-10-29-rnn-time-step-layer",
      "title": "RNN의 time step과 layer: 반복과 쌓기를 구분하기",
      "description": "RNN을 이전 상태를 기억하는 Linear Regression으로 보아도 되는지 묻고, 같은 layer의 시간 반복과 서로 다른 layer의 연결을 구별한다.",
      "date": "2026-10-29",
      "published": "2026-10-29",
      "type": "journal",
      "topics": [
        "딥러닝"
      ],
      "courseId": "deep-learning",
      "lessonId": "rnn-lstm-review",
      "url": "/notes/learning/2026-10-29-rnn-time-step-layer",
      "links": [
        "learning/2026-10-26-rnn-lstm-state",
        "data/numpy-linear-layers"
      ],
      "relatedReasons": {
        "learning/2026-10-26-rnn-lstm-state": "같은 parameter를 시간에 걸쳐 반복 사용하는 unfolding에서 출발해 layer 축을 따로 구분한다.",
        "data/numpy-linear-layers": "weight와 bias로 출력을 만드는 affine transformation과 여러 layer의 연결을 복습한다."
      },
      "sources": [
        "부트캠프 RNN 학습 대화 (2026-10-29)",
        "https://docs.pytorch.org/docs/stable/generated/torch.nn.RNN.html"
      ]
    },
    {
      "id": "learning/2026-10-27-cnn-filters",
      "title": "CNN filter는 무엇을 학습할까: weight sharing과 feature map",
      "description": "filter의 weight가 무엇에 대응하는지 묻고, 겹치는 영역의 계산과 RGB channel, feature map, parameter update를 구별한다.",
      "date": "2026-10-27",
      "published": "2026-10-28",
      "type": "journal",
      "topics": [
        "딥러닝"
      ],
      "courseId": "deep-learning",
      "lessonId": "cnn-filter-review",
      "url": "/notes/learning/2026-10-27-cnn-filters",
      "links": [
        "weekly/2026-10-23-vanishing-gradient-and-zero-grad",
        "learning/2026-10-26-rnn-lstm-state"
      ],
      "relatedReasons": {
        "learning/2026-10-26-rnn-lstm-state": "시간마다 같은 weight를 쓰는 RNN과 공간 위치마다 같은 weight를 쓰는 CNN을 비교한다.",
        "weekly/2026-10-23-vanishing-gradient-and-zero-grad": "forward 결과, gradient 계산, parameter update의 순서를 연결한다."
      },
      "sources": [
        "부트캠프 CNN filter 학습 대화 (2026-10-27)",
        "https://docs.pytorch.org/docs/stable/generated/torch.nn.Conv2d.html",
        "https://docs.pytorch.org/tutorials/beginner/basics/optimization_tutorial.html"
      ]
    },
    {
      "id": "learning/2026-10-26-rnn-lstm-state",
      "title": "RNN에서 LSTM으로: unfolding, cell state와 gate",
      "description": "과거가 hidden state에 반영되어도 왜 오래 기억하기 어려운지 묻고, LSTM의 state와 gate를 식과 작은 수치 예로 구별한다.",
      "date": "2026-10-26",
      "published": "2026-10-26",
      "type": "journal",
      "topics": [
        "딥러닝"
      ],
      "courseId": "deep-learning",
      "lessonId": "rnn-lstm-review",
      "url": "/notes/learning/2026-10-26-rnn-lstm-state",
      "links": [
        "weekly/2026-10-23-vanishing-gradient-and-zero-grad"
      ],
      "relatedReasons": {
        "weekly/2026-10-23-vanishing-gradient-and-zero-grad": "layer를 거슬러 전달되는 gradient의 곱을 시간 방향의 반복 계산과 비교한다."
      },
      "sources": [
        "부트캠프 RNN·LSTM 학습 대화 (2026-10-26)",
        "https://docs.pytorch.org/docs/stable/generated/torch.nn.RNN.html",
        "https://docs.pytorch.org/docs/stable/generated/torch.nn.LSTMCell.html"
      ]
    },
    {
      "id": "learning/2026-10-16-feature-scaling",
      "title": "Feature scaling: 언제 적용하고 어떤 열을 바꿀까?",
      "description": "범주를 나타내는 숫자와 수치의 단위를 구별하고, 열별 scaling의 판단 기준과 binning이 잃는 정보를 실제 질문으로 확인한다.",
      "date": "2026-10-16",
      "published": "2026-10-25",
      "type": "journal",
      "topics": [
        "머신러닝",
        "데이터 분석"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/learning/2026-10-16-feature-scaling",
      "links": [
        "learning/2026-10-15-titanic-preprocessing",
        "machine-learning/logistic-loss-and-evaluation",
        "data/numpy-broadcasting",
        "learning/2026-10-19-titanic-validation"
      ],
      "relatedReasons": {
        "learning/2026-10-15-titanic-preprocessing": "승선항의 숫자 코드와 나이 구간이 무엇을 뜻하는지 앞선 질문에서 확인한다.",
        "machine-learning/logistic-loss-and-evaluation": "입력 값이 weight의 gradient에 곱해지는 식과 Pipeline의 fit 범위를 연결한다.",
        "data/numpy-broadcasting": "feature별 평균과 표준편차로 standardization하는 배열 계산을 확인한다.",
        "learning/2026-10-19-titanic-validation": "원래 값과 binning을 같은 검증 조건에서 비교하는 후속 제안으로 이어진다."
      },
      "sources": [
        "타이타닉 미션의 feature scaling 학습 대화 (2026-10-16)",
        "https://scikit-learn.org/stable/modules/preprocessing.html",
        "https://scikit-learn.org/stable/auto_examples/compose/plot_column_transformer_mixed_types.html"
      ]
    },
    {
      "id": "weekly/2026-10-23-vanishing-gradient-and-zero-grad",
      "title": "위클리 페이퍼 #5 — vanishing gradient 확인과 zero_grad의 역할",
      "description": "20층 sigmoid 모델의 layer.weight.grad를 직접 비교하고, PyTorch의 gradient 누적이 update에 미치는 영향을 정리한다.",
      "date": "2026-10-23",
      "published": "2026-10-23",
      "type": "weekly",
      "topics": [
        "PyTorch"
      ],
      "courseId": "pytorch",
      "lessonId": "deep-learning-basics",
      "url": "/notes/weekly/2026-10-23-vanishing-gradient-and-zero-grad",
      "links": [
        "machine-learning/linear-regression-gradient",
        "weekly/2026-10-08-learning-rate-and-classification"
      ],
      "relatedReasons": {
        "machine-learning/linear-regression-gradient": "chain rule로 loss를 weight에 대해 미분하는 과정과 연결한다.",
        "weekly/2026-10-08-learning-rate-and-classification": "gradient와 learning rate가 update 크기에 함께 관여한다는 점을 복습한다."
      },
      "sources": [
        "위클리 페이퍼 5회차 공지의 두 문항 (학습 대화에 제공된 원문, 2026-10-23 정리)",
        "위클리 페이퍼 5회차 답변·피드백과 20층 sigmoid 설명용 실험",
        "https://docs.pytorch.org/docs/stable/generated/torch.Tensor.backward.html",
        "https://docs.pytorch.org/docs/stable/generated/torch.optim.Optimizer.zero_grad.html",
        "https://docs.pytorch.org/docs/stable/generated/torch.nn.Sigmoid.html",
        "https://docs.pytorch.org/docs/stable/generated/torch.nn.ReLU.html"
      ]
    },
    {
      "id": "learning/2026-10-15-titanic-feature-selection",
      "title": "타이타닉 변수 해석: 이산형과 특성 선택",
      "description": "가족 수와 나이의 변수 유형을 구별하고, 상관계수·직관·생존율 표만으로 입력 특성을 선택할 수 있는지 실제 질문으로 확인한다.",
      "date": "2026-10-15",
      "published": "2026-10-22",
      "type": "journal",
      "topics": [
        "머신러닝",
        "데이터 분석"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/learning/2026-10-15-titanic-feature-selection",
      "links": [
        "data/statistics-data-and-groups",
        "data/statistics-relations-and-interpretation",
        "learning/2026-10-15-titanic-preprocessing",
        "learning/2026-10-19-titanic-validation"
      ],
      "relatedReasons": {
        "data/statistics-data-and-groups": "숫자의 저장 자료형과 변수의 의미를 나누고 범주별 비율의 분모를 확인한다.",
        "data/statistics-relations-and-interpretation": "상관계수가 작아도 비선형 관계가 남을 수 있는 이유를 설명한다.",
        "learning/2026-10-15-titanic-preprocessing": "같은 날 물었던 Ticket과 Embarked의 정보 역할 및 전처리 질문으로 이어진다.",
        "learning/2026-10-19-titanic-validation": "이후 같은 미션에서 제기한 검증 점수와 전처리 비교 문제를 연결한다."
      },
      "sources": [
        "타이타닉 미션의 변수 유형과 특성 선택 학습 대화 (2026-10-15)",
        "https://scikit-learn.org/stable/common_pitfalls.html"
      ]
    },
    {
      "id": "learning/2026-10-19-titanic-validation",
      "title": "타이타닉 캐글 75%에서 먼저 점검한 것",
      "description": "캐글 점수와 내부 검증 점수를 구분하고, 제출 예측값과 전처리 누수를 확인한 뒤 같은 조건에서 랜덤 포레스트를 비교하는 방법을 정리한다.",
      "date": "2026-10-19",
      "published": "2026-10-21",
      "type": "journal",
      "topics": [
        "머신러닝",
        "데이터 분석"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/learning/2026-10-19-titanic-validation",
      "links": [
        "weekly/2026-10-19-regularization-and-tree-ensembles",
        "data/pandas-cleaning-validation"
      ],
      "relatedReasons": {
        "weekly/2026-10-19-regularization-and-tree-ensembles": "랜덤 포레스트의 구조와 과적합을 복습하고 트리 수와 개별 트리 복잡도를 구분한다.",
        "data/pandas-cleaning-validation": "결측치를 채우는 목적과 처리 후 검증을 모델 평가 과정에 연결한다."
      },
      "sources": [
        "미션 3 랜덤 포레스트 정확도 개선 제안 학습 대화 (2026-10-19)",
        "https://scikit-learn.org/stable/common_pitfalls.html",
        "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html",
        "https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html"
      ]
    },
    {
      "id": "learning/2026-10-15-titanic-preprocessing",
      "title": "타이타닉 전처리: 열 선택, 나이 구간, 결측 처리",
      "description": "Ticket과 Embarked의 역할을 비교하고, 0.5 단위 반올림, cut의 구간 값, 생존율 집계, fillna와 map의 차이를 실제 질문으로 읽는다.",
      "date": "2026-10-15",
      "published": "2026-10-21",
      "type": "journal",
      "topics": [
        "머신러닝",
        "데이터 분석"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/learning/2026-10-15-titanic-preprocessing",
      "links": [
        "learning/2026-10-19-titanic-validation",
        "data/pandas-cleaning-validation",
        "data/pandas-dataframe-selection",
        "data/pandas-groupby-merge-reshape"
      ],
      "relatedReasons": {
        "data/pandas-dataframe-selection": "한 열을 고른 Series와 행 조건을 적용하는 loc의 기본 문법을 다시 확인한다.",
        "data/pandas-groupby-merge-reshape": "그룹을 정하는 단계와 평균을 계산하는 단계를 나눠 읽는다.",
        "data/pandas-cleaning-validation": "결측을 채우는 판단과 새 열을 만드는 대입을 연결한다.",
        "learning/2026-10-19-titanic-validation": "이후 같은 미션에서 전처리와 성능을 공정하게 비교하는 문제로 이어진다."
      },
      "sources": [
        "타이타닉 미션 전처리 코드 학습 대화 (2026-10-15)",
        "https://pandas.pydata.org/docs/reference/api/pandas.cut.html",
        "https://pandas.pydata.org/docs/reference/api/pandas.Series.map.html",
        "https://pandas.pydata.org/docs/reference/api/pandas.Series.mode.html",
        "https://pandas.pydata.org/docs/reference/api/pandas.Series.fillna.html"
      ]
    },
    {
      "id": "weekly/2026-10-19-regularization-and-tree-ensembles",
      "title": "위클리 페이퍼 #4 — 과적합과 규제, 랜덤 포레스트와 그레이디언트 부스팅",
      "description": "L1·L2 규제의 의미를 짚고, 부스팅 트리의 입력·목표값·출력을 숫자로 따라가며 학습과 추론을 구분한다.",
      "date": "2026-10-19",
      "published": "2026-10-19",
      "type": "weekly",
      "topics": [
        "머신러닝"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/weekly/2026-10-19-regularization-and-tree-ensembles",
      "links": [
        "machine-learning/linear-regression-gradient",
        "weekly/2026-10-08-learning-rate-and-classification"
      ],
      "relatedReasons": {
        "machine-learning/linear-regression-gradient": "예측값에 대한 미분과 가중치에 대한 미분이 왜 다른지, 손실 정의와 연쇄법칙으로 연결한다.",
        "weekly/2026-10-08-learning-rate-and-classification": "학습률이 갱신 폭에 미치는 영향을 복습하고 부스팅의 보정량과 비교한다."
      },
      "sources": [
        "코드잇 AI 스프린트 위클리 페이퍼 4회차 공식 두 문항 (2026-10-18 확인)",
        "위클리 페이퍼 4회차 학습 대화와 답변 피드백 (2026-10-18~19)",
        "https://scikit-learn.org/stable/modules/linear_model.html#ridge-regression-and-classification",
        "https://scikit-learn.org/stable/modules/linear_model.html#lasso",
        "https://scikit-learn.org/stable/modules/ensemble.html",
        "https://xgboost.readthedocs.io/en/stable/tutorials/model.html"
      ]
    },
    {
      "id": "learning/2026-10-08-logistic-loss",
      "title": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "description": "이진 분류 확률과 로그 손실, p-y의 미분 대상, softmax 점수에 관한 실제 질문을 정리한다.",
      "date": "2026-10-08",
      "published": "2026-10-12",
      "type": "journal",
      "topics": [
        "머신러닝"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/learning/2026-10-08-logistic-loss",
      "links": [
        "machine-learning/logistic-loss-and-evaluation",
        "learning/2026-10-07-regression-gradient",
        "learning/2026-10-08-wine-classification"
      ],
      "relatedReasons": {
        "machine-learning/logistic-loss-and-evaluation": "확률·손실·미분·평가를 한 예로 다시 연결한다.",
        "learning/2026-10-07-regression-gradient": "회귀의 평균 기울기와 행렬곱에서 출발한다.",
        "learning/2026-10-08-wine-classification": "라벨 결정과 실제 분류 평가 코드로 이어진다."
      },
      "sources": [
        "분류 손실과 회귀 오차 구분 학습 대화 (2026-10-08)",
        "Q와 로그 손실 설명 학습 대화 (2026-10-08)",
        "Day1·Day2 맞춤형 학습자료 만들기 중 분류 LAB 맥락 (2026-10-08)",
        "https://numpy.org/doc/stable/reference/generated/numpy.where.html",
        "https://numpy.org/doc/stable/reference/generated/numpy.logaddexp.html",
        "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.log_loss.html"
      ]
    },
    {
      "id": "learning/2026-10-08-wine-classification",
      "title": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "description": "확률 임계값과 평균 기울기 오류부터 flatnonzero, 혼동행렬, 전처리 Pipeline, 다중·이진 Wine 실습까지 연결한다.",
      "date": "2026-10-08",
      "published": "2026-10-12",
      "type": "journal",
      "topics": [
        "머신러닝"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/learning/2026-10-08-wine-classification",
      "links": [
        "machine-learning/logistic-loss-and-evaluation",
        "learning/2026-10-08-logistic-loss",
        "machine-learning/linear-regression-gradient"
      ],
      "relatedReasons": {
        "machine-learning/logistic-loss-and-evaluation": "예측 확률과 라벨 평가를 구분하는 개념 글이다.",
        "learning/2026-10-08-logistic-loss": "p·q와 점수 미분을 이해한 뒤 실습으로 연결한다.",
        "machine-learning/linear-regression-gradient": "샘플 평균과 파라미터 축을 섞지 않는 이유를 복습한다."
      },
      "sources": [
        "코드 문제 진단 학습 대화 중 Wine 분류·지표 (2026-10-08)",
        "문제 풀이 정보 찾기 학습 대화 (2026-10-08)",
        "Day1·Day2 맞춤형 학습자료 중 Day 2 PRACTICE (2026-10-08)",
        "https://numpy.org/doc/stable/reference/generated/numpy.flatnonzero.html",
        "https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_wine.html",
        "https://scikit-learn.org/stable/common_pitfalls.html",
        "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html"
      ]
    },
    {
      "id": "machine-learning/logistic-loss-and-evaluation",
      "title": "로지스틱 분류: 확률·로그 손실·기울기·평가의 구분",
      "description": "p와 q, 점수 미분과 파라미터 기울기, softmax와 라벨 평가, Pipeline의 누수 방지를 실제 값으로 연결한다.",
      "date": "2026-10-08",
      "published": "2026-10-12",
      "type": "concept",
      "topics": [
        "머신러닝"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/machine-learning/logistic-loss-and-evaluation",
      "links": [
        "machine-learning/linear-regression-gradient",
        "learning/2026-10-08-logistic-loss",
        "learning/2026-10-08-wine-classification"
      ],
      "relatedReasons": {
        "learning/2026-10-08-logistic-loss": "p-y를 b·w의 변화와 연결해 달라는 실제 질문의 흐름이다.",
        "learning/2026-10-08-wine-classification": "라벨·오류 위치·다중 클래스 평가와 Pipeline을 코드로 읽은 기록이다.",
        "machine-learning/linear-regression-gradient": "평균 기울기를 X.T @ error로 만드는 공통 구조를 설명한다."
      },
      "sources": [
        "분류 손실과 회귀 오차 구분 학습 대화 (2026-10-08)",
        "Q와 로그 손실 설명 학습 대화 (2026-10-08)",
        "문제 풀이 정보 찾기 분류 PRACTICE 학습 대화 (2026-10-08)",
        "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.log_loss.html",
        "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html",
        "https://numpy.org/doc/stable/reference/generated/numpy.logaddexp.html",
        "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html",
        "https://scikit-learn.org/stable/common_pitfalls.html"
      ]
    },
    {
      "id": "weekly/2026-10-08-learning-rate-and-classification",
      "title": "위클리 페이퍼 #3 — 학습률과 콘텐츠 이용 등급 분류",
      "description": "경사하강법이 진동하며 발산하는 이유를 수식과 그래프로 확인하고, 콘텐츠 이용 등급을 다중 분류로 예측하려는 이유와 회귀의 장단점을 비교한다.",
      "date": "2026-10-08",
      "published": "2026-10-12",
      "type": "weekly",
      "topics": [
        "머신러닝"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/weekly/2026-10-08-learning-rate-and-classification",
      "links": [
        "data/numpy-linear-layers"
      ],
      "relatedReasons": {
        "data/numpy-linear-layers": "선형 점수를 계산하는 가중치·편향의 역할과, 출력 계산에 파라미터 갱신을 더해야 학습이 된다는 구분을 연결한다."
      },
      "sources": [
        "코드잇 AI 스프린트 위클리 페이퍼 3회차 공식 두 문항 (2026-10-11 확인)",
        "https://developers.google.com/machine-learning/crash-course/linear-regression/hyperparameters",
        "https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression"
      ]
    },
    {
      "id": "learning/2026-10-07-regression-gradient",
      "title": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "description": "SSE에서 dW·db, X.T @ error, shape 오류와 fit·predict까지 실제 후속 질문을 이어 정리한다.",
      "date": "2026-10-07",
      "published": "2026-10-12",
      "type": "journal",
      "topics": [
        "머신러닝"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/learning/2026-10-07-regression-gradient",
      "links": [
        "weekly/2026-10-08-learning-rate-and-classification",
        "machine-learning/linear-regression-gradient",
        "learning/2026-10-08-logistic-loss",
        "data/numpy-linear-layers"
      ],
      "relatedReasons": {
        "machine-learning/linear-regression-gradient": "손실 정의부터 행렬 기울기를 다시 유도하는 개념 글이다.",
        "learning/2026-10-08-logistic-loss": "회귀의 오차 신호가 분류의 p-y와 어떻게 이어지는지 확인한다.",
        "data/numpy-linear-layers": "가중치·편향으로 출력을 만드는 선형 계산을 복습한다."
      },
      "sources": [
        "텍스트셀 줄바꿈 방법 찾기 학습 대화 중 회귀 계산 (2026-10-02)",
        "DW와 DB 선택하기 학습 대화: dW·db 미분 (2026-10-07)",
        "에러와 잔차 차이 이해하기 학습 대화 (2026-10-07)",
        "코드 문제 진단 학습 대화 중 회귀 코드 (2026-10-08)",
        "https://numpy.org/doc/stable/reference/generated/numpy.matmul.html",
        "https://numpy.org/doc/stable/reference/generated/numpy.linalg.lstsq.html",
        "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html"
      ]
    },
    {
      "id": "learning/2026-10-07-values-and-imports",
      "title": "실제 값으로 다시 보기 — 딕셔너리 항목, 그룹 집계와 import",
      "description": "딕셔너리의 항목 튜플, agg와 transform의 반환값, 패키지 초기화와 이름 연결을 실제 값으로 따라간 10월 7일 기록이다.",
      "date": "2026-10-07",
      "published": "2026-10-12",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기",
        "데이터 분석"
      ],
      "courseId": "python",
      "lessonId": "python-modules",
      "url": "/notes/learning/2026-10-07-values-and-imports",
      "links": [
        "data/statistics-data-and-groups",
        "learning/2026-09-18-collections-and-palindrome",
        "data/interpretation",
        "data/pandas-groupby-merge-reshape",
        "learning/2026-10-01-hotel-segment-comparison",
        "learning/2026-09-18-frameworks",
        "python/imports-and-packages",
        "learning/2026-10-02-python-numpy-review"
      ],
      "sources": [
        "실제 값으로 문제 보여주기 학습 대화 (2026-10-07)"
      ]
    },
    {
      "id": "machine-learning/linear-regression-gradient",
      "title": "선형 회귀의 기울기: 손실 정의에서 X.T @ error까지",
      "description": "반 MSE의 미분을 실제 값과 shape으로 유도하고, 편향 열·평균 축·최소제곱·평가를 구분한다.",
      "date": "2026-10-07",
      "published": "2026-10-12",
      "type": "concept",
      "topics": [
        "머신러닝"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/machine-learning/linear-regression-gradient",
      "links": [
        "learning/2026-10-07-regression-gradient",
        "machine-learning/logistic-loss-and-evaluation",
        "data/numpy-linear-layers"
      ],
      "relatedReasons": {
        "learning/2026-10-07-regression-gradient": "이 식을 읽으면서 생긴 실제 후속 질문과 코드 진단을 보존한 기록이다.",
        "data/numpy-linear-layers": "행렬곱으로 가중치와 편향을 적용하는 계산을 복습한다.",
        "machine-learning/logistic-loss-and-evaluation": "같은 행렬 구조가 로지스틱 회귀의 파라미터 기울기로 이어진다."
      },
      "sources": [
        "회귀 SSE·오차 부호 학습 대화 (2026-10-02)",
        "dW·db와 회귀 LAB 학습 대화 (2026-10-07)",
        "회귀 코드 진단 학습 대화 (2026-10-08)",
        "https://numpy.org/doc/stable/reference/generated/numpy.matmul.html",
        "https://numpy.org/doc/stable/user/basics.broadcasting.html",
        "https://numpy.org/doc/stable/reference/generated/numpy.linalg.lstsq.html",
        "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html"
      ]
    },
    {
      "id": "machine-learning/probability-and-bayes",
      "title": "확률변수에서 밀도와 베이즈 정리까지",
      "description": "확률변수와 관측값, 분포의 축, 표준화, 확률 0인 사건, 베이즈 정리의 분모를 실제 숫자로 연결한다.",
      "date": "2026-10-06",
      "published": "2026-10-12",
      "type": "concept",
      "topics": [
        "머신러닝"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/machine-learning/probability-and-bayes",
      "links": [
        "learning/2026-10-05-06-linear-algebra-probability",
        "machine-learning/model-and-validation",
        "data/numpy-broadcasting",
        "machine-learning/linear-algebra-and-gradient"
      ],
      "relatedReasons": {
        "learning/2026-10-05-06-linear-algebra-probability": "확률변수·분포·표준화·확률 0·베이즈 정리에 관한 실제 질문을 담는다.",
        "machine-learning/linear-algebra-and-gradient": "표준화로 좌표 단위가 바뀌면 미분값도 달라지는 이유를 연결한다.",
        "machine-learning/model-and-validation": "표준화 통계도 훈련 데이터에서만 구해야 하는 이유를 설명한다.",
        "data/numpy-broadcasting": "열별 평균과 표준편차로 여러 샘플을 변환할 때 배열 모양을 확인한다."
      },
      "sources": [
        "확률변수 의미 설명 학습 대화 (2026-10-06)",
        "문서 심화 내용 설명과 검증 질문 학습 대화 (2026-10-06)",
        "재가공해 AI 엔지니어 학습자료 만들기 학습 대화 (2026-10-06)"
      ]
    },
    {
      "id": "learning/2026-10-05-06-linear-algebra-probability",
      "title": "수식을 계산한 뒤 어떻게 해석할까",
      "description": "선형결합·내적·미분과 확률변수·분포의 축·표준화·베이즈를 물은 10월 5~6일 기록과 실제 확인 응답을 정리한다.",
      "date": "2026-10-05",
      "published": "2026-10-12",
      "type": "journal",
      "topics": [
        "머신러닝"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/learning/2026-10-05-06-linear-algebra-probability",
      "links": [
        "machine-learning/linear-algebra-and-gradient",
        "machine-learning/probability-and-bayes",
        "data/numpy-vectors-matmul",
        "machine-learning/model-and-validation",
        "data/numpy-broadcasting"
      ],
      "relatedReasons": {
        "machine-learning/linear-algebra-and-gradient": "선형결합과 내적을 손실 변화 및 경사하강법의 해석으로 연결한다.",
        "machine-learning/probability-and-bayes": "확률변수·분포·표준화·확률 0·조건부확률을 작은 예로 설명한다.",
        "machine-learning/model-and-validation": "훈련 점수가 같은 모델을 비교할 때 검증과 테스트를 구분한다.",
        "data/numpy-vectors-matmul": "내적과 코사인 유사도의 실제 NumPy 계산을 연결한다."
      },
      "sources": [
        "선형결합의 필요성 이해하기 학습 대화 (2026-10-05)",
        "확률변수 의미 설명 학습 대화 (2026-10-06)",
        "문서 심화 내용 설명과 검증 질문 학습 대화 (2026-10-06)",
        "재가공해 AI 엔지니어 학습자료 만들기 학습 대화 (2026-10-06, 2026-10-11 상태 확인)",
        "Actual_Day1_CORE_R4.1.pdf를 바탕으로 한 학습 대화"
      ]
    },
    {
      "id": "learning/2026-10-02-model-and-validation",
      "title": "모델을 학습하고 검증한다는 말의 의미",
      "description": "가설·오차·비용의 구분부터 학습률, 하이퍼파라미터, K-fold와 공통 가중치의 한계까지 이어진 10월 2일 질문을 정리한다.",
      "date": "2026-10-02",
      "published": "2026-10-12",
      "type": "journal",
      "topics": [
        "머신러닝"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/learning/2026-10-02-model-and-validation",
      "links": [
        "machine-learning/linear-algebra-and-gradient",
        "machine-learning/model-and-validation",
        "data/numpy-linear-layers",
        "machine-learning/linear-regression-gradient"
      ],
      "relatedReasons": {
        "machine-learning/model-and-validation": "예측 함수와 비용, 모델 선택과 최종 평가를 한 흐름으로 설명한다.",
        "machine-learning/linear-algebra-and-gradient": "선형대수의 적용 범위와 기울기가 이동 방향·크기에 미치는 영향을 수식으로 확인한다.",
        "machine-learning/linear-regression-gradient": "오차를 가중치의 미분으로 바꾸는 다음 학습을 연결한다.",
        "data/numpy-linear-layers": "모든 샘플에 같은 가중치와 편향을 적용하는 배열 계산을 설명한다."
      },
      "sources": [
        "선형대수학 적용 범위 이해 학습 대화 (2026-10-02)"
      ]
    },
    {
      "id": "learning/2026-10-02-python-numpy-review",
      "title": "복습 중 다시 물은 것 — 인자 전달, NumPy 축과 데이터 해석",
      "description": "별표의 위치, 뷰의 데이터 공유, 축별 계산과 표준화의 의미를 10월 2일의 후속 질문으로 다시 연결한다.",
      "date": "2026-10-02",
      "published": "2026-10-12",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기",
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "data-toolkit",
      "url": "/notes/learning/2026-10-02-python-numpy-review",
      "links": [
        "python/args-and-kwargs",
        "data/numpy-shape-views",
        "data/numpy-array-axes",
        "data/numpy-vectors-matmul",
        "data/numpy-broadcasting",
        "data/statistics-data-and-groups",
        "data/data-science-overview",
        "data/observation-unit",
        "python/imports-and-packages",
        "learning/2026-10-07-values-and-imports"
      ],
      "sources": [
        "Explain current args problem 학습 대화 (2026-10-02)"
      ]
    },
    {
      "id": "machine-learning/linear-algebra-and-gradient",
      "title": "선형결합과 내적으로 그래디언트 읽기",
      "description": "벡터에 스칼라를 곱하는 이유를 출발점으로, 내적의 기여도 해석과 손실 변화의 1차 근사, 경사하강법의 방향·크기를 연결한다.",
      "date": "2026-10-02",
      "published": "2026-10-12",
      "type": "concept",
      "topics": [
        "머신러닝"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/machine-learning/linear-algebra-and-gradient",
      "links": [
        "learning/2026-10-02-model-and-validation",
        "learning/2026-10-05-06-linear-algebra-probability",
        "data/numpy-vectors-matmul",
        "data/numpy-linear-layers",
        "machine-learning/probability-and-bayes",
        "machine-learning/linear-regression-gradient"
      ],
      "relatedReasons": {
        "learning/2026-10-02-model-and-validation": "기울기가 이동 방향뿐 아니라 크기도 정하는지 물은 기록이다.",
        "learning/2026-10-05-06-linear-algebra-probability": "선형결합·내적·미분·그래디언트의 의미를 물은 실제 질문과 응답을 담는다.",
        "data/numpy-vectors-matmul": "내적·코사인 유사도와 배치 행렬곱을 NumPy로 계산한다.",
        "data/numpy-linear-layers": "같은 가중치를 샘플에 적용해 출력 feature를 만드는 계산이다.",
        "machine-learning/probability-and-bayes": "표준화로 중심과 단위가 어떻게 바뀌는지 설명한다.",
        "machine-learning/linear-regression-gradient": "회귀의 손실을 실제 가중치로 미분하는 과정을 이어 읽는다."
      },
      "sources": [
        "선형대수학 적용 범위 이해 학습 대화 (2026-10-02)",
        "선형결합의 필요성 이해하기 학습 대화 (2026-10-05)",
        "문서 심화 내용 설명과 검증 질문 학습 대화 (2026-10-06)",
        "재가공해 AI 엔지니어 학습자료 만들기 학습 대화 (2026-10-06)"
      ]
    },
    {
      "id": "machine-learning/model-and-validation",
      "title": "모델의 가정과 검증 데이터의 역할",
      "description": "예측·오차·비용을 구분하고 파라미터 학습, 하이퍼파라미터 선택, K-fold와 최종 테스트의 경계를 설명한다.",
      "date": "2026-10-02",
      "published": "2026-10-12",
      "type": "concept",
      "topics": [
        "머신러닝"
      ],
      "courseId": "machine-learning",
      "lessonId": "supervised-learning",
      "url": "/notes/machine-learning/model-and-validation",
      "links": [
        "learning/2026-10-02-model-and-validation",
        "learning/2026-10-05-06-linear-algebra-probability",
        "machine-learning/linear-regression-gradient",
        "data/numpy-linear-layers"
      ],
      "relatedReasons": {
        "learning/2026-10-02-model-and-validation": "검증의 순서와 공통 가중치의 한계를 물은 실제 질문 기록이다.",
        "learning/2026-10-05-06-linear-algebra-probability": "훈련 점수가 같은 두 모델을 어떻게 비교할지 답한 기록을 연결한다.",
        "data/numpy-linear-layers": "하나의 가중치 배열을 모든 샘플에 적용하는 계산을 설명한다.",
        "machine-learning/linear-regression-gradient": "선택한 비용을 가중치로 미분해 갱신하는 과정을 설명한다."
      },
      "sources": [
        "선형대수학 적용 범위 이해 학습 대화 (2026-10-02)",
        "문서 심화 내용 설명과 검증 질문 학습 대화 (2026-10-06)"
      ]
    },
    {
      "id": "learning/2026-09-22-library-and-csv",
      "title": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "description": "반환값과 시간 처리부터 CSV writer·reader, 정렬 콜백, 도서관 객체의 상태 동기화까지 이어진 9월 22일 질문 기록.",
      "date": "2026-09-22",
      "published": "2026-10-12",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "objects-and-classes",
      "url": "/notes/learning/2026-09-22-library-and-csv",
      "links": [
        "python/files-and-with",
        "python/sorting-and-callables",
        "python/iterables-and-iterators",
        "python/object-state-and-composition",
        "learning/2026-09-21-oop-text-pipeline"
      ],
      "relatedReasons": {
        "python/object-state-and-composition": "도서관 목록·회원 목록·대여 기록의 소유자와 갱신 범위를 비교한다.",
        "python/files-and-with": "파일 객체를 열고 닫는 범위와 닫힌 뒤에도 남는 데이터를 설명한다.",
        "python/sorting-and-callables": "sorted의 key가 각 항목을 받아 기준값을 반환하는 함수라는 점을 복습한다."
      },
      "sources": [
        "문제2 원인 확인 학습 대화 (2026-09-22)",
        "CSV 첫행 키값 질문 검토 학습 대화 (2026-09-22)",
        "마지막 문제 오류 쉽게 해결 학습 대화 (2026-09-22)"
      ]
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline",
      "title": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "description": "self와 메서드 바인딩, 이름과 복사, TextSample과 Prediction의 연결, 조건식과 제너레이터를 따라간 9월 21일 질문 기록.",
      "date": "2026-09-21",
      "published": "2026-10-12",
      "type": "journal",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "objects-and-classes",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline",
      "links": [
        "python/self-and-objects",
        "python/iterables-and-iterators",
        "python/comprehensions",
        "python/methods-types-and-inheritance",
        "python/object-state-and-composition"
      ],
      "relatedReasons": {
        "python/methods-types-and-inheritance": "자동 인자 전달과 타입 힌트·특별 메서드의 실제 규칙을 값으로 비교한다.",
        "python/object-state-and-composition": "복사·속성의 소유자·파이프라인의 반환값을 객체 사이의 연결로 설명한다.",
        "python/iterables-and-iterators": "sum과 for가 제너레이터에서 다음 값을 요청하는 기본 동작을 복습한다."
      },
      "sources": [
        "강아지 클래스 self 매개변수 확인 학습 대화 (2026-09-21)",
        "TextSample 문법과 메서드 설명 학습 대화 (2026-09-21)",
        "필터 오류 원인 찾기 학습 대화 (2026-09-21)"
      ]
    },
    {
      "id": "python/methods-types-and-inheritance",
      "title": "메서드의 자동 인자와 객체의 타입 계약",
      "description": "일반·클래스·정적 메서드의 호출 차이, 타입 힌트와 특별 메서드의 실제 규칙, 상속과 오버라이딩을 값으로 구분한다.",
      "date": "2026-09-21",
      "published": "2026-10-12",
      "type": "concept",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "objects-and-classes",
      "url": "/notes/python/methods-types-and-inheritance",
      "links": [
        "python/self-and-objects",
        "learning/2026-09-21-oop-text-pipeline",
        "python/object-state-and-composition"
      ],
      "relatedReasons": {
        "learning/2026-09-21-oop-text-pipeline": "self·정적 메서드·타입 힌트·pass를 묻게 된 당시 코드와 후속 질문이다.",
        "python/self-and-objects": "인스턴스 호출이 첫 인자를 연결하는 기본 관계를 확인한다.",
        "python/object-state-and-composition": "메서드가 접근하는 상태의 소유자와 여러 객체의 연결을 설명한다."
      },
      "sources": [
        "강아지 클래스 self 매개변수 확인 학습 대화 (2026-09-21)",
        "TextSample 문법과 메서드 설명 학습 대화 (2026-09-21)"
      ]
    },
    {
      "id": "python/object-state-and-composition",
      "title": "객체의 상태, 복사, 합성으로 데이터 흐름 읽기",
      "description": "이름과 객체, 얕은 복사와 깊은 복사, 클래스 속성과 인스턴스 속성을 구분하고 전처리·도서 대여 실습의 상태 흐름을 연결한다.",
      "date": "2026-09-21",
      "published": "2026-10-12",
      "type": "concept",
      "topics": [
        "실전 파이썬 준비하기"
      ],
      "courseId": "python",
      "lessonId": "objects-and-classes",
      "url": "/notes/python/object-state-and-composition",
      "links": [
        "python/self-and-objects",
        "python/methods-types-and-inheritance",
        "learning/2026-09-21-oop-text-pipeline",
        "learning/2026-09-22-library-and-csv"
      ],
      "relatedReasons": {
        "learning/2026-09-21-oop-text-pipeline": "복사와 이름·속성 구분이 분류 파이프라인으로 이어진 실제 질문이다.",
        "learning/2026-09-22-library-and-csv": "같은 book_list 이름의 소유자와 대여·반납의 상태 갱신을 물은 기록이다.",
        "python/methods-types-and-inheritance": "메서드를 호출할 때 자동으로 받는 객체와 반환값 규칙을 비교한다."
      },
      "sources": [
        "강아지 클래스 self 매개변수 확인 학습 대화 (2026-09-21)",
        "필터 오류 원인 찾기 학습 대화 (2026-09-21)",
        "문제2 원인 확인 학습 대화 (2026-09-22)",
        "마지막 문제 오류 쉽게 해결 학습 대화 (2026-09-22)"
      ]
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison",
      "title": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "description": "Undefined를 필요한 비교에서만 제외하고, 행 선택과 범주별 집계, transform으로 계산한 구성비, 같은 조건 비교의 해석을 정리한다.",
      "date": "2026-10-01",
      "published": "2026-10-01",
      "type": "journal",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "dataframe",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison",
      "links": [
        "learning/2026-09-30-hotel-cancellation-eda",
        "data/pandas-cleaning-validation",
        "data/pandas-dataframe-selection",
        "data/statistics-data-and-groups",
        "data/pandas-groupby-merge-reshape",
        "data/statistics-relations-and-interpretation"
      ],
      "relatedReasons": {
        "learning/2026-09-30-hotel-cancellation-eda": "호텔 예약 표의 집계 구조와 취소율 분모를 먼저 질문했던 기록이다.",
        "data/pandas-dataframe-selection": "조건에 맞는 행 선택과 출력할 열 선택을 분리한다.",
        "data/pandas-cleaning-validation": "문자열 Undefined와 실제 결측, 분석별 제외 범위를 구분한다.",
        "data/pandas-groupby-merge-reshape": "transform이 그룹 합계를 원래 행의 인덱스에 맞추는 이유를 설명한다.",
        "data/statistics-data-and-groups": "취소율과 같은 판매 구분 안의 예약 구성비가 서로 다른 비율임을 설명한다.",
        "data/statistics-relations-and-interpretation": "조건을 좁힌 관찰을 인과 효과로 확대하지 않는 기준을 연결한다."
      },
      "sources": [
        "판매구분별 undefined 제외 수정 학습 대화 (2026-10-01)"
      ]
    },
    {
      "id": "weekly/2026-10-01-distributions-and-data-integration",
      "title": "위클리 페이퍼 #2 — 평균을 해석하고 고객 데이터를 통합하는 기준",
      "description": "평균과 중앙값으로 말할 수 있는 범위를 구분하고, 주문의 의미를 보존하며 중복·불일치·결측을 처리하는 순서를 정리했다.",
      "date": "2026-10-01",
      "published": "2026-10-01",
      "type": "weekly",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "statistics-and-visualization",
      "url": "/notes/weekly/2026-10-01-distributions-and-data-integration",
      "links": [
        "data/eda-and-causality",
        "data/statistics-distributions-and-plots",
        "data/pandas-cleaning-validation",
        "data/pandas-groupby-merge-reshape"
      ],
      "relatedReasons": {
        "data/eda-and-causality": "평균이 같아도 실제 분포와 경험이 달라질 수 있다는 해석의 근거를 살펴본다.",
        "data/statistics-distributions-and-plots": "히스토그램의 구간과 박스플롯이 보여 주는 정보를 비교한다.",
        "data/pandas-cleaning-validation": "원본을 보존하며 결측과 중복을 처리하고 결과를 검증하는 코드로 이어진다.",
        "data/pandas-groupby-merge-reshape": "결합 범위와 키 유일성을 확인하는 merge의 동작을 살펴본다."
      },
      "sources": [
        "코드잇 AI 스프린트 위클리 페이퍼 2회차 공식 두 문항 (2026-10-01 확인)",
        "위클리 페이퍼 1번 문항의 분포 방향에 관한 담당자 답변 (2026-10-01 확인)",
        "위클리 페이퍼 답변 준비 학습 대화 (2026-10-01)"
      ]
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda",
      "title": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "description": "호텔 예약 자료를 읽으며 열 선택, 그룹 집계, 인덱스 이름, 그래프와 비율의 분모를 질문한 9월 30일 학습 기록이다.",
      "date": "2026-09-30",
      "published": "2026-10-01",
      "type": "journal",
      "topics": [
        "데이터 분석"
      ],
      "courseId": "data-analysis",
      "lessonId": "dataframe",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda",
      "links": [
        "data/pandas-dataframe-selection",
        "data/pandas-cleaning-validation",
        "data/statistics-distributions-and-plots",
        "data/pandas-groupby-merge-reshape",
        "data/statistics-data-and-groups",
        "learning/2026-10-01-hotel-segment-comparison"
      ],
      "relatedReasons": {
        "data/pandas-dataframe-selection": "열 이름 목록과 실제 데이터 선택, Series와 DataFrame을 구분하는 기준이다.",
        "data/pandas-groupby-merge-reshape": "그룹 집계의 반환값과 인덱스 이름, reset_index의 변화를 작은 표로 설명한다.",
        "data/pandas-cleaning-validation": "결측 검사와 중복 판정이 곧 삭제 결정은 아니라는 기준을 연결한다.",
        "data/statistics-data-and-groups": "취소율과 구성비의 분모가 다른 이유를 정리한다.",
        "data/statistics-distributions-and-plots": "히스토그램의 구간과 Axes가 맡는 역할을 설명한다.",
        "learning/2026-10-01-hotel-segment-comparison": "다음 날 Undefined 제외 범위와 같은 조건의 판매 구분 비교로 이어진다."
      },
      "sources": [
        "Find DataFrame column index 학습 대화 (2026-09-30)"
      ]
    },
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
        "learning/2026-09-30-hotel-cancellation-eda",
        "learning/2026-10-01-hotel-segment-comparison",
        "data/data-quality",
        "data/observation-unit",
        "data/statistics-distributions-and-plots",
        "data/statistics-relations-and-interpretation"
      ],
      "relatedReasons": {
        "learning/2026-09-29-statistics": "변수 유형과 인덱스를 직접 설명한 응답 및 교정 기록이다.",
        "learning/2026-09-30-hotel-cancellation-eda": "판매 구분별 취소율의 합이 100이 아닌 이유를 물었던 기록이다.",
        "learning/2026-10-01-hotel-segment-comparison": "같은 판매 구분 안에서 리드타임 구간별 예약 구성비를 계산한 기록이다.",
        "data/statistics-distributions-and-plots": "변수의 의미를 정한 다음 분포와 그래프를 고르는 방법으로 이어진다.",
        "data/statistics-relations-and-interpretation": "그룹별 비율과 요약표의 라벨을 상관행렬 및 집단 비교에 적용한다.",
        "data/data-quality": "결측치를 채우거나 이상치를 지우기 전에 원인을 확인하는 기준이다.",
        "data/observation-unit": "승객 한 명과 변수 하나처럼 요약 전후 행의 의미를 구분한다."
      },
      "sources": [
        "통계시각화 실습 환경 설명 학습 대화 (2026-09-29)",
        "Find DataFrame column index 학습 대화 (2026-09-30)",
        "판매구분별 undefined 제외 수정 학습 대화 (2026-10-01)",
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
        "data/eda-and-causality",
        "learning/2026-10-01-hotel-segment-comparison"
      ],
      "relatedReasons": {
        "learning/2026-09-29-statistics": "실제 생존율 방향 오류와 등급을 고정한 후속 해석을 구분해 기록했다.",
        "learning/2026-10-01-hotel-segment-comparison": "호텔과 리드타임 구간을 맞춘 판매 구분 비교에서도 인과 결론은 별도임을 확인한 기록이다.",
        "data/statistics-data-and-groups": "이진 변수의 평균이 비율이 되는 이유와 요약표의 인덱스를 먼저 익힌다.",
        "data/statistics-distributions-and-plots": "박스·중앙값·수염을 알아야 두 집단의 분포를 비교할 수 있다.",
        "data/eda-and-causality": "관찰한 관계를 인과나 일반 법칙으로 확대하지 않는 기준이다."
      },
      "sources": [
        "통계시각화 실습 환경 설명 학습 대화 (2026-09-29)",
        "판매구분별 undefined 제외 수정 학습 대화 (2026-10-01)",
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
        "learning/2026-10-01-hotel-segment-comparison",
        "data/pandas-dataframe-selection",
        "data/pandas-groupby-merge-reshape"
      ],
      "relatedReasons": {
        "learning/2026-09-29-dataframe": "결측 처리의 목적과 중복 제거 코드의 실제 수정 과정을 보존한 기록이다.",
        "learning/2026-10-01-hotel-segment-comparison": "판매 구분을 모르는 예약을 전체 원본이 아닌 해당 비교에서만 제외한 판단이다.",
        "data/pandas-dataframe-selection": "Series와 DataFrame의 구분이 열 변환과 표 전체 대입의 바탕이 된다.",
        "data/data-quality": "데이터가 사용할 목적에 맞게 정확하고 일관되는지 확인하는 문제로 이어진다."
      },
      "sources": [
        "데이터 프레임 개념 총정리 학습 대화 (2026-09-28–29)",
        "Find DataFrame column index 학습 대화 (2026-09-30)",
        "판매구분별 undefined 제외 수정 학습 대화 (2026-10-01)",
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
        "learning/2026-10-01-hotel-segment-comparison",
        "data/pandas-groupby-merge-reshape"
      ],
      "relatedReasons": {
        "learning/2026-09-29-dataframe": "표의 목적과 선택 문법을 질문하고 짧은 퀴즈로 확인한 실제 학습 흐름이다.",
        "learning/2026-10-01-hotel-segment-comparison": "판매 구분 값으로 행을 고르는 것과 출력할 열을 고르는 것을 구별한 후속 질문이다.",
        "data/numpy-array-axes": "NumPy 배열의 축과 모양을 DataFrame의 행과 열에 연결한다.",
        "data/eda-and-causality": "표 가공과 그래프가 탐색 과정에서 어떤 역할을 하는지 연결한다."
      },
      "sources": [
        "데이터 프레임 개념 총정리 학습 대화 (2026-09-28–29)",
        "판매구분별 undefined 제외 수정 학습 대화 (2026-10-01)",
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
        "learning/2026-09-30-hotel-cancellation-eda",
        "learning/2026-10-01-hotel-segment-comparison",
        "data/pandas-dataframe-selection"
      ],
      "relatedReasons": {
        "learning/2026-09-29-dataframe": "반환값 설명의 생략과 agg 문법 변경을 지적하며 학습한 실제 질문 흐름이다.",
        "learning/2026-09-30-hotel-cancellation-eda": "호텔 집계에서 인덱스의 이름과 다중 그룹의 반환 구조를 다시 질문한 기록이다.",
        "learning/2026-10-01-hotel-segment-comparison": "같은 판매 구분 안의 예약 구성비를 계산하며 transform과 sum의 인덱스를 비교한 기록이다.",
        "data/pandas-dataframe-selection": "집계 결과의 Series와 DataFrame, 인덱스와 일반 열을 구분하는 바탕이다.",
        "data/pandas-cleaning-validation": "집계 전 중복과 결측 처리 및 결합 후 검증 기준을 연결한다."
      },
      "sources": [
        "데이터 프레임 개념 총정리 학습 대화 (2026-09-28–29)",
        "Find DataFrame column index 학습 대화 (2026-09-30)",
        "판매구분별 undefined 제외 수정 학습 대화 (2026-10-01)",
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
      "id": "learning/2026-10-30-lstm-input-output-shapes#질문-x0이-첫-번째-sequence-전체라면-정확히-무엇인가",
      "title": "x[0]이 첫 번째 sequence 전체라면 정확히 무엇인가?",
      "url": "/notes/learning/2026-10-30-lstm-input-output-shapes#질문-x0이-첫-번째-sequence-전체라면-정확히-무엇인가",
      "topic": "딥러닝",
      "sourceTitle": "LSTM의 입력과 반환값: sequence, 마지막 layer와 마지막 time step",
      "context": "x[0]과 x[0, 1]을 설명받고도, 예시에서 sequence 전체가 어느 부분인지 다시 물었다.",
      "intent": "이름 대신 실제 괄호와 값으로 선택 범위를 확인하려는 질문이다.",
      "answer": "(batch, time, feature)에서 첫 축 하나만 선택하면, 그 sample의 모든 time step과 feature가 남는다."
    },
    {
      "id": "learning/2026-10-30-lstm-input-output-shapes#질문-마지막-lstm-layer가-대체-무엇인가",
      "title": "마지막 LSTM layer가 대체 무엇인가?",
      "url": "/notes/learning/2026-10-30-lstm-input-output-shapes#질문-마지막-lstm-layer가-대체-무엇인가",
      "topic": "딥러닝",
      "sourceTitle": "LSTM의 입력과 반환값: sequence, 마지막 layer와 마지막 time step",
      "context": "output은 마지막 layer의 모든 time step, h_n은 각 layer의 마지막 hidden state라는 설명이 이해되지 않았다.",
      "intent": "두 설명에 쓰인 “마지막”이 같은 대상을 가리키는지 확인하려는 질문이다.",
      "answer": "마지막 layer는 층 방향의 끝이고, 마지막 time step은 시간 방향의 끝이다. num_layers=1이면 유일한 layer가 마지막 layer다."
    },
    {
      "id": "learning/2026-10-30-lstm-input-output-shapes#질문-다른-예시의-그림으로-마지막-layer를-보여-달라",
      "title": "다른 예시의 그림으로 마지막 layer를 보여 달라",
      "url": "/notes/learning/2026-10-30-lstm-input-output-shapes#질문-다른-예시의-그림으로-마지막-layer를-보여-달라",
      "topic": "딥러닝",
      "sourceTitle": "LSTM의 입력과 반환값: sequence, 마지막 layer와 마지막 time step",
      "context": "하나의 layer만 그린 설명으로는 어느 부분이 마지막 layer인지 잘 보이지 않아, 다른 예시를 요청했다.",
      "intent": "time 방향과 layer 방향을 동시에 놓고 반환값의 선택 범위를 보려는 요청이다.",
      "answer": "2-layer 모델이라면 아래 표의 B 행 전체가 마지막 layer다. 오른쪽 끝 A₃·B₃은 각 layer의 마지막 time step이다."
    },
    {
      "id": "learning/2026-10-30-lstm-input-output-shapes#질문-input은-2481인데-lstm-설정은-1322이면-안-맞는-것-아닌가",
      "title": "input은 (2,48,1)인데 LSTM 설정은 1·32·2이면 안 맞는 것 아닌가?",
      "url": "/notes/learning/2026-10-30-lstm-input-output-shapes#질문-input은-2481인데-lstm-설정은-1322이면-안-맞는-것-아닌가",
      "topic": "딥러닝",
      "sourceTitle": "LSTM의 입력과 반환값: sequence, 마지막 layer와 마지막 time step",
      "context": "입력의 세 숫자와 input_size=1, hidden_size=32, num_layers=2를 같은 종류의 shape처럼 비교했다.",
      "intent": "어떤 숫자가 서로 맞아야 하는지, 각 layer에서 무엇이 바뀌는지 확인하려는 질문이다.",
      "answer": "세 설정값은 input shape가 아니다. 입력의 마지막 축인 feature 크기 1이 input_size=1과 맞아야 한다. hidden size 32는 state의 폭, layer 수 2는 쌓는 층 수다."
    },
    {
      "id": "learning/2026-10-30-lstm-input-output-shapes#질문-크기를-줄이고-실제-숫자가-어떻게-변하는지-보여-달라",
      "title": "크기를 줄이고 실제 숫자가 어떻게 변하는지 보여 달라",
      "url": "/notes/learning/2026-10-30-lstm-input-output-shapes#질문-크기를-줄이고-실제-숫자가-어떻게-변하는지-보여-달라",
      "topic": "딥러닝",
      "sourceTitle": "LSTM의 입력과 반환값: sequence, 마지막 layer와 마지막 time step",
      "context": "shape를 그린 그림에서도 내부 값이 추상적이라서, 더 작은 입력과 실제 값으로 살펴보기를 요청했다.",
      "intent": "input, layer 사이의 state, 반환값을 숫자와 연결하려는 요청이다.",
      "answer": "두 time step·두 layer·hidden size 2로 줄이면 마지막 layer의 두 값 묶음과 각 layer의 마지막 값 묶음을 직접 비교할 수 있다."
    },
    {
      "id": "learning/2026-10-29-rnn-time-step-layer#질문-rnn-내부에서는-이전-상태를-기억하는-linear-regression이-계산되는가",
      "title": "RNN 내부에서는 이전 상태를 기억하는 Linear Regression이 계산되는가?",
      "url": "/notes/learning/2026-10-29-rnn-time-step-layer#질문-rnn-내부에서는-이전-상태를-기억하는-linear-regression이-계산되는가",
      "topic": "딥러닝",
      "sourceTitle": "RNN의 time step과 layer: 반복과 쌓기를 구분하기",
      "context": "현재 입력뿐 아니라 이전 hidden state도 다음 계산에 들어간다는 설명을 듣고, 이를 이전 상태를 기억하는 Linear Regression이라고 표현했다.",
      "intent": "익숙한 weight·bias 계산으로 RNN의 내부 연산을 이해하려는 질문이다.",
      "answer": "현재 입력과 이전 hidden state를 weight로 조합한다는 연결은 맞다. 다만 기본 RNN의 hidden state 갱신은 affine transformation 뒤에 nonlinear activation을 적용하는 연산이다. 이 계산 자체를 Linear Regression 모델이라고 부르지는 않는다."
    },
    {
      "id": "learning/2026-10-29-rnn-time-step-layer#질문-rnn에서-layer라는-개념이-이해되지-않는다",
      "title": "RNN에서 layer라는 개념이 이해되지 않는다",
      "url": "/notes/learning/2026-10-29-rnn-time-step-layer#질문-rnn에서-layer라는-개념이-이해되지-않는다",
      "topic": "딥러닝",
      "sourceTitle": "RNN의 time step과 layer: 반복과 쌓기를 구분하기",
      "context": "이전 state를 받아 다음 state를 만드는 과정을 따라가다가 layer가 무엇인지 물었다. 시간에 따른 반복과 layer를 쌓는 구조를 구별하는 설명이 필요했다.",
      "intent": "계산 그림에서 무엇이 같은 layer의 반복이고 무엇이 별도의 layer인지 확인하려는 질문이다.",
      "answer": "time step은 sequence에서 몇 번째 입력을 처리하는지를 나타낸다. layer는 입력을 받아 결과를 만드는 연산 단위다. RNN layer 하나로 세 입력을 처리하면 같은 layer를 세 time step에 걸쳐 사용하는 것이다. 세 입력을 처리했다고 layer가 세 개 생기지 않는다."
    },
    {
      "id": "learning/2026-10-29-rnn-time-step-layer#질문-layer를-더-쉽게-설명해-달라",
      "title": "layer를 더 쉽게 설명해 달라",
      "url": "/notes/learning/2026-10-29-rnn-time-step-layer#질문-layer를-더-쉽게-설명해-달라",
      "topic": "딥러닝",
      "sourceTitle": "RNN의 time step과 layer: 반복과 쌓기를 구분하기",
      "context": "time step과 layer의 구분을 들은 뒤에도 더 쉬운 설명을 요청했다.",
      "intent": "여러 기호에 앞서 한 계산의 결과가 다음 계산의 입력이 된다는 관계를 숫자로 확인하려는 요청이다.",
      "answer": "입력 2를 첫 연산 ×3+1에 넣어 7을 만들고, 그 결과를 다른 연산 ×2+4에 넣어 18을 만들면 두 연산을 차례로 연결한 것이다. 반면 RNN에서 입력을 하나씩 처리하며 같은 layer를 다시 쓰는 것은 시간에 따른 반복이다."
    },
    {
      "id": "learning/2026-10-27-cnn-filters#질문-filter가-weight인가-rgb마다-다른-weight가-있는가",
      "title": "filter가 weight인가? RGB마다 다른 weight가 있는가?",
      "url": "/notes/learning/2026-10-27-cnn-filters#질문-filter가-weight인가-rgb마다-다른-weight가-있는가",
      "topic": "딥러닝",
      "sourceTitle": "CNN filter는 무엇을 학습할까: weight sharing과 feature map",
      "context": "filter와 weight가 같은 말인지 물은 뒤, RGB 입력에서는 channel마다 weight가 따로 있는지 확인했다.",
      "intent": "그림에 보이는 작은 격자와 실제로 학습하는 parameter의 관계를 알고 싶었다.",
      "answer": "filter는 여러 weight를 묶은 tensor다. 입력 channel이 하나라면 3×3 filter 하나에 weight 9개가 있고, RGB라면 3×3×3=27개가 있다. RGB의 각 channel에는 서로 다른 weight가 대응하며, 세 channel의 계산 결과를 합쳐 출력 channel 하나의 값을 만든다."
    },
    {
      "id": "learning/2026-10-27-cnn-filters#질문-filter가-훑는-영역이-겹치면-같은-입력을-어떻게-계산하는가",
      "title": "filter가 훑는 영역이 겹치면 같은 입력을 어떻게 계산하는가?",
      "url": "/notes/learning/2026-10-27-cnn-filters#질문-filter가-훑는-영역이-겹치면-같은-입력을-어떻게-계산하는가",
      "topic": "딥러닝",
      "sourceTitle": "CNN filter는 무엇을 학습할까: weight sharing과 feature map",
      "context": "filter가 한 칸씩 움직일 때 이전에 본 입력을 다음 영역에서도 다시 쓰게 된다는 점을 물었다.",
      "intent": "겹친 입력을 덮어쓰는지, 앞선 계산이 다음 계산을 바꾸는지 확인하려는 질문이다.",
      "answer": "각 위치의 입력 영역을 읽어 별도의 출력 값을 만든다. 같은 입력이 여러 출력 계산에 참여해도 입력 자체를 바꾸지 않는다. 같은 filter의 weight를 각 위치에서 재사용하는 것이 weight sharing이다."
    },
    {
      "id": "learning/2026-10-27-cnn-filters#질문-여러-filter로-지역적인-특징을-보는가-filter마다-feature-map이-생기는가",
      "title": "여러 filter로 지역적인 특징을 보는가? filter마다 feature map이 생기는가?",
      "url": "/notes/learning/2026-10-27-cnn-filters#질문-여러-filter로-지역적인-특징을-보는가-filter마다-feature-map이-생기는가",
      "topic": "딥러닝",
      "sourceTitle": "CNN filter는 무엇을 학습할까: weight sharing과 feature map",
      "context": "여러 filter가 이미지의 지역적인 특징을 보는지 물은 뒤, filter마다 feature map이 따로 생기는지 확인했다.",
      "intent": "filter 크기, filter 개수, 출력의 shape을 연결하려는 질문이다.",
      "answer": "kernel_size는 한 filter가 보는 공간 영역의 크기이고, out_channels는 filter 개수이자 출력 channel 수다. 이미지 하나에 filter 하나를 여러 위치로 적용하면 2차원 feature map 하나가 생긴다. filter 32개라면 feature map도 32개다."
    },
    {
      "id": "learning/2026-10-27-cnn-filters#질문-weight-9개로-이미지-전체를-표현하는가-feature-map에도-weight가-있는가",
      "title": "weight 9개로 이미지 전체를 표현하는가? feature map에도 weight가 있는가?",
      "url": "/notes/learning/2026-10-27-cnn-filters#질문-weight-9개로-이미지-전체를-표현하는가-feature-map에도-weight가-있는가",
      "topic": "딥러닝",
      "sourceTitle": "CNN filter는 무엇을 학습할까: weight sharing과 feature map",
      "context": "3×3 filter에 weight가 9개뿐이라면 큰 이미지의 많은 특징을 어디에 담는지, feature map에 별도의 weight가 있는지 물었다.",
      "intent": "학습해서 저장하는 값과 입력마다 계산하는 값을 구별하려는 질문이다.",
      "answer": "weight는 여러 입력에 재사용하는 parameter이고, feature map은 현재 입력과 weight로 계산한 중간 결과다. feature map 자체를 이 layer의 독립 parameter로 저장해 학습하는 것은 아니다. 작은 filter를 많은 위치에 적용하므로 parameter 수보다 훨씬 많은 출력 값을 만들 수 있다."
    },
    {
      "id": "learning/2026-10-27-cnn-filters#질문-pixel-값으로-예측하는가-rgb-외에-다른-종류의-filter도-있는가",
      "title": "pixel 값으로 예측하는가? RGB 외에 다른 종류의 filter도 있는가?",
      "url": "/notes/learning/2026-10-27-cnn-filters#질문-pixel-값으로-예측하는가-rgb-외에-다른-종류의-filter도-있는가",
      "topic": "딥러닝",
      "sourceTitle": "CNN filter는 무엇을 학습할까: weight sharing과 feature map",
      "context": "이미지의 숫자로 예측값을 만드는 흐름을 확인한 뒤, RGB 외에도 filter 종류가 나뉘는지 물었다.",
      "intent": "입력 channel, filter가 학습하는 패턴, 최종 예측을 연결하려는 질문이다.",
      "answer": "이미지 분류 CNN은 보통 pixel 값에서 중간 feature를 계산하고, 이후 layer와 classification head가 class 점수를 만든다. convolution 한 번의 feature map이 곧 최종 class 예측인 것은 아니다. RGB는 입력 channel의 구분이며, filter의 역할을 빨강·초록·파랑 세 종류로 지정한다는 뜻도 아니다."
    },
    {
      "id": "learning/2026-10-27-cnn-filters#질문-filter를-한-번-적용할-때마다-weight를-update하는가",
      "title": "filter를 한 번 적용할 때마다 weight를 update하는가?",
      "url": "/notes/learning/2026-10-27-cnn-filters#질문-filter를-한-번-적용할-때마다-weight를-update하는가",
      "topic": "딥러닝",
      "sourceTitle": "CNN filter는 무엇을 학습할까: weight sharing과 feature map",
      "context": "여러 filter로 여러 위치를 계산한다면 어느 시점에 weight를 바꾸는지 물었다.",
      "intent": "filter의 이동과 모델의 학습 단계를 구별하려는 질문이다.",
      "answer": "일반적인 mini-batch 학습에서는 해당 batch의 forward 계산과 loss 계산을 마친 뒤, backward()로 gradient를 구하고 optimizer.step()으로 parameter를 update한다. 공간 위치 하나를 계산할 때마다 filter의 weight를 바꾸는 방식이 아니다."
    },
    {
      "id": "learning/2026-10-27-cnn-filters#질문-학습의-목적은-loss가-작아지는-weight를-찾는-것인가",
      "title": "학습의 목적은 loss가 작아지는 weight를 찾는 것인가?",
      "url": "/notes/learning/2026-10-27-cnn-filters#질문-학습의-목적은-loss가-작아지는-weight를-찾는-것인가",
      "topic": "딥러닝",
      "sourceTitle": "CNN filter는 무엇을 학습할까: weight sharing과 feature map",
      "context": "filter의 weight가 바뀌는 과정을 보고, 학습이 어떤 weight를 찾는 과정인지 다시 확인했다.",
      "intent": "정해진 정답 weight를 맞히는 것인지, 예측과 정답의 차이를 줄이는 것인지 확인하려는 질문이다.",
      "answer": "이 지도학습 설정에서는 예측과 target으로 loss를 구하고, 이를 줄이는 방향으로 weight와 bias를 조정한다. 정답 weight를 따로 받아 맞히는 것은 아니다. 다만 training loss를 낮추는 것만으로 새로운 데이터에서도 잘 예측한다고 결론낼 수는 없다."
    },
    {
      "id": "learning/2026-10-27-cnn-filters#질문-bias는-filter끼리-공유하는가",
      "title": "bias는 filter끼리 공유하는가?",
      "url": "/notes/learning/2026-10-27-cnn-filters#질문-bias는-filter끼리-공유하는가",
      "topic": "딥러닝",
      "sourceTitle": "CNN filter는 무엇을 학습할까: weight sharing과 feature map",
      "context": "weight sharing을 배운 뒤 bias도 서로 다른 filter가 함께 쓰는지 물었다.",
      "intent": "같은 값을 반복 사용하는 범위가 어디까지인지 확인하려는 질문이다.",
      "answer": "bias=True인 일반적인 Conv2d에는 출력 channel마다 bias 하나가 있다. 서로 다른 filter는 서로 다른 bias parameter를 쓰고, 같은 filter의 모든 공간 위치에는 같은 bias가 더해진다."
    },
    {
      "id": "learning/2026-10-27-cnn-filters#질문-linear-layer의-weight는-feature에-대응하는데-cnn의-weight는-무엇에-대응하는가",
      "title": "Linear layer의 weight는 feature에 대응하는데 CNN의 weight는 무엇에 대응하는가?",
      "url": "/notes/learning/2026-10-27-cnn-filters#질문-linear-layer의-weight는-feature에-대응하는데-cnn의-weight는-무엇에-대응하는가",
      "topic": "딥러닝",
      "sourceTitle": "CNN filter는 무엇을 학습할까: weight sharing과 feature map",
      "context": "앞서 배운 Linear layer에서는 weight를 입력 feature 번호와 연결할 수 있었지만, CNN에서는 그 대응이 모호하게 느껴졌다.",
      "intent": "weight 하나가 정확히 어떤 입력 값에 곱해지는지 알고 싶었다.",
      "answer": "Linear layer의 weight는 고정된 입력 feature 번호와 출력 번호에 대응한다. convolution의 weight는 출력 channel, 입력 channel, 현재 영역 안의 상대적 위치에 대응한다. 이미지의 특정 절대 위치에 고정된 값이 아니다."
    },
    {
      "id": "learning/2026-10-26-rnn-lstm-state#질문-unfolding은-무엇이며-반복-계산을-펼친다는-말은-무슨-뜻인가",
      "title": "unfolding은 무엇이며, 반복 계산을 펼친다는 말은 무슨 뜻인가?",
      "url": "/notes/learning/2026-10-26-rnn-lstm-state#질문-unfolding은-무엇이며-반복-계산을-펼친다는-말은-무슨-뜻인가",
      "topic": "딥러닝",
      "sourceTitle": "RNN에서 LSTM으로: unfolding, cell state와 gate",
      "context": "unfolding이 RNN의 반복 계산을 시간 순서대로 펼치는 것이라는 설명을 들었지만, 그 말만으로는 실제로 무엇이 달라지는지 보이지 않았다.",
      "intent": "그림에 cell이 여러 개 보이는 이유와 실제 계산 횟수, weight를 공유한다는 말의 관계를 확인하려는 질문이다.",
      "answer": "같은 RNN cell을 여러 time step에 적용하는 계산을 한 단계씩 적는 것이다. cell을 새로 학습하는 것이 아니라 같은 weight를 반복 사용한다. unfolding은 unrolling이라고도 한다."
    },
    {
      "id": "learning/2026-10-26-rnn-lstm-state#질문-과거가-hidden-state에-들어-있는데-왜-오래된-정보를-기억하기-어려운가",
      "title": "과거가 hidden state에 들어 있는데 왜 오래된 정보를 기억하기 어려운가?",
      "url": "/notes/learning/2026-10-26-rnn-lstm-state#질문-과거가-hidden-state에-들어-있는데-왜-오래된-정보를-기억하기-어려운가",
      "topic": "딥러닝",
      "sourceTitle": "RNN에서 LSTM으로: unfolding, cell state와 gate",
      "context": "h_{t-1}이 과거 입력의 영향을 받는다는 설명을 듣고, 과거가 이미 반영되어 있는데 오래된 정보를 잊는다는 말이 왜 나오는지 물었다.",
      "intent": "과거의 영향을 받은 값이라는 사실과 과거 정보를 필요한 만큼 보존한다는 사실을 구별하려는 질문이다.",
      "answer": "hidden state는 과거 입력 전체의 복사본이 아니다. 새 입력과 이전 state를 같은 크기의 state로 계속 변환한다. 그 과정에서 필요한 차이가 약해지거나 사라질 수 있고, 먼 과거를 이용하도록 weight를 학습시키는 gradient도 작아질 수 있다."
    },
    {
      "id": "learning/2026-10-26-rnn-lstm-state#질문-lstm의-gate와-state는-어떤-식으로-계산하는가",
      "title": "LSTM의 gate와 state는 어떤 식으로 계산하는가?",
      "url": "/notes/learning/2026-10-26-rnn-lstm-state#질문-lstm의-gate와-state는-어떤-식으로-계산하는가",
      "topic": "딥러닝",
      "sourceTitle": "RNN에서 LSTM으로: unfolding, cell state와 gate",
      "context": "LSTM의 설명을 비유 없이 정확하게 듣고 싶다고 요청한 뒤, gate와 state를 구하는 식을 모두 물었다.",
      "intent": "무엇이 입력이고 무엇이 계산 결과인지, 각 기호가 어느 단계에서 쓰이는지를 한 흐름으로 확인하려는 질문이다.",
      "answer": "LSTM cell은 x_t, h_{t-1}, c_{t-1}을 받아 새 hidden state h_t와 cell state c_t를 만든다. 세 gate와 candidate를 계산하고, cell state를 갱신한 다음 hidden state를 계산한다."
    },
    {
      "id": "learning/2026-10-26-rnn-lstm-state#질문-c̃는-어디에-쓰이며-g를-쓰던-식과-왜-달라-보이는가",
      "title": "c̃는 어디에 쓰이며, g를 쓰던 식과 왜 달라 보이는가?",
      "url": "/notes/learning/2026-10-26-rnn-lstm-state#질문-c̃는-어디에-쓰이며-g를-쓰던-식과-왜-달라-보이는가",
      "topic": "딥러닝",
      "sourceTitle": "RNN에서 LSTM으로: unfolding, cell state와 gate",
      "context": "candidate를 g_t로 설명하다가 c̃_t라는 표기가 나오자, 이전 cell state에 forget gate를 곱하고 i_t와 g_t의 곱을 더하던 식이 바뀐 것인지 물었다. 이때 곱셈을 “내적”, i_t를 “input state”라고 표현했다.",
      "intent": "다른 기호가 같은 값을 뜻하는지 확인하고, 식의 연산과 각 값의 이름을 맞추려는 질문이다.",
      "answer": "이 설명에서 g_t와 c̃_t는 같은 candidate다. i_t⊙g_t는 i_t⊙c̃_t와 같은 항이다. i_t는 input gate이며, ⊙는 dot product가 아니라 같은 위치의 성분끼리 곱하는 elementwise product다."
    },
    {
      "id": "learning/2026-10-26-rnn-lstm-state#질문-o_t는-언제-쓰이며-h_t가-output-state인가",
      "title": "o_t는 언제 쓰이며, h_t가 output state인가?",
      "url": "/notes/learning/2026-10-26-rnn-lstm-state#질문-o_t는-언제-쓰이며-h_t가-output-state인가",
      "topic": "딥러닝",
      "sourceTitle": "RNN에서 LSTM으로: unfolding, cell state와 gate",
      "context": "cell state 식을 따라간 뒤 output gate가 어느 계산에서 쓰이는지 물었다. 이어 o_t와 h_t 중 무엇이 출력에 해당하는지 다시 확인했다.",
      "intent": "gate 자체와 gate를 적용한 결과를 구별하고, LSTM cell의 출력과 모델의 최종 예측을 나누려는 질문이다.",
      "answer": "o_t는 h_t=o_t⊙tanh(c_t)에서 쓰이는 output gate다. h_t는 hidden state이며 cell의 출력으로 쓰인다. 분류 모델의 최종 label이나 확률과 자동으로 같은 값은 아니다. 최종 예측에는 별도의 output layer 등을 연결할 수 있다."
    },
    {
      "id": "learning/2026-10-26-rnn-lstm-state#질문-cell-state를-추가하면-왜-먼-시점까지-gradient를-전달하기-쉬워지는가",
      "title": "cell state를 추가하면 왜 먼 시점까지 gradient를 전달하기 쉬워지는가?",
      "url": "/notes/learning/2026-10-26-rnn-lstm-state#질문-cell-state를-추가하면-왜-먼-시점까지-gradient를-전달하기-쉬워지는가",
      "topic": "딥러닝",
      "sourceTitle": "RNN에서 LSTM으로: unfolding, cell state와 gate",
      "context": "cell state의 계산은 어느 정도 이해한 것 같다고 말했지만, 그것이 gradient 전달과 어떻게 연결되는지는 다시 물었다. weight의 변화에 관한 표현만으로는 long-term dependency가 나아지는 이유가 보이지 않았다.",
      "intent": "LSTM이 좋다는 결론보다, 일반 RNN과 달라진 계산 경로와 그 효과의 조건을 확인하려는 질문이다.",
      "answer": "cell state에는 이전 값을 forget gate와 곱해 더하는 경로가 있다. 이 경로에서는 매 time step마다 새로운 tanh를 반드시 통과하지 않는다. forget gate가 1에 가까우면 이 직접 경로를 따라 정보와 gradient를 유지하기 쉬워진다. 모든 조건에서 vanishing gradient가 사라진다는 뜻은 아니다."
    },
    {
      "id": "learning/2026-10-16-feature-scaling#질문-범주를-숫자로-바꿨다면-평균과-표준편차도-의미가-있는가",
      "title": "범주를 숫자로 바꿨다면 평균과 표준편차도 의미가 있는가?",
      "url": "/notes/learning/2026-10-16-feature-scaling#질문-범주를-숫자로-바꿨다면-평균과-표준편차도-의미가-있는가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "Feature scaling: 언제 적용하고 어떤 열을 바꿀까?",
      "context": "범주 숫자의 평균을 구하기 어렵다는 설명을 듣고, 숫자로 바꾼 범주는 모두 순서가 있는 것으로 취급하는지 물었다.",
      "intent": "숫자로 저장할 수 있다는 사실과 그 숫자를 계산해 해석할 수 있다는 사실을 구별하려는 질문이다.",
      "answer": "숫자가 무엇을 나타내는지 먼저 봐야 한다. 항구 이름에 임의로 붙인 코드와 실제 나이, 해당 범주에 속하는지를 나타내는 0·1은 서로 다르다. scaling을 한다고 임의의 코드에 올바른 거리나 순서가 생기지는 않는다."
    },
    {
      "id": "learning/2026-10-16-feature-scaling#질문-일부-열만-feature-scaling해도-되는가",
      "title": "일부 열만 feature scaling해도 되는가?",
      "url": "/notes/learning/2026-10-16-feature-scaling#질문-일부-열만-feature-scaling해도-되는가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "Feature scaling: 언제 적용하고 어떤 열을 바꿀까?",
      "context": "수치 열과 범주 열의 의미가 다르다면, 모든 열에 같은 처리를 하지 않아도 되는지 물었다.",
      "intent": "표 전체를 한 번에 변환해야 한다는 생각에서 벗어나 열마다 알맞은 처리를 정하려는 질문이다.",
      "answer": "필요한 열만 scaling할 수 있다. 예를 들어 원래의 Age, Fare에는 결측 대체 뒤 standardization을 적용하고, Embarked에는 one-hot encoding을 적용하는 흐름을 만들 수 있다. 이것은 가능한 구성이지 이 미션에서 최적이라고 확인한 결과는 아니다."
    },
    {
      "id": "learning/2026-10-16-feature-scaling#질문-feature-scaling을-하면-성능이-항상-좋아지는가",
      "title": "feature scaling을 하면 성능이 항상 좋아지는가?",
      "url": "/notes/learning/2026-10-16-feature-scaling#질문-feature-scaling을-하면-성능이-항상-좋아지는가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "Feature scaling: 언제 적용하고 어떤 열을 바꿀까?",
      "context": "scaling이 학습을 돕는다는 설명을 듣고, 적용하면 예측 성능이 반드시 좋아지는지 확인했다.",
      "intent": "학습 계산을 다루기 편하게 만드는 것과 새 데이터의 예측이 좋아지는 것을 나누려는 질문이다.",
      "answer": "항상 좋아지지는 않는다. scaling은 feature의 단위와 범위가 거리나 학습 계산에 미치는 영향을 바꾼다. 이것이 필요한지는 모델과 데이터에 따라 다르며, 최종 예측 성능은 같은 검증 조건에서 확인한다."
    },
    {
      "id": "learning/2026-10-16-feature-scaling#질문-보장되지-않는다면-언제-scaling을-하라고-판단해야-하는가",
      "title": "보장되지 않는다면 언제 scaling을 하라고 판단해야 하는가?",
      "url": "/notes/learning/2026-10-16-feature-scaling#질문-보장되지-않는다면-언제-scaling을-하라고-판단해야-하는가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "Feature scaling: 언제 적용하고 어떤 열을 바꿀까?",
      "context": "“항상 좋아지는 것은 아니다”라는 답 뒤에 판단 기준을 다시 물었다. 특정 모델 이야기보다 feature scaling 자체의 결론을 알고 싶다고 요청했다.",
      "intent": "결과를 보고 결정하라는 말에 앞서, 무엇을 근거로 비교 후보를 골라야 하는지 알고 싶었다.",
      "answer": "모델이 숫자의 크기를 어떻게 쓰는지와 feature의 단위가 얼마나 다른지 함께 본다. 단위 차이가 거리나 gradient 계산을 크게 좌우한다면 scaling을 적용한 구성을 우선 비교할 이유가 있다. 그 이유와 실제 성능 개선 여부는 별개의 판단이다."
    },
    {
      "id": "learning/2026-10-16-feature-scaling#질문-나이를-구간-번호로-줄이는-binning도-feature-scaling인가",
      "title": "나이를 구간 번호로 줄이는 binning도 feature scaling인가?",
      "url": "/notes/learning/2026-10-16-feature-scaling#질문-나이를-구간-번호로-줄이는-binning도-feature-scaling인가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "Feature scaling: 언제 적용하고 어떤 열을 바꿀까?",
      "context": "나이를 몇 개 구간으로 나누면 숫자 범위가 줄어드는 점을 보고, 이것도 scaling이라고 이해해도 되는지 물었다.",
      "intent": "출력 숫자가 작아지는 모습이 비슷해도 원래 정보에 생기는 변화가 같은지 확인하려는 질문이다.",
      "answer": "binning은 같은 구간의 서로 다른 값을 하나로 묶는다. 여기서 비교하는 단위 변경이나 standardization은 같은 규칙으로 척도를 바꾼다. 숫자 범위가 줄었다는 사실만으로 같은 작업은 아니다."
    },
    {
      "id": "weekly/2026-10-23-vanishing-gradient-and-zero-grad#질문-20층-sigmoid-모델에서-input-layer-근처의-weight가-거의-바뀌지-않는다면",
      "title": "20층 sigmoid 모델에서 input layer 근처의 weight가 거의 바뀌지 않는다면?",
      "url": "/notes/weekly/2026-10-23-vanishing-gradient-and-zero-grad#질문-20층-sigmoid-모델에서-input-layer-근처의-weight가-거의-바뀌지-않는다면",
      "topic": "PyTorch",
      "sourceTitle": "위클리 페이퍼 #5 — vanishing gradient 확인과 zero_grad의 역할",
      "context": "20층 DNN의 activation function으로 sigmoid를 사용했다. output layer 근처는 잘 학습되는데 input layer 근처의 weight는 몇 epoch가 지나도 거의 그대로다. 어떤 원인을 의심하고, 어떻게 확인하고 해결할지 묻는 문제다.",
      "intent": "weight update가 작다는 현상을 gradient의 전달 과정과 연결하고, 추측을 실제 측정으로 확인하려는 질문이다.",
      "answer": "먼저 vanishing gradient를 의심한다. loss.backward() 직후 layer별 weight.grad의 크기를 비교해 input layer 쪽에서 매우 작아지는지 확인한다. 그다음 hidden layer의 sigmoid를 ReLU 계열로 바꾸는 등의 방법을 적용하고 같은 조건에서 gradient와 loss 변화를 비교한다."
    },
    {
      "id": "weekly/2026-10-23-vanishing-gradient-and-zero-grad#질문-optimizerzero_grad를-빼먹으면-왜-loss가-이상하게-튈까",
      "title": "optimizer.zero_grad()를 빼먹으면 왜 loss가 이상하게 튈까?",
      "url": "/notes/weekly/2026-10-23-vanishing-gradient-and-zero-grad#질문-optimizerzero_grad를-빼먹으면-왜-loss가-이상하게-튈까",
      "topic": "PyTorch",
      "sourceTitle": "위클리 페이퍼 #5 — vanishing gradient 확인과 zero_grad의 역할",
      "context": "PyTorch 학습 loop에서 optimizer.zero_grad()를 빠뜨렸더니 loss가 잘 줄지 않고 튀었다. 이 함수의 역할과 생략했을 때의 문제를 설명하는 문항이다.",
      "intent": "gradient 계산, 저장, parameter update가 각각 어떤 단계에서 일어나는지 구분하려는 질문이다.",
      "answer": "PyTorch의 .backward()는 새 gradient를 기존 parameter의 .grad에 누적해서 더한다. optimizer.zero_grad()는 optimizer가 관리하는 parameter들의 gradient를 초기화한다. 이를 생략하면 이전 batch에서 계산한 값까지 이번 update에 사용하므로, 의도한 update 크기와 방향이 달라질 수 있다. Tensor.backward, Optimizer.zero_grad"
    },
    {
      "id": "learning/2026-10-15-titanic-feature-selection#질문-sibsp와-parch는-무엇이며-왜-이산형인가",
      "title": "SibSp와 Parch는 무엇이며 왜 이산형인가?",
      "url": "/notes/learning/2026-10-15-titanic-feature-selection#질문-sibsp와-parch는-무엇이며-왜-이산형인가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 변수 해석: 이산형과 특성 선택",
      "context": "자료에서 두 열을 이산형으로 분류한 설명을 읽고, 용어와 열의 의미를 함께 물었다.",
      "intent": "숫자의 모양을 보기 전에 무엇을 센 값인지 확인하려는 질문이다.",
      "answer": "SibSp는 함께 탑승한 형제자매와 배우자 수, Parch는 함께 탑승한 부모와 자녀 수다. 본인은 포함하지 않는다. 사람 수는 0, 1, 2처럼 한 명씩 구별되므로 이산형 수치 변수다."
    },
    {
      "id": "learning/2026-10-15-titanic-feature-selection#질문-이산형을-정수형이라고-바꿔-말해도-되는가",
      "title": "이산형을 정수형이라고 바꿔 말해도 되는가?",
      "url": "/notes/learning/2026-10-15-titanic-feature-selection#질문-이산형을-정수형이라고-바꿔-말해도-되는가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 변수 해석: 이산형과 특성 선택",
      "context": "이산형을 설명할 때 나온 값 사이의 간격을 정수형이라는 말로 이해해도 되는지 물었다.",
      "intent": "통계에서의 변수 유형과 프로그래밍의 자료형이 같은 분류인지 확인하려는 질문이다.",
      "answer": "두 말은 다르다. 이산형은 변수가 가질 수 있는 값의 성격이고, int나 float는 컴퓨터에 저장하는 자료형이다. 사람 수가 2.0으로 저장돼도 의미는 두 명이며 이산형이다."
    },
    {
      "id": "learning/2026-10-15-titanic-feature-selection#질문-소수로-나타낼-수-없는-수치형이면-모두-이산형인가",
      "title": "소수로 나타낼 수 없는 수치형이면 모두 이산형인가?",
      "url": "/notes/learning/2026-10-15-titanic-feature-selection#질문-소수로-나타낼-수-없는-수치형이면-모두-이산형인가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 변수 해석: 이산형과 특성 선택",
      "context": "정수형과 이산형이 같지는 않다는 설명 뒤에, 소수 부분을 가질 수 없는 수치라면 이산형으로 판단해도 되는지 다시 물었다.",
      "intent": "현재 표에 적힌 값과 변수가 원래 가질 수 있는 값을 구별해 판단 기준을 세우려는 질문이다.",
      "answer": "무엇을 측정하거나 세는지 먼저 봐야 한다. 인원수처럼 의미상 소수 인원이 불가능한 경우에는 이산형이다. 표에 소수가 보이지 않는다는 사실만으로는 부족하다."
    },
    {
      "id": "learning/2026-10-15-titanic-feature-selection#질문-survived와-상관관계가-있는-열만-입력으로-써야-하는가",
      "title": "Survived와 상관관계가 있는 열만 입력으로 써야 하는가?",
      "url": "/notes/learning/2026-10-15-titanic-feature-selection#질문-survived와-상관관계가-있는-열만-입력으로-써야-하는가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 변수 해석: 이산형과 특성 선택",
      "context": "타깃 Survived와 각 입력 후보의 관계를 살펴본 뒤, 상관관계가 없어 보이는 열도 넣어도 되는지 물었다.",
      "intent": "개별 변수의 관계를 보는 탐색 결과를 모델의 특성 선택 기준으로 바로 써도 되는지 확인하려는 질문이다.",
      "answer": "피어슨 상관계수가 작다는 이유만으로 바로 버리지는 않는다. 이 값은 주로 선형 관계를 요약한다. 비선형 관계가 있거나 다른 변수와 함께 볼 때 정보가 생길 수 있다. 그렇다고 모든 열이 도움이 된다는 뜻도 아니다."
    },
    {
      "id": "learning/2026-10-15-titanic-feature-selection#질문-승선항은-생존의-직접적인-원인-같지-않은데-직관으로-빼도-되는가",
      "title": "승선항은 생존의 직접적인 원인 같지 않은데 직관으로 빼도 되는가?",
      "url": "/notes/learning/2026-10-15-titanic-feature-selection#질문-승선항은-생존의-직접적인-원인-같지-않은데-직관으로-빼도-되는가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 변수 해석: 이산형과 특성 선택",
      "context": "Embarked가 어느 항구에서 탔는지를 뜻한다는 설명을 듣고, 생존 여부와 직접 관계없어 보이니 제거해도 되는지 물었다.",
      "intent": "현실에 대한 직관을 예측 변수 선택에 어느 정도까지 적용할 수 있는지 확인하려는 질문이다.",
      "answer": "직관은 비교할 가설을 만드는 데 쓸 수 있다. 다만 직접적인 원인이 아니어도 예측에 도움이 되는 정보일 수 있으므로, 직관만으로 유용성을 확정하지는 않는다."
    },
    {
      "id": "learning/2026-10-15-titanic-feature-selection#질문-나이는-값이-너무-다양해서-정확한-나이별-생존율을-보기-어려운가",
      "title": "나이는 값이 너무 다양해서 정확한 나이별 생존율을 보기 어려운가?",
      "url": "/notes/learning/2026-10-15-titanic-feature-selection#질문-나이는-값이-너무-다양해서-정확한-나이별-생존율을-보기-어려운가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 변수 해석: 이산형과 특성 선택",
      "context": "연속형인 Age를 각 값으로 나눠 생존율을 계산하기보다 나이 구간으로 살펴보는 이유를 물었다.",
      "intent": "값의 종류가 많은 것과 집계 결과가 불안정한 것의 관계를 이해하려는 질문이다.",
      "answer": "정확히 같은 나이에 해당하는 승객이 적으면 생존율이 몇 사람의 결과에 크게 좌우될 수 있다. 값이 다양하다는 사실보다 각 값의 표본 수가 얼마인지가 중요하다."
    },
    {
      "id": "learning/2026-10-15-titanic-feature-selection#질문-탐색에서-열을-살펴봤으면-선택이-끝난-것인가-실무에서도-넣고-빼며-비교하는가",
      "title": "탐색에서 열을 살펴봤으면 선택이 끝난 것인가? 실무에서도 넣고 빼며 비교하는가?",
      "url": "/notes/learning/2026-10-15-titanic-feature-selection#질문-탐색에서-열을-살펴봤으면-선택이-끝난-것인가-실무에서도-넣고-빼며-비교하는가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 변수 해석: 이산형과 특성 선택",
      "context": "각 특성과 생존 여부의 관계를 이미 살펴봤는데도 추가 검증이 필요한지, 실제 모델링에서도 포함 여부를 비교하는지 물었다.",
      "intent": "탐색적 분석과 예측 성능 검증이 각각 무엇을 확인하는지 나누려는 질문이다.",
      "answer": "탐색은 변수의 의미·분포·이상한 값을 파악하고 가설을 만든다. 아직 보지 않은 데이터의 예측에 도움이 되는지는 검증용 데이터나 교차 검증으로 확인한다. 특성을 넣고 빼며 비교하는 방식도 쓰이지만 모든 조합을 반드시 시험하는 것은 아니다."
    },
    {
      "id": "learning/2026-10-19-titanic-validation#질문-랜덤-포레스트-정확도를-75에서-80로-올리려면-어디를-개선할까",
      "title": "랜덤 포레스트 정확도를 75%에서 80%로 올리려면 어디를 개선할까?",
      "url": "/notes/learning/2026-10-19-titanic-validation#질문-랜덤-포레스트-정확도를-75에서-80로-올리려면-어디를-개선할까",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 캐글 75%에서 먼저 점검한 것",
      "context": "전처리와 랜덤 포레스트 학습을 마친 뒤 제출 점수를 확인했다. 설명 도중 75%는 캐글에 제출해 받은 점수라고 덧붙였다.",
      "intent": "설정을 무작정 바꾸기보다 성능 개선에 도움이 될 다음 실험을 고르고 싶었다.",
      "answer": "제출 파일이 현재 모델의 예측인지 확인하고, 전처리를 학습 데이터에서만 맞추도록 정리한 다음, 같은 검증 조건에서 한 가지씩 비교한다. 나이와 요금의 구간화, 트리 깊이와 잎의 최소 표본 수가 비교 후보였다. 어느 변경도 캐글 80%를 보장하지 않는다."
    },
    {
      "id": "learning/2026-10-15-titanic-preprocessing#질문-ticket은-왜-버리는가-그렇다면-embarked도-불필요하지-않은가",
      "title": "Ticket은 왜 버리는가? 그렇다면 Embarked도 불필요하지 않은가?",
      "url": "/notes/learning/2026-10-15-titanic-preprocessing#질문-ticket은-왜-버리는가-그렇다면-embarked도-불필요하지-않은가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 전처리: 열 선택, 나이 구간, 결측 처리",
      "context": "결측이 많은 Cabin을 제외하는 이유와 달리, Ticket을 불필요한 열로 설명한 근거가 궁금했다. 이어 승선항인 Embarked에도 같은 논리를 적용할 수 있는지 물었다.",
      "intent": "예제에서 삭제한 열이라는 사실과, 예측에 쓸 정보가 없다는 판단을 구별하려는 질문이다.",
      "answer": "티켓 문자열을 그대로 모델에 넣기 어렵다는 것과 그 정보가 쓸모없다는 것은 다르다. 티켓 번호의 크기를 생존 가능성의 크기로 해석할 근거는 없지만, 티켓을 공유하는 승객 수처럼 다른 형태로 바꿔 비교할 수 있다. 승선항도 유지가 정답으로 정해진 열은 아니며 같은 검증 조건에서 유용성을 확인해야 한다."
    },
    {
      "id": "learning/2026-10-15-titanic-preprocessing#질문-intage_guess--05--05--05는-무엇을-하는가",
      "title": "int(age_guess / 0.5 + 0.5) * 0.5는 무엇을 하는가?",
      "url": "/notes/learning/2026-10-15-titanic-preprocessing#질문-intage_guess--05--05--05는-무엇을-하는가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 전처리: 열 선택, 나이 구간, 결측 처리",
      "context": "그룹별 나이 중앙값을 구한 뒤 guess_ages[i, j] = int(age_guess / 0.5 + 0.5) * 0.5를 대입하는 줄에서 계산의 의미를 물었다.",
      "intent": "숫자마다 무슨 역할을 하는지 계산 순서대로 확인하려는 질문이다.",
      "answer": "여기서는 결측이 아닌 0 이상의 나이를 가까운 0.5 단위에 맞추려는 계산이다. 0.5 단위는 22.0, 22.5, 23.0처럼 반 살씩 차이 나는 값을 뜻한다. 이 식을 음수까지 통하는 일반 반올림 공식으로 쓰지는 않는다."
    },
    {
      "id": "learning/2026-10-15-titanic-preprocessing#질문-그냥-중앙값을-넣으면-안-되는가-왜-굳이-05-단위로-맞추는가",
      "title": "그냥 중앙값을 넣으면 안 되는가? 왜 굳이 0.5 단위로 맞추는가?",
      "url": "/notes/learning/2026-10-15-titanic-preprocessing#질문-그냥-중앙값을-넣으면-안-되는가-왜-굳이-05-단위로-맞추는가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 전처리: 열 선택, 나이 구간, 결측 처리",
      "context": "계산 방법을 들은 뒤에도 중앙값을 그대로 guess_ages에 저장하면 되지 않는지 다시 물었다. 반 살 단위라는 개념도 낯설다고 덧붙였다.",
      "intent": "코드가 어떤 계산을 하는지와 그 계산이 반드시 필요한지를 따로 판단하려는 질문이다.",
      "answer": "중앙값을 그대로 쓰는 선택도 가능하다. 0.5 단위로 맞추는 것은 별도의 표현 규칙이며 결측 대체의 필수 단계가 아니다. 중앙값을 반올림했다고 더 정확한 나이를 알아낸 것이거나 모델 성능이 좋아진 것은 아니다."
    },
    {
      "id": "learning/2026-10-15-titanic-preprocessing#질문-cut은-최솟값과-최댓값을-어떻게-아는가-ageband에는-정수가-들어가는가",
      "title": "cut은 최솟값과 최댓값을 어떻게 아는가? AgeBand에는 정수가 들어가는가?",
      "url": "/notes/learning/2026-10-15-titanic-preprocessing#질문-cut은-최솟값과-최댓값을-어떻게-아는가-ageband에는-정수가-들어가는가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 전처리: 열 선택, 나이 구간, 결측 처리",
      "context": "train_df['AgeBand'] = pd.cut(train_df['Age'], 5)에서 다섯 구간을 만든다는 점은 이해했지만, 경계값을 알려 주지 않았는데 어떻게 나누는지 물었다. 이어 새 열의 값이 구간 번호인 정수인지 확인했다.",
      "intent": "구간 경계를 정하는 방법과 각 행에 저장되는 값의 형태를 구별하려는 질문이다.",
      "answer": "두 번째 인수에 정수 5를 주면 입력 나이의 범위를 이용해 폭이 같은 다섯 구간을 만든다. 기본 설정에서는 값이 들어간 구간 자체를 범주 값으로 돌려주며, 자동으로 0~4의 번호를 반환하는 것은 아니다. 번호가 필요하면 labels=False를 지정한다."
    },
    {
      "id": "learning/2026-10-15-titanic-preprocessing#질문-ageband로-묶은-집단의-survived를-평균-내는-문장인가",
      "title": "AgeBand로 묶은 집단의 Survived를 평균 내는 문장인가?",
      "url": "/notes/learning/2026-10-15-titanic-preprocessing#질문-ageband로-묶은-집단의-survived를-평균-내는-문장인가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 전처리: 열 선택, 나이 구간, 결측 처리",
      "context": "train_df'AgeBand', 'Survived'.groupby(['AgeBand'], as_index=False).mean()을 보고, 같은 나이 구간에 속한 집단의 Survived 값들을 평균 낸다고 설명하며 맞는지 확인했다.",
      "intent": "열 선택, 그룹 지정, 계산을 한 문장으로 다시 풀어 확인하려는 질문이다.",
      "answer": "그 설명이 이 코드의 계산을 짚는다. 두 열을 선택하고 AgeBand로 그룹을 정한 다음 Survived를 평균 낸다. Survived가 생존 1·사망 0이고 결측이 없다면 평균은 그 집단의 생존율이다."
    },
    {
      "id": "learning/2026-10-15-titanic-preprocessing#질문-승선항은-바로-map하면-안-되는가-mode0은-무엇을-고르는가",
      "title": "승선항은 바로 map하면 안 되는가? mode()[0]은 무엇을 고르는가?",
      "url": "/notes/learning/2026-10-15-titanic-preprocessing#질문-승선항은-바로-map하면-안-되는가-mode0은-무엇을-고르는가",
      "topic": "머신러닝 · 데이터 분석",
      "sourceTitle": "타이타닉 전처리: 열 선택, 나이 구간, 결측 처리",
      "context": "승선항의 최빈값을 구하고, fillna(freq_port)로 빈칸을 채운 뒤 {'S': 0, 'C': 1, 'Q': 2}로 매핑하는 코드를 보았다. 딕셔너리로 바로 바꾸면 안 되는지, mode()[0]은 최빈값 하나를 고른 것인지 물었다.",
      "intent": "값의 변환과 결측 보완, 최빈값 계산과 첫 결과 선택을 구별하려는 질문이다.",
      "answer": "일반 딕셔너리를 사용하는 이 예에서 map()은 대응하는 항구 문자를 숫자로 바꾼다. 사전에 없는 값은 결측이 되며, 빈 항구를 가장 흔한 항구로 추정해 주지 않는다. fillna()가 결측을 채우는 단계다. mode()는 최빈값들을 Series로 돌려주고 [0]은 그 결과의 첫 값을 선택한다."
    },
    {
      "id": "weekly/2026-10-19-regularization-and-tree-ensembles#질문-l2-노름에는-루트가-있는데-l2-규제에는-왜-없을까",
      "title": "L2 노름에는 루트가 있는데 L2 규제에는 왜 없을까?",
      "url": "/notes/weekly/2026-10-19-regularization-and-tree-ensembles#질문-l2-노름에는-루트가-있는데-l2-규제에는-왜-없을까",
      "topic": "머신러닝",
      "sourceTitle": "위클리 페이퍼 #4 — 과적합과 규제, 랜덤 포레스트와 그레이디언트 부스팅",
      "context": "L1은 절댓값의 합이고 L2 노름은 제곱합의 제곱근이라고 기억하고 있었다. 그런데 손실함수의 L2 벌점에는 루트가 보이지 않았다.",
      "intent": "같은 이름으로 부르는 두 표현이 정말 같은 양인지 확인하려는 질문이었다.",
      "answer": "통상적인 L2 규제는 L2 노름 자체가 아니라 L2 노름의 제곱을 벌점으로 사용한다."
    },
    {
      "id": "weekly/2026-10-19-regularization-and-tree-ensembles#질문-가중치를-작게-만드는-것이-왜-새로운-데이터에-도움이-될까",
      "title": "가중치를 작게 만드는 것이 왜 새로운 데이터에 도움이 될까?",
      "url": "/notes/weekly/2026-10-19-regularization-and-tree-ensembles#질문-가중치를-작게-만드는-것이-왜-새로운-데이터에-도움이-될까",
      "topic": "머신러닝",
      "sourceTitle": "위클리 페이퍼 #4 — 과적합과 규제, 랜덤 포레스트와 그레이디언트 부스팅",
      "context": "나는 “큰 가중치는 입력의 작은 변화도 크게 반영해서 노이즈까지 학습할 수 있다”고 설명했다.",
      "intent": "가중치를 줄이는 계산과 과적합을 줄이는 효과를 연결하려는 질문이었다.",
      "answer": "선형 모델에서는 입력 변화가 예측에 미치는 영향을 제한하고, 학습 표본의 우연한 패턴을 설명하려고 과도한 계수를 쓰는 것을 억제할 수 있다. 다만 큰 가중치만으로 과적합을 판정할 수는 없다."
    },
    {
      "id": "weekly/2026-10-19-regularization-and-tree-ensembles#질문-부트스트랩-데이터셋은-하나일까-여러-개일까",
      "title": "부트스트랩 데이터셋은 하나일까, 여러 개일까?",
      "url": "/notes/weekly/2026-10-19-regularization-and-tree-ensembles#질문-부트스트랩-데이터셋은-하나일까-여러-개일까",
      "topic": "머신러닝",
      "sourceTitle": "위클리 페이퍼 #4 — 과적합과 규제, 랜덤 포레스트와 그레이디언트 부스팅",
      "context": "하나의 부트스트랩에서 특성만 무작위로 고르면 여러 트리를 만들 수 있으니, 부트스트랩이 꼭 여러 개 필요한지 궁금했다.",
      "intent": "행을 뽑는 무작위성과 특성을 고르는 무작위성이 각각 어디에 적용되는지 구분하려는 질문이었다.",
      "answer": "일반적인 랜덤 포레스트에서는 트리마다 별도의 부트스트랩 표본을 뽑고, 각 노드에서 분할 후보 특성도 무작위로 고른다."
    },
    {
      "id": "weekly/2026-10-19-regularization-and-tree-ensembles#질문-뒤쪽-트리일수록-성능이-좋으니-더-큰-비중으로-투표할까",
      "title": "뒤쪽 트리일수록 성능이 좋으니 더 큰 비중으로 투표할까?",
      "url": "/notes/weekly/2026-10-19-regularization-and-tree-ensembles#질문-뒤쪽-트리일수록-성능이-좋으니-더-큰-비중으로-투표할까",
      "topic": "머신러닝",
      "sourceTitle": "위클리 페이퍼 #4 — 과적합과 규제, 랜덤 포레스트와 그레이디언트 부스팅",
      "context": "처음에는 뒤 트리의 잔차가 작으므로 더 좋은 예측 모델이고, 최종 투표에서 더 큰 비중을 주는 것으로 이해했다.",
      "intent": "여러 트리를 합친다는 말이 두 모델에서 같은 뜻인지 확인하려는 질문이었다.",
      "answer": "제곱오차 그레이디언트 부스팅의 뒤 트리는 원래 y를 혼자 잘 맞히는 모델이 아니라 앞선 누적 예측에 필요한 보정량을 예측하는 모델이다. 보정량이 작다고 독립적인 성능이 더 좋은 것은 아니다."
    },
    {
      "id": "weekly/2026-10-19-regularization-and-tree-ensembles#질문-앞-트리의-출력을-입력으로-주지-않는데-다음-트리는-어떻게-알까",
      "title": "앞 트리의 출력을 입력으로 주지 않는데 다음 트리는 어떻게 알까?",
      "url": "/notes/weekly/2026-10-19-regularization-and-tree-ensembles#질문-앞-트리의-출력을-입력으로-주지-않는데-다음-트리는-어떻게-알까",
      "topic": "머신러닝",
      "sourceTitle": "위클리 페이퍼 #4 — 과적합과 규제, 랜덤 포레스트와 그레이디언트 부스팅",
      "context": "“두 번째 트리는 첫 번째 트리의 영향을 받는다”와 “첫 번째 트리의 출력이 두 번째 트리의 입력은 아니다”가 모순처럼 느껴졌다.",
      "intent": "여기서 입력이 X인지, 학습에 쓰는 모든 정보인지 구분하지 못했던 것으로 해석한다.",
      "answer": "앞 트리의 영향은 다음 트리의 학습 목표값에 들어간다. 다음 트리의 입력 특성 열로 붙는 것은 아니다."
    },
    {
      "id": "weekly/2026-10-19-regularization-and-tree-ensembles#질문-테스트-데이터에는-정답-y가-없는데-어떻게-잔차를-출력할까",
      "title": "테스트 데이터에는 정답 y가 없는데 어떻게 잔차를 출력할까?",
      "url": "/notes/weekly/2026-10-19-regularization-and-tree-ensembles#질문-테스트-데이터에는-정답-y가-없는데-어떻게-잔차를-출력할까",
      "topic": "머신러닝",
      "sourceTitle": "위클리 페이퍼 #4 — 과적합과 규제, 랜덤 포레스트와 그레이디언트 부스팅",
      "context": "학습 중에는 y−예측으로 잔차를 구했기 때문에, 정답이 없는 새 데이터에서는 계산을 시작할 수 없는 것처럼 느껴졌다.",
      "intent": "학습 때 목표를 만드는 계산과 학습된 모델을 사용하는 계산을 분리하려는 질문이었다.",
      "answer": "추론에서는 실제 잔차를 새로 계산하지 않는다. 각 트리는 이미 학습한 분기와 잎 값을 사용해 보정값을 예측한다."
    },
    {
      "id": "weekly/2026-10-19-regularization-and-tree-ensembles#질문-왜-이름에-그레이디언트가-붙을까-잔차는-파라미터의-이동-방향일까",
      "title": "왜 이름에 그레이디언트가 붙을까? 잔차는 파라미터의 이동 방향일까?",
      "url": "/notes/weekly/2026-10-19-regularization-and-tree-ensembles#질문-왜-이름에-그레이디언트가-붙을까-잔차는-파라미터의-이동-방향일까",
      "topic": "머신러닝",
      "sourceTitle": "위클리 페이퍼 #4 — 과적합과 규제, 랜덤 포레스트와 그레이디언트 부스팅",
      "context": "손실을 미분한 값에 마이너스를 붙이는 경사하강법과, 잔차를 학습하는 부스팅이 연결된다고 느꼈다.",
      "intent": "무엇에 대해 미분하는지를 구분해 이 직관을 정확하게 표현하려는 질문이었다.",
      "answer": "그레이디언트 부스팅은 현재 예측 함수의 출력을 개선할 음의 기울기를 새 모델로 근사한다. 반 제곱오차에서는 그것이 실제값−예측값, 즉 여기서 정의한 잔차다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-왜-회귀에서는-오차-분류에서는-손실이라고-부르는가",
      "title": "왜 회귀에서는 오차, 분류에서는 손실이라고 부르는가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-왜-회귀에서는-오차-분류에서는-손실이라고-부르는가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "회귀에서 배운 error와 분류 슬라이드의 loss가 서로 다른 분야의 용어인지 물었다.",
      "intent": "이전 단원에서 쓰던 말과 새 단원의 목적함수를 연결하려는 질문이다.",
      "answer": "회귀에서도 손실을 사용한다. 오차를 ŷ-y라는 차이로 정의했다면 그 제곱을 벌점으로 삼은 것이 제곱손실이고, 여러 행의 평균이 MSE다. 분류에서는 정답에 준 확률로 로그 손실을 만들 수 있다. “회귀=오차, 분류=손실”로 나누지 않는다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-모델이-class-1을-골랐는데-왜-class-0의-확률로-손실을-구하는가",
      "title": "모델이 class 1을 골랐는데 왜 class 0의 확률로 손실을 구하는가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-모델이-class-1을-골랐는데-왜-class-0의-확률로-손실을-구하는가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "슬라이드에는 확률 [0.244728,0.665241,0.090031], 실제 정답 0이 나왔다.",
      "intent": "모델이 고른 답과 손실에서 평가하는 답을 구별하려는 질문이다.",
      "answer": "예측은 가장 높은 확률의 class 1이다. 손실은 이미 주어진 실제 정답 class 0에 준 확률을 평가하므로 -ln(0.244728)≈1.407606이다. 0은 클래스 이름이지 확률 0이라는 뜻이 아니다. 틀린 답에 준 최대 확률로 손실을 계산하면 자신 있게 틀리는 모델을 잘했다고 평가하게 된다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-p와-q를-쉬운-예로-구별하면-무엇인가",
      "title": "p와 q를 쉬운 예로 구별하면 무엇인가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-p와-q를-쉬운-예로-구별하면-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "이진 분류 표를 본 뒤 스팸 같은 쉬운 예로 설명해 달라고 했다.",
      "intent": "class 1 확률과 실제 정답에 해당하는 확률을 구체적으로 구분하려는 질문이다.",
      "answer": "class 1을 스팸으로 정하면 p는 항상 스팸 확률이다. y=1,p=.8이면 q=.8이고, y=0,p=.2이면 q=1-.2=.8이다. 두 예측은 p가 다르지만 실제 정답에 모두 80%를 주어 손실이 같다. y=1,p=.1이면 q=.1이므로 손실은 더 크다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-정답-확률에-왜--log를-씌우는가",
      "title": "정답 확률에 왜 -log를 씌우는가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-정답-확률에-왜--log를-씌우는가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "q를 고르는 것까지 이해한 뒤 그 값을 다시 변환하는 이유를 물었다.",
      "intent": "좋은 예측의 확률과 최소화할 벌점의 방향을 연결하려는 질문이다.",
      "answer": "q는 클수록 좋고 손실은 작을수록 좋아야 한다. $-\\ln q$는 q=1에서 0, q가 0에 가까워질수록 무한히 커진다. .8, .1, .01의 손실은 약 .223, 2.303, 4.605다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-p-q--lnq의-정확한-정의는-무엇인가",
      "title": "p, q, -ln(q)의 정확한 정의는 무엇인가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-p-q--lnq의-정확한-정의는-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "직관 다음에는 기억할 정의를 정확히 정해 달라고 했다.",
      "intent": "서로 연관된 세 값을 같은 예측값으로 뭉뚱그리지 않으려는 질문이다.",
      "answer": "이 글의 이진 분류에서 p는 모델의 class 1 예측 확률, q는 모델이 실제 정답 클래스에 부여한 확률, -ln(q)는 샘플 하나의 로그 손실이다. p는 y 없이 계산하지만 q를 고르려면 y가 필요하다. q는 정답표가 옳을 확률이나 데이터 자체의 확실성이 아니다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-그러면-q도-결국-예측값-아닌가",
      "title": "그러면 q도 결국 예측값 아닌가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-그러면-q도-결국-예측값-아닌가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "q가 모델에서 나온 값이라는 점을 다시 확인했다.",
      "intent": "예측 클래스와 예측 확률, 정답으로 고른 확률의 관계를 확인하려는 질문이다.",
      "answer": "q도 예측 확률에서 나온 값이 맞다. 다만 새로 예측한 클래스 번호가 아니라, 모델이 만든 확률 중 정답 열을 고른 값이다. [P(0),P(1)]=[.2,.8]이면 예측 라벨은 1이고 p=.8이다. 정답이 0이면 q=.2, 정답이 1이면 q=.8이다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-q--npwhere는-배열을-거르는-문법인가",
      "title": "q = np.where(...)는 배열을 거르는 문법인가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-q--npwhere는-배열을-거르는-문법인가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "y와 p가 shape (3,)인 것은 알지만 np.where 문법을 모른다고 말했다.",
      "intent": "조건식이 함수 인자로 들어갈 때 실제 어떤 값이 선택되는지 알고 싶은 질문이다.",
      "answer": "세 인자 형식은 np.where(조건, 참일 때 값, 거짓일 때 값)이다. y=[1,0,1], p=[.8,.2,.1]에서 조건은 [True,False,True], 1-p는 [.2,.8,.9]다. 각 위치에서 하나씩 골라 q=[.8,.8,.1]이 된다. 여기서는 원소를 제거하는 필터가 아니어서 shape (3,)을 유지한다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-손실이-음수가-아니어서-제곱을-안-하는-것인가",
      "title": "손실이 음수가 아니어서 제곱을 안 하는 것인가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-손실이-음수가-아니어서-제곱을-안-하는-것인가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "terms=-log(q), loss=terms.mean()을 읽으며 “이미 양수여서 제곱할 필요가 없겠다”고 추측했다.",
      "intent": "제곱오차에서 배운 상쇄 방지 논리를 로그 손실에 적용하려는 질문이다.",
      "answer": "유효한 0<q≤1에서 로그 손실은 음수가 아니므로 부호 상쇄는 없다. 그러나 제곱하지 않는 직접적인 이유는 손실을 -log(q)로 정의했기 때문이다. 이를 다시 제곱하면 다른 목적함수가 된다. q=[.8,.8,.1]에서 terms≈[.223144,.223144,2.302585], 평균은 .916291이다. terms는 (3,)이고 loss는 스칼라다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-왜-모든-z가-0이면-모든-p가-05인가",
      "title": "왜 모든 z가 0이면 모든 p가 0.5인가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-왜-모든-z가-0이면-모든-p가-05인가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "초기 w=b=0인 그림에서 입력과 정답이 다른데 확률이 같은 이유를 물었다.",
      "intent": "입력 → 점수 → 확률의 빠진 계산을 연결하려는 질문이다.",
      "answer": "$z=b+wx$이므로 w=b=0이면 어떤 x에서도 z=0이다. $\\sigma(0)=1/(1+e^0)=1/2$이므로 p=.5다. 정답 y는 예측을 만드는 이 식에 들어가지 않는다. 이후 파라미터를 갱신하면 점수와 확률이 달라질 수 있다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-손실은-q로-계산하는데-왜-기울기에는-p-y가-나오는가",
      "title": "손실은 q로 계산하는데 왜 기울기에는 p-y가 나오는가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-손실은-q로-계산하는데-왜-기울기에는-p-y가-나오는가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "q를 배운 뒤 갱신 코드의 p-y가 납득되지 않아 q-y가 아닌 이유를 물었다.",
      "intent": "손실 계산과 손실 미분을 구별해 회귀의 오차와 연결하려는 질문이다.",
      "answer": "p-y는 로그 손실값이 아니라 한 행 손실을 선형 점수 z로 미분한 값이다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-로지스틱-회귀에서-학습하는-파라미터는-p인가",
      "title": "로지스틱 회귀에서 학습하는 파라미터는 p인가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-로지스틱-회귀에서-학습하는-파라미터는-p인가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "확률을 올리고 내린다는 설명을 들은 뒤 회귀의 theta에 대응하는 값이 p인지 물었다.",
      "intent": "학습으로 저장·갱신하는 값과 그 값으로 계산한 출력을 구분하려는 질문이다.",
      "answer": "파라미터는 여전히 b와 w다. theta=[b,w] → z=Xb@theta → p=sigmoid(z) 순서다. theta를 바꾸어 점수가 달라지면 확률이 다시 계산된다. p를 독립적인 파라미터로 직접 저장해 갱신하는 코드가 아니다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-실제-b와-w를-늘리면-손실이-어떻게-변하는지-설명해-달라",
      "title": "실제 b와 w를 늘리면 손실이 어떻게 변하는지 설명해 달라",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-실제-b와-w를-늘리면-손실이-어떻게-변하는지-설명해-달라",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "p-y의 부호를 확률 변화로만 말하면 더 헷갈린다고 지적했다. 회귀 때처럼 theta와 손실의 관계로 설명해 달라고 요청했다.",
      "intent": "점수에 대한 미분과 실제 파라미터에 대한 미분을 분리하려는 요청이다.",
      "answer": "x=[-1,0,1], y=[0,0,1], b=w=0이면 p-y=[.5,.5,-.5]다. 평균 손실의 실제 편미분은"
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-그-해석이-g와-theta-갱신-코드로-어떻게-이어지는가",
      "title": "그 해석이 g와 theta 갱신 코드로 어떻게 이어지는가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-그-해석이-g와-theta-갱신-코드로-어떻게-이어지는가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "파라미터별 미분 설명 이후 실제 학습 코드를 설명해 달라고 했다.",
      "intent": "수식의 두 편미분이 배열 어느 위치로 들어가는지 확인하려는 질문이다.",
      "answer": "D=[[1,-1],[1,0],[1,1]], t0=[0,0]일 때 g=D.T@(p-y)/3은 [1/6,-1/3]이다. shape (3,)인 점수 미분이 shape (2,)인 파라미터 기울기로 바뀐다. t1=t0-.3*g이면 [-.05,.1], 새 점수는 [-.15,-.05,.05], 평균 로그 손실은 약 .652625다. 갱신 전의 .693147보다 작지만 이 한 예가 모든 학습률에서의 감소를 보장하지는 않는다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-복잡한-sigmoid-함수도-11exp-z를-계산하는가",
      "title": "복잡한 sigmoid 함수도 1/(1+exp(-z))를 계산하는가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-복잡한-sigmoid-함수도-11exp-z를-계산하는가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "학습 셀의 exp(-logaddexp(0,-asarray(z))) 표현을 한 줄씩 설명해 달라고 했다.",
      "intent": "수치 안정성을 위한 구현과 익숙한 수학식을 대응시키려는 질문이다.",
      "answer": "logaddexp(a,b)는 $\\ln(e^a+e^b)$를 안정적으로 계산한다. 따라서 $\\exp[-\\ln(1+e^{-z})]=1/(1+e^{-z})$다. asarray(...,dtype=float)는 실수 배열로 맞춘다. 배열이면 같은 shape의 확률을 반환한다. 이 함수 정의만 읽은 상태와 호출해서 나온 결과는 구분한다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-binary_loss는-확률-배열을-반환하는가-손실-하나를-반환하는가",
      "title": "binary_loss는 확률 배열을 반환하는가, 손실 하나를 반환하는가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-binary_loss는-확률-배열을-반환하는가-손실-하나를-반환하는가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "학습 셀의 함수와 그 출력이 무엇인지 다시 물었다.",
      "intent": "함수 입력의 의미와 mean 이후 반환 타입을 확인하려는 질문이다.",
      "answer": "이 코드의 함수는 점수 z와 정답 y를 받아 평균 손실 스칼라를 반환한다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-predict_probax1은-무엇을-선택하며-classes_는-무엇인가",
      "title": "predict_proba(X)[:,1]은 무엇을 선택하며 classes_는 무엇인가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-predict_probax1은-무엇을-선택하며-classes_는-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "직접 만든 로지스틱 회귀와 scikit-learn을 비교하는 셀의 배열 선택을 물었다.",
      "intent": "확률의 열 위치가 어떤 클래스에 대응하는지 확인하려는 질문이다.",
      "answer": "predict_proba는 샘플별 클래스 확률 행렬을 반환한다. [:,1]은 모든 행의 두 번째 열이다. 그 열이 class 1인지 classes_의 순서로 확인한다. classes_=[0,1]이면 맞지만 열 번호와 라벨이 항상 같은 것은 아니다. 직접 계산한 p와 이 열의 최대 차이는 구현 출력의 일치 정도이며 정답률이나 새 데이터 성능이 아니다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-클래스가-012이면-p-하나로-어떻게-표현하는가",
      "title": "클래스가 0·1·2이면 p 하나로 어떻게 표현하는가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-클래스가-012이면-p-하나로-어떻게-표현하는가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "이전의 p는 class 1 확률이었는데 softmax 셀에는 세 클래스가 있어 혼란스럽다고 했다.",
      "intent": "이진 확률 하나와 다중 클래스 확률 벡터의 차이를 이해하려는 질문이다.",
      "answer": "이진 분류는 P(0)=1-P(1)이라 하나만 알면 된다. 세 클래스는 하나를 알아도 나머지 둘의 배분을 모른다. 따라서 샘플 하나에 [p₀,p₁,p₂]를 계산한다. softmax는 $p_k=e^{z_k}/\\sum_j e^{z_j}$다. 점수 1,2,0은 샘플 1개·클래스 3개의 (1,3) 배열이고 확률은 약 .244728,.665241,.090031이다. 점수 0은 확률 0이 아니다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-softmax에서-최댓값을-빼고-argmax를-쓰는-줄은-무엇인가",
      "title": "softmax에서 최댓값을 빼고 argmax를 쓰는 줄은 무엇인가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-softmax에서-최댓값을-빼고-argmax를-쓰는-줄은-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "softmax 셀 전체 설명 요청에서 안정화·열 선택·정답 확률 계산이 이어졌다.",
      "intent": "한 행 안의 연산과 클래스 라벨 선택 과정을 확인하려는 질문이다.",
      "answer": "각 행의 최댓값을 빼도 지수의 공통 배수가 약분돼 확률이 같다. 1,2,0에서 -1,0,-2로 바꾸면 지수 넘침을 줄일 수 있다. axis=1, keepdims=True는 각 행의 최대나 합을 (n,1)로 남긴다. argmax(axis=1)은 가장 큰 확률의 열 위치를 주므로 classes[위치]로 라벨을 찾는다. 손실은 최대 열이 아니라 정답 라벨에 대응하는 열을 선택한다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-범주는-등급이-아닌데-왜-클래스별-점수가-있는가",
      "title": "범주는 등급이 아닌데 왜 클래스별 점수가 있는가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-범주는-등급이-아닌데-왜-클래스별-점수가-있는가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "A와 B는 다른 범주일 뿐인데 B에 높은 점수를 주는 설명은 등급처럼 느껴진다고 지적했다.",
      "intent": "클래스 번호의 의미와 모델 점수의 의미를 분리하려는 질문이다.",
      "answer": "점수는 클래스 자체의 우열이 아니라 현재 입력을 그 클래스로 판단하는 모델의 값이다. 입력과 클래스별 파라미터가 바뀌면 달라진다. 설명용 고양이 사진에 [4,1,-2]라는 점수를 줬다고 고양이가 더 좋은 동물이라는 뜻은 아니다. 점수 2가 1보다 두 배 적합하다는 뜻도 아니다. softmax에서는 점수 차이가 상대 확률을 결정한다."
    },
    {
      "id": "learning/2026-10-08-logistic-loss#질문-정답이-고양이면-강아지와-토끼는-둘-다-틀린데-왜-점수가-다른가",
      "title": "정답이 고양이면 강아지와 토끼는 둘 다 틀린데 왜 점수가 다른가?",
      "url": "/notes/learning/2026-10-08-logistic-loss#질문-정답이-고양이면-강아지와-토끼는-둘-다-틀린데-왜-점수가-다른가",
      "topic": "머신러닝",
      "sourceTitle": "p·q·로그 손실에서 실제 파라미터 기울기까지",
      "context": "범주 점수가 입력에 대한 판단이라는 설명은 받아들였지만, 두 오답의 값이 달라야 하는지 후속 질문을 했다.",
      "intent": "정답의 0/1 표시와 모델의 불확실한 추정을 구별하려는 질문이다.",
      "answer": "정답 one-hot은 [1,0,0]이어도 예측은 [.7,.2,.1]일 수 있다. 모델은 정답을 보기 전에 현재 파라미터로 확률을 만든다. 정답 확률 .7이 같으면 [.7,.1,.2], [.7,.15,.15]도 손실은 모두 $-\\ln .7$로 같다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-로지스틱-분류-코드는-어떤-순서로-채우는가",
      "title": "로지스틱 분류 코드는 어떤 순서로 채우는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-로지스틱-분류-코드는-어떤-순서로-채우는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "오전의 코드 진단 대화에서는 Wine 문제의 모델 정의가 비어 있었고, 오후 PRACTICE에서는 확률·라벨 계산의 힌트를 요청했다.",
      "intent": "함수 이름을 나열하기보다 필요한 중간 결과의 순서를 잡으려는 질문이다.",
      "answer": "기본 흐름은 입력·정답 준비 → 학습·평가 분리 → 모델 fit → 평가 입력 predict → 정답과 비교다. 오전 과제에서 제안한 saga·random_state=5와 오후 실습의 lbfgs·random_state=42는 서로 다른 코드 맥락이므로 한 실험의 설정처럼 섞지 않는다. 제안받은 코드가 실행·채점됐다는 뜻도 아니다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-per_row_lossmean_losslabels_calc에는-서로-다른-값이-들어가는가",
      "title": "per_row_loss·mean_loss·labels_calc에는 서로 다른 값이 들어가는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-per_row_lossmean_losslabels_calc에는-서로-다른-값이-들어가는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "정답 확률을 고른 다음 남은 세 빈칸의 힌트와 답을 차례로 요청했다.",
      "intent": "확률 배열에서 행별 손실·전체 요약·예측 라벨이 갈라지는 지점을 확인하려는 질문이다.",
      "answer": "y=[1,0,1], p=[.8,.2,.1]에서 q=[.8,.8,.1]이다. -np.log(q)는 행별 손실 약 [.223144,.223144,2.302585], 그 mean은 .916291이다. (p>=.5).astype(int)는 예측 라벨 [1,0,0]이다. p라는 임시 이름이 아니라 셀에서 정의한 p_calc를 사용해야 한다. 라벨로 바꾸면 .51과 .99가 모두 1이 되어 확신 정도가 사라진다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-class-1-확률만-비교하면-class-0-판단은-빠지는-것-아닌가",
      "title": "class 1 확률만 비교하면 class 0 판단은 빠지는 것 아닌가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-class-1-확률만-비교하면-class-0-판단은-빠지는-것-아닌가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "p_calc>=.5 대신 정답 확률 q가 .5 이상인지 봐야 한다고 생각했다.",
      "intent": "어느 클래스를 고르는 것과 정답에 높은 확률을 줬는지를 구별하려는 질문이다.",
      "answer": "p<.5이면 1-p>.5이므로 그 결과 False를 정수 0으로 바꾸는 것이 class 0 선택이다. y=0,p=.2라면 올바른 예측 라벨은 0이고 q=.8이다. q>=.5를 정수 1로 바꾸면 “정답에 높은 확률을 줬다”는 표시를 class 1로 오해하게 된다. q를 구하려면 이미 y가 필요하므로 새 데이터의 예측 기준으로 쓸 수 없다. p=.5에서는 이 코드가 1을 고른다는 동점 규칙도 포함된다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-확률부터-한-번-갱신한-손실까지-어떻게-연결하는가",
      "title": "확률부터 한 번 갱신한 손실까지 어떻게 연결하는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-확률부터-한-번-갱신한-손실까지-어떻게-연결하는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "1-2의 빈칸에서 probability_error, first_gradient, theta_next, loss_next 순서의 힌트를 요청했다.",
      "intent": "앞서 배운 식을 각 변수의 값으로 연결하려는 질문이다.",
      "answer": "D=[[1,-1],[1,0],[1,1]], theta=[0,0], y=[0,0,1]에서 p=[.5,.5,.5], p-y=[.5,.5,-.5]다. D.T@(p-y)/3은 [1/6,-1/3]이고 학습률 .3으로 theta_next=[-.05,.1]이다. 새 손실은 binary_loss(D @ theta_next,y)처럼 새 점수로 계산한다. 이전 theta나 확률 p를 넣지 않는다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-binary_loss-안에서-숫자는-실제로-어떻게-바뀌는가",
      "title": "binary_loss 안에서 숫자는 실제로 어떻게 바뀌는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-binary_loss-안에서-숫자는-실제로-어떻게-바뀌는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "함수 설명보다 쉬운 숫자로 실제 계산을 보여 달라고 거듭 요청했다.",
      "intent": "logaddexp와 정답 곱셈, 평균을 눈으로 따라가려는 요청이다.",
      "answer": "함수의 한 행 계산은 $\\ln(1+e^z)-yz$다. 새 점수 [-.15,-.05,.05], 정답 [0,0,1]을 넣으면 다음과 같다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-npmean을-쓴-first_gradient에서-무엇이-틀렸는가",
      "title": "np.mean을 쓴 first_gradient에서 무엇이 틀렸는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-npmean을-쓴-first_gradient에서-무엇이-틀렸는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "작성한 코드가 np.mean(design_first.T @ (p_first-y_first))인 상태에서 오류를 물었다.",
      "intent": "평균을 냈는데도 다른 결과가 나온 원인을 찾으려는 질문이다.",
      "answer": "행렬곱 결과는 [0.5,-1.0]으로 b와 w의 합 기울기 두 개다. 전체 mean은 -.25라는 스칼라로 이 둘을 섞는다. 원하는 결과는 각 값에 샘플 수 3을 나눈 [.166667,-.333333]이다. 따라서 (D.T @ error)/len(y)를 쓴다. “평균이니까 mean”보다 어느 축을 평균 내야 하는지가 먼저다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-고친-평균-기울기가-맞으면-1-3-전체도-끝난-것인가",
      "title": "고친 평균 기울기가 맞으면 1-3 전체도 끝난 것인가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-고친-평균-기울기가-맞으면-1-3-전체도-끝난-것인가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "return (design.T @ (probability-target))/len(target)로 바꾼 뒤 맞는지 물었다.",
      "intent": "국소적인 수정의 타당성과 전체 빈칸 완성을 확인하려는 질문이다.",
      "answer": "그 식은 이 평균 로그 손실의 기울기에 맞는다. 여섯 샘플 초기값에서는 [0,-3.5]/6=[0,-.583333…]이다. 다만 당시 final_binary_loss, final_probability, final_label, binary_error_indices에는 None이 남아 있었다. 기울기 한 줄의 확인을 전체 실습 완료로 기록하지 않는다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-label은-정답-여부인가-final_label은-무엇인가",
      "title": "label은 정답 여부인가? final_label은 무엇인가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-label은-정답-여부인가-final_label은-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "label의 뜻을 묻고 간략한 설명을 요청한 뒤 final_label이 예측 라벨인지 확인했다.",
      "intent": "0과 1이라는 클래스 이름을 맞음·틀림 표시와 분리하려는 질문이다.",
      "answer": "라벨은 데이터의 클래스 이름이다. 정답 라벨은 실제 분류, 예측 라벨은 모델의 판단이다. final_label은 최종 확률로 정한 예측 라벨이다. 0이라고 틀리고 1이라고 맞는 것이 아니라, 예측 라벨과 정답 라벨이 같은지를 비교해 맞았는지 판단한다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-indices는-무엇이며-오류-위치를-어떻게-구하는가",
      "title": "indices는 무엇이며 오류 위치를 어떻게 구하는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-indices는-무엇이며-오류-위치를-어떻게-구하는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "마지막 binary_error_indices 줄의 뜻과 코드·이유를 연달아 물었다.",
      "intent": "예측 차이의 값과 틀린 샘플의 위치를 구별하려는 질문이다.",
      "answer": "indices는 index의 복수형이다. 설명용 정답 [0,1,1], 예측 [0,0,1]을 비교하면 [False,True,False]다. np.flatnonzero(예측 != 정답)은 True인 위치 [1]을 반환한다. 예측-정답은 차이 [0,-1,0]를 계산할 뿐 위치 배열을 만드는 식이 아니다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-여러-개가-틀리면-flatnonzero는-하나만-반환하는가",
      "title": "여러 개가 틀리면 flatnonzero는 하나만 반환하는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-여러-개가-틀리면-flatnonzero는-하나만-반환하는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "오류가 한 개인 예시를 본 뒤 여러 개일 때를 물었다.",
      "intent": "반환값이 단일 번호인지 가변 길이 배열인지 확인하려는 질문이다.",
      "answer": "모든 오류 위치를 반환한다. 설명용 정답 [0,1,1,0], 예측 [1,1,0,1]이면 비교 결과 [True,False,True,True], 결과는 [0,2,3]이다. 전부 맞으면 길이 0인 배열이다. 일반 배열에서는 펼친 배열의 위치를 반환하므로 여기처럼 1차원 라벨을 비교한다는 조건을 확인한다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-flatnonzero에-전달하는-것은-조건문인가-불리언-series인가",
      "title": "flatnonzero에 전달하는 것은 조건문인가, 불리언 Series인가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-flatnonzero에-전달하는-것은-조건문인가-불리언-series인가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "np.flatnonzero(pred_metric != y_metric)에 어떤 타입이 들어가는지 아직 이해되지 않는다고 말했다.",
      "intent": "함수 호출 전에 내부 표현식이 평가된다는 점을 구체적으로 확인하려는 질문이다.",
      "answer": "두 변수가 NumPy 배열이면 먼저 원소별 비교가 끝난 불리언 ndarray가 만들어진다. pandas Series가 아니다. different=pred_metric!=y_metric 다음 flatnonzero(different)라고 두 줄로 써도 같다. 함수가 조건문 코드를 전달받는 것이 아니라 계산된 배열 값을 받는다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-tpfpfntn에서-positive와-true는-각각-무엇인가",
      "title": "TP·FP·FN·TN에서 Positive와 True는 각각 무엇인가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-tpfpfntn에서-positive와-true는-각각-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "오전에는 지표 용어를, 오후에는 정답·예측을 네 종류로 나누는 필수 2를 물었다.",
      "intent": "두 글자의 기준을 나눠 오류 종류를 읽으려는 질문이다.",
      "answer": "이 이진 문제에서 관심 대상으로 정한 class 1이 Positive다. 뒤의 P/N은 예측, 앞의 T/F는 그 판단이 맞았는지다. 정답·예측이 (1,1)이면 TP, (0,1)이면 FP, (1,0)이면 FN, (0,0)이면 TN이다. Positive가 항상 “좋은 상태”를 뜻하지 않는다. 불량을 1로 두면 불량 탐지가 양성이다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-sum을-하면-숫자-하나가-되는데-그것이-맞는가",
      "title": "sum을 하면 숫자 하나가 되는데 그것이 맞는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-sum을-하면-숫자-하나가-되는데-그것이-맞는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "TP·FP·FN·TN 조건에 np.sum을 적용하면 상수처럼 하나가 되는 점을 지적했다.",
      "intent": "위치 찾기와 개수 세기의 다른 반환 형태를 구별하려는 질문이다.",
      "answer": "여기서는 개수를 구하므로 스칼라가 맞다. TP 조건 [True,False,True,...]의 합은 2다. flatnonzero(조건)은 [0,2]라는 위치 배열, sum(조건)은 2라는 개수다. 두 조건을 원소별로 모두 만족시키려면 (y==1) & (pred==1)처럼 각 비교를 괄호로 묶는다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-남은-정확도정밀도재현율f1은-어떻게-계산하는가",
      "title": "남은 정확도·정밀도·재현율·F1은 어떻게 계산하는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-남은-정확도정밀도재현율f1은-어떻게-계산하는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "남은 지표 계산을 요청했고 예제에서 두 수치가 같게 나왔다.",
      "intent": "숫자가 우연히 같아도 분모가 무엇을 세는지 확인하려는 질문이다.",
      "answer": "대화의 TP=2, FP=1, FN=1, TN=6에서 accuracy=8/10=.8, precision=2/(2+1), recall=2/(2+1), F1=2/3이다. 정밀도의 분모는 1이라고 예측한 세 개, 재현율의 분모는 실제 1인 세 개로 구성원이 다르다. 이 수치는 해당 예제의 분모가 모두 양수인 경우다. 평가 코드에서는 양성 예측이 없는 경우의 처리도 확인한다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-모두-0으로-예측해도-정확도가-높다면-좋은-모델인가",
      "title": "모두 0으로 예측해도 정확도가 높다면 좋은 모델인가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-모두-0으로-예측해도-정확도가-높다면-좋은-모델인가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "오전에는 정확도의 한계를, 오후에는 전부 0으로 예측하는 기준 모델의 지표를 물었다.",
      "intent": "클래스 수가 치우친 상황에서 모델이 놓치는 것을 찾으려는 질문이다.",
      "answer": "오후 예제는 실제 0이 7개, 1이 3개다. 모두 0으로 예측하면 정확도 .7이지만 양성 재현율은 0이다. 오전의 정상 9,990개·불량 10개 설명용 예에서는 정확도 .999여도 불량을 하나도 못 찾을 수 있다. 어떤 오류가 중요한지에 맞춰 정확도와 정밀도·재현율을 함께 읽는다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-logisticregressionscore는-손실을-반환하는가",
      "title": "LogisticRegression.score는 손실을 반환하는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-logisticregressionscore는-손실을-반환하는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "오전 Wine 코드의 score 메서드가 무엇을 하는지 물었다.",
      "intent": "학습 손실과 라이브러리 기본 평가값을 구별하려는 질문이다.",
      "answer": "이 분류기의 score(X,y)는 예측 라벨을 구해 정확도를 계산한다. 로그 손실이 아니다. 예를 들어 네 개 중 세 개를 맞히면 .75다. 같은 이름의 LinearRegression.score는 R²를 반환하므로 score라는 이름만 보고 모든 모델에 같은 지표를 대입하지 않는다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-make_pipeline을-호출하면-이미-학습한-것인가",
      "title": "make_pipeline을 호출하면 이미 학습한 것인가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-make_pipeline을-호출하면-이미-학습한-것인가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "StandardScaler와 LogisticRegression을 연결한 줄의 뜻을 물었다.",
      "intent": "단계 구성과 실제 fit·predict 실행을 나누려는 질문이다.",
      "answer": "호출 시점에는 두 단계를 가진 객체를 만든다. pipeline.fit(X_train,y_train)에서 scaler가 학습 평균·표준편차를 저장하고 X_train을 변환한 뒤 분류기가 학습한다. predict에서는 저장한 같은 기준으로 X_test를 변환하고 예측한다. 평가 데이터로 scaler를 새로 fit하면 평가 정보가 학습에 새는 문제가 생긴다. 설명용 평균10·표준편차2에서 새 값14의 변환은 2다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-wine의-x와-y-분할-결과는-어떤-모양인가",
      "title": "Wine의 X와 y, 분할 결과는 어떤 모양인가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-wine의-x와-y-분할-결과는-어떤-모양인가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "필수 3의 make_pipeline 이외 나머지 코드도 설명해 달라고 했다.",
      "intent": "데이터 준비에서 평가까지 행 수가 어떻게 유지되는지 확인하려는 질문이다.",
      "answer": "load_wine(return_X_y=True)의 X는 (178,13), y는 (178,)이다. 라벨은 종류 0·1·2다. test_size=.25이면 학습133개·평가45개이고 stratify=y는 클래스 비율이 비슷하도록 나눈다. X와 y를 함께 넘기면 같은 행끼리 분할된다. random_state는 같은 조건의 분할 재현에 쓰인다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-wine_probawine_predwine_classes와-기준-모델은-각각-무엇인가",
      "title": "wine_proba·wine_pred·wine_classes와 기준 모델은 각각 무엇인가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-wine_probawine_predwine_classes와-기준-모델은-각각-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "필수 3에서 None으로 남긴 값과 most_frequent 모델의 역할이 설명됐다.",
      "intent": "확률·라벨·열 이름·비교 기준을 구분하려는 질문이다.",
      "answer": "학습 후 평가45개에 대해 proba는 (45,3), pred는 (45,), classes는 확률 열에 대응하는 [0,1,2]다. 세 클래스 중 최대 확률의 클래스를 고르므로 꼭 .5를 넘어야 하는 것은 아니다. DummyClassifier의 most_frequent는 학습 정답에서 가장 흔한 종류를 저장해 항상 그 종류를 예측한다. max_iter=3000은 최대 반복 수이며 반드시 3,000회 학습한다는 뜻은 아니다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-wine_metrics는-왜-따로-필요하며-무엇을-담는가",
      "title": "wine_metrics는 왜 따로 필요하며 무엇을 담는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-wine_metrics는-왜-따로-필요하며-무엇을-담는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "나머지 코드를 설명하는 답변에서 wine_metrics가 빠져 사용자가 이를 지적했다.",
      "intent": "생략된 평가 결과 저장 단계까지 완결된 흐름으로 이해하려는 요청이다.",
      "answer": "여러 평가 결과를 이름과 함께 담는 딕셔너리다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-none-검사shape-검사확률-합-검사는-무엇을-보장하는가",
      "title": "None 검사·shape 검사·확률 합 검사는 무엇을 보장하는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-none-검사shape-검사확률-합-검사는-무엇을-보장하는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "필수 3 코드 설명에 any, assert, allclose와 출력문의 의미가 포함됐다.",
      "intent": "구조를 확인한 것과 성능을 평가한 것을 구별하려는 질문이다.",
      "answer": "None 검사는 미입력 여부, shape 검사는 평가 샘플 수×클래스 수, allclose(proba.sum(axis=1),1)은 행별 확률 합을 확인한다. 이것만으로 정답을 잘 맞혔다거나 실습이 통과했다고 볼 수 없다. wine_errors=np.flatnonzero(wine_pred!=y_test)는 평가 배열 안의 오류 위치이며 원본 행 번호와는 별도다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-필수-3과-필수-4는-무엇이-달라지는가",
      "title": "필수 3과 필수 4는 무엇이 달라지는가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-필수-3과-필수-4는-무엇이-달라지는가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "복잡한 설명이 어렵다고 말한 뒤 “class 0과 1만 구별한다”는 문장을 앞 문제와 연결해 달라고 했다.",
      "intent": "새 문제에서 데이터와 예측 대상이 어떻게 바뀌는지 다시 잡으려는 질문이다.",
      "answer": "필수 3은 종류 0·1·2 세 개를 구별하고, 필수 4는 종류 2의 행을 제외해 0·1만 구별하는 새 이진 문제다. 2를 0으로 바꾸는 것이 아니다. 다중 클래스 혼동행렬은 3×3이고 TP·FP·FN·TN을 말하려면 어느 클래스를 양성으로 볼지 정해야 한다. 새 이진 문제에서는 그 기준을 1로 두고 앞의 네 칸을 적용할 수 있다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-npisin과-같은-mask를-xy에-쓰는-줄은-무엇인가",
      "title": "np.isin과 같은 mask를 X·y에 쓰는 줄은 무엇인가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-npisin과-같은-mask를-xy에-쓰는-줄은-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "필수 4 준비 코드를 한 줄씩 설명해 달라고 했다.",
      "intent": "선택 조건과 실제 선택, 특징·정답의 짝 유지 과정을 확인하려는 질문이다.",
      "answer": "mask=np.isin(target,[0,1])은 각 라벨이 0 또는 1인지 표시하는 길이178 불리언 배열이다. data[mask], target[mask]로 같은 행만 선택한다. 선택 후 X는 (130,13), y는 (130,)이다. mask를 만든 순간 원본 데이터가 삭제되는 것은 아니다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-binary_source_rows와-class_names는-학습할-특성인가",
      "title": "binary_source_rows와 class_names는 학습할 특성인가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-binary_source_rows와-class_names는-학습할-특성인가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "필수 4에서 원본 행 번호와 클래스 이름 딕셔너리를 만드는 코드도 이어 설명해 달라고 했다.",
      "intent": "모델 입력과 결과 해석을 위한 부가 정보를 구별하려는 질문이다.",
      "answer": "flatnonzero(mask)는 남긴 행의 원본 위치다. 예를 들어 mask=[True,False,True]이면 [0,2]여서 새 배열 위치1의 원본 위치가 2임을 알 수 있다. class_names={i:str(target_names[i]) for i in [0,1]}은 {0:'class_0',1:'class_1'} 같은 이름표다. 둘 다 이 코드에서는 학습 특성으로 주는 값이 아니다."
    },
    {
      "id": "learning/2026-10-08-wine-classification#질문-배열-세-개를-split에-넘기면-반환값은-왜-여섯-개인가",
      "title": "배열 세 개를 split에 넘기면 반환값은 왜 여섯 개인가?",
      "url": "/notes/learning/2026-10-08-wine-classification#질문-배열-세-개를-split에-넘기면-반환값은-왜-여섯-개인가",
      "topic": "머신러닝",
      "sourceTitle": "분류 실습의 값과 타입 읽기: 라벨·오류 위치·Wine 평가",
      "context": "특징·정답·원본 행 번호를 함께 분할하는 긴 대입문을 물었다.",
      "intent": "행의 짝과 반환 순서를 눈으로 따라가려는 질문이다.",
      "answer": "각 입력마다 train·test가 한 쌍씩 반환된다. 순서는 X_train,X_test,y_train,y_test,rows_train,rows_test다. 동일한 기준으로 나누므로 한 와인의 특징·정답·원본 번호가 함께 이동한다. 130개를 test_size=.25로 나누면 학습97개·평가33개다. 준비된 Pipeline 객체는 이후 fit을 해야 학습된다. 준비 코드 설명을 최종 학습·평가 완료로 기록하지 않는다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-제곱오차의-합이-왜-14w10라는-함수가-되는가",
      "title": "제곱오차의 합이 왜 14(w−10)²라는 함수가 되는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-제곱오차의-합이-왜-14w10라는-함수가-되는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "10월 2일에는 각 오차를 제곱해 더하는 SSE와 교재의 C(w)=14(w−10)²가 다른 계산처럼 보인다고 물었다.",
      "intent": "숫자로 구한 오차와 파라미터를 남긴 함수가 같은 계산인지 확인하려는 질문이다.",
      "answer": "대화의 입력은 $x=[1,2,3]$, 정답은 $y=[10,20,30]$, 예측은 $wx$다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-오차는-예측정답인가-정답예측인가",
      "title": "오차는 예측−정답인가, 정답−예측인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-오차는-예측정답인가-정답예측인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "10월 2일에는 오차의 부호가 중요하다고 짚었고, 10월 7일에는 error와 residual이 단순히 부호만 다른지 물었다.",
      "intent": "부호가 미분과 갱신 방향에 미치는 영향, 통계 용어의 차이를 구별하려는 질문이다.",
      "answer": "이 글의 계산은 e = prediction - target으로 통일한다. 정답 10, 예측 8이면 e=-2다. 잔차를 y-ŷ로 정의하면 +2이며 제곱은 같다. 미분은 선택한 정의에 맞게 끝까지 일관되게 해야 한다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-dw에는-왜-x를-곱하고-db에는-곱하지-않는가",
      "title": "dW에는 왜 x를 곱하고 db에는 곱하지 않는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-dw에는-왜-x를-곱하고-db에는-곱하지-않는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "예측식 wx+b를 학습시키는 코드에서 두 미분식이 다른 이유를 물었다.",
      "intent": "외운 공식 대신 각 파라미터가 예측을 바꾸는 정도를 알고 싶은 질문이다.",
      "answer": "$e_i=wx_i+b-y_i$, $J=\\frac1{2n}\\sum_i e_i^2$라 두면 연쇄법칙으로"
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-제곱을-미분했는데-앞의-2는-어디로-갔는가",
      "title": "제곱을 미분했는데 앞의 2는 어디로 갔는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-제곱을-미분했는데-앞의-2는-어디로-갔는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "dW와 db 식에 2가 없는 이유를 다시 물었다.",
      "intent": "MSE와 반 MSE의 정의 차이가 생략된 것인지 확인하려는 질문이다.",
      "answer": "MSE $\\frac1n\\sum e_i^2$의 미분에는 2가 있다. 반 MSE $\\frac1{2n}\\sum e_i^2$에서는 2가 약분된다. MSE라고 써 두고 2를 생략했다면 정확한 미분식은 아니다. 정규화 항이 없는 같은 문제에서 갱신 폭만 보면 학습률을 절반으로 둔 MSE 경사하강법과 같지만, 손실 이름과 미분 정의는 구별해서 적는다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-파라미터를-갱신한-뒤의-mse는-무엇으로-계산하는가",
      "title": "파라미터를 갱신한 뒤의 MSE는 무엇으로 계산하는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-파라미터를-갱신한-뒤의-mse는-무엇으로-계산하는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "새 w와 b를 구한 뒤 이전 error로 new_mse를 계산하는 코드가 설명됐다.",
      "intent": "갱신된 모델을 평가하는 순서를 확인하려는 질문이다.",
      "answer": "새 파라미터로 예측부터 다시 만든다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-none을-채웠는데-왜-아직-미완성-안내가-나오는가",
      "title": "None을 채웠는데 왜 아직 미완성 안내가 나오는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-none을-채웠는데-왜-아직-미완성-안내가-나오는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "any(v is None for v in ...) 검사와 셀에 남아 있는 출력에 관해 물었다.",
      "intent": "코드에 적힌 값과 실제 실행 상태를 구별하려는 질문이다.",
      "answer": "any는 검사 대상 중 하나라도 None이면 참이다. 수정 후 해당 셀을 다시 실행하지 않으면 이전 출력은 그대로 남을 수 있다. 반대로 None을 0이나 빈 딕셔너리로 바꾸기만 해도 이 검사는 통과한다. None 검사는 값이 채워졌는지만 확인하며 계산이 맞다는 증거가 아니다. 대화에서 제공한 수정 설명을 재실행 성공으로 보지 않는다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-npc_로-만든-xb와-theta에는-실제로-무엇이-들어-있는가",
      "title": "np.c_로 만든 Xb와 theta에는 실제로 무엇이 들어 있는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-npc_로-만든-xb와-theta에는-실제로-무엇이-들어-있는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "Xb = np.c_[np.ones(len(x)), x]의 결과를 두 차례 물었다.",
      "intent": "편향과 기울기를 배열의 어느 자리에 넣는지 확인하려는 질문이다.",
      "answer": "x=[0,1,2]이면 Xb는 [[1,0],[1,1],[1,2]], shape은 (3,2)다. theta=[b,w]라 두면 각 행의 곱은 1*b+x*w다. np.ones(3)은 기본적으로 실수형 ndarray [1.,1.,1.]이고 파이썬 리스트와 타입이 다르다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-입력-앞에-1의-열을-꼭-붙여야-하는가",
      "title": "입력 앞에 1의 열을 꼭 붙여야 하는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-입력-앞에-1의-열을-꼭-붙여야-하는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "Xb를 만든 뒤에도 1을 붙이는 필요성을 따로 물었다.",
      "intent": "편향을 넣는 구현 방식과 모델 자체의 조건을 구분하려는 질문이다.",
      "answer": "b를 따로 더해도 된다. 1의 열은 편향까지 하나의 파라미터 벡터와 행렬곱으로 묶는 방법이다. X @ w + b와 [1,X] @ [b,w]는 같은 예측을 표현한다. scikit-learn의 기본 LinearRegression은 절편을 자체 처리하므로 원래 X를 전달한다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-design-parameter-target은-xb-theta-y와-다른-값인가",
      "title": "design, parameter, target은 Xb, theta, y와 다른 값인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-design-parameter-target은-xb-theta-y와-다른-값인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "함수 정의에서 변수 이름이 바뀌자 실제 전달값과의 관계를 물었다.",
      "intent": "호출부의 이름과 함수 매개변수 이름을 연결하려는 질문이다.",
      "answer": "gradient(Xb, theta, y)를 호출하면 함수 안의 design, parameter, target이 차례로 그 값을 받는다. 이름이 다르다고 새 데이터가 생기지 않는다. 이 코드에서 parameter는 수학의 파라미터 벡터를 받는 함수 인자이고, theta는 호출부에서 그 벡터를 가리키는 이름이다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-평균-기울기는-그냥-기울기와-다른-것인가",
      "title": "평균 기울기는 그냥 기울기와 다른 것인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-평균-기울기는-그냥-기울기와-다른-것인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "행별 미분을 평균 낸다는 설명 뒤에 “평균 기울기”의 의미를 재차 물었다.",
      "intent": "개별 손실의 미분과 전체 손실의 미분을 연결하려는 질문이다.",
      "answer": "평균 손실의 기울기가 각 행 손실의 기울기 평균이다. 미분과 유한합을 바꿔 계산할 수 있어서다. x=[0,1,2], y=[1,3,5], theta=[0,0]이면 반 제곱손실의 행별 [db,dw]는 [-1,0], [-3,-3], [-5,-10]이고 평균은 [-3,-13/3]이다. “평균 기울기”가 별도의 미분 종류인 것은 아니다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-npasarray는-무엇을-바꾸는가",
      "title": "np.asarray는 무엇을 바꾸는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-npasarray는-무엇을-바꾸는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "학습 함수 앞부분의 np.asarray가 하는 일을 물었다.",
      "intent": "입력 변환과 새 배열 생성의 차이를 알고 싶은 질문이다.",
      "answer": "리스트 같은 입력을 NumPy 배열로 취급할 수 있게 변환한다. dtype=float를 지정하면 실수형을 요구한다. 이미 조건에 맞는 ndarray면 항상 복사본을 만들지는 않는다. 배열로 바꿨다는 이유만으로 shape이 자동으로 학습에 맞아지는 것도 아니다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-theta---에서--는-원래-파이썬-문법인가",
      "title": "theta -= ...에서 -=는 원래 파이썬 문법인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-theta---에서--는-원래-파이썬-문법인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "파라미터 갱신에 쓰인 축약 대입 연산자를 물었다.",
      "intent": "수학 갱신식과 파이썬 대입을 연결하려는 질문이다.",
      "answer": "t -= delta는 t에서 delta를 빼 다시 반영하는 증강 대입이다. 숫자 10에서 3을 빼면 7이다. NumPy 배열에서는 같은 자리의 원소를 갱신하며 dtype 제약을 받는다. 리스트에는 원소별 뺄셈이 정의되지 않아 같은 방식으로 쓸 수 없다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-데이터가-세-개면-입력-변수도-세-개인가",
      "title": "데이터가 세 개면 입력 변수도 세 개인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-데이터가-세-개면-입력-변수도-세-개인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "x=3을 예측하는 코드와 입력 데이터 개수를 혼동해 질문했다.",
      "intent": "샘플 수와 특성 수, 새 입력 하나를 구별하려는 질문이다.",
      "answer": "x=[0,1,2]는 특성 하나를 가진 샘플 세 개다. 새 입력 x=3은 네 번째 샘플이 될 수 있다. 편향을 포함한 새 행은 [1,3]이고 [1,3] @ [b,w]=b+3w다. 특성 하나당 가중치 하나라는 구조는 샘플을 더 넣어도 바뀌지 않는다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-반복을-2000번-하면-데이터도-2000개인가",
      "title": "반복을 2,000번 하면 데이터도 2,000개인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-반복을-2000번-하면-데이터도-2000개인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "for _ in range(2000)이 같은 데이터에 적용되는지 물었다.",
      "intent": "반복 횟수와 샘플 수의 역할을 나누려는 질문이다.",
      "answer": "이 전체 배치 코드에서는 같은 데이터 세 개로 기울기를 다시 계산하며 theta를 2,000번 갱신한다. 데이터가 늘어나는 것이 아니다. _는 여기서 반복 번호를 사용하지 않겠다는 관례상의 변수명이다. 파이썬에서 특별히 무시 기능을 가진 예약어는 아니다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-3에서-31을-빼면-왜-오차가-아홉-개가-되는가",
      "title": "(3,)에서 (3,1)을 빼면 왜 오차가 아홉 개가 되는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-3에서-31을-빼면-왜-오차가-아홉-개가-되는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "예측과 정답의 차이를 구하는 코드, 이어서 y[:, None]의 의미를 물었다.",
      "intent": "shape이 달라져도 연산이 되는 이유와 의도하지 않은 결과를 확인하려는 질문이다.",
      "answer": "설명용 예측 [2,4,6]의 shape이 (3,), 정답 [1,3,5]를 열로 만든 shape이 (3,1)이면 브로드캐스팅 결과는 (3,3)이다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-앞에서는-데이터-오차였는데-왜-갑자기-jthetatheta2인가",
      "title": "앞에서는 데이터 오차였는데 왜 갑자기 J(theta)=theta²/2인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-앞에서는-데이터-오차였는데-왜-갑자기-jthetatheta2인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "실제 회귀 예제 뒤에 등장한 단일 파라미터 함수를 앞 손실의 변형으로 읽었다.",
      "intent": "설명의 전제가 새 문제로 바뀌었는지 확인하려는 질문이다.",
      "answer": "이것은 앞의 회귀 손실을 변형한 결과가 아니라 반복 갱신을 보기 위한 별도 장난감 문제다. 여기서는 theta가 숫자 하나이고 J(theta)=theta²/2, J′(theta)=theta다. 함수의 t는 현재 theta, alpha는 고정한 학습률이다. 두 변수를 바꾸어 읽지 않는다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-values에-손실을-넣는-시점은-갱신-전인가-후인가",
      "title": "values에 손실을 넣는 시점은 갱신 전인가 후인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-values에-손실을-넣는-시점은-갱신-전인가-후인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "중첩 반복문, values.append((k,t,t*t/2)), scalar_update 순서를 물었다.",
      "intent": "기록된 반복 번호와 실제 파라미터 상태를 맞추려는 질문이다.",
      "answer": "append가 update보다 앞이면 현재 t의 J를 기록한 뒤 다음 t로 바꾼다. 8회 반복이면 기록은 t₀부터 t₇까지고 t₈은 마지막에 계산되지만 그 코드에서는 기록되지 않는다. t*t/2는 함수식 자체가 아니라 현재 t를 넣은 손실값이다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-values2와-values-12는-각각-무엇을-꺼내는가",
      "title": "values[:2]와 values[-1][2]는 각각 무엇을 꺼내는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-values2와-values-12는-각각-무엇을-꺼내는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "학습 기록 리스트를 출력하는 슬라이싱과 두 번의 인덱싱을 물었다.",
      "intent": "리스트 구조와 선택 결과를 확인하려는 질문이다.",
      "answer": "values가 (반복 번호, t, 손실) 튜플 8개의 리스트라면 values[:2]는 앞의 튜플 두 개다. 원본을 두 개로 줄이지 않는다. values[-1][2]는 마지막 튜플을 고른 뒤 그 안의 세 번째 값인 손실을 꺼낸다. 8×1 NumPy 배열이라고 볼 수 없다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-왜-lenerror나-leny로-나누는가",
      "title": "왜 len(error)나 len(y)로 나누는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-왜-lenerror나-leny로-나누는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "기울기 평균의 분모와 두 길이가 같은 이유를 반복해서 물었다. 10월 8일에도 나누지 않은 식의 의미를 확인했다.",
      "intent": "어느 축의 평균인지 이해하려는 질문이다.",
      "answer": "샘플마다 오차 하나가 있으면 두 길이는 샘플 수 n으로 같다. n으로 나누는 이유는 목적함수가 평균 손실이기 때문이다. 데이터 전체를 두 번 복제하면 합 기울기는 두 배지만 평균 기울기는 같다. 단, 잘못된 브로드캐스팅으로 error가 행렬이 됐다면 len이 같아도 올바른 계산이 아니다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-왜-y가-갑자기-3개에서-442개로-바뀌었는가",
      "title": "왜 y가 갑자기 3개에서 442개로 바뀌었는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-왜-y가-갑자기-3개에서-442개로-바뀌었는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "앞쪽 회귀 셀에서 shape 오류가 났고, 뒤의 diabetes 셀이 같은 이름 y를 사용한 상태가 설명됐다.",
      "intent": "코드가 적힌 순서와 노트북 메모리 상태가 다른 문제를 찾으려는 질문이다.",
      "answer": "노트북 변수는 마지막으로 실행한 대입을 따른다. 아래 셀에서 y를 442개 정답으로 바꿨다면 위 셀의 3개 예측과 맞지 않는다. 관련 데이터 정의부터 다시 실행하거나 y_small, y_diabetes처럼 역할을 나눠 둔다. 원문은 원인과 방법을 설명했으며 이후 재실행 성공을 이 기록에서 확정하지 않는다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-assert와-isclose는-학습을-하는-코드인가",
      "title": "assert와 isclose는 학습을 하는 코드인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-assert와-isclose는-학습을-하는-코드인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "앞선 shape 문제 이후 검증 줄의 동작을 물었다.",
      "intent": "값 계산과 결과 검사를 분리하려는 질문이다.",
      "answer": "np.isclose는 두 수가 허용 오차 안에서 가까운지 비교하고, assert는 조건이 거짓이면 AssertionError를 낸다. 모델을 갱신하지 않는다. 비교할 값을 만드는 연산에서 shape 오류가 먼저 나면 assert까지 도달하지 못한다. 검사 통과 범위는 그 조건뿐이다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-diabetes-데이터는-당뇨병-유무를-분류하는-것인가",
      "title": "diabetes 데이터는 당뇨병 유무를 분류하는 것인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-diabetes-데이터는-당뇨병-유무를-분류하는-것인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "무엇을 설명해 달라는 것인지 불분명했던 요청 다음에 scikit-learn diabetes 데이터셋을 명시했다.",
      "intent": "입력과 예측 대상이 무엇인지 확인하려는 질문이다.",
      "answer": "이 실습은 당뇨병 유무 0/1 분류가 아니라 질병 진행 정도라는 수치 목표를 예측하는 회귀다. load_diabetes의 입력은 442행, 10특성이고 정답은 (442,)다. 데이터셋 이름만으로 분류 문제라고 판단하지 않는다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-train_test_split은-무엇을-보고-무엇을-나누는가",
      "title": "train_test_split은 무엇을 보고 무엇을 나누는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-train_test_split은-무엇을-보고-무엇을-나누는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "인덱스만 넘긴 분할 코드에서 함수가 X와 y를 자동으로 찾는지 물었다.",
      "intent": "함수에 전달한 인자와 주변 변수 사이의 경계를 확인하려는 질문이다.",
      "answer": "train_test_split(np.arange(len(y)), ...)는 전달한 행 번호 배열을 나눈다. X나 y를 자동으로 찾지 않는다. test_size=.25라면 12개 중 학습 9개, 평가 3개가 되는 식이다. 일반적인 무작위 분할은 섞어서 고르고 random_state를 고정하면 같은 입력과 설정에서 같은 분할을 재현한다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-y_train--ytrain_idx에서는-실제-정답을-나누는-것이-맞는가",
      "title": "y_train = y[train_idx]에서는 실제 정답을 나누는 것이 맞는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-y_train--ytrain_idx에서는-실제-정답을-나누는-것이-맞는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "인덱스만 나눈다는 설명 뒤에 사용자가 가리킨 줄은 y를 인덱싱하는 별도 줄이었다.",
      "intent": "설명 대상이 바뀌었을 때 각 줄의 결과를 정확히 구별하려는 질문이다.",
      "answer": "그 줄에서는 실제 y값을 선택하는 것이 맞다. train_idx는 행 번호, y[train_idx]는 그 번호에 있는 정답이다. 같은 인덱스로 X[train_idx]도 선택해야 입력과 정답의 짝이 맞는다. “분할 함수는 인덱스를 반환한다”와 “그 인덱스로 정답값을 선택한다”는 서로 다른 단계다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-regression_results는-모델인가-결과를-넣는-변수인가",
      "title": "regression_results는 모델인가, 결과를 넣는 변수인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-regression_results는-모델인가-결과를-넣는-변수인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "한 번에 한 부분씩 설명해 달라고 한 뒤 첫 TODO의 역할을 물었다.",
      "intent": "저장할 결과의 타입부터 파악하려는 질문이다.",
      "answer": "모델별 평가 결과를 담는 딕셔너리다. 예를 들어 모델 이름을 키, 그 모델의 평가 MSE를 값으로 저장한다. 딕셔너리를 만든 것만으로 모델이 학습되거나 점수가 계산되지는 않는다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-빈칸-순서와-실제-fitpredict-순서가-왜-다른가",
      "title": "빈칸 순서와 실제 fit·predict 순서가 왜 다른가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-빈칸-순서와-실제-fitpredict-순서가-왜-다른가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "결과 저장 TODO를 먼저 본 뒤 힌트를 요청했고, 전체 풀이보다 기존 틀을 유지해 달라고 했다.",
      "intent": "빈칸을 채우는 일과 데이터가 계산되는 순서를 연결하려는 질문이다.",
      "answer": "실행 순서는 모델 생성 → 학습 자료로 fit → 평가 입력으로 predict → 정답과 비교해 MSE → 결과 저장이다. 코드 위치가 먼저 보인다고 결과 딕셔너리부터 계산할 수는 없다. 원문의 LAB 틀을 확인하기 전 제안된 불필요한 초기값은 정답 근거로 삼지 않는다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-csv를-읽은-값은-dataframe인가-reshape-11은-왜-필요한가",
      "title": "CSV를 읽은 값은 DataFrame인가? reshape(-1,1)은 왜 필요한가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-csv를-읽은-값은-dataframe인가-reshape-11은-왜-필요한가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "np.genfromtxt(..., names=True) 결과의 타입과 입력 열의 모양을 물었다.",
      "intent": "자료 읽기 결과를 모델 입력 규격으로 연결하려는 질문이다.",
      "answer": "이 호출은 pandas DataFrame이 아니라 필드 이름을 가진 NumPy 구조화 배열을 만든다. 한 숫자 필드를 고르면 보통 (n,)이고, 입력 X를 n행 1열로 넘기려고 .reshape(-1,1)을 쓴다. -1은 원소 수에 맞춰 그 차원을 계산하라는 뜻이다. .reshape(,1)처럼 인자를 비울 수 없다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-price_index는-학습해서-만든-값인가",
      "title": "price_index는 학습해서 만든 값인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-price_index는-학습해서-만든-값인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "예제 CSV의 목표 열 이름과 수치가 어디서 왔는지 물었다.",
      "intent": "주어진 정답과 모델이 계산한 예측값을 구분하려는 질문이다.",
      "answer": "대화의 price_index는 예제 CSV에 미리 들어 있는 수치 목표다. 모델이 학습 중 만든 값이 아니며 이름의 index가 곧 배열 행 번호라는 뜻도 아니다. 무엇을 뜻하는 지표인지는 데이터 설명으로 확인해야 한다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-x는-2차원인데-y는-왜-1차원인가",
      "title": "X는 2차원인데 y는 왜 1차원인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-x는-2차원인데-y는-왜-1차원인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "X를 (n,1)로 바꾼 뒤 y도 같은 모양이어야 하는지 물었다.",
      "intent": "입력과 정답의 짝이 맞는 조건을 확인하려는 질문이다.",
      "answer": "X의 행은 샘플, 열은 특성이다. 단일 목표 y는 샘플당 숫자 하나라 (n,)이면 충분하다. 필요한 것은 같은 행 수와 같은 순서이지 항상 같은 rank가 아니다. 이 단일 출력 회귀 코드에서 예측도 (n,)이므로 y와 원소별 비교가 된다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-모델에는-x_test를-넣는데-y_test는-언제-쓰는가",
      "title": "모델에는 X_test를 넣는데 y_test는 언제 쓰는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-모델에는-x_test를-넣는데-y_test는-언제-쓰는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "평가 입력과 정답을 전달하는 줄을 구분해 달라고 했다.",
      "intent": "예측과 채점이 분리되는 이유를 확인하려는 질문이다.",
      "answer": "predict(X_test)는 특징으로 예측한다. y_test는 그 예측과 비교해 MSE 같은 지표를 계산할 때 쓴다. 평가 정답을 모델의 예측 입력으로 주면 무엇을 예측하는지 의미가 달라진다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-linearregressionfit은-한-줄에서-무엇을-하는가",
      "title": "LinearRegression().fit(...)은 한 줄에서 무엇을 하는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-linearregressionfit은-한-줄에서-무엇을-하는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "화면 대상을 특정하지 못한 짧은 요청들이 이어진 뒤 실제 생성·학습 코드를 제시했다.",
      "intent": "객체 생성과 메서드 호출, 반환값을 분리하려는 질문이다.",
      "answer": "LinearRegression()이 객체를 만들고 .fit(X_train,y_train)이 계수를 구해 객체에 저장한다. fit은 학습된 자기 자신을 반환하므로 model = LinearRegression().fit(...)로 받을 수 있다. 학습 후 가중치는 coef_, 절편은 intercept_에서 읽는다. 바깥에 w와 b 변수를 따로 선언할 필요는 없다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-fit은-항상-경사하강법을-뜻하는가",
      "title": "fit은 항상 경사하강법을 뜻하는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-fit은-항상-경사하강법을-뜻하는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "학습률을 주지 않은 LinearRegression이 어떻게 학습되는지 물었다.",
      "intent": "학습 인터페이스와 최적화 방법을 구별하려는 질문이다.",
      "answer": "fit은 라이브러리의 공통 학습 메서드 이름이다. 이 실습의 일반적인 LinearRegression은 최소제곱 문제를 수치적으로 풀며, 사용자가 작성한 고정 학습률 경사하강 반복과 같지 않다. 어떤 solver가 쓰이는지는 모델과 입력 조건에 따라 다르다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-dummyregressor는-입력을-보지-않는데-무엇을-학습하는가",
      "title": "DummyRegressor는 입력을 보지 않는데 무엇을 학습하는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-dummyregressor는-입력을-보지-않는데-무엇을-학습하는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "평균 기준 모델을 fit한다고 부르는 이유를 여러 번 물었다.",
      "intent": "복잡한 입력 관계를 학습하는 모델과 기준값을 저장하는 모델을 비교하려는 질문이다.",
      "answer": "평균 전략의 DummyRegressor는 학습 정답의 평균을 구해 저장한다. 이후 어떤 X를 받아도 그 평균을 행 수만큼 반복한다. 대화의 y_train 합은 174, 개수는 9여서 평균은 19.333333이다. y_test=[14,17,25]에 대한 MSE는 22다. 특징에 따른 관계를 배우지 않아도 비교 기준을 마련할 수 있다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-평균을-직접-계산하면-되는데-왜-기준-모델-객체를-쓰는가",
      "title": "평균을 직접 계산하면 되는데 왜 기준 모델 객체를 쓰는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-평균을-직접-계산하면-되는데-왜-기준-모델-객체를-쓰는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "단순 평균을 모델로 감싸는 필요성을 물었다.",
      "intent": "수동 계산과 라이브러리 인터페이스의 차이를 확인하려는 질문이다.",
      "answer": "np.full(len(X_test), y_train.mean())으로 같은 평균 예측을 만들 수 있다. DummyRegressor는 다른 모델처럼 fit/predict를 제공해 동일한 평가 코드에 넣기 편하다. 객체를 써야만 평균 기준선이 성립하는 것은 아니다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-특성이-여러-개면-그래디언트는-어떤-순서인가",
      "title": "특성이 여러 개면 그래디언트는 어떤 순서인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-특성이-여러-개면-그래디언트는-어떤-순서인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "[b,w₁,w₂]를 담은 theta와 세 숫자인 gradient의 관계를 물었다.",
      "intent": "각 미분값이 어떤 파라미터를 바꾸는지 연결하려는 질문이다.",
      "answer": "편향 열을 첫 열에 두었다면 gradient도 [∂J/∂b, ∂J/∂w₁, ∂J/∂w₂] 순서다. 대화의 네 입력 행 [[1,0,0],[1,1,0],[1,0,1],[1,1,1]], y=[1,3,4,6], 초기 theta=0에서 반 MSE 기울기는 [-3.5,-2.25,-2.5]다. 학습률 .1로 한 번 갱신하면 [.35,.225,.25]가 된다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-왜-예측은-x--theta이고-기울기는-xt--error인가",
      "title": "왜 예측은 X @ theta이고 기울기는 X.T @ error인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-왜-예측은-x--theta이고-기울기는-xt--error인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "10월 7일 행렬식을 물었고, 10월 8일에는 전치가 왜 필요한지 미분과 연결해 달라고 했다.",
      "intent": "shape을 맞추는 요령을 넘어 합산 대상이 바뀌는 이유를 이해하려는 질문이다.",
      "answer": "예측은 한 샘플의 특성들을 가중합한다. 기울기는 같은 파라미터에 대한 여러 샘플의 기여를 합친다. 반 MSE라면 j번째 미분은 $\\frac1n\\sum_i X_{ij}e_i$다. X.T의 j번째 행에 모든 샘플의 j번째 특성이 모이므로 이 합을 행렬곱으로 계산할 수 있다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-x--theta도-각-항을-곱하는데-왜-예측값이-아닌가",
      "title": "X * theta도 각 항을 곱하는데 왜 예측값이 아닌가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-x--theta도-각-항을-곱하는데-왜-예측값이-아닌가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "10월 7일에는 *와 @를 비교했고, 10월 8일 실제 predict 함수의 return X * theta를 진단했다.",
      "intent": "원소별 곱과 가중합의 결과 shape을 구별하려는 질문이다.",
      "answer": "*는 각 항을 곱한 (n,d) 배열을 남긴다. @는 특성 축을 합쳐 샘플별 예측 (n,)을 만든다. 설명용 한 행 [1,1,5,1], theta=[1,2,3,4]라면 원소별 곱은 [1,2,15,4], 내적은 합계 22다. 당시 16행 4열 예측과 정답 16개를 비교하려면 X @ theta가 필요했다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-alpha는-곱셈이-아닌가-정수-theta는-왜-갱신에-실패하는가",
      "title": "alpha(...)는 곱셈이 아닌가? 정수 theta는 왜 갱신에 실패하는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-alpha는-곱셈이-아닌가-정수-theta는-왜-갱신에-실패하는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "10월 8일 경사하강 코드에서 float를 호출한 오류와 정수 배열의 갱신 문제가 설명됐다.",
      "intent": "수식처럼 적은 표현과 파이썬 문법·dtype의 차이를 확인하려는 질문이다.",
      "answer": "alpha(...)는 alpha를 함수처럼 호출한다. 학습률이 숫자라면 alpha * (...)로 곱해야 한다. 또 theta -= 실수배열은 정수 theta에 실수를 제자리 저장하려다 실패할 수 있다. 학습 파라미터를 np.zeros(d, dtype=float)로 준비한다. 제공된 진단을 실제 파일 수정이나 재실행 성공으로 확대하지 않는다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-기울기는-d1인가-d인가-이것도-브로드캐스팅인가",
      "title": "기울기는 (d,1)인가, (d,)인가? 이것도 브로드캐스팅인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-기울기는-d1인가-d인가-이것도-브로드캐스팅인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "그래디언트의 모양을 물은 뒤 1차원 배열이 행렬곱에서 처리되는 방식을 다시 물었다.",
      "intent": "수학의 열벡터 표기와 NumPy의 1차원 배열을 구분하려는 질문이다.",
      "answer": "X.T:(d,n)과 e:(n,)의 @ 결과는 (d,)다. 오른쪽 1차원 피연산자는 계산상 열로 취급된 뒤 추가한 차원이 결과에서 제거된다. e.reshape(-1,1)을 명시하면 결과는 (d,1)이다. 이 1차원 처리 규칙을 원소별 뺄셈의 브로드캐스팅과 혼동하지 않는다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-npmeanxt--error로-평균-기울기를-구하면-안-되는가",
      "title": "np.mean(X.T @ error)로 평균 기울기를 구하면 안 되는가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-npmeanxt--error로-평균-기울기를-구하면-안-되는가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "행렬곱 결과를 mean에 넣는 방법을 제안했다.",
      "intent": "데이터 평균과 파라미터 평균의 차이를 확인하려는 질문이다.",
      "answer": "X.T@error는 이미 샘플 축을 합쳐 파라미터마다 하나씩 남긴 벡터다. 그 벡터 전체의 mean을 구하면 다른 파라미터들을 섞은 스칼라가 된다. 필요한 것은 (X.T @ error) / n이다. 같은 뜻의 식은 np.mean(X * error[:,None], axis=0)으로, 이때는 행별 기여에서 샘플 축만 평균 낸다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-lstsq가-반환하는-값과-theta_ls-_는-무엇인가",
      "title": "lstsq가 반환하는 값과 theta_ls, *_는 무엇인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-lstsq가-반환하는-값과-theta_ls-_는-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "NumPy 최소제곱 함수의 입력·출력과 별표 언패킹을 물었다.",
      "intent": "함수 결과 묶음에서 모델 계수를 꺼내는 과정을 확인하려는 질문이다.",
      "answer": "np.linalg.lstsq(Xb,y,rcond=None)은 계수, 잔차 제곱합 정보, rank, 특이값의 네 결과를 반환한다. theta_ls, *_ = ...는 첫 결과를 theta_ls에, 나머지를 리스트 _에 받는다. 잔차 정보는 rank·배열 크기 조건에 따라 비어 있을 수 있다. rcond는 작은 특이값을 판정하는 상대 기준이며 학습률이 아니다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-최소제곱법과-경사하강법은-서로-다른-목표인가",
      "title": "최소제곱법과 경사하강법은 서로 다른 목표인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-최소제곱법과-경사하강법은-서로-다른-목표인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "lstsq 설명 뒤에 두 이름의 관계를 다시 물었다.",
      "intent": "최적화할 기준과 그 문제를 푸는 알고리즘을 구별하려는 질문이다.",
      "answer": "최소제곱은 제곱오차 합을 작게 만드는 목표다. 경사하강법으로도 그 문제를 풀 수 있고, 선형 최소제곱용 수치 알고리즘으로도 풀 수 있다. “최소제곱”이라는 말만으로 모든 계수를 무작위 탐색한다거나 경사하강법과 배타적이라고 해석하지 않는다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-세-방법의-예측-차이가-작으면-모델-성능이-좋다는-뜻인가",
      "title": "세 방법의 예측 차이가 작으면 모델 성능이 좋다는 뜻인가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-세-방법의-예측-차이가-작으면-모델-성능이-좋다는-뜻인가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "직접 경사하강법·lstsq·LinearRegression의 예측을 비교하는 코드와 max gap을 물었다.",
      "intent": "구현 비교와 정답을 대상으로 한 평가를 구분하려는 질문이다.",
      "answer": "np.max(np.abs(pred_a-pred_b))는 두 방법의 예측이 가장 많이 달랐던 정도다. 정답과 비교한 손실이 아니다. 같은 학습 입력에서 출력이 일치해도 새 데이터 성능을 입증하지 않는다. 모델 평가에는 별도 평가 자료와 정답에 대한 지표가 필요하다."
    },
    {
      "id": "learning/2026-10-07-regression-gradient#질문-코드를-보면-알겠는데-처음부터-쓰기는-왜-어려운가",
      "title": "코드를 보면 알겠는데 처음부터 쓰기는 왜 어려운가?",
      "url": "/notes/learning/2026-10-07-regression-gradient#질문-코드를-보면-알겠는데-처음부터-쓰기는-왜-어려운가",
      "topic": "머신러닝",
      "sourceTitle": "회귀 기울기를 코드로 읽기: 오차·평균·행렬곱·모델 평가",
      "context": "마지막에는 단순 함수 설명을 읽는 것과 직접 풀이 코드를 작성하는 데 차이가 있다고 말했다.",
      "intent": "설명을 따라가는 단계에서 계산 순서를 스스로 구성하는 단계로 넘어가려는 요청이다.",
      "answer": "원문에서는 평균 예측 만들기 → 예측 배열 만들기 → 정답과 비교해 MSE → 이름과 결과 저장처럼 작은 결과를 연결하는 방법을 제안했다. 이 말은 독립 구현을 완료했다는 증거가 아니다. 다시 풀 때 각 줄의 입력·출력 타입과 shape을 먼저 적어 보는 것이 남은 확인 과제다."
    },
    {
      "id": "learning/2026-10-07-values-and-imports#질문-isnamean은-실제로-어떤-값을-반환하는가",
      "title": "isna().mean()은 실제로 어떤 값을 반환하는가?",
      "url": "/notes/learning/2026-10-07-values-and-imports#질문-isnamean은-실제로-어떤-값을-반환하는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "실제 값으로 다시 보기 — 딕셔너리 항목, 그룹 집계와 import",
      "context": "복습 문제에 나온 코드를 실제 값으로 보여 달라고 요청했다.",
      "intent": "중간 불리언 표가 비율을 담은 Series로 바뀌는 과정을 확인하려는 질문이다.",
      "answer": "4행 표에서 나이 열에 결측값이 1개, 점수 열에 2개 있다면 df.isna()는 각 칸의 결측 여부를 같은 크기의 불리언 DataFrame으로 반환한다. .mean()은 기본적으로 열마다 참을 1, 거짓을 0으로 평균 내므로 나이 0.25, 점수 0.50을 반환한다. 결과는 열 이름을 인덱스로 갖는 Series다. 결측 개수와 비율의 계산을 실제 값으로 다시 확인한 예다."
    },
    {
      "id": "learning/2026-10-07-values-and-imports#질문-딕셔너리인데-왜-튜플을-언패킹한다고-하는가",
      "title": "딕셔너리인데 왜 튜플을 언패킹한다고 하는가?",
      "url": "/notes/learning/2026-10-07-values-and-imports#질문-딕셔너리인데-왜-튜플을-언패킹한다고-하는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "실제 값으로 다시 보기 — 딕셔너리 항목, 그룹 집계와 import",
      "context": "실제 값을 보여 달라고 요청한 뒤, 딕셔너리와 튜플은 다른데 왜 튜플 설명이 나오는지 물었다.",
      "intent": "원래 자료구조와 반복 중 반환되는 한 항목의 자료형을 구분하려는 질문이다.",
      "answer": "data={\"사과\":3,\"바나나\":5}에서 data.items()를 순회하면 한 번에 (\"사과\",3) 같은 키·값 튜플 하나를 받는다. for key, value in data.items()는 그 한 항목을 두 이름에 나눠 연결한다. 원래 data가 튜플로 바뀐 것은 아니다. 딕셔너리 뷰와 항목 언패킹의 구분을 다시 적용한 질문이다."
    },
    {
      "id": "learning/2026-10-07-values-and-imports#질문-주문-수에-관한-문장은-왜-관측이-아니라-근거인가",
      "title": "주문 수에 관한 문장은 왜 관측이 아니라 근거인가?",
      "url": "/notes/learning/2026-10-07-values-and-imports#질문-주문-수에-관한-문장은-왜-관측이-아니라-근거인가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "실제 값으로 다시 보기 — 딕셔너리 항목, 그룹 집계와 import",
      "context": "매출 감소를 설명하는 문제에서 문장의 분류 이유를 물었다.",
      "intent": "문장 자체의 내용과 앞의 결론에 대한 역할을 나누려는 질문이다.",
      "answer": "주문 수 100건·주문당 1만 원에서 90건·1만 원이 되면 매출은 100만 원에서 90만 원으로 줄어든다. 주문 수와 평균 금액의 관측은 ‘매출 감소’라는 결론을 뒷받침하는 근거 역할을 한다. 다만 주문 수가 왜 줄었는지는 이 관계만으로 알 수 없다. 문장만 떼면 관측이기도 하므로 분류에는 앞뒤 맥락이 필요하다. 결과 해석과 결론의 범위로 연결한다."
    },
    {
      "id": "learning/2026-10-07-values-and-imports#질문-groupby와-agg는-실제로-어떤-표를-반환하는가",
      "title": "groupby와 agg는 실제로 어떤 표를 반환하는가?",
      "url": "/notes/learning/2026-10-07-values-and-imports#질문-groupby와-agg는-실제로-어떤-표를-반환하는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "실제 값으로 다시 보기 — 딕셔너리 항목, 그룹 집계와 import",
      "context": "orders.groupby('customer_id').agg(total_amt=('amount','sum'))을 실제 값으로 설명해 달라고 한 뒤, 반환값이 Series인지 DataFrame인지 물었다.",
      "intent": "집계 후 한 행의 의미, 인덱스와 열을 확인하려는 질문이다.",
      "answer": "다음 설명용 표는 주문 5행을 고객 3행으로 줄인다. 이름 있는 집계는 total_amt 열을 가진 DataFrame을 반환한다. 열이 하나라는 이유로 Series가 되지는 않는다."
    },
    {
      "id": "learning/2026-10-07-values-and-imports#질문-원래-orders에-고객별-합계-열을-붙이려면-어떻게-하는가",
      "title": "원래 orders에 고객별 합계 열을 붙이려면 어떻게 하는가?",
      "url": "/notes/learning/2026-10-07-values-and-imports#질문-원래-orders에-고객별-합계-열을-붙이려면-어떻게-하는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "실제 값으로 다시 보기 — 딕셔너리 항목, 그룹 집계와 import",
      "context": "새 요약표 대신 기존 주문 표에 값을 추가하는 방법을 물었다.",
      "intent": "고객당 한 행으로 줄이는 집계와 원래 주문 행을 유지하는 계산을 구분하려는 질문이다.",
      "answer": "orders.groupby(\"customer_id\")[\"amount\"].transform(\"sum\")은 원래 행에 대응하는 [4000,7000,4000,7000,4000]의 Series를 반환한다. orders[\"total_amt\"] = ...로 대입할 때 열이 추가된다. transform() 호출 자체가 원본에 열을 추가하지는 않는다. 예약 구성비에서 쓴 transform과 같은 행 대응 원리다."
    },
    {
      "id": "learning/2026-10-07-values-and-imports#질문-모듈패키지라이브러리는-왜-그렇게-부르는가",
      "title": "모듈·패키지·라이브러리는 왜 그렇게 부르는가?",
      "url": "/notes/learning/2026-10-07-values-and-imports#질문-모듈패키지라이브러리는-왜-그렇게-부르는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "실제 값으로 다시 보기 — 딕셔너리 항목, 그룹 집계와 import",
      "context": "구체적인 예를 요청한 뒤, 패키지를 여러 개 담은 디렉터리가 라이브러리인지와 라이브러리의 정확한 뜻을 연이어 물었다.",
      "intent": "파일 개수에 따라 단계가 올라가는 분류인지 확인하려는 질문이다.",
      "answer": "addition.py 같은 파일은 모듈의 한 형태이며, 모듈·하위 패키지를 import 가능한 구조로 묶은 calculator는 패키지다. 라이브러리는 다른 코드가 재사용하도록 제공하는 기능 모음을 뜻한다. 같은 대상이 구조상 패키지이면서 계산 라이브러리일 수 있다. ‘모듈 여러 개 → 패키지 여러 개 → 라이브러리’라는 고정 계층은 아니다. 구조와 역할을 구분한 이전 기록에 연결된다."
    },
    {
      "id": "learning/2026-10-07-values-and-imports#질문-from-뒤에는-모듈과-패키지-모두-올-수-있는가",
      "title": "from 뒤에는 모듈과 패키지 모두 올 수 있는가?",
      "url": "/notes/learning/2026-10-07-values-and-imports#질문-from-뒤에는-모듈과-패키지-모두-올-수-있는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "실제 값으로 다시 보기 — 딕셔너리 항목, 그룹 집계와 import",
      "context": "가져오는 경로의 종류를 확인했다.",
      "intent": "어디에서 무엇을 가져오는지 이름 수준에서 읽으려는 질문이다.",
      "answer": "from calculator import addition은 패키지의 하위 모듈, from calculator.addition import add는 그 모듈의 함수를 가져오는 예다. from calculator import add가 동작하려면 패키지에 해당 이름이 연결되어 있는 등의 조건이 필요하다. 내부 모든 함수가 자동으로 바깥 이름이 되는 것은 아니다. import의 실행과 이름 연결을 참고한다."
    },
    {
      "id": "learning/2026-10-07-values-and-imports#질문-initpy는-어떻게-함수를-패키지에-노출하는가",
      "title": "init.py는 어떻게 함수를 패키지에 노출하는가?",
      "url": "/notes/learning/2026-10-07-values-and-imports#질문-initpy는-어떻게-함수를-패키지에-노출하는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "실제 값으로 다시 보기 — 딕셔너리 항목, 그룹 집계와 import",
      "context": "초기화 파일을 다시 설명해 달라고 한 뒤, 내부에서 실제로 일어나는 동작을 더 자세히 요청했다.",
      "intent": "‘노출’이라는 표현을 함수 객체와 이름 연결로 풀어 이해하려는 질문이다.",
      "answer": "일반 패키지의 __init__.py는 패키지 모듈 객체의 이름 공간에서 실행된다. 그 안에 from .addition import add가 있으면 addition의 함수와 같은 객체를 패키지의 add라는 이름으로도 참조한다. 함수 코드를 복사하거나 덧셈을 미리 수행하는 것이 아니다."
    },
    {
      "id": "learning/2026-10-05-06-linear-algebra-probability#질문-벡터를-더하면-되는데-왜-스칼라를-곱한-합이라고-하나",
      "title": "벡터를 더하면 되는데 왜 스칼라를 곱한 합이라고 하나?",
      "url": "/notes/learning/2026-10-05-06-linear-algebra-probability#질문-벡터를-더하면-되는데-왜-스칼라를-곱한-합이라고-하나",
      "topic": "머신러닝",
      "sourceTitle": "수식을 계산한 뒤 어떻게 해석할까",
      "context": "선형결합을 배우며, 단순한 벡터 덧셈과 다르게 설명하는 이유와 이점을 물었다.",
      "intent": "정의를 외우기보다 계수를 바꿀 수 있게 하면 어떤 질문을 풀 수 있는지 알고 싶다는 요청이다.",
      "answer": "벡터 덧셈 $u+v$는 계수를 모두 1로 정한 선형결합이다. $au+bv$는 각 벡터를 얼마나 사용할지 조절한다. 당시 예의 $u=(1,0),v=(0,1)$에서는 $3u-2v=(3,-2)$가 된다. 계수를 바꾸며 만들 수 있는 모든 결과가 생성 공간이다."
    },
    {
      "id": "learning/2026-10-05-06-linear-algebra-probability#질문-확률변수는-무엇이며-왜-변수를-함수라고-정의하나",
      "title": "확률변수는 무엇이며, 왜 변수를 함수라고 정의하나?",
      "url": "/notes/learning/2026-10-05-06-linear-algebra-probability#질문-확률변수는-무엇이며-왜-변수를-함수라고-정의하나",
      "topic": "머신러닝",
      "sourceTitle": "수식을 계산한 뒤 어떻게 해석할까",
      "context": "확률변수의 정확한 의미를 물은 뒤, 함수라는 설명이 이해되지 않는다고 두 차례 말했다.",
      "intent": "변수의 값과 값을 정하는 규칙을 같은 말로 부르는 듯한 혼란을 풀려는 질문이다.",
      "answer": "확률변수 $X$는 실험 결과를 수로 바꾸는 고정된 규칙이고, 관측값은 그 규칙을 한 결과에 적용해 얻은 수다. 동전 두 번의 결과가 앞뒤이면 앞면 횟수를 세는 $X$의 관측값은 1이다. 모든 변수가 함수라는 뜻은 아니다. 확률변수를 엄밀하게 정의할 때 함수의 개념을 쓴다."
    },
    {
      "id": "learning/2026-10-05-06-linear-algebra-probability#질문-내적을-보면-실제로-무엇을-생각해야-하나",
      "title": "내적을 보면 실제로 무엇을 생각해야 하나?",
      "url": "/notes/learning/2026-10-05-06-linear-algebra-probability#질문-내적을-보면-실제로-무엇을-생각해야-하나",
      "topic": "머신러닝",
      "sourceTitle": "수식을 계산한 뒤 어떻게 해석할까",
      "context": "두 벡터의 길이와 코사인을 곱한다는 공식은 말할 수 있었지만, 그 값을 어떻게 유용하게 해석할지 질문했다.",
      "intent": "내적 공식을 실제 예측 점수나 벡터 비교와 연결하려는 요청이다.",
      "answer": "내적은 대응하는 성분의 기여를 곱해 합한 스칼라다. 당시 예 $x=(3,2),w=(4,-1)$에서는 $x\\cdot w=12-2=10$이다. 선형모델에서는 특성별 기여의 합으로, 벡터 비교에서는 크기와 방향의 일치가 함께 들어간 점수로 읽는다. 코사인 유사도는 두 길이로 나누어 방향을 비교한다."
    },
    {
      "id": "learning/2026-10-05-06-linear-algebra-probability#질문-미분값에는-방향이-담겨-있다고-이해해도-되나",
      "title": "미분값에는 방향이 담겨 있다고 이해해도 되나?",
      "url": "/notes/learning/2026-10-05-06-linear-algebra-probability#질문-미분값에는-방향이-담겨-있다고-이해해도-되나",
      "topic": "머신러닝",
      "sourceTitle": "수식을 계산한 뒤 어떻게 해석할까",
      "context": "미분을 작은 변화에 대한 예측이라고 설명하자, 미분값의 의미가 방향인지 물었다.",
      "intent": "부호만 읽으면 충분한지, 절댓값까지 읽어야 하는지 확인하려는 질문이다.",
      "answer": "부호는 입력을 증가시킬 때 함수가 증가·감소하는 방향을, 절댓값은 그 작은 변화에 얼마나 민감한지를 나타낸다. $\\Delta L\\approx L'(w)\\Delta w$로 읽으면 된다. 도착점에서 기울기가 양수라는 사실만으로 출발점보다 손실이 커졌다고 판단할 수는 없다."
    },
    {
      "id": "learning/2026-10-05-06-linear-algebra-probability#질문-베르누이이항정규분포의-x축은-정확히-무엇인가",
      "title": "베르누이·이항·정규분포의 x축은 정확히 무엇인가?",
      "url": "/notes/learning/2026-10-05-06-linear-algebra-probability#질문-베르누이이항정규분포의-x축은-정확히-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "수식을 계산한 뒤 어떻게 해석할까",
      "context": "베르누이의 x축은 0·1뿐인데 이항분포에서는 여러 정수가 나오며, 정규분포를 이항분포의 $n$을 무한히 늘린 결과로 이해해도 되는지 물었다.",
      "intent": "그래프를 보기 전에 무엇을 세거나 측정하는지를 명확히 하려는 질문이다.",
      "answer": "x축은 정의한 확률변수의 가능한 값이다. 베르누이에서는 한 번의 성공 여부, 이항에서는 정해진 횟수 중 성공 횟수다. 10번 던진 이항분포의 3은 세 번째 시행이 아니라 앞면이 총 3번 나온 결과다. 정규분포는 연속 확률밀도 분포이고, 이항분포의 정규 근사는 관련 성질이지 정의가 아니다."
    },
    {
      "id": "learning/2026-10-05-06-linear-algebra-probability#질문-표준화를-쉬운-설명뿐-아니라-수학적으로-해석하고-싶다",
      "title": "표준화를 쉬운 설명뿐 아니라 수학적으로 해석하고 싶다",
      "url": "/notes/learning/2026-10-05-06-linear-algebra-probability#질문-표준화를-쉬운-설명뿐-아니라-수학적으로-해석하고-싶다",
      "topic": "머신러닝",
      "sourceTitle": "수식을 계산한 뒤 어떻게 해석할까",
      "context": "재구성한 학습 자료를 읽은 뒤 표준화를 이해하기 어렵다고 말하며, 공식 안의 연산을 해석할 수 있을 만큼 자세한 설명을 요청했다.",
      "intent": "평균을 빼고 표준편차로 나누는 두 연산이 각각 무엇을 바꾸는지 알고 싶다는 요청이다.",
      "answer": "$z=(x-\\mu)/\\sigma$는 평균으로 중심을 옮기고 표준편차를 새 단위로 쓴다. $x=80,\\mu=60,\\sigma=10$이면 평균보다 표준편차 2개 위다. 평균 0·분산 1이 되는 이유는 기댓값과 분산의 계산으로 확인할 수 있지만, 표준화가 원래 분포를 정규분포로 바꾸지는 않는다."
    },
    {
      "id": "learning/2026-10-05-06-linear-algebra-probability#질문-그래디언트가-무엇인지는-알겠는데-어떻게-해석하나",
      "title": "그래디언트가 무엇인지는 알겠는데 어떻게 해석하나?",
      "url": "/notes/learning/2026-10-05-06-linear-algebra-probability#질문-그래디언트가-무엇인지는-알겠는데-어떻게-해석하나",
      "topic": "머신러닝",
      "sourceTitle": "수식을 계산한 뒤 어떻게 해석할까",
      "context": "여러 편미분을 모은 벡터라고 직접 설명한 뒤, 정의를 아는 것과 값을 해석하는 것은 다르다고 말했다.",
      "intent": "성분·방향·크기가 실제 손실 변화와 어떤 관계인지 이해하려는 요청이다.",
      "answer": "현재 점 근처에서 $\\Delta L\\approx\\nabla L\\cdot\\Delta w$로 읽는다. 각 성분은 한 좌표의 민감도이며, 실제 이동량과 내적하면 예상 손실 변화가 된다. 같은 유클리드 거리의 작은 이동을 비교하면 그래디언트 방향으로 가장 크게 증가하고 반대로 가장 크게 감소한다. 큰 이동이나 수직 이동의 실제 변화까지 1차 근사와 같다고 보장하지는 않는다."
    },
    {
      "id": "learning/2026-10-05-06-linear-algebra-probability#질문-한-점의-확률이-0이면-왜-불가능하다는-뜻이-아닌가",
      "title": "한 점의 확률이 0이면 왜 불가능하다는 뜻이 아닌가?",
      "url": "/notes/learning/2026-10-05-06-linear-algebra-probability#질문-한-점의-확률이-0이면-왜-불가능하다는-뜻이-아닌가",
      "topic": "머신러닝",
      "sourceTitle": "수식을 계산한 뒤 어떻게 해석할까",
      "context": "한 점의 폭이 0이라 면적도 0이라는 설명은 받아들이면서도, 확률이 0이면 절대 나오지 않는다는 해석을 왜 부정하는지 물었다.",
      "intent": "면적 계산이 아니라 사건의 가능성과 확률값 사이의 논리 관계를 확인하려는 질문이다.",
      "answer": "표본공간이 $[0,1]$인 균등분포에서 ${0.5}$는 비어 있지 않은 사건이지만 확률은 정확히 0이다. 범위 밖의 2가 나오는 사건은 빈 사건이다. 확률은 둘 다 0이지만 사건의 존재 여부는 다르다. 셀 수 없이 많은 점을, 가산 합에 적용되는 확률의 덧셈 규칙으로 합칠 수는 없다."
    },
    {
      "id": "learning/2026-10-05-06-linear-algebra-probability#질문-베이즈-정리를-다시-짚어-줄-수-있나",
      "title": "베이즈 정리를 다시 짚어 줄 수 있나?",
      "url": "/notes/learning/2026-10-05-06-linear-algebra-probability#질문-베이즈-정리를-다시-짚어-줄-수-있나",
      "topic": "머신러닝",
      "sourceTitle": "수식을 계산한 뒤 어떻게 해석할까",
      "context": "표준화·그래디언트·확률 0의 상세 설명을 요청하면서 베이즈 정리도 다시 설명해 달라고 했다.",
      "intent": "조건부확률의 방향과 분모를 수식의 의미에 맞게 읽으려는 요청으로 해석했다.",
      "answer": "$P(A\\mid B)$는 B인 경우만 새 전체로 놓고 A의 비율을 구한다. $P(B\\mid A)$와 분모가 다르다. 당시 설명의 메일 100개에서 스팸은 20개, “무료”가 있는 메일은 24개, 둘 다인 메일은 16개였다. $P(\\text{스팸}\\mid\\text{무료})=16/24$와 $P(\\text{무료}\\mid\\text{스팸})=16/20$을 구분했다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-선형대수는-선형이-아닌-상황에서는-쓸-수-없나",
      "title": "선형대수는 선형이 아닌 상황에서는 쓸 수 없나?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-선형대수는-선형이-아닌-상황에서는-쓸-수-없나",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "선형대수의 이름에서 적용 범위를 추측하며, 비선형적인 상황에도 사용할 수 있는지 물었다.",
      "intent": "앞으로 배울 수학이 어떤 문제까지 다룰 수 있는지 경계를 확인하려는 질문이다.",
      "answer": "선형은 값의 종류가 아니라 변환의 성질이다. 선형대수는 비선형 함수의 국소 근사나 신경망의 선형 계산 부분에도 쓰인다. 전체 모델이 비선형이어도 내부의 행렬곱과 미분 계산에 선형대수가 필요하다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-머신러닝에서-cost는-무엇인가",
      "title": "머신러닝에서 cost는 무엇인가?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-머신러닝에서-cost는-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "모델 학습 설명에 등장한 cost의 뜻을 물었다.",
      "intent": "모델이 학습하면서 줄인다는 숫자가 무엇을 평가하는지 알고 싶다는 질문이다.",
      "answer": "비용은 선택한 기준으로 예측의 나쁨을 수치화한 값이다. 당시에는 회귀의 평균제곱오차를 예로 들었다. 오차가 $-1,2$이면 평균제곱오차는 $(1+4)/2=2.5$다. 모든 비용 함수가 제곱오차인 것은 아니다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-regression과-classification은-무엇이-다른가",
      "title": "regression과 classification은 무엇이 다른가?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-regression과-classification은-무엇이-다른가",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "지도학습 문제를 회귀와 분류로 나누는 기준을 물었다.",
      "intent": "출력이 숫자라는 겉모양보다 예측하려는 대상의 의미를 구분하려는 질문이다.",
      "answer": "회귀는 가격·온도처럼 양을 예측하고, 분류는 스팸 여부처럼 범주를 예측한다. 합격을 1, 불합격을 0으로 표시해도 그 숫자는 범주의 이름이므로 분류다. 같은 공부 시간 자료로 점수를 예측할지 합격 여부를 예측할지에 따라 문제가 달라진다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-hypothesis는-무엇인가",
      "title": "hypothesis는 무엇인가?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-hypothesis는-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "예측식에 붙은 가설이라는 이름을 물었다.",
      "intent": "가설, 비용, 학습이 각각 하는 일을 연결하려는 질문이다.",
      "answer": "가설 함수는 입력을 받아 예측을 계산하는 함수다. 당시 설명의 $h(x)=5x+40$은 $x=4$에서 60을 예측한다. 비용은 그 예측과 정답을 비교하고, 학습은 비용을 줄이도록 5와 40 같은 파라미터를 바꾼다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-cost와-error는-어떻게-다른가",
      "title": "cost와 error는 어떻게 다른가?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-cost와-error는-어떻게-다른가",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "두 용어가 모두 틀린 정도를 나타내는 것 같아 차이를 물었다.",
      "intent": "개별 데이터의 차이와 전체 모델을 평가하는 수치를 구분하려는 질문이다.",
      "answer": "이 회귀 설명에서는 $e_i=\\hat y_i-y_i$를 개별 오차로 정하고, $J=\\frac1m\\sum_i e_i^2$를 비용으로 쓴다. 오차 $-10,20$의 평균제곱오차는 250이다. 교재마다 error·loss·cost를 다르게 쓰므로 명칭보다 실제 식과 평균을 내는 범위를 확인한다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-딥러닝은-지도학습인가-비지도학습인가-강화학습인가",
      "title": "딥러닝은 지도학습인가, 비지도학습인가, 강화학습인가?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-딥러닝은-지도학습인가-비지도학습인가-강화학습인가",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "딥러닝이 학습 방식의 분류 어디에 속하는지 물었다.",
      "intent": "서로 다른 기준으로 나눈 개념을 같은 줄에 놓아도 되는지 확인하려는 질문이다.",
      "answer": "딥러닝은 여러 층의 신경망을 쓰는 방법이고, 지도·비지도·강화학습은 어떤 학습 신호를 사용하는지에 관한 구분이다. 신경망으로 정답이 붙은 사진을 분류할 수도 있고, 정답 표시 없이 구조를 학습하거나 보상을 바탕으로 행동을 학습할 수도 있다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-기울기는-업데이트-방향만-정하나-크기도-정하나",
      "title": "기울기는 업데이트 방향만 정하나, 크기도 정하나?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-기울기는-업데이트-방향만-정하나-크기도-정하나",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "$w_{new}=w-\\eta\\nabla J$를 보고, 기울기가 1뿐 아니라 5도 될 수 있으므로 이동 폭에도 영향을 줄 것이라는 직관을 직접 설명했다.",
      "intent": "학습률이 이동 크기를 정한다는 설명에서 빠진 조건을 확인하려는 질문이다.",
      "answer": "기본 경사하강법의 이동 크기는 학습률과 기울기가 함께 결정한다. 한 변수에서 $|\\Delta w|=\\eta|J'(w)|$다. $\\eta=0.1$일 때 기울기 1, 5, -5는 각각 가중치를 -0.1, -0.5, +0.5만큼 바꾼다. 큰 이동이 더 좋은 학습이라는 뜻은 아니다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-무엇이-하이퍼파라미터인가",
      "title": "무엇이 하이퍼파라미터인가?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-무엇이-하이퍼파라미터인가",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "학습률과 가중치, 기울기가 한 식에 함께 나타나자 무엇을 설정값이라고 부르는지 물었다.",
      "intent": "설정하는 값, 학습으로 바뀌는 값, 현재 상태에서 계산하는 값을 구분하려는 질문이다.",
      "answer": "이 예에서 학습률은 학습 방식을 정하는 하이퍼파라미터, 가중치와 편향은 학습하는 파라미터다. 기울기는 현재 파라미터와 데이터로 계산한 미분값이다. 배치 크기나 모델의 깊이도 하이퍼파라미터가 될 수 있다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-설정이-틀릴-수-있는데-왜-학습한-다음에-validation을-하나",
      "title": "설정이 틀릴 수 있는데 왜 학습한 다음에 validation을 하나?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-설정이-틀릴-수-있는데-왜-학습한-다음에-validation을-하나",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "하이퍼파라미터를 조정하려면 검증이 필요하다면서, 그 설정으로 먼저 학습해야 한다는 순서가 납득되지 않는다고 말했다.",
      "intent": "검증이 설정을 직접 계산하는 단계인지, 학습 결과를 평가하는 단계인지 확인하려는 질문이다.",
      "answer": "어떤 설정이 좋은지는 그 설정으로 학습한 결과를 평가해야 알 수 있다. 후보 설정으로 훈련하고 검증 점수를 보고 다음 후보를 고른다. 검증은 매 에포크 뒤에도 할 수 있지만 일반적인 가중치 갱신에는 훈련 데이터를 쓴다. 검증 성능이 나쁘다는 사실만으로 학습률이 원인이라고 확정할 수는 없다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-하이퍼파라미터도-자동으로-학습해-정할-수-있지-않나",
      "title": "하이퍼파라미터도 자동으로 학습해 정할 수 있지 않나?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-하이퍼파라미터도-자동으로-학습해-정할-수-있지-않나",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "“사람이 직접 정하는 값”이라는 초기 설명에 반문하며, 설정을 찾는 일도 자동화할 수 있지 않느냐고 물었다.",
      "intent": "파라미터와 하이퍼파라미터의 구분이 사람과 컴퓨터의 역할 차이인지 따져 보는 질문이다.",
      "answer": "자동으로 정할 수 있다. 학습률 후보마다 훈련·검증을 반복해 좋은 값을 고르는 것만으로도 자동 튜닝이다. 구분 기준은 사람이 정했는지가 아니라, 모델 내부의 예측 규칙을 학습하는 값인지 그 학습 방식을 정하는 값인지다. 후보 탐색 자체가 반드시 또 하나의 지도학습이나 비지도학습 모델일 필요는 없다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-모델의-복잡도란-정확히-무엇인가",
      "title": "모델의 복잡도란 정확히 무엇인가?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-모델의-복잡도란-정확히-무엇인가",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "모델의 복잡도라는 표현이 무엇을 뜻하는지 물었다. 원문의 “무대의 복잡도”는 당시 문맥에 따라 모델의 복잡도로 해석해 설명했다.",
      "intent": "복잡도가 계산식의 어려움인지, 표현할 수 있는 규칙의 다양함인지 구분하려는 질문이다.",
      "answer": "여기서 복잡도는 모델이 표현할 수 있는 패턴의 자유도를 가리킨다. 다항식의 차수나 트리의 깊이를 늘리면 더 세밀한 모양을 맞출 수 있다. 그만큼 훈련 자료의 우연한 흔들림까지 따라갈 수 있으므로 복잡도가 높다고 새 데이터의 성능이 보장되지는 않는다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-검증-결과가-나쁘면-다시-학습하나-k-fold는-이전-모델을-이어-쓰나",
      "title": "검증 결과가 나쁘면 다시 학습하나? K-fold는 이전 모델을 이어 쓰나?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-검증-결과가-나쁘면-다시-학습하나-k-fold는-이전-모델을-이어-쓰나",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "일반적인 검증 후 재학습과 5개 분할을 사용하는 교차검증을 비교했다. 다음 분할에서 이전 가중치를 이어받는지 명확히 물었다.",
      "intent": "설정 선택의 반복과 폴드별 평가의 반복을 구분하려는 질문이다.",
      "answer": "일반적인 K-fold는 같은 설정으로 폴드마다 모델을 새로 학습한다. 1회차에서 B를 훈련에 쓴 모델을 2회차에서 이어 쓰며 B를 검증하면 이미 본 데이터로 평가하기 때문이다. 설정 후보를 비교할 때도 보통 같은 시작 조건에서 학습한다. 다만 한 번의 훈련 도중 검증에 따라 학습률을 줄여 계속 학습하는 방식도 있으므로 모든 검증 뒤에 반드시 초기화하는 것은 아니다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-k-fold는-검증-데이터에-과적합된-설정을-고르는-것을-막기-위한-것인가",
      "title": "K-fold는 검증 데이터에 과적합된 설정을 고르는 것을 막기 위한 것인가?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-k-fold는-검증-데이터에-과적합된-설정을-고르는-것을-막기-위한-것인가",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "앞 설명을 듣고, 특정 검증 데이터에만 맞는 하이퍼파라미터를 고르는 상황을 피하려는 것이라고 스스로 해석했다.",
      "intent": "여러 번 나누는 비용을 들이는 이유를 일반화 문제와 연결하려는 질문이다.",
      "answer": "특정 한 번의 분할에 평가가 좌우되는 위험을 줄이는 목적은 맞다. 다만 같은 교차검증 결과를 보며 후보를 지나치게 많이 고르면 그 점수에도 맞춰질 수 있다. K-fold가 검증 과적합을 완전히 방지하는 것은 아니므로, 선택에 쓰지 않은 최종 테스트가 여전히 필요하다."
    },
    {
      "id": "learning/2026-10-02-model-and-validation#질문-가중치-세-개가-서로-다른-모든-행을-설명할-수-있나",
      "title": "가중치 세 개가 서로 다른 모든 행을 설명할 수 있나?",
      "url": "/notes/learning/2026-10-02-model-and-validation#질문-가중치-세-개가-서로-다른-모든-행을-설명할-수-있나",
      "topic": "머신러닝",
      "sourceTitle": "모델을 학습하고 검증한다는 말의 의미",
      "context": "집값 데이터의 여러 행에 공통 가중치 세 개를 적용하는 그림을 보고, 각 행의 특징이 다른데 그 정보가 소수의 값으로 압축될 수 있는지 물었다. 상황마다 가중치도 바뀌어야 하지 않느냐는 의문이었다.",
      "intent": "행렬곱의 계산 가능성보다 선형회귀가 가정하는 공통 규칙과 그 한계를 확인하려는 질문이다.",
      "answer": "모든 정답을 정확히 설명하는 가중치가 존재한다는 보장은 없다. 선형회귀는 공통 가중치에 서로 다른 입력을 넣어 예측하고 전체 오차를 줄이는 절충안을 찾는다. 당시 설명처럼 입력이 같은 두 집의 실제 가격이 5억·8억이면 같은 예측 함수로 둘을 정확히 맞힐 수 없으며, 두 집의 제곱오차를 최소화하는 예측은 6.5억이다."
    },
    {
      "id": "learning/2026-10-02-python-numpy-review#질문-args는-어떤-값이고-리스트를-보내면-어떻게-되는가",
      "title": "args는 어떤 값이고, 리스트를 보내면 어떻게 되는가?",
      "url": "/notes/learning/2026-10-02-python-numpy-review#질문-args는-어떤-값이고-리스트를-보내면-어떻게-되는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "복습 중 다시 물은 것 — 인자 전달, NumPy 축과 데이터 해석",
      "context": "*args의 자료형을 묻는 문제에서 시작해, 마지막에는 리스트 하나를 전달하는 경우와 **kwargs까지 다시 물었다.",
      "intent": "이름을 외우기보다 실제로 전달된 인자의 개수와 모이는 자료형을 확인하려는 질문이다.",
      "answer": "def show(*args, **kwargs)에서 남는 위치 인자는 튜플, 남는 키워드 인자는 딕셔너리에 모인다. show([10, 20])의 args는 ([10, 20],)이고, show(10, 20, unit=\"원\")에서는 (10, 20)과 {\"unit\": \"원\"}이다. 리스트 안의 값이 자동으로 별개 인자가 되지는 않는다. 정의에서 모으기와 호출에서 풀기를 구분한다."
    },
    {
      "id": "learning/2026-10-02-python-numpy-review#질문-별표가-반대-역할을-하는데-print의-결과도-튜플인가",
      "title": "별표가 반대 역할을 하는데, print의 결과도 튜플인가?",
      "url": "/notes/learning/2026-10-02-python-numpy-review#질문-별표가-반대-역할을-하는데-print의-결과도-튜플인가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "복습 중 다시 물은 것 — 인자 전달, NumPy 축과 데이터 해석",
      "context": "print(numbers)와 print(*numbers)의 차이를 보며 뒤의 결과를 튜플로 예상했다. 이후 같은 별표가 반대 의미로 쓰여 헷갈린다고 말했다.",
      "intent": "호출 문법의 역할과 호출된 함수의 처리 방식을 분리하려는 질문이다.",
      "answer": "numbers = [10, 20, 30]일 때 print(*numbers)는 print(10, 20, 30)처럼 세 인자를 전달해서 10 20 30을 출력한다. 호출의 *는 튜플 변환이 아니다. def show(*args): print(args)라면 받는 쪽에서 튜플로 모은 뒤 그 튜플을 출력하므로 (10, 20, 30)이 보인다. 같은 입력도 함수가 처리하는 방식에 따라 출력이 다르다."
    },
    {
      "id": "learning/2026-10-02-python-numpy-review#질문-뷰는-무엇이며-왜-y를-바꿨는데-x도-바뀌는가",
      "title": "뷰는 무엇이며, 왜 y를 바꿨는데 x도 바뀌는가?",
      "url": "/notes/learning/2026-10-02-python-numpy-review#질문-뷰는-무엇이며-왜-y를-바꿨는데-x도-바뀌는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "복습 중 다시 물은 것 — 인자 전달, NumPy 축과 데이터 해석",
      "context": "x = np.array([5, 10, 15]); y = x[None, :]에서 y[0, 1] = 77을 실행하는 문제를 읽었다. 첫 설명 후 뷰의 정의 자체를 다시 물었다.",
      "intent": "새 객체가 생기는 일과 실제 데이터를 새로 복사하는 일을 구별하려는 질문이다.",
      "answer": "이 기본 인덱싱은 데이터 메모리를 공유하는 별도 배열 객체를 만든다. 따라서 x는 [5, 77, 15], y는 5, 77, 15가 되지만 shape은 각각 (3,), (1, 3)이다. y is x는 거짓이어도 np.shares_memory(x, y)는 참이다. 수정 후 변경을 복사해서 전달하는 과정이 아니라 처음부터 같은 저장 위치를 사용한다. 독립적인 수치 배열이 필요하면 .copy()를 쓴다. 뷰·복사·shape에 연결된다."
    },
    {
      "id": "learning/2026-10-02-python-numpy-review#질문-axis0은-첫-행인가-행-방향인가-전체-피처를-섞는가",
      "title": "axis=0은 첫 행인가, 행 방향인가? 전체 피처를 섞는가?",
      "url": "/notes/learning/2026-10-02-python-numpy-review#질문-axis0은-첫-행인가-행-방향인가-전체-피처를-섞는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "복습 중 다시 물은 것 — 인자 전달, NumPy 축과 데이터 해석",
      "context": "행은 가로인데 axis=0을 세로라고 부르는 이유를 물었다. 이어 축을 지정하면 원소 하나를 고르는지, 모든 피처를 한 번에 계산하는지 다시 확인했다.",
      "intent": "축 번호와 위치 인덱스, 축소 연산의 묶음을 분리하려는 질문이다.",
      "answer": "2차원 배열에서 axis=0은 행 번호가 변하는 축이다. 축소 연산은 나머지 좌표를 고정하고 지정한 축의 값들을 모은다. X=[[1,2,3],[10,20,30]]이면 mean(axis=0)은 [1,10], [2,20], [3,30]을 각각 평균 내 [5.5,11,16.5]를 만든다. axis=1은 각 행을 묶어 [2,20]을 만든다. X[0, :]처럼 첫 행을 선택하는 문법과 다르다."
    },
    {
      "id": "learning/2026-10-02-python-numpy-review#질문-3차원인데-x-0에는-왜-두-자리만-있는가",
      "title": "3차원인데 x[:, 0]에는 왜 두 자리만 있는가?",
      "url": "/notes/learning/2026-10-02-python-numpy-review#질문-3차원인데-x-0에는-왜-두-자리만-있는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "복습 중 다시 물은 것 — 인자 전달, NumPy 축과 데이터 해석",
      "context": "shape이 (2,3,4)인 배열의 인덱싱을 읽다가 조건이 헷갈린다고 말했다.",
      "intent": "생략된 축과 정수 인덱싱으로 없어진 축을 구분하려는 질문이다.",
      "answer": "뒤의 축을 생략한 x[:, 0]은 x[:, 0, :]와 같다. 두 묶음 모두에서 두 번째 축의 0번 항목과 마지막 축의 전체 값을 선택한다. 정수로 선택한 축이 사라져 결과는 (2,4)이다. x[:, 0:1, :]처럼 슬라이스를 쓰면 길이 1인 축이 남아 (2,1,4)이다."
    },
    {
      "id": "learning/2026-10-02-python-numpy-review#질문-표준화된-값-15에-왜-평균과의-거리라는-의미가-생기는가",
      "title": "표준화된 값 1.5에 왜 평균과의 거리라는 의미가 생기는가?",
      "url": "/notes/learning/2026-10-02-python-numpy-review#질문-표준화된-값-15에-왜-평균과의-거리라는-의미가-생기는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "복습 중 다시 물은 것 — 인자 전달, NumPy 축과 데이터 해석",
      "context": "어떤 피처의 값이 1.5라는 정보만으로 해석할 수 있는지 물었다.",
      "intent": "문제에 붙은 ‘표준화된 데이터’ 조건이 숫자의 의미를 어떻게 바꾸는지 확인하려는 질문이다.",
      "answer": "단순한 원래 값 1.5라면 평균과의 관계를 알 수 없다. 평균을 빼고 양수인 표준편차로 나눈 값이라면 그 단위가 표준편차가 된다. 평균 키 170cm, 표준편차 10cm, 키 185cm인 설명용 예에서 (185-170)/10=1.5이다. 한 샘플의 한 피처가 그 피처 평균보다 표준편차 1.5배만큼 높다는 뜻이다. 피처별 표준화와 연결된다."
    },
    {
      "id": "learning/2026-10-02-python-numpy-review#질문-순서가-다른-두-series는-무엇을-기준으로-합치는가",
      "title": "순서가 다른 두 Series는 무엇을 기준으로 합치는가?",
      "url": "/notes/learning/2026-10-02-python-numpy-review#질문-순서가-다른-두-series는-무엇을-기준으로-합치는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "복습 중 다시 물은 것 — 인자 전달, NumPy 축과 데이터 해석",
      "context": "결측 개수와 비율을 합치는 문제의 질문 자체를 이해하기 어렵다고 말했다.",
      "intent": "값의 물리적인 줄 순서와 인덱스 라벨의 차이를 확인하려는 질문이다.",
      "answer": "pd.DataFrame({\"개수\": counts, \"비율\": ratios})는 Series의 라벨을 맞춘다. counts가 age:20, fare:5, ratios가 fare:0.05, age:0.20 순서여도 age 행에는 20과 0.20이 연결된다. 한쪽에 없는 라벨은 결측값을 만들 수 있다. 결측 요약표의 정렬에 같은 원리를 정리했다."
    },
    {
      "id": "learning/2026-10-02-python-numpy-review#질문-평균값을-추가하면-편차와-분산은-어떻게-달라지는가",
      "title": "평균값을 추가하면 편차와 분산은 어떻게 달라지는가?",
      "url": "/notes/learning/2026-10-02-python-numpy-review#질문-평균값을-추가하면-편차와-분산은-어떻게-달라지는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "복습 중 다시 물은 것 — 인자 전달, NumPy 축과 데이터 해석",
      "context": "[20,40]에 평균 30을 두 번 추가한 예에서 편차와 분산을 실제로 계산해 달라고 했다.",
      "intent": "평균 대체가 분포를 좁히는 이유를 수치로 확인하려는 질문이다.",
      "answer": "평균은 전후 모두 30이다. 편차 제곱 합은 100+100=200으로 같고, ddof=0 분산은 200/2=100에서 200/4=50으로 줄어든다. 추가한 값의 편차는 0인데 분모만 늘었기 때문이다. 다른 분모 기준에서는 수치도 달라진다. 평균 보존이 분산 보존을 뜻하지 않는다는 점을 평균 대체의 한계와 연결한다."
    },
    {
      "id": "learning/2026-10-02-python-numpy-review#질문-데이터-분석-개념지도는-무엇이고-네-분석은-무엇을-하는가",
      "title": "데이터 분석 개념지도는 무엇이고, 네 분석은 무엇을 하는가?",
      "url": "/notes/learning/2026-10-02-python-numpy-review#질문-데이터-분석-개념지도는-무엇이고-네-분석은-무엇을-하는가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "복습 중 다시 물은 것 — 인자 전달, NumPy 축과 데이터 해석",
      "context": "낯선 ‘개념지도’ 표현의 뜻을 물은 뒤, 다음 문제에서는 정답을 바로 말하지 말고 분석 종류의 의미만 설명해 달라고 요청했다.",
      "intent": "문제의 용어를 먼저 이해하고 직접 선택하려는 질문이다.",
      "answer": "여기서 개념지도는 별도 계산 기법이라기보다 작업 흐름을 안내하는 표현이었다. 집계 전에 한 행과 열의 의미, 결측·중복 등 품질을 확인해야 계산을 해석할 수 있다. 기술적 분석은 관측한 현황 요약, 진단적 분석은 가능한 이유 조사, 예측적 분석은 미지의 결과 추정, 처방적 분석은 목표와 제약 아래 행동 선택이다. 조사된 관련성만으로 원인을 확정하지 않는다. 분석 질문의 목적, 관측 단위에 연결된다."
    },
    {
      "id": "learning/2026-10-02-python-numpy-review#질문-initpy는-무엇인가",
      "title": "init.py는 무엇인가?",
      "url": "/notes/learning/2026-10-02-python-numpy-review#질문-initpy는-무엇인가",
      "topic": "실전 파이썬 준비하기 · 데이터 분석",
      "sourceTitle": "복습 중 다시 물은 것 — 인자 전달, NumPy 축과 데이터 해석",
      "context": "함수 인자와 배열 복습 사이에 패키지 초기화 파일도 다시 물었다.",
      "intent": "클래스의 초기화 메서드와 파일 이름의 역할을 구별하려는 질문이다.",
      "answer": "일반 패키지를 처음 불러올 때 실행되는 파이썬 파일이다. 내용이 비어 있어도 되며 초기화나 이름 연결에 쓴다. 클래스의 __init__()와는 별개다. 모든 패키지가 반드시 이 파일을 갖는다는 뜻은 아니다. import와 패키지 및 10월 7일 내부 동작 후속 질문으로 이어진다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-문자열에서-모음을-remove로-지우면-왜-안-될까",
      "title": "문자열에서 모음을 remove로 지우면 왜 안 될까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-문자열에서-모음을-remove로-지우면-왜-안-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "모음 제거 문제에서 for i in len(s)+1과 s.remove(s[i])를 사용했다.",
      "intent": "반복 대상의 타입과 문자열을 바꾸는 방법을 확인하려 했다.",
      "answer": "len(s)+1은 정수 하나여서 순회 대상이 아니다. 인덱스가 필요하면 range(len(s)), 글자만 필요하면 for char in s를 쓴다. 문자열은 불변이고 remove 메서드가 없다. 모음이 아닌 글자를 새 결과에 모으는 방식으로 작성한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-함수-결과를-print했는데-none이-한-줄-더-나오는-이유는",
      "title": "함수 결과를 print했는데 None이 한 줄 더 나오는 이유는?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-함수-결과를-print했는데-none이-한-줄-더-나오는-이유는",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "비교 함수 내부에서 출력한 뒤 바깥에서도 함수 호출을 print했다.",
      "intent": "화면 출력과 반환값을 구분하려 했다.",
      "answer": "함수 내부 print가 숫자를 출력해도 함수 자체는 return 없이 끝나면 None을 반환한다. 바깥 print가 그 None을 한 번 더 표시한다. 값을 나중에 사용할 함수라면 계산 결과를 return하고 출력은 호출하는 쪽에서 한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-return-print도-가능한-문법일까",
      "title": "return print(...)도 가능한 문법일까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-return-print도-가능한-문법일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "출력과 반환을 한 줄로 합칠 수 있는지 물었다.",
      "intent": "return 뒤의 식이 어떤 순서로 실행되는지 확인하려 했다.",
      "answer": "문법상 가능하다. 다만 print를 먼저 실행해 출력한 뒤 print의 반환값인 None을 돌려준다. return \"안녕\"과는 다르다. print 결과가 글자 자체라고 생각하면 호출 다음 줄의 값이 어긋난다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-문제-정답-없이-try와-except의-사용법만-알-수-있을까",
      "title": "문제 정답 없이 try와 except의 사용법만 알 수 있을까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-문제-정답-없이-try와-except의-사용법만-알-수-있을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "문제는 직접 풀겠다며 예외 처리 문법만 요청했다.",
      "intent": "실패를 처리하는 구조를 익혀 자신의 풀이에 적용하려 했다.",
      "answer": "try 안에서 지정한 예외가 나면 남은 try 코드를 건너뛰고 해당 except로 이동한다. 예외가 없으면 except를 건너뛴다. int(\"hello\")는 ValueError를 내므로 except ValueError:로 처리할 수 있다. 어떤 실패를 처리하려는지 알 수 있도록 예외 종류를 명시한다. 당시 미완성 문제의 독립 풀이 성공을 뜻하는 기록은 아니다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-문자열-압축은-문자별-총개수를-세면-될까",
      "title": "문자열 압축은 문자별 총개수를 세면 될까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-문자열-압축은-문자별-총개수를-세면-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "압축 게임에서 정답 대신 힌트를 요청했다.",
      "intent": "연속 구간마다 상태를 갱신하는 방법을 찾으려 했다.",
      "answer": "aaabbaaa의 앞 aaa와 뒤 aaa는 별도 구간이다. 이전 문자, 현재 연속 횟수, 완성된 결과를 구분한다. 문자가 바뀌면 이전 묶음을 저장하고 새 묶음을 시작한다. 마지막 묶음은 뒤에 새 문자가 오지 않으므로 반복 뒤 따로 마무리해야 한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-rear가-이전-문자를-기억하게-하려면-어느-줄에서-바꿀까",
      "title": "rear가 이전 문자를 기억하게 하려면 어느 줄에서 바꿀까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-rear가-이전-문자를-기억하게-하려면-어느-줄에서-바꿀까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "이전 문자를 유지하는 구체적인 순서를 물었다.",
      "intent": "대입 시점이 다음 반복의 상태를 결정한다는 점을 확인하려 했다.",
      "answer": "rear는 반복 전에 만들고 이번 char와 비교한 뒤 rear = char를 실행한다. aab라면 비교 시 rear는 차례로 빈 문자열, a, a다. 비교 전에 rear를 char로 바꾸면 두 값이 항상 같아져 이전 문자 정보가 사라진다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-숫자가-아니면이라는-조건은-isdigit의-반대일까",
      "title": "숫자가 아니면이라는 조건은 isdigit의 반대일까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-숫자가-아니면이라는-조건은-isdigit의-반대일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "입력 검증 조건을 물었다.",
      "intent": "허용할 입력과 검사 함수의 의미를 일치시키려 했다.",
      "answer": "정수의 숫자 문자만 검사할 때는 not text.isdigit()을 사용할 수 있다. 하지만 -3이나 3.5도 isdigit은 False다. 음수·소수를 받으려면 float 변환을 시도해 ValueError를 처리하는 등 목적에 맞게 정한다. 숫자 변환 가능성과 모든 응용 조건을 만족하는지는 또 다르다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-덧셈-프로그램의-do와-빈-if에-왜-빨간-줄이-생길까",
      "title": "덧셈 프로그램의 do와 빈 if에 왜 빨간 줄이 생길까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-덧셈-프로그램의-do와-빈-if에-왜-빨간-줄이-생길까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "작성 도중 표시된 문법 오류를 물었다.",
      "intent": "조건식 자체와 코드 블록의 문법 문제를 나누려 했다.",
      "answer": "Python에는 do: 문이 없다. 먼저 실행하고 종료 조건을 확인할 때는 while True와 break 등을 쓴다. if 다음에는 들여쓴 본문이 필요하다. 아직 작성하지 않았다면 pass를 넣을 수 있다. if not num1.isdigit(): 자체는 올바른 문법이다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-time이라는-이름은-쓸-수-없는-변수명일까",
      "title": "time이라는 이름은 쓸 수 없는 변수명일까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-time이라는-이름은-쓸-수-없는-변수명일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "카운트다운 코드에서 time에 보이는 표시를 물었다.",
      "intent": "문법 오류와 이름 충돌, 편집기 경고를 구분하려 했다.",
      "answer": "time을 변수명으로 쓰는 것 자체는 가능하다. 당시 페이지 텍스트로 정확한 빨간 줄 경고는 확인되지 않았고, 함수의 미완성 이름 pri는 별도 NameError 후보였다. 이후 import time을 쓰는 코드에서 time = 10으로 덮으면 time이 모듈 대신 정수를 가리키므로 이름 충돌이 생긴다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-1초-기다리기는-어떻게-하고-import는-어디에-둘까",
      "title": "1초 기다리기는 어떻게 하고 import는 어디에 둘까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-1초-기다리기는-어떻게-하고-import는-어디에-둘까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "time.sleep을 받은 뒤에도 함수 들여쓰기와 모듈 이름 충돌을 질문했다.",
      "intent": "호출할 모듈 객체와 카운트다운 숫자를 따로 유지하려 했다.",
      "answer": "import time 뒤 time.sleep(1)로 현재 실행 흐름을 기다리게 한다. 입력 초는 seconds처럼 다른 이름에 둔다. 당시 함수 중간에서 들여쓰기 없는 import로 본문이 끝난 뒤 다시 들여쓴 while이 나와 문제가 됐다. import를 함수 정의 위에 두면 구조가 분명해진다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-timetracker의-초기화시작종료경과-계산은-어떻게-나눌까",
      "title": "TimeTracker의 초기화·시작·종료·경과 계산은 어떻게 나눌까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-timetracker의-초기화시작종료경과-계산은-어떻게-나눌까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "메서드 위치와 들여쓰기가 섞여 있었다.",
      "intent": "각 메서드가 저장하거나 반환해야 할 상태를 정하려 했다.",
      "answer": "__init__은 시간 속성의 초기값, start는 시작 시각, stop은 종료 시각을 저장한다. get_elapsed_time은 저장한 두 시각의 차이를 반환한다. 인스턴스 메서드에 self가 필요하며 빈 return 다음의 계산은 실행되지 않는다. 분 단위 숫자를 반환할지 timedelta를 반환할지는 호출부와 같은 계약으로 맞춰야 한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-total_seconds-뒤에-괄호가-없으면-무엇이-달라질까",
      "title": "total_seconds 뒤에 괄호가 없으면 무엇이 달라질까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-total_seconds-뒤에-괄호가-없으면-무엇이-달라질까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "시간 차이에 .total_seconds / 60.0을 적용했다.",
      "intent": "메서드 객체와 호출해 얻은 숫자를 구분하려 했다.",
      "answer": ".total_seconds는 메서드이고 .total_seconds()는 초 숫자를 얻는 호출이다. 반환값이 timedelta라면 호출 결과를 60으로 나눠 분을 얻는다. 당시 답변은 get_elapsed_time에 빈 return이 남았다고 잘못 지적했지만, 사용자가 제시한 화면에서는 이미 시간 차이를 올바르게 반환하고 있었다. 이 정정을 기준으로 읽는다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-시간-출력에-2f를-바로-붙여도-될까",
      "title": "시간 출력에 .2f를 바로 붙여도 될까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-시간-출력에-2f를-바로-붙여도-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "0.7243666333333334분의 소수 자릿수를 줄이려 했다.",
      "intent": "객체의 타입과 표시 형식을 맞추려 했다.",
      "answer": "분 단위 숫자라면 f\"{minutes:.2f}\"로 0.72를 표시한다. get_elapsed_time이 timedelta를 반환한다면 먼저 .total_seconds() / 60으로 숫자를 얻어야 한다. 당시 마지막 답변은 메서드 결과에 .2f를 바로 붙였지만, 그것이 맞으려면 메서드가 이미 숫자를 반환하도록 바뀌었다는 전제가 필요하다. 기록만으로 변경을 확정하지 않는다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-phone-number처럼-공백이-들어간-매개변수-이름을-쓸-수-있을까",
      "title": "phone number처럼 공백이 들어간 매개변수 이름을 쓸 수 있을까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-phone-number처럼-공백이-들어간-매개변수-이름을-쓸-수-있을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "연락처 객체의 __init__을 작성해 확인을 요청했다.",
      "intent": "사람이 읽는 항목명과 코드의 식별자 규칙을 연결하려 했다.",
      "answer": "매개변수 이름에 공백을 넣을 수 없다. phone_number, email_address처럼 적고 self.phone_number = phone_number로 전달값을 객체 속성에 저장한다. 같은 철자라도 오른쪽은 매개변수이고 왼쪽은 해당 인스턴스의 속성이다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-후보자-집합에-0을-저장하면-딕셔너리처럼-되는-것-아닐까",
      "title": "후보자 집합에 0을 저장하면 딕셔너리처럼 되는 것 아닐까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-후보자-집합에-0을-저장하면-딕셔너리처럼-되는-것-아닐까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "후보자 추가 코드의 self.candidate[name] = 0을 보고 set 여부를 물었다.",
      "intent": "중복 방지와 후보별 표 수 저장에 맞는 자료구조를 고르려 했다.",
      "answer": "해당 코드는 실제 딕셔너리다. 이름에 초기 득표 수 0을 연결한다. set은 후보자 이름만 저장할 수 있지만 표 수까지 연결하려면 추가 구조가 필요하다. 문제의 이름·표 수 관리에는 딕셔너리가 맞고, 키 중복도 막는다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-직원-인스턴스를-인자로-안-주는데-클래스-메서드가-평균을-어떻게-계산할까",
      "title": "직원 인스턴스를 인자로 안 주는데 클래스 메서드가 평균을 어떻게 계산할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-직원-인스턴스를-인자로-안-주는데-클래스-메서드가-평균을-어떻게-계산할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "평균 급여 메서드에 직원 객체가 전달되지 않아 의문을 가졌다.",
      "intent": "클래스 메서드가 아는 정보의 출처를 찾으려 했다.",
      "answer": "클래스 메서드가 만들어진 모든 인스턴스를 자동으로 추적하는 것은 아니다. 생성할 때 클래스의 employees 목록에 append(self)로 등록했다면 cls.employees를 통해 다시 접근할 수 있다. 그 저장 코드가 없다면 목록에 직원 정보가 저절로 생기지 않는다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-클래스-변수를-self로-접근해도-되고-cls라고-쓰지-않아도-될까",
      "title": "클래스 변수를 self로 접근해도 되고 cls라고 쓰지 않아도 될까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-클래스-변수를-self로-접근해도-되고-cls라고-쓰지-않아도-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "클래스도 객체라면 항상 클래스명을 써야 하는지 물었다.",
      "intent": "이름 관례와 실제로 바인딩된 대상, 속성 탐색을 함께 정리하려 했다.",
      "answer": "일반 메서드의 self는 인스턴스다. 그 인스턴스에 employees가 없으면 클래스의 목록을 찾을 수 있다. classmethod 첫 매개변수를 self라고 적어도 실제 받는 값은 클래스지만 cls 관례가 명확하다. self.employees.append(self)는 찾은 공용 리스트를 변경하고 self.employees = []는 별도 인스턴스 속성을 만드는 차이가 있다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-예약-시스템의-self에-손님-이름을-저장해도-될까",
      "title": "예약 시스템의 self에 손님 이름을 저장해도 될까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-예약-시스템의-self에-손님-이름을-저장해도-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "지점 객체와 손님 예약 정보가 한 객체에 섞이는 느낌이 들었다.",
      "intent": "self가 가리키는 객체와 여러 건 저장할 데이터의 구조를 나누려 했다.",
      "answer": "restaurant.add_reservation(...)에서 self는 지점이다. self.name = name 같은 세 속성만 갱신하면 다음 예약이 앞 예약을 덮는다. 지점의 reservations 리스트 안에 예약 한 건씩 담는다. 이 실습에서는 예약 딕셔너리면 충분하며 손님 클래스를 꼭 새로 만들 필요는 없다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-출력만-하는-메서드도-return을-적어야-할까",
      "title": "출력만 하는 메서드도 return을 적어야 할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-출력만-하는-메서드도-return을-적어야-할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "예약 목록을 print하고 끝내고 싶다고 했다.",
      "intent": "부수 효과만 필요한 메서드와 계산 결과가 필요한 메서드를 구분하려 했다.",
      "answer": "끝까지 실행하면 자동으로 None을 반환하므로 마지막에 빈 return은 불필요하다. 중간에 종료할 때는 쓸 수 있다. 반면 total = sum_reservations(...)처럼 다음 코드가 숫자를 쓰려면 합계를 return해야 한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-첫-매개변수를-cls로-쓰면-자동으로-클래스-메서드가-될까",
      "title": "첫 매개변수를 cls로 쓰면 자동으로 클래스 메서드가 될까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-첫-매개변수를-cls로-쓰면-자동으로-클래스-메서드가-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "sum_reservations 호출에서 인자 부족과 오타 문제가 있었다.",
      "intent": "메서드 종류를 결정하는 문법을 확인하려 했다.",
      "answer": "아니다. @classmethod가 있어야 클래스가 첫 인자로 바인딩된다. cls라는 이름만으로는 달라지지 않는다. 당시 reservation과 revservation 오타도 별개 이름이었다. 전달받은 지점 목록에서 각 res.reservations의 길이를 합친 뒤 반환하는 흐름으로 연결한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-최대한-많은-할-일을-고를-때-가장-짧은-것부터-선택하면-될까",
      "title": "최대한 많은 할 일을 고를 때 가장 짧은 것부터 선택하면 될까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-최대한-많은-할-일을-고를-때-가장-짧은-것부터-선택하면-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "제한 시간 문제를 그리디로 풀 수 있는지 물었다.",
      "intent": "정렬 기준이 목표를 보장하는 이유를 확인하려 했다.",
      "answer": "각 일을 최대 한 번 선택하고 소요 시간이 음수가 아니며 목표가 개수 최대화인 문제에서는 짧은 순으로 고르면 된다. k개를 고르는 조합 중 가장 짧은 k개의 합이 최소이기 때문이다. 남는 시간을 최소화하는 목표까지 같지는 않다. 10분에 3·4·6분이면 짧은 순은 7분, 4+6은 10분으로 둘 다 두 개다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-csv-저장-셀은-무엇을-준비하는-코드일까",
      "title": "CSV 저장 셀은 무엇을 준비하는 코드일까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-csv-저장-셀은-무엇을-준비하는-코드일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "118번 셀 전체의 역할을 쉽게 설명해 달라고 했다.",
      "intent": "추천 알고리즘과 입력 파일 생성 단계를 분리하려 했다.",
      "answer": "해당 셀은 할 일과 시간을 파일로 쓰는 준비 코드다. 목록 생성 → 함수 호출 → 파일 열기 → writer 설정 → 헤더 쓰기 → 데이터 행 쓰기 순이다. 아직 할 일을 선택하지 않는다. print가 없어도 파일 쓰기는 일어날 수 있고, w 모드는 기존 내용이 있다면 덮어쓴다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-튜플은-무엇이고-for-task-minutes는-어떻게-값을-받을까",
      "title": "튜플은 무엇이고 for task, minutes는 어떻게 값을 받을까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-튜플은-무엇이고-for-task-minutes는-어떻게-값을-받을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "할 일 목록의 (이름, 시간) 구조가 낯설었다.",
      "intent": "한 행을 묶는 방법과 언패킹을 이해하려 했다.",
      "answer": "튜플은 항목의 순서가 있고 해당 튜플의 항목 참조를 교체할 수 없는 묶음이다. (\"공부\", 120)은 두 항목이며 name, minutes = ...로 나눠 받는다. 한 항목 튜플은 (\"공부\",)처럼 쉼표가 필요하다. 불변 튜플 안에 가변 객체가 있다면 그 내부까지 불변이 되는 것은 아니라는 점은 보충해서 구분한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-fieldnamesfieldnames의-왼쪽과-오른쪽은-왜-같을까",
      "title": "fieldnames=fieldnames의 왼쪽과 오른쪽은 왜 같을까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-fieldnamesfieldnames의-왼쪽과-오른쪽은-왜-같을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "writer 생성에서 같은 이름을 양쪽에 쓰는 뜻을 이해하기 어려웠다.",
      "intent": "매개변수 이름과 전달할 변수의 역할을 나누려 했다.",
      "answer": "왼쪽은 DictWriter가 받는 매개변수 이름, 오른쪽은 호출하는 코드의 변수다. columns = [\"할일\", \"소요시간\"] 뒤 fieldnames=columns로 써도 같다. 키워드로 지정한다면 왼쪽 이름은 API가 정한 fieldnames를 사용한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-변수-이름은-같으면-안-된다고-배웠는데-왜-이-경우-괜찮을까",
      "title": "변수 이름은 같으면 안 된다고 배웠는데 왜 이 경우 괜찮을까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-변수-이름은-같으면-안-된다고-배웠는데-왜-이-경우-괜찮을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "키워드 인자를 설명한 뒤 같은 이름 사용 자체를 다시 물었다.",
      "intent": "대입으로 값을 덮는 경우와 함수 호출의 문법을 구분하려 했다.",
      "answer": "같은 이름의 사용 자체가 금지는 아니다. fieldnames=fieldnames는 같은 변수를 두 번 정의하거나 바깥 값을 덮는 문장이 아니다. 오른쪽 식의 값을 왼쪽 이름의 매개변수로 전달하는 호출 문법이다. 함수의 매개변수와 바깥 변수는 사용되는 이름 공간도 다르다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-키워드-인자는-반드시-써야-할까",
      "title": "키워드 인자는 반드시 써야 할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-키워드-인자는-반드시-써야-할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "fieldnames를 위치로 주어도 되는지 물었다.",
      "intent": "읽기 편하게 적는 선택과 API가 강제하는 인자를 구분하려 했다.",
      "answer": "이 DictWriter 생성에서는 두 번째 인자를 위치로 줄 수 있어 csv.DictWriter(file, columns)도 된다. 모든 함수가 모든 인자를 위치로 허용하는 것은 아니므로 일반화하지 않는다. fieldnames=columns는 전달 목적을 드러낸다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-확장자를-csv로-붙이면-딕셔너리-파일이-되는-것일까",
      "title": "확장자를 .csv로 붙이면 딕셔너리 파일이 되는 것일까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-확장자를-csv로-붙이면-딕셔너리-파일이-되는-것일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "CSV 자체를 모른다며 파일 이름, fieldnames, 딕셔너리의 연결을 물었다.",
      "intent": "파일 형식과 메모리의 Python 객체를 구분하려 했다.",
      "answer": "CSV는 행과 필드를 텍스트로 표현하는 형식이다. 이 예에서는 쉼표로 열을 구분하며 쉼표나 줄바꿈이 필드 안에 있으면 따옴표 처리도 필요하다. 확장자만 바꿔 내용이 변환되지는 않는다. 파일에 Python 딕셔너리가 저장되는 것이 아니라 csv 모듈이 값들을 CSV 텍스트로 쓴다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-dictwriter를-만들-때-아직-딕셔너리가-없는데-무엇을-쓰는-것일까",
      "title": "DictWriter를 만들 때 아직 딕셔너리가 없는데 무엇을 쓰는 것일까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-dictwriter를-만들-때-아직-딕셔너리가-없는데-무엇을-쓰는-것일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "fieldnames도 파일도 딕셔너리가 아닌데 DictWriter가 무엇을 변환하는지 물었다.",
      "intent": "객체 준비와 실제 쓰기 시점을 나누려 했다.",
      "answer": "생성은 쓸 파일과 열 순서를 기억하는 writer 객체를 준비한다. 데이터는 나중에 writer.writerow({\"할일\": \"공부\", \"소요시간\": 120})에서 전달한다. 정확히는 중괄호 표현식이 딕셔너리를 만들고 writerow가 이를 받아 값을 찾아 쓴다. 생성자 호출 자체가 내용 한 행을 쓰는 것은 아니다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-writerow에-이미-키가-있는데-fieldnames와-writeheader는-왜-필요할까",
      "title": "writerow에 이미 키가 있는데 fieldnames와 writeheader는 왜 필요할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-writerow에-이미-키가-있는데-fieldnames와-writeheader는-왜-필요할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "키를 알려 줬는데 같은 정보를 반복해서 주는 것 같다고 했다.",
      "intent": "메모리에서 값을 찾는 설정과 파일에 기록되는 제목을 구분하려 했다.",
      "answer": "fieldnames는 어떤 키의 값을 어떤 열 순서로 쓸지 정한다. writeheader는 열 이름을 파일에 한 행으로 적는다. writerow는 설정된 순서의 값만 데이터 행으로 쓴다. 키는 값을 찾는 데 쓰이지만 행마다 키 이름이 파일에 붙지는 않는다. 헤더 없이도 저장은 가능하지만 읽는 쪽이 열의 뜻을 따로 알아야 한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-키가-파일에-저장되지-않으면-딕셔너리에-아무-키나-써도-될까",
      "title": "키가 파일에 저장되지 않으면 딕셔너리에 아무 키나 써도 될까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-키가-파일에-저장되지-않으면-딕셔너리에-아무-키나-써도-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "writerow가 값만 쓴다는 설명에서 키가 자유롭다고 추론했다.",
      "intent": "파일에 기록되지 않는 정보도 처리 과정에서 필요한지 확인하려 했다.",
      "answer": "키는 fieldnames에 맞아야 writer가 값을 찾는다. 기본 설정에서 fieldnames에 없는 추가 키를 주면 ValueError가 난다. 필요한 키가 빠진 경우는 기본 restval인 빈 문자열을 쓰므로 “모든 불일치가 똑같이 오류”인 것은 아니다. 이름을 바꾸려면 설정과 행 데이터 양쪽을 맞춘다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-load_tasks-suggest_tasks-main은-어떻게-연결할까",
      "title": "load_tasks, suggest_tasks, main은 어떻게 연결할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-load_tasks-suggest_tasks-main은-어떻게-연결할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "세 함수의 이름만으로 역할이 잡히지 않아 설명과 구체적인 힌트를 요청했다.",
      "intent": "하나의 프로그램을 입력·변환·선택·출력으로 나누려 했다.",
      "answer": "load_tasks는 파일에서 목록을 만들고, suggest_tasks는 목록과 남은 시간으로 선택한 목록을 반환한다. main은 결과를 받아 다음 함수의 인자로 전달하고 출력한다. 함수들을 위에서 아래로 정의한다고 결과가 자동으로 흐르지 않는다. 아래 보충 연결 예제에서 타입이 바뀌는 지점을 확인한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-첫-행을-키로-쓰는-것은-csv-자체의-규칙일까",
      "title": "첫 행을 키로 쓰는 것은 CSV 자체의 규칙일까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-첫-행을-키로-쓰는-것은-csv-자체의-규칙일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "처음에는 왜 첫 행이 키인지 물었고 별도 세션에서도 질문이 적절한지 재검토했다.",
      "intent": "파일 형식의 약속과 Python 읽기 도구의 기본 동작을 분리하려 했다.",
      "answer": "CSV는 헤더가 없을 수도 있다. csv.DictReader(file)는 fieldnames를 따로 주지 않으면 첫 행을 열 이름으로 사용한다. 직접 fieldnames를 주면 첫 행부터 데이터로 읽는다. csv.reader는 각 행을 리스트로 내므로 헤더도 자동으로 딕셔너리 키가 되지 않는다. 질문의 초점을 “CSV의 필수 규칙인가, DictReader의 기본 동작인가”로 나누면 정확하다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-입력-예시에는-남은-시간만-있는데-왜-파일-경로도-입력받을까",
      "title": "입력 예시에는 남은 시간만 있는데 왜 파일 경로도 입력받을까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-입력-예시에는-남은-시간만-있는데-왜-파일-경로도-입력받을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "제시된 완성 풀이가 CSV 경로까지 사용자에게 물었다.",
      "intent": "요구사항과 실제 사용 예시의 차이를 확인하려 했다.",
      "answer": "당시 답변은 기능 설명의 경로 입력 문구와 입출력 예시가 달랐다고 정정했다. 남은 시간만 묻는 예시를 따르려면 코드 안에서 filename = \"tasks.csv\"로 정한다. 둘 다 해야 하는 필수 흐름으로 합치지 않는다. 아래 연결 예제는 파일 경로를 코드에서 정하는 쪽이다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-with-open-as-csvfile에서-csvfile은-파일-내용일까",
      "title": "with open(...) as csvfile에서 csvfile은 파일 내용일까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-with-open-as-csvfile에서-csvfile은-파일-내용일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "with와 as를 자세히 설명해 달라고 했다.",
      "intent": "파일 객체를 받은 뒤 쓰고 닫는 범위를 이해하려 했다.",
      "answer": "csvfile은 내용 문자열이 아니라 열린 파일 객체를 참조하는 변수다. 이 파일 컨텍스트에서는 with를 벗어나면 예외나 return이 있어도 닫기 처리를 한다. with는 반복문이 아니며 예외 자체를 없애지도 않는다. 이미 읽어 tasks에 저장한 데이터는 파일이 닫혀도 남는다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-with가-끝나면-변수와-파일-객체의-연결도-끊길까",
      "title": "with가 끝나면 변수와 파일 객체의 연결도 끊길까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-with가-끝나면-변수와-파일-객체의-연결도-끊길까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "참조는 남지만 객체만 닫힌 상태가 되는지 자신의 설명을 확인했다.",
      "intent": "이름의 수명과 자원의 사용 가능 상태를 구분하려 했다.",
      "answer": "같은 범위에서 csvfile 이름은 여전히 닫힌 파일 객체를 가리킨다. csvfile.closed는 True이고 상태 조회는 가능하지만 read는 실패한다. with가 별도 지역 변수 범위를 만들어 이름을 지우는 것은 아니다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-newline은-공백을-넣거나-줄바꿈을-없애라는-뜻일까",
      "title": "newline=\"\"은 공백을 넣거나 줄바꿈을 없애라는 뜻일까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-newline은-공백을-넣거나-줄바꿈을-없애라는-뜻일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "빈 문자열을 newline에 주는 이유가 연결되지 않는다고 했다.",
      "intent": "일반 문자열의 뜻과 매개변수 설정값의 약속을 구분하려 했다.",
      "answer": "빈 문자열은 공백 한 칸과 다르다. 여기서는 open이 줄바꿈을 자동 변환하지 않는 모드를 선택하는 설정값이다. 읽을 때 newline=None은 여러 줄바꿈을 \\n으로 통일하고 newline=\"\"는 인식하되 원문 줄바꿈을 유지한다. 빈 문자열 자체에 그런 보편적 의미가 있는 것이 아니라 open의 계약이다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-newline-설정을-생략하면-실제로-무엇이-달라질까",
      "title": "newline 설정을 생략하면 실제로 무엇이 달라질까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-newline-설정을-생략하면-실제로-무엇이-달라질까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "추상 설명 대신 빠졌을 때의 사례를 요청했다.",
      "intent": "설정이 필요한 환경과 데이터 범위를 확인하려 했다.",
      "answer": "Windows 텍스트 쓰기의 기본 줄바꿈 변환이 CSV writer의 \\r\\n과 겹치면 \\r\\r\\n이 되어 빈 행처럼 보일 수 있다. 필드 내부 줄바꿈도 읽기 변환의 영향을 받는다. 단순 CSV를 다른 환경에서 읽을 때 결과가 같을 수 있으므로 생략하면 언제나 오류라고 말하지 않는다. CSV 모듈이 줄바꿈을 처리하도록 newline=\"\"로 연다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-역슬래시-r은-어떤-문자일까",
      "title": "역슬래시 r은 어떤 문자일까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-역슬래시-r은-어떤-문자일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "줄바꿈 예시에 나온 \\r을 물었다.",
      "intent": "문자열 표기와 출력 장치의 동작을 연결하려 했다.",
      "answer": "\\r은 carriage return 제어 문자다. 터미널에서는 보통 현재 줄의 맨 앞으로 이동하고 \\n은 줄바꿈에 쓰인다. \"ABC\\rXY\"가 XYC처럼 보일 수 있지만 표시 환경에 따라 다르다. 문자열 리터럴의 \"\\r\"은 역슬래시와 r 두 글자가 아닌 제어 문자 하나를 나타낸다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-for-row-in-reader는-키를-순회할까-행을-순회할까",
      "title": "for row in reader는 키를 순회할까, 행을 순회할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-for-row-in-reader는-키를-순회할까-행을-순회할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "DictReader가 키 이름을 안다면 for에서 키를 주는 것인지 혼동했다.",
      "intent": "순회 대상과 매번 반환되는 항목의 타입을 확인하려 했다.",
      "answer": "reader는 딕셔너리 한 개가 아니라 행마다 딕셔너리를 내는 이터레이터다. 첫 row는 {\"할일\": \"공부하기\", \"소요시간\": \"120\"}이고 row[\"할일\"]은 그 행의 값을 읽는다. for key in row를 따로 쓸 때는 딕셔너리 키를 순회한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-네-행을-읽으면-tasks에-딕셔너리-네-개가-저장될까",
      "title": "네 행을 읽으면 tasks에 딕셔너리 네 개가 저장될까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-네-행을-읽으면-tasks에-딕셔너리-네-개가-저장될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "reader가 행을 제공하는 흐름을 자신의 말로 설명했다.",
      "intent": "중간 객체와 최종 저장 형태를 구분하려 했다.",
      "answer": "reader가 딕셔너리 네 개를 하나씩 제공하는 설명은 맞지만, tasks에 무엇을 넣는지는 append 인자가 정한다. 당시 코드는 시간을 int로 바꾸고 (name, minutes) 튜플을 추가했다. 따라서 파일은 텍스트, row는 딕셔너리, tasks는 튜플들의 리스트다. reader가 처음부터 모든 행을 딕셔너리로 모아 두는 것도 아니다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-결국-튜플로-저장할-건데-왜-dictreader를-거칠까",
      "title": "결국 튜플로 저장할 건데 왜 DictReader를 거칠까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-결국-튜플로-저장할-건데-왜-dictreader를-거칠까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "딕셔너리에서 튜플로 바꾸는 과정의 필요성을 따졌다.",
      "intent": "필수 형 변환과 구현 선택의 비용을 구분하려 했다.",
      "answer": "필수는 아니다. DictReader는 열 이름으로 접근하기 좋고 튜플은 두 값을 언패킹하기 간단하다. 딕셔너리를 그대로 저장하거나 csv.reader가 내는 리스트를 바로 변환해도 된다. 후자는 열 순서에 의존한다. 뒤 함수도 선택한 구조에 맞게 접근해야 하며 하나의 풀이만 유일한 구조로 설명하면 안 된다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-sorted의-lambda는-언제-누구에게-호출될까",
      "title": "sorted의 lambda는 언제 누구에게 호출될까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-sorted의-lambda는-언제-누구에게-호출될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "suggest_tasks의 정렬 한 줄을 자세히 설명해 달라고 했다.",
      "intent": "함수를 전달하는 것과 정렬 기준 숫자를 전달하는 것을 구분하려 했다.",
      "answer": "key=lambda task: task[1]은 함수 객체를 전달한다. sorted가 각 튜플을 그 함수에 넣어 120, 60 같은 기준값을 얻고 원래 튜플들을 정렬한다. key에 정수들이 차례로 대입되는 문법이 아니다. 결과도 시간 숫자만이 아니라 (이름, 시간) 튜플들의 새 리스트다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-task라고-이름-붙이면-컴퓨터가-tasks의-한-항목인지-알까",
      "title": "task라고 이름 붙이면 컴퓨터가 tasks의 한 항목인지 알까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-task라고-이름-붙이면-컴퓨터가-tasks의-한-항목인지-알까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "정의되지 않은 듯한 람다 매개변수가 왜 튜플인지 물었다.",
      "intent": "단수·복수 이름 관례와 실제 값 전달을 구분하려 했다.",
      "answer": "task는 임의로 정한 매개변수 이름이다. sorted가 목록의 항목 하나를 전달하기 때문에 이번 호출에서 튜플을 받는다. item이나 x로 바꿔도 같다. lambda tasks: tasks[1]도 가능하지만 바깥 목록과 이름이 겹쳐 읽기 어려워진다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-sorted도-하나씩-꺼내-쓰는데-이터레이터가-아닌-이유는",
      "title": "sorted도 하나씩 꺼내 쓰는데 이터레이터가 아닌 이유는?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-sorted도-하나씩-꺼내-쓰는데-이터레이터가-아닌-이유는",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "정렬에 숨어 있는 순회와 이터레이터의 관계를 두 번 확인했다.",
      "intent": "동작을 수행하는 함수와 다음 값을 제공하는 객체를 구분하려 했다.",
      "answer": "sorted는 입력을 순회하는 함수이며 정렬한 새 리스트를 반환한다. 순회 과정에서 이터레이터를 사용하지만 함수 자체나 반환한 리스트가 이터레이터인 것은 아니다. next(sorted_tasks)는 실패하고 next(iter(sorted_tasks))는 가능하다. 당시 “이터레이터와 관련이 없다”는 식의 설명은 이 차이로 정정됐다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-main은-특별한-함수이고-enumerate는-세-값을-주는-함수일까",
      "title": "main은 특별한 함수이고 enumerate는 세 값을 주는 함수일까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-main은-특별한-함수이고-enumerate는-세-값을-주는-함수일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "main의 뜻과 마지막 출력 반복을 자세히 물었다.",
      "intent": "프로그램 진입 흐름과 중첩 언패킹을 나누려 했다.",
      "answer": "main은 관례적인 이름의 일반 함수이고 호출해야 실행된다. enumerate는 (번호, 원래 항목) 두 요소의 튜플을 하나씩 준다. 원래 항목이 (이름, 분)이라 number, (name, minutes)로 다시 나눈다. start=1은 시작 번호일 뿐 첫 항목을 건너뛰는 설정이 아니다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-for-in-뒤에는-이터러블과-이터레이터가-둘-다-올-수-있을까",
      "title": "for in 뒤에는 이터러블과 이터레이터가 둘 다 올 수 있을까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-for-in-뒤에는-이터러블과-이터레이터가-둘-다-올-수-있을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "enumerate가 이터레이터라는 설명을 기존 리스트 반복과 연결했다.",
      "intent": "두 종류의 포함 관계를 확인하려 했다.",
      "answer": "for 항목 in 대상의 대상 자리에는 이터러블이 온다. 이터레이터도 이터러블에 포함되며 자신에 iter를 적용하면 자기 자신을 돌려주는 규약을 따른다. for가 next 요청과 종료 처리를 한다. 리스트는 새 이터레이터로 다시 읽을 수 있지만 소진한 기존 이터레이터를 다시 순회해도 값은 나오지 않는다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-if-name--main은-무엇을-막아-줄까",
      "title": "if name == \"main\"은 무엇을 막아 줄까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-if-name--main은-무엇을-막아-줄까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "실행을 감싼 if문의 의미를 추가로 요청했다.",
      "intent": "직접 실행과 import 시 실행을 나누려 했다.",
      "answer": "파일을 시작점으로 직접 실행하면 __name__이 \"main\"이어서 안의 main을 호출한다. import할 때는 보통 모듈명이 들어가 호출을 건너뛴다. 함수 이름 main과 문자열 \"main\"은 별개다. import가 최상위 코드를 전혀 실행하지 않는 것은 아니며 조건문 바깥 코드는 첫 import 과정에서 실행될 수 있다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-소수-판별의-if가-복잡해지면-어떻게-정리할까",
      "title": "소수 판별의 if가 복잡해지면 어떻게 정리할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-소수-판별의-if가-복잡해지면-어떻게-정리할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "여러 경우를 나눈 조건문이 지저분하다고 느꼈다.",
      "intent": "하나의 함수가 무엇을 판정해야 하는지 좁히려 했다.",
      "answer": "2 미만이면 False, 약수를 찾으면 False, 끝까지 찾지 못했으면 True라는 조기 반환 구조로 정리한다. 마지막 True는 반복 밖에 둔다. 합을 누적하는 역할은 별도 함수가 맡는다. 약수 쌍 중 작은 쪽은 제곱근 이하이므로 그 범위까지만 검사할 수 있다. 보충 구현에서 큰 정수의 정확한 경계가 필요하면 math.isqrt를 쓸 수 있다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-도서관-관리가-bookmemberrental을-모두-상속해야-할까",
      "title": "도서관 관리가 Book·Member·Rental을 모두 상속해야 할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-도서관-관리가-bookmemberrental을-모두-상속해야-할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "관리 클래스의 add_book이 다른 클래스를 사용하므로 상속이 필요하다고 생각했다.",
      "intent": "사용 관계와 종류 관계를 구분하려 했다.",
      "answer": "도서관 관리 시스템은 책이나 회원의 한 종류가 아니다. 독립된 Book, Member, Rental 객체를 생성해 목록에 보관하는 관계로 표현한다. 다른 클래스를 사용하기 위해 상속은 필요 없다. 관리 메서드의 self와 Book 생성자의 self는 서로 다른 객체다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-rental을-만들-때-self-외의-값은-어디서-구할까",
      "title": "Rental을 만들 때 self 외의 값은 어디서 구할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-rental을-만들-때-self-외의-값은-어디서-구할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "Rental() 호출과 생성자 매개변수가 맞지 않는다고 느꼈다.",
      "intent": "인자 개수뿐 아니라 각 값의 출처를 연결하려 했다.",
      "answer": "self는 자동 전달되지만 회원 ID, ISBN, 대여일은 직접 주어야 한다. 반납 전이라면 return_date=None을 기본값으로 둘 수 있다. 회원 ID는 검색한 Member에서, ISBN은 요청에서, 대여일은 처리 시각에서 가져온다. 모두 같은 의미의 값이거나 자동 변환되는 것은 아니다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-사용-예시는-회원-이름을-받는데-rental은-왜-회원-id를-받을까",
      "title": "사용 예시는 회원 이름을 받는데 Rental은 왜 회원 ID를 받을까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-사용-예시는-회원-이름을-받는데-rental은-왜-회원-id를-받을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "예시의 rent_book과 Rental의 매개변수가 달라 문제 설계가 모순처럼 보였다.",
      "intent": "외부 요청 형태와 내부 저장 구조의 차이를 확인하려 했다.",
      "answer": "회원 이름은 Rental 생성자가 아니라 관리 시스템의 rent_book에 들어간다. 시스템이 이름으로 Member를 찾고 그 member_id로 Rental을 만든다. 이름이 자동으로 ID로 변환되지 않는다. 당시 문제에는 ID 부여와 동명이인 처리 기준이 충분히 명시되지 않아 별도 설계 항목으로 남았다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-대여일은-언제-현재-시각으로-저장할까",
      "title": "대여일은 언제 현재 시각으로 저장할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-대여일은-언제-현재-시각으로-저장할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "rental_date에 넣을 값을 물었다.",
      "intent": "상태 변경 시각과 조회 시각을 구분하려 했다.",
      "answer": "즉시 대여를 처리하는 실습에서는 회원과 책을 찾은 뒤 datetime.now() 결과를 한 번 저장한다. 반납할 때는 해당 Rental.return_date를 별도로 바꾼다. 조회할 때마다 대여일을 현재 시각으로 갱신하면 기록의 뜻이 달라진다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-member--member_name은-회원-이름-비교가-아닐까",
      "title": "member == member_name은 회원 이름 비교가 아닐까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-member--member_name은-회원-이름-비교가-아닐까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "대여·반납 조건에서 회원 객체를 문자열과 비교했다.",
      "intent": "객체 전체와 그 객체의 속성을 구분하려 했다.",
      "answer": "해당 클래스에는 이름으로 비교하는 특별한 동작을 정의하지 않았으므로 member.member_name == member_name으로 이름 속성을 꺼내 비교한다. 찾지 못한 상태에서 member_id를 사용하지 않도록 흐름도 확인해야 한다. 메서드의 단수·복수 이름, None 철자, self 누락은 각각 별개의 호출·이름 문제였다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-오류-없이-끝났으면-대여-상태도-해결된-것일까",
      "title": "오류 없이 끝났으면 대여 상태도 해결된 것일까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-오류-없이-끝났으면-대여-상태도-해결된-것일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "수정 후 해결된 것 같은지 확인을 요청했다.",
      "intent": "실행 완료와 요구된 출력·상태 일치를 구분하려 했다.",
      "answer": "당시 예시는 예외 없이 끝났지만 대여 직후와 반납 후 모두 회원 대여 목록이 None으로 보였다. Rental 목록만 바뀌고 Member.book_list가 갱신되지 않았기 때문이다. 출력 조건만 if not member.book_list로 바꾸면 항상 없음으로 보일 수 있다. 대여와 반납이 실제 저장 상태를 바꾸는지 별도로 확인한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-책-목록을-순회하며-같은-목록에-append하면-왜-계속-돌까",
      "title": "책 목록을 순회하며 같은 목록에 append하면 왜 계속 돌까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-책-목록을-순회하며-같은-목록에-append하면-왜-계속-돌까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "ISBN이 맞는 book을 self.book_list에 다시 append했다.",
      "intent": "반복 횟수가 시작 길이로 고정되는지 확인하려 했다.",
      "answer": "리스트 이터레이터는 뒤에 추가된 항목도 방문할 수 있다. 같은 조건을 만족하는 객체를 계속 추가하고 break가 없다면 다시 그 항목을 만나 끝나지 않는 패턴이 된다. 빈 리스트 초기화는 최대 길이 설정이 아니다. 이후 제시한 코드에는 break가 있어 무한 반복 대신 한 번 중복 추가되는 상태였다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-book_list가-분명-인데-왜-none이라고-했을까",
      "title": "book_list가 분명 []인데 왜 None이라고 했을까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-book_list가-분명-인데-왜-none이라고-했을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "사용자가 전체 코드를 붙여 도서관 목록은 이미 리스트라고 반박했다.",
      "intent": "같은 속성 이름이 붙은 서로 다른 객체를 명확히 구별하려 했다.",
      "answer": "LibraryManagement의 self.book_list는 전체 도서 목록 []였고, Member의 self.book_list는 회원별 대여 목록 None이었다. 초기 답변이 소유 객체를 생략해 혼동을 만들었다. library.book_list와 member.book_list처럼 소유 대상을 함께 적어야 한다. 회원 목록에 append하려면 Member 쪽 초기값이 리스트여야 한다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-책-검색을-회원-반복문-안에-꼭-넣어야-할까",
      "title": "책 검색을 회원 반복문 안에 꼭 넣어야 할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-책-검색을-회원-반복문-안에-꼭-넣어야-할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "중첩 반복문을 넣으라는 설명을 듣고 연결이 더 어려워졌다고 했다.",
      "intent": "서로 독립된 검색을 어떻게 보관해 이어 쓰는지 이해하려 했다.",
      "answer": "반드시 중첩할 필요는 없다. 이름으로 찾은 회원을 target_member에 저장하고, ISBN으로 책을 따로 찾은 뒤 그 회원의 목록을 바꾸면 된다. 책 이름은 Book에서 찾고 회원 정보는 Member에서 찾는다. 검색이 끝난 뒤 단순히 마지막 반복 변수 member를 쓰면 다른 회원을 가리킬 수 있다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-break-다음-코드와-빈-if-때문에-반납-처리에-무엇이-생길까",
      "title": "break 다음 코드와 빈 if 때문에 반납 처리에 무엇이 생길까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-break-다음-코드와-빈-if-때문에-반납-처리에-무엇이-생길까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "마지막 문제에서 단순한 수정 위치를 요청했다.",
      "intent": "실행되지 않는 줄과 아직 작성하지 않은 본문을 찾으려 했다.",
      "answer": "break 뒤에 같은 반복 블록의 코드가 있으면 그 경로에서는 실행되지 않는다. if 다음에 들여쓴 본문이 없으면 문법 오류다. 다만 당시 첫 답변은 실제 오류 메시지를 확보하지 못한 화면 진단이어서 특정 예외가 발생한 사실로 단정하지 않는다. 도서관 전체 목록에서 지우지 않은 책을 반납 때 다시 추가할 필요도 없다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-예시-출력에-맞추는-최소-수정에서-회원-목록에-무엇을-저장할까",
      "title": "예시 출력에 맞추는 최소 수정에서 회원 목록에 무엇을 저장할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-예시-출력에-맞추는-최소-수정에서-회원-목록에-무엇을-저장할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "전체 코드를 크게 바꾸는 답변보다 필요한 변경만 알려 달라고 거듭 요청했다.",
      "intent": "작동 범위를 좁히고 저장 타입과 출력 코드를 맞추려 했다.",
      "answer": "최종 최소안은 Member.book_list에 책 제목 문자열을 저장하고 출력에서 \", \".join(member.book_list)를 쓰는 방식이었다. 앞선 대안은 Book 객체를 넣었으므로 섞으면 안 된다. 문자열 방식은 실습 예시에 한정되며 같은 제목의 여러 책을 구분할 구조까지 해결한 것은 아니다."
    },
    {
      "id": "learning/2026-09-22-library-and-csv#질문-대여-기록을-remove했는데-회원-목록에서도-책을-지워야-할까",
      "title": "대여 기록을 remove했는데 회원 목록에서도 책을 지워야 할까?",
      "url": "/notes/learning/2026-09-22-library-and-csv#질문-대여-기록을-remove했는데-회원-목록에서도-책을-지워야-할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "CSV 한 행에서 도서 대여 상태까지, 값과 역할을 연결하기",
      "context": "마지막으로 정확히 어디에 한 줄을 더할지 요청했다.",
      "intent": "따로 저장한 두 상태가 자동으로 연동되는지 확인하려 했다.",
      "answer": "Rental 목록에서 rental을 지워도 회원의 별도 제목 리스트는 바뀌지 않는다. 최종 답변은 제목 문자열을 저장하는 방식을 전제로 self.rental_list.remove(rental) 다음에 member.book_list.remove(book_name)을 같은 처리 경로에 두는 최소 수정이었다. 이 마지막 수정 후 실제 실행 결과는 기록에 남지 않아 최종 통과로 표시하지 않는다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-메서드에서-쓰지-않는-self도-적어야-할까",
      "title": "메서드에서 쓰지 않는 self도 적어야 할까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-메서드에서-쓰지-않는-self도-적어야-할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "Dog의 메서드가 인스턴스 속성을 읽지 않는데도 self가 필요한지 물었다.",
      "intent": "사용하지 않는 매개변수와 호출 시 자동 전달되는 인자를 구분하려 했다.",
      "answer": "일반 메서드를 dog.bark()로 호출하면 dog가 첫 인자로 전달된다. 본문에서 쓰지 않더라도 받을 자리는 필요하다. def bark():처럼 자리가 없으면 인자 개수 오류가 난다. self라는 철자가 특별한 것이 아니라 호출 방식이 인스턴스를 전달한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-괄호가-비어-있는데-인자-한-개가-전달됐다는-이유는",
      "title": "괄호가 비어 있는데 인자 한 개가 전달됐다는 이유는?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-괄호가-비어-있는데-인자-한-개가-전달됐다는-이유는",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "인자를 쓰지 않은 호출에서 “0개를 받는데 1개가 전달됐다”는 오류가 낯설었다.",
      "intent": "화면의 빈 괄호와 내부 호출 사이의 차이를 확인하려 했다.",
      "answer": "이 예제의 dog.bark()는 Dog.bark(dog)처럼 풀어 볼 수 있다. 변수명 dog라는 글자가 넘어가는 것이 아니라 그 이름이 가리키는 인스턴스가 전달된다. self를 적어서 자동 전달이 생기는 순서가 아니다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-정적-메서드는-무엇이-다를까",
      "title": "정적 메서드는 무엇이 다를까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-정적-메서드는-무엇이-다를까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "인스턴스를 만들지 않고 호출하는 방식과 static의 뜻을 물었다.",
      "intent": "자동 인자 전달을 없애는 방법을 이해하려 했다.",
      "answer": "@staticmethod는 인스턴스나 클래스를 첫 인자로 자동 전달하지 않는다. Dog.check(text)와 dog.check(text) 모두 명시한 text만 받는다. “속성을 사용할 수 없다”는 제한이 아니다. 필요한 객체를 직접 인자로 받으면 그 객체의 속성과 메서드도 사용할 수 있다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-일반-메서드도-클래스-이름으로-호출할-수-있을까",
      "title": "일반 메서드도 클래스 이름으로 호출할 수 있을까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-일반-메서드도-클래스-이름으로-호출할-수-있을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "정적 메서드만 클래스에서 호출 가능하다는 설명처럼 들려 재확인했다.",
      "intent": "접근 가능 여부와 인자를 자동으로 붙이는 여부를 나누려 했다.",
      "answer": "일반 메서드도 Dog.bark(dog)처럼 호출할 수 있다. 이때는 호출에 사용할 인스턴스를 직접 전달한다. 클래스에서 일반 함수를 꺼내 호출하는 것과 인스턴스에서 바인딩된 메서드를 호출하는 것은 첫 인자를 누가 준비하는지가 다르다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-가-붙은-데코레이터는-언제-무엇을-할까",
      "title": "@가 붙은 데코레이터는 언제 무엇을 할까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-가-붙은-데코레이터는-언제-무엇을-할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "staticmethod 설명을 듣다가 데코레이터 자체의 작동이 궁금해졌다.",
      "intent": "기호를 외우기보다 함수가 변환되는 순서를 알고 싶어 했다.",
      "answer": "단순한 함수 데코레이터 @decorate는 정의 뒤 greet = decorate(greet)로 다시 연결하는 형태로 이해한다. 데코레이터 적용은 정의 시점에 일어난다. 데코레이터가 반환한 함수의 본문이 나중에 호출되는 시점과는 다르다. 모든 데코레이터가 단순히 출력문을 앞뒤에 붙이는 것은 아니다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-함수-이름만-쓰면-함수를-전달하는-것일까",
      "title": "함수 이름만 쓰면 함수를 전달하는 것일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-함수-이름만-쓰면-함수를-전달하는-것일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "데코레이터 예시에서 greet와 greet()가 다른 이유를 물었다.",
      "intent": "함수 객체와 실행 결과를 구분하려 했다.",
      "answer": "greet는 함수 객체를 가리키고 greet()는 지금 호출해서 결과를 얻는 식이다. use(greet)는 함수를, use(greet())는 결과를 넘긴다. 단독으로 이름을 적었다고 무조건 어디론가 전달되는 것은 아니다. 주변의 호출식이 그 값을 인자로 사용한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-del로-객체를-없애면-소멸자가-곧바로-실행될까",
      "title": "del로 객체를 없애면 소멸자가 곧바로 실행될까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-del로-객체를-없애면-소멸자가-곧바로-실행될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "생성과 반대로 객체가 사라지는 시점을 물었다.",
      "intent": "변수 삭제와 객체 수명을 연결하려 했다.",
      "answer": "del dog는 그 이름의 연결을 지운다. 다른 이름이나 컨테이너가 같은 객체를 참조하면 객체는 남는다. __del__의 실행 시점에 파일 정리 같은 중요한 동작을 의존하지 않는다. 파일은 with로 사용 범위를 정리한다. 특정 구현에서 관찰한 즉시 정리를 모든 Python 실행환경의 보장으로 확대하면 안 된다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-인스턴스를-만들기-전-클래스와-상속은-설계도만-있는-상태일까",
      "title": "인스턴스를 만들기 전 클래스와 상속은 설계도만 있는 상태일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-인스턴스를-만들기-전-클래스와-상속은-설계도만-있는-상태일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "상속을 정의해도 객체 생성 전에는 무엇이 존재하는지 물었다.",
      "intent": "클래스 정의의 실행과 인스턴스 메서드 실행을 구분하려 했다.",
      "answer": "class 문을 실행하면 클래스 객체가 만들어진다. 아직 Dog 인스턴스는 없어도 Dog가 가리키는 객체는 존재한다. 부모의 메서드를 물려받았다고 그 메서드 본문이 저절로 실행되지는 않는다. 일반 메서드 본문은 해당 호출이 있어야 실행된다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-python-객체를-코드데이터스택힙으로-나누어-이해해도-될까",
      "title": "Python 객체를 코드·데이터·스택·힙으로 나누어 이해해도 될까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-python-객체를-코드데이터스택힙으로-나누어-이해해도-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "다른 언어에서 배운 메모리 영역을 Python 변수와 클래스에 대응시키려 했다.",
      "intent": "이름, 값, 클래스가 실제로 어디에 존재하는지 명확히 하려 했다.",
      "answer": "학습 코드에서는 먼저 이름 공간과 객체의 참조 관계를 추적하는 편이 정확하다. 전역 이름이면 데이터 영역, 지역 이름이면 스택이라는 식으로 곧바로 대응할 수 없다. Python의 객체 모델과 CPython 같은 구현체의 메모리 배치는 설명 층위가 다르다. 클래스 변수의 공유도 저장 영역의 이름이 아니라 속성을 어느 객체에서 찾는지로 설명한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-cpython은-python과-무엇이-다를까",
      "title": "CPython은 Python과 무엇이 다를까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-cpython은-python과-무엇이-다를까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "메모리 설명에 CPython이 등장하자 언어와 실행기의 관계를 되물었다.",
      "intent": "구현에 따른 성질을 언어 자체의 규칙과 구분하려 했다.",
      "answer": "Python은 언어이고 CPython은 그 언어를 실행하는 대표적인 구현이다. 소스의 x = 1만 보고 네이티브 프로그램의 특정 메모리 구역을 확정할 수는 없다. 이름이 객체를 참조한다는 코드 수준 설명과 구현체 내부 구조를 분리한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-대입할-때마다-새-객체가-만들어질까",
      "title": "대입할 때마다 새 객체가 만들어질까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-대입할-때마다-새-객체가-만들어질까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "할당은 새 값 객체를 만드는지 기존 객체를 가리키는지 물었다.",
      "intent": "같은 값과 같은 객체를 구분하려 했다.",
      "answer": "오른쪽 식에 따라 다르다. a = []는 새 리스트를 만들고 b = a는 같은 리스트를 가리키게 한다. a == b는 값 비교이고 a is b는 동일 객체인지 확인한다. 작은 정수 재사용 같은 최적화를 일반적인 대입 규칙으로 삼지 않는다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-오른쪽에-적힌-것은-모두-객체일까",
      "title": "오른쪽에 적힌 것은 모두 객체일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-오른쪽에-적힌-것은-모두-객체일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "대입 설명을 들은 뒤 오른쪽 코드 전체를 객체라고 불러도 되는지 확인했다.",
      "intent": "표현식과 그 평가 결과를 나누려 했다.",
      "answer": "오른쪽에 적힌 소스 글자 자체와 평가해 얻은 객체는 다르다. x = 1 + 2에서는 식을 평가해 정수 객체를 얻고 x가 이를 참조한다. None도 객체다. 평가 도중 예외가 나면 결과 객체를 얻고 대입하는 단계까지 가지 못한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-classmethod의-cls는-어떻게-클래스가-될까",
      "title": "classmethod의 cls는 어떻게 클래스가 될까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-classmethod의-cls는-어떻게-클래스가-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "클래스 자체도 객체라는 설명 뒤 클래스 메서드의 첫 인자를 물었다.",
      "intent": "self와 cls가 단순 이름인지 호출 규칙인지 확인하려 했다.",
      "answer": "@classmethod로 정의한 메서드를 호출하면 클래스가 첫 인자로 바인딩된다. cls는 관례적인 이름이다. 이름을 self로 바꿔도 받는 대상은 클래스다. 다만 실제 인스턴스를 뜻하는 self와 혼동되므로 cls를 쓴다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-점으로-접근하는-것과-메서드를-실행하는-것은-같을까",
      "title": "점으로 접근하는 것과 메서드를 실행하는 것은 같을까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-점으로-접근하는-것과-메서드를-실행하는-것은-같을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "dog.introduce 같은 표현이 무엇을 가져오는지 물었다.",
      "intent": "속성 조회와 함수 호출의 경계를 찾으려 했다.",
      "answer": "이 일반 메서드 예시에서 dog.introduce는 호출할 인스턴스와 함수를 연결한 바인딩된 메서드를 얻고, dog.introduce()가 그것을 호출한다. dog.name은 속성 조회다. dog.name = \"초코\"처럼 대입 왼쪽에 있으면 속성을 설정하는 동작이다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-부모-클래스의-area에-pass만-있으면-자식이-꼭-구현해야-할까",
      "title": "부모 클래스의 area에 pass만 있으면 자식이 꼭 구현해야 할까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-부모-클래스의-area에-pass만-있으면-자식이-꼭-구현해야-할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "Shape.area의 빈 본문이 어떤 역할인지 물었다.",
      "intent": "상속용 틀과 강제 규칙의 차이를 확인하려 했다.",
      "answer": "pass는 아무 동작도 하지 않는 문장이다. 그대로 호출하면 함수 끝에 도달해 None을 반환한다. 자식이 같은 이름의 메서드를 정의하면 재정의되지만, pass 자체가 재정의를 강제하지는 않는다. 강제하고 싶을 때 쓰는 추상 메서드는 별도 장치다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-클래스-안의-count를-count--1로-늘리면-왜-오류가-날까",
      "title": "클래스 안의 count를 count += 1로 늘리면 왜 오류가 날까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-클래스-안의-count를-count--1로-늘리면-왜-오류가-날까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "Counter를 만들면서 누적 횟수 변경에 오류가 났다.",
      "intent": "지역 변수, 인스턴스 속성, 클래스 속성 중 어느 것을 바꾸는지 찾으려 했다.",
      "answer": "함수 안에서 count += 1은 count에 대입하므로 지역 이름으로 취급된다. 먼저 읽을 지역 값이 없으면 UnboundLocalError가 난다. 공용 횟수를 바꾸려는 예제라면 Counter.count += 1이다. self.count += 1은 기본적인 속성 동작에서는 클래스 값을 읽은 뒤 인스턴스 속성에 저장해 공용 값과 갈라질 수 있다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-acount--10은-클래스-변수도-바꿀까",
      "title": "a.count = 10은 클래스 변수도 바꿀까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-acount--10은-클래스-변수도-바꿀까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "얕은 복사를 묻다가 클래스 속성 가리기까지 다시 확인했다.",
      "intent": "조회와 대입이 같은 대상을 다루는지 확인하려 했다.",
      "answer": "인스턴스 a에 별도 count가 없다면 a.count 조회가 클래스 값으로 이어질 수 있다. 하지만 일반적인 a.count = 10은 a의 속성을 만들거나 바꾼다. 다른 인스턴스는 여전히 클래스의 값을 읽을 수 있다. 이것은 숫자를 공유 메모리 구역에 넣는 문제가 아니라 속성 조회와 저장 위치의 문제다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-얕은-복사는-겉-리스트만-새로-만드는-것일까",
      "title": "얕은 복사는 겉 리스트만 새로 만드는 것일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-얕은-복사는-겉-리스트만-새로-만드는-것일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "중첩 리스트의 복사를 보고 바깥과 안쪽이 같은 객체인지 물었다.",
      "intent": "복사 뒤 어느 수정이 원본에 보이는지 예상하려 했다.",
      "answer": "b = a.copy()는 새 바깥 리스트를 만들지만 안쪽 객체의 참조를 그대로 담는다. a = [[1, 2], [3, 4]]라면 a is b는 False, a[0] is b[0]는 True다. b.append([5])는 바깥 b만 바꾸고 b[0].append(9)는 공유한 안쪽 리스트를 바꾼다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-복사는-리스트에만-있는-개념일까",
      "title": "복사는 리스트에만 있는 개념일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-복사는-리스트에만-있는-개념일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "얕은 복사를 다른 객체에도 적용할 수 있는지 물었다.",
      "intent": "자료형별 메서드와 공통 복사 개념을 구분하려 했다.",
      "answer": "딕셔너리에도 얕은 복사가 있고 일반 인스턴스에도 copy.copy()를 적용할 수 있다. 모든 객체에 .copy() 메서드가 있는 것은 아니다. 복사 가능 여부와 동작은 객체 종류에 따라 다르다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-깊은-복사는-정확히-무엇을-복사할까",
      "title": "깊은 복사는 정확히 무엇을 복사할까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-깊은-복사는-정확히-무엇을-복사할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "deepcopy의 정의를 다시 요청했다.",
      "intent": "중첩된 참조를 어느 단계까지 따라가는지 확인하려 했다.",
      "answer": "copy.deepcopy()는 내부에서 참조하는 객체를 재귀적으로 복사한다. 중첩된 가변 객체의 변경이 원본과 분리되게 하는 데 유용하다. 불변 객체는 그대로 재사용될 수 있고 공유 관계나 순환 참조도 처리하므로 “모든 메모리를 무조건 새로 만든다”는 뜻은 아니다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-객체지향을-더-공부하려면-어떤-질문으로-이어가면-좋을까",
      "title": "객체지향을 더 공부하려면 어떤 질문으로 이어가면 좋을까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-객체지향을-더-공부하려면-어떤-질문으로-이어가면-좋을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "기본 호출 뒤에도 더 깊은 개념을 요청했다.",
      "intent": "새 용어를 외우기보다 지금 코드의 혼란을 풀 다음 주제를 찾으려 했다.",
      "answer": "당시 대화에서는 바인딩·동일성·가변성·속성 탐색을 먼저 연결하고, 객체가 지킬 조건과 역할 분리, 상속과 합성, 다형성으로 넓히는 방향이 제시됐다. 이는 후속 학습 제안이며 해당 내용을 모두 구현하거나 익혔다는 기록은 아니다. 이번 정리는 바로 이어진 사례인 객체 상태와 합성까지 다룬다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-sample_id-int와---str은-값을-넣는-문법일까",
      "title": "sample_id: int와 -> str은 값을 넣는 문법일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-sample_id-int와---str은-값을-넣는-문법일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "TextSample에서 타입 표기가 처음 등장했다.",
      "intent": "매개변수 이름, 기본값, 반환값과 타입 힌트를 구분하려 했다.",
      "answer": "sample_id: int는 sample_id가 정수일 것으로 기대한다는 타입 표기이고 -> str은 반환 타입 표기다. 값을 대입하거나 실제 값을 반환하는 문장이 아니다. return은 따로 필요하고, Python 실행 자체가 모든 타입 힌트를 검사해 주지도 않는다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-정수여야-한다가-아니라-정수일-것으로-기대한다는-이유는",
      "title": "정수여야 한다가 아니라 정수일 것으로 기대한다는 이유는?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-정수여야-한다가-아니라-정수일-것으로-기대한다는-이유는",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "타입 설명의 표현이 느슨하게 들려 다시 물었다.",
      "intent": "힌트와 실행 시 검증의 효력을 비교하려 했다.",
      "answer": "타입 힌트만 있는 함수는 다른 타입의 인자를 받아도 호출 자체가 바로 차단되지는 않는다. 본문에서 +나 .strip()을 실행하다 실제 타입에 맞지 않아 오류가 날 수 있다. 실행 시 거절하려면 별도 검사와 예외 처리를 작성한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-__str__와-__len__은-타입-힌트와-같은-약속일까",
      "title": "__str__와 __len__은 타입 힌트와 같은 약속일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-__str__와-__len__은-타입-힌트와-같은-약속일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "두 특수 메서드의 이름과 반환 형식이 낯설었다.",
      "intent": "내장 함수가 객체의 어떤 메서드를 사용하는지 이해하려 했다.",
      "answer": "str(sample)이나 print(sample)에서 쓰는 __str__는 문자열을 반환해야 한다. len(sample)에 쓰는 __len__는 유효한 비음수 정수를 반환해야 한다. 이는 -> str, -> int라는 주석만의 기대와 다르며 내장 동작이 실제로 요구하는 계약이다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-문자열과-정수는-어떻게-검증하면-될까",
      "title": "문자열과 정수는 어떻게 검증하면 될까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-문자열과-정수는-어떻게-검증하면-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "TextSample.validate를 구현하기 위한 조건을 물었다.",
      "intent": "조건 검사 순서와 타입 검사 기준을 정하려 했다.",
      "answer": "isinstance(text, str) and bool(text.strip())는 문자열인지 먼저 확인한 뒤 공백만 있는지 검사한다. and가 단락 평가하므로 문자열이 아닐 때 strip을 호출하지 않는다. isinstance(True, int)는 True이므로 bool을 제외한 정확한 int만 허용하려는 조건이라면 type(sample_id) is int처럼 요구에 맞게 정한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-정적-메서드-안에서도-다른-인스턴스-메서드를-호출할-수-있을까",
      "title": "정적 메서드 안에서도 다른 인스턴스 메서드를 호출할 수 있을까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-정적-메서드-안에서도-다른-인스턴스-메서드를-호출할-수-있을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "정적 메서드는 속성이나 메서드를 사용할 수 없다고 생각했다.",
      "intent": "접근 제한과 자동 전달의 차이를 실제 호출에 적용하려 했다.",
      "answer": "가능하다. @staticmethod인 relay(speaker) 안에서 speaker.say()를 호출할 수 있다. 다만 speaker를 자동으로 받지 않으므로 호출자가 전달해야 한다. 이 차이를 python/methods-types-and-inheritance의 예제로 확인할 수 있다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-텍스트만-받는-is_valid_text에서-sample-전체를-검증할-수-있을까",
      "title": "텍스트만 받는 is_valid_text에서 sample 전체를 검증할 수 있을까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-텍스트만-받는-is_valid_text에서-sample-전체를-검증할-수-있을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "텍스트용 정적 메서드와 인스턴스 validate의 연결이 헷갈렸다.",
      "intent": "현재 인자로 가진 정보의 범위를 따지려 했다.",
      "answer": "text만 받은 함수는 그 문자열을 검사할 수 있지만 자동으로 어떤 TextSample의 sample_id와 label을 알지는 못한다. 인스턴스의 validate에서 self.text를 검사 함수로 넘기는 방향이 자연스럽다. 인스턴스를 사용하려면 무조건 그 자리에서 생성자를 다시 호출해야 하는 것은 아니다. 이미 받은 객체를 사용할 수 있다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-공백-문자열과-문장부호는-어떤-기준으로-처리할까",
      "title": "공백 문자열과 문장부호는 어떤 기준으로 처리할까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-공백-문자열과-문장부호는-어떤-기준으로-처리할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "공백만 있는 텍스트와 RemovePunctuation의 제거 범위를 물었다.",
      "intent": "작동하는 조건과 문제에 명시된 범위를 구분하려 했다.",
      "answer": "\"   \".strip()은 빈 문자열이므로 유효한 내용이 없다고 판단할 수 있다. string.punctuation을 쓰면 ASCII 문장부호를 검사한다. 모든 언어의 모든 문장부호가 포함되는 것은 아니다. 당시 문제 예시만으로 유니코드 전체 제거를 요구한다고 단정할 수 없었다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-문장부호를-빼고-문자열을-다시-만들려면",
      "title": "문장부호를 빼고 문자열을 다시 만들려면?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-문장부호를-빼고-문자열을-다시-만들려면",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "RemovePunctuation 클래스의 전체 작성 예를 요청했다.",
      "intent": "조건으로 문자를 거른 뒤 결과를 결합하는 과정을 연결하려 했다.",
      "answer": "문자열을 순회하며 제거 대상이 아닌 문자만 모아 join으로 이어 붙인다. 원본 문자열의 문자를 제자리에서 지우는 방식은 아니다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-return을-썼는데-파이프라인-결과가-none인-이유는",
      "title": "return을 썼는데 파이프라인 결과가 None인 이유는?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-return을-썼는데-파이프라인-결과가-none인-이유는",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "저장된 코드만 읽은 답변이 pass를 원인으로 지목했지만, 사용자는 화면에 return이 있다고 바로잡았다. 이후 run 코드를 직접 제시했다.",
      "intent": "실제 실행 경로에서 값이 끊기는 위치를 찾으려 했다.",
      "answer": "당시 최종 제시된 PreprocessingPipeline.run은 각 처리기의 반환값을 text에 다시 넣지만 반복이 끝난 값을 반환하지 않았다. return은 개별 처리기뿐 아니라 run에도 필요하다. 이전 화면 진단은 최신 편집 내용과 맞지 않았으며 이를 분리해야 한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-분류기는-어떤-단어를-어느-결과로-바꾸는-문제일까",
      "title": "분류기는 어떤 단어를 어느 결과로 바꾸는 문제일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-분류기는-어떤-단어를-어느-결과로-바꾸는-문제일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "KeywordClassifier의 문제 규칙 자체를 다시 요청했다.",
      "intent": "구현 전 입력과 출력 조건을 확인하려 했다.",
      "answer": "당시 규칙은 python 또는 class이면 python, rag 또는 retrieval이면 rag, ai·machine·model·language 중 하나이면 ai, 어느 것도 없으면 unknown이었다. 여러 범주의 단어가 함께 있는 문장의 우선순위는 예시만으로 확정하지 않는다. if/elif 순서를 정하면 먼저 참인 조건이 결과를 결정한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-if-python-or-class-in-text가-왜-항상-첫-분류로-갈까",
      "title": "if \"python\" or \"class\" in text가 왜 항상 첫 분류로 갈까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-if-python-or-class-in-text가-왜-항상-첫-분류로-갈까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "분류기 테스트 네 개가 모두 python으로 나왔다.",
      "intent": "필터 결과가 입력과 무관해진 조건을 찾으려 했다.",
      "answer": "이 식은 (\"python\") or (\"class\" in text)로 평가된다. 빈 문자열이 아닌 python 자체가 참으로 취급되어 입력을 검사하지 않아도 조건을 통과한다. \"python\" in text or \"class\" in text처럼 양쪽 모두 포함 검사를 쓴다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-python은-문자열인데-어떻게-true가-될까",
      "title": "python은 문자열인데 어떻게 True가 될까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-python은-문자열인데-어떻게-true가-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "rag 문장에 python이 없는데도 참이라는 설명이 납득되지 않았다.",
      "intent": "문자열의 타입과 조건 문맥의 참·거짓을 구분하려 했다.",
      "answer": "python은 여전히 문자열이다. if는 객체를 조건으로 해석할 때 참·거짓을 판단하고 비어 있지 않은 문자열은 참이다. 문자열 내용이 입력 문장 안에 있는지를 검사하는 기능은 없다. 그 검사는 in을 써야 한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-단어-in-문장과-단어1-단어2-in-문장은-같은-검사일까",
      "title": "단어 in 문장과 단어1, 단어2 in 문장은 같은 검사일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-단어-in-문장과-단어1-단어2-in-문장은-같은-검사일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "따옴표, in의 방향, 쉼표로 두 단어를 묶는 방법을 이어서 물었다.",
      "intent": "포함 조건을 정확한 문법으로 표현하려 했다.",
      "answer": "\"python\" in text가 “문장에 단어가 포함됐는가”다. 쉼표는 두 포함 조건을 묶는 or가 아니다. 둘 중 하나면 \"python\" in text or \"class\" in text, 둘 다면 and를 쓴다. text in \"python\"은 검사 방향이 반대다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-typemodel__name__과-print의-쉼표는-무엇일까",
      "title": "type(model).__name__과 print의 쉼표는 무엇일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-typemodel__name__과-print의-쉼표는-무엇일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "클래스 이름을 출력하면서 f-string 없이 쉼표를 쓴 이유를 물었다.",
      "intent": "클래스 객체, 이름 문자열, 출력 형식을 구분하려 했다.",
      "answer": "type(model)은 클래스이고 그 __name__은 이름 문자열이다. print(name, \"->\", result)는 세 인자를 기본 공백으로 구분해 출력한다. print(f\"{name} -> {result}\")는 문자열 하나를 먼저 만들어 전달한다. 문자열 출력에 f가 항상 필요한 것은 아니다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-prediction은-분류하는-클래스일까-결과를-담는-클래스일까",
      "title": "Prediction은 분류하는 클래스일까, 결과를 담는 클래스일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-prediction은-분류하는-클래스일까-결과를-담는-클래스일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "11번 문제를 반복해서 설명해 달라고 한 뒤 작성 예를 요청했다.",
      "intent": "이미 만든 모델과 새 객체의 역할을 나누려 했다.",
      "answer": "Prediction은 이미 계산된 sample_id, input_text, processed_text, prediction 네 값을 저장한다. 분류 계산은 모델이 한다. __str__가 [1] python만 보여 주더라도 원본과 전처리 문자열은 객체에 그대로 보관될 수 있다. 출력 형식이 저장된 속성 전체를 뜻하지 않는다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-속성-초기화가-__str__에-있으면-왜-안-될까",
      "title": "속성 초기화가 __str__에 있으면 왜 안 될까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-속성-초기화가-__str__에-있으면-왜-안-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "화면에서 값 저장 코드가 __init__이 아니라 str 안에 있어 이유를 물었다.",
      "intent": "객체를 만들 때와 출력할 때 실행되는 일을 나누려 했다.",
      "answer": "네 속성은 __init__에서 저장하는 것이 해당 실습의 구조다. __str__는 이미 저장된 self.sample_id와 self.prediction으로 문자열을 만든다. __init__의 지역 매개변수 sample_id가 별도 메서드에도 자동으로 이어지는 것은 아니다. 들여쓰기로 어느 메서드 본문인지 확인해야 한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-aienginerun에서-앞서-만든-클래스들을-어떻게-연결할까",
      "title": "AIEngine.run에서 앞서 만든 클래스들을 어떻게 연결할까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-aienginerun에서-앞서-만든-클래스들을-어떻게-연결할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "클래스를 하나씩 만들었지만 이름과 역할이 한꺼번에 혼동됐다.",
      "intent": "한 문장이 이동하는 순서로 전체 흐름을 잡으려 했다.",
      "answer": "TextSample에서 원문을 꺼내 pipeline.run에 넣고, 나온 문자열을 model.predict에 넣고, 결과를 Prediction에 묶는다. 엔진은 이 순서를 연결한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-100-none에서-none은-샘플-번호가-잘못된-것일까",
      "title": "[100] None에서 None은 샘플 번호가 잘못된 것일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-100-none에서-none은-샘플-번호가-잘못된-것일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "12-1 결과를 보고 sample_id가 None인지 물었다.",
      "intent": "출력 위치와 실제 속성을 대응시키려 했다.",
      "answer": "당시 [100]은 번호였고 뒤의 None이 분류 결과였다. 코드에서는 predicition에 계산값을 저장하고 prediction을 결과 생성자에 전달했다. 두 이름은 별개다. 출력 문자열의 각 부분이 어느 속성에서 왔는지 추적해야 원인 위치를 잡을 수 있다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-오타가-있는데-왜-nameerror가-아니라-none이-나왔을까",
      "title": "오타가 있는데 왜 NameError가 아니라 None이 나왔을까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-오타가-있는데-왜-nameerror가-아니라-none이-나왔을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "두 철자가 다른데 예외 없이 반환된 점을 다시 물었다.",
      "intent": "노트북에 남은 이름이 함수에 끼치는 영향을 확인하려 했다.",
      "answer": "함수 안에 prediction 대입이 없고 바깥 이름 공간에 prediction이 있으면 그 값을 읽을 수 있다. 당시 답변은 이전 셀의 prediction을 원인으로 설명했다. 원문에 런타임 전체 덤프가 남은 것은 아니므로 남은 전역 값은 설명 가능한 원인으로 구분한다. 아래는 재현용 보충 예다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-raw_samples는-딕셔너리일까-딕셔너리들의-리스트일까",
      "title": "raw_samples는 딕셔너리일까, 딕셔너리들의 리스트일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-raw_samples는-딕셔너리일까-딕셔너리들의-리스트일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "id와 text가 한 중괄호 안에 같이 있는 구조가 낯설었다.",
      "intent": "컨테이너의 바깥과 안쪽 타입을 각각 읽으려 했다.",
      "answer": "전체는 리스트이고 항목 하나가 딕셔너리다. 당시 항목에는 id·text·label 세 쌍이 있었다. raw_samples[0]으로 한 딕셔너리를 꺼낸 뒤 raw_samples[0][\"text\"]로 그 안의 문자열을 꺼낸다. 딕셔너리는 키·값 쌍을 여러 개 가질 수 있다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-컴프리헨션에서-for-앞에-textsample을-쓰는-이유는",
      "title": "컴프리헨션에서 for 앞에 TextSample을 쓰는 이유는?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-컴프리헨션에서-for-앞에-textsample을-쓰는-이유는",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "13번 변환 코드에서 결과를 만드는 식이 앞에 있어 순서가 헷갈렸다.",
      "intent": "각 반복에서 객체가 한 번씩 만들어지는지 확인하려 했다.",
      "answer": "[TextSample(item[\"id\"], item[\"text\"], item[\"label\"]) for item in raw_samples]는 항목을 item에 넣은 뒤 앞의 식을 평가해 결과 리스트에 추가한다. 객체 하나를 미리 만든 뒤 반복하는 것이 아니다. 일반 for문의 append 안 표현식을 앞에 쓴 것으로 풀어 보면 된다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-뒤에서-꺼낸-변수를-앞의-식에서-어떻게-사용할까",
      "title": "뒤에서 꺼낸 변수를 앞의 식에서 어떻게 사용할까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-뒤에서-꺼낸-변수를-앞의-식에서-어떻게-사용할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "num이 for 뒤에 나오는데 앞의 num * 10에서 이미 사용되는 점을 되물었다.",
      "intent": "작성 순서와 실행 순서가 다른 문법을 이해하려 했다.",
      "answer": "[num * 10 for num in numbers]는 글의 왼쪽부터 모든 부분을 실행하는 문장이 아니다. 반복에서 num을 먼저 바인딩하고 결과 식을 계산한다. 실행을 추적할 때는 for절을 먼저 읽고 앞의 식으로 돌아온다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-for-앞의-식에서-반복-변수를-사용하지-않아도-될까",
      "title": "for 앞의 식에서 반복 변수를 사용하지 않아도 될까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-for-앞의-식에서-반복-변수를-사용하지-않아도-될까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "결과 식과 반복 변수의 관계를 일반화했다.",
      "intent": "항목의 값이 아니라 반복 횟수만 쓰는 경우를 확인하려 했다.",
      "answer": "가능하다. [\"안녕\" for _ in [1, 2, 3]]은 안녕 세 개가 든 리스트다. 반복 변수는 결과 식 외에 뒤의 필터 조건에서만 쓰일 수도 있다. 나중의 1 for sample in samples if ...가 바로 조건을 통과할 때마다 같은 1을 내는 사례다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-count_by_prediction은-어떤-것을-하나씩-세는-함수일까",
      "title": "count_by_prediction은 어떤 것을 하나씩 세는 함수일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-count_by_prediction은-어떤-것을-하나씩-세는-함수일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "15번 집계 함수를 구현할 지식부터 요청했다.",
      "intent": "객체를 세는 일과 그 객체의 특정 속성별로 세는 일을 연결하려 했다.",
      "answer": "self.predictions에서 Prediction 객체를 하나씩 꺼내 result.prediction 문자열을 읽는다. 처음 나온 문자열이면 1을 저장하고, 이미 키가 있으면 1을 더한다. 빈 딕셔너리에서 바로 counts[category] += 1을 하면 없는 키를 읽어 오류가 난다. 모든 반복 뒤 완성된 counts를 반환한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-predictions에는-엔진-객체가-들어-있을까-결과-객체가-들어-있을까",
      "title": "predictions에는 엔진 객체가 들어 있을까, 결과 객체가 들어 있을까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-predictions에는-엔진-객체가-들어-있을까-결과-객체가-들어-있을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "분석기에 전달된 매개변수 안의 실제 값을 물었다.",
      "intent": "생성자, 실행 도구, 실행 결과를 분리하려 했다.",
      "answer": "[engine.run(sample) for sample in samples]는 각 run이 반환한 Prediction 객체를 모은 리스트다. 엔진을 다섯 개 담은 것이 아니다. 첫 항목은 번호 1, 원문, 전처리문, 분류 python을 각각 속성으로 가진다. 분석기는 리스트를 받아 저장한 뒤 필요한 분류 속성만 읽는다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-객체-관계와-실행-순서를-그림으로-나눌-수-있을까",
      "title": "객체 관계와 실행 순서를 그림으로 나눌 수 있을까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-객체-관계와-실행-순서를-그림으로-나눌-수-있을까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "머릿속으로만 관계를 추적하기 어려워 실제 값이 보이는 그림을 요청했다.",
      "intent": "무엇을 보관하는지와 누구를 호출하는지를 따로 보고 싶어 했다.",
      "answer": "객체가 가진 참조와 호출 순서는 서로 다른 정보다. 엔진은 파이프라인과 모델을 보관하고, 실행 중에는 전처리 → 예측 → 결과 객체 생성 순서로 호출한다. 당시 별도 HTML은 생성됐지만 요청한 Chrome 자동 열기는 완료되지 않았다고 보고됐다. 아래는 공개 글을 위한 보충 도식이다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-correct_count는-분류별-개수와-무엇이-다를까",
      "title": "correct_count는 분류별 개수와 무엇이 다를까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-correct_count는-분류별-개수와-무엇이-다를까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "집계 함수 다음에 정답 개수 함수의 역할을 물었다.",
      "intent": "정답 라벨과 예측 라벨 중 무엇을 비교하는지 확인하려 했다.",
      "answer": "분류별 집계는 python이 몇 번 예측됐는지를 센다. correct_count는 같은 샘플의 sample.label == result.prediction을 비교해 맞힌 개수를 센다. zip으로 묶는다면 두 리스트가 같은 샘플 순서이며 길이가 일치하는지 전제가 필요하다. 이는 정답과 예측을 짝짓는 문제다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-맞힌-개수를-세었는데-accuracy에서-오류가-나는-이유는",
      "title": "맞힌 개수를 세었는데 accuracy에서 오류가 나는 이유는?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-맞힌-개수를-세었는데-accuracy에서-오류가-나는-이유는",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "15번 오류를 다시 확인했다.",
      "intent": "앞 메서드의 반환값이 다음 계산에 무엇으로 들어가는지 추적하려 했다.",
      "answer": "당시 correct_count에는 마지막 return count가 빠져 있었다. 계산을 해도 반환하지 않으면 호출자는 None을 받고 이후 float 변환 등이 실패한다. return은 반복 밖에서 전체 개수를 돌려준다. 파이프라인의 None 문제와 같은 반환 연결 문제다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-정확도가-10이면-이상한-결과일까",
      "title": "정확도가 1.0이면 이상한 결과일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-정확도가-10이면-이상한-결과일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "실습 정확도가 1.0이 나와 가능한 수치인지 물었다.",
      "intent": "비율과 퍼센트, 작은 예제의 성공 범위를 구분하려 했다.",
      "answer": "당시 확인한 다섯 예제는 정답과 예측이 모두 일치했다. 5 / 5 = 1.0은 100%다. 이것은 그 다섯 문장에 대한 결과이며 새 문장 모두에 대한 성능 보장은 아니다. 실습 출력 확인을 일반적인 모델 성능이나 학습자의 숙련도 증거로 확대하지 않는다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-samplelabel-for-sample-in-samples는-값-없는-딕셔너리일까",
      "title": "{sample.label for sample in samples}는 값 없는 딕셔너리일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-samplelabel-for-sample-in-samples는-값-없는-딕셔너리일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "중괄호를 보고 딕셔너리의 키만 채우는 것인지 물었다.",
      "intent": "집합과 딕셔너리 컴프리헨션을 구분하려 했다.",
      "answer": "이 표현은 set을 만든다. sample 객체에서 꺼낸 label 문자열을 모으므로 중복 라벨은 하나만 남는다. 딕셔너리는 {sample.sample_id: sample.label for sample in samples}처럼 키:값을 적는다. 빈 {}는 딕셔너리이고 빈 집합은 set()이다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-집합은-딕셔너리의-키와-같은-것일까",
      "title": "집합은 딕셔너리의 키와 같은 것일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-집합은-딕셔너리의-키와-같은-것일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "set을 값 없는 딕셔너리처럼 이해해도 되는지 되물었다.",
      "intent": "공통 성질과 실제 자료형을 구분하려 했다.",
      "answer": "둘 다 중복 없는 해시 가능한 항목을 다룬다는 점은 연결된다. 하지만 set 자체와 딕셔너리는 다른 타입이고, 딕셔너리의 개별 키가 set인 것도 아니다. 딕셔너리는 각 키에 값을 연결하고, set은 항목의 존재와 집합 연산을 다룬다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-label_counts의-sum-안에서-왜-1을-반복할까",
      "title": "label_counts의 sum 안에서 왜 1을 반복할까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-label_counts의-sum-안에서-왜-1을-반복할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "이중으로 보이는 컴프리헨션에서 숫자가 밸류가 되는 과정이 끊겼다.",
      "intent": "필터, 개수 세기, 딕셔너리 생성을 순서로 펼치려 했다.",
      "answer": "바깥 반복은 개수를 세려는 label 하나를 고른다. 안쪽은 해당 label과 같은 sample만 통과시키고 매번 1을 내보낸다. 그 합이 개수가 되어 해당 키의 값이 된다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-컴프리헨션-뒤의-if는-어떤-값을-넣을지-고르는-것일까",
      "title": "컴프리헨션 뒤의 if는 어떤 값을 넣을지 고르는 것일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-컴프리헨션-뒤의-if는-어떤-값을-넣을지-고르는-것일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "조건이 붙은 컴프리헨션을 처음 봤다고 했다.",
      "intent": "조건이 거짓인 항목이 결과에 어떻게 남는지 확인하려 했다.",
      "answer": "뒤의 if는 필터다. [n * 10 for n in [1, 2, 3, 4] if n % 2 == 0]은 [20, 40]이다. 거짓인 항목 자리에 0이나 None을 넣지 않는다. 항목 가져오기 → 조건 검사 → 통과하면 결과 식 계산 순서다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-sum-안에-대괄호가-없는데도-리스트가-생길까",
      "title": "sum 안에 대괄호가 없는데도 리스트가 생길까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-sum-안에-대괄호가-없는데도-리스트가-생길까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "설명 중 [1, 1]이라는 값 예시를 보고 실제 중간 리스트가 만들어지는지 물었다.",
      "intent": "값의 흐름을 그린 예시와 실제 생성 타입을 구분하려 했다.",
      "answer": "sum([1 for ...])는 리스트를 먼저 만들지만 sum(1 for ...)는 제너레이터 표현식을 소비한다. 함수에 유일한 인자로 전달할 때 제너레이터 표현식 괄호 한 겹을 생략할 수 있다. 설명용 [1, 1] 표기는 실제 리스트 할당의 증거가 아니다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-제너레이터는-언제-계산하고-어디까지-진행했는지-기억할까",
      "title": "제너레이터는 언제 계산하고 어디까지 진행했는지 기억할까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-제너레이터는-언제-계산하고-어디까지-진행했는지-기억할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "처음 접한 generator를 자세히 설명해 달라고 했다.",
      "intent": "리스트를 한꺼번에 만드는 방식과 비교하려 했다.",
      "answer": "제너레이터는 next 요청 때 실행을 진행해 다음 값을 내고 멈춘다. (n * 10 for n in [1, 2, 3])에 next를 세 번 호출하면 10, 20, 30이고 이후는 StopIteration이다. 한 번 소진한 제너레이터를 sum에 다시 주면 남은 값이 없어 0이다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-직접-next를-쓰지-않았는데-누가-다음-값을-요청할까",
      "title": "직접 next를 쓰지 않았는데 누가 다음 값을 요청할까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-직접-next를-쓰지-않았는데-누가-다음-값을-요청할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "제너레이터가 이전의 이터레이터와 닮았다는 점을 짚었다.",
      "intent": "숨겨진 반복 소비 주체를 찾으려 했다.",
      "answer": "제너레이터는 이터레이터의 한 종류다. sum(values)와 for가 반복 프로토콜을 통해 다음 값을 요청한다. 직접 while/next/except로 펼친 코드는 동작을 이해하기 위한 모형이지 내장 sum의 실제 구현 소스를 옮긴 것은 아니다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-stopiteration을-except로-받는-이유와-yield의-역할은",
      "title": "StopIteration을 except로 받는 이유와 yield의 역할은?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-stopiteration을-except로-받는-이유와-yield의-역할은",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "예외 처리 부분과 제너레이터를 만드는 다른 방법을 함께 물었다.",
      "intent": "값을 내는 것, 끝을 알리는 것, 예외 처리 문법을 나누려 했다.",
      "answer": "StopIteration은 더 이상 값이 없다는 종료 신호다. for는 이를 받아 반복을 끝낸다. 함수 안에 yield를 쓰면 호출 시 제너레이터 객체를 만들고, next 때 yield까지 진행한 뒤 멈춘다. return은 그 실행을 끝내고 yield는 값을 내며 일시 정지한다. 자세한 기본 비교는 python/iterables-and-iterators로 연결한다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-제너레이터-표현식을-대입하면-아무-일도-안-하는-것일까",
      "title": "제너레이터 표현식을 대입하면 아무 일도 안 하는 것일까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-제너레이터-표현식을-대입하면-아무-일도-안-하는-것일까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "values에 표현식을 넣는 줄은 객체 정의뿐이라고 이해해도 되는지 확인했다.",
      "intent": "생성 시점의 실행과 지연되는 실행의 경계를 확인하려 했다.",
      "answer": "객체 생성도 실행이다. 가장 바깥 반복 대상의 식을 평가하고 그 이터레이터를 얻는 준비는 생성 시점에 한다. 각 항목의 n * 10 같은 본문 계산은 다음 값을 요청할 때 진행한다. “모든 코드가 무조건 나중에 실행된다”는 표현은 너무 넓다."
    },
    {
      "id": "learning/2026-09-21-oop-text-pipeline#질문-제너레이터가-아닌-이터레이터는-어떻게-만들까",
      "title": "제너레이터가 아닌 이터레이터는 어떻게 만들까?",
      "url": "/notes/learning/2026-09-21-oop-text-pipeline#질문-제너레이터가-아닌-이터레이터는-어떻게-만들까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "self에서 전처리 파이프라인까지, 객체가 이어지는 과정",
      "context": "generator가 iterator의 한 종류임을 확인한 뒤 나머지 종류를 물었다.",
      "intent": "공통 인터페이스와 생성 방법을 분리하려 했다.",
      "answer": "iter([10, 20, 30])은 리스트 이터레이터다. next를 호출해도 원본 리스트를 삭제하는 것이 아니라 읽는 위치가 이동한다. 직접 만들 때는 __iter__에서 자신을 반환하고 __next__에서 다음 값 또는 StopIteration을 제공한다. 제너레이터의 실행 상태는 Python이 관리하고 직접 만든 이터레이터는 보통 속성으로 진행 상태를 관리한다."
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison#질문-undefined는-판매-구분-비교에서만-제외하면-되는가",
      "title": "Undefined는 판매 구분 비교에서만 제외하면 되는가?",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison#질문-undefined는-판매-구분-비교에서만-제외하면-되는가",
      "topic": "데이터 분석",
      "sourceTitle": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "context": "전날 Undefined를 어떻게 다룰지 이야기한 뒤, 판매 구분별 집계 부분만 최소 수정해 달라고 요청했다.",
      "intent": "필요한 분석 범위에만 제외 조건을 적용하고 전체 예약 정보는 유지하려는 질문이다.",
      "answer": "집계 직전에 판매 구분이 Undefined가 아닌 행을 고르면 된다. Undefined는 NaN이 아닌 문자열이므로 dropna()로 같은 일을 할 수 없다. 판단 근거는 단순히 건수가 적다는 점이 아니라 해당 예약의 판매 구분을 알 수 없다는 점이다."
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison#질문-loc로-선택하면-원본도-삭제되는가",
      "title": "loc로 선택하면 원본도 삭제되는가?",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison#질문-loc로-선택하면-원본도-삭제되는가",
      "topic": "데이터 분석",
      "sourceTitle": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "context": "제외 조건을 읽으며 .loc 선택이 기존 표 자체를 바꾸는지 물었다.",
      "intent": "결과를 선택하는 연산과 기존 값에 대입하는 연산을 구분하려는 질문이다.",
      "answer": "위 코드의 .loc[조건]은 조건에 맞는 행을 반환한다. 이를 별도 변수에 저장하는 것과 analysis.loc[조건, \"열\"] = 값으로 원본에 대입하는 것은 다르다. 이 설명은 모든 .loc 반환값이 언제나 완전히 독립적인 깊은 복사라는 뜻이 아니다."
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison#질문-groups와-online-ta만-골랐는데-왜-다른-열이-계속-보이는가",
      "title": "Groups와 Online TA만 골랐는데 왜 다른 열이 계속 보이는가?",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison#질문-groups와-online-ta만-골랐는데-왜-다른-열이-계속-보이는가",
      "topic": "데이터 분석",
      "sourceTitle": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "context": "City Hotel 중 두 판매 구분을 선택한 뒤 다른 열도 보인다고 질문했다. 직접 제시한 코드에는 실제 범주 Online TA와 대소문자가 다른 Online Ta도 있었다.",
      "intent": "선택 조건의 값과 출력 열 이름을 구별하려는 질문이다.",
      "answer": "Groups와 Online TA는 열 이름이 아니라 market_segment 열 안의 값이다. 조건은 그 값을 가진 예약 행을 고른다. 열을 따로 지정하지 않았다면 선택된 행의 다른 정보도 모두 남는다. 문자열 비교에서는 Online TA처럼 실제 값과 맞춰야 한다."
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison#질문-dfmarket_segment와-dflocmarket_segment는-같은가",
      "title": "df[\"market_segment\"]와 df.loc[\"market_segment\"]는 같은가?",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison#질문-dfmarket_segment와-dflocmarket_segment는-같은가",
      "topic": "데이터 분석",
      "sourceTitle": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "context": "일반 대괄호 선택과 .loc 선택에서 같은 문자열을 넣으면 같은 대상을 고르는지 물었다.",
      "intent": "같은 이름이라도 들어가는 위치에 따라 선택 축이 달라지는 이유를 이해하려는 질문이다.",
      "answer": "이 DataFrame에서 df[\"market_segment\"]는 열 선택이다. df.loc[\"market_segment\"]는 그 이름을 가진 행 레이블을 찾는다. .loc로 같은 열을 고르려면 df.loc[:, \"market_segment\"]처럼 모든 행과 해당 열을 지정한다."
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison#질문-취소-여부-열의-size와-sum이-왜-다른-값인가",
      "title": "취소 여부 열의 size와 sum이 왜 다른 값인가?",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison#질문-취소-여부-열의-size와-sum이-왜-다른-값인가",
      "topic": "데이터 분석",
      "sourceTitle": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "context": "두 판매 구분을 리드타임 구간별로 집계하며 size, sum, mean의 의미를 다시 확인했다.",
      "intent": "원본 예약 수와 취소 수, 취소율을 계산식 수준에서 연결하려는 질문이다.",
      "answer": "설명용 취소 여부가 [1, 0, 1, 0, 0]이라면 행 수는 5, 합은 2, 평균은 0.4다. 각각 예약 5건, 취소 2건, 취소율 40%가 된다. 합이 취소 수가 되는 이유는 이 열에서 1이 취소, 0이 비취소라는 코딩 때문이다."
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison#질문-코드가-잘못됐다는-설명이-실제-코드와-다른데-무엇을-고쳐야-하는가",
      "title": "코드가 잘못됐다는 설명이 실제 코드와 다른데 무엇을 고쳐야 하는가?",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison#질문-코드가-잘못됐다는-설명이-실제-코드와-다른데-무엇을-고쳐야-하는가",
      "topic": "데이터 분석",
      "sourceTitle": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "context": "답변이 집계 코드의 괄호와 reset_index() 위치를 오류 원인으로 지목했다. 사용자는 cancel_rate가 이미 agg() 안에 있고 괄호도 맞는다고 반박했다.",
      "intent": "실제 코드와 일치하지 않는 진단을 바로잡으려는 질문이다.",
      "answer": "이후 답변은 실행된 결과 표를 확인했다고 보고하며 앞선 진단을 정정했다. 당시 문제로 읽힌 것은 실행을 중단한 문법 오류가 아니라 범주형 그룹 집계의 기본값 변경을 알리는 FutureWarning이었다. 원하는 동작에 맞춰 observed를 명시하는 설명으로 바뀌었다."
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison#질문-observedtrue는-어떤-그룹을-남기는가",
      "title": "observed=True는 어떤 그룹을 남기는가?",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison#질문-observedtrue는-어떤-그룹을-남기는가",
      "topic": "데이터 분석",
      "sourceTitle": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "context": "pd.cut()으로 만든 lead_group과 market_segment를 묶는 코드에서 observed=True의 의미를 물었다.",
      "intent": "경고를 없애기 위한 옵션으로만 외우지 않고 결과 행이 어떻게 달라지는지 이해하려는 질문이다.",
      "answer": "범주형 dtype에는 현재 행에서 관측되지 않은 범주도 정의돼 있을 수 있다. observed=True는 실제 관측된 범주 조합으로 결과를 제한한다. 관측되지 않은 조합까지 포함하는 집계에서는 예약 수가 0이거나 평균이 NaN인 행이 생길 수 있다. 모든 조합이 관측됐다면 이 옵션의 결과 차이가 없을 수도 있다."
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison#질문-표에는-두-판매-구분이-있는데-그래프에는-왜-구분이-안-되는가",
      "title": "표에는 두 판매 구분이 있는데 그래프에는 왜 구분이 안 되는가?",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison#질문-표에는-두-판매-구분이-있는데-그래프에는-왜-구분이-안-되는가",
      "topic": "데이터 분석",
      "sourceTitle": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "context": "집계 표에는 Groups와 Online TA가 따로 있는데 그림에서 분리되지 않아 hue를 질문했다. data와 축 이름의 따옴표 사용, 같은 y축 범위도 확인했다.",
      "intent": "표의 분류 열을 그림의 막대와 범례에 연결하려는 질문이다.",
      "answer": "같은 lead_group 안에서 두 판매 구분을 따로 보려면 hue=\"market_segment\"를 전달한다. 이를 빠뜨리면 같은 x값에 있는 여러 요약 행이 다시 함께 집계될 수 있다. 그 평균은 원본 예약 수를 반영한 전체 취소율과 같다고 보장할 수 없다."
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison#질문-예약-구성비의-분모는-무엇이며-어떻게-계산하는가",
      "title": "예약 구성비의 분모는 무엇이며 어떻게 계산하는가?",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison#질문-예약-구성비의-분모는-무엇이며-어떻게-계산하는가",
      "topic": "데이터 분석",
      "sourceTitle": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "context": "판매 구분마다 예약이 각 리드타임 구간에 얼마나 분포하는지 계산하려 했다. 분모를 찾는 힌트를 받은 뒤 어렵다고 말했고, 이어 전체 계산 코드를 요청했다.",
      "intent": "“같은 판매 구분 안에서의 비중”을 행별 나눗셈으로 구현하려는 질문이다.",
      "answer": "분자는 해당 판매 구분·리드타임 구간의 예약 수다. 분모는 같은 판매 구분의 모든 리드타임 구간 예약 수를 합한 값이다. 앞에서 City Hotel만 골랐으므로 아래 분모도 City Hotel 안에서 계산된다."
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison#질문-groups와-online-ta를-코드에-적지-않았는데-어떻게-따로-100이-되는가",
      "title": "Groups와 Online TA를 코드에 적지 않았는데 어떻게 따로 100이 되는가?",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison#질문-groups와-online-ta를-코드에-적지-않았는데-어떻게-따로-100이-되는가",
      "topic": "데이터 분석",
      "sourceTitle": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "context": "사용자는 구성비 합계 출력이 두 구분 모두 100이라고 보고했다. 그런데 계산 코드에 두 이름을 직접 쓰지 않았으므로 어떻게 구분했는지 물었다.",
      "intent": "그룹 이름을 직접 반복하지 않고 같은 값끼리 계산하는 동작을 이해하려는 질문이다.",
      "answer": "groupby(\"market_segment\")가 그 열의 같은 값끼리 묶는다. transform(\"sum\")은 각 묶음의 합을 그 묶음에 속한 모든 원래 행 위치로 돌려준다. 그룹 이름을 코드에 하나씩 적을 필요가 없다."
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison#질문-transformsum-대신-sum만-쓰면-왜-안-되는가",
      "title": "transform(\"sum\") 대신 sum()만 쓰면 왜 안 되는가?",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison#질문-transformsum-대신-sum만-쓰면-왜-안-되는가",
      "topic": "데이터 분석",
      "sourceTitle": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "context": "같은 합계를 구하는데 transform()을 빼면 안 되는지 물었다.",
      "intent": "수치 계산이 같아도 반환 길이와 인덱스가 다른 이유를 확인하려는 질문이다.",
      "answer": "위 설명용 표에서 sum()은 Groups 100, Online TA 200이라는 두 값으로 줄인다. 인덱스도 판매 구분 이름이다. transform(\"sum\")은 원래 네 행의 인덱스 0·1·2·3에 100·100·200·200을 대응시킨다. Pandas의 Series 나눗셈은 인덱스 레이블을 맞추므로 두 결과를 같은 모양으로 취급할 수 없다."
    },
    {
      "id": "learning/2026-10-01-hotel-segment-comparison#질문-같은-리드타임-구간에서-비교하면-어떤-결론까지-말할-수-있는가",
      "title": "같은 리드타임 구간에서 비교하면 어떤 결론까지 말할 수 있는가?",
      "url": "/notes/learning/2026-10-01-hotel-segment-comparison#질문-같은-리드타임-구간에서-비교하면-어떤-결론까지-말할-수-있는가",
      "topic": "데이터 분석",
      "sourceTitle": "판매 구분 비교 기록 — Undefined 제외와 예약 구성비",
      "context": "판매 구분별 예약 구성비 표를 읽고 해석을 요청한 뒤, 최종 답변에 참고할 예시 문장도 요청했다.",
      "intent": "전체 취소율 차이와 예약 시점 구성의 차이를 나눠 해석하려는 질문이다.",
      "answer": "먼저 판매 구분별로 긴 리드타임 예약의 비중이 다른지 보고, 이어 같은 호텔·리드타임 구간 안에서도 취소율 차이가 남는지 확인한다. 구성 차이는 전체 비율 차이를 이해할 단서이며, 같은 구간 안의 비교도 인과 효과를 확정하지는 않는다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-열-인덱스와-전체-열을-보려면-어떻게-하는가",
      "title": "열 인덱스와 전체 열을 보려면 어떻게 하는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-열-인덱스와-전체-열을-보려면-어떻게-하는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "열이 많은 호텔 예약 표에서 열 이름을 확인하고, 잘리지 않는 표와 앞 10행을 보고 싶다고 요청했다. City Hotel과 Resort Hotel의 앞부분도 각각 확인하려 했다.",
      "intent": "분석을 시작하기 전에 데이터의 열 이름과 일부 행을 직접 읽으려는 질문이다.",
      "answer": "열 이름은 df.columns, 행 인덱스는 df.index다. df.columns.tolist()는 열 이름을 파이썬 리스트로 돌려준다. pd.set_option(\"display.max_columns\", None)은 표시 설정이고, df.head(10)은 앞 10행을 선택한다. 호텔별 예시는 먼저 해당 호텔의 행을 고른 뒤 head(10)을 붙인다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-많은-변수-중-이번-분석에-필요한-것은-무엇인가",
      "title": "많은 변수 중 이번 분석에 필요한 것은 무엇인가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-많은-변수-중-이번-분석에-필요한-것은-무엇인가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "열들을 의미별로 구분해 달라고 요청했고, 분석 준비 코드의 analysis = df.copy()와 question_columns가 하는 일을 물었다.",
      "intent": "모든 열을 한꺼번에 처리하기보다 현재 분석 질문에 필요한 변수를 찾으려는 맥락이다.",
      "answer": "이번 비교의 중심은 호텔 종류 hotel, 취소 여부 is_canceled, 예약 선행 일수 lead_time, 판매 구분 market_segment였다. question_columns = [...]는 열 이름을 담는 목록이고, analysis[question_columns]라고 써야 그 열의 데이터를 선택한다. copy()로 만든 분석용 표와 열 이름 목록도 서로 다른 객체다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-결측이-없고-중복이-많다는-결과를-어떻게-판단해야-하는가",
      "title": "결측이 없고 중복이 많다는 결과를 어떻게 판단해야 하는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-결측이-없고-중복이-많다는-결과를-어떻게-판단해야-하는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "결측을 확인하는 코드의 결과를 읽었고, duplicated().sum()이 33,103이라고 직접 보고했다. 분석에 쓰지 않는 열의 결측도 문제가 되는지 물었다.",
      "intent": "검사 결과를 보고 바로 삭제할지, 이번 분석과 관계가 있는지 판단하려는 질문이다.",
      "answer": "필요한 열의 결측 여부와 전체 표의 결측 여부를 구분한다. 사용하지 않는 열에 결측이 있다고 전체 행을 지우면 분석 대상과 분모까지 달라진다. 기본 duplicated()는 같은 값 조합의 첫 행 다음에 나타난 반복 행을 표시하지만, 예약 식별 근거 없이 그것을 동일한 예약의 중복 수집이라고 확정할 수는 없다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-size-sum-mean은-각각-무엇을-세는가",
      "title": "size, sum, mean은 각각 무엇을 세는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-size-sum-mean은-각각-무엇을-세는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "호텔별 표의 bookings, cancellations, cancel_rate가 어떻게 만들어지는지 물었다. size가 취소 수인지도 확인했다.",
      "intent": "집계 함수 이름을 실제 예약 건수와 취소율에 연결하려는 질문이다.",
      "answer": "한 행이 예약 한 건이고 is_canceled가 결측 없는 0·1이라면, size는 예약 수, sum은 1의 개수인 취소 수, mean은 취소 수를 예약 수로 나눈 비율이다. 예약 한 건을 사람 한 명으로 바꾸어 읽지는 않는다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-호텔별-취소율을-왜-히스토그램으로-그리지-않는가",
      "title": "호텔별 취소율을 왜 히스토그램으로 그리지 않는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-호텔별-취소율을-왜-히스토그램으로-그리지-않는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "집계한 표를 그래프로 옮기면서 histplot, barplot, data, 두 개의 Axes를 질문했다. 사용자는 호텔별 그림을 좌우로 나누려 했지만 첫 답변은 한 그림의 두 막대로 이해했다.",
      "intent": "무엇을 그릴지와 어디에 그릴지를 코드에서 따로 지정하려는 질문이다.",
      "answer": "히스토그램은 수치 값이 구간마다 얼마나 있는지 보여 준다. 이미 계산한 호텔별 취소율을 비교하려면 범주별 막대가 맞는다. data=hotel_summary는 표 변수이며, 표 이름을 따옴표로 감싼 문자열과 다르다. axes[0]은 왼쪽 그림의 위치를 고를 뿐 City Hotel 행을 골라 주지 않는다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-lead_time의-평균과-중앙값을-왜-함께-보는가",
      "title": "lead_time의 평균과 중앙값을 왜 함께 보는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-lead_time의-평균과-중앙값을-왜-함께-보는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "lead_time의 의미를 확인한 뒤 평균과 중앙값을 둘 다 살피는 이유를 물었다. 이후 히스토그램을 보고 “반비례”라는 표현이 맞는지도 질문했다.",
      "intent": "대표값과 분포 그림을 연결해 설명하려는 질문이다.",
      "answer": "lead_time은 예약한 날부터 도착일까지의 일수다. 평균과 중앙값의 차이는 큰 값의 영향을 살필 단서지만, 두 숫자만으로 분포 모양이나 최빈값을 확정할 수 없다. 히스토그램과 범위를 함께 확인한다. 오른쪽으로 긴 꼬리가 있는 분포를 수학적 관계인 “반비례”라고 부르지는 않는다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-lead_time을-구간으로-나누는-경계와-라벨은-어떻게-읽는가",
      "title": "lead_time을 구간으로 나누는 경계와 라벨은 어떻게 읽는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-lead_time을-구간으로-나누는-경계와-라벨은-어떻게-읽는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "pd.cut()의 경계, 라벨, include_lowest를 질문하고 lead_group의 뜻을 다시 확인했다. 첫 답변에는 구간 설명에 불필요한 할당 표현식이 들어갔고 이후 제거됐다.",
      "intent": "외운 라벨을 붙이는 대신 실제 어느 값이 어느 구간에 들어가는지 이해하려는 질문이다.",
      "answer": "경계가 다섯 개면 구간은 네 개다. 아래처럼 오른쪽 경계를 포함하면 30일은 첫 구간, 90일은 둘째 구간에 들어가고, include_lowest=True는 첫 경계 0도 포함시킨다. 일수가 음이 아닌 정수라는 조건에서 라벨을 읽는다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-describe와-value_counts는-왜-기대한-정보를-다-보여-주지-않는가",
      "title": "describe와 value_counts는 왜 기대한 정보를 다 보여 주지 않는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-describe와-value_counts는-왜-기대한-정보를-다-보여-주지-않는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "수치형과 문자형 열을 함께 골랐는데 describe()에서 일부만 보이는 이유와 value_counts()의 숫자·순서를 물었다. 판매 구분별 예약 수를 보고 중요한 변수인지도 질문했다.",
      "intent": "요약 함수가 어떤 대상을 어떤 기준으로 요약하는지 확인하려는 질문이다.",
      "answer": "수치형과 문자형이 섞인 표에서 기본 describe()는 수치형 중심으로 요약하므로 전체 자료형을 보려면 include=\"all\"을 지정한다. value_counts()의 기본 결과는 등장 횟수가 큰 순서이며, 결측은 기본적으로 제외한다. 판매 구분 열을 센 숫자는 취소 수가 아니라 그 구분의 예약 수다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-인덱스에도-이름이-있는가-reset_index를-하면-무엇이-열로-옮겨지는가",
      "title": "인덱스에도 이름이 있는가? reset_index를 하면 무엇이 열로 옮겨지는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-인덱스에도-이름이-있는가-reset_index를-하면-무엇이-열로-옮겨지는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "groupby(\"hotel\")[\"is_canceled\"].sum()이 Series라는 점을 짚고, reset_index()에서 열 이름이 어디서 생기는지 거듭 물었다. “인덱스에도 이름을 붙일 수 있다는 것을 처음 알았다”고 말했다.",
      "intent": "화면 왼쪽에 보이는 값과 그 값들이 속한 축의 이름을 구분하려는 질문이다.",
      "answer": "이 Series에는 호텔 이름이라는 인덱스 값, 인덱스의 이름 hotel, 데이터 값인 취소 수, Series의 이름 is_canceled가 있다. reset_index()는 인덱스 값을 일반 열로 꺼내고 그 이름을 열 이름으로 사용한다. 기존 취소 수를 다시 계산하거나 호텔 이름을 새로 만들어 내지 않는다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-여러-열로-묶으면-무엇이-인덱스가-되고-agg는-원본에-열을-추가하는가",
      "title": "여러 열로 묶으면 무엇이 인덱스가 되고, agg는 원본에 열을 추가하는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-여러-열로-묶으면-무엇이-인덱스가-되고-agg는-원본에-열을-추가하는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "hotel과 market_segment를 함께 묶는 구조를 물었다. 이어 agg()가 원본에 새 열을 추가하는지, 이름을 직접 지정하지 않으면 이름 없는 표가 되는지 질문했다.",
      "intent": "그룹 기준, 결과의 행 단위, 결과 열 이름이 생기는 지점을 구별하려는 질문이다.",
      "answer": "기본 인덱스 방식으로 두 열을 묶으면 결과의 인덱스가 두 단계인 MultiIndex가 될 수 있다. 호텔·판매 구분 조합마다 결과가 하나씩 대응한다. 열 하나에서 합계 하나를 구한 결과는 Series이고, 여러 집계 함수를 적용한 예는 DataFrame이다. agg([\"size\", \"sum\", \"mean\"])의 결과 열 이름은 함수 이름에서 온다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-정렬했는데-왜-다음-그래프에는-적용되지-않는가",
      "title": "정렬했는데 왜 다음 그래프에는 적용되지 않는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-정렬했는데-왜-다음-그래프에는-적용되지-않는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "판매 구분별 취소율을 정렬하고 ascending을 어디에 쓰는지 물었다. 정렬한 표를 출력한 뒤 그래프에 전달할 데이터도 확인했다.",
      "intent": "화면에 보여 준 결과와 변수에 저장된 표를 구분하려는 질문이다.",
      "answer": "ascending=False는 sort_values()에 전달한다. display(summary.sort_values(...))는 정렬한 결과를 보여 주지만 그 자체로 summary를 바꾸지 않는다. 그 순서를 이어 쓰려면 반환값을 저장하거나 그래프에 직접 전달한다. 정렬 기준인 cancel_pct 열도 먼저 만들어져 있어야 한다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-cancel_pct를-모두-더하면-왜-100이-아닌가",
      "title": "cancel_pct를 모두 더하면 왜 100이 아닌가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-cancel_pct를-모두-더하면-왜-100이-아닌가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "판매 구분별 취소율 표를 보고 모든 퍼센트를 더하면 100이어야 하는지 물었다.",
      "intent": "각각의 비율이 하나의 전체를 나눠 가진 값인지 확인하려는 질문이다.",
      "answer": "판매 구분별 취소율의 분모는 각 구분의 예약 수다. 서로 다른 분모에서 계산한 비율이므로 더해서 100이 될 필요가 없다. 전체 취소 중 각 구분의 몫을 구하려면 전체 취소 수라는 공통 분모를 사용해야 한다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-취소율이-가장-높은-구분을-먼저-관리하면-되는가",
      "title": "취소율이 가장 높은 구분을 먼저 관리하면 되는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-취소율이-가장-높은-구분을-먼저-관리하면-되는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "Groups를 운영상 우선 대상으로 고르는 판단과 그 이유를 확인했고, 참고할 답변 예시를 요청했다.",
      "intent": "표에서 읽은 차이를 실제 제안으로 연결하되 어떤 목표를 우선하는지 분명히 하려는 질문이다.",
      "answer": "취소율이 높은 구분과 취소 건수가 많은 구분은 다를 수 있다. 예약 한 건의 취소 위험을 낮추려는지, 전체 취소 건수를 많이 줄이려는지에 따라 우선순위가 달라진다. 비용과 개입 가능성도 필요하다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-isna가-0이어도-공백이나-undefined를-따로-확인해야-하지-않는가",
      "title": "isna가 0이어도 공백이나 Undefined를 따로 확인해야 하지 않는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-isna가-0이어도-공백이나-undefined를-따로-확인해야-하지-않는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "사용자가 공백·대소문자까지 확인하지 않았다는 점을 먼저 지적했다. 뒤에는 isna()로는 결측이 없는데 Undefined가 두 건이라는 점과 이 행을 삭제해도 되는지 물었다.",
      "intent": "프로그램이 인식하는 결측과 분석에서 의미를 알 수 없는 값을 구별하려는 질문이다.",
      "answer": "Undefined와 빈 문자열은 문자열로 존재할 수 있으므로 isna()만으로 충분하지 않다. map(repr)로 공백 등을 드러내고 실제 값을 확인할 수 있다. 다만 Online TA에 무조건 title()을 적용해 Online Ta로 바꾸면 기존 범주 표기와 달라진다."
    },
    {
      "id": "learning/2026-09-30-hotel-cancellation-eda#질문-두-그래프의-높이를-비교하려면-축을-어떻게-맞춰야-하는가",
      "title": "두 그래프의 높이를 비교하려면 축을 어떻게 맞춰야 하는가?",
      "url": "/notes/learning/2026-09-30-hotel-cancellation-eda#질문-두-그래프의-높이를-비교하려면-축을-어떻게-맞춰야-하는가",
      "topic": "데이터 분석",
      "sourceTitle": "호텔 취소 분석 기록 — 집계표의 구조와 취소율의 분모",
      "context": "사용자는 호텔별 그림의 막대 높이를 비교하려면 y축 기준이 같아야 한다고 직접 설명했다. 제목, x축 라벨 겹침·정렬, 한글 글꼴 경고도 질문했다.",
      "intent": "같은 비율이 같은 높이로 보이게 하고, 표시 문제를 데이터 오류와 구분하려는 질문이다.",
      "answer": "취소율을 퍼센트로 그린 두 그림이라면 같은 범위의 y축을 사용한다. 예를 들어 각 Axes에 set_ylim(0, 100)을 적용한다. 제목은 해당 Axes의 set_title()로 지정한다. 라벨 회전·정렬과 한글 글꼴 경고는 표시 설정이며 집계값을 바꾸는 처리는 아니다."
    },
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
      "id": "data/statistics-data-and-groups#질문-취소율을-모두-더하면-100이-아닌가-예약-구성비와는-무엇이-다른가",
      "title": "취소율을 모두 더하면 100이 아닌가? 예약 구성비와는 무엇이 다른가?",
      "url": "/notes/data/statistics-data-and-groups#질문-취소율을-모두-더하면-100이-아닌가-예약-구성비와는-무엇이-다른가",
      "topic": "데이터 분석",
      "sourceTitle": "통계 실습의 데이터 — 변수의 의미와 요약표의 인덱스",
      "context": "호텔 예약의 판매 구분별 취소율을 보고 합이 100이어야 하는지 물었다. 다음 날에는 판매 구분마다 리드타임 구간별 예약 구성비를 계산하며 다른 분모를 사용했다.",
      "intent": "여러 퍼센트가 같은 전체를 나누는 값인지, 서로 다른 집단 안의 비율인지 구분하려는 질문이다.",
      "answer": "비율 이름보다 분자와 분모를 먼저 쓴다. 그룹별 취소율은 분모가 각 그룹의 예약 수이므로 합이 100일 필요가 없다. 전체를 빠짐없이 나눈 구성비는 공통 분모를 사용한다."
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
      "id": "data/statistics-relations-and-interpretation#질문-판매-구분별-예약-구성비와-취소율을-어떻게-해석하는가",
      "title": "판매 구분별 예약 구성비와 취소율을 어떻게 해석하는가?",
      "url": "/notes/data/statistics-relations-and-interpretation#질문-판매-구분별-예약-구성비와-취소율을-어떻게-해석하는가",
      "topic": "데이터 분석",
      "sourceTitle": "변수 사이의 관계 — 상관행렬과 그룹별 그래프를 읽는 법",
      "context": "호텔 예약 자료에서 판매 구분별 리드타임 구성비를 계산한 뒤, 같은 구간의 취소율과 함께 어떻게 해석할지 물었다. 최종 해석의 참고 예시도 요청했다.",
      "intent": "전체 비율 차이에 집단 구성의 차이가 섞일 수 있다는 점을 확인하고, 비교 범위를 좁혀 해석하려는 질문이다.",
      "answer": "먼저 각 판매 구분의 예약이 어느 리드타임 구간에 많이 속하는지 보고, 같은 호텔·구간 안에서도 취소율 차이가 있는지 살핀다. 이 비교는 전체 차이를 이해하는 데 도움이 되지만 판매 구분의 인과 효과를 계산한 것은 아니다."
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
      "id": "data/pandas-cleaning-validation#질문-isna가-0인데-undefined와-공백을-따로-확인해야-하는가",
      "title": "isna가 0인데 Undefined와 공백을 따로 확인해야 하는가?",
      "url": "/notes/data/pandas-cleaning-validation#질문-isna가-0인데-undefined와-공백을-따로-확인해야-하는가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 정리와 검증 — 자료형, 결측, 중복, 파생 변수",
      "context": "호텔 예약 분석에서 결측 검사만으로 충분한지 사용자가 공백·대소문자 점검을 먼저 제안했다. 이어 Undefined 두 건을 전체 데이터에서 지워도 되는지 물었다.",
      "intent": "Pandas가 인식하는 결측과 분석에 필요한 의미를 알 수 없는 값을 구분하려는 질문이다.",
      "answer": "Undefined와 빈 문자열은 그 자체로 NaN이 아니다. dropna()로 문자열 Undefined를 제거할 수는 없다. 판매 구분을 모르는 예약을 해당 비교에서 제외하더라도, 그 예약의 호텔·취소 여부까지 전체 분석에서 삭제할 필요가 생긴 것은 아니다."
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
      "id": "data/pandas-dataframe-selection#질문-두-판매-구분만-골랐는데-왜-다른-열도-보이는가",
      "title": "두 판매 구분만 골랐는데 왜 다른 열도 보이는가?",
      "url": "/notes/data/pandas-dataframe-selection#질문-두-판매-구분만-골랐는데-왜-다른-열도-보이는가",
      "topic": "데이터 분석",
      "sourceTitle": "DataFrame과 선택 — 표의 의미, Series, 불리언 마스크",
      "context": "호텔 예약 표에서 market_segment가 Groups 또는 Online TA인 행을 골랐는데 다른 열도 남아 있어, 필터가 적용된 것인지 물었다. df[\"market_segment\"]와 df.loc[\"market_segment\"]의 차이도 확인했다.",
      "intent": "열 안의 값으로 행을 고르는 연산과 열 자체를 선택하는 연산을 구분하려는 질문이다.",
      "answer": "df.loc[df[\"market_segment\"].isin([\"Groups\", \"Online TA\"])]는 해당 값을 가진 행을 선택하고 모든 열을 남긴다. .loc[행, 열]의 두 번째 자리에 열을 지정해야 출력 열도 좁아진다."
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
      "id": "data/pandas-groupby-merge-reshape#질문-인덱스에도-이름이-있는가-여러-열로-묶으면-series가-아닌가",
      "title": "인덱스에도 이름이 있는가? 여러 열로 묶으면 Series가 아닌가?",
      "url": "/notes/data/pandas-groupby-merge-reshape#질문-인덱스에도-이름이-있는가-여러-열로-묶으면-series가-아닌가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 집계와 결합 — agg, transform, merge에서 pipe까지",
      "context": "호텔별 취소 수를 집계한 Series에서 reset_index()의 열 이름이 어디서 오는지 물었다. 호텔과 판매 구분을 함께 묶는 경우, 집계 함수를 여러 개 지정하는 경우도 이어서 확인했다.",
      "intent": "그룹 기준의 개수와 데이터 열의 개수, 축 이름과 축에 놓인 값을 따로 읽으려는 질문이다.",
      "answer": "analysis.groupby(\"hotel\")[\"is_canceled\"].sum()에는 인덱스 이름 hotel과 Series 이름 is_canceled가 있다. 인덱스 값은 호텔 이름이고 데이터 값은 취소 수다. reset_index()는 이 이름들을 열 이름으로 사용하고 기본 행 인덱스를 새로 만든다."
    },
    {
      "id": "data/pandas-groupby-merge-reshape#질문-구성비를-구할-때-transformsum-대신-sum만-쓰면-안-되는가",
      "title": "구성비를 구할 때 transform(\"sum\") 대신 sum()만 쓰면 안 되는가?",
      "url": "/notes/data/pandas-groupby-merge-reshape#질문-구성비를-구할-때-transformsum-대신-sum만-쓰면-안-되는가",
      "topic": "데이터 분석",
      "sourceTitle": "Pandas 집계와 결합 — agg, transform, merge에서 pipe까지",
      "context": "판매 구분과 리드타임 구간별 예약 수 표에서, 각 판매 구분의 전체 예약 수를 분모로 쓰려고 했다. transform(\"sum\")을 빼도 같은 합계를 얻는 것 아닌지 물었다.",
      "intent": "계산한 수치뿐 아니라 그 수치가 대응하는 행과 인덱스를 확인하려는 질문이다.",
      "answer": "sum()은 판매 구분마다 결과 하나로 줄인다. transform(\"sum\")은 각 판매 구분의 합계를 원래 요약표의 각 행에 대응시킨다. 행별 예약 수를 자기 그룹의 합계로 나눌 때 이 대응이 필요하다."
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
      "id": "learning/2026-10-27-cnn-filters#퀴즈-rgb-입력에-33-filter-16개를-적용하면-무엇이-몇-개-생기는가",
      "title": "RGB 입력에 3×3 filter 16개를 적용하면 무엇이 몇 개 생기는가?",
      "url": "/notes/learning/2026-10-27-cnn-filters#퀴즈-rgb-입력에-33-filter-16개를-적용하면-무엇이-몇-개-생기는가",
      "topic": "딥러닝",
      "sourceTitle": "CNN filter는 무엇을 학습할까: weight sharing과 feature map"
    },
    {
      "id": "weekly/2026-10-19-regularization-and-tree-ensembles#퀴즈-두-번째-트리의-입력과-목표는-무엇일까",
      "title": "두 번째 트리의 입력과 목표는 무엇일까?",
      "url": "/notes/weekly/2026-10-19-regularization-and-tree-ensembles#퀴즈-두-번째-트리의-입력과-목표는-무엇일까",
      "topic": "머신러닝",
      "sourceTitle": "위클리 페이퍼 #4 — 과적합과 규제, 랜덤 포레스트와 그레이디언트 부스팅"
    },
    {
      "id": "machine-learning/logistic-loss-and-evaluation#퀴즈-q로-예측-라벨을-결정하면-왜-틀리는가",
      "title": "q로 예측 라벨을 결정하면 왜 틀리는가?",
      "url": "/notes/machine-learning/logistic-loss-and-evaluation#퀴즈-q로-예측-라벨을-결정하면-왜-틀리는가",
      "topic": "머신러닝",
      "sourceTitle": "로지스틱 분류: 확률·로그 손실·기울기·평가의 구분"
    },
    {
      "id": "machine-learning/logistic-loss-and-evaluation#퀴즈-p-y가-양수면-w를-줄여야-하는가",
      "title": "p-y가 양수면 w를 줄여야 하는가?",
      "url": "/notes/machine-learning/logistic-loss-and-evaluation#퀴즈-p-y가-양수면-w를-줄여야-하는가",
      "topic": "머신러닝",
      "sourceTitle": "로지스틱 분류: 확률·로그 손실·기울기·평가의 구분"
    },
    {
      "id": "machine-learning/linear-regression-gradient#퀴즈-mean은-어느-축에-적용해야-하는가",
      "title": "mean은 어느 축에 적용해야 하는가?",
      "url": "/notes/machine-learning/linear-regression-gradient#퀴즈-mean은-어느-축에-적용해야-하는가",
      "topic": "머신러닝",
      "sourceTitle": "선형 회귀의 기울기: 손실 정의에서 X.T @ error까지"
    },
    {
      "id": "machine-learning/linear-regression-gradient#퀴즈-shape만으로-의도한-오차인지-확인할-수-있는가",
      "title": "shape만으로 의도한 오차인지 확인할 수 있는가?",
      "url": "/notes/machine-learning/linear-regression-gradient#퀴즈-shape만으로-의도한-오차인지-확인할-수-있는가",
      "topic": "머신러닝",
      "sourceTitle": "선형 회귀의 기울기: 손실 정의에서 X.T @ error까지"
    },
    {
      "id": "machine-learning/probability-and-bayes#퀴즈-분포-그래프의-높이를-곧바로-확률로-읽어도-되나",
      "title": "분포 그래프의 높이를 곧바로 확률로 읽어도 되나?",
      "url": "/notes/machine-learning/probability-and-bayes#퀴즈-분포-그래프의-높이를-곧바로-확률로-읽어도-되나",
      "topic": "머신러닝",
      "sourceTitle": "확률변수에서 밀도와 베이즈 정리까지"
    },
    {
      "id": "machine-learning/probability-and-bayes#퀴즈-표준화하면-언제나-정규분포가-되나",
      "title": "표준화하면 언제나 정규분포가 되나?",
      "url": "/notes/machine-learning/probability-and-bayes#퀴즈-표준화하면-언제나-정규분포가-되나",
      "topic": "머신러닝",
      "sourceTitle": "확률변수에서 밀도와 베이즈 정리까지"
    },
    {
      "id": "machine-learning/probability-and-bayes#퀴즈-베이즈-정리의-분모는-어느-집단인가",
      "title": "베이즈 정리의 분모는 어느 집단인가?",
      "url": "/notes/machine-learning/probability-and-bayes#퀴즈-베이즈-정리의-분모는-어느-집단인가",
      "topic": "머신러닝",
      "sourceTitle": "확률변수에서 밀도와 베이즈 정리까지"
    },
    {
      "id": "machine-learning/linear-algebra-and-gradient#퀴즈-이동-방향과-이동-크기를-분리해-읽을-수-있나",
      "title": "이동 방향과 이동 크기를 분리해 읽을 수 있나?",
      "url": "/notes/machine-learning/linear-algebra-and-gradient#퀴즈-이동-방향과-이동-크기를-분리해-읽을-수-있나",
      "topic": "머신러닝",
      "sourceTitle": "선형결합과 내적으로 그래디언트 읽기"
    },
    {
      "id": "machine-learning/linear-algebra-and-gradient#퀴즈-기울기가-양수로-바뀌면-손실이-증가했다는-뜻인가",
      "title": "기울기가 양수로 바뀌면 손실이 증가했다는 뜻인가?",
      "url": "/notes/machine-learning/linear-algebra-and-gradient#퀴즈-기울기가-양수로-바뀌면-손실이-증가했다는-뜻인가",
      "topic": "머신러닝",
      "sourceTitle": "선형결합과 내적으로 그래디언트 읽기"
    },
    {
      "id": "machine-learning/model-and-validation#퀴즈-두-번째-폴드에-첫-모델을-이어-쓰면-왜-안-되나",
      "title": "두 번째 폴드에 첫 모델을 이어 쓰면 왜 안 되나?",
      "url": "/notes/machine-learning/model-and-validation#퀴즈-두-번째-폴드에-첫-모델을-이어-쓰면-왜-안-되나",
      "topic": "머신러닝",
      "sourceTitle": "모델의 가정과 검증 데이터의 역할"
    },
    {
      "id": "machine-learning/model-and-validation#퀴즈-숫자로-표시하면-모두-회귀인가",
      "title": "숫자로 표시하면 모두 회귀인가?",
      "url": "/notes/machine-learning/model-and-validation#퀴즈-숫자로-표시하면-모두-회귀인가",
      "topic": "머신러닝",
      "sourceTitle": "모델의 가정과 검증 데이터의 역할"
    },
    {
      "id": "python/methods-types-and-inheritance#퀴즈-호출-규칙과-반환-규칙-중-무엇이-작동할까",
      "title": "호출 규칙과 반환 규칙 중 무엇이 작동할까?",
      "url": "/notes/python/methods-types-and-inheritance#퀴즈-호출-규칙과-반환-규칙-중-무엇이-작동할까",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "메서드의 자동 인자와 객체의 타입 계약"
    },
    {
      "id": "python/object-state-and-composition#퀴즈-같은-객체인가-같은-목록인가",
      "title": "같은 객체인가, 같은 목록인가?",
      "url": "/notes/python/object-state-and-composition#퀴즈-같은-객체인가-같은-목록인가",
      "topic": "실전 파이썬 준비하기",
      "sourceTitle": "객체의 상태, 복사, 합성으로 데이터 흐름 읽기"
    },
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
