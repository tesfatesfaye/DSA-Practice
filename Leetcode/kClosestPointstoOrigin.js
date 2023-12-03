const kClosest = (points, k) => {
  const dis = (nums) => {
    return Math.sqrt(Math.pow(nums[0], 2) + Math.pow(nums[1], 2));
  };
  const maxHeap = [];
  const parentIndex = (index) => Math.floor((index - 1) / 2);
  const swapper = (i, j) =>
    ([maxHeap[i], maxHeap[j]] = [maxHeap[j], maxHeap[i]]);
  const childNodes = (index, child = "l") => {
    if (child === "l") {
      let left = index * 2 + 1;
      return maxHeap[left] !== undefined ? left : index;
    } else {
      let right = index * 2 + 2;
      return maxHeap[right] !== undefined ? right : index;
    }
  };

  const remove = () => {
    let value = null;
    if (maxHeap.length) {
      swapper(0, maxHeap.length - 1);

      value = maxHeap.pop();
      let index = 0;
      while (index < maxHeap.length - 1) {
        let left = childNodes(index);
        let right = childNodes(index, false);
        let smallest = dis(maxHeap[left]) > dis(maxHeap[right]) ? left : right;
        if (dis(maxHeap[index]) < dis(maxHeap[smallest])) {
          swapper(index, smallest);
          index = smallest;
        } else {
          break;
        }
      }
    }
    return value;
  };
  const insert = (value) => {
    maxHeap.push(value);
    if (maxHeap.length) {
      let index = maxHeap.length - 1;
      let parent = parentIndex(index);
      while (index) {
        if (dis(value) > dis(maxHeap[parent])) {
          swapper(index, parent);
          index = parent;
          parent = parentIndex(index);
        } else {
          break;
        }
      }
    }
    if (maxHeap.length > k) {
      remove();
    }
  };
  for (let i of points) {
    insert(i);
  }

  return maxHeap;
};

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
