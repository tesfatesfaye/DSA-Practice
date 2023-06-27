var getAverages = function(nums, k) {
    if(nums[k+k]===undefined){
        let arr=[]
        for(let i=0;i<nums.length;i++){
            arr[i]=-1
        } 
        return arr
    }
   if(k===0){
     return nums
   }
   let newArray=[]
   let sum=0
   let counter=0
   let placer=k
   let left=0
   while(counter<=(k*2)){
       if(counter<k)newArray[counter]=-1
       sum+=nums[counter]
       counter++
   }


  while((placer+k)<nums.length){
   let avg=Math.floor(sum/((k*2)+1))
   newArray[placer]=avg
   placer++
   sum=sum+nums[counter]-nums[left]
   left++
   counter++
  }

  while(placer<nums.length){
   newArray[placer]=-1
   placer++
  }
   
 return newArray

};



