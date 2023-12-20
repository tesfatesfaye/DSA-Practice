//work in progress
const graph = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};

const largestComponentHelper=(graph)=>{
    let largestComponentSize=0
    const visited=new Set()
    const helper=(current,currentMax)=>{
        if(!visited.has(current)){
            visited.add(current)
            currentMax++
            for(let node of graph[current]){
                currentMax=helper(node,currentMax)
            }
        }
        return currentMax

    }

    for(let node in graph){
        largestComponentSize=Math.max(largestComponentSize,helper(node,0))
    }

    return largestComponentSize
}

console.log(largestComponentHelper(graph));