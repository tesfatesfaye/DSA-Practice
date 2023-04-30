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






const binarySearch = (arr, val, start = 0, end = arr.length) => {
    let left = start
    let right = end


    while (left <= right) {
        let middleValue = Math.floor((left + right) / 2)
        if (arr[middleValue] === val) {
            return middleValue
        }
        else if (arr[middleValue] < val) {
            left = middleValue + 1
        }
        else {
            right = middleValue - 1
        }



    }
    return -1

}
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13],10))

const findK = (rotateArray) => {
    if (rotateArray.length <= 1) return 0
    if (rotateArray[0] < rotateArray[rotateArray.length - 1]) return 0

    let left = 0
    let right = rotateArray.length - 1


    while (left <= right) {
        let middleValue = Math.floor((left + right) / 2)

        if (rotateArray[left] <= rotateArray[middleValue] && rotateArray[middleValue] > rotateArray[middleValue + 1]) {
            return middleValue + 1
        }
        else if (rotateArray[left] > rotateArray[middleValue]) {
            right = middleValue - 1
        }
        else {
            left = middleValue + 1
        }

    }





}
// console.log(findK([7,1,2,3,4,5,6]))


