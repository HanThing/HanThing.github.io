const STORAGE_KEY = 'hanthing-review-v1';
const DAY = 86400000;
const RETRY = 10 * 60 * 1000;
const statuses = ['review', 'pending', 'mastered'];
const object = value => value && typeof value === 'object' && !Array.isArray(value);
const wording = question => String(question.question).replace(/\s+/g, ' ').trim();

export function createProgress() {
  return { schemaVersion: 2, session: 0, goals: {}, attempts: {}, questionPreferences: {}, lastQuestionKind: null };
}

function addSchedule(goal, now) {
  const reviewed = goal.status !== 'review';
  goal.lastReviewedAt ??= reviewed ? now : 0;
  goal.pendingAt ??= goal.status === 'pending' ? now : null;
  goal.intervalDays ??= goal.status === 'mastered' ? 3 : reviewed ? 1 : 0;
  goal.dueAt ??= reviewed ? now + goal.intervalDays * DAY : 0;
  goal.lastWeakAt ??= 0;
}

export function loadProgress(storage, now = Date.now()) {
  let raw;
  try { raw = storage.getItem(STORAGE_KEY); }
  catch { return { state: createProgress(), saved: false, notice: '이 브라우저에서는 기록을 저장할 수 없습니다. 페이지를 닫으면 현재 기록이 사라집니다.' }; }
  if (!raw) return { state: createProgress(), saved: true, notice: '' };
  try {
    const state = JSON.parse(raw);
    if (![1, 2].includes(state.schemaVersion) || !Number.isSafeInteger(state.session) || state.session < 0 ||
        !object(state.goals) || !object(state.attempts)) throw new Error('Invalid progress');
    const migrated = state.schemaVersion === 1;
    for (const goal of Object.values(state.goals)) if (object(goal)) addSchedule(goal, now);
    state.questionPreferences = object(state.questionPreferences) ? Object.fromEntries(
      Object.entries(state.questionPreferences).filter(([, preference]) => object(preference)).map(([key, preference]) =>
        [key, { reviewAgain: preference.reviewAgain === true, excluded: preference.excluded === true }])) : {};
    if (!['new', 'due'].includes(state.lastQuestionKind)) state.lastQuestionKind = null;
    state.schemaVersion = 2;
    // Save once so reopening a legacy record does not keep postponing its due date.
    const saved = !migrated || saveProgress(storage, state);
    return { state, saved, notice: '' };
  } catch {
    return { state: createProgress(), saved: true, notice: '기존 기록을 읽지 못해 새 기록으로 시작합니다.' };
  }
}

export function saveProgress(storage, state) {
  try { storage.setItem(STORAGE_KEY, JSON.stringify(state)); return true; }
  catch { return false; }
}

export function loadSyncedProgress(storage, sets, now = Date.now()) {
  const loaded = loadProgress(storage, now);
  const before = JSON.stringify(loaded.state);
  syncProgress(loaded.state, sets, now);
  if (loaded.saved && JSON.stringify(loaded.state) !== before) loaded.saved = saveProgress(storage, loaded.state);
  return loaded;
}

export function changeProgress(storage, state, sets, action, readLatest = true) {
  if (readLatest) {
    const latest = loadProgress(storage);
    if (latest.saved) Object.assign(state, latest.state);
  }
  syncProgress(state, sets);
  const result = action(state);
  return { result, saved: saveProgress(storage, state) };
}

export function syncProgress(state, sets, now = Date.now()) {
  state.schemaVersion = 2;
  for (const bucket of Object.values(state.attempts)) {
    if (!object(bucket?.questions)) continue;
    for (const attempt of Object.values(bucket.questions)) if (object(attempt)) Object.assign(attempt, scheduleForAttempt(attempt));
  }
  for (const set of sets) for (const goal of set.goals) {
    let current = state.goals[goal.id];
    if (!object(current) || !statuses.includes(current.status)) {
      current = state.goals[goal.id] = { version: goal.version, status: 'review', pendingSession: null,
        lastCheckSession: 0, history: [] };
    }
    addSchedule(current, now);
    if (!Array.isArray(current.history)) current.history = [];
    if (current.version !== goal.version) {
      current.history.push({ version: current.version, status: current.status, session: state.session });
      current.version = goal.version;
      if (current.status !== 'review') {
        current.status = 'pending';
        current.pendingSession = state.session;
        current.pendingAt = now;
        current.intervalDays = 1;
        current.dueAt = now + DAY;
      }
    }
  }
  return state;
}

export function beginSession(state, sets, now = Date.now()) {
  syncProgress(state, sets, now);
  return ++state.session;
}

function storedAttempts(state, set) {
  return state.attempts[JSON.stringify([set.id, set.version])];
}

