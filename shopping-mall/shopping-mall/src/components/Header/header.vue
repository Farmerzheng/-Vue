<template>
  <div class="header">
    <div class="logo">
      <div class="logo-img left">
        <img src="../../assets/img/header-logo.png" alt="">
      </div>
      <div class="user right">
        <span class="user-login">登录</span>
        <span class="user-logout">退出</span>
        <a class="user-cart" href="">
          <img src="../../assets/img/cart.png" alt="">
        </a>
      </div>
    </div>
    <div class="nav">
      <span class="home">首页</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  

}

.logo {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
}

.logo-img img {
  height: 40px;
  width:100px;
  margin-top:10px;
}

.user span,.user a{
  display: inline-block;
  vertical-align: middle;
}
.user-cart{
  height: 60px;
}
.user-cart img{
  height: 30px;
  margin-top:15px;
}
.nav{
  height: 40px;
  background-color: #aaa;
  line-height: 40px;
}
.nav .home{
  padding:0 10px; 
}
</style>
