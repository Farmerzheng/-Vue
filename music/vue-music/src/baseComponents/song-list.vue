<template>
  <ul class="song-list">
    <li class="song-item" v-for="(song,index) in songs" @click="selectItem(song,index)">
      <h3 class="song-title">{{song.name}}</h3>
      <p class="song-desc">{{song.singer}}。{{song.album}}</p>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    songs: {
      type: Array,
      default: []
    }
  },
  computed: {

  },
  methods:{
    selectItem(song,index){
      this.$emit("select",song,index)
    }
  }

};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-list{
  text-align: left;

}
.song-item{
  padding:10px 10px;

}
.song-item p{
  padding:10px 0;
  color: rgba(255,255,255,0.3);
}

</style>
