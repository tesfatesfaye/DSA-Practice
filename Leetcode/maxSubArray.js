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










const maxSubArraySubOptimal = (nums) => {
    let max = Number.NEGATIVE_INFINITY
    let arrayHolder = []
    let total = 0
    let sign = true

    const sorter=()=>{
    let holder = null
    for (let i = 0; i < nums.length; i++) { // sorts the positive and negative consecutive values

        if ((nums[i] < 0 && sign === false) || (nums[i] >= 0 && sign === true)) {

            holder = holder + nums[i]
            max = Math.max(max, holder,nums[i])
            total = holder
            if (i === nums.length - 1 && arrayHolder.length>0) arrayHolder.push(holder)
        }
        else {
            if (holder !== null) arrayHolder.push(holder)
            holder = nums[i]
            max = Math.max(max, holder)
            total =holder+total
            sign = !sign
            if (i === nums.length - 1) arrayHolder.push(holder)
        }

    }
    

    }
    sorter()



    let left = 0
    if (arrayHolder.length <=2){

        return max
    }

    if (arrayHolder[0] < 0) {
        left = 1

    }


    let aggregate = arrayHolder[left]
    while (left < arrayHolder.length - 2) {
        aggregate=Math.max((aggregate+arrayHolder[left+1]+arrayHolder[left+2]),arrayHolder[left+2])
            max=Math.max(max,aggregate)

    
        left = left + 2
    }


    return max

}

console.log(maxSubArraySubOptimal([-9,-2,1,8,7,-6,4,9,-9,-5,0,5,-2,5,9,7]))
console.log(maxSubArraySubOptimal([1,2,3,4,6,-1,-2,-3,-4]))
console.log(maxSubArraySubOptimal([5,4,-1,7,8]))
console.log(maxSubArraySubOptimal([-1,0,-2]))
