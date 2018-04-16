<template>
  <div class="list-wrap">
    <loading v-show="!singers.length"></loading>
    <singer-list @select="selectSinger" :data="singers"></singer-list>
    <router-view></router-view>
  </div>
</template>
<script>
import { getSingerList } from "../../api/singer.js"
import { ERR_OK } from "../../api/config.js"
import Singer from "../../assets/js/singer.js"
import SingerList from "./singer-list"
import Loading from '../../baseComponents/loading/loading';

import {mapMutations} from "vuex"

const HOT_SINGER_LEN = 10
const HOT_NAME = '热门'

export default {
  data() {
    return {
      singers: []
    }
  },
  components: {
    SingerList,
    Loading
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then((res) => {
        if (res.code == ERR_OK) {
          this.singers = res.data.list;
          this._normalizeList(this.singers);
        }
      })
    },
    _normalizeList(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }

      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          }))
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          name: item.Fsinger_name,
          id: item.Fsinger_mid
        }))
      })
      // 为了得到有序列表，我们需要处理 map
      let ret = []
      let hot = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      this.singers = hot.concat(ret);
      // console.log(this.singers)
    },
    selectSinger(singer) {
      this.$router.push({
        path:`/singer/${singer.id}`
      })
      this.setSinger(singer)
    },
    ...mapMutations({
      setSinger:'SET_SINGER'
    })
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-wrap {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: hidden;
  z-index: 1003;
}

</style>
