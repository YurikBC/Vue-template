import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { activate } from './router/routerController'
require('../src/assets/style.scss')
activate()
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