export function getAttempts(state, set) {
  const key = JSON.stringify([set.id, set.version]);
  if (!object(state.attempts[key]) || !object(state.attempts[key].questions) || !object(state.attempts[key].cards)) {
    state.attempts[key] = { questions: {}, cards: {} };
  }
  return state.attempts[key];
}

function scheduleForAttempt(attempt) {
  const intervalDays = [0, 1, 3, 7, 21].includes(attempt.intervalDays) ? attempt.intervalDays :
    attempt.correct === true && attempt.assisted !== true ? 1 : 0;
  const answeredAt = Number.isFinite(attempt.answeredAt) && attempt.answeredAt >= 0 ? attempt.answeredAt : 0;
  const dueAt = Number.isFinite(attempt.dueAt) && attempt.dueAt >= 0 ? attempt.dueAt :
    answeredAt ? answeredAt + (intervalDays ? intervalDays * DAY : RETRY) : 0;
  return { dueAt, intervalDays };
}

export function getQuestionSchedule(state, set, question) {
  const attempt = storedAttempts(state, set)?.questions?.[question.id];
  return object(attempt) ? scheduleForAttempt(attempt) : null;
}

const preferenceKey = (set, question) => JSON.stringify([set.id, set.version, question.id]);

export function getQuestionPreference(state, set, question) {
  const preference = state.questionPreferences?.[preferenceKey(set, question)];
  return { reviewAgain: preference?.reviewAgain === true, excluded: preference?.excluded === true };
}

export function setQuestionPreference(state, set, question, patch) {
  const preference = getQuestionPreference(state, set, question);
  const fields = ['reviewAgain', 'excluded'].filter(field => typeof patch?.[field] === 'boolean');
  if (!fields.length) return preference;
  if (!object(state.questionPreferences)) state.questionPreferences = {};
  for (const field of fields) preference[field] = patch[field];
  state.questionPreferences[preferenceKey(set, question)] = preference;
  return preference;
}

export function validQuestion(question) {
  return question && typeof question.id === 'string' && typeof question.question === 'string' &&
    question.question.trim() && Array.isArray(question.options) && question.options.length >= 2 &&
    question.options.every(option => typeof option.text === 'string') &&
    question.options.filter(option => option.isCorrect === true).length === 1;
}

function distinctCheck(set, question) {
  return question.pool === 'check' && !set.questions.some(other =>
    other.pool === 'practice' && wording(other) === wording(question));
}

export function reviewAgain(state, goalId, now = Date.now()) {
  const goal = state.goals[goalId];
  if (!goal) return;
  Object.assign(goal, { status: 'review', pendingSession: null, pendingAt: null,
    lastReviewedAt: now, lastWeakAt: now, intervalDays: 0, dueAt: now });
}

export function answerQuestion(state, set, question, { optionIndex, assisted = false, session = state.session, now = Date.now() }) {
  if (!validQuestion(question) || !Number.isInteger(optionIndex) || !question.options[optionIndex]) return null;
  const attempts = getAttempts(state, set).questions;
  const previous = attempts[question.id];
  const previousSchedule = getQuestionSchedule(state, set, question);
  const early = Boolean(previousSchedule && now < previousSchedule.dueAt);
  const goalAssisted = Boolean(assisted || (previous?.session === session &&
    (previous.goalAssisted || previous.assisted || !previous.correct)));
  assisted = Boolean(assisted || (early && previous?.session === session && (previous.assisted || !previous.correct)));
  const correct = question.options[optionIndex].isCorrect === true;
  const intervalDays = !correct || assisted ? 0 : early ? previousSchedule.intervalDays :
    !previousSchedule || previousSchedule.intervalDays === 0 ? 1 : previousSchedule.intervalDays === 1 ? 3 :
      previousSchedule.intervalDays === 3 ? 7 : 21;
  const dueAt = !correct || assisted ? now + RETRY : early ? previousSchedule.dueAt : now + intervalDays * DAY;
  if (!early) state.lastQuestionKind = previousSchedule ? 'due' : 'new';
  attempts[question.id] = { correct, assisted, goalAssisted, optionIndex, session, answeredAt: now,
    seenCount: (previous?.seenCount || 0) + 1, dueAt, intervalDays };
  const goal = set.goals.some(item => item.id === question.goalId) && state.goals[question.goalId];
  let reason = 'unmapped';
  if (goal && (question.pool === 'practice' || distinctCheck(set, question))) {
    if (!correct) {
      reviewAgain(state, question.goalId, now); reason = 'incorrect';
    } else if (goalAssisted) {
      if (goal.status === 'review') reviewAgain(state, question.goalId, now);
      else Object.assign(goal, { status: 'pending', pendingSession: session, pendingAt: now,
        lastReviewedAt: now, intervalDays: 1, dueAt: now + DAY });
      reason = 'assisted';
    } else if (question.pool === 'practice') {
      if (goal.status === 'review') Object.assign(goal, { status: 'pending', pendingSession: session,
        pendingAt: now, lastReviewedAt: now, intervalDays: 1, dueAt: now + DAY });
      reason = 'practice';
    } else if (goal.status === 'review') reason = 'needs-practice';
    else if (now < goal.dueAt || (goal.status === 'pending' && now - goal.pendingAt < DAY)) reason = 'too-soon';
    else {
      const intervalDays = goal.status === 'pending' ? 3 : goal.intervalDays < 7 ? 7 : 21;
      Object.assign(goal, { status: 'mastered', lastCheckSession: session, lastReviewedAt: now,
        intervalDays, dueAt: now + intervalDays * DAY });
      reason = 'mastered';
    }
  }
  return { correct, assisted, status: goal?.status, reason, dueAt, intervalDays, early };
}

