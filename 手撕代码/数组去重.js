let obj = {c:1}
let obj1 = obj

let arr = [1,3,4,5,4,'a','b','a','','','1',NaN,NaN,obj1,obj]

let newarr = Array.from(new Set(arr))
console.log(newarr);

function unique(arr){
  let map = new Map()
  let newarr1 = []
  for(let i = 0;i<arr.length;i++){
    if(!map.has(arr[i])){
      map.set(arr[i],i)
      newarr1.push(arr[i])
    }
  }
  return newarr1
}
console.log(unique(arr));

