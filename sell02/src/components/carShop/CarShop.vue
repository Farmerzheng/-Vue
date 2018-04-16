<template>
<div class="carshop_wrapper">
    <div class="car_shop">
    <div class="wrapper">
        <div class="car_shop_left" @click='showShopList'>
        <span class="ico" >
          <i class="icon-shopping_cart" :class="{highlight:selectedGoods.length}"></i>
          <span class="goodsNum" v-show="goodsNum>0">{{goodsNum}}</span>
        </span>
        <span class="totalPrice" :class="{highlightPrice:totalPrice>0}">￥{{totalPrice}}</span>
        <span class="bar">|</span>
        <span class="delivery_price">
        令需配送费{{deliveryPrice}}元
        </span>
      </div>
      <div class="car_shop_right">
        <span class="decrease" v-show="!payShow">还差{{decreasePrice}}元起送</span>
        <span class="pay" v-show="payShow">去结算</span>
      </div>  
    </div>  
      <transition name="showList">
        <div class="shop_list_wrapper" v-show='!fold'>
          <ShopList :selected='selectedGoods'></ShopList>   
        </div>
      </transition>  
    </div>    
</div>
</template>

<script>
import ShopList from "../shopList/ShopList.vue"
export default{
	props:{
        selectedGoods:{
        	type:Array,
        	default(){
               return [
                 {
                 	price:10,
                 	count:2
                 },
                 {
                 	price:20,
                 	count:3
                 }
               ]
        	}
        },
        deliveryPrice:{
        	type:Number,
        	default:4
        },
        minPrice:{
        	type:Number,
        	default:20
        }
	     
	},
	computed:{
       totalPrice(){
         var goodArr = this.selectedGoods;
         var price=0;
         for(let i=0;i<goodArr.length;i++){
           price += goodArr[i].price*goodArr[i].count
         }
       	return price;
       },
       goodsNum(){
        var goodArr = this.selectedGoods;
         var num=0;
         for(let i=0;i<goodArr.length;i++){
           num += goodArr[i].count
         }
       	return num;
       },
       payShow(){
       	 if(this.totalPrice>this.minPrice){
       	 	return true
       	 }else{
       	 	return false
       	 }
       },
       decreasePrice(){
       	return this.minPrice-this.totalPrice
       }
       // selectedFoodArr(){
       //      var goodArr = this.selectedGoods;
       //      var arr=[];
       //      for(let i=0;i<goodArr.length;i++){
       //       arr.push(goodArr[i]);
       //      }
       //      return arr;
       // }
	},
	data(){
       return {
        fold:true
       }
	},
	methods:{
    showShopList(){
       this.fold = !this.fold;
    }
	},
  components:{ShopList}
}
</script>

<style>

.car_shop{
	width:16.0rem;
	height: 2.133333rem;
	position: fixed;
	bottom:0;
	font-size: 0
}
.car_shop .wrapper{
  width:100%;
  height:100%;
  position: absolute;
  left:0;
  top:0;    
  background-color: #141d27;
  z-index:100;
} 
.car_shop .car_shop_left{
    display: inline-block;
    width:11.52rem;
    height: 2.133333rem;
    line-height: 2.133333rem;
    font-size: 0;
    position:absolute;
    left: 0;
    top:0;
}
.car_shop .car_shop_left .ico{
   display: inline-block;
   width:2.389333rem;
   height:2.389333rem;
   position: absolute;
   left: 0.768rem;
   bottom: 0.341333rem;
   border-radius: 1.194667rem;
   background-color: #141d27;
   font-size: 0;

}
.car_shop .car_shop_left .ico i{
   display: inline-block;
   width:1.877333rem;
   height: 1.877333rem;
   font-size: 1.28rem; 
   border-radius: 0.938667rem;
   margin:0.256rem;
   background-color: rgba(255,255,255,0.2);
   line-height: 1.877333rem;
   text-align: center;
}
.car_shop .car_shop_left .ico .goodsNum{
   position:absolute;
   display: inline-block;
   height: 0.512rem;
   padding:0.106667rem 0.213333rem;
   border-radius: 0.362667rem;
   line-height: 0.512rem;
   background-color: red;
   color:#fff;
   font-size: 0.384rem;
   font-weight: 700;
   left:1.28rem;
   top:0;
   box-shadow: 0.042667rem 0.042667rem 0.042667rem #000
}
.car_shop .car_shop_left .totalPrice{
   font-size: 0.682667rem;
   color:rgba(255,255,255,0.4);
   font-weight: 700;
   /*display: inline-block;*/
   /*height: 2.133333rem;*/
   /*line-height: 2.133333rem;*/
   margin-left: 3.413333rem;
}
.car_shop .car_shop_left .bar{
    color: rgba(255,255,255,0.3);
    font-size: 1.066667rem;
    margin-left: 0.512rem
}
.car_shop .car_shop_left .delivery_price{
	font-size: 0.512rem;
	color:rgba(255,255,255,0.4);
	margin-left: 0.512rem;
}
.car_shop .car_shop_right{
	position: absolute;
	right:0;
	top:0;
    display: inline-block;
    width:4.48rem;
    height: 2.133333rem;
    background-color: rgba(255,255,255,0.4);
}
.car_shop .car_shop_right span{
	display: inline-block;
	width:100%;
	height:100%;
	font-weight: 700;
	font-size: 0.682667rem;
	line-height: 2.133333rem;
	text-align: center;
	color:#979a9c;
}
.car_shop .car_shop_right .pay{
	background-color: green;
	color:#fff;
}

.highlight{
	background-color: rgb(0,160,220)!important;
	color:#fff!important;
}
.highlightPrice{
	color:#fff!important;
} 
.shop_list_wrapper{
  width:16.0rem;
  height: 11.093333rem;
  background-color: red;
  position:absolute;
  left:0;
  top:-11.093333rem;
  z-index: -100
}

.showList-enter-active, .showList-leave-active{
  transition: 1s all ease;
}

.showList-enter-active{
  opacity:1;
   /* width:300px;
   height:300px;*/
   transform: translate(0,0);

 }
 .showList-leave-active{
   opacity:0;
   /*  width:100px;
   height:100px;*/
   transform: translate(0,11.093333rem);
}

.showList-enter{
   opacity:0;
   /* width:100px;
   height:100px;*/
   transform: translate(0,11.093333rem);
 }
 .showList-leave{
   opacity:0;
   transform: translate(0,11.093333rem);
 }

</style>