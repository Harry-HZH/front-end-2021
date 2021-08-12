function xipai(arr) {
  let newarr = arr.map(val => {
    let ram = Math.random()
    return { val, ram }
  })
  newarr.sort((a, b) => {
    return a.ram - b.ram
  })
  arr.splice(0, newarr.length, ...newarr.map(value => { return value.val }))
  return arr
}

let arr = [12, 3, 13, 3213, 123, 123, 12, 312, 3]
console.log(xipai(arr));