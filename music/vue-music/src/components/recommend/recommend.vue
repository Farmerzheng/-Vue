<template>
  <div class="recomment" ref="wrapper">
    <scroll :data=carouselData>
      <div class="recomment-list">
        <loading v-show="!discList.length"></loading>
        <slider v-if='carouselData!="0"' :resData=carouselData :loop='true'>
        </slider>
        <h2 class="recomment-title">
          热门歌单推荐
        </h2>
        <div class="recomment-item" v-for='item in this.discList'>
          <div class="img-wrapper">
            <img v-lazy="item.picurl" alt="" class="img-width">
          </div>
          <div class="img-des">
            <h3>{{item.mvtitle}}</h3>
            <p>{{item.mvdesc}}</p>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import originJSONP from 'jsonp';
import Slider from '../../baseComponents/slider'

import { getRecommend, getDiscList } from '../../api/recommend';
import Scroll from '../../baseComponents/scroll';
import Loading from '../../baseComponents/loading/loading';
import BScroll from 'better-scroll';

export default {
  components: {
    Slider,
    Scroll,
    Loading
  },
  data() {
    return {
      carouselData: "0",
      discList: []
      // ,
      // imgUrl:"../../assets/img/default.png"
    }
  },
  created() {
    // console.log("created");
    setTimeout(()=> {
      this._getRecommend();
      this._getDiscList();
    }, 1000)

  },
  methods: {
    _getRecommend() {
      var self = this;
      // console.log(self)
      getRecommend().then((res) => {
        if (res.code == 0) {
          // console.log(res.data);
          // console.log(typeof self._data.carouselData)
          self._data.carouselData = res.data;
        }
      })
    },
    _getDiscList() {
      var self = this;
      getDiscList(function(res) {
        // console.log(res)
        self._data.discList = res.data.mvlist;
        // console.log(self._data.discList.length)
      })
    }
    // _initScroll() {
    //   if (!this.$refs.wrapper) {
    //     return
    //   };
    //   this.scroll = new BScroll(this.$refs.wrapper, {
    //     // probeType: this.probeType,
    //     // click: this.click
    //   });

    //   console.log("BScroll初始化完成");
    // }
  }
  // mounted() {
  //   console.log("mounted");
  //   this._initScroll();
  // }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recomment {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: hidden;
}

.recomment-title {
  line-height: 1.427rem;
  color: #ffd733;
  font-size: 0.64rem;
}

.recomment-item {
  display: flex;
  padding: 0.113rem 0.413rem;
}

.img-wrapper {
  float: left;
  width: 4rem;
  /*height: 5rem;*/
}

.img-width {
  width: 100%;
}

.img-des {
  float: right;
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.img-des {
  padding-left: 0.427rem;
}

.img-des h3 {
  font-size: 0.533rem;
  margin-top: 0.213rem;
}

.img-des p {
  margin-bottom: 0.213rem;
  color: #333;
}

</style>
