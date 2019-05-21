<template>
  <div class="slotContainer">
   <header class="headerSlot" slot="headerSlot">
     <span></span>
     <slot name="headerTitle"></slot>
     <div class="searchIcon">
       <span></span>
       <span></span>
     </div>
   </header>
    <div class="rowNav">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState}from'vuex'
  export default {
    computed: {
      ...mapState({
        recommendTabs: state => state.general.recommendTabs,
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import "../../../static/css/reset.css"
  .slotContainer
    .headerSlot
    .rowNav
</style>
