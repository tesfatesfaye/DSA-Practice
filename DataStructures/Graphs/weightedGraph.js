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
    enqueue(val, priority) {
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
    dequeue() {
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
    

  
class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(vertexOne, vertexTwo, weight) {
        if (this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo]) {
            if ((this.adjacencyList[vertexOne].every(x => x !== vertexTwo)) &&
                (this.adjacencyList[vertexTwo].every(x => x !== vertexOne))) {
                this.adjacencyList[vertexOne].push({ node: vertexTwo, weight })
                this.adjacencyList[vertexTwo].push({ node: vertexOne, weight })
            }
        }
    }
    dijkstra(start, finish) {
        if(!this.adjacencyList[start] || !this.adjacencyList[finish]) return null
        const nodes=new PriorityQueue();
        const distances={}
        const previous={}
        let path=[]
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex===start){
                distances[vertex]=0
                nodes.enqueue(vertex,0)
            }
            else {
                distances[vertex]=Infinity
                nodes.enqueue(vertex,Infinity)
            }
            previous[vertex]=null
        }
        while(nodes.values.length){
            smallest=nodes.dequeue().val
            if(smallest===finish){
                while(previous[smallest]){
                    path.push(smallest)
                    smallest=previous[smallest]
                }
                break
            }
            if(smallest || distances[smallest]!==Infinity){
                
                for(let neighbor of this.adjacencyList[smallest]){
                    let candidate=distances[smallest]+neighbor.weight
                    let neighborVal=neighbor.node
                    if(candidate<distances[neighborVal]){
                        distances[neighborVal]=candidate
                        previous[neighborVal]=smallest
                        nodes.enqueue(neighborVal,candidate);
                    }

                }
            }
        }
           
    
        path.push(start)
        path.reverse()
        return [path,distances[finish]]
    }

        
     


}

let graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)
console.log(graph.dijkstra("A","E"))
console.log(graph.dijkstra("A","F"))
// console.log(graph.adjacencyList)
