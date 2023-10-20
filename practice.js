






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

// var maxProduct = function (nums) {
//   let max = nums[0];
//   let min = nums[0];
//   let fullMax = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       [max, min] = [min, max];
//     }
//     max = Math.max(nums[i], max * nums[i]);
//     min = Math.min(nums[i], min * nums[i]);
//     fullMax=Math.max(fullMax,max)
//   }
//   return fullMax;
// };

// console.log(maxProduct([3, 4, -3, 5, 6, -9, -10]));
// console.log(maxProduct([-3,2,2]));




// function findKthPositive(arr, k) {
//   let low = 0, high = arr.length;

//   while (low < high) {
//     let mid = Math.floor((low + high) / 2);
//     let missing = arr[mid] - (mid + 1);

//     if (missing < k) {
//       low = mid + 1;
//     } else {
//       high = mid;
//     }
//   }

//   // The variable 'low' will contain the index where we could insert
//   // 'k' missing numbers which would also be the first number to make 'missing' >= 'k'
//   // Return kth missing number
//   return low + k;
// }

// // Test cases
// console.log(findKthPositive([2, 3, 4, 7, 11], 5));  // Output: 9
// console.log(findKthPositive([1, 2, 4], 1));  