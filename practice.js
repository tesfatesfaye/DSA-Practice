const maxSubArray = (nums) => {
    let max = Number.NEGATIVE_INFINITY
    let arrayHolder = []
    let total = 0
    let sign = true
    let holder = null
    for (let i = 0; i < nums.length; i++) { // sorts the postive and negative consecutive values

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
    console.log(arrayHolder)
    console.log(max)

    let left = 0
    if (arrayHolder.length === 0){

        return max
    }

    if (arrayHolder[0] < 0) {
        left = 1

    }


    let aggregate = null
    while (left < arrayHolder.length - 1) {

        if (aggregate === null) {
            aggregate = arrayHolder[left]

        }

        if ((aggregate + arrayHolder[left + 1] + arrayHolder[left + 2] >= aggregate) && (aggregate + arrayHolder[left + 1] + arrayHolder[left + 2] > arrayHolder[left + 2])) {

            aggregate = aggregate + arrayHolder[left + 1] + arrayHolder[left + 2]
            
            if (max < aggregate) {
                max = aggregate
            }

        }
        else {
            aggregate = null
        }

        left = left + 2
    }


    return max

}

console.log(maxSubArray([-9,-2,1,8,7,-6,4,9,-9,-5,0,5,-2,5,9,7]))


// const aggregator=(agg)=>{
//    let min= agg + arrayHolder[left + 1] + arrayHolder[left + 2]
//    let start=left+2 
 


// }