
var removeDuplicates = function(nums) {
    if(nums.length===0) return 0
    let start=0
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[start]){
            nums[start+1]=nums[i]
            start++

        }
    }
    

    return start+1


};

console.log(removeDuplicates([1,2,2,3,3,4,5,12]))
