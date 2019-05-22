<template>
  <div id="app">
   <router-view/>
    <FootGuide/>
  </div>
</template>

<script>
  import FootGuide from 'components/FootGuide/FootGuide.vue'
export default {
  name: 'App',
  components: {
    FootGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  #app
    width 100%
    height 100%
</style>
