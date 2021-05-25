import type { App } from 'vue'
import EleTabs from './Tabs.vue'
import type { IDefineComponent, ICheckboxProps } from '../types/index'

EleTabs.install = (app: App) => {
  app.component(EleTabs.name || 'EleCheckbox', EleTabs)
}

export default EleTabs as IDefineComponent<ICheckboxProps>
