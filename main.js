(() => {
  'use strict';

  const canvas = document.querySelector('#starfield-canvas');
  const ctx = canvas.getContext('2d');
  const hero = document.querySelector('.hero');
  const heroFrame = document.querySelector('.hero-frame');
  const stage = document.querySelector('#graph-stage');
  const hitArea = document.querySelector('#graph-canvas');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const motionButton = document.querySelector('#motion-toggle');
  const palette = ['#f7fbff', '#a7dbff', '#ffe0aa'];
  const tau = Math.PI * 2;
  const clamp = value => Math.max(0, Math.min(1, value));
  const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };
  const mix = (a, b, t) => a + (b - a) * t;
  let seed = 209207;
  const random = () => ((seed = seed * 16807 % 2147483647) - 1) / 2147483646;
  let paused = reducedMotion.matches;
  let dirty = true;
  let time = 0;
  let lastFrame = 0;
  let width = 0;
  let height = 0;
  let phase = 0;
  const pointer = { x: -9999, y: -9999, at: -9999, vx: 0, vy: 0 };
  const rotation = { x: -.12, y: 0 };

  // Cache only the halo. Sharp cores remain separate so light never becomes a blurred slab.
  const sprites = palette.map(color => {
    const sprite = document.createElement('canvas');
    sprite.width = sprite.height = 64;
    const brush = sprite.getContext('2d');
    const gradient = brush.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, '#ffffffb0');
    gradient.addColorStop(.08, `${color}80`);
    gradient.addColorStop(.24, `${color}24`);
    gradient.addColorStop(.6, `${color}08`);
    gradient.addColorStop(1, `${color}00`);
    brush.fillStyle = gradient;
    brush.fillRect(0, 0, 64, 64);
    return sprite;
  });

  function resize() {
    width = innerWidth;
    height = innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, 1.75);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dirty = true;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  function orientation(rx, ry) {
    return { sx: Math.sin(rx), cx: Math.cos(rx), sy: Math.sin(ry), cy: Math.cos(ry) };
  }
  function project(x, y, z, angle, scale, cx, cy) {
    const px = x * angle.cy + z * angle.sy;
    const depth = -x * angle.sy + z * angle.cy;
    const py = y * angle.cx - depth * angle.sx;
    const pz = y * angle.sx + depth * angle.cx;
    const perspective = 4.5 / (4.5 + pz);
    return { x: cx + px * scale * perspective, y: cy + py * scale * perspective };
  }

  const topics = window.HanThingConstellation.nodes;
  const outline = window.HanThingConstellation.outline;
  const nodes = topics.map(topic => ({ id: topic.id, x: 0, y: 0 }));
  const nodeColor = topic => ({ concept: 1, journal: 0, weekly: 2, project: 2 })[topic.type] ?? 0;

  // Candidate 02: the horse profile and detached top stroke form a personal ㅎ.
  const logoPath = new Path2D(`M 350 308 L 342 247 Q 340 238 349 242
    C 384 257 405 282 421 315 C 443 354 497 352 556 380
    C 621 410 650 461 647 542 C 645 642 568 710 461 714
    C 380 718 309 678 305 600 C 301 550 332 519 378 489
    C 342 473 311 495 277 513 Q 260 525 242 507
    C 227 491 219 466 225 452 L 284 387
    C 289 347 312 320 350 308 Z
    M 352 350 C 332 383 300 413 271 443 Q 265 450 272 459
    L 288 477 C 323 453 357 444 383 465
    Q 407 484 396 502 C 379 525 364 548 368 576
    C 370 623 408 650 461 650 C 534 653 578 601 577 536
    C 578 470 538 440 477 427 C 420 415 360 426 352 350 Z
    M 482 280 H 602 A 28 28 0 0 1 602 336 H 482
    A 28 28 0 0 1 482 280 Z`);
  const logoMask = document.createElement('canvas').getContext('2d');

  // One pool, allocated once: scroll changes destinations, never particle identities.
  const particles = Array.from({ length: 3600 }, (_, id) => {
    let x, y;
    do {
      x = 220 + random() * 430;
      y = 238 + random() * 480;
    } while (!logoMask.isPointInPath(logoPath, x, y, 'evenodd'));
    const group = id % outline.positions.length;
    const topic = outline.positions[group];
    const theta = random() * tau;
    const cluster = Math.pow(random(), .9) * .085;
    const fx = random();
    return {
      id, group,
      lx: (x - 435) / 230,
      ly: (y - 478) / 230,
      lz: (random() - .5) * .035,
      fx: id % 5 === 0 ? fx : id % 2 ? .015 + fx * .27 : .715 + fx * .27,
      fy: random(), depth: .2 + random() * .8,
      gx: topic[0] + Math.cos(theta) * cluster,
      gy: topic[1] + Math.sin(theta) * cluster * .8,
      gz: topic[2] + (random() - .5) * .04,
      dx: 0, dy: 0, vx: 0, vy: 0, x: 0, y: 0, anchorX: 0, anchorY: 0,
      size: .45 + random() ** 3 * 1.1,
      brightness: .3 + random() * .7,
      color: id % 17 === 0 ? 2 : id % 4 === 0 ? 1 : 0,
      phase: random() * tau,
      glow: id % 5 === 0,
    };
  });
  const edges = window.HanThingConstellation.edges;

  const labelRoot = document.querySelector('#graph-labels');
  const listRoot = document.querySelector('#topic-list');
  const detail = document.querySelector('#node-detail');
  const count = document.querySelector('#graph-count');
  if (count) count.textContent = `${topics.length}개의 기록`;
  let selected = -1;
  let activeTrigger = null;
  const listButtons = [];
  const labels = topics.map((topic, group) => {
    const button = document.createElement('button');
    button.className = 'graph-label';
    const text = document.createElement('span');
    text.className = 'graph-label-text';
    text.textContent = topic.title;
    button.append(text);
    button.title = topic.title;
    button.setAttribute('aria-label', `${topic.title} 기록 선택`);
    button.style.setProperty('--node-color', palette[nodeColor(topic)]);
    button.setAttribute('aria-controls', 'node-detail');
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => selectTopic(group, button));
    labelRoot.append(button);
    const listButton = document.createElement('button');
    listButton.textContent = topic.title;
    listButton.setAttribute('aria-controls', 'node-detail');
    listButton.setAttribute('aria-pressed', 'false');
    listButton.addEventListener('click', () => {
      selectTopic(group, listButton);
      detail.scrollIntoView({ behavior: paused ? 'instant' : 'smooth', block: 'center' });
      document.querySelector('#node-close').focus({ preventScroll: true });
    });
    listRoot.append(listButton);
    listButtons.push(listButton);
    return button;
  });
  function selectTopic(index, trigger) {
    selected = index;
    activeTrigger = trigger;
    const topic = topics[index];
    document.querySelector('#node-title').textContent = topic.title;
    document.querySelector('#node-description').textContent = topic.description || '';
    const related = edges.filter(pair => pair.includes(index)).map(([a, b]) => topics[a === index ? b : a]);
    const items = [topic, ...related].map((note, i) => {
      const article = document.createElement('a');
      article.href = note.url;
      article.textContent = `${i === 0 ? '기록 읽기' : '연결된 기록'} · ${note.title} ↗`;
      const item = document.createElement('li');
      item.append(article);
      return item;
    });
    document.querySelector('#node-notes').replaceChildren(...items);
    detail.hidden = false;
    labels.forEach((label, i) => label.setAttribute('aria-pressed', String(index === i)));
    listButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(index === i)));
    dirty = true;
  }
  function closeTopic() {
    detail.hidden = true;
    selected = -1;
    labels.forEach(label => label.setAttribute('aria-pressed', 'false'));
    listButtons.forEach(button => button.setAttribute('aria-pressed', 'false'));
    activeTrigger?.focus({ preventScroll: true });
    dirty = true;
  }
  document.querySelector('#node-close').addEventListener('click', closeTopic);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !detail.hidden) closeTopic();
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    target.scrollIntoView({ behavior: paused ? 'instant' : 'smooth', block: 'start' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }));

  let drag = null;
  window.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || paused) return;
    pointer.vx = Math.max(-35, Math.min(35, event.clientX - pointer.x));
    pointer.vy = Math.max(-35, Math.min(35, event.clientY - pointer.y));
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.at = performance.now();
    dirty = true;
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => { pointer.at = -9999; });
  hitArea.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    drag = { x: event.clientX, y: event.clientY, distance: 0, touch: event.pointerType === 'touch' };
    if (!drag.touch) {
      if (event.isTrusted) hitArea.setPointerCapture(event.pointerId);
      stage.classList.add('dragging');
    }
  });
  hitArea.addEventListener('pointermove', event => {
    if (!drag) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!drag.touch) {
      rotation.y += dx * .005;
      rotation.x = Math.max(-.9, Math.min(.9, rotation.x + dy * .004));
      stage.dataset.rotated = 'true';
    }
    drag.distance += Math.abs(dx) + Math.abs(dy);
    drag.x = event.clientX;
    drag.y = event.clientY;
    dirty = true;
  });
  hitArea.addEventListener('pointerup', event => {
    if (drag && drag.distance < 7) {
      let nearest = -1;
      let distance = 40;
      for (let i = 0; i < topics.length; i++) {
        const p = nodes[i];
        const d = Math.hypot(p.x - event.clientX, p.y - event.clientY);
        if (d < distance) { distance = d; nearest = i; }
      }
      if (nearest >= 0) selectTopic(nearest, labels[nearest]);
      else if (!detail.hidden) closeTopic();
    }
    drag = null;
    stage.classList.remove('dragging');
  });
  hitArea.addEventListener('pointercancel', () => { drag = null; stage.classList.remove('dragging'); });

  function render(now, dt, animate) {
    const w = width;
    const h = height;
    const rect = stage.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();
    const scroll = Math.max(0, scrollY);
    const spread = smooth(scroll / Math.max(1, heroRect.height * .85));
    const gather = smooth((h * .95 - rect.top) / (h * .60));
    const release = smooth((h * .25 - rect.bottom) / (h * .65));
    const constellation = gather * (1 - release);
    phase = spread + constellation;
    heroFrame.style.setProperty('--hero-opacity', String(1 - smooth(scroll / Math.max(1, heroRect.height))));
    const mobile = w <= 640;
    const logoScale = Math.min(w * (mobile ? .16 : .15), heroRect.height * (mobile ? .22 : .29));
    const graphScale = Math.min(rect.width * .30, rect.height * .39);
    const idle = Math.exp(-Math.max(0, now - pointer.at) / 350);
    const influence = Math.min(145, Math.max(95, w * .105));
    const damping = Math.exp(-7.5 * dt);
    const logoAngle = orientation(-.025, Math.sin(time * .08) * .06);
    const graphAngle = orientation(rotation.x, rotation.y);
    const readingDim = mix(1, .55, smooth((scroll - hero.offsetHeight) / h));
    ctx.clearRect(0, 0, w, h);
    let hovered = -1;
    let hoverDistance = 90;
    const graphPoint = position => project(...position, graphAngle, graphScale, rect.left + rect.width * .5, rect.top + rect.height * .46);
    const outlinePoints = outline.positions.map(graphPoint);
    nodes.forEach((node, i) => {
      Object.assign(node, graphPoint(topics[i].position));
      const distance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
      if (constellation > .6 && distance < hoverDistance && now - pointer.at < 1400) {
        hoverDistance = distance;
        hovered = i;
      }
    });

    for (const p of particles) {
      const fieldX = p.fx * w + Math.sin(time * .055 + p.phase) * 3;
      const fieldY = p.fy * (h + 60) - 30 + Math.cos(time * .045 + p.phase) * 3;
      let tx = fieldX;
      let ty = fieldY;
      if (spread < 1) {
        const logo = project(p.lx + Math.sin(time * .35 + p.phase) * .007,
          p.ly + Math.sin(time * .5 + p.phase) * .007, p.lz, logoAngle,
          logoScale, w * (mobile ? .78 : .76), heroRect.top + heroRect.height * (mobile ? .57 : .49));
        tx = mix(logo.x, fieldX, spread);
        ty = mix(logo.y, fieldY, spread);
      }
      if (p.id < 1500 && constellation > 0) {
        const node = project(p.gx, p.gy, p.gz, graphAngle, graphScale, rect.left + rect.width * .5, rect.top + rect.height * .46);
        tx = mix(tx, node.x, constellation);
        ty = mix(ty, node.y, constellation);
      }
      p.anchorX = tx;
      p.anchorY = ty;
      if (animate) {
        const mx = tx + p.dx - pointer.x;
        const my = ty + p.dy - pointer.y;
        const distance = Math.hypot(mx, my);
        const force = (1 - clamp(distance / influence)) ** 2 * idle * 3600;
        const direction = distance > .01 ? distance : 1;
        p.vx += (-p.dx * 42 + (mx / direction + my / direction * .25) * force + pointer.vx * force * .003) * dt;
        p.vy += (-p.dy * 42 + (my / direction - mx / direction * .25) * force + pointer.vy * force * .003) * dt;
        p.vx *= damping;
        p.vy *= damping;
        p.dx += p.vx * dt;
        p.dy += p.vy * dt;
      }
      p.x = tx + p.dx;
      p.y = ty + p.dy;
    }
    stage.dataset.hovered = hovered < 0 ? '' : String(hovered);

    ctx.globalCompositeOperation = 'lighter';
    if (constellation > .02) {
      ctx.globalAlpha = constellation * .45;
      ctx.strokeStyle = '#b49a6a';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      for (const [a, b] of outline.edges) {
        const p = outlinePoints[a];
        const q = outlinePoints[b];
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      }
      ctx.setLineDash([]);
      for (const [a, b] of edges) {
        const p = nodes[a];
        const q = nodes[b];
        const active = (selected >= 0 ? selected : hovered);
        const related = active < 0 || a === active || b === active;
        ctx.globalAlpha = constellation * (related ? active < 0 ? .36 : .6 : .08);
        ctx.strokeStyle = '#a4cbe2';
        ctx.lineWidth = .8;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      }
    }
    for (const p of particles) {
      if (p.x < -30 || p.x > w + 30 || p.y < -30 || p.y > h + 30) continue;
      const edge = Math.abs(p.fx - .5) * 2;
      let alpha = p.brightness * mix(1, (.36 + edge * .56) * readingDim, spread);
      if (p.id < 1500) alpha = mix(alpha, .12 + p.brightness * .2, constellation);
      alpha *= .92 + Math.sin(time * .8 + p.phase) * .08;
      const size = p.size * mix(1, .85, spread);
      ctx.globalAlpha = alpha;
      if (p.glow) {
        const diameter = size * 12;
        ctx.drawImage(sprites[p.color], p.x - diameter / 2, p.y - diameter / 2, diameter, diameter);
      }
      ctx.fillStyle = palette[p.color];
      ctx.beginPath(); ctx.arc(p.x, p.y, size * .58, 0, tau); ctx.fill();
      if (p.id % 307 === 0 && spread < .95) {
        const ray = size * 3;
        ctx.globalAlpha = alpha * .45;
        ctx.fillRect(p.x - ray, p.y - .25, ray * 2, .5);
        ctx.fillRect(p.x - .25, p.y - ray, .5, ray * 2);
      }
    }
    nodes.forEach((node, i) => {
      const color = nodeColor(topics[i]);
      const active = selected === i || hovered === i;
      ctx.globalAlpha = constellation;
      const diameter = active ? 56 : 40;
      ctx.drawImage(sprites[color], node.x - diameter / 2, node.y - diameter / 2, diameter, diameter);
      ctx.fillStyle = palette[color];
      ctx.beginPath(); ctx.arc(node.x, node.y, active ? 3.5 : 2.4, 0, tau); ctx.fill();
    });
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    labels.forEach((label, i) => {
      const p = nodes[i];
      label.style.left = `${p.x - rect.left}px`;
      label.style.top = `${p.y - rect.top}px`;
      label.style.opacity = String(constellation);
      label.style.visibility = constellation > .4 ? 'visible' : 'hidden';
      label.classList.toggle('is-hovered', hovered === i);
      label.classList.toggle('label-near-left', p.x - rect.left < 142);
      label.classList.toggle('label-near-right', p.x - rect.left > rect.width - 142);
    });
    canvas.dataset.rendered = 'true';
  }

  function updateMotion() {
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.setAttribute('aria-label', paused ? '애니메이션 재생' : '애니메이션 일시정지');
    motionButton.firstElementChild.textContent = paused ? '▷' : 'Ⅱ';
    document.documentElement.classList.toggle('motion-paused', paused);
    pointer.at = -9999;
    if (reducedMotion.matches) for (const p of particles) p.dx = p.dy = p.vx = p.vy = 0;
    dirty = true;
  }
  motionButton.addEventListener('click', () => { paused = !paused; updateMotion(); });
  reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; updateMotion(); });
  document.addEventListener('visibilitychange', () => { lastFrame = 0; dirty = true; });
  window.addEventListener('scroll', () => { dirty = true; }, { passive: true });
  updateMotion();

  // Read-only measurements used by the local interaction check; no animation controls.
  window.__particleScene = Object.freeze({ snapshot: () => ({
    count: particles.length, phase, rotation: { ...rotation }, paused, time,
    nodes: nodes.map(node => ({ ...node })),
    particles: particles.map(({ id, x, y, dx, dy, anchorX, anchorY, group }) => ({ id, x, y, dx, dy, anchorX, anchorY, group })),
  }) });

  function frame(now) {
    requestAnimationFrame(frame);
    if (document.hidden) return;
    const dt = lastFrame ? Math.min((now - lastFrame) / 1000, .035) : 1 / 60;
    lastFrame = now;
    const animate = !paused;
    if (!animate && !dirty) return;
    if (animate) time += dt;
    render(now, dt, animate);
    dirty = false;
  }
  requestAnimationFrame(frame);
})();
