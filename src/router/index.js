import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contato',
      name: 'contato',
      // route level code-splitting
      // this generates a separate chunk (contato.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/contato.vue')
    },
    {
      path: '/cases',
      name: 'cases',
      // route level code-splitting
      // this generates a separate chunk (contato.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/cases.vue')
    },

    {
      path: '/produtos',
      name: 'produtos',
      // route level code-splitting
      // this generates a separate chunk (contato.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/produtos.vue')
    }
  ]
})

export default router
