const rotate=(nums,k)=>{
   
    if(k<=0){
        
        return nums
    }
    
nums.unshift(nums.pop())
 rotate(nums,k-1)
 return nums

}

console.log(rotate([1,2,3,4,5,6,7],3))