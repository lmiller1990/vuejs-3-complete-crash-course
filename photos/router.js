import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm.js'
import PhotoApp from './PhotoApp.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'root',
      path: '/',
      component: PhotoApp
    }
  ]
})
