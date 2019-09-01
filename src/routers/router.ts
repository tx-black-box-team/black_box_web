import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/index.vue'
import Home from '@/pages/main/home/index.vue'
import Result from '@/pages/main/result/index.vue'
import Hero from '@/pages/main/hero/index.vue'
import Forces from '@/pages/main/forces/index.vue'
import Pavilion from '@/pages/main/pavilion/index.vue'
import Role from '@/pages/main/role/index.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/result/:search',
          name: 'result',
          component: Result
        },
        {
          path: '/hero',
          name: 'hero',
          component: Hero
        },
        {
          path: '/forces',
          name: 'forces',
          component: Forces
        },
        {
          path: '/pavilion',
          name: 'pavilion',
          component: Pavilion
        },
        {
          path: '/role',
          name: 'role',
          component: Role
        }
      ]
    }
  ]
})
