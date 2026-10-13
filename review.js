import { loadProgress, loadSyncedProgress, changeProgress, beginSession, getAttempts, answerQuestion,
  assessCard, getReviewModules, questionQueue, getQuestionCounts, getQuestionPreference, setQuestionPreference, checkQueue, cardQueue,
  exportProgress, parseProgressBackup, restoreProgress, undoProgressRestore, hasProgressRestore } from './review-state.mjs?v=20261012-modules';

const $ = selector => document.querySelector(selector);
const query = new URLSearchParams(location.search);
const sourceNote = window.HANTHING_CONTENT?.notes.find(note => note.id === query.get('from'));
if (sourceNote) {
  const back = $('#return-to-note');
  back.href = sourceNote.url;
  back.textContent = `← 읽던 글로 돌아가기 · ${sourceNote.title}`;
  back.hidden = false;
}
const mode = ['quiz', 'cards', 'check'].includes(query.get('mode')) ? query.get('mode') : 'quiz';
const player = $('#player');
const setSelect = $('#set-select');
const allGoals = $('#all-goals');
const onlyMarked = $('#only-marked');
allGoals.checked = mode === 'cards';
if (mode === 'check') $('#all-goals-label').textContent = '복습 시점과 관계없이 점검';
let moduleId = query.get('module');
let phase = query.get('phase') === 'due' ? 'due' : 'new';
let modules = [];
let requestedGoal = query.get('goal');
let storage;
try { storage = window.localStorage; } catch {}
const loaded = loadProgress(storage);
const state = loaded.state;
let sets = [];
let queue = [];
let index = 0;
let active = false;
let activeSession = 0;
let results = [];
let refreshQuestion = null;
let unsaved = !loaded.saved;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}
function learningText(tag, className, text) {
  const node = element(tag, className);
  for (const part of text.split(/(```[^\n]*\n[\s\S]*?```|`[^`\n]+`|\$[^$\n]+\$)/g)) {
    if (part.startsWith('```')) node.append(element('code', 'code-block', part.replace(/^```[^\n]*\n/, '').slice(0, -3).replace(/\n$/, '')));
    else if (part.startsWith('`') && part.endsWith('`')) node.append(element('code', '', part.slice(1, -1)));
    else if (part.startsWith('$') && part.endsWith('$')) {
      const source = part.slice(1, -1);
      const math = element('span', 'math-expression');
      try {
        if (!window.katex) throw new Error('Math renderer unavailable');
        window.katex.render(source, math, { throwOnError: true, trust: false });
      } catch {
        math.textContent = source.replace(/\\text\{([^}]+)\}/g, '$1');
      }
      node.append(math);
    }
    else node.append(document.createTextNode(part));
  }
  return node;
}
function button(text, action, className = '') {
  const node = element('button', className, text);
  node.type = 'button';
  node.addEventListener('click', action);
  return node;
}
function moduleSets() { return moduleId === 'all' ? sets : modules.find(module => module.id === moduleId)?.sets || []; }
function selectedSets() { return setSelect.value ? moduleSets().filter(set => set.id === setSelect.value) : moduleSets(); }
function questionCounts() { return getQuestionCounts(state, selectedSets(), { onlyMarked: onlyMarked.checked }); }
function reviewTime(time) { return new Date(time).toLocaleString('ko-KR', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' }); }
function updateStorageNotice() {
  const notice = $('#storage-notice');
  notice.classList.toggle('warning', unsaved);
  notice.hidden = false;
  notice.textContent = unsaved
    ? `${loaded.notice || '기록을 저장하지 못했습니다.'} 새 풀이는 이 화면에만 남습니다. 기존 저장 기록은 덮어쓰지 않습니다.`
    : '기록은 이 브라우저에 자동 저장됩니다. 다른 브라우저·기기와 공유되지 않습니다. 브라우저 데이터 삭제 전 ‘기록 관리’에서 파일로 백업하세요.';
}
function change(action) {
  const changed = changeProgress(storage, state, sets, action, !unsaved);
  unsaved = !changed.saved;
  updateStorageNotice();
  return changed.result;
}
function updateProgress() {
  $('#question-summary').hidden = mode !== 'quiz' || !moduleId;
  if (mode === 'quiz') {
    const counts = questionCounts();
    $('#question-total').textContent = counts.active;
    $('#question-answered').textContent = counts.answered;
    $('#question-due').textContent = counts.due;
    $('#question-breakdown').textContent = `${onlyMarked.checked ? '다시 보기 범위 · ' : ''}처음 풀 문제 ${counts.unseen} · 다음 복습 대기 ${counts.waiting} · 제외 ${counts.excluded}`;
  }
  const excluded = $('#excluded-list');
  excluded.replaceChildren();
  let markedCount = 0, excludedCount = 0;
  for (const set of (moduleId ? selectedSets() : sets)) for (const question of set.questions) {
    const preference = getQuestionPreference(state, set, question);
    if (preference.reviewAgain && !preference.excluded) markedCount++;
    if (!preference.excluded) continue;
    excludedCount++;
    const row = element('div', 'excluded-row');
    row.append(element('p', '', question.question), button('복원', () => {
      change(current => setQuestionPreference(current, set, question, { excluded: false }));
      updateProgress();
      if (!active) overview();
    }));
    row.querySelector('button').setAttribute('aria-label', `${question.question} 복원`);
    excluded.append(row);
  }
  $('#marked-count').textContent = markedCount;
  $('#excluded-summary').textContent = `퀴즈에서 제외한 문제 · ${excludedCount}개`;
  if (!excludedCount) excluded.append(element('p', 'progress-help', '제외한 문제가 없습니다. 제외해도 노트와 풀이 기록은 그대로 남습니다.'));
  if (!moduleId) renderModules();
}
function renderModules() {
  const list = $('#module-list');
  list.replaceChildren();
  for (const module of modules) {
    const counts = getQuestionCounts(state, module.sets);
    const link = element('a', 'module-card');
    link.href = `review.html?module=${encodeURIComponent(module.id)}&mode=${mode}`;
    const cards = module.sets.reduce((count, set) => count + set.cards.length, 0);
    link.append(element('h2', '', module.title),
      element('p', 'module-counts', `안 푼 문제 ${counts.unseen} · 풀어본 문제 ${counts.answered} · 다시 볼 문제 ${counts.due}`),
      element('span', 'module-enter', `문제 ${counts.active}개 · 카드 ${cards}개　들어가기 ↗`));
    list.append(link);
  }
  if (!modules.length) list.append(element('p', 'welcome-copy', '아직 연결된 복습 모듈이 없습니다.'));
}
function updateContext() {
  const selected = selectedSets();
  const url = new URL(location.href);
  setSelect.value ? url.searchParams.set('set', setSelect.value) : url.searchParams.delete('set');
  moduleId ? url.searchParams.set('module', moduleId) : url.searchParams.delete('module');
  url.searchParams.set('mode', mode);
  if (mode === 'quiz' && phase === 'due') url.searchParams.set('phase', phase);
  else url.searchParams.delete('phase');
  if (!requestedGoal) url.searchParams.delete('goal');
  history.replaceState(null, '', url);
  for (const link of document.querySelectorAll('[data-mode]')) {
    const params = new URLSearchParams({ mode: link.dataset.mode });
    if (moduleId) params.set('module', moduleId);
    if (setSelect.value) params.set('set', setSelect.value);
    if (sourceNote) params.set('from', sourceNote.id);
    if (link.dataset.mode === 'quiz' && phase === 'due') params.set('phase', phase);
    link.href = `review.html?${params}`;
    if (link.dataset.mode === mode) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  const title = modules.find(module => module.id === moduleId)?.title || '전체 모듈';
  $('#scope-title').textContent = setSelect.value ? `${title} · ${selected[0]?.title || ''}` : title;
  $('#all-topics').hidden = !moduleId;
  $('#module-picker').hidden = Boolean(moduleId);
  $('#workspace').hidden = !moduleId;
  $('#marked-control').hidden = mode !== 'quiz' || phase !== 'due';
  $('#future-control').hidden = mode === 'cards' || (mode === 'quiz' && phase !== 'due');
  $('#mode-description').textContent = {
    quiz: phase === 'new' ? '이 범위에서 안 푼 문제부터 이어 갑니다. 이미 푼 문제는 다시 복습하기에서 확인하세요.' : '복습할 때가 된 문제를 오래 기다린 순서로 확인합니다.',
    cards: '이 모듈의 카드입니다. 먼저 답을 떠올린 뒤 뒤집어 보세요.',
    check: '최소 하루가 지난 점검 대기 목표와 다시 확인할 때가 된 익힌 목표를 확인합니다.',
  }[mode];
  const notes = $('#related-notes');
  notes.replaceChildren();
  const ids = setSelect.value ? [...new Set(selected.flatMap(set => set.noteIds))] : [];
  notes.hidden = !ids.length;
  if (ids.length) notes.append(element('p', '', '함께 읽는 학습 노트'));
  for (const id of ids) {
    const note = window.HANTHING_CONTENT?.notes.find(note => note.id === id);
    if (!note || !/^[a-zA-Z0-9/_-]+$/.test(id)) continue;
    const link = element('a', '', `${note.title} ↗`);
    link.href = `notes/${id}`;
    notes.append(link);
  }
  updateProgress();
}
function makeQueue() {
  let entries;
  if (mode === 'cards') entries = cardQueue(state, selectedSets(), allGoals.checked);
  else if (mode === 'check') entries = checkQueue(state, selectedSets(), allGoals.checked);
  else entries = questionQueue(state, selectedSets(), { onlyMarked: onlyMarked.checked, includeFuture: allGoals.checked, phase });
  if (requestedGoal) entries.sort((a, b) => Number((b.question || b.card).goalId === requestedGoal) - Number((a.question || a.card).goalId === requestedGoal));
  return entries;
}
function setActive(value) {
  active = value;
  document.body.classList.toggle('review-active', value);
  for (const control of [allGoals, onlyMarked, setSelect, $('#all-topics')]) control.disabled = value;
}
function switchPhase(nextPhase) {
  phase = nextPhase;
  allGoals.checked = false;
  onlyMarked.checked = false;
  requestedGoal = null;
  updateContext();
  overview();
}
function showNextReview() {
  if (mode !== 'quiz') return;
  const counts = questionCounts();
  if (counts.waiting) player.append(element('p', 'schedule-notice', `다음 복습: ${reviewTime(counts.nextDueAt)}.`));
  if (phase === 'due' && counts.waiting) player.append(button('예정일 전에 더 풀기', () => { allGoals.checked = true; start(); }));
}
function phaseActions() {
  if (mode !== 'quiz') return;
  const actions = element('div', 'actions');
  actions.append(button(phase === 'new' ? '다시 복습하기' : '안 푼 문제로 돌아가기', () => switchPhase(phase === 'new' ? 'due' : 'new')));
  player.append(actions);
}
function overview() {
  setActive(false);
  player.replaceChildren();
  player.setAttribute('aria-busy', 'false');
  if (!moduleId) { updateProgress(); return; }
  const entries = makeQueue();
  const counts = questionCounts();
  const complete = mode === 'quiz' && phase === 'new' && counts.active > 0 && !counts.unseen;
  const title = complete ? '이 범위의 문제를 모두 한 번씩 풀었어요.' : !entries.length ? '지금 풀 수 있는 문제가 없어요.'
    : mode === 'cards' ? '답을 떠올리고, 확인해요.' : mode === 'quiz' && phase === 'new' ? '안 푼 문제부터, 하나씩.' : '기억을 다시 확인해요.';
  player.append(element('h3', 'welcome-title', title));
  const copy = complete ? '첫 풀이를 마쳤습니다. 원하면 이미 푼 문제를 다시 복습하세요.' : !entries.length
    ? onlyMarked.checked ? '다시 보기로 표시한 문제 중 지금 복습할 문제가 없습니다.'
      : counts.excluded === counts.total && counts.total ? '이 범위의 문제를 모두 제외했습니다. 기록 관리에서 복원할 수 있어요.'
      : mode === 'quiz' && phase === 'due' ? '지금 복습할 때가 된 문제가 없습니다.' : '이 범위에서 지금 풀 수 있는 자료가 없습니다.'
    : mode === 'cards' ? '답을 떠올린 뒤 확인하세요. 원할 때 마칠 수 있어요.'
      : mode === 'quiz' && phase === 'new' ? `아직 안 푼 문제 ${counts.unseen}개를 이어 풉니다. 이미 푼 문제는 끼어들지 않아요.`
      : '복습할 때가 된 내용을 확인해요. 원할 때 마칠 수 있어요.';
  player.append(element('p', 'welcome-copy', copy));
  if (entries.length) player.append(button(mode === 'quiz' && phase === 'new' ? '안 푼 문제 이어 풀기' : '복습 시작', start, 'primary'));
  else showNextReview();
  phaseActions();
  updateProgress();
}
function start() {
  activeSession = change(current => beginSession(current, sets));
  queue = makeQueue();
  index = 0;
  results = [];
  if (!queue.length) { overview(); return; }
  requestedGoal = null;
  updateContext();
  setActive(true);
  updateProgress();
  renderItem();
}
function renderItem() {
  refreshQuestion = null;
  player.replaceChildren();
  const sessionBar = element('div', 'session-bar');
  sessionBar.append(element('span', 'session-count', `이번에 ${results.length}개 풀이`), button('여기서 마치기', finish));
  player.append(sessionBar);
  const entry = queue[index];
  const item = entry.question || entry.card;
  const goal = entry.set.goals.find(goal => goal.id === item.goalId);
  const meta = element('div', 'question-meta');
  meta.append(element('span', 'goal-name', goal?.title || entry.set.title));
  if (entry.reasonLabel) meta.firstChild.append(element('small', 'queue-reason', entry.reasonLabel));
  player.append(meta);
  if (entry.card) renderCard(entry);
  else renderQuestion(entry);
  player.querySelector('h3')?.focus({ preventScroll: true });
  (mode === 'quiz' ? $('#question-summary') : player).scrollIntoView({ block: 'start', behavior: 'instant' });
}
function next() {
  if (mode === 'quiz') {
    if (!unsaved) {
      const latest = loadSyncedProgress(storage, sets);
      if (latest.saved) Object.assign(state, latest.state);
      else { unsaved = true; updateStorageNotice(); }
    }
    queue = makeQueue(); index = 0;
    updateProgress();
  } else index++;
  while (index < queue.length && queue[index].question) {
    const { set, question } = queue[index];
    const preference = getQuestionPreference(state, set, question);
    if (!preference.excluded && !(mode === 'quiz' && onlyMarked.checked && !preference.reviewAgain)) break;
    index++;
  }
  if (index < queue.length) renderItem();
  else finish();
}
function renderQuestion({ set, question }) {
  let assisted = false;
  let answered = false;
  const title = learningText('h3', 'question-text', question.question);
  title.id = 'current-question';
  title.tabIndex = -1;
  player.append(title);
  const form = element('form');
  const fieldset = element('fieldset', 'options');
  fieldset.setAttribute('aria-labelledby', title.id);
  const optionRows = question.options.map((option, optionIndex) => {
    const row = element('label', 'option');
    const radio = element('input');
    radio.type = 'radio'; radio.name = 'answer'; radio.value = optionIndex; radio.required = true;
    row.append(radio, learningText('span', '', option.text));
    return row;
  });
  const displayRows = [...optionRows];
  for (let index = displayRows.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [displayRows[index], displayRows[other]] = [displayRows[other], displayRows[index]];
  }
  fieldset.append(...displayRows);
  const actions = element('div', 'actions');
  const submit = element('button', 'primary', '답 확인');
  submit.type = 'submit';
  actions.append(submit);
  const hint = element('div', 'hint');
  hint.hidden = true;
  if (question.hint) {
    hint.id = 'current-hint';
    hint.append(learningText('p', '', question.hint), element('small', '', '힌트를 본 문항은 이번 회차의 익힘 판정에 쓰지 않습니다.'));
    const showHint = button('힌트 보기', () => {
      assisted = true; hint.hidden = !hint.hidden;
      showHint.textContent = hint.hidden ? '힌트 다시 보기' : '힌트 접기';
      showHint.setAttribute('aria-expanded', String(!hint.hidden));
    });
    showHint.setAttribute('aria-expanded', 'false'); showHint.setAttribute('aria-controls', hint.id);
    actions.append(showHint);
  }
  actions.append(button('정답 보기', () => respond(question.options.findIndex(option => option.isCorrect), true)));
  form.append(fieldset, actions);
  form.addEventListener('submit', event => {
    event.preventDefault();
    const checked = form.querySelector('input:checked');
    if (checked) respond(Number(checked.value), assisted);
  });
  player.append(form, hint);
  const preferences = element('div', 'question-preferences');
  const mark = button('', () => {
    const current = getQuestionPreference(state, set, question);
    change(state => setQuestionPreference(state, set, question, { reviewAgain: !current.reviewAgain }));
    updateMark(); updateProgress();
  }, 'mark-question');
  function updateMark() {
    const marked = getQuestionPreference(state, set, question).reviewAgain;
    mark.textContent = marked ? '다시 보기 해제' : '다시 보기';
    mark.setAttribute('aria-pressed', String(marked));
  }
  refreshQuestion = updateMark;
  updateMark();
  preferences.append(mark, button('이 문제 제외', () => {
    change(current => setQuestionPreference(current, set, question, { excluded: true }));
    updateProgress(); next();
  }));
  player.append(preferences);
  if (getAttempts(state, set).questions[question.id]) player.append(element('p', 'reused-label', '이 생성본에서 전에 풀어 본 문항입니다.'));
  function respond(optionIndex, aid) {
    if (answered) return;
    answered = true;
    const result = change(current => answerQuestion(current, set, question, { optionIndex, assisted: aid, session: activeSession }));
    if (!result) return;
    results.push(result);
    fieldset.disabled = true;
    actions.hidden = true;
    question.options.forEach((option, index) => {
      optionRows[index].classList.toggle('correct-option', option.isCorrect === true);
      optionRows[index].classList.toggle('wrong-option', index === optionIndex && !option.isCorrect);
    });
    const feedback = element('div', `feedback ${result.correct ? 'correct' : 'incorrect'}`);
    feedback.setAttribute('role', 'status');
    feedback.append(element('h3', '', result.assisted ? '답을 확인했습니다.' : result.correct ? '맞았습니다.' : '다시 살펴보세요.'));
    const correct = question.options.find(option => option.isCorrect);
    feedback.append(learningText('p', 'answer-line', `정답: ${correct.text}`));
    if (!result.correct && question.options[optionIndex].rationale) feedback.append(learningText('p', '', question.options[optionIndex].rationale));
    const explanation = question.explanation || correct.rationale;
    if (explanation) feedback.append(learningText('p', '', explanation));
    const messages = { assisted: '도움 없이 떠올릴 수 있는지 다음 복습에서 확인해요.', practice: result.correct ? '하루 이상 지난 뒤, 다른 점검문항으로 다시 확인해요.' : '이 개념을 다음 복습에서 먼저 확인해요.',
      mastered: '잘 기억하고 있어요. 다음 확인까지 간격을 늘렸습니다.', incorrect: '이 개념을 다음 복습에서 먼저 확인해요.',
      'too-soon': '아직 점검 간격이 지나지 않았어요. 예정된 날짜에 다시 확인해요.', 'needs-practice': '먼저 연습문항을 도움 없이 풀고, 하루 이상 뒤에 다시 확인해요.',
      unmapped: '이 문항은 개별 목표의 익힘 판정에 포함하지 않습니다.' };
    feedback.append(element('p', 'transition-note', mode === 'quiz'
      ? `다음 복습: ${reviewTime(result.dueAt)}${result.early && result.correct && !result.assisted ? ' · 예정일 전 연습이라 기존 복습일을 유지합니다.' : result.intervalDays ? ` · ${result.intervalDays}일 뒤 다시 나옵니다.` : ' · 10분 뒤 도움 없이 다시 확인해요.'}` : messages[result.reason]));
    const nextButton = button(mode === 'check' && index + 1 === queue.length ? '이번 점검 마치기' : '다음 문제', next, 'primary next-button');
    player.insertBefore(feedback, preferences);
    player.insertBefore(nextButton, preferences);
    player.querySelector('.session-count').textContent = `이번에 ${results.length}개 풀이`;
    updateProgress(); nextButton.focus({ preventScroll: true });
  }
}
function renderCard({ set, card }) {
  const front = learningText('h3', 'card-front', card.front);
  front.tabIndex = -1;
  const back = element('div', 'card-back');
  back.hidden = true;
  back.append(element('p', 'card-label', 'ANSWER'), learningText('p', '', card.back));
  const assessment = element('div', 'actions');
  assessment.hidden = true;
  assessment.append(button('다시 볼래요', () => assess(false)), button('알겠어요', () => assess(true), 'primary'));
  const flip = button('뒤집어서 답 확인', () => { back.hidden = false; assessment.hidden = false; flip.hidden = true; assessment.querySelector('button').focus({ preventScroll: true }); }, 'primary');
  player.append(front, flip, back, assessment, element('p', 'card-note', '다시 볼래요를 누른 개념은 다음 복습에서 먼저 나옵니다. 알겠어요만으로 익힘이 되지는 않습니다.'));
  const previous = getAttempts(state, set).cards[card.id];
  if (previous) player.append(element('p', 'reused-label', `지난 자기평가: ${previous.known ? '알겠어요' : '다시 볼래요'}`));
  function assess(known) { change(current => assessCard(current, set, card, known, activeSession)); results.push({ known }); next(); }
}
function finish() {
  setActive(false);
  const complete = mode === 'quiz' && phase === 'new' && questionCounts().active > 0 && !questionCounts().unseen;
  player.replaceChildren(element('h3', 'finish-title', complete ? '이 범위의 문제를 모두 한 번씩 풀었어요.' : '이번 복습을 마쳤어요.'));
  const clean = results.filter(result => result.correct && !result.assisted).length;
  player.append(element('p', 'finish-copy', mode === 'cards'
    ? `${results.length}장의 카드를 확인했습니다. 어려웠던 개념은 다음 복습에서 먼저 나옵니다.`
    : results.length ? `${results.length}개 문항을 풀고, ${clean}개를 도움 없이 맞혔습니다.\n${unsaved ? '현재 기록은 이 화면에서만 유지됩니다.' : '풀이와 문제별 표시를 기록했습니다.'}` : '풀이 기록은 그대로예요. 다음에 원할 때 이어가세요.'));
  const actions = element('div', 'actions');
  actions.append(button('오늘은 여기까지', () => { location.href = './#brain'; }, 'primary'));
  if (makeQueue().length) actions.append(button('조금 더 복습하기', start));
  player.append(actions);
  if (!makeQueue().length) showNextReview();
  phaseActions();
  updateProgress();
  player.querySelector('h3').tabIndex = -1;
  player.querySelector('h3').focus({ preventScroll: true });
}

$('#backup-undo').hidden = !hasProgressRestore(storage);
$('#backup-export').addEventListener('click', () => {
  try {
    const latest = loadProgress(storage);
    if (!unsaved && !latest.saved) throw new Error(latest.notice);
    // A damaged original must not be disguised as an empty, successful backup.
    let raw;
    try { raw = storage?.getItem('hanthing-review-v1'); } catch {}
    if (raw) {
      try { parseProgressBackup(raw); }
      catch (error) {
        if (!unsaved) throw error;
        if (!confirm('기존 저장 기록을 읽지 못했습니다. 현재 화면의 새 풀이만 백업하며, 읽지 못한 과거 기록은 파일에 포함되지 않습니다. 원본 저장 기록은 그대로 둡니다. 현재 풀이를 백업할까요?')) return;
      }
    }
    const backup = exportProgress(unsaved ? state : latest.state);
    const url = URL.createObjectURL(new Blob([backup], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `hanthing-review-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    $('#backup-result').textContent = '백업 파일 다운로드를 요청했습니다. 다운로드 폴더에서 파일을 확인해 주세요.';
  } catch (error) { $('#backup-result').textContent = `백업하지 못했습니다. ${error.message}`; }
});
$('#backup-import').addEventListener('click', () => $('#backup-file').click());
$('#backup-file').addEventListener('change', async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const raw = await file.text();
    const backup = parseProgressBackup(raw);
    const date = backup.exportedAt ? `${new Date(backup.exportedAt).toLocaleString('ko-KR')} 백업입니다.\n` : '';
    const warning = unsaved ? '이 화면에만 남은 새 풀이는 되돌릴 수 없습니다. 필요한 풀이는 먼저 파일로 백업하세요.\n' : '';
    if (!confirm(`${date}${warning}현재 기록을 이 파일의 기록으로 교체합니다. 진행 중인 풀이는 종료됩니다.\n교체 전 저장 기록은 이 브라우저에서 되돌릴 수 있습니다. 불러올까요?`)) return;
    restoreProgress(storage, raw);
    location.reload();
  } catch (error) { $('#backup-result').textContent = `불러오지 못했습니다. ${error.message}`; }
  finally { event.target.value = ''; }
});
$('#backup-undo').addEventListener('click', () => {
  if (!confirm('백업을 불러오기 전 기록으로 되돌립니다. 불러온 뒤 새로 푼 기록은 사라집니다. 필요한 기록은 먼저 파일로 백업해 주세요. 되돌릴까요?')) return;
  try { undoProgressRestore(storage); location.reload(); }
  catch (error) { $('#backup-result').textContent = `되돌리지 못했습니다. ${error.message}`; }
});

setSelect.addEventListener('change', () => { requestedGoal = null; onlyMarked.checked = false; allGoals.checked = mode === 'cards'; updateContext(); overview(); });
allGoals.addEventListener('change', overview);
onlyMarked.addEventListener('change', overview);
$('#all-topics').addEventListener('click', () => { location.href = `review.html?mode=${mode}`; });
$('#manage-records').addEventListener('click', () => $('#record-management').showModal());
$('#close-management').addEventListener('click', () => $('#record-management').close());
window.addEventListener('storage', event => {
  if ((event.key !== 'hanthing-review-v1' && event.key !== null) || unsaved || !sets.length) return;
  const latest = loadSyncedProgress(storage, sets);
  if (!latest.saved) { unsaved = true; updateStorageNotice(); return; }
  Object.assign(state, latest.state);
  updateProgress();
  if (active) refreshQuestion?.();
  if (!active) overview();
});
window.addEventListener('focus', () => { if (sets.length) { updateProgress(); if (!active) overview(); } });
updateStorageNotice();
try {
  const response = await fetch('review-data.json');
  if (!response.ok) throw new Error('Review data unavailable');
  const data = await response.json();
  if (data.schemaVersion !== 1 || !Array.isArray(data.sets)) throw new Error('Unsupported review data');
  sets = data.sets.filter(set => typeof set.id === 'string' && typeof set.title === 'string' && set.version &&
    Array.isArray(set.goals) && Array.isArray(set.noteIds) && Array.isArray(set.questions) && Array.isArray(set.cards));
  const synced = loadSyncedProgress(storage, sets);
  Object.assign(state, synced.state);
  unsaved = !synced.saved;
  updateStorageNotice();
  modules = getReviewModules(window.HANTHING_CONTENT, sets);
  const requested = query.get('set');
  const requestedSet = sets.find(set => set.id === requested);
  if (moduleId !== 'all' && !modules.some(module => module.id === moduleId)) moduleId = null;
  if (requestedSet && !moduleSets().includes(requestedSet)) {
    moduleId = modules.find(module => module.id === sourceNote?.courseId && module.sets.includes(requestedSet))?.id
      || modules.find(module => module.sets.includes(requestedSet))?.id || 'all';
  }
  setSelect.replaceChildren(new Option('모듈 전체', ''));
  for (const set of moduleSets()) setSelect.add(new Option(set.title, set.id));
  setSelect.disabled = false;
  if (requestedSet) setSelect.value = requested;
  updateContext();
  overview();
  if (requested && !requestedSet) $('#module-picker').prepend(element('p', 'welcome-copy', '요청한 세트를 찾지 못했습니다. 복습할 모듈을 골라 주세요.'));
} catch {
  player.setAttribute('aria-busy', 'false');
  player.replaceChildren(element('h3', 'welcome-title', '복습 자료를 불러오지 못했습니다.'),
    element('p', 'welcome-copy', '잠시 후 다시 시도하거나 학습 노트를 읽어 보세요. 저장된 복습 기록은 그대로 유지됩니다.'),
    button('다시 불러오기', () => location.reload(), 'primary'));
}
