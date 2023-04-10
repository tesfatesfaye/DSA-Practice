const collectOddValuesHelper=(arr)=>{
let oddArrayValues=[]

    const helperFunction=(arrayInput)=>{
        if(arrayInput.length===0) return 
        
        if(arrayInput[0]%2!==0){
            oddArrayValues.push(arrayInput[0])
        }
        helperFunction(arrayInput.splice(1))
    
    }

    helperFunction(arr)
    
    return oddArrayValues;

}

console.table(collectOddValuesHelper([1,2,3,4,5,6,7,8]))


const collectOddValuesPure=(arr)=>{
    let oddArrayValues=[]

    if(arr.length===0) return oddArrayValues

    if(arr[0]%2!==0){
     oddArrayValues.push(arr[0])
    }
    
    // oddArrayValues=oddArrayValues.concat(collectOddValuesPure(arr.slice(1)))
    oddArrayValues=[...oddArrayValues,...collectOddValuesPure(arr.slice(1))]

    return oddArrayValues


}
console.table(collectOddValuesPure([1,2,3,4,5,6,7]))