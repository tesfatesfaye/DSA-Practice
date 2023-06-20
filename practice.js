var getAverages = function(nums, k) {
    if(k*2>nums.length) return 0
    if(k===nums.length-1){
        let zero=nums.reduce((x,y)=>x+y)
        zero=Math.floor(zero/nums.length)
        return zero
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
    

   while(placer<k*2){
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
