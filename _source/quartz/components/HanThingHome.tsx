import { QuartzComponent } from "./types"

const HanThingHome: QuartzComponent = () => (
  <nav class="hanthing-home" aria-label="한띵 노트">
    <a href="/" data-no-popover data-router-ignore>HanThing <span>Notes</span></a>
    <a href="/#journal" data-no-popover data-router-ignore>기록</a>
    <a href="/#questions" data-no-popover data-router-ignore>질문</a>
    <a href="/#quizzes" data-no-popover data-router-ignore>퀴즈</a>
    <button class="theme-toggle" type="button" data-theme-toggle aria-label="밝은 화면으로 전환">밝게</button>
  </nav>
)

export default HanThingHome
