var findKthLargest = function (nums, k) {
  let heap = [];
  let lowestIndex=0
  const swap = (i, j) => {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  };
  const removeLowestValue = () => {
    let lowestValue = heap[heap.length - 1];
    let range = heap.length - Math.ceil(heap.length / 2);
    let index = heap.length - 1;

    while (range < index) {
      if (lowestValue > heap[index]) {
        swap(index, heap.length - 1);
        lowestValue = heap[index];
      }
      index--;
    }
    return heap.pop();
  };
  const setHeap = (value) => {
    
    heap.push(value);

    const parent = (x) => {
      return Math.floor(x - 1 / 2);
    };

    let index = heap.length - 1;
    while (index) {
      let pv = parent(index);
      if (value > heap[pv]) {
        swap(parent(index), index);
        index = pv;
      } else {
        if(value<heap[lowestIndex]) lowestIndex=index
        break;
      }
    }
    if (k < heap.length) {
     if(heap[lowestIndex]<heap[heap.length-1]){
        swap(lowestIndex,heap.length-1)
        heap.pop()
        while()
     }
     
        
    }
  };
  for (let i of nums) {
    setHeap(i);
  }

  return removeLowestValue();
};
