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
            if ((this.adjacencyList[vertexOne].every(x => x !== vertexTwo)) && 
            (this.adjacencyList[vertexTwo].every(x => x !== vertexOne))) {
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
    dfsR(vertex,list=[],marker={}){
       if(this.adjacencyList[vertex]){
            if(!marker[vertex]){
                marker[vertex]=true
                list.push(vertex)
            }
            for(let i of this.adjacencyList[vertex]){
                if(!marker[i]){
                    list.push(i)
                    marker[i]=true
                    this.dfsR(i,list,marker)
                }
            }
       }
       else{
        return null
       }
        return list
    }

}

let g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g.adjacencyList)
console.log(g.dfsR("A"))
