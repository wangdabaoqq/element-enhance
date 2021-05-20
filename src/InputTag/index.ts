import type { App } from 'vue'
import EleInputTag from './InputTag.vue'
import type { IDefineComponent, IInputTagProps } from '../types/index'

EleInputTag.install = (app: App) => {
  app.component(EleInputTag.name || 'EleInputTag', EleInputTag)
}

export default EleInputTag as IDefineComponent<IInputTagProps>
