const helper = (val, graph, visited) => {
  for (let node of graph.get(val)) {
    if (visited.has(node)===false) {
      visited.add(node);
      helper(node, graph, visited);
    }
  }
};

const connectedCount = (graph) => {
  let count = 0;
  const visited = new Set();
  for (let node of graph) {
    if (!visited.has(node[0])) {
      visited.add(node[0]);
      helper(node[0], graph, visited);
      count++;
      
    }
  }

  return count;
};

const graphMap = new Map([
  [3, []],
  [4, [6]],
  [6, [4, 5, 7, 8]],
  [8, [6]],
  [7, [6]],
  [5, [6]],
  [1, [2]],
  [2, [1]],
]);

console.log(connectedCount(graphMap));
