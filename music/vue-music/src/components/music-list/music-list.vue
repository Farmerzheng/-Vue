<template>
  <div class="music-list-wrapper">
    <div class="music-list-header" :style="bgImg">
      <h2>{{title}}</h2>
    </div>
    <div class="scroll-wrap">
      <scroll :data="songs">
        <song-list :songs="songs" @select="selectItem"></song-list>
      </scroll>
    </div>
  </div>
</template>
<script>
import SongList from "../../baseComponents/song-list.vue"
import Scroll from "../../baseComponents/scroll"
import {mapActions} from "vuex"

export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    bgImg: {
      type: String,
      default: ""
    },
    songs: {
      type: Array,
      default: []
    }
  },
  computed: {
   
  },
  components: {
    SongList,
    Scroll
  },
  methods: {
     ...mapActions([
       'selectPlay'
    ]),
    selectItem(song, index) {
      console.log(song,index)
      this.selectPlay({
        list:this.songs,
        index:index
      })
    }
  }

};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.music-list-header {
  width: 100%;
  height: 10rem;
  /*background: yellow*/
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.scroll-wrap {
  position: fixed;
  top: 10rem;
  bottom: 0;
  width: 100%;
  /*overflow: hidden;*/
  z-index: 100000;
}

</style>
