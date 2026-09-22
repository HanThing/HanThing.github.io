# HanThing knowledge index

Generated from public Markdown. Read AGENTS.md for ingest/query/lint; CHANGELOG.md for changes.

- [반복문 종료와 for–else](content/python/loop-exit.md) — concept · 2026-09-22 · break는 반복문을 끝낸다. for의 else는 항목을 모두 소진했을 때 실행한다.
  Sources: https://docs.python.org/3/tutorial/controlflow.html#else-clauses-on-loops; https://hanthing.github.io/notes/learning/2026-09-18-loop-exit
- [break를 썼는데 왜 마지막 문장이 실행될까?](content/learning/2026-09-18-loop-exit.md) — journal · 2026-09-18 · 프로그램을 끝내려던 질문에서, 반복문이 끝나는 이유를 구분하는 for–else로 이어진 기록.
  Sources: 2026-09-18 개인 Python 학습 대화의 반복문 종료 질문 (공개용 발췌·재구성); https://docs.python.org/3/tutorial/controlflow.html#else-clauses-on-loops
- [args와 kwargs의 두 방향](content/python/args-and-kwargs.md) — concept · 2026-09-20 · 함수 정의에서 *args는 남는 위치 인자를 튜플로, **kwargs는 남는 키워드 인자를 딕셔너리로 모은다. 호출에서 *와 **는 반대로 이터러블과 매핑을 인자로 푼다. 딕셔너리 하나를 그대로 넘기는 것과 **mapping은 다르다.
  Sources: 개인 Python 학습 정리 (2026-09-20 이관)
- [리스트 컴프리헨션 읽기](content/python/comprehensions.md) — concept · 2026-09-20 · [x for row in matrix for x in row]은 바깥 row 반복 뒤 안쪽 x 반복 순서로 읽는다. 맨 앞의 x는 각 반복에서 결과에 넣을 표현식이다. 여러 동작이 필요하거나 순서가 헷갈리면 같은 구조의 일반 for문으로 먼저 펼친다.
  Sources: 개인 Python 학습 정리 (2026-09-20 이관)
- [파일 객체와 with](content/python/files-and-with.md) — concept · 2026-09-20 · with open(...) as file:에서 file은 열린 파일 객체다. 블록을 벗어나면 예외가 발생해도 파일을 닫지만, 예외 자체를 숨기지는 않는다. read()를 반복하면 현재 읽기 위치부터 이어지며, 다시 읽으려면 seek()나 새 스트림이 필요하다.
  Sources: 개인 Python 학습 정리 (2026-09-20 이관)
- [import와 패키지](content/python/imports-and-packages.md) — concept · 2026-09-20 · import는 파일을 현재 코드에 복사하거나 작업 폴더를 바꾸지 않는다. 모듈을 찾고, 처음이면 코드를 실행해 모듈 객체를 만든 뒤 이름을 연결한다. __init__.py는 패키지를 불러올 때 실행되는 초기화 파일이지 공개 이름의 허용 목록이 아니다.
  Sources: 개인 Python 학습 정리 (2026-09-20 이관)
- [이터러블과 이터레이터](content/python/iterables-and-iterators.md) — concept · 2026-09-20 · 리스트는 여러 번 순회할 수 있는 이터러블이다. zip이나 map 객체 같은 이터레이터는 꺼낸 위치를 기억한다. next()로 하나를 꺼낸 뒤 list()로 모으면 남은 값만 수집되고, 소진된 이터레이터를 다시 수집하면 빈 리스트가 된다.
  Sources: 개인 Python 학습 정리 (2026-09-20 이관)
- [노트북 이름 공간과 내장 이름](content/python/notebook-state.md) — concept · 2026-09-20 · list = [...]를 실행하면 사용자 이름이 내장 list를 가려서 list(...) 호출이 TypeError가 된다. 셀을 nums = [...]로 고치는 일은 이미 실행된 list 이름을 없애지 않는다. del list는 사용자 이름 연결만 제거하며, 다시 실행
  Sources: 개인 Python 학습 정리 (2026-09-20 이관); https://hanthing.github.io/notes/learning/2026-09-18-loop-exit
