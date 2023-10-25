const twoSum = (nums, target) => {
  // best implementation
  let obj = {}; // can also be implemented with a map
  for (let i = 0; i < nums.length; i++) {
    let targetVal = target - nums[i];
    if (obj[targetVal] !== undefined) {
      return [obj[targetVal], i];
    }
    obj[nums[i]] = i;
  }
};






// const twoSum=(num,target)=>{
//     let hashMap={}

//     for(let i=0;i<num.length;i++){
//     let value=num[i]
//     let difference=target-value
//         if(hashMap[value]!==undefined){
//             return [hashMap[value],i]
//         }

//             hashMap[difference]=i
//         }

//     }

//     const twoSumCrude = (nums, target) =>{
//         let hashMap={}
//         for(let i=0;i<nums.length;i++){
//             if(!hashMap[nums[i]]){
//             hashMap[nums[i]]=[i]
//             }
//             else{

//                 hashMap[nums[i]].push(i)

//             }
//         }

//         for(let i in hashMap){
//             let item=target-i
//             if(item==i && hashMap[i].length>1){
//                 console.log(hashMap[i][1])
//                 return[hashMap[i][0],hashMap[i][1]]
//             }
//             if(hashMap[item]!==undefined){
//                 return[hashMap[i][0],hashMap[item][0]]
//             }
//         }

//     };

// var twoSum = function(nums, target) {
//     let map= new Map()

//    for(let i=0;i<nums.length;i++){

//         if(map.has(nums[i])){
//           let val=map.get(nums[i])
//             val.push(i)
//             map.set(nums[i],val)

//         }
//         else {
//             map.set(nums[i],[i])
//         }
//     }

//     for(let i=0;i<nums.length;i++){
//         let val=target-nums[i]
//         if(val===nums[i]){
//             if(map.get(nums[i]).length>1){
//                 return [i,map.get(nums[i])[1]]
//             }
//         }
//         else if(map.has(val)){

//             return [i,map.get(val)[0]]
//         }

//     }

// };