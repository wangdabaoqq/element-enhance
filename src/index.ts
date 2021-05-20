export * from './composables/index'
export * from './utils/index'
export * from './types/index'
import './styles/index.css'
import type { App } from 'vue'
import type { IDefineComponent, InstallOptions } from './types/index'
import { objectDeepMerge } from './utils/index'
import { config } from './utils/config'

import ProAutocompleteTag from './AutocompleteTag/index'
import EleBreadcrumb from './Breadcrumb/index'
import ProCheckbox from './Checkbox/index'
import ProCheckboxButton from './CheckboxButton/index'
import ProColumnSetting from './ColumnSetting/index'
import ProCrud from './Crud/index'
import ProForm from './Form/index'
import ProInputTag from './InputTag/index'
import EleLayout from './Layout/index'
import EleMenu from './Menu/index'
import ProRadio from './Radio/index'
import ProRadioButton from './RadioButton/index'
import ProSelect from './Select/index'
import ProTable from './Table/index'
import EleTabs from './Tabs/index'

const components: Record<string, IDefineComponent> = {
  ProAutocompleteTag,
  EleBreadcrumb,
  ProCheckbox,
  ProCheckboxButton,
  ProColumnSetting,
  ProCrud,
  ProForm,
  ProInputTag,
  EleLayout,
  EleMenu,
  ProRadio,
  ProRadioButton,
  ProSelect,
  ProTable,
  EleTabs,
}

const install = (app: App, options?: InstallOptions): void => {
  const _options = options
    ? objectDeepMerge<Required<InstallOptions>>(config, options)
    : config

  app.config.globalProperties.$PROOPTIONS = _options

  for (const key in components) {
    const item = components[key]
    app.component(item.name || key, item)
  }
}

export {
  ProAutocompleteTag,
  EleBreadcrumb,
  ProCheckbox,
  ProCheckboxButton,
  ProColumnSetting,
  ProCrud,
  ProForm,
  ProInputTag,
  EleLayout,
  EleMenu,
  ProRadio,
  ProRadioButton,
  ProSelect,
  ProTable,
  EleTabs,
  install,
}

export default { install }
