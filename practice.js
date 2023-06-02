const subsetsTwo=(nums)=>{
    let holder={}
    let subHolder={}
    let subsetArray=[[]]
   const helper=(nums)=>{
       if(nums.length<=0) return;
      
       if(!holder[nums[0]]){
        let arraySub=[[nums[0]]]
        holder[nums[0]]=true
        for(let i=1;i<nums.length;i++){
                   
            let subArraylength=arraySub.length
            for(let j=0;j<subArraylength;j++){
                let pushed=[...arraySub[j],nums[i]]
                let checker=pushed.join('')
                if(!subHolder[checker]){
                arraySub.push(pushed)
                subHolder[checker]=true
                }
            }
                                        
        

    }
       
    
       subsetArray.push(...arraySub)
    }
       helper(nums.slice(1))
       
      
   }
       helper(nums)
   return subsetArray
}

console.log(subsetsTwo([1,2,3,4]))
console.log(subsetsTwo([0]))