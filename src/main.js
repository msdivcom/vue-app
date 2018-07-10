// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'

Vue.use(VueResource)
Vue.config.productionTip = false

Vue.http.headers.common["Content-Type"] = "application/json"
Vue.http.headers.common["Accept"] = "application/json"
Vue.http.headers.common["Authorization"] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2FuZGJveC5rb21hY2hpLnBvbXplZC5jaFwvd3AiLCJpYXQiOjE1MzEyMTAzNzgsIm5iZiI6MTUzMTIxMDM3OCwiZXhwIjoxNTMxODE1MTc4LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.Tu-4Km8AAHB-bYEwYDXWIje0RACeERLLpBan5gjyCxM"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
