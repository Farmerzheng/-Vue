<template>
	<div class="btn_wrap">

	    <transition name='show'>
	    	<span class="minus" @click="minus" v-show='food.count'>
			   <i class="icon-remove_circle_outline"></i>
		    </span>
	    </transition>	
		
        <span class="val" v-show='food.count'>{{food.count}}</span>

		<span class="plus" @click="add">
			<i class="icon-add_circle"></i>
		</span>
	</div>
</template>

<script>

import Vue from 'vue'
 export default{
	props:{
       food:{
       	type:Object
       }
	     
	},	
	data(){
		return {}
	},
	computed:{
      
	},
	methods:{
       add(){
       	// alert(1);
       	if(!this.food.count){
       			Vue.set(this.food,'count',0);
       		// this.food.count=0;
       		console.log("没有count属性");
       	}
       	// console.log(this.food.count)
       	this.food.count++;
       	console.log(this.food.count)
       },
       minus(){
       	if(!this.food.count)return;
       	  this.food.count--;
       }
	},
	mounted(){
		// console.log(this.food)
		Vue.set(this.food,'count',0);
		// consolt.log(food)
	}
       
}
</script>

<style>
  .btn_wrap{
  	font-size: 1.28rem;
  	display: inline-block;
  	line-height: 1.28rem;
  	height:1.28rem;
  	width:4.266667rem;
  	color:#00a0dc;
  	position: relative;
  }
  .btn_wrap span{
  	display: inline-block;
  }
  .btn_wrap .minus{
    position: absolute;
    left: 0;
    top:0;
  } 
  .btn_wrap .val{
  	position: absolute;
  	font-size: 0.682667rem;
  	height: 1.28rem;
  	line-height: 1.28rem;
  	color:#999;
  	left:1.493333rem;
  	top:0;
  }
  .btn_wrap .plus{
   position: absolute;
   left: 2.133333rem;
   top:0;
  }


   .show-enter-active, .show-leave-active{
   	transition: 1s all ease;
   }

   .show-enter-active{
   	opacity:1;
   /*	width:300px;
   	height:300px;*/
   	transform: translate3D(0,0,0) rotate(0);

   }
   .show-leave-active{
   	opacity:0;
  /* 	width:100px;
   	height:100px;*/
   	transform: translate3D(2.13rem,0,0) rotate(240deg);
   }

   .show-enter,.show-leave{
   	opacity:0;
   /*	width:100px;
   	height:100px;*/
   	transform: translate3D(2.13rem,0,0) rotate(240deg);
   }
</style>