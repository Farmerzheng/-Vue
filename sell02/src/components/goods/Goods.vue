<template>
  <div class="goods_content">
   <div class="goods_menu">
    <ul>
     <li class="goods_menu_item" v-for='(item,index) in goods' @click="goodScroll(index)
     ">
     <span>{{item.name}}</span>
   </li>
 </ul>
</div>
<div class="goods_list">
  <ul class="goods_list_wrapper">
   <li v-for="item in goods" class="menu_item">
    <span class="menu_title" ref='item.name'>{{item.name}}</span>
    <ul class="menu_content">
     <li v-for="goodItem in item.foods" class="menu_item_content">
      <div class="icon">
       <img :src="goodItem.icon" alt="">					
     </div>
     <div class="content">
       <p class="name">{{goodItem.name}}</p>
       <p class="description">{{goodItem.description}}</p>
       <p class="seller">
        <span>月售{{goodItem.sellCount}}份</span>
        <span>好评率{{goodItem.rating}}%</span>
      </p>
      <p class="price">
        <span class="now">￥{{goodItem.price}}</span>
        <span v-show="goodItem.oldPrice" class="old">￥{{goodItem.oldPrice}}</span>

      </p>
    </div>
    <span class="car_ctrol_wrap">
      <CarCtrl :food="goodItem" ></CarCtrl>
    </span>
  </li>
</ul>
</li>
</ul>
</div> 
<CarShop :selectedGoods='selectedArr'></CarShop>	
</div>	

</template>

<script>
import CarShop from '../carShop/CarShop.vue'
import CarCtrl from '../carCtrol/CarCtrl.vue'
export default{
	data(){
        return {
        	goods:'',
        	timer:null,
        	previousScrollTop:0
        }
	},
	computed:{
		selectedArr(){
			let foods=[];
			for(let i=0;i<this.goods.length;i++){
				for(let j=0;j<this.goods[i].foods.length;j++){
                      if(this.goods[i].foods[j].count){
                      	foods.push(this.goods[i].foods[j]);
                      }
				}
			}
			return foods;
		}
	},
	methods:{
        goodScroll(index){
           // alert(1);
           // console.log(this.$refs['item.name'][index],index)
           // console.log(this.$refs['item.name'][index].parentNode.offsetTop)
           // this.$refs['item.name'][index].parentNode.style.top = "0px"
           // this.$refs['item.name'][index].parentNode.parentNode.scorllTop = -this.$refs['item.name'][index].parentNode.offsetTop +"px"
           // console.log(this.$refs['item.name'][index].parentNode.parentNode);
           var menuList = document.querySelectorAll('.goods_menu_item');
           // console.log(this);
           for(let i = 0 ; i <menuList.length ; i++ ){
           	menuList[i].style.backgroundColor = "#f3f5f7"
           }
           
           menuList[index].style.backgroundColor  = "#fff";

           var self = this;
           var top = this.$refs['item.name'][index].parentNode.offsetTop;         
           var scrollDiv = this.$refs['item.name'][index].parentNode.parentNode;
           // var scrollTop = 0;
            // scrollTop = 0;

           var speed = 50;

           clearInterval(this.timer);

           // this.timer = setInterval(function(){
              
              // if(scrollTop>=top){
              // 	clearInterval(self.timer);
              // 	self.$refs['item.name'][index].parentNode.parentNode.style.top = -top+'px';
              // }else{

              	if(self.previousScrollTop >= scrollDiv.offsetTop){
	                 //向上滚动
	                 // console.log('向上滚动');

	                 this.timer = setInterval(function(){

	                 	scrollDiv.style.top = (scrollDiv.offsetTop-speed) +"px";

	                 	// co
	                 	// nsole.log(scrollDiv.style.top,scrollDiv.offsetTop);
	                 	if(scrollDiv.offsetTop < -top){
	                 		scrollDiv.style.top = -top+'px';
	                 		clearInterval(self.timer)
	                 	}

	                 },20);
	             

	             // if(scrollDiv.offsetTop>=top){
              //       clearInterval(self.timer)
	             // }

              	}else{
              	//向下滚动
                 // scrollDiv.style.top = -(scrollDiv.offsetTop +speed) +"px";
              //    if(scrollDiv.offsetTop<=top){
              //       clearInterval(self.timer)
	             // }
	             // console.log('向下滚动');
	                 this.timer = setInterval(function(){

	                 	scrollDiv.style.top = (scrollDiv.offsetTop+speed) +"px";

	                 	// console.log(scrollDiv.style.top,scrollDiv.offsetTop);
	                 	if(scrollDiv.offsetTop > -top){
	                 		scrollDiv.style.top = -top+'px';
	                 		clearInterval(self.timer)
	                 	}

	                 },20);

              	}

              	
              // }
             
           // },10);

            //记录原来的scrollTop 
            this.previousScrollTop = this.$refs['item.name'][index].parentNode.parentNode.offsetTop;
        }
	},
	mounted(){
		 this.$http.get('./api/goods').then((response) => {
          // success callback
          console.log(response.body.data);
          this.goods=response.body.data;
        }, (response) => {
          // error callback
        });
	},
	components:{  CarShop , CarCtrl }
}
</script>

