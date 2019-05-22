<template>
  <section class="timeContainer">
    <div class="timeHeader">
      <div class="headerTop">
        <span>限时购</span>
        <div class="timeDown">
          <span ref="timeHour">10</span>
          <span>:</span>
          <span ref="timeMinute">03</span>
          <span>:</span>
          <span ref="timeSecond">09</span>
        </div>
      </div>
      <span class="headerBottom">
        更多
        <i class="iconfont icon-gengduo1"></i>
      </span>
    </div>
    <ul class="timeList">
      <li v-for="(item,index) in itemList" :key="index">
        <img :src="item.picUrl" alt="限时购">
        <div class="goodPrice">
          <span class="newPrice">￥{{item.activityPrice}}</span>
          <span class="oldPrice">￥{{item.originPrice}}</span>
        </div>
      </li>
    </ul>
  </section>
</template>
<script type="text/ecmascript-6">
  import {mapState}from'vuex'
  export default {
   computed:{
     ...mapState({
       itemList:state=>state.home.itemList
     })
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  .timeContainer
    .timeHeader
      display flex
      justify-content space-between
      height 100px
      font-size 30px
      line-height 100px
      padding 0 30px
      .headerTop
        display flex
        .timeDown
          span
            font-size 24px
            &:nth-of-type(odd)
              padding 5px
              color #fff
              background-color #000
              border-radius 5px
              margin 0 10px
            &:nth-of-type(even)
              height 36px
      .headerBottom
        i
          width 30px
          height 30px
          font-size 30px
    .timeList
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
        .goodPrice
          height 40px
          line-height 40px
          padding 0 0 0 10px
          margin-top 10px
          .newPrice
            font-size 28px
            color $red
          .oldPrice
            font-size 24px
            color #777
            text-decoration line-through
</style>
