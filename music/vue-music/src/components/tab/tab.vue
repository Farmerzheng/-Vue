<template>
  <div class="tab">
  	<!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
  	<router-link to="/recommend" class="tab-item ">推荐</router-link>
    <router-link to="/singer" class="tab-item">歌手</router-link>
    <router-link to="/ranking" class="tab-item" >排行</router-link>
    <router-link to="/search" class="tab-item">搜索</router-link>
  </div>
</template>

<script>
export default {

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab{
	height:1.493rem;
	line-height: 1.493rem;
	display: flex;
	display: -webkit-flex;
	justify-content: space-around;
	font-size: 0.64rem;
  background-color: #222;
  position: relative;
  z-index: 1000;

}
.tab-item{
 color:#a6a6a6;
 flex:auto;
}
.router-link-active{
  color:#ffd733;
  border-bottom:1px solid #ffd733;
}

</style>
