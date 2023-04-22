const mergeSort=(arr,arrTwo)=>{
let leftPointer=0
let rightPointer=0
let mergedArray=[]

        while(leftPointer<arr.length && rightPointer <arrTwo.length){

            if(arr[leftPointer]<=arrTwo[rightPointer]){
                mergedArray.push(arr[leftPointer])
                leftPointer++
            }

            else {
                mergedArray.push(arrTwo[rightPointer])
                rightPointer++

            }


        }

        if(leftPointer===arr.length){
            mergedArray.push(...arrTwo.slice(rightPointer))
        }
        else{
            mergedArray.push(...arr.slice(leftPointer))
        }



        return mergedArray





}


console.log(mergeSort([1,2,5,7,9], [3,4,6,8]))