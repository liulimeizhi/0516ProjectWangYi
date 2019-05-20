<template>
  <section class="recoContainer">
    <div class="recoHeader">
      <span>人气推荐</span>
      <span>
        更多
        <i class="iconfont icon-gengduo1"></i>
      </span>
    </div>
    <div class="recoList">
      <div class="recoListTop">
        <img :src="popularItem[0].listPicUrl" alt="好物推荐">
        <div class="goodInfo">
          <span >{{popularItem[0].itemTagList[0].name}}</span>
          <p class="ellipsis">{{popularItem[0].name}}</p>
          <p class="ellipsis">{{popularItem[0].simpleDesc}}</p>
          <p>￥{{popularItem[0].counterPrice}}</p>
        </div>
      </div>
      <ul class="recoListBottom">
        <li v-for="(item,index) in getPopularItem" :key="index">
          <img  :src="item.listPicUrl" alt="商品图">
          <div class="goodName">
            <span>{{item.name}}</span>
            <span class="good-price">￥{{item.counterPrice}}</span>
          </div>
          <div class="goodAdvantage"  >
            <span>{{item.itemTagList[0].name}}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import  {mapState}from'vuex'
  export default {
    data(){
      return{
        isShow:true
      }
    },
    computed:{
      ...mapState({
        popularItem:state=>state.home.popularItem
      }),
      getPopularItem () {
        return [...this.popularItem].splice(1, 4);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  .recoContainer
    padding 0 0 20px
    .recoHeader
      display flex
      justify-content space-between
      align-items center
      font-size 30px
      height 100px
      padding 0 30px
      i
        font-size 30px
    .recoList
      .recoListTop
        display flex
        justify-content space-around
        align-items center
        margin 0 30px 20px
        background #dad4c8
        img
          width 280px
          height 280px
        .goodInfo
          width 350px
          span
            font-size 20px
            padding 0 5px
            text-align center
            color $red
            border 1px solid $red
            background-color #fff
          p
            font-size 30px
            margin 10px 0
            &:nth-of-type(2)
              font-size 24px
              color #666
            &:nth-of-type(3)
              color $red
      .recoListBottom
        clearFix()
        padding-left 10px
        li
          float left
          width 216px
          height 354px
          font-size 24px
          margin-left 20px
          padding-bottom 20px
          img
            width 216px
            height 216px
            background-color #F5F5F5
          .goodName
            height 72px
            line-height 35px
            margin-top 10px
            span
              apostrophe()
            .good-price
              color $red
          .goodAdvantage
            span
              font-size 20px
              color $red
              padding 0 10px
              margin 0 5px 10px
              border 1px solid $red
              border-radius 10px
          .goodFullReduction
            width 150px
            height 30px
            line-height 30px
            font-size 20px
            color $red
            text-align center
            border 1px solid $red
            .halfCircle
              width 6px
              height 12px
              border-top 1px solid $red
              border-bottom 1px solid $red
              background-color #fff
              &:nth-of-type(1)
                float left
                border-right 1px solid $red
                margin 10px 0 0 -1.5px
                border-radius 0 10px 10px 0
              &:nth-of-type(2)
                float left
              &:nth-of-type(3)
                float right
                border-left 1px solid $red
                margin 10px -1.5px 0 0
                border-radius 10px 0 0 10px
</style>
