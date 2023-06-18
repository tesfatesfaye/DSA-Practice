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