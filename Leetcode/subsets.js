
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


const subsetTwo=(arr)=>{
if(arr.length<=1){
    if(arr.length===0) return []
    return[arr[0]]
} 
const mainArray=[[]]
const helper=(value)=>{
if(value.length<=0) return
const tempHolder=[[value[0]]]
for(let i=1;i<value.length;i++){
   let length=tempHolder.length
   for(let j=0;j<length;j++){
        tempHolder.push([...tempHolder[j],value[i]])
   }
}
    mainArray.push(...tempHolder)
    helper(value.slice(1))
}
    helper(arr)
    return mainArray



}
console.log(subsetTwo([1,2,3,4]).length)