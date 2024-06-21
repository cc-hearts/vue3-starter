import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import '@/assets/scss/index.scss'
import './modules/i18n'
import { initTheme } from '@/hooks'
import type { Fn } from '@cc-heart/utils/helper'
interface Modules {
  setup: Fn
}

initTheme()

const app = createApp(App)

Object.entries(import.meta.glob('./modules/*.ts', { eager: true })).forEach(
  ([, Module]) => {
    ;(Module as Modules).setup?.({ app })
  },
)

app.mount('#app')
