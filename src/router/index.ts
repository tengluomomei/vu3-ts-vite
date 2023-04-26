import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about/:cardId',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    props: (router) => {
      return {
        cardId: router.params.cardId ? Number(router.params?.cardId) : 0,
      };
    },
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/form/index')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
