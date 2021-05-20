import type { App } from 'vue'
import EleAutocompleteTag from './AutocompleteTag.vue'
import type { IDefineComponent, IAutocompleteTagProps } from '../types/index'

EleAutocompleteTag.install = (app: App) => {
  app.component(
    EleAutocompleteTag.name || 'EleAutocompleteTag',
    EleAutocompleteTag
  )
}

export default EleAutocompleteTag as IDefineComponent<IAutocompleteTagProps>
