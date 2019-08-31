import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/main/index.vue'
import Home from '../pages/main/home/index.vue'
import Result from '../pages/main/result/index.vue'

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
        }
      ]
    }
  ]
})
