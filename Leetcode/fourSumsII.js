const fourSumTwoSlow = (nums1, nums2, nums3, nums4) => {
  const sorter = (arr) => arr.sort((a, b) => a - b);
  const quad = [sorter(nums1), sorter(nums2), sorter(nums3), sorter(nums4)];
  let counter = 0;
  const kSum = (start, target) => {
    let k = quad.length - start;
    if (k !== 2) {
      let arr = quad[start];
      for (let i = 0; i < arr.length; i++) {
        kSum(start + 1, target - arr[i]);
      }
    } else {
      let left = quad[start];
      let right = quad[start + 1];
      let l = 0;
      let r = right.length - 1;
      while (l < left.length && r >= 0) {
        let sum = left[l] + right[r];
        if (sum > target) {
          r--;
        } else if (sum < target) {
          l++;
        } else {
          l++;
          r--;
          let newL = 1;
          let newR = 1;
          while (left[l] === left[l - 1] && l <= left.length) {
            l++;
            newL++;
          }
          while (right[r] === right[r + 1] && r >= 0) {
            newR++;
            r--;
          }
          counter += newL * newR;
        }
      }
    }
  };
  kSum(0, 0);
  return counter;
};
console.log(fourSumtwoslow([2, 1], [-1, -2], [-1, 2], [0, 2]));
console.log(fourSumtwoslow([0], [0], [0], [0]));
console.log(fourSumtwoslow([-1, -1], [-1, 1], [-1, 1], [1, -1]));
console.log(fourSumtwoslow([0, 0, 1], [-1, 1, 1], [-1, 1, 0], [0, 1, -1]));
