import type { App } from 'vue'
import EleTabs from './Tabs.vue'
import type { IDefineComponent } from '../types/index'

EleTabs.install = (app: App) => {
  app.component(EleTabs.name || 'ProTabs', EleTabs)
}

export default EleTabs as IDefineComponent
