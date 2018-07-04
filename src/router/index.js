import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Page from '@/views/Page'
import Post from '@/views/Post'

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
    },
    {
      path: '/posts/:slug',
      name: 'Post',
      component: Post
    }

  ]
})
