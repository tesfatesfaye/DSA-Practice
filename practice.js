const mergeSorted=(arr1,arr2)=>{
console.log(arr1.length)
let leftPointer=0
let rightPointer=0
const sortedArray=[]
    while(leftPointer<arr1.length && rightPointer<arr2.length){
        if(arr1[leftPointer]<=arr2[rightPointer]){
            sortedArray.push(arr1[leftPointer])
            leftPointer++
        }
        else{
            sortedArray.push(arr2[rightPointer])
            rightPointer++
        }
    }
    if(leftPointer>=arr1.length){
        while(rightPointer<arr2.length){
            sortedArray.push(arr2[rightPointer])
            rightPointer++
        }
    }
    else if(rightPointer>=arr2.length){
        while(leftPointer<arr1.length){
            sortedArray.push(arr1[leftPointer])
            leftPointer++
        }
    }
    return sortedArray
}
console.log(mergeSorted([1,2,3,4,5],[3,4,5,6]))

const mergeSort=(arr)=>{
    if(arr.length<=1) return arr
    let middle=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0,middle))
    let right=mergeSort(arr.slice(middle))
    return mergeSorted(left,right)
}

console.log(mergeSort([4,1,7,8,9,10,2]))