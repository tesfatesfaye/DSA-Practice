var removeDuplicatesTwo = function(nums) {
    let placement=0
    let repeated=false
    let k=1
    for(let i=1;i<nums.length;i++){
        if(nums[i]===nums[placement]){
            
            if(repeated===false){
                nums[placement+1]=nums[i]
                repeated=true
                placement++
                k++
            }
        }
        else{
           repeated=false
           nums[placement+1]=nums[i]
           placement++
           k++
        }
    }
    return k
};