<template>
  <div id="app">
  	<m-header></m-header>
  	<tab></tab>
    <player></player>	
  	<!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/m-header';
import Tab from './components/tab/tab';
import Player from './baseComponents/player/player'

export default {
  components:{
  	MHeader,
  	Tab,
    Player
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
}
</style>
