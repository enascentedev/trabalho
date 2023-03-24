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
      path: '/clientes',
      name: 'clientes',
      // route level code-splitting
      // this generates a separate chunk (contato.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/clientes.vue')
    },

    {
      path: '/conteudos',
      name: 'conteudos',
      // route level code-splitting
      // this generates a separate chunk (contato.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/conteudos.vue')
    },

    {
      path: '/solucoes',
      name: 'solucoes',
      // route level code-splitting
      // this generates a separate chunk (contato.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/solucoes.vue')
    }
  ]
})

export default router
