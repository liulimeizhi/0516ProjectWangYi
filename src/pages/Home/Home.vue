<template>
   <div class="homeContainer">
     <Header/><!--头部组件-->
     <div class="homeContent">
     <div>
       <Swiper/><!--轮播部分-->
       <ul class="wangyiGrow">
         <li>
           <i class="growIcon"></i>
           <span>网易自营品牌</span>
         </li>
         <li>
           <i class="growIcon"></i>
           <span>30天无忧退货</span>
         </li>
         <li>
           <i class="growIcon"></i>
           <span>48小时快速退款</span>
         </li>
       </ul>
       <Nav />   <!--首页主导航区-->
       <Gift />  <!-- 新人专享礼-->
       <Split />   <!-- 间隔-->
      <Manufacturer /> <!--首页品牌制造商区-->
       <Split />
      <Popular /> <!-- 首页热销榜单区-->
       <Split />
      <Recommend /><!--人气推荐-->
       <Split />
       <FlashSale /><!--限时购-->
       <Split />
       <NewProducts /><!--新品首发-->
       <Split />
     </div>
     </div>
   </div>
</template>

<script type="text/ecmascript-6">

  import Header from '../../components/Header/Header.vue'
  import Swiper from './components/Swiper/Swiper.vue'
  import Nav from './components/Nav/Nav.vue'
  import Gift from './components/Gift/Gift.vue'
  import Split from '../../components/Split/Split.vue'
  import Manufacturer from './components/Manufacturer/Manufacturer.vue'
  import Popular from './components/Popular/Popular.vue'
  import Recommend from './components/Recommend/Recommend.vue'
  import FlashSale from './components/FlashSale/FlashSale.vue'
  import NewProducts from './components/NewProducts/NewProducts.vue'


  export default {
    components:{
      Header,
      Swiper,
      Nav,
      Gift,
      Split,
      Manufacturer,
      Popular,
      Recommend,
      FlashSale,
      NewProducts

    },
    mounted(){
      this.$store.dispatch('getHomeData')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl";
  .homeContainer
    padding-bottom 100px
    .homeContent
      .wangyiGrow
        clearFix()
        display flex
        justify-content space-around
        align-items center
        height 72px
        li
          display flex
          &:nth-of-type(1)
            i
              background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
          &:nth-of-type(2)
            i
              background-image url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
          &:nth-of-type(3)
            i
              background-image url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
          .growIcon
            width 32px
            height 32px
            background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
            background-size 32px 32px
            background-repeat no-repeat
            background-position center
            margin 0 10px 0 0
          span
            color: #b4282d
</style>
