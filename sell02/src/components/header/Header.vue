<template>
<div class="header">
	<dl class="wraper">
		<dt class="avatar">
		  <img :src="msg.avatar" alt="">
		</dt>
		<dd class="description">
			<p class="title">
				<span class="brand"></span>
				<span class="name">{{msg.name}}</span>
			</p>
			<p class="delivery">
				<span>{{msg.description}}</span>
				<span>{{msg.deliveryTime}}</span>分钟送达
			</p>
			<p class="supports" v-if="msg.supports">
			   <span class="icon"></span>
			   <span class="text">{{msg.supports[0].description}}</span>		
			</p>
		</dd>
         <span class="more" v-if="msg.supports" @click="show">
         	{{msg.supports.length}}个&gt;
         </span>
	</dl>
	<p class="notice">
		<span class="bulletin"></span>
		<span class="text">{{msg.bulletin}}</span>
		<span class="ico" @click="show">&gt;</span>
	</p>
	<div class="bg">
		<img :src="msg.avatar" alt="">
	</div>
	<transition name='fade'>
		<div class="detail" v-show="showDetail">
		<div class="detail_wraper">
			<h1 class="title" >{{msg.name}}</h1>
			<div class="star_wrap">
				<Star :starType='msg.score'></Star>
			</div>
			<div class="discount">
				<span>优惠信息</span>
			</div>
			<ul class="supports" v-for="item in msg.supports">
				<li>
					<span class="icon">{{item.type}}</span>
					<span class="text">{{item.description}}</span>
				</li>
			</ul>
			<div class="notice">
				<span>商家公告</span>

			</div>
			<div class="notice_content">
				<span>{{msg.bulletin}}</span>
			</div>
		</div>
		<div class="close" @click='hide'>&times;</div>	
	</div>
	</transition>
	
</div>	
</template>

<script>
import Star from '../star/Star.vue'
export default{
	data(){
       return {
       	showDetail:false,
       	msg:""
       }
	},
	// props:['msg'],
	components:{Star},
	methods:{
        show(){
            this.showDetail = true;
        },
        hide(){
           this.showDetail = false
        }
	},
	mounted(){
		// console.log(this.msg)
		this.$http.get('./api/seller').then((response) => {
          // success callback
          // console.log(response.body.data);
          this.msg=response.body.data;
        }, (response) => {
          // error callback
        });
	}
}
</script>

