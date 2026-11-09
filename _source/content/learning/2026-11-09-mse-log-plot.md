---
title: "MSE 로그를 그래프로: log scale과 여러 줄 문자열"
description: 학습 로그를 update·batch MSE·validation MSE로 나누어 그리는 방법과 여러 줄 로그를 문자열에 넣을 때의 오류를 정리한다.
date: 2026-11-09
publish: true
draft: false
type: journal
courseId: pytorch
lessonId: deep-learning-basics
topics: [PyTorch]
tags: [mse, matplotlib, python, training-log]
sources:
  - 부트캠프 이미지 복원 미션의 MSE 로그 시각화 질문과 코드 수정 대화 (2026-11-09)
  - https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.set_yscale.html
  - https://docs.python.org/3/reference/lexical_analysis.html#triple-quoted-strings
  - https://docs.python.org/3/library/re.html#re.findall
relatedReasons:
  learning/2026-11-03-autoencoder-reconstruction: reconstruction의 target과 오차를 이해한 뒤 학습 로그를 읽는다.
  learning/2026-11-05-adam-learning-rate: optimizer의 update 규칙과 update마다 관찰하는 loss를 구별한다.
---

이미지 복원 미션에서 `update`, `batch MSE`, `val MSE`가 반복되는 로그를 붙여 넣고 “이걸 그래프로 시각화하는 코드”를 물었다. 이어서 코드를 다시 붙여 넣었는데, 여러 줄 로그를 따옴표 한 개씩으로 감싸 놓은 부분을 교정받았다.

아래 **의도는 대화 맥락을 바탕으로 한 해석**이다. 로그와 코드가 본문에 있어 답할 수 있는 두 질문만 정리했다. 뒤이어 나온 notebook 셀 오류는 실제 셀을 확인해야 하므로 포함하지 않았다. 코드를 제안·교정받은 기록이며, 사용자가 실행에 성공했거나 모델의 복원 품질이 좋아졌음을 확인한 기록은 아니다.

## 질문: 출력된 MSE 로그를 어떻게 그래프로 그릴까?

**상황:** update별로 batch MSE와 validation MSE가 기록된 긴 텍스트가 있었다.

**의도:** 숫자를 한 줄씩 읽는 대신 학습이 진행되면서 오차가 어떻게 달라지는지 보고 싶은 질문이다.

**핵심 답변:** 각 로그에서 세 값을 꺼내 **update를 x축**, **MSE를 y축**으로 두고 두 선을 그린다. 숫자가 여러 자릿수 범위에 걸치면 y축의 log scale로 상대적인 변화를 살펴볼 수 있다.

다음은 원본 로그 전체를 옮긴 것이 아닌 **설명용 예시**다. `batch MSE`와 `val MSE`는 로그에 기록된 이름이며, 각 값을 계산하는 원래 학습 코드는 여기서 확인하지 않았다.

```python
import re
import matplotlib.pyplot as plt

log_text = """
update 0100 | batch MSE 0.060000 | val MSE 0.050000
update 0200 | batch MSE 0.010000 | val MSE 0.009000
update 0300 | batch MSE 0.001000 | val MSE 0.000800
"""

pattern = r"update\s+(\d+)\s*\|\s*batch MSE\s+([\d.]+)\s*\|\s*val MSE\s+([\d.]+)"
matches = re.findall(pattern, log_text)

updates = [int(step) for step, batch, val in matches]
batch_mses = [float(batch) for step, batch, val in matches]
val_mses = [float(val) for step, batch, val in matches]

fig, ax = plt.subplots(figsize=(10, 4))
ax.plot(updates, batch_mses, label="Batch MSE", alpha=0.7)
ax.plot(updates, val_mses, label="Validation MSE", linewidth=2)
ax.set(xlabel="Update", ylabel="MSE", yscale="log")
ax.legend()
ax.grid(True, which="both", alpha=0.3)
plt.tight_layout()
plt.show()
```

