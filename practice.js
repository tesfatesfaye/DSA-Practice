class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
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
console.log(graph.adjacencyList)


