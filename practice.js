function maxSubarraySum(num,k){
    if(num.length<k || k<=0) return null
    let tracker=0
    let sum=0
    let largestSum=0
    while(tracker<k){
        sum=sum+num[tracker]
         tracker++
    }
    largestSum=sum
    if(k===num.length) return sum
    tracker=0
    for(let i=k;i<num.length;i++){
        sum=num[i]+sum-num[tracker]
        largestSum=Math.max(sum,largestSum)
        tracker++
    }
    
    return largestSum
    
    
  }

  console.log(maxSubarraySum([2,3], 3))
 