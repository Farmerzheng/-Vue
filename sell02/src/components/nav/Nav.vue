<template>
<div>
  <div class="tab_wrap">
  	<ul class="tab">
  		<li class="tab_item">
  		  <router-link to="/goods">商品</router-link>
  		</li>
  		<li class="tab_item">
  		  <router-link to="/ratings">评价</router-link>
  		</li>
  		<li class="tab_item">
  		  <router-link to="/seller">商家</router-link>
  		</li>
  	</ul>
  </div> 
  <router-view></router-view>
  
</div>
</template>

<script>

</script>

<style>
div.tab_wrap{
	width:16.0rem;
	font-size: 0.597333rem
}
ul.tab{
	width:16.0rem;
	height:1.706667rem;
	line-height:1.706667rem;
	border-bottom: 1px solid #999	
}
ul.tab>li.tab_item{
	float: left;
	width:5.333333rem;
	text-align: center;
}
ul.tab>li.tab_item>a{
	display: inline-block;
	width: 100%;
	height:100%;
}
.router-link-active{
	color:#f01414;
}
</style>

