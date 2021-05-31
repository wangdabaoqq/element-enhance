import type { App } from 'vue'
import EleTreeSelect from './TreeSelect.vue'
import type { IDefineComponent, ISelectProps } from '../types/index'

EleTreeSelect.install = (app: App) => {
  app.component(EleTreeSelect.name || 'EleTreeSelect', EleTreeSelect)
}

export default EleTreeSelect as IDefineComponent<ISelectProps>
