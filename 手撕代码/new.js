function fNew(target){
  let obj = {}
  if(target.prototype){
    obj.__proto__=target.prototype
  }
  let ret = target.apply(obj,Array.prototype.slice.call(arguments,1))
  if(typeof ret==='object'||'function'&& ret!==null){
    return ret
  }else{
    return obj
  }
}

let n = fNew(Array,5).fill('haha')
console.log(n)
