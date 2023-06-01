const findMin = (nums)=> {
    if((nums[0]<nums[nums.length-1])|| nums.length===1){
        return nums[0]
    }
    let start=0
    let end=nums.length-1
        while(start<=end){
            let middle=Math.floor((start+end)/2)
            if(nums[middle]>=nums[start]&&nums[middle]>nums[middle+1]){
                return nums[middle+1]
            }
            else if(nums[middle]>=nums[start]&&nums[middle]<nums[middle+1]){
                start=middle+1
            }
            else{
                end=middle-1
            }
        }
            


};

console.log(findMin([11,13,15,17]))