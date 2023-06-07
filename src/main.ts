import App from './App.vue'
import './style.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/Home.vue'),
      name: 'home',
    },
    {
      path: '/another',
      component: () => import('./pages/Another.vue'),
      name: 'another',
    },
  ],
})
app.use(router)

router.isReady().then(() => app.mount('#app'))
