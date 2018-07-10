// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'

Vue.use(VueResource)
Vue.config.productionTip = false

Vue.http.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zYW5kYm94LmtvbWFjaGkucG9temVkLmNoXC93cCIsImlhdCI6MTUzMTIwMjk2OCwibmJmIjoxNTMxMjAyOTY4LCJleHAiOjE1MzE4MDc3NjgsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.4yjNvMSq4sqXr8UU285N22XYpTatPdu_kEBeUV6JM80'

Vue.http.headers.common['Access-Control-Expose-Headers'] = 'Authorization'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
