import type { App } from 'vue'
import EleCheckboxButton from './CheckboxButton.vue'
import type { IDefineComponent, ICheckboxButtonProps } from '../types/index'

EleCheckboxButton.install = (app: App) => {
  app.component(
    EleCheckboxButton.name || 'ProCheckboxButton',
    EleCheckboxButton
  )
}

export default EleCheckboxButton as IDefineComponent<ICheckboxButtonProps>
