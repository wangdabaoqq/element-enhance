import Layout from './App.vue'
import { App, createApp as _createApp, createSSRApp } from 'vue'
import { createRouter } from './router/index'
import { Router } from 'vue-router'
import {
  ElButton,
  ElInput,
  ElUpload,
  ElTag,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElDatePicker,
} from 'element-plus'
import ElementEnhance from '/@src/index'
import EleCode from './components/EleCode.vue'
import 'element-plus/lib/theme-chalk/index.css'
import './styles/index.css'

export function createApp(): {
  app: App<Element>
  router: Router
} {
  const app =
    import.meta.env.MODE === 'production'
      ? createSSRApp(Layout)
      : _createApp(Layout)
  const router = createRouter()

  app
    .use(router)
    .component('EleCode', EleCode)
    .use(ElButton)
    .use(ElInput)
    .use(ElUpload)
    .use(ElTag)
    .use(ElDropdown)
    .use(ElDropdownItem)
    .use(ElDropdownMenu)
    .use(ElDatePicker)
    .use(ElementEnhance)

  return { app, router }
}
