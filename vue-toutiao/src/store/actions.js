import *  as types from './mutation-types'
import jsonp from 'jsonp'
import {saveCollection,saveKeyWork} from 'common/js/cache'

//获取对应新闻列表
export const getNew = function({commit,state},payload){
    if (payload.type) {
        return new Promise((resolve,reject)=>{
            jsonp('https://m.toutiao.com/list/?tag=' + payload.type + '&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt(new Date().getTime() / 1000)
            ,{timeout:5000},
            function(err,res){
                if(err || res.data.length === 0){
                    reject('更新失败')
                    return false
                }else{
                    commit(types.GET_NEWSLIST,{
                        type: payload.type,
                        data: res.data
                    })
                    let message = `更新${res.data.length}条数据`
                    resolve(message)
                }
            }
        )
        })
      }
    
}
//收藏新闻，并保存到locatstroage
export const saveCollections = function({commit},item){
    let collections = saveCollection(item)
    commit(types.COLLECTION,collections)
}

//获取搜索
export const getSearch = function({commit,state},{offset,keyWork}){
    return new Promise((resolve,reject) =>{
        console.log('我是参数')
        
        jsonp(`https://www.toutiao.com/search_content/?offset=${offset}&format=json&keyword=${keyWork}&autoload=true&count=20&cur_tab=1`,{timeout:5000},
            function(err,res){
                if(!err){
                    resolve(res.data)
                }
            })
    })
     
}

//保存搜索历史
export const saveHistory = function({commit,state},keyWork){
    commit(types.SEARCH_HISTORY,saveKeyWork(keyWork))
    
}
