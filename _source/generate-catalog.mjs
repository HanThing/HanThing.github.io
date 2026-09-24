import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import YAML from 'yaml';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import GithubSlugger from 'github-slugger';

const root = dirname(fileURLToPath(import.meta.url));
const kinds = new Set(['concept', 'journal', 'weekly', 'project', 'reference']);
const ignored = new Set(['private', 'drafts', 'raw-sources', '.obsidian', 'templates']);
const textOf = node => node.value ?? (node.children ?? []).map(textOf).join('');
// Official course order and verified lesson names; supplemental study is marked separately.
const curriculumSource = 'https://docs.google.com/spreadsheets/d/1vF_S-DV4Pm0qRnsspfpEmKRvyj0j4Miam4YofqXPM04/edit?gid=624392885';
const courses = [
  { id: 'python', title: '실전 파이썬 준비하기', lessons: [
    { id: 'python-basics', title: '파이썬 기초 복습', kind: 'supplemental' },
    { id: 'data-overview', title: '데이터 활용 오버뷰', kind: 'official' },
    { id: 'python-modules', title: '파이썬 응용하기(모듈, 라이브러리)', kind: 'official' },
    { id: 'objects-and-classes', title: '객체와 클래스', kind: 'official' },
  ] },
  { id: 'data-analysis', title: '데이터 분석', lessons: [
    { id: 'data-toolkit', title: '데이터 사이언스 Toolkit', kind: 'official' },
    { id: 'statistics-and-visualization', title: '기초 통계와 데이터 시각화', kind: 'official' },
    { id: 'dataframe', title: 'DataFrame 마스터하기', kind: 'official' },
  ] },
  { id: 'machine-learning', title: '머신러닝', lessons: [] },
  { id: 'pytorch', title: 'PyTorch', lessons: [] },
  { id: 'deep-learning', title: '딥러닝', lessons: [] },
  { id: 'computer-vision', title: '컴퓨터 비전', lessons: [] },
  { id: 'version-control', title: '버전관리 및 협업하기', lessons: [] },
  { id: 'beginner-project', title: 'AI 엔지니어 초급 프로젝트', lessons: [] },
  { id: 'nlp', title: '자연어 처리', lessons: [] },
  { id: 'llm', title: '대규모 언어 모델(LLM)', lessons: [] },
  { id: 'intermediate-project', title: 'AI 엔지니어 중급 프로젝트', lessons: [] },
  { id: 'docker', title: 'Docker', lessons: [] },
  { id: 'model-deployment', title: '모델 배포하기', lessons: [] },
  { id: 'inference-optimization', title: '추론 최적화', lessons: [] },
  { id: 'advanced-project', title: 'AI 엔지니어 고급 프로젝트', lessons: [] },
];

function parseNote(id, text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  assert(match, `${id}: frontmatter required`);
  const meta = YAML.parse(match[1]);
  if (meta.publish !== true || meta.draft === true || !kinds.has(meta.type)) return null;
  assert(typeof meta.title === 'string' && meta.title.trim(), `${id}: title required`);
  assert(/^\d{4}-\d{2}-\d{2}$/.test(meta.date), `${id}: date required`);
  assert(Array.isArray(meta.sources) && meta.sources.length, `${id}: sources required`);
  if (meta.type !== 'reference') {
    const course = courses.find(course => course.id === meta.courseId);
    assert(course, `${id}: known courseId required`);
    assert(course.lessons.some(lesson => lesson.id === meta.lessonId), `${id}: lessonId must belong to courseId`);
  }
  const tree = unified().use(remarkParse).parse(match[2]);
  const slugger = new GithubSlugger();
  const questions = [], quizzes = [], links = new Set();
  const url = `/notes/${id}`;
  let currentQuestion;
  function visit(node) {
    if (node.type === 'heading') {
      const title = textOf(node);
      const anchor = slugger.slug(title);
      if (node.depth <= 2) currentQuestion = null;
      const collection = title.startsWith('질문: ') ? questions : title.startsWith('퀴즈: ') ? quizzes : null;
      if (collection) {
        const item = { id: `${id}#${anchor}`, title: title.slice(4),
          url: `${url}#${anchor}`, topic: (meta.topics ?? []).join(' · '), sourceTitle: meta.title };
        collection.push(item);
        if (collection === questions) currentQuestion = item;
      }
    }
    if (currentQuestion && node.type === 'paragraph') {
      const text = textOf(node).replace(/\[\[(?:[^\]|]*\|)?([^\]]+)\]\]/g, '$1');
      for (const [label, field] of [['상황:', 'context'], ['의도:', 'intent'], ['핵심 답변:', 'answer']]) {
        if (text.startsWith(label)) currentQuestion[field] = text.slice(label.length).trim();
      }
    }
    if (node.type === 'text') {
      for (const m of node.value.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)) links.add(m[1].replace(/\.md$/, ''));
    }
    if (node.type === 'link' && node.url.startsWith('https://hanthing.github.io/notes/')) {
      links.add(decodeURI(node.url.split('/notes/')[1].split('#')[0]).replace(/\.html$/, ''));
    }
    for (const child of node.children ?? []) visit(child);
  }
  visit(tree);
  const firstParagraph = tree.children.find(n => n.type === 'paragraph');
  return { note: { id, title: meta.title, description: (meta.description ?? textOf(firstParagraph ?? {}).slice(0, 150)).trim(),
    date: meta.date, published: meta.published ?? meta.date, type: meta.type, topics: meta.topics ?? [],
    ...(meta.type === 'reference' ? {} : { courseId: meta.courseId, lessonId: meta.lessonId }),
    url, links: [...links].filter(link => link !== id), sources: meta.sources }, questions, quizzes };
}

