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
            
            if((this.adjacencyList[vertexOne].every(x=>x!==vertexTwo))&&(this.adjacencyList[vertexTwo].every(x=>x!==vertexOne))){
             
                this.adjacencyList[vertexOne].push(vertexTwo)
                this.adjacencyList[vertexTwo].push(vertexOne)
            }

        }
    }

}

let g=new Graph()
g.addVertex("addis")
g.addVertex("paris")
g.addEdge("addis","paris")
console.log(g)