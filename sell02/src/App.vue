<template>
  <div id="app">   
      <vheader></vheader>
      <vnav></vnav>
      <!-- <vcarShop></vcarShop> -->
  </div>
</template>

<script>

import vheader from './components/header/Header.vue'
import vnav from './components/nav/Nav.vue'
// import vcarShop from './components/carShop/CarShop.vue'

export default {
  name: 'app',
  data(){
           return {
            seller:"",
           }
  },
  mounted(){
     

   
  },
  components: {vheader, vnav}
  }
</script>

<style>

</style>
