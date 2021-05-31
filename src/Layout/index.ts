import type { App } from 'vue'
import EleLayout from './Layout.vue'
import type { IDefineComponent, ILayoutProps } from '../types/index'

EleLayout.install = (app: App) => {
  app.component(EleLayout.name || 'EleLayout', EleLayout)
}

export default EleLayout as IDefineComponent<ILayoutProps>
