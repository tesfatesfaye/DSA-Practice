// var letterCombinations = function(digits) {
//     let obj={}
//     let charIndex=97

//     for(let i=2;i<10;i++){
//         obj[i]=[]
//         for(let j=0;j<(3+(i===7||i===9 ? 1 : 0));j++){
//           obj[i].push(String.fromCharCode(charIndex))
//             charIndex++
//         }
//     }
//     if(digits.length<=1){
//       return ( digits.length===0 ? digits=[''] : digits=obj[digits])
//     }
//     let digitsArr=[]
//     for(let i=0;i<digits.length;i++){
//         for(let j=0;j<obj[digits[i+1]].length;j++){

//         }

//     }

// };

var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let fullMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [max, min] = [min, max];
    }
    max = Math.max(nums[i], max * nums[i]);
    min = Math.min(nums[i], min * nums[i]);
    fullMax=Math.max(fullMax,max)
  }
  return fullMax;
};

console.log(maxProduct([3, 4, -3, 5, 6, -9, -10]));
console.log(maxProduct([-3,2,2]));
