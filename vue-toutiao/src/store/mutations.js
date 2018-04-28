import * as types from './mutation-types'

const mutations = {
    //已定制
    [types.SET_SUBSCRIBE](state,list){
        state.subscribe = list
    },
    //未定制
    [types.SET_SUBSCRIBE_NO](state,subscribeNo){
        state.subscribeNo = subscribeNo
    },

    //获取对应的新闻列表
    [types.GET_NEWSLIST](state,playLoad){
        let type = playLoad.type
        for(let item of playLoad.data){
            state.newLists[type].unshift(item)
        }
    },

    //保存对应的文章
    [types.GET_ARTICLE](state,selectArticle){
        state.article = selectArticle
    },

    [types.LOADING_AGAIN](state,flag){
        state.loading_again = flag
        console.log('我是mutation')
        console.log(state.loading_again)
    },

    //保存收藏新闻列表
    [types.COLLECTION](state,collections){
        state.collection = collections
    },

    //保存搜索历史
    [types.SEARCH_HISTORY](state,history){
        state.searchHistory = history
    }
    
}

export default mutations