const twoSum = (nums, target) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let targetVal = target - nums[i];
    if (obj[targetVal] !== undefined) {
      return [obj[targetVal], i];
    }
    obj[nums[i]] = i;
  }
};

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

console.log(twoSum([2, 7, 11, 15], 9));
