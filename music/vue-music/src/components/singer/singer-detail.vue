<template>
  <transition name="slide">
    <div class="singer-detail">
      <div class="back" @click="back()"></div>
      <music-list :title="singer.name" :bgImg="bgImg" :songs="songs">
      </music-list>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from "vuex"
import { getSingerDetail } from "../../api/singer.js"
import { ERR_OK } from "../../api/config.js"
import { createSong } from "../../assets/js/song.js"
import MusicList from "../music-list/music-list"

export default {
  computed: {
    ...mapGetters([
      "singer"
    ]),
    bgImg() {
      return `background-image:url(${this.singer.avatar})`
    }
  },
  data() {
    return {
      songs: []
    }
  },
  created() {
    // console.log(this.singer)
    this._getSingerDetail()
  },
  mounted() {

  },
  methods: {
    _getSingerDetail() {
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code == ERR_OK) {
          // console.log(res.data.list);
          this.songs = this._normalizeSongs(res.data.list)
          // console.log(this.songs)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((item) => {
        let { musicData } = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    },
    back() {
      this.$router.push({
        path: `/singer`
      })
    }

  },
  components: {
    MusicList
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singer-detail {
  position: fixed;
  z-index: 1004;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #222;
}

.slide-enter-active,
.slide-leave-active {
  transition: .5s;
}

.slide-enter,
.slide-leave-to {
  transform: translate(100%, 0);
}

.back {
  position: fixed;
  top: 20px;
  left: 20px;
  height: 20px;
  width: 20px;
  border-top: 2px solid #ffd733;
  border-right: 2px solid #ffd733;
  -webkit-transform: rotate(225deg);
  transform: rotate(225deg);
}

</style>
