



var maxSubArray = function (nums) {
    if (nums.length === 0) {
        return nums
    }
    let sum = Number.NEGATIVE_INFINITY
    let holder;
    let counter;
    for (let i = 0; i < nums.length ; i++) {
        holder=counter = 0
        
        while (counter <= nums.length - 1 - i) {
            holder = holder + nums[i + counter]
            if (holder > sum) {
                sum = holder
            }
            counter++
        }

    }
    return sum
};

console.log(maxSubArray([5,-40,100,-20,10]))
