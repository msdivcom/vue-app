import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Page from '@/views/Page'
import Post from '@/views/Post'
import VueProgressBar from 'vue-progressbar'
Vue.use(Router)
Vue.use(VueProgressBar, {
  color: 'rgb(17,178,138)',
  failedColor: 'red',
  thickness: '4px'
})

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
