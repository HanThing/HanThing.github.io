import { QuartzComponent } from "./types"

type Note = {
  id: string
  title: string
  description: string
  type: "concept" | "weekly" | "journal" | "project"
  url: string
  links: string[]
  relatedReasons?: Record<string, string>
}
type StudySet = { id: string; title: string; noteIds: string[]; questions: unknown[]; cards: unknown[] }

export default function learningNavigation(notes: Note[], sets: StudySet[]) {
  function relatedTo(note: Note) {
    return notes.filter(other => other.id !== note.id && (note.links.includes(other.id) || other.links.includes(note.id)))
      .sort((a, b) => Number(b.type === "concept") - Number(a.type === "concept") || a.title.localeCompare(b.title, "ko"))
  }
  function reviewLinks(note: Note) {
    return sets.filter(set => set.noteIds.includes(note.id)).map(set => (
      <div class="learning-set">
        <p>{set.title}</p>
        <div class="learning-links">
          {([['quiz', '퀴즈 풀기', set.questions.length, '문항'], ['cards', '플래시카드', set.cards.length, '장']] as const)
            .filter(([, , count]) => count > 0).map(([mode, label, count, unit]) => (
              <a href={`/review.html?${new URLSearchParams({ set: set.id, mode, from: note.id })}`} data-no-popover data-router-ignore>
                {label} <span>{count}{unit}</span> ↗
              </a>
            ))}
        </div>
      </div>
    ))
  }
  const LearningActions: QuartzComponent = ({ fileData }) => {
    const note = notes.find(note => note.id === fileData.slug)
    if (!note) return null
    const related = relatedTo(note)
    return <nav id="learning-actions" class="learning-actions" aria-label="이 글 복습과 관련 개념">
      <strong>이 글 복습하기</strong>
      {reviewLinks(note)}
      <a class="learning-related-jump" href="#learning-related" data-no-popover>연결된 개념·기록 {related.length}개 보기 ↓</a>
    </nav>
  }
  const LearningRelated: QuartzComponent = ({ fileData }) => {
    const note = notes.find(note => note.id === fileData.slug)
    if (!note) return null
    const related = relatedTo(note)
    return <section id="learning-related" class="learning-related" aria-labelledby="learning-related-title">
      <div id="learning-review" class="learning-actions">
        <h2>읽은 내용을 떠올려 보세요</h2>
        {reviewLinks(note)}
      </div>
      <h2 id="learning-related-title">이어서 읽는 개념과 기록</h2>
      {related.length ? <ul class="learning-related-list">{related.map(other => {
        const reason = note.relatedReasons?.[other.id] || other.relatedReasons?.[note.id]
        const direction = note.links.includes(other.id) ? "이 글에서 연결한 노트" : "이 글을 참고한 노트"
        return <li><a href={other.url} data-no-popover>
          <small>{{ concept: "개념 노트", weekly: "위클리 페이퍼", journal: "학습 기록", project: "프로젝트" }[other.type]} · {direction}</small>
          <strong>{other.title} ↗</strong>
          <span>{reason ? `함께 읽는 이유: ${reason}` : `노트 요약: ${other.description}`}</span>
        </a></li>
      })}</ul> : <p>아직 연결된 다른 노트가 없습니다.</p>}
      <a class="learning-map-link" href={`/?${new URLSearchParams({ note: note.id })}#brain`} data-no-popover data-router-ignore>지도에서 이 글의 연결 보기 ↗</a>
    </section>
  }
  return { LearningActions, LearningRelated }
}
