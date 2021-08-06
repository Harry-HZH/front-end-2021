function insertsort(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let temp = arr[i]
    let j = i - 1
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j+1]=temp
  }
  return arr
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(insertsort(arr));