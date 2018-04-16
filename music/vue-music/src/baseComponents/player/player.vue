<template>
  <div class="player" v-show="playlist.length">
    <transition name="normal">
      <div class="normal-player" v-show="fullScreen">
        <div class="background">
          <img :src="currentSong.image" alt="" width="100%" height="100%">
        </div>
        <div class="top">
          <div class="back" @click="back">
            <i class="icon-back"></i>
          </div>
          <h1 class="title" v-html="currentSong.name"></h1>
          <h2 class="subtitle" v-html="currentSong.singer"></h2>
        </div>
        <div class="middle">
          <div class="middle-l">
            <div class="cd-wrapper">
              <div class="cd play">
                <img :src="currentSong.image" alt="">
              </div>
            </div>
            <div class="playing-lyric-wrapper">
              <div class="playing-lyric"></div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="dot-wrapper">
            <span class="dot active"></span>
            <span class="dot"></span>
          </div>
          <div class="progress-wrapper">
            <span class="time time-l"></span>
            <div class="progress-bar-wrapper">
              <div class="progress-bar">
                <div class="bar-inner">
                  <div class="progress"></div>
                  <div class="progress-btn-wrapper">
                    <div class="progress-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            <span class="time time-r"></span>
          </div>
          <div class="operators">
            <div class="icon i-left">
              <i class="icon-loop"></i>
            </div>
            <div class="icon i-left">
              <i class="icon-prev"></i>
            </div>
            <div class="icon i-center">
              <i class="icon-pause"></i>
            </div>
            <div class="icon i-right">
              <i class="icon-next"></i>
            </div>
            <div class="icon i-right">
              <i class="icon icon-not-favorite"></i>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="mini">
      <div class="mini-player" v-show="!fullScreen">
        <div class="icon">
          <img :src="currentSong.image" alt="">
        </div>
        <div class="text">
          <h2 class="name" v-html="currentSong.name"></h2>
          <p class="desc" v-html="currentSong.singer"></p>
        </div>
        <div class="control">
          <div class="progress-circle">
            <i class="icon-mini icon-pause-mini"></i>
          </div>
        </div>
        <div class="control">
          <i class="icon-playlist"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapGetters, mapMutations } from "vuex"
export default {
  methods: {
    back() {
      this.setFullScreen(false);
    },
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN'
    })
  },
  computed: {
    ...mapGetters([
      "fullScreen",
      "playlist",
      "currentSong"
    ])
  },
  props: {

  }
}

</script>
<style scoped>
.normal-player {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1006;
  background: #222;
}

.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  -webkit-filter: blur(20px);
  filter: blur(20px);
}

.top {
  position: relative;
  margin-bottom: 25px;
}

.top .back {
  position: absolute;
  top: 0;
  left: 6px;
  z-index: 50;
}

.top .back .icon-back {
  display: block;
  padding: 9px;
  font-size: 22px;
  color: #ffcd32;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.top .tilte {
  width: 70%;
  margin: 0 auto;
  line-height: 40px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 18px;
  color: #fff;
}

.top .subtitle {
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  color: #fff;
}

.middle {
  position: fixed;
  width: 100%;
  top: 80px;
  bottom: 170px;
  white-space: nowrap;
  font-size: 0;
}

.middle-l {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 80%;
}

.middle .cd-wrapper {
  position: absolute;
  left: 10%;
  top: 0;
  width: 80%;
  height: 100%;
}

.middle .cd-wrapper .cd {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 10px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  overflow: hidden;
}

.middle .cd-wrapper .play {}

.middle .playing-lyric-wrapper {
  width: 80%;
  margin: 30px auto 0 auto;
  overflow: hidden;
  text-align: center;
}

.middle .playing-lyric {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.bottom {
  position: absolute;
  bottom: 50px;
  width: 100%;
}

.bottom .dot-wrapper {
  text-align: center;
  font-size: 0;
}

.dot-wrapper .dot {
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}

.dot-wrapper .active {
  width: 20px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
}

.bottom .progress-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  padding: 10px 0;
}

.progress-wrapper .time {
  color: #fff;
  font-size: 12px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30px;
  flex: 0 0 30px;
  line-height: 30px;
  width: 30px;
}

.progress-wrapper .time-l {
  text-align: left;
}

.progress-wrapper .progress-bar-wrapper {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.progress-wrapper .progress-bar-wrapper .progress-bar {
  height: 30px;
}

.progress-wrapper .progress-bar .bar-inner {
  position: relative;
  top: 13px;
  height: 4px;
  background: rgba(0, 0, 0, 0.3);
}

.progress-wrapper .bar-inner .progress {
  position: absolute;
  height: 100%;
  background: #ffcd32;
}

.progress-wrapper .bar-inner .progress-btn-wrapper {
  position: absolute;
  left: -8px;
  top: -13px;
  width: 30px;
  height: 30px;
}

.progress-wrapper .progress-btn-wrapper .progress-btn {
  position: relative;
  top: 7px;
  left: 7px;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 3px solid #fff;
  border-radius: 50%;
  background: #ffcd32;
}

.bottom .operators {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.icon {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #ffcd32;
}

.icon i {
  font-size: 30px;
}

.i-left {
  text-align: right;
}

.i-right {
  text-align: left;
}

.i-center {
  padding: 0 20px;
  text-align: center;
}

.mini-player {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1005;
  width: 100%;
  height: 60px;
  background: #333;
}

.player .mini-player .icon {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40px;
  flex: 0 0 40px;
  width: 40px;
  padding: 0 10px 0 20px;
  height: 60px
}

.player .mini-player .icon img {
  border-radius: 50%;
  height: 80%;
  margin-top: 10%;
}

.player .mini-player .text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  line-height: 20px;
  overflow: hidden;
  text-align: left;
  padding-left: 20px
}

.player .mini-player .control {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30px;
  flex: 0 0 30px;
  width: 30px;
  padding: 0 10px;
}

.player .mini-player .text .name {
  margin-bottom: 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  color: #fff;
}

.player .mini-player .text .desc {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
}

.progress-circle {
  position: relative;
}

.player .mini-player .control .icon-play-mini,
.player .mini-player .control .icon-pause-mini,
.player .mini-player .control .icon-playlist {
  font-size: 30px;
  color: rgba(255, 205, 49, 0.5);
}

.normal-enter-active,
.normal-leave-active,
.mini-enter-active,
.mini-leave-active {
  transition: all .4s;
}
.top,
.normal-player,
.bottom,
.mini-player {
  transition: all .4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
}
.normal-enter .top,
.normal-leave-to .top {
  transform: translate(0, -100px);
}
.normal-enter .bottom,
.normal-leave-to .bottom {
  transform: translate(0, 100px);
}
.normal-enter,
.normal-leave-to,
.mini-enter,
.mini-leave-to {
  opacity: 0
}

</style>
