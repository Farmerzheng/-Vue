<template>
  <div class="list">
    <div class="sort">
      <div class="wrap right">
        <span>排序</span>
        <span>默认</span>
        <span>升序</span>
        <span>降序</span>
      </div>
    </div>
    <div class="list-wrap">
      <div class="price">
        <ul>
          <li class="price-item"><a href="">all</a></li>
          <li class="price-item"><a href="">0-100</a></li>
          <li class="price-item"><a href="">100-500</a></li>
          <li class="price-item"><a href="">500-1000</a></li>
          <li class="price-item"><a href="">1000-2000</a></li>
        </ul>
      </div>
      <div class="good-list">
        <ul class="good-list-wrap">
          <li class="good-list-item">
            <a href="">
              <img src="../../assets/img/good-item.jpg" height="482" width="482" alt="">
            </a>
          </li>
        </ul>
      </div>
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
.list {
  min-height: 100vh;
}

.sort {
  height: 40px;

  line-height: 40px;
  background-color: #fff;
}

.sort span {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
}

.list-wrap { 
  display: flex;
  justify-content: space-between;
  padding:20px 0;
  background-color: #eee;

}

.list-wrap .price {
  margin: 0 30px;
  padding: 0 20px;
  font-size: 16px
}

.price-item {
  line-height: 40px;
}

.price-item a {
  padding: 10px;
}

.good-list {
  flex: 1;
  margin-left: 30px;
}

.good-list-item {
  width: 33%;
}

.good-list-item a {
  display: block;
}

.good-list-item img {
  width: 100%;
  height: auto
}

</style>
