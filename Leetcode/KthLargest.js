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





const swap = (arr, one, two) => {
  [arr[one], arr[two]] = [arr[two], arr[one]];
};

const pivot = (arr, left = 0, right = arr.length - 1) => {
  let start = left;

  while (left < right) {
    if (arr[left] < arr[right]) {
      swap(arr, left, start);
      start++;
    }
    left++;
  }
  swap(arr, start, right);
  return start;
};


  const dis = (nums) => {
    return Math.sqrt(Math.pow(nums[0], 2) + Math.pow(nums[1], 2));
  };


const KthLargestQuickSelect = (arr, k, left = 0, right = arr.length - 1) => {
  let kval = arr.length - k;
  if (left === right) return arr[left];

  let piv = pivot(arr, left, right);

  if (piv === kval) {
    return arr[piv];
  } else if (kval < piv) {
    return KthLargestQuickSelect(arr, k, left, piv - 1);
  } else {
    return KthLargestQuickSelect(arr, k, piv + 1, right);
  }
};

const array = [
  13, 5, 28, 8, 4, 30, 10, 25, 17, 2, 12, 9, 19, 1, 23, 16, 29, 20, 21, 6, 3, 7,
  27, 24, 26, 11, 14, 15, 18, 22,
];

console.log(KthLargestQuickSelect(array, 2));
console.log(array);