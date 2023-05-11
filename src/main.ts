import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import '@/assets/scss/theme.scss'

const app = createApp(App)

Object.entries(import.meta.glob('./modules/*.ts', { eager: true })).forEach(([, Module]) => {
  Module.setup?.({ app })
})
app.mount('#app')