<style>
 .goods_content{
 	position:absolute;
 	width:16.0rem;
 	left:0;
 	top:8.586667rem;
 	bottom:2.133333rem;
 	font-size: 0.597333rem;
 	overflow-y: hidden;
 }
 .goods_content .goods_menu{
 	width:3.2rem;
 	background-color: #f3f5f7;
 	font-size: 0.512rem;
 	float:left;
 	height: 100%;
 	overflow-y: scroll;
 }
  .goods_content .goods_menu ul{
  	width:3.2rem;
  }
 .goods_content .goods_menu .goods_menu_item{
  	height:2.304rem;
  	line-height: 2.304rem;
  	text-align: center
  }
 .goods_content .goods_menu .goods_menu_item span{
 	display: inline-block;
 	width:2.346667rem;
 	height:2.304rem;
 	border-bottom:1px solid #dbdee1
 }
  .goods_content .goods_list{
  	float:right;
  	width:12.8rem;
  	height: 100%;
  	overflow-y: scroll;
  	position: relative;
  }
    .goods_content .goods_list .goods_list_wrapper{
    	width:12.8rem;
    	position:absolute;
    	left:0;
    	top:0;   	
    }
  .goods_content .goods_list .menu_item .menu_title{
    display: inline-block;
  	width:100%;
  	height:1.066667rem;
  	line-height: 1.066667rem;
  	font-size: 0.512rem;
  	color:rgb(147,153,159);
  	background-color: #f3f5f7;
    border-left: 0.021333rem solid #dfdde1;
    padding-left: 0.554667rem;
    box-sizing: border-box;
  }
   .goods_content .goods_list .menu_item .menu_content .menu_item_content{
   	font-size: 0;
   	position: relative;
   	padding-bottom:0.768rem;
   }
   .goods_content .goods_list .menu_item .menu_content .menu_item_content:after{
       content: "";
    display: inline-block;
    width: 11.093333rem;
    height: 1px;
    position: relative;
    z-index: 49;
    bottom: -0.768rem;
    left: 0.768rem;
    background:rgba(7,17,27,0.2);
   }
  .goods_content .goods_list .menu_item .menu_content .menu_item_content .icon{
  	width:2.56rem;
  	height: 2.56rem;
  	padding-top:0.768rem;
  	padding-left: 0.768rem;
  	display: inline-block;
  }
  .goods_content .goods_list .menu_item .menu_content .menu_item_content .content {
     display: inline-block;
     margin-left: 0.341333rem;

  }
  .goods_content .goods_list .menu_item .menu_content .menu_item_content .content .name{
     font-size: 0.597333rem;
     color:rgb(7,17,27);
  }
  .goods_content .goods_list .menu_item .menu_content .menu_item_content .content .description{
  	font-size: 0.426667rem;
  	color:rgb(147,153,159);
  }
  .goods_content .goods_list .menu_item .menu_content .menu_item_content .content .seller{
  	font-size: 0.426667rem;
  	color:rgb(147,153,159);
  }
  .goods_content .goods_list .menu_item .menu_content .menu_item_content .content .price .now{
   font-size: 0.597333rem;
   font-weight: 700;
   color:red;
   line-height: 1.024rem;
   vertical-align: middle
  }
  .goods_content .goods_list .menu_item .menu_content .menu_item_content .content .price .old{
   font-size: 0.426667rem;
   font-weight: 700;
   color:rgb(147,153,159);
   line-height: 48px;
   vertical-align: middle
  }
  .goods_content .goods_list .menu_item .menu_content .menu_item_content .car_ctrol_wrap{
  	display: inline-block;
  	width:4.266667rem;
  	height: 1.28rem;
  	position:absolute;
  	bottom:0.64rem;
  	right:0.64rem;
  }
</style>