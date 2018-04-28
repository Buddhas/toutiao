//已订阅
export const subscribe = state => state.subscribe

//未订阅
export const subscribeNo = state=>state.subscribeNo

//获取新闻列表
export const newList = state => state.newLists

//获取所选新闻
export const selectedArticle = state => state.article

//获取重新加载标签
export const loadingAgain = state => state.loadingAgain

//获取收藏新闻
export const collection = state => state.collection

//获取搜索历史
export const searchHistory = state => state.searchHistory
