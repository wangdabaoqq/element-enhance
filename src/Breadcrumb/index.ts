import type { App } from 'vue'
import EleBreadcrumb from './Breadcrumb.vue'
import type { IDefineComponent, ICheckboxProps } from '../types/index'

EleBreadcrumb.install = (app: App) => {
  app.component(EleBreadcrumb.name || 'EleCheckbox', EleBreadcrumb)
}

export default EleBreadcrumb as IDefineComponent<ICheckboxProps>
