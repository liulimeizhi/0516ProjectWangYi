<template>
  <footer id="footer_guide" >
    <div class="guide_item"  @click="goto('/home')" :class="{on: isCurrent('/home')}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/classify')" :class="{on: isCurrent('/classify')}">
      <span class="item_icon">
        <i class="iconfont icon-jifenfenlei"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" @click="goto('/general')" :class="{on: isCurrent('/general')}">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="guide_item" @click="goto('/shopcart')" :class="{on: isCurrent('/shopcart')}">
      <span class="item_icon">
        <i class="iconfont icon-cart1"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
      <span class="item_icon">
        <i class="iconfont icon-user"></i>
      </span>
      <span>个人</span>
    </div>
  </footer>
</template>

<script >
  export default {
    methods: {
      goto(path) {
        console.log('2346')
        this.$router.replace(path)
      },
      isCurrent(path) {
        console.log(this.$route.path)
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import "../../common/stylus/mixins.styl"
  #footer_guide
    top-border-1px(#eee)
    position fixed
    z-index 99
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 110px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 20px
      color #999999
      &.on
        color #b4282d
      span
        font-size 24px
        margin-top 6px
        margin-bottom 4px
        .iconfont
          font-size 39px
</style>
