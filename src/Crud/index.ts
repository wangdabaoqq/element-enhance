import type { App } from 'vue'
import { objectDeepMerge } from '../utils/index'
import { config } from '../utils/config'
import EleCrud from './Crud.vue'
import type {
  InstallOptions,
  IDefineComponent,
  ICrudProps,
} from '../types/index'

EleCrud.install = (app: App, options?: InstallOptions) => {
  const _options = options
    ? objectDeepMerge<Required<InstallOptions>>(config, options)
    : config

  app.config.globalProperties.$PROOPTIONS = _options

  app.component(EleCrud.name || 'EleCrud', EleCrud)
}

export default EleCrud as IDefineComponent<ICrudProps>
