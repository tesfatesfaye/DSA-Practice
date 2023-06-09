// Define a Node class with a constructor that takes two parameters: val and priority.
class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
    }
  }
   // Define a PriorityQueue class with a constructor that initializes an empty array called values.
  class PriorityQueue {
    constructor() {
      this.values = [];
    }
     // Define a swap function that swaps two values in the values array at specified indices.
    swap(indexOne, indexTwo) {
      [this.values[indexOne], this.values[indexTwo]] = [this.values[indexTwo], this.values[indexOne]];
    }
     // Define an Enqueue function that takes in two parameters: val and priority. It creates a new node with the given val and priority and pushes it to the end of the values array. It then compares the priority of the newly added node with its parent node. If the priority of the new node is less than its parent node, it swaps the two nodes until the new node is in the correct position.
    Enqueue(val, priority) {
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      let index = this.values.length - 1;
       // Define a parent function that returns the index of the parent node.
      const parent = (x) => {
        return (Math.floor((x - 1) / 2));
      }
       while (index) {
        let parentIn = parent(index);
        if ((this.values[index]).priority < (this.values[parentIn]).priority) {
          this.swap(parentIn, index);
          index = parentIn;
        } else {
          break;
        }
      }
      return this.values;
    }
     // Define a Dequeue function that removes the element with the highest priority from the values array. It first checks if there is only one element in the array, if so, it removes and returns that element. If there are more than one elements in the array, it swaps the first and last elements in the array and removes the last element. It then compares the priority of the new first element with its child nodes. If the priority of the child node is less than the priority of the first element, it swaps the two nodes until the first element is in the correct position.
    Dequeue() {
      if (this.values.length <= 1) {
        if (this.values.length === 1) return this.values.pop();
        return null;
      }
       this.swap(0, this.values.length - 1);
      let min = this.values.pop();
      let index = 0;
      while (true) {
        let leftChild = this.values[(2 * index) + 1] ? (2 * index) + 1 : index;
        let rightChild = this.values[(2 * index) + 2] ? (2 * index) + 2 : index;
        let largerPriority = this.values[rightChild].priority < this.values[leftChild].priority ? rightChild : leftChild;
        console.log(largerPriority);
        if ((this.values[largerPriority]).priority < this.values[index].priority) {
          this.swap(largerPriority, index);
          index = largerPriority;
        } else {
          break;
        }
      }
      return min;
    }
  }
    
    const min= new PriorityQueue()
    let array=[new Node(41,0),new Node(18,5),new Node(33,2), new Node(39,1),new Node(27,3),new Node(12,6)]
    let counter=0
        while(counter<array.length){
            console.log(min.Enqueue(array[counter].val,array[counter].priority))
            counter++
        }
    console.log(min.values[0])
    console.log(min.Dequeue())
    console.log(min.values[0])