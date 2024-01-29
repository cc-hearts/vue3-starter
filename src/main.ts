import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import '@/assets/scss/index.scss'
import './main.css'
import './modules/i18n'
import { initTheme } from '@/hooks'
import { fn } from '@cc-heart/utils/helper'

interface Modules {
  setup: fn
}

initTheme()

const app = createApp(App)

Object.entries(import.meta.glob('./modules/*.ts', { eager: true })).forEach(
  ([, Module]) => {
    ;(Module as Modules).setup?.({ app })
  }
)

app.mount('#app')
