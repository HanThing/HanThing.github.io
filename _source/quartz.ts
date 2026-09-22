import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import HanThingHome from "./quartz/components/HanThingHome"
import { readFileSync } from "node:fs"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes/dispatcher"

const config = await loadQuartzConfig()
// Quartz is built from blog-wiki; bundle the same theme script used by the home and labs.
HanThingHome.beforeDOMLoaded = readFileSync("../blog-preview/theme.js", "utf8")
export default config
export const layout = await loadQuartzLayout()
layout.defaults.header = [HanThingHome]
for (const pageLayout of Object.values(layout.byPageType)) {
  pageLayout.header = [HanThingHome]
}
config.plugins.emitters = config.plugins.emitters.map((emitter) =>
  emitter.name === "PageTypeDispatcher" ? PageTypeDispatcher(layout) : emitter,
)
