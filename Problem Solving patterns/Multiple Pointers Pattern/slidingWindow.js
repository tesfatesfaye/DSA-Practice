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
     
        if(sum>maxValue){
            maxValue=sum
        }
   }
    return maxValue
}

console.log(maxSubarraySum([1,2,3,10,91,34],2))