[Python의 `re.findall`](https://docs.python.org/3/library/re.html#re.findall)은 pattern에 맞는 부분들을 찾는다. 이 pattern에는 괄호로 감싼 group이 세 개이므로, 결과의 각 항목은 문자열 세 개를 담은 tuple이다.

```text
matches[0] = ('0100', '0.060000', '0.050000')
updates    = [100, 200, 300]
batch_mses = [0.06, 0.01, 0.001]
val_mses   = [0.05, 0.009, 0.0008]
```

세 list의 같은 위치가 한 update의 기록이다. `int`와 `float`로 바꾼 뒤 그리므로 update 100, 200, 300이 숫자 위치로 표현된다. 이 pattern은 **위와 같은 고정소수점 로그 형식에 한정**된다. `1e-3`처럼 scientific notation으로 출력되거나 형식이 달라지면 그대로 사용할 수 없다. 예상보다 적은 점이 나오면 먼저 `len(matches)`와 실제 로그 형식을 비교해야 한다.

### Log scale은 loss를 다시 계산하는 것이 아니다

[Matplotlib의 `set_yscale`](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.set_yscale.html)에 `"log"`를 지정하면 축의 표시 방식이 바뀐다. `batch_mses`와 `val_mses`에 저장한 값은 그대로다.

예를 들어 `0.1 → 0.01 → 0.001`은 매번 10분의 1로 줄어든다. Log scale에서는 이런 같은 비율의 변화가 같은 간격으로 보인다. 일반적인 linear scale을 쓰려면 `yscale="log"`를 제거하면 된다.

**Log scale에 표시할 값은 양수여야 한다.** MSE가 정확히 0인 점은 이 축에 정상적으로 표시할 수 없다. 이 경우 linear scale 등 목적에 맞는 표시를 선택한다. 그림에 맞추려고 실제 MSE를 임의의 양수로 바꾸어 기록하지 않는다.

두 곡선의 움직임은 계산 조건도 함께 읽어야 한다. Batch MSE가 현재 mini-batch의 값이라면 batch 구성이 달라져 흔들릴 수 있다. Validation MSE가 같은 validation data와 같은 집계 방식으로 계산되었다면 update 간 비교에 도움이 된다. **두 선이 감소한다는 것만으로 overfitting이 없거나 보지 않은 모든 이미지에서 잘 복원한다고 확정할 수는 없다.** 복원 이미지와 평가 조건도 따로 확인해야 한다.

## 질문: 로그를 붙여 넣은 코드에서 무엇이 잘못되었을까?

**상황:** 다시 붙여 넣은 코드의 `log_text`는 여러 줄에 걸쳐 있었지만, 시작과 끝을 `"` 하나씩으로 감쌌다.

**의도:** 앞서 받은 코드를 실제 로그에 적용하는 과정에서 문자열 작성 방식을 확인하려는 질문이다.

**핵심 답변:** 일반적인 짧은 문자열 literal 안에는 그대로 줄바꿈을 넣을 수 없다. 여러 줄을 그대로 넣으려면 시작과 끝을 **같은 종류의 따옴표 세 개**로 감싼다.

```python
log_text = """
첫 번째 로그 줄
두 번째 로그 줄
"""
```

[Python의 triple-quoted strings](https://docs.python.org/3/reference/lexical_analysis.html#triple-quoted-strings)는 문자열 내부의 줄바꿈을 보존한다. `'''`로 시작했다면 `'''`로 닫아도 된다. 이 문자열은 comment가 아니라 `log_text`에 할당되는 데이터다. 문자열 문법을 고쳤다는 사실과 regular expression이 로그를 모두 읽었는지는 별도로 확인해야 한다.

이번에 구별한 것은 **로그 텍스트 → 문자열 tuple → 숫자 list → 그래프**의 흐름과, **원래 MSE 값 → 축의 표시 방식**의 차이다. 새 로그로 독립적으로 적용할 수 있는지와 실제 미션의 성능은 아직 확인하지 않았다.

관련 글: [[learning/2026-11-03-autoencoder-reconstruction|Autoencoder의 복원 목표와 target]], [[learning/2026-11-05-adam-learning-rate|Adam의 update와 learning rate]].
