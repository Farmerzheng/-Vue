<template>
  <div class="loading">
    <img src="./loading.gif" alt="加载中……">
    <span>{{title}}</span>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: "加载中……"
    }
  }
}

</script>
<style scoped>
.loading {
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
}

.loading img {
  height: 30px;
  vertical-align: middle;
}

.loading span {
  color: #ffd733;
  vertical-align: middle;
  font-size: 16px;
  margin-left: 10px;
}

</style>
