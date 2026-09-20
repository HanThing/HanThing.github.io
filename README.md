# HanThing

https://hanthing.github.io/

개인 학습 기록과 직접 조작하는 학습판, 개념을 연결한 위키입니다. GitHub Pages가 `main` 브랜치의 루트를 그대로 공개합니다.

- `index.html`, `styles.css`, `main.js`, `leo-constellation.js`: 홈의 원본 코드
- `learning/`: Python 및 데이터 사이언스 학습판
- `_source/content/`: 위키의 공개 Markdown 원본
- `notes/`: Quartz가 만든 위키 결과물

## 글 추가 및 수정

`_source/content/`에서 Markdown을 편집합니다. 제목·날짜·태그와 `publish: true`를 지정하고 다른 개념을 `[[python/index]]`처럼 연결합니다. 표 안의 링크 별칭은 `[[python/index\|Python]]`처럼 파이프를 이스케이프합니다. 위키 밖의 학습판 링크는 `https://hanthing.github.io/learning/...` 전체 주소를 사용합니다.

```sh
sh _source/rebuild.sh
git diff --stat
```

Node 22 이상과 npm 10.9.2 이상이 필요합니다. 확인한 변경을 커밋하고 `origin main`에 푸시하면 Pages가 갱신됩니다. 학습판 HTML과 홈은 직접 편집하며, 위 명령은 `notes/`만 다시 만듭니다.

원문 PDF·비공개 노트·인증 정보는 이 공개 저장소에 넣지 않습니다. `draft: true` 또는 `publish: true`가 없는 문서는 빌드에서 제외되지만, 공개 Git 저장소에 커밋된 원본은 누구나 볼 수 있습니다.

## 출처

위키 엔진은 [Quartz](https://github.com/jackyzha0/quartz)이며 버전과 라이선스는 `_source/UPSTREAM.txt`, `_source/LICENSE.txt`에 보존했습니다. 사자자리의 기본 윤곽은 [NOIRLab의 Leo 도해](https://noirlab.edu/public/education/constellations/leo/)를 참고했습니다. Outfit 글꼴의 라이선스는 `vendor/OFL.txt`에 있습니다.
