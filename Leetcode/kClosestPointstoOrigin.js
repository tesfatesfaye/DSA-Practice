// const kClosest = (points, k) => {
//   const dis = (nums) => {
//     return Math.sqrt(Math.pow(nums[0], 2) + Math.pow(nums[1], 2));
//   };
//   const maxHeap = [];
//   const parentIndex = (index) => Math.floor((index - 1) / 2);
//   const swapper = (i, j) =>
//     ([maxHeap[i], maxHeap[j]] = [maxHeap[j], maxHeap[i]]);
//   const childNodes = (index, child = "l") => {
//     if (child === "l") {
//       let left = index * 2 + 1;
//       return maxHeap[left] !== undefined ? left : index;
//     } else {
//       let right = index * 2 + 2;
//       return maxHeap[right] !== undefined ? right : index;
//     }
//   };

//   const remove = () => {
//     let value = null;
//     if (maxHeap.length) {
//       swapper(0, maxHeap.length - 1);

//       value = maxHeap.pop();
//       let index = 0;
//       while (index < maxHeap.length - 1) {
//         let left = childNodes(index);
//         let right = childNodes(index, false);
//         let smallest = dis(maxHeap[left]) > dis(maxHeap[right]) ? left : right;
//         if (dis(maxHeap[index]) < dis(maxHeap[smallest])) {
//           swapper(index, smallest);
//           index = smallest;
//         } else {
//           break;
//         }
//       }
//     }
//     return value;
//   };
//   const insert = (value) => {
//     maxHeap.push(value);
//     if (maxHeap.length) {
//       let index = maxHeap.length - 1;
//       let parent = parentIndex(index);
//       while (index) {
//         if (dis(value) > dis(maxHeap[parent])) {
//           swapper(index, parent);
//           index = parent;
//           parent = parentIndex(index);
//         } else {
//           break;
//         }
//       }
//     }
//     if (maxHeap.length > k) {
//       remove();
//     }
//   };
//   for (let i of points) {
//     insert(i);
//   }

//   return maxHeap;
// };
const pivotFunction = (nums, left = 0, right = nums.length - 1) => {
  const swapper = (nums, left, right) =>
    ([nums[left], nums[right]] = [nums[right], nums[left]]);
  let pivotIndex = Math.floor(Math.random() * (right - left) + left);
  swapper(nums, pivotIndex, right);
  const dis = (nums) => {
    return Math.sqrt(Math.pow(nums[0], 2) + Math.pow(nums[1], 2));
  };
  let l = left;

  while (left <= right) {
    if (dis(nums[left]) < dis(nums[right])) {
      swapper(nums, left, l);
      l++;
    }
    left++;
  }
  swapper(nums, l, right);
  return l;
};

const kClosest = (nums, k, left = 0, right = nums.length - 1) => {
  if (right == k - 1 || left < 0) return nums.slice(0, k);
  const pivot = pivotFunction(nums, left, right);
  if (k - 1 === pivot) return nums.slice(0, k);
  if (pivot > k - 1) {
    return kClosest(nums, k, 0, pivot - 1);
  } else {
    return kClosest(nums, k, pivot + 1, right);
  }
};

const array = [
  [3, 3],
  [1, 1],
  [0, 0],
  [29, 53],
];
console.log(kClosest(array, 3));


console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
);

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);
