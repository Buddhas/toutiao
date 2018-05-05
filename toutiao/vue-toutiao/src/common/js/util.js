

//节流函数
export function throttle(func,delay){
    let timer
    
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }else{
            timer = setTimeout(() => {
                func.apply(this,args)
            }, delay);
        }
    }
}

