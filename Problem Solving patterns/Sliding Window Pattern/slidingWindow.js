function maxSubarraySum(arrayInput,consecutive){ 
    if(arrayInput.length===0){
        return null
    }
    else if(consecutive>=arrayInput.length){
        return arrayInput.reduce((i,j)=>i+j)
    }
   let maxValue=Number.NEGATIVE_INFINITY
   let lengthSubArray=arrayInput.length-consecutive
    for(let i=0;i<=lengthSubArray;i++){
    let sliced=arrayInput.slice(i,consecutive+i)
  
    let sum=sliced.reduce((k,l)=>k+l,0)
     
        maxValue=Math.max(sum,maxValue)
       
   }
    return maxValue
}

console.log(maxSubarraySum([-1,-2,-3,-10,-91,-34],2))

function maxSubarraySumTwo(arrayInput,value){
    if(arrayInput.length===0){
        return null
    }
    else if(value>=arrayInput.length){
        return arrayInput.reduce((i,j)=>i+j)
    }
    let maxValue=0
    let tempValue=0

    for(let i=0;i<value;i++){
        maxValue+=arrayInput[i]
    }
   tempValue=maxValue

    for(let i=value;i<arrayInput.length;i++){
        tempValue=tempValue-arrayInput[i-value]+arrayInput[i]
        maxValue=Math.max(tempValue,maxValue)
    }
    return maxValue
}

console.log(maxSubarraySumTwo([-1,-2,-3,-10,91,34],2))