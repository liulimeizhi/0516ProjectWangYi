<template>
  <section class="navContainer">
    <ul class="navBox">
      <li class="navItem" v-for="(nav,index) in navList":key="index">
        <img :src="nav.picUrl"alt="导航列表">
        <span>{{nav.text}}</span>
      </li>

    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        navList:state=>state.home.navList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .navContainer
    padding-bottom 30px
    background-color #ffffff
    .navBox
      clearFix()
      text-align center
      .navItem
        float left
        width 100px
        height 156px
        margin 10px 20px 9px
        img
          width 100px
          height 100px
          margin-bottom 10px
        span
          font-size 24px
          width 110px
          height 36px
          margin-top 10px

</style>
