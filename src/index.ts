export * from './composables/index'
export * from './utils/index'
export * from './types/index'
import './styles/index.css'
import type { App } from 'vue'
import type { IDefineComponent, InstallOptions } from './types/index'
import { objectDeepMerge } from './utils/index'
import { config } from './utils/config'

import EleAutocompleteTag from './AutocompleteTag/index'
import EleCheckbox from './Checkbox/index'
import EleCheckboxButton from './CheckboxButton/index'
import EleColumnSetting from './ColumnSetting/index'
import EleCrud from './Crud/index'
import EleForm from './Form/index'
import EleInputTag from './InputTag/index'
import EleLayout from './Layout/index'
import EleMenu from './Menu/index'
import EleRadio from './Radio/index'
import EleRadioButton from './RadioButton/index'
import EleSelect from './Select/index'
import EleTable from './Table/index'

const components: Record<string, IDefineComponent> = {
  EleAutocompleteTag,
  EleCheckbox,
  EleCheckboxButton,
  EleColumnSetting,
  EleCrud,
  EleForm,
  EleInputTag,
  EleLayout,
  EleMenu,
  EleRadio,
  EleRadioButton,
  EleSelect,
  EleTable,
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
  EleAutocompleteTag,
  EleCheckbox,
  EleCheckboxButton,
  EleColumnSetting,
  EleCrud,
  EleForm,
  EleInputTag,
  EleLayout,
  EleMenu,
  EleRadio,
  EleRadioButton,
  EleSelect,
  EleTable,
  install,
}

export default { install }
