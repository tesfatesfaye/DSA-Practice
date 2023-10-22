
var findKthLargest = function (nums, k) {
    let largest=null
  const heap = [];
  const swap = (one, two) => {
    [heap[one], heap[two]] = [heap[two], heap[one]];
  };
  const parentIndex = (x) => Math.floor((x - 1) / 2);
  const maxHeap = (arr) => {
    for(let value of arr ){
    heap.push(value);
    let index = heap.length - 1;
      while (index) {
        let parent=parentIndex(index)
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
  const extractMax=()=>{
     if(!heap.length) return null
    
     swap(0,heap.length-1)

      largest=heap.pop()
        let parentIndex=0
        while(true){
        let left=findChild(parentIndex)
        let right=findChild(parentIndex,1)
        let largerChild=heap[left]>heap[right] ? left : right
        if(heap[largerChild]>heap[parentIndex]){
            swap(parentIndex,largerChild)
            parentIndex=largerChild
        }
        else{
            break;
        }

        }
        
        return largest


  }
  maxHeap(nums)
  k= k<=heap.length ? k : heap.length
  while(k--){
  extractMax()
  }
  return largest
};

console.log(findKthLargest([1,2,3,4,5,6,7,8,9],3))