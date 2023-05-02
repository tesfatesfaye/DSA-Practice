var removeDuplicates = function(nums) {
    let obj={}
    let neg={}
    let removedDuplicatesArray=[]

for(let i=0;i<nums.length;i++){
    if(nums[i]<0){
        if(!neg[nums[i]]){
            neg[nums[i]]=1
        }
    }
    else{
    if(!obj[nums[i]]){
        obj[nums[i]]=1
        

    }
    }
       
}

 if(Object.keys(neg).length>0){
            for(let i in neg){
                removedDuplicatesArray.push(parseInt(i))
                }
            
    }

    if(Object.keys(obj).length>0){
        for(let i in obj){
                removedDuplicatesArray.push(parseInt(i))
                }
            
    }

    nums.splice(0,nums.length)
    for(let i of removedDuplicatesArray){
        nums.push(i)
    }

// nums=removedDuplicatesArray
return nums.length

};


console.log(removeDuplicates([-2,-2,-1,0,1,1,1,2,2,3,3,4]))
