import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import HanThingHome from "./quartz/components/HanThingHome"
import learningNavigation from "./quartz/components/HanThingLearning"
import { readFileSync } from "node:fs"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes/dispatcher"

const config = await loadQuartzConfig()
// Quartz is built from blog-wiki; bundle the same theme script used by the home and labs.
HanThingHome.beforeDOMLoaded = readFileSync("../blog-preview/theme.js", "utf8")
export default config
export const layout = await loadQuartzLayout()
const catalog = JSON.parse(readFileSync("../blog-preview/content-data.js", "utf8").split("window.HANTHING_CONTENT = ")[1].trim().replace(/;$/, ""))
const review = JSON.parse(readFileSync("../blog-preview/review-data.json", "utf8"))
const { LearningActions, LearningRelated } = learningNavigation(catalog.notes, review.sets)
layout.defaults.header = [HanThingHome]
layout.defaults.beforeBody = [...(layout.defaults.beforeBody ?? []), LearningActions]
layout.defaults.afterBody = [LearningRelated, ...(layout.defaults.afterBody ?? [])]
for (const pageLayout of Object.values(layout.byPageType)) {
  pageLayout.header = [HanThingHome]
  pageLayout.beforeBody = [...(pageLayout.beforeBody ?? []), LearningActions]
  pageLayout.afterBody = [LearningRelated, ...(pageLayout.afterBody ?? [])]
}
config.plugins.emitters = config.plugins.emitters.map((emitter) =>
  emitter.name === "PageTypeDispatcher" ? PageTypeDispatcher(layout) : emitter,
)
