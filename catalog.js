(() => {
  'use strict';

  const content = window.HANTHING_CONTENT;
  if (!content) return;
  const types = { journal: '학습 기록', concept: '개념 노트', weekly: '위클리 페이퍼', project: '프로젝트' };
  const courses = content.courses;
  const notes = [...content.notes].sort((a, b) => {
    const courseOrder = courses.findIndex(course => course.id === a.courseId) - courses.findIndex(course => course.id === b.courseId);
    if (courseOrder) return courseOrder;
    const lessons = courses.find(course => course.id === a.courseId).lessons;
    return lessons.findIndex(lesson => lesson.id === a.lessonId) - lessons.findIndex(lesson => lesson.id === b.lessonId) || a.title.localeCompare(b.title, 'ko');
  });
  const search = document.querySelector('#record-search');
  const courseFilter = document.querySelector('#record-course');
  const lessonFilter = document.querySelector('#record-lesson');
  const list = document.querySelector('#record-list');
  const empty = document.querySelector('#record-empty');
  const more = document.querySelector('#record-more');
  const initialCount = 4;
  let expanded = false;
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase('ko');
  const matches = (values, query) => normalize(values.join(' ')).includes(normalize(query.trim()));
  const related = (concept, journal) => concept.links.includes(journal.id) || journal.links.includes(concept.id);
  const journals = notes.filter(note => note.type === 'journal');
  const concepts = notes.filter(note => note.type === 'concept');
  const primaryNotes = notes.filter(note => note.type !== 'journal' || !concepts.some(concept => related(concept, note)));

  courseFilter.replaceChildren(new Option('과목 전체', ''));
  for (const course of courses) courseFilter.add(new Option(course.title, course.id));

  function fillLessons() {
    const course = courses.find(course => course.id === courseFilter.value);
    lessonFilter.replaceChildren(new Option(course ? '수업 전체' : '과목을 선택하세요', ''));
    for (const lesson of course?.lessons ?? []) {
      lessonFilter.add(new Option(`${lesson.title}${lesson.kind === 'supplemental' ? ' · 보충' : ''}`, lesson.id));
    }
    lessonFilter.disabled = !course?.lessons.length;
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  const groups = [];
  const rows = [];
  for (const course of courses) {
    const courseSection = element('section', 'record-course-group');
    courseSection.dataset.courseId = course.id;
    courseSection.append(element('h3', 'record-course-title', course.title));
    const lessonGroups = [];
    for (const lesson of course.lessons) {
      const lessonSection = element('section', 'record-lesson-group');
      lessonSection.dataset.lessonId = lesson.id;
      lessonSection.append(element('h4', 'record-lesson-title', lesson.title + (lesson.kind === 'supplemental' ? ' · 보충' : '')));
      const lessonRows = [];
      for (const note of primaryNotes.filter(note => note.courseId === course.id && note.lessonId === lesson.id)) {
        const container = element('article', 'record-group');
        container.dataset.recordId = note.id;
        const link = element('a', 'record-row');
        link.href = note.url;
        const meta = element('div', 'record-meta');
        meta.append(element('span', 'record-type', types[note.type]));
        if (note.type !== 'concept' && note.date) {
          const date = element('time', 'record-date', note.date.replaceAll('-', '.'));
          date.dateTime = note.date;
          meta.append(date);
        }
        const body = element('div', 'record-body');
        body.append(element('h5', 'record-title', note.title));
        if (note.description) body.append(element('p', 'record-description', note.description));
        const otherTopics = note.topics.filter(topic => topic !== course.title);
        if (otherTopics.length) body.append(element('p', 'record-topics', `관련 주제: ${otherTopics.join(' · ')}`));
        const arrow = element('span', 'record-arrow', '↗');
        arrow.setAttribute('aria-hidden', 'true');
        link.append(meta, body, arrow);
        container.append(link);
        const relatedJournals = note.type === 'concept' ? journals.filter(journal => related(note, journal))
          .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'ko')) : [];
        if (relatedJournals.length) {
          const history = element('div', 'record-journals');
          history.append(element('p', 'record-journals-label', '관련 학습 기록'));
          const journalList = element('ul', 'record-journal-list');
          for (const journal of relatedJournals) {
            const item = element('li', '');
            const journalLink = element('a', 'record-journal-link');
            journalLink.href = journal.url;
            journalLink.dataset.journalId = journal.id;
            const date = element('time', '', journal.date.replaceAll('-', '.'));
            date.dateTime = journal.date;
            journalLink.append(date, document.createTextNode(` · ${journal.title}`));
            item.append(journalLink);
            journalList.append(item);
          }
          history.append(journalList);
          container.append(history);
        }
        const row = { note, relatedJournals, course, lesson, container };
        rows.push(row);
        lessonRows.push(row);
        lessonSection.append(container);
      }
      if (lessonRows.length) {
        courseSection.append(lessonSection);
        lessonGroups.push({ section: lessonSection, rows: lessonRows });
      }
    }
    if (lessonGroups.length) {
      list.append(courseSection);
      groups.push({ section: courseSection, lessons: lessonGroups });
    }
  }

  function filterNotes() {
    const matched = rows.filter(({ note, relatedJournals, course, lesson }) =>
      (!courseFilter.value || note.courseId === courseFilter.value) &&
      (!lessonFilter.value || note.lessonId === lessonFilter.value) &&
      matches([note.title, note.description, ...note.topics, course.title, lesson.title,
        ...relatedJournals.flatMap(journal => [journal.title, journal.description, journal.date, ...journal.topics])], search.value));
    const visible = new Set(expanded ? matched : matched.slice(0, initialCount));
    for (const row of rows) row.container.hidden = !visible.has(row);
    for (const group of groups) {
      for (const lesson of group.lessons) lesson.section.hidden = !lesson.rows.some(row => visible.has(row));
      group.section.hidden = group.lessons.every(lesson => lesson.section.hidden);
    }
    more.hidden = matched.length <= initialCount;
    more.textContent = expanded ? '목록 접기 ↑' : `${matched.length - initialCount}개 더 보기 ↓`;
    more.setAttribute('aria-expanded', String(expanded));
    const journalCount = new Set(matched.flatMap(row => row.relatedJournals.map(journal => journal.id))).size;
    const conceptCount = matched.filter(row => row.note.type === 'concept').length;
    const otherCount = matched.length - conceptCount;
    document.querySelector('#record-count').textContent = `개념 ${conceptCount}개${otherCount ? ` · 기록 ${otherCount}개` : ''} · 관련 학습 기록 ${journalCount}개`;
    empty.hidden = matched.length !== 0;
    const selectedCourse = courses.find(course => course.id === courseFilter.value);
    const selectedLesson = selectedCourse?.lessons.find(lesson => lesson.id === lessonFilter.value);
    const hasNotes = notes.some(note => (!courseFilter.value || note.courseId === courseFilter.value) && (!lessonFilter.value || note.lessonId === lessonFilter.value));
    empty.textContent = !hasNotes && selectedCourse
      ? `${selectedLesson?.title ?? selectedCourse.title}의 공개 노트는 아직 없습니다.`
      : '맞는 개념이나 학습 기록을 찾지 못했습니다. 검색어나 과목을 바꿔 보세요.';
  }
  const resetFilter = () => { expanded = false; filterNotes(); };
  search.addEventListener('input', resetFilter);
  courseFilter.addEventListener('change', () => { fillLessons(); resetFilter(); });
  lessonFilter.addEventListener('change', resetFilter);
  more.addEventListener('click', () => {
    expanded = !expanded;
    filterNotes();
    if (!expanded) more.focus({ preventScroll: true });
  });
  fillLessons();
  filterNotes();

  function renderCollection(kind, items, label) {
    const root = document.querySelector(`#${kind}-list`);
    const input = document.querySelector(`#${kind}-search`);
    const blank = document.querySelector(`#${kind}-empty`);
    let showAll = false;
    const moreItems = element('button', 'more-records');
    moreItems.type = 'button';
    moreItems.setAttribute('aria-controls', `${kind}-list`);
    root.after(moreItems);
    const entries = items.map(item => {
      const link = element(kind === 'question' ? 'details' : 'article', 'collection-row');
      link.dataset.itemId = item.id;
      if (kind === 'question') {
        const summary = element('summary', 'question-summary');
        summary.append(element('span', 'collection-meta', item.topic), element('span', 'question-title', item.title));
        link.append(summary);
        for (const [field, title] of [['context', '상황'], ['intent', '질문의 의도'], ['answer', '핵심 답변']]) {
          if (!item[field]) continue;
          const paragraph = element('p', 'question-excerpt');
          paragraph.append(element('strong', '', `${title} `), document.createTextNode(item[field]));
          link.append(paragraph);
        }
        const source = element('a', 'collection-source', '코드와 질문 흐름 이어 읽기 ↗');
        source.href = item.url;
        link.append(source);
      } else {
        link.append(element('p', 'collection-meta', item.topic), element('h3', '', item.title));
        const actions = element('p', 'collection-source');
        for (const [mode, text, available] of [['quiz', '퀴즈 풀기', item.questions.length], ['cards', '플래시카드', item.cards.length]]) {
          if (!available) continue;
          const action = element('a', 'text-link', `${text} ↗`);
          action.href = `review.html?set=${encodeURIComponent(item.id)}&mode=${mode}`;
          actions.append(action, document.createTextNode('　'));
        }
        link.append(actions);
      }
      root.append(link);
      return { item, link };
    });
    const filter = () => {
      let count = 0;
      for (const { item, link } of entries) {
        link.hidden = !matches([item.title, item.topic, item.sourceTitle, item.context ?? '', item.intent ?? '', item.answer ?? ''], input.value);
        if (!link.hidden) {
          count++;
          link.hidden = !showAll && !input.value.trim() && count > initialCount;
        }
      }
      document.querySelector(`#${kind}-count`).textContent = `${count}개의 ${label}`;
      moreItems.hidden = Boolean(input.value.trim()) || count <= initialCount;
      moreItems.textContent = showAll ? `${label} 접기 ↑` : `${label} ${count - initialCount}개 더 보기 ↓`;
      moreItems.setAttribute('aria-expanded', String(showAll));
      blank.hidden = count !== 0;
      blank.textContent = items.length ? '검색 결과가 없습니다. 다른 말로 찾아보세요.' : `아직 모아 둔 ${label}${kind === 'question' ? '이' : '가'} 없습니다.`;
    };
    moreItems.addEventListener('click', () => {
      showAll = !showAll;
      filter();
      if (!showAll) moreItems.focus({ preventScroll: true });
    });
    input.addEventListener('input', filter);
    filter();
  }
  renderCollection('question', content.questions, '질문');
  fetch('review-data.json').then(response => {
    if (!response.ok) throw new Error('Review data unavailable');
    return response.json();
  }).then(data => {
    const sets = data.sets.filter(set => set.questions.length || set.cards.length).map(set => ({
      ...set,
      topic: [...new Set(notes.filter(note => set.noteIds.includes(note.id)).flatMap(note => note.topics))].join(' · '),
      sourceTitle: `${set.questions.length}문항 · ${set.cards.length}장`,
    }));
    renderCollection('quiz', sets, '학습 세트');
  }).catch(() => {
    document.querySelector('#quiz-count').textContent = '';
    const blank = document.querySelector('#quiz-empty');
    blank.hidden = false;
    blank.textContent = '학습 세트를 불러오지 못했습니다. 잠시 후 새로고침해 주세요.';
  });
})();
