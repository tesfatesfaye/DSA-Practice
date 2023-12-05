var findKthLargestHeap = function (nums, k) {
  let largest = null;
  const heap = [];
  const swap = (one, two) => {
    [heap[one], heap[two]] = [heap[two], heap[one]];
  };
  const parentIndex = (x) => Math.floor((x - 1) / 2);
  const maxHeap = (arr) => {
    for (let value of arr) {
      heap.push(value);
      let index = heap.length - 1;
      while (index) {
        let parent = parentIndex(index);
        if (heap[index] > heap[parent]) {
          swap(index, parent);
          index = parent;
        } else {
          break;
        }
      }
    }
    return heap;
  };
  const findChild = (parent, child = 0) => {
    let index;
    if (child === 1) {
      index = 2 * parent + 2;
    } else {
      index = 2 * parent + 1;
    }

    return heap[index] !== undefined ? index : parent;
  };
  const extractMax = () => {
    if (!heap.length) return null;

    swap(0, heap.length - 1);

    largest = heap.pop();
    let parentIndex = 0;
    while (true) {
      let left = findChild(parentIndex);
      let right = findChild(parentIndex, 1);
      let largerChild = heap[left] > heap[right] ? left : right;
      if (heap[largerChild] > heap[parentIndex]) {
        swap(parentIndex, largerChild);
        parentIndex = largerChild;
      } else {
        break;
      }
    }

    return largest;
  };
  maxHeap(nums);

  while (k--) {
    extractMax();
  }
  return largest;
};





const pivotFunction = (nums, left = 0, right = nums.length - 1) => {
  const swapper = (nums, left, right) =>
    ([nums[left], nums[right]] = [nums[right], nums[left]]);
  let pivotIndex = Math.floor(Math.random() * (right - left) + left);
  swapper(nums, pivotIndex, right);

  let l = left;

  while (left <= right) {
    if (nums[left] > nums[right]) {
      swapper(nums, left, l);
      l++;
    }
    left++;
  }
  swapper(nums, l, right);
  return l;
};

const kthLargest = (nums, k, left = 0, right = nums.length - 1) => { // quick select function
  if (right == k - 1 || left < 0) return nums.slice(0, k);
  const pivot = pivotFunction(nums, left, right);
  if (k - 1 === pivot) return nums.slice(0, k);
  if (pivot > k - 1) {
    return kthLargest(nums, k, 0, pivot - 1);
  } else {
    return kthLargest(nums, k, pivot + 1, right);
  }
};

const array = [3, 1, 19, 27, 2, 17];
console.log(kthLargest(array, 3));
