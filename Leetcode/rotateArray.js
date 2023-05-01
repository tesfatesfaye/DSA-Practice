const rotate = (nums, k) =>{
    let newArray=[]
    let end=nums.length-k
   if(k>nums.length){
       k=k%(nums.length)
       
   }
   if(k>0){
       while(end<nums.length){
           newArray.push(nums[end])
            end++
       }
          for(let i=0;i<nums.length-k;i++){
              newArray.push(nums[i])
          }

          for(let i=0;i<newArray.length;i++){
              nums[i]=newArray[i]
          }

   }
     

};
let value=[1,2,3,4,5,6,7]
rotate(value,3)
console.log(value)