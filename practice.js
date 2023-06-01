class Graph {// adjacency list undirected
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(vertexOne, vertexTwo) {
        if (this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo]) {
            if ((this.adjacencyList[vertexOne].every(x => x !== vertexTwo)) && (this.adjacencyList[vertexTwo].every(x => x !== vertexOne))) {
                this.adjacencyList[vertexOne].push(vertexTwo)
                this.adjacencyList[vertexTwo].push(vertexOne)
            }

        }
    }
    removeEdge(vertexOne, vertexTwo) {
        this.adjacencyList[vertexOne]=this.adjacencyList[vertexOne].filter(x=>x!==vertexTwo)
        this.adjacencyList[vertexTwo]=this.adjacencyList[vertexTwo].filter(x=>x!==vertexOne)
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
        this.adjacencyList[vertex].map(x=>this.removeEdge(vertex,x))
        delete this.adjacencyList[vertex]
        }
    }

}

let g = new Graph()
g.addVertex("addis")
g.addVertex("paris")
g.addVertex("london")
g.addVertex("tokyo")
g.addEdge("addis", "paris")
g.addEdge("addis","tokyo")
g.addEdge("addis","london")
g.addEdge("paris","london")

console.log(g.adjacencyList)
g.removeVertex("addis")
console.log(g.adjacencyList)
