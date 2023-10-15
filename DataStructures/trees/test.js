

// let number="(123)-987-4567"
// const valid=(num)=>{
// let split = num.split("");
// let obj = { "-": 1, "(": 1, ")": 1 };
// split=split.filter(x=>!obj[x])
// split = split.join("");
// return ((split.length === 10 && !!parseInt(split)) ?? false);
// }

// console.log(valid(number))
// console.log(valid("987-123-4567"));


// const validTwo=(val)=>{
//     let replaced=val.replace(["-",","],["",""])
//     return replaced
// }
// console.log(validTwo("t-e,"))

// var missingNumber = function (nums) {
//   let sum = nums.reduce((x, y) => x + y);
//   let n = nums.length+1;
//   n = (n * (n + 1)) / 2;
//   return n - sum ?? nums.length+1;
// };

// console.log(missingNumber([3,1,2]))

const firstMissingPositive =  (nums) =>{
  let counter = 0;
  let value = nums[counter];
   
  while (counter < nums.length) {
    if (nums[value - 1] === undefined || nums[value - 1] === value) {
       
      counter++
      value = nums[counter];
    } 
    else {
       [nums[value-1],value]=[value,nums[value-1]]
   
    }
  }

  for (let i = 0; i < nums.length; i++) {
    
    if (nums[i] === i + 1) {
        continue
    }
    return i + 1;
  
  }
 
  return nums.length + 1;
};

console.log(firstMissingPositive([7, 8, 9, 11, 12]));