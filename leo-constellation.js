(() => {
  'use strict';

  // A simplified Leo outline, normalized from NOIRLab's constellation diagram.
  // This decorative outline is independent of the growing document graph.
  const outline = {
    positions: [
      [.769, .558, 0], [.7782, .1776, 0], [.5358, -.0552, 0],
      [.5894, -.3372, 0], [1.015, -.558, 0], [1.1466, -.3916, 0],
      [-.4658, -.1184, 0], [-1.1466, .3108, 0], [-.4866, .2824, 0],
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
      [2, 6], [1, 8],
      [6, 7], [7, 8], [8, 6],
    ],
  };
  const notes = window.HANTHING_CONTENT?.notes || [];
  const nodes = notes.map((note, index) => {
    const angle = index * Math.PI * (3 - Math.sqrt(5));
    const radius = Math.sqrt((index + .5) / notes.length);
    return { ...note, position: [Math.cos(angle) * radius * 1.45, Math.sin(angle) * radius * .88, 0] };
  });
  const indices = new Map(nodes.map((node, index) => [node.id, index]));
  const pairs = new Set();
  const edges = [];
  nodes.forEach((node, a) => (node.links || []).forEach(id => {
    const b = indices.get(id);
    if (b === undefined || a === b) return;
    const pair = [Math.min(a, b), Math.max(a, b)];
    const key = pair.join(':');
    if (!pairs.has(key)) { pairs.add(key); edges.push(pair); }
  }));
  window.HanThingConstellation = { name: 'Leo', outline, nodes, edges };
})();
