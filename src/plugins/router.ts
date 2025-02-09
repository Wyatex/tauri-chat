import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

/** Setup plugin VueRouter */
export function setupVueRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(),
    // pass the generated routes written by the plugin 🤖
    routes,
  })
  app.use(router)
}
