import Vue from 'vue';
import Router from 'vue-router';
import Ranking from '../components/ranking/ranking';
import Recommend from '../components/recommend/recommend'
import Singer from '../components/singer/singer';
import Search from '../components/search/search'
import singerDetail from '../components/singer/singer-detail.vue'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/recommend' },
    { path: '/ranking', component: Ranking },
    { path: '/recommend', component: Recommend },
    {
      path: '/singer',
      component: Singer,
      children:[
       {
       	path:":id",
       	component:singerDetail
       }
      ]
    },
    { path: '/search', component: Search }
  ]
});
