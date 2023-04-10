const collectOddValues=(arr)=>{
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

console.table(collectOddValues([1,2,3,4,5,6,7]))
