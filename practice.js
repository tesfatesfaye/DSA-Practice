// function pivot(arr, start = 0, end = arr.length - 1) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };

//     // We are assuming the pivot is always the first element
//     let pivot = arr[start];
//     let swapIdx = start;

//     for (let i = start + 1; i <= end; i++) {
//       if (pivot > arr[i]) {
//         swapIdx++;
//         swap(arr, swapIdx, i);
//       }
//     }

//     // Swap the pivot from the start the swapPoint
//     swap(arr, start, swapIdx);
//     return swapIdx;
//   }


//   function quickSort(arr, left = 0, right = arr.length -1){
//       if(left < right){
//           let pivotIndex = pivot(arr, left, right) //3
//           //left
//           quickSort(arr,left,pivotIndex-1);
//           //right
//           quickSort(arr,pivotIndex+1,right);
//         }
//        return arr;
//   } 

//  console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))
// var search = function(nums, target) {
//     let index=-1
//         if(nums.length<=1) return -1
//     for(let i=1;i<nums.length;i++){
//         if(nums[i-1]>nums[i]){
//             index=i-1
//             break;
//         }
//     }
//    if(target<=index){
//        return nums[target]
//    }
//    return -1


// };

// console.log(search([4,5,6,7,0,1,2],4))





