
/*
* 所有路由配置的数组
* */

import Home from 'pages/Home/Home.vue'
import Classify from 'pages/Classify/Classify.vue'
import General from 'pages/General/General.vue'
import ShopCart from 'pages/ShopCart/ShopCart.vue'
import Profile from 'pages/Profile/Profile.vue'
import Search from 'pages/Search/Search.vue'


export default [
  //自定义重定向路径
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/classify',
    component: Classify,
  },
  {
    path: '/general',
    component: General,
  },
  {
    path: '/shopcart',
    component: ShopCart,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/search',
    component: Search,
  }
]
