
// the multiple pointer pattern is ideal for comparing values in sorted/between arrays
const sumZero=(arrayInput)=>{
    if (arrayInput.length<2){
        return false
    }
    
    for(let i=0;i<arrayInput.length-1;i++){
        for(let j=1;j<arrayInput.length;j++){
            if(arrayInput[i]+arrayInput[j]===0){
                return true
            }
        }

    }

    return false

}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))



const sumZeroMultiplePointer=(inputArray)=>{
let leftValue=0
let rightValue=inputArray.length-1
while(leftValue<rightValue){
    if(inputArray[leftValue]+inputArray[rightValue]===0){
        return[inputArray[leftValue],inputArray[rightValue]]
    }
    else if(inputArray[leftValue]+inputArray[rightValue]>0){
        rightValue--
    }
    else{
        leftValue ++
    }

}
        return undefined
}


console.log(sumZeroMultiplePointer([-3,-2,-1,0,1]))
console.log(sumZeroMultiplePointer([-3,-2,-1,0,7,99]))




console.log(sumZeroMultiplePointer([-4,-3,-2,-1,0,1,2,3,10]))