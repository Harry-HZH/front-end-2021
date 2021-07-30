function bubbleSort(arr){
    const len = arr.length
    for(let i = 0;i<len;i++){
        for(let j = 0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr
}
//交换函数
function swap(arr,a,b){
    let temp
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
    console.log(a,b);
}

let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));