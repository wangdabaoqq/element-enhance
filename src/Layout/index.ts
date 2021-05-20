import type { App } from 'vue'
import EleLayout from './Layout.vue'
import type { IDefineComponent, ILayoutProps } from '../types/index'

EleLayout.install = (app: App) => {
  app.component(EleLayout.name || 'ProLayout', EleLayout)
}

export default EleLayout as IDefineComponent<ILayoutProps>
