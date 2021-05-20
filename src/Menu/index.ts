import type { App } from 'vue'
import EleMenu from './Menu.vue'
import type { IDefineComponent, IMenuProps } from '../types/index'

EleMenu.install = (app: App) => {
  app.component(EleMenu.name || 'ProMenu', EleMenu)
}

export default EleMenu as IDefineComponent<IMenuProps>
