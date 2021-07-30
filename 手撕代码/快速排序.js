function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const midIndex = Math.floor(arr.length / 2)
    const valMidIndex = arr.splice(midIndex, 1)
    const left = []
    const right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= valMidIndex) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(valMidIndex, quickSort(right))
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(quickSort(arr));