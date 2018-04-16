<template>
  <div class="slider-wrapper" ref="sliderWrapper">
    <div class="slider" ref="slider">
      <div class="slider-group" ref='sliderGroup'>
        <div v-for='item in resData.slider' class="slider-item">
          <a :href="item.linkUrl" >
            <img  :src="item.picUrl" alt="" class="img-width needsclick">
          </a>
        </div>
      </div>
      <ul class="dot-list">
        <li class="dot-item" v-for="(item,index) in resData.slider" :class="{active:currentIndex === index+1}"></li>
      </ul>
    </div>
  </div>
</template>


<script>
import BScroll from 'better-scroll'


export default {
  name: "slider",
  data() {
    return {
      currentIndex: 1
    }
  },
  props: {
    resData: {
      type: Object,
      default: {}
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted() {
    // 组件重新加载完成
    setTimeout(() => {
      this._setSliderWidth();
      this._initBScroll();
      this._initDots();
      this._autoPlay();
      this._touch();
    }, 20)

    // console.log("slider已经mounted");

    // console.log(this._props.loop)
  },
  methods: {
    _setSliderWidth() {
      let carousel = document.querySelector('.slider-group');
      let imgList = document.querySelectorAll('.slider-item');
      let dotList = document.querySelectorAll(".dot-item");
      let carouselWidth = 0;
      let imgWidth = this.$refs.slider.clientWidth;

      for (let i = 0; i < imgList.length; i++) {
        //设置图片的宽度
        imgList[i].style.width = imgWidth + "px";
        carouselWidth += imgWidth;
      }

      if (this.loop === true) {
        carouselWidth += 2 * imgWidth;
      }
      //设置整个轮播图的宽度
      carousel.style.width = carouselWidth + 'px'
    },
    _initBScroll() {
      let wrapper = document.querySelector('.slider')
      this.slider = new BScroll(wrapper, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
        click: false
      });
    },
    _initDots() {
      this.slider.on('scrollEnd', () => {
        // console.log(this.slider.getCurrentPage());
        this.currentIndex = this.slider.getCurrentPage().pageX;
      })
    },
    _autoPlay() {
      // console.log(this.autoPlay);
      if (!this.autoPlay) return;
      let self = this;
      // this.currentIndex += 1;
      this.timer = setInterval(function() {
        // this.slider.goToPage(x,y,time);
        console.log('滚动');
        if (self.currentIndex == self._props.resData.slider.length + 1) {
          self.currentIndex = 0;
        }
        self.slider.goToPage(self.currentIndex + 1, 0, 400);

      }, self.interval);
    },
    _touch() {
      let carousel = document.querySelector('.slider-group');
      let self = this;
      carousel.ontouchstart = function() {
        // console.log("开始")；
        clearInterval(self.timer)
      }
      carousel.ontouchend = function() {
        // console.log("结束");
        self._autoPlay();
      }
    }
  },
  destroyed() {
    // console.log('组件销毁');
    clearInterval(this.timer);
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider {
  width: 100%;
  position: relative;
}

.slider-group {
  display: flex;
  display: -webkit-flex;
  background: yellow;
}

.slider-item {
  font-size: 0;
}

.slider-item a {
  display: inline-block;
  width: 100%;
}

.img-width {
  width: 100%
}

.dot-list {
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
}

.dot-item {
  display: inline-block;
  width: 0.413rem;
  height: 0.413rem;
  background-color: #fff;
  margin: 0 0.213rem;
  border-radius: 0.206rem;
}

.active {
  width: 0.913rem;
}

</style>
