<template>
  <section class="giftContainer">
    <p class="name">- 新人专享礼 -</p>
    <div class="giftBox">
      <div class="giftLeft">
        <span>新人专享礼包</span>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="新人专享礼包">
      </div>
      <div class="giftRight">
        <div class="giftRightTop">
          <div class="title">
            <p>福利社</p>
            <span>今日特价</span>
          </div>
          <img src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png" alt="福利社">
        </div>
        <div class="giftRightBottom">
          <div class="title">
            <p>新人拼团</p>
            <span>1元起包邮</span>
          </div>
          <img src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt="新人拼团">
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: ""
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .giftContainer
    padding 0 30px
    margin-bottom 30px
    .name
      font-size 32px
      height 90px
      line-height 90px
      text-align center
    .giftBox
      display flex
      font-size 32px
      .giftLeft
        flex 5
        text-align center
        margin-right 5px
        background-color #F9E9CF
        span
          display block
          margin-top 30px
        img
          margin 20px auto
      .giftRight
        flex 5
        .giftRightTop, .giftRightBottom
          display flex
          justify-content space-around
          margin-bottom 5px
          img
            width 200px
            height 200px
          .title
            display flex
            font-size 32px
            flex-direction column
            span
              font-size 24px
              margin-top 10px
              color #777
        .giftRightTop
          flex 5
          background-color #FBE2D3
        .giftRightBottom
          flex 5
          background-color #FFECC2
</style>