export function assessCard(state, set, card, known, session = state.session, now = Date.now()) {
  getAttempts(state, set).cards[card.id] = { known: Boolean(known), session, answeredAt: now };
  if (!known && set.goals.some(goal => goal.id === card.goalId)) reviewAgain(state, card.goalId, now);
}

function scheduledEntries(sets, state, now, includeExcluded = false) {
  const entries = new Map();
  for (const set of sets) for (const goal of set.goals) {
    if (entries.has(goal.id)) continue;
    const current = state.goals[goal.id];
    if (current?.dueAt > now) continue;
    const reason = current?.status === 'review' && current.lastWeakAt ? 'weak' : current?.lastReviewedAt ? 'due' : 'new';
    const pool = current && current.status !== 'review' ? 'check' : 'practice';
    const attempts = storedAttempts(state, set)?.questions || {};
    const questions = set.questions.filter(question => validQuestion(question) && question.goalId === goal.id &&
      (includeExcluded || !getQuestionPreference(state, set, question).excluded) &&
      (pool === 'check' ? distinctCheck(set, question) : question.pool === 'practice'));
    questions.sort((a, b) => (attempts[a.id]?.seenCount || 0) - (attempts[b.id]?.seenCount || 0));
    if (questions[0]) entries.set(goal.id, { set, goal, question: questions[0], reason,
      reasonLabel: { weak: '최근 오답·어려움', due: '다시 확인할 때', new: '아직 확인하지 않음' }[reason], dueAt: current?.dueAt || 0 });
  }
  const rank = { weak: 0, due: 1, new: 2 };
  return [...entries.values()].sort((a, b) => rank[a.reason] - rank[b.reason] ||
    (a.reason === 'weak' ? state.goals[b.goal.id].lastWeakAt - state.goals[a.goal.id].lastWeakAt : a.dueAt - b.dueAt));
}

// The homepage intentionally previews five goals; queue reads never create records.
export function getReviewQueue(sets, state, { limit = 5, now = Date.now() } = {}) {
  return scheduledEntries(sets, state, now).slice(0, limit);
}

function spreadGroups(groups, compare) {
  groups.sort(compare);
  const entries = [];
  for (let round = 0; groups.some(group => round < group.length); round++) {
    for (const group of groups) if (group[round]) entries.push(group[round]);
  }
  return entries;
}

function questionEntries(state, sets, onlyMarked) {
  const entries = new Map();
  for (const set of sets) for (const question of set.questions) {
    if (!validQuestion(question) || (onlyMarked && !getQuestionPreference(state, set, question).reviewAgain)) continue;
    const key = preferenceKey(set, question);
    if (!entries.has(key)) entries.set(key, { set, question, goal: set.goals.find(goal => goal.id === question.goalId) });
  }
  return [...entries.values()];
}

export function getQuestionCounts(state, sets, { onlyMarked = false, now = Date.now() } = {}) {
  const entries = questionEntries(state, sets, onlyMarked);
  const counts = { total: entries.length, excluded: 0, active: 0, answered: 0, unseen: 0, due: 0, waiting: 0, nextDueAt: null };
  for (const { set, question } of entries) {
    if (getQuestionPreference(state, set, question).excluded) { counts.excluded++; continue; }
    counts.active++;
    const schedule = getQuestionSchedule(state, set, question);
    if (!schedule) { counts.unseen++; continue; }
    counts.answered++;
    if (schedule.dueAt <= now) counts.due++;
    else {
      counts.waiting++;
      counts.nextDueAt = Math.min(counts.nextDueAt ?? Infinity, schedule.dueAt);
    }
  }
  return counts;
}

