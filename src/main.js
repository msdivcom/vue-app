// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.http.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zYW5kYm94LmtvbWFjaGkucG9temVkLmNoXC93cCIsImlhdCI6MTUzMTE0MDEzMSwibmJmIjoxNTMxMTQwMTMxLCJleHAiOjE1MzE3NDQ5MzEsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.15q33tmPivaNRdHI9x3OsEDyiWJJ8un9HkOLvub_ZBo'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
