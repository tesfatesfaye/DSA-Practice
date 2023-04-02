const areThereDuplicates=(...inputs)=>{// frequency counter pattern
const inputHolder={}

for(let value of inputs){
    if(!inputHolder[value]){
        inputHolder[value]=1
    }
    else {
        return true
    }
}
    return false


}

console.log(areThereDuplicates(1,2,3,2))

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