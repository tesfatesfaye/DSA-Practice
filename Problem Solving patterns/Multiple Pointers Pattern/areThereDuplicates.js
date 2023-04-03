const areThereDuplicatesPointers=(...inputs)=>{
       
    let leftPointer=0
    let rightPointer=1
    while(leftPointer<inputs.length-1){
        if(rightPointer<inputs.length){
            if(inputs[rightPointer]===inputs[leftPointer]){
                return true
            }
            else{
                rightPointer++
            }
        }
        else{
            leftPointer++
            rightPointer=leftPointer+1
        }
    }
    return false

}
console.log(areThereDuplicatesPointers(1,2,3,1))