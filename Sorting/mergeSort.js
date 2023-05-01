const merge=(arr,arrTwo)=>{
let leftPointer=0
let rightPointer=0
let mergedArray=[]

        while(leftPointer<arr.length && rightPointer <arrTwo.length){

            if(arr[leftPointer]<arrTwo[rightPointer]){
                mergedArray.push(arr[leftPointer])
                leftPointer++
            }

            else if(arr[leftPointer]>arrTwo[rightPointer]) {
                mergedArray.push(arrTwo[rightPointer])
                rightPointer++

            }

            else{
                mergedArray.push(arrTwo[rightPointer],arr[leftPointer])
                rightPointer++
                leftPointer++
            }


        }

        if(leftPointer===arr.length){
            mergedArray.push(...arrTwo.slice(rightPointer))
        }
        else if(rightPointer===arrTwo.length){
            mergedArray.push(...arr.slice(leftPointer))
        }



        return mergedArray


}


console.log(merge([1,2,5,7,9], [3,4,6,8]))


const mergeSort=(arr)=>{

    if(arr.length<=1) return arr
    let mid=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))
    return merge(left,right)
}


console.log(mergeSort([10,24,76,73]))