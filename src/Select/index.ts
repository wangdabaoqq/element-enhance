import type { App } from 'vue'
import EleSelect from './Select.vue'
import type { IDefineComponent, ISelectProps } from '../types/index'

EleSelect.install = (app: App) => {
  app.component(EleSelect.name || 'EleSelect', EleSelect)
}

export default EleSelect as IDefineComponent<ISelectProps>
