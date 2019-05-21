/*
*多个接口请求模块
* */
import ajax from './ajax';

// const prefix = '/api';
const prefix = process.env.NODE_ENV === 'development' ? '/api' : 'http://m.you.163.com';
// const prefix = 'http://m.you.163.com'
// 获取首页数据
export const reqHomeData = () => ajax('/home');

// 搜索 关键字
export const reqInitSearch = () => ajax(`${prefix}/xhr/search/init.json`, 'POST');

// 获取分类列表
export const reqCategoryList = () => ajax('/categorylist');

//获取识物的数据列表
export const reqRecommendTabs = () => ajax(`${prefix}/topic/v1/find/getTabs.json`);

