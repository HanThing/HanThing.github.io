(() => {
  'use strict';

  const $ = selector => document.querySelector(selector);
  const canvas = $('#starfield-canvas');
  const ctx = canvas.getContext('2d');
  const graph = window.HanThingConstellation;
  const stage = $('#graph-stage');
  const hitArea = $('#graph-canvas');
  const workspace = $('#brain');
  const sidebar = $('#map-sidebar');
  const detail = $('#node-detail');
  const search = $('#graph-search');
  const type = $('#graph-type');
  const course = $('#graph-course');
  const lesson = $('#graph-lesson');
  const courses = window.HANTHING_CONTENT.courses || [];
  const list = $('#topic-list');
  const motionButton = $('#motion-toggle');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const types = { concept: '개념', journal: '날짜별 기록', weekly: '위클리 페이퍼', project: '프로젝트' };
  const stateKey = 'hanthing-map-v1';
  const tau = Math.PI * 2;
  const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));
  const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };
  const mix = (a, b, t) => a + (b - a) * t;
  let light = false;
  let colors = [];
  let filamentColors = [];
  let width = 0, height = 0, time = 0, lastFrame = 0;
  let dirty = true, frameId = 0;
  let paused = reducedMotion.matches;
  let scatter = 0, zoom = 1;
  let selectedId = null;
  let visible = new Set();
  let visibleEdges = [];
  let sets = [];
  const rotation = { x: -.2, y: -.26 };
  const projected = graph.nodes.map(node => ({ id: node.id, x: 0, y: 0, z: 0, radius: 0, visible: true }));
  const labels = [];
  const resultButtons = new Map();
  const pointer = { x: 0, y: 0, active: false };
  let seed = 290924;
  const random = () => ((seed = seed * 16807 % 2147483647) - 1) / 2147483646;
  // This pool keeps its identity: only its destination changes with page scroll.
  const particles = Array.from({ length: Math.max(1500, graph.nodes.length) }, (_, id) => {
    return {
      id, node: graph.nodes.length ? id % graph.nodes.length : -1,
      fx: random(), fy: random(), phase: random() * tau, depth: .3 + random() * .7,
      size: .45 + random() ** 2 * .6, brightness: .4 + random() * .5,
      x: 0, y: 0, anchorX: 0, anchorY: 0, offsetX: 0, offsetY: 0,
    };
  });
  // Batch tiny particles by color and brightness instead of filling each one.
  const particleBatches = Array.from({ length: 8 }, () => []);
  particles.forEach(p => particleBatches[(p.id % 4 === 0 ? 0 : 4) + Math.floor((p.brightness - .4) * 8)].push(p));
  let restored;
  try { restored = JSON.parse(sessionStorage.getItem(stateKey)); } catch {}
  if (restored && typeof restored === 'object') {
    search.value = typeof restored.query === 'string' ? restored.query : '';
    type.value = typeof restored.type === 'string' ? restored.type : '';
    if (Number.isFinite(restored.zoom)) zoom = clamp(restored.zoom, .65, 1.7);
    if (Number.isFinite(restored.rotation?.x)) rotation.x = restored.rotation.x;
    if (Number.isFinite(restored.rotation?.y)) rotation.y = restored.rotation.y;
  }
  courses.forEach(item => { const option = new Option(item.title, item.id); course.add(option); });
  if (courses.some(item => item.id === restored?.courseId)) course.value = restored.courseId;
  function fillLessons() {
    const previous = lesson.value;
    lesson.replaceChildren(new Option('모든 수업', ''));
    courses.filter(item => !course.value || item.id === course.value).forEach(item => item.lessons.forEach(part => lesson.add(new Option(part.title + (part.kind === 'supplemental' ? ' · 보충' : ''), part.id))));
    if ([...lesson.options].some(option => option.value === previous)) lesson.value = previous;
  }
  fillLessons();
  if ([...lesson.options].some(option => option.value === restored?.lessonId)) lesson.value = restored.lessonId;
  function toggleSidebar(open) {
    sidebar.hidden = !open;
    $('#map-toggle').setAttribute('aria-expanded', String(open));
    $('#map-toggle').setAttribute('aria-label', open ? '노트 탐색 닫기' : '노트 탐색 열기');
    if (open) search.focus({ preventScroll: true });
  }
  $('#map-toggle').addEventListener('click', () => toggleSidebar(sidebar.hidden));
  $('#map-close').addEventListener('click', () => { toggleSidebar(false); $('#map-toggle').focus(); });
  function filterState() { return { query: search.value, type: type.value, courseId: course.value, lessonId: lesson.value }; }
  function save() {
    try { sessionStorage.setItem(stateKey, JSON.stringify({ ...filterState(), selectedId, rotation, zoom })); } catch {}
  }
  function requestPaint() {
    dirty = true;
    if (!frameId && !document.hidden) frameId = requestAnimationFrame(render);
  }
  function colorFor(node) {
    return colors[Math.max(0, graph.topics.indexOf(node?.topic)) % colors.length];
  }
  function updateTheme() {
    light = document.documentElement.getAttribute('saved-theme') === 'light';
    colors = light ? ['#38699c', '#997029', '#765394', '#39765e', '#9a465e'] : ['#77a2da', '#dbc49a', '#a58abc', '#84ae9b', '#bf929e'];
    filamentColors = light ? ['#786b53', '#496c94', '#806387', '#858178'] : ['#d6c8af', '#7c9fc8', '#a993bd', '#c7c6c0'];
    labels.forEach((button, i) => button.style.setProperty('--node-color', colorFor(graph.nodes[i])));
    document.querySelectorAll('[data-topic]').forEach(element => {
      element.style.setProperty('--topic-color', colors[Math.max(0, graph.topics.indexOf(element.dataset.topic)) % colors.length]);
    });
    requestPaint();
  }
  function resize() {
    width = innerWidth; height = innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    requestPaint();
  }
  function clearSelection(focus = false) {
    const previous = selectedId;
    selectedId = null;
    detail.hidden = true;
    workspace.classList.remove('has-selection');
    syncSelection(); save(); requestPaint();
    if (focus) (labels[graph.nodes.findIndex(node => node.id === previous)] || hitArea).focus({ preventScroll: true });
  }
  function syncSelection() {
    labels.forEach((button, i) => button.setAttribute('aria-pressed', String(graph.nodes[i].id === selectedId)));
    resultButtons.forEach((button, id) => button.setAttribute('aria-pressed', String(id === selectedId)));
  }
  function renderReviewLinks() {
    const container = $('#node-review-links');
    container.replaceChildren();
    sets.filter(set => set.noteIds?.includes(selectedId)).forEach(set => {
      const actions = [];
      if (set.questions?.length) actions.push(['quiz', '퀴즈 풀기']);
      if (set.cards?.length) actions.push(['cards', '플래시카드']);
      if (!actions.length) return;
      const section = document.createElement('div'); section.className = 'review-set';
      const heading = document.createElement('p'); heading.textContent = set.title;
      section.append(heading);
      actions.forEach(([mode, title]) => {
        const link = document.createElement('a');
        link.href = `review.html?set=${encodeURIComponent(set.id)}&mode=${mode}`;
        link.textContent = title; section.append(link);
      });
      container.append(section);
    });
  }
  function selectNode(id, focusNode = true) {
    const index = graph.nodes.findIndex(node => node.id === id);
    if (index === -1) return false;
    if (!visible.has(index)) {
      search.value = ''; type.value = ''; course.value = ''; lesson.value = ''; fillLessons();
      applyFilters();
    }
    const node = graph.nodes[index];
    selectedId = id;
    detail.hidden = false;
    workspace.classList.add('has-selection');
    $('#node-title').textContent = node.title;
    $('#node-type').textContent = `${types[node.type] || '노트'} · ${courses.find(item => item.id === node.courseId)?.lessons.find(part => part.id === node.lessonId)?.title || node.topic}`;
    $('#node-description').textContent = node.description || '연결된 노트를 열어 내용을 살펴보세요.';
    $('#node-read').href = node.url;
    const related = (node.links || []).map(link => graph.nodes.find(n => n.id === link)).filter(Boolean);
    $('#node-related').hidden = !related.length;
    $('#node-notes').replaceChildren(...related.map(note => {
      const item = document.createElement('li'); const link = document.createElement('a');
      link.href = note.url; link.textContent = note.title; item.append(link); return item;
    }));
    renderReviewLinks(); syncSelection();
    if (focusNode) {
      const [x, y, z] = node.position;
      rotation.y = Math.atan2(x, -z) - time * .012;
      rotation.x = -Math.atan2(y, Math.hypot(x, z));
      zoom = Math.max(1, zoom);
      toggleSidebar(false);
      $('#node-title').focus({ preventScroll: true });
      const rect = stage.getBoundingClientRect();
      if (scatter > .05 || rect.top < 80 || rect.top > innerHeight - 100) {
        window.scrollTo({ top: 0, behavior: paused || reducedMotion.matches ? 'instant' : 'smooth' });
      }
    }
    save(); requestPaint();
    return true;
  }
  function applyFilters() {
    const filtered = graph.filter(filterState());
    visible = new Set(filtered.indices); visibleEdges = filtered.edges;
    if (selectedId && !filtered.indices.some(i => graph.nodes[i].id === selectedId)) clearSelection();
    resultButtons.clear(); list.replaceChildren();
    filtered.indices.sort((a, b) => (graph.nodes[a].type === 'journal') - (graph.nodes[b].type === 'journal') || graph.nodes[a].title.localeCompare(graph.nodes[b].title, 'ko')).forEach(i => {
      const node = graph.nodes[i];
      const button = document.createElement('button'); button.type = 'button';
      button.dataset.nodeId = node.id; button.dataset.topic = node.topic;
      const dot = document.createElement('span'); dot.className = 'topic-dot'; dot.setAttribute('aria-hidden', 'true');
      const title = document.createElement('span'); title.textContent = node.title;
      const meta = document.createElement('small'); meta.textContent = `${types[node.type] || '노트'} · ${courses.find(item => item.id === node.courseId)?.lessons.find(part => part.id === node.lessonId)?.title || node.topic}`;
      title.append(meta); button.append(dot, title);
      button.addEventListener('click', () => selectNode(node.id));
      list.append(button); resultButtons.set(node.id, button);
    });
    $('#graph-count').textContent = `${visible.size} / ${graph.nodes.length}개 노트 · ${visibleEdges.length}개 연결`;
    $('#graph-empty').hidden = visible.size > 0;
    $('#map-total').textContent = `${graph.nodes.length}개의 노트 · ${graph.edges.length}개의 연결`;
    syncSelection(); updateTheme(); save(); requestPaint();
  }
  graph.nodes.forEach((node, i) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'graph-label';
    button.setAttribute('aria-label', `${node.title}, ${types[node.type] || '노트'}, ${node.topic}`);
    button.dataset.nodeId = node.id;
    const title = document.createElement('span'); title.className = 'graph-label-text'; title.textContent = node.title;
    button.append(title);
    button.addEventListener('click', () => selectNode(node.id));
    labels[i] = button; $('#graph-labels').append(button);
  });
  search.addEventListener('input', applyFilters);
  type.addEventListener('change', applyFilters);
  course.addEventListener('change', () => { lesson.value = ''; fillLessons(); applyFilters(); });
  lesson.addEventListener('change', applyFilters);
  $('#node-close').addEventListener('click', () => clearSelection(true));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { if (!sidebar.hidden) { toggleSidebar(false); $('#map-toggle').focus(); } else if (selectedId) clearSelection(true); }
  });
  function setZoom(value) { zoom = clamp(value, .65, 1.7); save(); requestPaint(); }
  $('#graph-zoom-in').addEventListener('click', () => setZoom(zoom + .15));
  $('#graph-zoom-out').addEventListener('click', () => setZoom(zoom - .15));
  $('#graph-reset').addEventListener('click', () => { rotation.x = -.2; rotation.y = -.26; zoom = 1; save(); requestPaint(); });
  hitArea.addEventListener('keydown', event => {
    const keys = { ArrowLeft: [0, -.12], ArrowRight: [0, .12], ArrowUp: [-.12, 0], ArrowDown: [.12, 0] };
    if (keys[event.key]) {
      event.preventDefault(); rotation.x += keys[event.key][0]; rotation.y += keys[event.key][1]; save(); requestPaint();
    } else if (event.key === '+' || event.key === '=' || event.key === '-') {
      event.preventDefault(); setZoom(zoom + (event.key === '-' ? -.15 : .15));
    }
  });
  let drag = null;
  hitArea.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, lastX: event.clientX, lastY: event.clientY, touch: event.pointerType === 'touch', moved: false };
  });
  hitArea.addEventListener('pointermove', event => {
    if (!drag || drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) < 6) return;
    if (!drag.moved && drag.touch && Math.abs(dy) > Math.abs(dx)) { drag = null; return; }
    if (!drag.moved) { drag.moved = true; hitArea.setPointerCapture(event.pointerId); stage.classList.add('dragging'); }
    rotation.y += (event.clientX - drag.lastX) * .006;
    rotation.x += (event.clientY - drag.lastY) * .006;
    drag.lastX = event.clientX; drag.lastY = event.clientY;
    requestPaint();
  });
  function endDrag(event) {
    if (!drag) return;
    if (!drag.moved && event.type === 'pointerup') {
      // Nearer nodes win when their projected hit areas overlap.
      const hit = projected.filter(node => node.visible && Math.hypot(node.x - event.clientX, node.y - event.clientY) <= Math.max(22, node.radius + 10)).sort((a, b) => a.z - b.z)[0];
      if (hit) selectNode(hit.id);
    }
    if (hitArea.hasPointerCapture?.(drag.id)) hitArea.releasePointerCapture(drag.id);
    drag = null; stage.classList.remove('dragging'); save(); requestPaint();
  }
  hitArea.addEventListener('pointerup', endDrag);
  hitArea.addEventListener('pointercancel', endDrag);
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse') return;
    pointer.x = event.clientX; pointer.y = event.clientY; pointer.active = true;
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => { pointer.active = false; });
  window.addEventListener('blur', () => { pointer.active = false; });
  function updateMotion() {
    document.documentElement.classList.toggle('motion-paused', paused);
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.setAttribute('aria-label', paused ? '애니메이션 재생' : '애니메이션 일시정지');
    motionButton.textContent = paused ? '▷' : 'Ⅱ';
    lastFrame = 0; requestPaint();
  }
  motionButton.addEventListener('click', () => { paused = !paused; updateMotion(); });
  reducedMotion.addEventListener('change', event => { paused = event.matches; updateMotion(); });
  window.addEventListener('scroll', requestPaint, { passive: true });
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pagehide', save);
  window.addEventListener('pageshow', () => { document.querySelector('.node-transition')?.remove(); requestPaint(); });
  document.addEventListener('themechange', updateTheme);
  document.addEventListener('visibilitychange', () => { lastFrame = 0; if (!document.hidden) requestPaint(); });
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(requestPaint).observe(stage);

  // Remove this effect by setting data-node-transition="off"; the link still works.
  let opening = false;
  $('#node-read').addEventListener('click', event => {
    save();
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || paused || reducedMotion.matches || document.body.dataset.nodeTransition === 'off') return;
    const node = projected.find(point => point.id === selectedId);
    if (!node?.visible || opening) return;
    event.preventDefault(); opening = true;
    const expansion = document.createElement('div'); expansion.className = 'node-transition';
    expansion.style.left = `${node.x}px`; expansion.style.top = `${node.y}px`;
    expansion.style.setProperty('--transition-color', colorFor(graph.nodes.find(note => note.id === selectedId)));
    document.body.append(expansion);
    const href = event.currentTarget.href;
    setTimeout(() => { window.location.assign(href); opening = false; }, 320);
  });

  function projection(position, angle, scale, cx, cy) {
    const [x, y, z] = position;
    const px = x * angle.cy + z * angle.sy;
    const depth = -x * angle.sy + z * angle.cy;
    const py = y * angle.cx - depth * angle.sx;
    const pz = y * angle.sx + depth * angle.cx;
    const perspective = 5 / (5 + pz);
    return { x: cx + px * scale * perspective, y: cy + py * scale * perspective, z: pz, perspective };
  }
  function positionParticle(particle, anchorX, anchorY, elapsed) {
    particle.anchorX = anchorX; particle.anchorY = anchorY;
    if (!scatter) {
      particle.x = anchorX; particle.y = anchorY;
      particle.offsetX = 0; particle.offsetY = 0;
      return;
    }
    const fieldX = particle.fx * width + Math.sin(time * .13 + particle.phase) * 13;
    const fieldY = ((particle.fy * height - scrollY * .045 * particle.depth + Math.cos(time * .11 + particle.phase) * 11) % height + height) % height;
    const x = mix(anchorX, fieldX, scatter), y = mix(anchorY, fieldY, scatter);
    let offsetX = 0, offsetY = 0;
    if (pointer.active && !drag && !reducedMotion.matches && scatter > 0) {
      const dx = x - pointer.x, dy = y - pointer.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 130) {
        const force = (1 - distance / 130) ** 2 * 52 * scatter;
        offsetX = (distance ? dx / distance : Math.cos(particle.phase)) * force;
        offsetY = (distance ? dy / distance : Math.sin(particle.phase)) * force;
      }
    }
    if (!paused) {
      const follow = 1 - Math.exp(-elapsed / 90);
      particle.offsetX = mix(particle.offsetX, offsetX, follow);
      particle.offsetY = mix(particle.offsetY, offsetY, follow);
    }
    particle.x = x + particle.offsetX * scatter;
    particle.y = y + particle.offsetY * scatter;
  }
  function render(now) {
    frameId = 0;
    if (document.hidden) return;
    const elapsed = Math.min(lastFrame ? now - lastFrame : 16, 40);
    if (!paused) time += Math.min(lastFrame ? now - lastFrame : 0, 40) / 1000;
    lastFrame = now;
    if (dirty || !paused) {
      dirty = false;
      const rect = stage.getBoundingClientRect();
      const header = $('.site-header').getBoundingClientRect().height;
      const start = Math.max(0, rect.top + scrollY - header - 16);
      const target = smooth((scrollY - start) / Math.max(220, rect.height * .8));
      scatter = paused ? target : mix(scatter, target, 1 - Math.exp(-elapsed / 75));
      if (Math.abs(scatter - target) < .001) scatter = target;
      if (reducedMotion.matches) scatter = target < .5 ? 0 : 1;
      const graphMix = 1 - scatter;
      const turn = rotation.y + time * .012;
      const angle = { sx: Math.sin(rotation.x), cx: Math.cos(rotation.x), sy: Math.sin(turn), cy: Math.cos(turn) };
      const scale = Math.min(rect.width / 4.25, (rect.height - 105) / 3.05) * zoom;
      const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2 + 4;
      const floating = graph.nodes.map((node, i) => node.position.map((value, axis) => value + Math.sin(time * .32 + i * 1.7 + axis * 2.1) * .023));
      graph.nodes.forEach((node, i) => {
        const point = projection(floating[i], angle, scale, cx, cy);
        // The real node and its first particle are the same moving point.
        const particle = particles[i];
        positionParticle(particle, point.x, point.y, elapsed);
        const anchorX = point.x, anchorY = point.y;
        point.x = particle.x; point.y = particle.y;
        Object.assign(projected[i], point, {
          anchorX, anchorY,
          radius: (node.id === selectedId ? 4 : 1.45 + Math.min(node.degree, 8) * .1) * point.perspective,
          visible: visible.has(i) && graphMix > .08 && point.x > rect.left + 12 && point.x < rect.right - 12 && point.y > rect.top + 12 && point.y < rect.bottom - 30,
        });
        const button = labels[i];
        button.hidden = !projected[i].visible;
        button.style.left = `${point.x - rect.left}px`; button.style.top = `${point.y - rect.top}px`;
        button.style.opacity = String(graphMix);
        button.classList.toggle('label-muted', node.type === 'journal' && node.id !== selectedId);
        button.style.zIndex = String(Math.round(100 - point.z * 20));
        button.classList.toggle('label-near-left', point.x - rect.left < 125);
        button.classList.toggle('label-near-right', rect.right - point.x < 125);
      });
      const labelPositions = [];
      graph.nodes.map((node, i) => ({ node, i })).sort((a, b) => (b.node.id === selectedId) - (a.node.id === selectedId) || b.node.degree - a.node.degree).forEach(({ node, i }) => {
        const point = projected[i];
        const crowded = labelPositions.some(other => Math.abs(point.x - other.x) < 145 && Math.abs(point.y - other.y) < 22);
        const show = point.visible && (node.id === selectedId || node.type !== 'journal' && !crowded);
        labels[i].classList.toggle('label-muted', !show);
        if (show) labelPositions.push(point);
      });
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';
      particleBatches.forEach((batch, i) => {
        ctx.fillStyle = light ? '#756951' : i < 4 ? '#87a7d1' : '#e6d8bb';
        ctx.globalAlpha = smooth((scatter - .08) / .7) * (.4625 + (i % 4) * .125) * (light ? .8 : .95);
        ctx.beginPath();
        for (const particle of batch) {
          const anchor = projected[particle.node];
          if (!anchor || !visible.has(particle.node)) continue;
          if (particle.id >= graph.nodes.length) positionParticle(particle, anchor.anchorX, anchor.anchorY, elapsed);
          if (!scatter) continue;
          if (particle.x < -5 || particle.x > width + 5 || particle.y < -5 || particle.y > height + 5) continue;
          const radius = particle.size * mix(clamp(anchor.perspective, .7, 1.5), 1.65, scatter);
          ctx.moveTo(particle.x + radius, particle.y); ctx.arc(particle.x, particle.y, radius, 0, tau);
        }
        if (scatter) ctx.fill();
      });
      if (graphMix > .01) {
        ctx.save(); ctx.beginPath(); ctx.rect(0, header, width, height - header); ctx.clip();
        ctx.globalCompositeOperation = light ? 'source-over' : 'lighter';
        for (const [a, b] of visibleEdges) {
          const from = projected[a], to = projected[b];
          const selected = graph.nodes[a].id === selectedId || graph.nodes[b].id === selectedId;
          ctx.strokeStyle = filamentColors[(a * 31 + b) % filamentColors.length];
          ctx.beginPath(); ctx.moveTo(from.x, from.y); ctx.lineTo(to.x, to.y);
          // Local halos follow the real edge; no extra geometry or screen-sized blur.
          ctx.globalAlpha = graphMix * .035; ctx.lineWidth = 3.6; ctx.stroke();
          ctx.globalAlpha = graphMix * .12; ctx.lineWidth = 1.4; ctx.stroke();
          ctx.globalAlpha = graphMix * (selected ? .95 : light ? .65 : .64);
          ctx.lineWidth = selected ? .8 : .5; ctx.stroke();
        }
        projected.map((point, i) => ({ point, i })).filter(({i}) => visible.has(i)).sort((a, b) => b.point.z - a.point.z).forEach(({ point, i }) => {
          const selected = graph.nodes[i].id === selectedId;
          ctx.fillStyle = filamentColors[i % filamentColors.length]; ctx.globalAlpha = graphMix * .07;
          ctx.beginPath(); ctx.arc(point.x, point.y, point.radius * 3, 0, tau); ctx.fill();
          ctx.globalAlpha = graphMix * .2;
          ctx.beginPath(); ctx.arc(point.x, point.y, point.radius * 1.5, 0, tau); ctx.fill();
          ctx.fillStyle = light ? colorFor(graph.nodes[i]) : '#f3f1ed';
          ctx.globalAlpha = graphMix * clamp(.92 - point.z * .1, .65, 1);
          ctx.beginPath(); ctx.arc(point.x, point.y, point.radius * .65, 0, tau); ctx.fill();
          if (selected) {
            ctx.strokeStyle = colorFor(graph.nodes[i]); ctx.lineWidth = 1; ctx.globalAlpha = graphMix * .6;
            ctx.beginPath(); ctx.arc(point.x, point.y, point.radius + 6, 0, tau); ctx.stroke();
          }
        });
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      $('#graph-zoom-in').disabled = zoom >= 1.7;
      $('#graph-zoom-out').disabled = zoom <= .65;
    }
    if (!paused) frameId = requestAnimationFrame(render);
  }
  window.HanThingGraph = { selectNode: id => selectNode(id) };
  window.__particleScene = { snapshot: () => ({
    nodes: projected.map(node => ({ ...node })), particles: particles.map(({id, x, y, anchorX, anchorY}) => ({id, x, y, anchorX, anchorY})),
    decoration: { points: 0, edges: 0 }, rotation: { ...rotation }, zoom, paused, time, scatter, graphMix: 1 - scatter,
    visibleIds: [...visible].map(i => graph.nodes[i].id), selectedId, filter: filterState(),
    edges: visibleEdges.map(([a, b]) => [graph.nodes[a].id, graph.nodes[b].id]),
  }) };
  applyFilters();
  if (restored?.selectedId && graph.nodes.some((node, i) => node.id === restored.selectedId && visible.has(i))) selectNode(restored.selectedId, false);
  resize(); updateMotion();
  async function renderTodayReview() {
    const { loadSyncedProgress, getReviewQueue } = await import('./review-state.mjs');
    let storage;
    try { storage = localStorage; } catch {}
    const { state } = loadSyncedProgress(storage, sets);
    const queue = getReviewQueue(sets, state);
    const container = $('#today-review-list'); container.replaceChildren();
    queue.forEach(item => {
      const link = document.createElement('a');
      link.href = `review.html?set=${encodeURIComponent(item.set.id)}&goal=${encodeURIComponent(item.goal.id)}`;
      link.textContent = item.goal.title;
      const reason = document.createElement('small'); reason.textContent = item.reasonLabel;
      link.append(reason); container.append(link);
    });
    if (!queue.length) { const text = document.createElement('p'); text.textContent = '오늘 예정된 복습을 마쳤습니다.'; container.append(text); }
  }
  window.addEventListener('pageshow', () => { if (sets.length) renderTodayReview(); });
  window.addEventListener('storage', event => { if (sets.length && (!event.key || event.key === 'hanthing-review-v1')) renderTodayReview(); });
  fetch('review-data.json').then(response => response.ok ? response.json() : null).then(async data => {
    sets = Array.isArray(data?.sets) ? data.sets : [];
    if (selectedId) renderReviewLinks();
    await renderTodayReview();
  }).catch(() => { $('#today-review-list').textContent = '복습 목록을 불러오지 못했습니다. 상단 복습하기에서 다시 열어 주세요.'; });
})();
