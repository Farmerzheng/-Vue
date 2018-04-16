<template>
  <div class="rank" ref="rank">
    <ul>
      <li class="item">
        <div class="icon">
          <img src="" />
        </div>
        <ul class="songlist">
          <li class="song">
            <span></span>
            <span></span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import {getTopList} from "../../api/ranking"
import {ERR_OK} from "../../api/config"

export default {
  created() {

    this._getTopList()

  },
  methods:{
    _getTopList() {
      getTopList()
    }
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 20px;
  padding-top: 20px;
  height: 100px;
}

.icon {
  width: 100px;
  height: 100px;
}

.icon img {
  width: 100px;
  height: 100px;
}

.songlist {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
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
  padding: 0 20px;
  height: 100px;
  overflow: hidden;
  background: #333;
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
}

.song {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 26px;
}

</style>
