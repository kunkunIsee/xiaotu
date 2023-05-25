import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      children:[
        {
          path: '', //当我们页面进入/ 直接会加载 Home页面
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: 'category/:id', //当我们页面进入/ 直接会加载 Home页面
          component: () => import('@/views/Category/index.vue')
        }
      ]
    },
    
    {
      path: '/login', 
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
