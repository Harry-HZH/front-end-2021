let arr = [2,3,2,5,5,1,9,8,1]
let map = new Map()
for(let i = 0;i<arr.length;i++){
  if(map.has(arr[i])){
    map.delete(arr[i])
  }else{
    map.set(arr[i],i)
  }
}
let min = Number(Infinity)
for(let value of map.values()){
  min = Math.min(value,min)
}
console.log(min)
