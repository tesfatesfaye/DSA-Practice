var maxSumMinProduct = function(nums) {
    let left=Math.floor(nums.length/2)-1
    let middle=Math.floor(nums.length/2)
    let right=Math.floor(nums.length/2)+1
    let maxProduct=nums[right]
    let minValue=nums[right]
    let minTracker=new Map()
        nums.map(x=>{
            if(minTracker.has(x)){
            minTracker.set(x,minTracker.get(x)+1)
            }
            else{
                
            }
        })
    let numSorted =nums.toSorted((x, y) => {
      return x - y;
    });
    let sum=nums[middle]

        while(left>=0 || right<nums.length){
            if(left<0 || nums[right]>=nums[left]){
                sum+=nums[right]
                minValue=Math.min(nums[right],minValue)
                maxProduct=maxProduct(sum*minValue,maxProduct)
                right++
            }
            else{
                sum+=nums[left]
                minValue=Math.min(nums[left],minValue)
                maxProduct=maxProduct(sum*minValue,maxProduct)
                left--
            }

            }
            return maxProduct

        }

let array=[1,2,3,2]
