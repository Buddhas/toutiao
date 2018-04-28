import json from 'jsonp'

export const getContent = function(articleId){
    return new Promise((resolve,reject) =>{
        json(`https://m.toutiao.com/i${articleId}/info/`, { timeout: 3000 }, function (err, res) {
            if(err){
                reject(err)
            }else{
                let articleContent = {}
                articleContent.title = res.data.title
                articleContent.detail_source = res.data.detail_source
                articleContent.content = res.data.content
                articleContent.avatar_url = res.data.media_user.avatar_url
                articleContent.publish_time = res.data.publish_time                
                resolve(articleContent)
            }
        })
    })
}

export const getCommon = function(item){
    return new Promise((resolve,reject)=>{
        json(`http://www.toutiao.com/api/comment/list/?group_id=${item.group_id}&item_id=${item.item_id}&offset=${item.offset}&count=${item.count}`,{timeout:3000},function(err,res){
        if(!err){
                resolve(res.data.comments)
            }
        })
    })
}

//`http://www.toutiao.com/api/comment/list/?group_id=${item.group_id}&item_id=${item.item_id}&offset=${item.offset}&count=${item.count}`
//http://www.toutiao.com/api/comment/list/?group_id='+item.group_id+'&item_id='+item.item_id+'&offset='+item.offset+'&count='+item.count



