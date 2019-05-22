
/*
* 所有路由配置的数组
* */

import Home from 'pages/Home/Home.vue'
import Classify from 'pages/Classify/Classify.vue'
import General from 'pages/General/General.vue'
import ShopCart from 'pages/ShopCart/ShopCart.vue'
import Profile from 'pages/Profile/Profile.vue'
import Search from 'pages/Search/Search.vue'
import Category  from'pages/Classify/Category/Category.vue'




export default [
  //自定义重定向路径
  {
    path: '/',
    redirect: '/home',
    meta: {
      isShow: true
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      isShow: true
    },
    children:[
      {
        path: '/classify/category',
        component: Category,
        meta: {
          isShow: true
        }
      },
      {
        path: '',
        redirect: '/classify/category',
      }
    ]
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
    meta: {
      isShow: false
    }
  },
  {
    path: '/search',
    component: Search,

  }
]
