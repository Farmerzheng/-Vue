<template>
<div class="star" :class='bg_position'></div>
</template>

<script>
export default{
	props:["starType"],
	computed:{
		bg_position(){
           
          var position='';
         
          if(this.starType>4.5&&this.starType<=5){
            position = 'bg_position_5'
          }else if(this.starType>4&&this.starType<=4.5){
            position = 'bg_position_4_5'
          }else if(this.starType>3.5&&this.starType<=4){
            position = 'bg_position_4'
          }else if(this.starType>3&&this.starType<=3.5){
            position = 'bg_position_3_5'
          }else if(this.starType>2.5&&this.starType<=3){
            position = 'bg_position_3'
          }else if(this.starType>2&&this.starType<=2.5){
            position = 'bg_position_2_5'
          }else if(this.starType>1.5&&this.starType<=2){
            position = 'bg_position_2'
          }else if(this.starType>1&&this.starType<=1.5){
            position = 'bg_position_1_5'
          }else if(this.starType>0.5&&this.starType<=1){
            position = 'bg_position_1'
          }else if(this.starType>0&&this.starType<=0.5){
            position = 'bg_position_0_5'
          }else if(this.starType==0){
            position = 'bg_position_0'
          }
         
          return position;
          			
		}
	}
}
</script>

<style>
.star{
	width:4.266667rem;
	height:0.768rem;
	background-image: url(star.png);
	background-size: 4.266667rem 8.32rem;
  display:inline-block
}
.bg_position_5{
  background-position: 0px 0px;
}
.bg_position_4_5{
  background-position: 0px -0.768rem;
}
.bg_position_4{
  background-position: 0px -1.536rem;
}
.bg_position_3_5{
  background-position: 0px -2.304rem;
}
.bg_position_3{
  background-position: 0px -3.072rem;
}
.bg_position_2_5{
  background-position: 0px -3.84rem;
}
.bg_position_2{
  background-position: 0px -4.608rem;
}
.bg_position_1_5{
  background-position: 0px -5.376rem;
}
.bg_position_1{
  background-position: 0px -6.144rem;
}
.bg_position_0_5{
  background-position: 0px -6.912rem;
}
.bg_position_0{
  background-position: 0px -7.68rem;
}

</style>

