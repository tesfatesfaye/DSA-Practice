
const subsets=(nums)=>{
     let subsetArray=[[]]
    const helper=(nums)=>{
        if(nums.length<=0) return;
        let arraySub=[[nums[0]]]
        
        for(let i=1;i<nums.length;i++){
                    
                let subArraylength=arraySub.length
                for(let j=0;j<subArraylength;j++){
                    arraySub.push([...arraySub[j],nums[i]])
                }
                         
                             
            
   
        }
        subsetArray.push(...arraySub)
        helper(nums.slice(1))
        
       
    }
        helper(nums)
    return subsetArray
}

console.log(subsets([1,2,3,4]).length)