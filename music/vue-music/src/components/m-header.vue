<template>
  <div class="m-header active-col">
  	<h1>Chicken Music</h1>
  </div>
</template>

<script>
export default {

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-header{
	background-color: #222;
	position: relative;
	z-index: 1001;
	text-align: center;
	padding: 10px 0;
}
.m-header h1{
	height: 1.28rem;
	width:6.187rem;
    /*margin:10px auto;*/
    display: inline-block;
	text-align: right;
	line-height: 1.28rem;
	background-image: url(../assets/img/default.png);
	background-repeat: no-repeat;
	background-size:contain;
	background-position: 0 0;
	font-size:0.64rem;
}
</style>