function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (ignored.has(entry.name)) return [];
    const path = join(dir, entry.name);
    return entry.isDirectory() ? files(path) : entry.name.endsWith('.md') ? [path] : [];
  });
}

if (process.argv.includes('--check')) {
  const sample = '---\ntitle: 실제 기록\ndate: 2026-09-18\npublish: true\ntype: journal\ncourseId: python\nlessonId: python-basics\ntags: [python]\nsources: [학습 대화]\n---\n설명\n\n## 질문: 왜 멈출까?\n[[python/loops|반복문]]\n\n## 퀴즈: 결과를 예측해 보자\n';
  const parsed = parseNote('learning/sample', sample);
  assert.equal(parsed.questions.length, 1);
  assert.equal(parsed.quizzes.length, 1);
  assert.equal(parsed.questions[0].title, '왜 멈출까?');
  assert.equal(parsed.questions[0].url, '/notes/learning/sample#질문-왜-멈출까');
  assert.deepEqual(parsed.note.links, ['python/loops']);
  const question = parseNote('learning/context', sample.replace('[[python/loops|반복문]]', '**상황:** 정답 뒤에도 실패가 출력됐다.\n\n**의도:** 성공했을 때 실패 안내를 건너뛰고 싶었다.\n\n**핵심 답변:** break는 반복문만 끝낸다.')).questions[0];
  assert.equal(question.context, '정답 뒤에도 실패가 출력됐다.');
  assert.equal(question.intent, '성공했을 때 실패 안내를 건너뛰고 싶었다.');
  assert.equal(question.answer, 'break는 반복문만 끝낸다.');
  assert.equal(parseNote('bootcamp/overview', sample.replace('type: journal', 'type: reference')).note.type, 'reference');
  assert.equal(parseNote('draft', sample.replace('publish: true', 'publish: false')), null);
  assert.equal(parseNote('draft', sample.replace('publish: true', 'publish: true\ndraft: true')), null);
  assert.equal(parseNote('admin', sample.replace('type: journal', 'type: index')), null);
  assert.throws(() => parseNote('missing-source', sample.replace('sources: [학습 대화]', '')));
  assert.throws(() => parseNote('missing-course', sample.replace('courseId: python', '')));
  assert.throws(() => parseNote('wrong-lesson', sample.replace('lessonId: python-basics', 'lessonId: data-toolkit')));
  assert.equal(parsed.note.courseId, 'python');
  assert.equal(parsed.note.lessonId, 'python-basics');
  console.log('Catalog checks passed: separate questions/quizzes, links, publication filters, provenance, course/lesson validation.');
} else {
  const contentDir = join(root, 'content');
  const pages = files(contentDir).sort().map(path => parseNote(relative(contentDir, path).replace(/\.md$/, ''), readFileSync(path, 'utf8'))).filter(Boolean);
  pages.sort((a, b) => b.note.published.localeCompare(a.note.published) || b.note.date.localeCompare(a.note.date) || a.note.id.localeCompare(b.note.id));
  const data = { curriculumSource, courses, notes: pages.filter(p => p.note.type !== 'reference').map(p => p.note),
    references: pages.filter(p => p.note.type === 'reference').map(p => p.note),
    questions: pages.flatMap(p => p.questions), quizzes: pages.flatMap(p => p.quizzes) };
  const defaultOutput = join(root, basename(root) === '_source' ? '../content-data.js' : '../blog-preview/content-data.js');
  writeFileSync(resolve(process.argv[2] ?? defaultOutput), `// Generated from public Markdown by _source/generate-catalog.mjs.\nwindow.HANTHING_CONTENT = ${JSON.stringify(data, null, 2)};\n`);
  const index = '# HanThing knowledge index\n\nGenerated from public Markdown. Read AGENTS.md for ingest/query/lint; CHANGELOG.md for changes. Course references support briefing and stay outside the learning graph. Course/lesson identify the curriculum placement; topics identify related subjects.\n\n' + pages.map(({ note: n }) => {
    const course = courses.find(course => course.id === n.courseId);
    const lesson = course?.lessons.find(lesson => lesson.id === n.lessonId);
    const placement = course ? `\n  Course: ${course.title} → ${lesson.title}${lesson.kind === 'supplemental' ? ' (보충)' : ''}. Related topics: ${n.topics.join('; ')}` : '';
    return `- [${n.title}](content/${n.id}.md) — ${n.type} · ${n.date} · ${n.description.replace(/\s+/g, ' ')}${placement}\n  Sources: ${n.sources.join('; ')}`;
  }).join('\n');
  writeFileSync(join(root, 'INDEX.md'), index + '\n');
  console.log(`Generated ${data.notes.length} notes, ${data.questions.length} questions, ${data.quizzes.length} quizzes.`);
}
