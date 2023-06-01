class Graph{// adjacency list undirected
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
            if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]
            }
    }
    addEdge(vertexOne,vertexTwo){
        if(this.adjacencyList[vertexOne]&&this.adjacencyList[vertexTwo]){
            if((this.adjacencyList[vertexOne].some(x=>x!==vertexTwo))&&(this.adjacencyList[vertexTwo].some(x=>x!==vertexOne))){
                this.adjacencyList[vertexOne].push(vertexTwo)
                this.adjacencyList[vertexTwo].push(vertexOne)
            }

        }
    }

}