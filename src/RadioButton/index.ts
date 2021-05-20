import type { App } from 'vue'
import EleRadioButton from './RadioButton.vue'
import type { IDefineComponent, IRadioButtonProps } from '../types/index'

EleRadioButton.install = (app: App) => {
  app.component(EleRadioButton.name || 'ProRadioButton', EleRadioButton)
}

export default EleRadioButton as IDefineComponent<IRadioButtonProps>
