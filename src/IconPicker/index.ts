import type { App } from 'vue'
import EleIconPicker from './IconPicker.vue'
import type { IDefineComponent, ILayoutProps } from '../types/index'

EleIconPicker.install = (app: App) => {
  app.component(EleIconPicker.name || 'EleIconPicker', EleIconPicker)
}

export default EleIconPicker as IDefineComponent<ILayoutProps>
