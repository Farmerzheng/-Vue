import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../components/goods/Goods.vue'
import Seller from '../components/seller/Seller.vue'
import Ratings from '../components/ratings/Ratings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/ratings',
      component: Ratings
    },
    {
      path: '/seller',
      component: Seller
    },
    { path: '*',
      redirect: '/goods'
    }
  ]
})
