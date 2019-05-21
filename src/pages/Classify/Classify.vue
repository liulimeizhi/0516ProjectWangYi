<template>
  <div class="cateContainer">
     <div class="searchInput">
       <i class="iconfont icon-sousuo"></i>
       <span class="placeholder" @click="$router.push('/search')">搜索商品，共xxxxx款好物</span>
     </div>
    <section class="cateListMain">
      <div class="line"></div>
      <div class="cateListLeft">
        <ul>
          <li :class="{active:currentId*1===item.id}" v-for="(item,index) in categoryList" :key="index">
            <router-link :to="{path:'category',query:{id:item.id}}">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <router-view/>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState}from'vuex';
  import BScroll from 'better-scroll';

  export default {
    data(){
     return{
       isActive:true,
       currentId:''  //当前的索引下标
     }
    },
    computed:{
      ...mapState({
        categoryList:state=>state.classify.categoryList
      })
    },
    mounted(){
      this.$store.dispatch('getCategoryList');
      this.currentId=this.$route.query.id?this.$route.query.id:'109224000';
      this.$nextTick(()=>{
        new BScroll('.cateListLeft', {
          click: true
        })
      })
    },
    watch:{
      $route(){
        this.currentId = this.$route.query.id;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import "../../../static/css/reset.css"
  .cateContainer
    height 100%
    padding-bottom 100px
    .searchInput
      height 56px
      line-height 56px
      text-align center
      width 90%
      margin 20px auto
      border-radius 10px
      background-color rgba(0,0,0,.1)
      i
        font-size 30px
      .placeholder
        font-size 30px
        color #666
    .line
      width 100%
      height 2px
      background-color #eee
    .cateListMain
      height 100%
      background-color #999999
      position relative
      .cateListLeft
        height 100%
        padding 20px 0
        position absolute
        top 3px
        left 0
        background-color #ffffff
        ul
          clearFix()
          width 160px
          display flex
          flex-direction column
          li
            width 160px
            height 50px
            line-height 50px
            text-align center
            font-size 30px
            border-left 6px solid #ffffff
            margin 15px 0
            &.active

              border-left 4px solid #ab2b2b
              a
                color #ab2b2b


</style>