<style>
 .header{
 	width:16.0rem;
 	color:#fff;
 	padding-top:1.024rem;
 	position: relative;
 	overflow: hidden;
 	background-color: rgba(0,0,0,0.5);
 }
 .header .wraper{
 	height:4.522667rem;
 	position:relative;
 }
 .header .wraper .avatar{
 	height:.522667rem;
 	float:left; 	
 	padding-left:1.024rem;
 }
 .header .wraper .avatar img{
 	width:2.730667rem;
 	height: 2.730667rem;
 }
 .header .wraper .description{
 	height:4.522667rem;
 	float:left;
 	padding-left:32px;
 }
 .header .wraper .description .title{
 	font-size: 0.682667rem;
 	font-weight:bold;
 }
 .header .wraper .description .title .brand{
 	display: inline-block;
 	vertical-align: top;
 	width:1.28rem;
 	height:0.768rem;
 	background-image: url('img/brand@2x.png');
 	background-size: 100% 100%
 }
 .header .wraper .description .delivery{
 	font-size: 0.512rem;
 	padding-top:0.341333rem;
 }
 	
 .header .wraper .description .supports{
 	font-size: 0.426667rem;
 	padding-top:0.341333rem;
 }
 .header .wraper .description .supports .icon{
 	display: inline-block;
 	width:0.512rem;
 	height:0.512rem;
 	vertical-align: middle;
 	background-image: url("img/decrease_2@2x.png");
 	background-size:100% 100%;
 }
 .header .wraper .more{
 	display: inline-block;
 	width:1.834667rem;
 	height:1.024rem;
 	position:absolute;
 	background-color: rgba(0,0,0,0.2);
 	right:0.512rem;
 	bottom:0.64rem;
 	border-radius: 0.512rem;
 	font-size: 0.426667rem;
 	line-height: 1.024rem;
 	text-align: center
 }
 .header .notice{
 	width:16.0rem;
 	height:1.28rem;
 	background-color: rgba(7,17,27,0.2);
 	line-height: 1.28rem;
 	white-space: nowrap;
 	text-overflow: ellipsis;
 	overflow: hidden;
 	padding-left: 0.512rem;
 	box-sizing: border-box;
 }
  .header .notice .bulletin{
    width:0.981333rem;
    height: 0.512rem;
    float: left;
    background-image: url("img/bulletin@2x.png");
    background-size: 100% 100%;
    margin-right: 0.170667rem;
    margin-top: 0.351333rem;
  }
  .header .notice .text{
  	float: left;
  	width:12.0rem;
 	height:1.28rem;
 	white-space: nowrap;
 	text-overflow: ellipsis;
 	overflow: hidden;
 	font-size:0.469333rem;
  }
  .header .notice .ico{
  	float: right;
  	margin-right:0.2rem;
  	width:1rem;
  	height:1.28rem;
  	text-align: center;
  	font-size: 0.597333rem  	
  }
  .header .bg{
  	width:16.0rem;
  	height:100%;
  	position:absolute;
  	left:0;
  	top:0;
  	z-index: -1;
  	filter: blur(10px);
  }
  .header .bg img{
  	width:100%;
  }
  .header .detail{
   position:fixed;
   left:0;
   top:0;
   width:100%;
   height: 100%;
   background-color:rgba(0,0,0,0.8);
   overflow: auto;
   z-index: 100;
  }
  .header .detail .detail_wraper{
    width:100%;
    padding:2.730667rem 0px 1.365333rem 0px;
    min-height: 100%;
    box-sizing: border-box;
    font-size: 0.84rem;
    text-align: center
  }
  .header .detail .detail_wraper .title{
  	font-size: 0.682667rem;
  	font-weight:700;
  	line-height: 0.682667rem
  }
  .header .detail .detail_wraper .star_wrap{
    margin-top:0.682667rem;
  }
  .header .detail .detail_wraper .discount{
    margin-top:1.194667rem;
   
  } 
  .header .detail .detail_wraper .discount span{
   	position:relative;
   	font-size: 0.554667rem
   }
  .header .detail .detail_wraper .discount span::before{
    position: absolute;
    content:"";
    display: inline-block;
    width:4.778667rem;
    height:1px;
    left:-4.878667rem;
    top:0.277333rem;
    background-color: rgba(255,255,255,0.9)
  }
  
  .header .detail .detail_wraper .discount span::after{
    position: absolute;
    content:"";
    display: inline-block;
    width:4.778667rem;
    height:1px;
    left:2.4rem;
    top:0.277333rem;
    background-color: rgba(255,255,255,0.9)
  }
  .header .detail .detail_wraper .supports .text{
  	font-size: 0.512rem
  }
    .header .detail .detail_wraper .notice{
    margin-top:1.194667rem;
   
  } 
  .header .detail .detail_wraper .notice span{
   	position:relative;
   	font-size: 0.554667rem
   }
  .header .detail .detail_wraper .notice span::before{
    position: absolute;
    content:"";
    display: inline-block;
    width:4.778667rem;
    height:1px;
    left:-4.878667rem;
    top:0.277333rem;
    background-color: rgba(255,255,255,0.9)
  }
  
  .header .detail .detail_wraper .notice span::after{
    position: absolute;
    content:"";
    display: inline-block;
    width:4.778667rem;
    height:1px;
    left:2.4rem;
    top:0.277333rem;
    background-color: rgba(255,255,255,0.9)
  }
  .header .detail .detail_wraper .notice_content{
  	font-size: 0.597333rem;
  	padding:0.426667rem 2.133333rem;
  }
  .header .detail .close{
    position:relative;
    margin-top:-1.365333rem;
    font-size: 1.28rem;
    text-align: center;
    line-height: 1.365333rem;
    /*background-color: red;*/
    width:100%;
    height:1.365333rem;
  }
 @media(-webkit-min-device-pixel-ratio:3),(-webkit-min-device-pixel-ratio:3){
    .header .wraper .description .title .brand{
 	   background-image: url('img/brand@3x.png');
    }
    .header .wraper .description .supports .icon{
 	background-image: url("img/decrease_2@3x.png");
    }
    .header .notice .bulletin{
    background-image: url("img/bulletin@3x.png");
  }
 }
 .fade-enter-active, .fade-leave-active{
 	transition: 1s all ease;
 }

 .fade-enter-active{
 	opacity:1;
 }
 .fade-leave-active{
 	opacity:0;
 }

 .fade-enter,.fade-leave{
 	opacity:0;
 }

</style>