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
  [29, 53]
];
console.log(kClosest(array, 3));
