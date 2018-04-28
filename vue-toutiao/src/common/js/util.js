

//节流函数
export function throttle(func,delay){
    let timer
    
    return function(...args){
        console.log('我是节流函数1')
        if(timer){
            clearTimeout(timer)
        }else{
            console.log('我是节流函数')
            timer = setTimeout(() => {
                func.apply(this,args)
            }, delay);
        }
    }
}

