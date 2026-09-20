(() => {
  'use strict';

  // A simplified Leo outline, normalized from NOIRLab's constellation diagram.
  // The links describe the drawing; article relationships belong to the wiki graph.
  window.HanThingConstellation = {
    name: 'Leo',
    nodes: [
      { star: 'Regulus', title: 'Python', slug: 'notes/python/index', position: [.769, .558, 0] },
      { star: 'Eta Leonis', title: '남은 질문', slug: 'notes/questions', position: [.7782, .1776, 0] },
      { star: 'Algieba', title: '데이터 사이언스', slug: 'notes/data/data-science-overview', position: [.5358, -.0552, 0] },
      { star: 'Adhafera', title: '관측 단위', slug: 'notes/data/observation-unit', position: [.5894, -.3372, 0] },
      { star: 'Rasalas', title: '데이터 품질', slug: 'notes/data/data-quality', position: [1.015, -.558, 0] },
      { star: 'Epsilon Leonis', title: '데이터 다듬기', slug: 'notes/data/wrangling', position: [1.1466, -.3916, 0] },
      { star: 'Zosma', title: '위키의 작동 방식', slug: 'notes/wiki-workflow', position: [-.4658, -.1184, 0] },
      { star: 'Denebola', title: '학습 로드맵', slug: 'notes/bootcamp/roadmap', position: [-1.1466, .3108, 0] },
      { star: 'Chertan', title: '탐색과 인과', slug: 'notes/data/eda-and-causality', position: [-.4866, .2824, 0] },
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
      [2, 6], [1, 8],
      [6, 7], [7, 8], [8, 6],
    ],
  };
})();