export function questionQueue(state, sets, { onlyMarked = false, now = Date.now(), includeFuture = false } = {}) {
  const attempt = entry => storedAttempts(state, entry.set)?.questions?.[entry.question.id];
  const compare = (a, b) => (attempt(a)?.seenCount || 0) - (attempt(b)?.seenCount || 0) ||
    (attempt(a)?.answeredAt || 0) - (attempt(b)?.answeredAt || 0) ||
    Number(getQuestionPreference(state, b.set, b.question).reviewAgain) - Number(getQuestionPreference(state, a.set, a.question).reviewAgain);
  const coverage = entries => entries.reduce((rank, entry) => ({
    leastSeen: Math.min(rank.leastSeen, attempt(entry)?.seenCount || 0),
    totalSeen: rank.totalSeen + (attempt(entry)?.seenCount || 0),
    lastAnswered: Math.max(rank.lastAnswered, attempt(entry)?.answeredAt || 0)
  }), { leastSeen: Infinity, totalSeen: 0, lastAnswered: 0 });
  const compareGroups = (a, b) => {
    const left = coverage(a); const right = coverage(b);
    return left.leastSeen - right.leastSeen || left.totalSeen - right.totalSeen ||
      left.lastAnswered - right.lastAnswered || compare(a[0], b[0]);
  };
  const sources = new Map();
  for (const entry of questionEntries(state, sets, onlyMarked)) {
    const { set, question, goal } = entry;
    if (getQuestionPreference(state, set, question).excluded) continue;
    const schedule = getQuestionSchedule(state, set, question);
    entry.kind = !schedule ? 'new' : schedule.dueAt <= now ? 'due' : 'extra';
    entry.dueAt = schedule?.dueAt ?? null;
    entry.reasonLabel = { new: '아직 풀지 않은 문제', due: '다시 확인할 때', extra: '예정 시각 전 추가 연습' }[entry.kind];
    if (!sources.has(set.id)) sources.set(set.id, new Map());
    const goals = sources.get(set.id); const key = goal?.id ?? null;
    if (!goals.has(key)) goals.set(key, []);
    goals.get(key).push(entry);
  }
  const ordered = spreadGroups([...sources.values()].map(goals =>
    spreadGroups([...goals.values()].map(entries => entries.sort(compare)), compareGroups)), compareGroups);
  const unseen = ordered.filter(entry => entry.kind === 'new');
  const due = ordered.filter(entry => entry.kind === 'due').sort((a, b) => a.dueAt - b.dueAt);
  if (!unseen.length && !due.length) return includeFuture ? ordered : [];
  return spreadGroups(state.lastQuestionKind === 'new' ? [due, unseen] : [unseen, due], () => 0);
}

export function practiceQueue(state, sets, all = false) {
  return sets.flatMap(set => set.questions.filter(question => validQuestion(question) && question.pool === 'practice' &&
    !getQuestionPreference(state, set, question).excluded &&
    (all || state.goals[question.goalId]?.status === 'review')).map(question => ({ set, question })));
}

export function checkQueue(state, sets, all = false, now = Date.now()) {
  if (!all) return getReviewQueue(sets, state, { now, limit: Infinity }).filter(entry => entry.question.pool === 'check');
  const entries = [];
  for (const set of sets) for (const goal of set.goals) {
    if (!['pending', 'mastered'].includes(state.goals[goal.id]?.status)) continue;
    const attempts = storedAttempts(state, set)?.questions || {};
    const questions = set.questions.filter(question => validQuestion(question) && question.goalId === goal.id &&
      !getQuestionPreference(state, set, question).excluded && distinctCheck(set, question));
    questions.sort((a, b) => (attempts[a.id]?.seenCount || 0) - (attempts[b.id]?.seenCount || 0));
    if (questions[0]) entries.push({ set, question: questions[0] });
  }
  return entries;
}

export function cardQueue(state, sets, all = false, now = Date.now()) {
  const priority = new Map(scheduledEntries(sets, state, now, true).map((entry, index) => [entry.goal.id, index]));
  return sets.flatMap(set => set.cards.filter(card => typeof card.front === 'string' && typeof card.back === 'string' &&
    (all || priority.has(card.goalId))).map(card => ({ set, card })))
    .sort((a, b) => (priority.get(a.card.goalId) ?? Infinity) - (priority.get(b.card.goalId) ?? Infinity) ||
      (storedAttempts(state, a.set)?.cards[a.card.id]?.known === false ? -1 : 0) -
      (storedAttempts(state, b.set)?.cards[b.card.id]?.known === false ? -1 : 0) ||
      (storedAttempts(state, a.set)?.cards[a.card.id]?.answeredAt || 0) - (storedAttempts(state, b.set)?.cards[b.card.id]?.answeredAt || 0));
}
