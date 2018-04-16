import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'
import './assets/CSS/animate.css'

Vue.use(VueRouter);

const router = new VueRouter(routerConfig);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
