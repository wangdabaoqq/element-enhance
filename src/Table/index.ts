import type { App } from 'vue'
import { objectDeepMerge } from '../utils/index'
import { config } from '../utils/config'
import EleTable from './Table.vue'
import type {
  InstallOptions,
  IDefineComponent,
  ITableProps,
} from '../types/index'

EleTable.install = (app: App, options?: InstallOptions) => {
  const _options = options
    ? objectDeepMerge<Required<InstallOptions>>(config, options)
    : config

  app.config.globalProperties.$PROOPTIONS = _options

  app.component(EleTable.name || 'EleTable', EleTable)
}

export default EleTable as IDefineComponent<ITableProps>
