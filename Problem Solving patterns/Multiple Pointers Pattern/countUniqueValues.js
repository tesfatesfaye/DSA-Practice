function countUniqueValues(arrayInput){ // this would work but a
if(arrayInput.length<1){
   return 0
}
let uniqueValue=1
let leftValue=0
let rightValue=1
      while(rightValue<arrayInput.length){
        if(arrayInput[leftValue] !==arrayInput[rightValue]){
            uniqueValue++
            leftValue++
            rightValue++
        }
        else{
            leftValue+=1
            rightValue+=1
        }

    }
    return uniqueValue


}


console.log(countUniqueValues([1,1,1,1,2,3,4]))

function countUniqueValuesColt(arrayInput){ // colts solution
    if(arrayInput.length<2){
        if(arrayInput.length===0){
            return 0
        }
        return 1
    }
    let i=0
    for( let j=1;j<arrayInput.length;j++){
        if(arrayInput[i]!==arrayInput[j]){
            i++
            arrayInput[i]=arrayInput[j]
        }
    }
    return i +1
}

console.log(countUniqueValuesColt([1,1,1,1,2,3,4,5]))