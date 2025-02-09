import { setupI18n } from '@/locales'
import { setupDayjs, setupNProgress, setupVueRouter } from '@/plugins'
import { setupStore } from '@/store'
import { createApp } from 'vue'
import App from './App.vue'
import './plugins/assets'

async function setupApp() {
  setupNProgress()
  setupDayjs()
  const app = createApp(App)
  setupStore(app)
  setupVueRouter(app)
  setupI18n(app)
  app.mount('#app')
}

setupApp()
