import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/css/base.css';
import fastclick from 'fastclick';
import Rem from './assets/js/rem';
import VueLazyload from 'vue-lazyload'
import store from './store/index'
import './assets/css/base.css'
import './assets/css/icon.css'

Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: require('./assets/img/default.png')
  // attempt: 1
});

fastclick.attach(document.body);

Rem(document,window);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
});