- [self와 객체 호출](content/python/self-and-objects.md) — concept · 2026-09-20 · item.label()은 개념적으로 Item.label(item)과 같다. 호출한 인스턴스가 첫 매개변수 self에 연결된다. 왼쪽 self.value는 인스턴스의 속성이고, 오른쪽 value는 전달받은 매개변수일 수 있으므로 둘을 구분한다.
  Sources: 개인 Python 학습 정리 (2026-09-20 이관)
- [정렬 key와 호출 가능한 객체](content/python/sorting-and-callables.md) — concept · 2026-09-20 · sort(key=len)에서 key에는 길이 결과가 아니라 함수가 전달된다. sort가 각 요소에 함수를 호출하고 반환값을 비교 기준으로 쓴다. 원래 리스트를 수정하고 None을 반환한다. map도 함수를 요소마다 호출하지만, 그 반환값을 새 흐름으로 만든다는 차이가
  Sources: 개인 Python 학습 정리 (2026-09-20 이관)
- [데이터 품질 — 고치기 전에 원인을 찾기](content/data/data-quality.md) — concept · 2026-09-17 · 빈칸을 0으로 채우고, 큰 값을 지우고, 같은 고객을 한 행만 남기는 것이 언제나 정답일까요? 처리 규칙보다 먼저 원인을 확인해야 합니다.
  Sources: 데이터 사이언스 오버뷰 강의 자료 (2026-09-17 정리, 본문 쪽수 참조)
- [데이터 사이언스 — 질문에서 판단까지](content/data/data-science-overview.md) — concept · 2026-09-17 · “매출을 분석해 주세요”라는 요청만으로는 필요한 작업을 정할 수 없습니다. 비교할 기간과 취소 주문의 처리 기준, 결과로 내릴 결정을 먼저 정해야 합니다.
  Sources: 데이터 사이언스 오버뷰 강의 자료 (2026-09-17 정리, 본문 쪽수 참조)
- [EDA와 해석 — 평균 뒤의 분포 보기](content/data/eda-and-causality.md) — concept · 2026-09-17 · 배송 시간 A가 [4, 5, 5, 5, 5, 6]일, B가 [1, 1, 1, 9, 9, 9]일이면 둘 다 평균은 5일입니다. 그러나 고객이 겪는 경험은 다릅니다. 요약 통계만으로 전체 모양을 알 수는 없습니다.
  Sources: 데이터 사이언스 오버뷰 강의 자료 (2026-09-17 정리, 본문 쪽수 참조)
- [결과 해석 — 보이는 차이를 믿기 전에](content/data/interpretation.md) — concept · 2026-09-17 · 매출이 100에서 110만 원으로 늘면 증가율은 **10%**입니다. 축을 90에서 시작하는 막대그래프에서는 길이가 10과 20이 되어 두 배처럼 보입니다. 값의 비율과 표시된 길이의 비율은 다릅니다.
  Sources: 데이터 사이언스 오버뷰 강의 자료 (2026-09-17 정리, 본문 쪽수 참조)
- [관측 단위 — 한 행은 무엇인가](content/data/observation-unit.md) — concept · 2026-09-17 · 숫자를 계산하기 전에 한 행이 나타내는 대상을 정합니다. 주문 한 건과 고객 한 명은 다른 단위입니다.
  Sources: 데이터 사이언스 오버뷰 강의 자료 (2026-09-17 정리, 본문 쪽수 참조)
- [변형·집계·병합 — 표의 단위가 바뀌는 순간](content/data/wrangling.md) — concept · 2026-09-17 · 데이터를 정리한다는 것은 질문에 답할 수 있는 모양으로 바꾼다는 뜻입니다. 형식을 통일하는 작업과 값을 추측해서 만드는 작업은 구별해야 합니다.
  Sources: 데이터 사이언스 오버뷰 강의 자료 (2026-09-17 정리, 본문 쪽수 참조)
