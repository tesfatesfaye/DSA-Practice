const maximumScore=(nums,k)=>{
  let l,r 
  l=r=k
  let currMin=nums[k]
  let currMax=nums[k]

  while(l>0 || r<nums.length-1){
    let left=nums[l-1] ?? 0
    let right=nums[r+1] ?? 0
    if(left>right){
      l--
      currMin=Math.min(currMin, left)
    }
    else{
      r++
      currMin=Math.min(currMin,right)
    }
    currMax=Math.max(currMax,currMin*(r-l+1))
  }
      return currMax
}

console.log(maximumScore([5, 5, 4, 5, 4, 1, 1, 1], 0));