import type { App } from 'vue'
import EleCheckbox from './Checkbox.vue'
import type { IDefineComponent, ICheckboxProps } from '../types/index'

EleCheckbox.install = (app: App) => {
  app.component(EleCheckbox.name || 'EleCheckbox', EleCheckbox)
}

export default EleCheckbox as IDefineComponent<ICheckboxProps>
