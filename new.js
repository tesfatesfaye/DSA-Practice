



var maxSubArray = function(nums) {
    let sum=Number.NEGATIVE_INFINITY
    let holder;
    let counter;
    for(let i=0; i<nums.length-1;i++){
        holder=0
         counter=0
            while(counter<=nums.length-1-i){
                holder=holder+nums[i+counter]
                if(holder>sum){
                    sum=holder
                    }
                    counter++
            }

    }
        return sum
};