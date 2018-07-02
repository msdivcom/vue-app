import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Page from '@/views/Page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:slug',
      name: 'Page',
      component: Page
    }
  ]
})
