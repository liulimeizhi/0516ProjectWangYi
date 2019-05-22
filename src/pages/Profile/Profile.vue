<template>
  <section class="profile-container">
    <HeaderSlot>
      <span class="title-logo" slot="headerTitle"></span>
    </HeaderSlot>
    <div class="profile-main">
      <div class="main-logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
      </div>
      <div class="login-methods">
        <div class="phone-login" >
          <i class="iconfont icon-phone"></i>
          <span >手机号码登录</span>
        </div>
        <div class="email-login">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="quick-login">
          <span>手机号快捷注册</span>
          <i class="iconfont icon-52"></i>
        </div>
      </div>
      <div class="login-type">
        <div class="login-wechat">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="login-qq">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </div>
        <div class="login-weibo">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <router-view/>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: ""
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  .profile-container
    position relative
    height 100%
    .profile-main
      height 100%
      background-color #F2F5F4
      .main-logo
        display flex
        justify-content center
        padding 160px 0
        img
          width 268px
          height 90px
      .login-methods
        padding 0 40px 380px
        .phone-login, .email-login
          display flex
          align-items center
          justify-content center
          width 670px
          height 100px
          font-size 34px
          color $red
          border 1px solid $red
          margin-bottom 32px
        .iconfont
          font-size 46px
          margin-right 14px
        .phone-login
          background-color $red
          color #ffffff
          &.active
            color #fff
            background-color $red
          i
            width 40px
            height 40px
            font-size 40px
            margin-right 16px
        .quick-login
          font-size 28px
          color #333
          text-align center
          i
            font-size 28px
      .login-type
        display flex
        justify-content center
        align-items baseline
        height 40px
        font-size 28px
        .login-wechat, .login-qq, .login-weibo
          float left
          display flex
          text-align center
          align-items center
          padding 0 40px
          color #7f7f7f
          border-left 1px solid #7f7f7f
        .login-wechat
          border none
        i
          font-size 40px
          margin-right 10px
    .title-logo
      display block
      width 138px
      height 40px
      background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
      background-repeat no-repeat
      background-size 138px 40px
      background-position center
</style>
