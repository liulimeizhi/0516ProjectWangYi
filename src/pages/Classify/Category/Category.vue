<template>
  <div class="CategoryContainer">
    <div class="CategoryMain">
      <img class="CategoryMainImg" :src="categories.bannerUrl"
      v-if="categories" alt="大图">
        <ul v-if="categories">
          <li v-for="(item,index) in categories.subCateList" :key="index">
            <img :src="item.bannerUrl" :alt="item.name" >
            <span>{{item.name}}</span>
          </li>
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  export default {
    data(){
       return{
           categoryId:'',//每一项的id
           categories:[]
       }
    },
    computed:{
      ...mapState({
        categoryList:state=>state.classify.categoryList
      })
    },
    mounted(){
      this.categoryId = this.$route.query.id ? this.$route.query.id:'109224000';
      new BScroll('.CategoryContainer', {
        click: true
      })
    },
    watch:{
       $route(){
        this.categoryId = this.$route.query.id;
        this.categories =this.categoryList.find(item =>item.id === this.categoryId*1);
       },
      categoryList(){
        this.categories =this.categoryList.find(item =>item.id === this.categoryId*1);
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl";
  .CategoryContainer
    height 100%
    overflow hidden
    background #fff
    .CategoryMain
      height 100%
      margin-left 162px
      padding 30px 30px 120px
      .CategoryMainImg
        width 528px
        height 192px
        margin-bottom 30px
        background-color white
      ul
        display flex
        flex-wrap wrap
        width 100%
        li
          width 144px
          text-align center
          margin-right 30px
          img
            width 144px
            height 144px



</style>
