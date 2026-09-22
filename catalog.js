(() => {
  'use strict';

  const content = window.HANTHING_CONTENT;
  if (!content) return;
  const types = { journal: '학습 기록', concept: '개념 노트', weekly: '위클리 페이퍼', project: '프로젝트' };
  const notes = [...content.notes].sort((a, b) => (b.published || b.date || '').localeCompare(a.published || a.date || '') || Number(b.type === 'journal') - Number(a.type === 'journal') || a.title.localeCompare(b.title, 'ko'));
  const search = document.querySelector('#record-search');
  const type = document.querySelector('#record-type');
  const topic = document.querySelector('#record-topic');
  const list = document.querySelector('#record-list');
  const empty = document.querySelector('#record-empty');
  const more = document.querySelector('#record-more');
  const initialCount = 4;
  let expanded = false;
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase('ko');
  const matches = (values, query) => normalize(values.join(' ')).includes(normalize(query.trim()));

  for (const title of [...new Set(notes.flatMap(note => note.topics))].sort((a, b) => a.localeCompare(b, 'ko'))) {
    topic.add(new Option(title, title));
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  const rows = notes.map(note => {
    const link = element('a', 'record-row journal-row');
    link.href = note.url;
    link.dataset.recordId = note.id;
    const meta = element('div', 'record-meta');
    meta.append(element('span', 'record-type', types[note.type]));
    if (note.date) {
      const separateDates = note.published && note.published !== note.date;
      const date = element('time', 'record-date', note.date.replaceAll('-', '.') + (separateDates && note.type === 'journal' ? ' 학습' : ''));
      date.dateTime = note.date;
      meta.append(date);
      if (separateDates) {
        const published = element('time', 'record-published', `${note.published.replaceAll('-', '.')} 정리`);
        published.dateTime = note.published;
        meta.append(published);
      }
    }
    const body = element('div', 'record-body');
    body.append(element('h3', '', note.title));
    if (note.description) body.append(element('p', 'record-description', note.description));
    if (note.topics.length) body.append(element('p', 'record-topics', note.topics.join(' · ')));
    const arrow = element('span', 'record-arrow', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    link.append(meta, body, arrow);
    list.append(link);
    return { note, link };
  });

  function filterNotes() {
    let count = 0;
    const filtered = Boolean(type.value || topic.value || search.value.trim());
    for (const { note, link } of rows) {
      link.hidden = Boolean((type.value && note.type !== type.value) || (topic.value && !note.topics.includes(topic.value)) || !matches([note.title, note.description, ...note.topics], search.value));
      if (!link.hidden) {
        count++;
        link.hidden = !filtered && !expanded && count > initialCount;
      }
    }
    more.hidden = filtered || expanded || count <= initialCount;
    more.textContent = `이전 기록 ${count - initialCount}개 더 보기 ↓`;
    document.querySelector('#record-count').textContent = more.hidden ? `${count}개의 기록 · 최신순` : `최근 ${initialCount}개 · 전체 ${count}개의 기록`;
    empty.hidden = count !== 0;
    const noTypeYet = type.value && !notes.some(note => note.type === type.value);
    empty.textContent = noTypeYet ? `아직 공개한 ${types[type.value]}${type.value === 'journal' ? '이' : '가'} 없습니다.` : '맞는 기록을 찾지 못했습니다. 검색어나 주제를 바꿔 보세요.';
  }
  search.addEventListener('input', filterNotes);
  type.addEventListener('change', filterNotes);
  topic.addEventListener('change', filterNotes);
  more.addEventListener('click', () => {
    expanded = true;
    filterNotes();
    rows[initialCount].link.focus({ preventScroll: true });
  });
  filterNotes();

  for (const [kind, items, label] of [['question', content.questions, '질문'], ['quiz', content.quizzes, '퀴즈']]) {
    const root = document.querySelector(`#${kind}-list`);
    const input = document.querySelector(`#${kind}-search`);
    const blank = document.querySelector(`#${kind}-empty`);
    const entries = items.map(item => {
      const link = element('a', 'collection-row');
      link.href = item.url;
      link.dataset.itemId = item.id;
      link.append(element('p', 'collection-meta', item.topic), element('h3', '', item.title), element('p', 'collection-source', `${item.sourceTitle} ↗`));
      root.append(link);
      return { item, link };
    });
    const filter = () => {
      let count = 0;
      for (const { item, link } of entries) {
        link.hidden = !matches([item.title, item.topic, item.sourceTitle], input.value);
        if (!link.hidden) count++;
      }
      document.querySelector(`#${kind}-count`).textContent = `${count}개의 ${label}`;
      blank.hidden = count !== 0;
      blank.textContent = items.length ? '검색 결과가 없습니다. 다른 말로 찾아보세요.' : `아직 모아 둔 ${label}${kind === 'question' ? '이' : '가'} 없습니다.`;
    };
    input.addEventListener('input', filter);
    filter();
  }
})();
