class Util{
    chilEmptPropDete (obj){
        for(const key in obj){
            if(obj[key] == undefined || obj[key] == ''){
                return true
            }
        }
        return false;
    }
    // 判断子属性是含有为空属性

    getParsStorData(key, type = 'localStorage'){
        return JSON.parse(window[type].getItem(key));
    }
    // 获取对象类型缓存
    setStriStorData(key, value, type = 'localStorage'){
        window[type].setItem(key, JSON.stringify(value))
    }
    // 设置字符串类型缓存
    removeStorData(key, type = 'localStorage'){
        window[type].removeItem(key)
    }
    删除缓存
}
function duplicateRemova(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
export default  new Util();