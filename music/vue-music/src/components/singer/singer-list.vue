<template>
  <scroll :data=data ref="listView">
    <div class="singer-list" >
      <ul class="singer-list-wrap" v-for="item in data" ref="listGroup">
        <h2 class="singer-list-title">{{item.title}}</h2>
        <ul class="singer-list-content-wrap">
          <li  class="singer-list-content-item" v-for="singerItem in item.items" @click="selectItem(singerItem)">
            <img v-lazy="singerItem.avatar" alt="">
            <span>{{singerItem.name}}</span>
          </li>
        </ul>
      </ul>
    </div>
    <div class="shortcut" @touchstart="shortcutTouchStart">
      <ul class="shortcut-list">
        <li class="shortcut-item" v-for="(item,index) in shortCutList" :data-index="index" >
           {{item}}
        </li>
      </ul>
    </div>
  </scroll>
</template>
<script type="text/ecmascript-6">
import Scroll from '../../baseComponents/scroll';
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  computed: {
    shortCutList() {
      return this.data.map((group) => {
        return group.title.substring(0,1);
      })
    }
  },
  components: {
    Scroll
  },
  mounted() {
    // console.log(this.shortCutList)
  },
  methods: {
    shortcutTouchStart(e) {
      let index = e.target.getAttribute("data-index");
      this.$refs.listView.scrollToElement(this.$refs.listGroup[index], 1000);
      
    },
    selectItem(item){
     this.$emit("select",item)
    }
  }
}

</script>
<style scoped>
.singer-list-title {
  background-color: #333;
  padding: 4px 16px;
  text-align: left;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.5);
}

.singer-list-content-item {
  display: flex;
  text-align: left;
  padding: 6px 10px;
  line-height: 3rem;
  padding:2px 6px;
}

.singer-list-content-item img {
  /*width: 3rem;*/
  height: 3rem;
  flex: none;
}

.singer-list-content-item span {
  margin-left: 10px;
}

.shortcut {
  position: fixed;
  top: 140px;
  right: 0;
  background: rgba(0,0,0,0.3);
}

</style>
