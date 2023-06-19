const twoSum=(num,target)=>{
    let hashMap={}
    
    for(let i=0;i<num.length;i++){
    let value=num[i]
    let difference=target-value
        if(hashMap[value]!==undefined){
            return [hashMap[value],i]
        }
     
            hashMap[difference]=i
        }
    
    }
    
    
    const twoSumCrude = (nums, target) =>{
        let hashMap={}
        for(let i=0;i<nums.length;i++){
            if(!hashMap[nums[i]]){
            hashMap[nums[i]]=[i]
            }
            else{
              
                hashMap[nums[i]].push(i)
                    
            }
        }
    
        for(let i in hashMap){
            let item=target-i
            if(item==i && hashMap[i].length>1){
                console.log(hashMap[i][1])
                return[hashMap[i][0],hashMap[i][1]]
            }
            if(hashMap[item]!==undefined){
                return[hashMap[i][0],hashMap[item][0]]
            }
        }
    
    
    
    };
    
    
    const twoSumMap = (nums, target) =>{
        let map=new Map()
        for(let i=0;i<nums.length;i++){
            if(!map.has(nums[i])){
            map.set(nums[i],[i])
            }
            else{
              
                map.get(nums[i]).push(i)
                    
            }
        }
            console.log(map)
        for(let i of map){
            let key=i[0]
         
            let item=target-key
                    if(item===key&& map.get(key).length>1){
              
                return[map.get(key)[0],map.get(key)[1]]
            }
            if(map.has(item) && item!==key){
                return[map.get(item)[0],map.get(key)[0]]
            }
        }
    
    
    
    };