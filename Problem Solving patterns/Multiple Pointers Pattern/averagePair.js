const averagePair=(arr,value)=>{
if(arr.length<2) return false

let leftPointer=0
let rightPointer=1

    while(leftPointer<arr.length-1){
        if((arr[leftPointer]+arr[rightPointer])/2===value){
            return true
        }
        else if(rightPointer===arr.length-1){
            leftPointer++
            rightPointer=leftPointer
        }
        rightPointer++

    }

    return false
}

console.log(averagePair([1,2,3],2.5))