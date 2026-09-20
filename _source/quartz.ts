import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import HanThingHome from "./quartz/components/HanThingHome"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes/dispatcher"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
layout.defaults.header = [HanThingHome]
for (const pageLayout of Object.values(layout.byPageType)) {
  pageLayout.header = [HanThingHome]
}
config.plugins.emitters = config.plugins.emitters.map((emitter) =>
  emitter.name === "PageTypeDispatcher" ? PageTypeDispatcher(layout) : emitter,
)
