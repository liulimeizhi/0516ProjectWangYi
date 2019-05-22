<template>
  <section class="productsContainer">
    <div class="productsHeader">
      <div class="headerTop">
        <span>新品首发</span>
      </div>
      <span class="headerBottom">
        更多
        <i class="iconfont icon-gengduo1"></i>
      </span>
    </div>
    <ul class="productsList">
      <li v-for="(item,index) in filterList" :key="index" >
        <img :src="item.listPicUrl" alt="新品首发">
        <div class="goodName">
          <span>{{item.name}}</span>
          <span class="goodPrice">￥{{item.retailPrice}}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        newItemList:state=>state.home.newItemList
      }),
      filterList(){
        return [...this.newItemList].splice(0,6);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  .productsContainer
    paddingBottom 30px
    .productsHeader
      display flex
      justify-content space-between
      height 100px
      font-size 30px
      line-height 100px
      padding 0 30px
      .headerTop
        display flex
      .headerTottom
        i
          width 30px
          height 30px
          font-size 30px
    .productsList
      clearFix()
      padding 0 10px 0 30px
      li
        float left
        width 214px
        height 270px
        margin-right 20px
        padding-bottom 30px
        img
          width 214px
          height 216px
          background-color #f5f5f5
        .goodName
          height 72px
          line-height 35px
          margin-top 10px
          span
            apostrophe()
          .goodPrice
            color $red
</style>
