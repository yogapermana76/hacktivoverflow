import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import questionDetail from './views/questionDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/question/:id',
      name: 'questionDetail',
      component: questionDetail
    }
  ]
})
