var getAverages = function(nums, k) {
    if(nums[k+k]===undefined) return [-1]
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



console.log(getAverages([7,4,3,9,1,8,5,2,6],3))
console.log(getAverages([40527,53696,10730,66491,62141,83909,78635,18560],2))