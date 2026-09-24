(() => {
  'use strict';

  const notes = window.HANTHING_CONTENT?.notes || [];
  const topics = [...new Set(notes.flatMap(note => note.topics || []))].sort();
  const hash = text => {
    let value = 2166136261;
    for (const char of text) value = Math.imul(value ^ char.charCodeAt(0), 16777619);
    return (value >>> 0) / 4294967296;
  };
  const nodes = notes.map(note => ({
    ...note, topic: note.topics?.[0] || '기타',
    position: ['x', 'y', 'z'].map(axis => (hash(note.id + axis) - .5) * 2),
    degree: 0,
  }));
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
  edges.forEach(([a, b]) => { nodes[a].degree++; nodes[b].degree++; });
  // ponytail: static O(n²) layout; use a spatial force index when notes reach thousands.
  for (let step = 0; step < 160; step++) {
    const forces = nodes.map(node => node.position.map(value => -value * .012));
    nodes.forEach((node, a) => {
      for (let b = a + 1; b < nodes.length; b++) {
        const delta = node.position.map((value, axis) => value - nodes[b].position[axis]);
        const distance = Math.max(.08, Math.hypot(...delta));
        delta.forEach((value, axis) => {
          const force = value / distance * .055 / (distance * distance);
          forces[a][axis] += force; forces[b][axis] -= force;
        });
      }
    });
    edges.forEach(([a, b]) => {
      const delta = nodes[b].position.map((value, axis) => value - nodes[a].position[axis]);
      const distance = Math.max(.08, Math.hypot(...delta));
      delta.forEach((value, axis) => {
        const force = value / distance * (distance - .85) * .08;
        forces[a][axis] += force; forces[b][axis] -= force;
      });
    });
    nodes.forEach((node, i) => node.position = node.position.map((value, axis) => value + Math.max(-.08, Math.min(.08, forces[i][axis])) * (1 - step / 220)));
  }
  const extent = Math.max(1, ...nodes.map(node => Math.hypot(...node.position)));
  nodes.forEach(node => node.position = node.position.map((value, axis) => value / extent * [1.65, 1.3, 1.15][axis]));
  function filter({ query = '', type = '', topic = '', courseId = '', lessonId = '' }) {
    const words = query.trim().toLocaleLowerCase('ko').split(/\s+/).filter(Boolean);
    const visible = nodes.flatMap((node, i) => {
      const text = `${node.title} ${node.description || ''}`.toLocaleLowerCase('ko');
      return (!courseId || node.courseId === courseId) && (!lessonId || node.lessonId === lessonId) && (!type || node.type === type) && (!topic || node.topics?.includes(topic)) && words.every(word => text.includes(word)) ? [i] : [];
    });
    const included = new Set(visible);
    return { indices: visible, edges: edges.filter(([a, b]) => included.has(a) && included.has(b)) };
  }
  window.HanThingConstellation = { nodes, edges, topics, filter };
})();
