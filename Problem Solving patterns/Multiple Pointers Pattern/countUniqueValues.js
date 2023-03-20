function countUniqueValues(valuesArray){ // my solution 
    let leftPointer=0
    let rightPointer=1
    let uniqueValue=1
    while(rightPointer<valuesArray.length){
        if(valuesArray[leftPointer]!==valuesArray[rightPointer]){
            uniqueValue =uniqueValue+1
            leftPointer ++
            rightPointer ++
        }
        else{
            leftPointer ++
            rightPointer ++
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

countUniqueValuesColt([1,1,1,1,2,3,4,5])


function uniqueValuesUpdated(arrayInput){ //colts solution redux
    let i=0
    let j=1
    for(j in arrayInput){
        if(arrayInput[j] !==arrayInput[i]){
            i++
            arrayInput[i]=arrayInput[j]
            
        }

    }
    return i+1
}

console.log(uniqueValuesUpdated([1,2,3,3,4,5,5,5,6,6,6,7]))