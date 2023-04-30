const longestConsecutive=(arr)=>{
    if(arr.length===0) return 0
    let longestConsecutive=1
    let valueHolder={}
    for(let i of arr){
            if(!valueHolder[i]){
                valueHolder[i]=1
                
            }
          
    }
      
        for(let i in valueHolder){
            let consecutive=1
            let convertedI=parseInt(i)
            while(valueHolder[convertedI+consecutive]){
                valueHolder[i]=valueHolder[i]+valueHolder[convertedI+consecutive]
                delete valueHolder[convertedI+consecutive]
                consecutive++

            }
                
            if(valueHolder[i]>longestConsecutive) longestConsecutive=valueHolder[i]
        }

            return longestConsecutive
}

console.log(longestConsecutive([0,1,-1]))