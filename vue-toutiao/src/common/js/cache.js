import storage from "good-storage"

const COLLETCION_KEY = '__COLLECTION__'

const SEARCH_HISTORY = '__SEARCH_HISTORY__'
//搜索历史的最大保存数量
const MAX_LENGTH = 20

//插入搜索历史函数
function insertHistory(searHistory,keyWork,compare,max){
    const index = searHistory.findIndex(compare)
    if(index === 0){
        return 
    }
    if(index > 0){
        searHistory.splice(index,1)
    }
    searHistory.unshift(keyWork)
    if(max && searHistory.length > max ){
        searHistory.pop()
    }
}
//删除单个搜索历史
function deleteFromArray(arr,compare){
    const index = arr.findIndex(compare)
    console.log(index)
    if(index > -1){
        arr.splice(index,1)
    }
}

//将收藏新闻保存到本地localstorage
export function saveCollection(collectionItem){
    let collections = storage.get(COLLETCION_KEY,[])
    collections.push(collectionItem)
    storage.set(COLLETCION_KEY,collections)
    return collections
}

//删除单个收藏新闻
export function deleteOneCollection(collection){
    let collections = storage.get(COLLETCION_KEY,[])
    deleteFromArray(collections,(item)=>{
        return item.item_id === collection.item_id
    })
    storage.set(COLLETCION_KEY,collections)
    return collections
}

//将搜索历史保存在本地储存
export function saveKeyWork(keyWork){
    let searchHistory = storage.get(SEARCH_HISTORY,[])
    insertHistory(searchHistory,keyWork,(item)=>{return item === keyWork},MAX_LENGTH)
    storage.set(SEARCH_HISTORY,searchHistory)
    return searchHistory
}

//删除单个搜索历史
export function deleteSearch(query){
    let searchHistory = storage.get(SEARCH_HISTORY,[])
    deleteFromArray(searchHistory,(item)=>{
        return item === query
    })
    storage.set(SEARCH_HISTORY,searchHistory)
    return searchHistory
}

//清空所有搜索历史
export function clearSearch(){
    storage.remove(SEARCH_HISTORY)
    return []
}

//获取收藏新闻，初始化vuex
export function getCollection(){
    return storage.get(COLLETCION_KEY,[])
}

//获取搜索历史，初始化vuex
export function getSearchHistory(){
    return storage.get(SEARCH_HISTORY,[])
}



