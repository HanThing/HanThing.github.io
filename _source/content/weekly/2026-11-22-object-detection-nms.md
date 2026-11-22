---
title: "위클리 페이퍼 #9 — 캔 하나에 bounding box가 세 개 나온 이유"
description: 캔 하나에 겹쳐 나온 세 bounding box를 NMS로 정리하고, IoU threshold를 낮출 때 인접한 캔이 누락될 수 있는 이유를 살펴본다.
date: 2026-11-22
publish: true
draft: false
type: weekly
courseId: computer-vision
lessonId: object-detection-review
topics: [컴퓨터 비전]
tags: [weekly-paper, object-detection, bounding-box, nms, iou, fast-r-cnn]
sources:
  - 코드잇 AI 엔지니어 16기 위클리 페이퍼 9회차 공식 문항 (2026-11-16 공지)
  - 위클리 페이퍼 9회차 준비 대화의 사용자 답변과 AI 피드백 (2026-11-22)
  - https://arxiv.org/abs/1504.08083
  - https://docs.pytorch.org/vision/stable/generated/torchvision.ops.nms.html
relatedReasons:
  weekly/2026-11-02-cnn-and-lstm: 이미지에서 CNN이 feature map을 만드는 과정을 복습한다. Fast R-CNN은 이 feature map을 region proposal마다 공유한다.
---

캔 하나에 bounding box가 세 개씩 겹쳐 나오면, 먼저 같은 캔을 가리키는 예측이 후처리에서 걸러졌는지 확인하겠다. 처음에는 IoU threshold를 너무 높게 잡았을 가능성을 떠올렸다. 답변을 준비하면서 threshold를 낮췄을 때 옆에 붙어 있는 캔까지 놓칠 수 있다는 점도 생각해 봤다.

*위클리 페이퍼 준비 대화에서 내가 설명한 내용과 AI 피드백을 바탕으로 정리했다. 아래 수치는 NMS 동작을 설명하기 위한 예시다. 문제에 나온 모델과 설정은 알려지지 않았고, 실제 모델의 성능은 측정하지 않았다.*

## 질문: 캔 하나에 겹쳐 나온 박스를 어떻게 정리할까?

> 진열대 사진에 객체 인식 모델을 돌렸더니, 캔 하나에 박스가 3개씩 거의 같은 자리에 겹쳐서 나와요. 왜 이런 일이 생길까요? 이 박스들을 하나로 정리하려면 어떻게 할 건가요?

**상황:** 진열대의 캔 하나에 비슷한 위치와 크기의 박스 세 개가 표시됐다.

**의도:** 같은 객체에 대한 중복 예측이 어떻게 생기는지, 후처리에서 어떤 기준으로 박스를 걸러낼지 설명하는 문제로 읽었다.

**핵심 답변:** 한 객체를 여러 후보 박스가 비슷한 위치에서 찾으면 같은 클래스의 예측이 여러 개 나올 수 있다. 먼저 화면에 그린 박스가 NMS 전의 결과인지, NMS를 거친 결과인지 확인하겠다. NMS를 거친 결과라면 겹친 박스들의 IoU와 적용한 threshold를 비교한다. IoU가 threshold 이하라서 중복 박스가 남았다면, threshold를 낮춰 같은 캔을 가리키는 낮은 점수의 박스를 더 적극적으로 제거할 수 있다.

## Fast R-CNN을 예로 들어 보기

문항에 모델이 지정되어 있지 않아서 답변을 준비할 때 Fast R-CNN을 예로 들었다. Fast R-CNN은 외부에서 생성한 region proposal을 입력받는다. [[weekly/2026-11-02-cnn-and-lstm|앞선 CNN 복습]]에서 살펴본 feature map을 여러 proposal이 공유한다. 여러 proposal이 같은 캔을 포함하면, 각각에 대해 캔 클래스 점수와 보정된 bounding box가 나올 수 있다.

캔 클래스에 greedy NMS(Non-Maximum Suppression)를 적용한다면 남은 예측 중 점수가 가장 높은 박스를 먼저 남긴다. 나머지 후보와 이 박스의 IoU(Intersection over Union, 겹치는 면적을 합친 면적으로 나눈 값)를 비교해 threshold를 초과하는 낮은 점수의 박스를 제거한다. 후보가 남아 있으면 그중에서 다시 점수가 가장 높은 박스를 선택하고 같은 과정을 반복한다.

## IoU threshold가 0.90이라면

캔 클래스 박스 A, B, C의 점수가 각각 0.95, 0.88, 0.76이라고 하자. IoU는 A–B가 0.82, A–C가 0.30, B–C가 0.25라고 가정한다.

| IoU threshold | A를 남긴 직후 | 최종 결과 |
| --- | --- | --- |
| 0.90 | B와 C 모두 남는다 | B–C의 IoU도 0.90 이하이므로 A, B, C가 남는다 |
| 0.50 | B를 제거하고 C를 남긴다 | A, C가 남는다 |

B를 먼저 제거할지 결정하는 기준은 A와 B의 IoU다. A는 점수가 가장 높아서 첫 번째 비교 기준이 된다. Threshold를 0.50으로 낮춰도 이 예시에서는 C가 남는다. 실제로 세 박스가 한 캔을 가리킨다면, 남은 후보가 어떤 박스인지도 확인해야 한다.

## threshold를 낮추면 인접한 캔도 누락될 수 있다

서로 다른 캔을 가리키는 두 박스의 IoU가 0.45라고 하자. 두 박스만 놓고 보면 threshold가 0.50일 때는 둘 다 남는다. 0.40으로 낮추면 IoU 0.45가 threshold를 초과해서 점수가 낮은 박스가 제거된다. 이때는 실제 캔 하나가 누락된다.

그래서 threshold를 고를 때는 **캔 하나에 박스가 여러 개 나온 사진**과 **서로 붙어 있는 캔이 각각 검출되어야 하는 사진**을 함께 확인하겠다. 전자에서는 중복이 줄었는지, 후자에서는 실제 캔을 놓치지 않았는지 본다.
