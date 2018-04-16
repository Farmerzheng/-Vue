<template>
<div>
	<div class="shop_list_header">
		<span class="car">购物车</span>
		<span class="clear">清空</span>
	</div>
	<div class="shop_list_content">
		<ul>
			<li v-for="item in selected">
				<span class="name">{{item.name}}</span>
				<span class="price">￥{{item.price*item.count}}</span>
                <span class="car_ctrl_wrapper">
                	<CarCtrl></CarCtrl>
                </span>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
import CarCtrl from '../carCtrol/CarCtrl.vue'
  export default{
  	props:{
  		selected:{
        	type:Array,
        	default(){
               return [

                 {
                 	name:'123',
                 	price:10,
                 	count:2
                 },
                 {
                 	name:'456',
                 	price:20,
                 	count:3
                 }
               ]
        	}
        }
  	},
  	data(){
        return {}
  	},
  	methods:{

  	},
  	components:{
  		CarCtrl
  	},
  	computed:{

  	}
  }
</script>

<style>
.shop_list_header{
	width:16rem;
	height:1.706667rem;
	background-color: #f3f5f7;
	border-bottom:0.031333rem solid rgba(7,17,27,0);
	font-size: 0.597333rem;
}
.shop_list_header span{
   height: 1.706667rem;
   line-height: 1.706667rem;
}
.shop_list_header .car{
   float:left;
   padding-left:0.626667rem;
}
.shop_list_header .clear{
   float: right;
   padding-right: 0.626667rem;
   color:rgb(0,160,220);
}
.shop_list_content{
	width:16rem;
	height:9.386667rem;
	background-color: #fff;	
	font-size: 0.597333rem;
	overflow: auto;
}
.shop_list_content ul{
	width:100%;
	background-color: yellow
}
.shop_list_content ul li{
	width:16rem;
	height:2.133333rem;
	line-height: 2.133333rem;
	border-bottom:0.021333rem solid rgba(7,17,27,0.1);
	background-color: #fff
}
.shop_list_content ul li .name{
  padding-left:0.725333rem;
}
.shop_list_content ul li .price{
   padding-left:5.546667rem;
   font-weight: 700;
   color:red;
}
.shop_list_content ul li .car_ctrl_wrapper{

}
</style>

