/*
*
* 用于首页管理的数据模块
* */
import{reqHomeData} from '../../api'
import {
  RECEIVE_NAVLIST,
  RECEIVE_POPULARITEM,
  RECEIVE_FLASHSALE,
  RECEIVE_NEWITEMLIST
}from'../modules/mutation-types'
const  state={
  navList: [], // 导航列表
  popularItem: [], // 人气推荐
  itemList:{}, //限时购
  newItemList:[]//新品首发

};
const  mutations ={
  [RECEIVE_NAVLIST] (state, navList) {
    state.navList = navList;
  },
  [RECEIVE_POPULARITEM] (state, popularItem) {
    state.popularItem = popularItem;
  },
  [RECEIVE_FLASHSALE] (state, itemList) {
    state.itemList = itemList;
  },
  [RECEIVE_NEWITEMLIST] (state, newItemList) {
    state.newItemList = newItemList;
  },
};
const actions = {
  async getHomeData ({commit}) {
    const result = await reqHomeData();
    if (result.code === 0) {
      commit(RECEIVE_NAVLIST, result.data.kingKongModule.kingKongList);
      commit(RECEIVE_POPULARITEM, result.data.popularItemList);
      commit(RECEIVE_FLASHSALE, result.data.flashSaleModule.itemList);
      commit(RECEIVE_NEWITEMLIST, result.data.newItemList);
    }
  }
};
const  getters={

};
export default {
  state,
  mutations,
  actions,
  getters
}
