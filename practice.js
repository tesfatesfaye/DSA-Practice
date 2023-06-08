class WeightedGraph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[]
    }
    addEdge(vertexOne, vertexTwo,weight) {
        if (this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo]) {
            if ((this.adjacencyList[vertexOne].every(x => x !== vertexTwo)) && 
            (this.adjacencyList[vertexTwo].every(x => x !== vertexOne))) {
                this.adjacencyList[vertexOne].push({node:vertexTwo,weight})
                this.adjacencyList[vertexTwo].push({node:vertexOne,weight})
            }
        }
    }
}

let graph= new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B",9)
graph.addEdge("B","C",4)
graph.addEdge("A","C",13)
console.log(graph.adjacencyList)


