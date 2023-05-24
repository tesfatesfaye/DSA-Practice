const maxSubArray=(nums)=>{
    if(nums.length===0) return []
    let overAllMax=nums[0]
    let tempMax=nums[0]
        for(let i=1;i<nums.length;i++){
            tempMax=Math.max(tempMax+nums[i],nums[i])
            overAllMax=Math.max(overAllMax,tempMax)
            
        }
    return overAllMax        
}

console.log(maxSubArray([-9,-2,1,8,7,-6,4,9,-9,-5,0,5,-2,5,9,7]))
console.log(maxSubArray([1,2,3,4,6,-1,-2,-3,-4]))
console.log(maxSubArray([5,4,-1,7,8]))
console.log(maxSubArray([-1,0,-2]))
