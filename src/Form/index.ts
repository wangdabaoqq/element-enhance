import type { App } from 'vue'
import { objectDeepMerge } from '../utils/index'
import { config } from '../utils/config'
import EleForm from './Form.vue'
import type {
  InstallOptions,
  IDefineComponent,
  IFormProps,
} from '../types/index'

EleForm.install = (app: App, options?: InstallOptions) => {
  const _options = options
    ? objectDeepMerge<Required<InstallOptions>>(config, options)
    : config

  app.config.globalProperties.$PROOPTIONS = _options

  app.component(EleForm.name || 'EleForm', EleForm)
}

export default EleForm as IDefineComponent<IFormProps>
