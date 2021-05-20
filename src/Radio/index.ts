import type { App } from 'vue'
import EleRadio from './Radio.vue'
import type { IDefineComponent, IRadioProps } from '../types/index'

EleRadio.install = (app: App) => {
  app.component(EleRadio.name || 'EleRadio', EleRadio)
}

export default EleRadio as IDefineComponent<IRadioProps>
