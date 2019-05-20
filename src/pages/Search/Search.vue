<template>
  <div class="searchContainer">
    <div class="searchTitle">
     <div class="searchInput">
       <i class="iconfont  icon-sousuo"></i>
       <span class="placeholder" >百搭直筒裤，到手仅159元</span>
     </div>
      <button @click="$router.back()">取消</button>
    </div>
    <div class="searchList">
      <p>热门搜索</p>
      <ul>
        <li :class="{heighline:item.highlight===1}" v-for="(item,index) in initSearch.hotKeywordVOList":key="index">
          <a  href="JavaScript:void(0);">{{item.keyword}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

  import {mapState}from'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getInitSearch')
    },
    computed:{
      ...mapState({
        initSearch:state=>state.search.initSearch
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import"../../common/stylus/mixins.styl";
  .searchContainer
    .searchTitle
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 80px
      font-size 30px
      padding 30px
      box-sizing border-box
      .searchInput
        flex 7
        height 58px
        border-radius 10px
        border none
        text-align center
        line-height 58px
        background-color rgba(0,0,0,.1)
        i
          font-size 30px
          color #999999
        .placeholder
          font-size 30px
          color #999999
      button
        flex 1
        height 40px
        margin-left 10px
        font-size 30px
        border none
        outline none
        background-color #ffffff
    .searchList
      clearFix()
      padding 0 30px 30px
      p
        width 680px
        height 90px
        background-color #ffffff
        line-height 90px
        font-size 26px
      li
        float left
        height 50px
        line-height 48px
        text-align center
        border 1px solid #999999
        margin 0 28px 28px 0
        a
          font-size 26px
          color #333
          padding 0 15px
        &.heighline
          border 1px solid $red
          a
            color $red


</style>
