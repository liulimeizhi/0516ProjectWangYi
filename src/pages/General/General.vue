<template>
  <div>
    <HederSlot>
      <di class="headerTitle" slot="headerTitle">
        <span class="on">发现</span>
        <span>甄选家</span>
      </di>
    </HederSlot>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {HeaderSlot} from '../../components/HeaderSlot/HeaderSlot.vue'
  export default {
    components:{
      HeaderSlot,
    },
   mounted(){
     this.$store.dispatch('getRecommendTabs')
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
