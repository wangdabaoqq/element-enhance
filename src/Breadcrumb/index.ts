import type { App } from 'vue'
import EleBreadcrumb from './Breadcrumb.vue'
import type { IDefineComponent, IBreadcrumbProps } from '../types/index'

EleBreadcrumb.install = (app: App) => {
  app.component(EleBreadcrumb.name || 'EleBreadcrumb', EleBreadcrumb)
}

export default EleBreadcrumb as IDefineComponent<IBreadcrumbProps>
