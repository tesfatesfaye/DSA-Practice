//work in progress
const graph = {
  1: ["2"],
  2: ["1", "8"],
  6: ["7"],
  9: ["8"],
  7: ["6", "8"],
  8: ["9", "7", "2"],
};

const largestComponentHelper = (graph) => {
  let largestComponentSize = 0;
  const visited = new Set();
  const helper = (current, currentMax) => {
    if (!visited.has(current)) {
      visited.add(current);
      currentMax++;
      for (let node of graph[current]) {
        currentMax = helper(node, currentMax);
      }
    }
    return currentMax;
  };

  for (let node in graph) {
    largestComponentSize = Math.max(largestComponentSize, helper(node, 0));
  }

  return largestComponentSize;
};

console.log(largestComponentHelper(graph));

const largestComponent = (
  graph,
  largest = 0,
  node = null,
  visited = new Set()
) => {
  if (node === null) {
    for (let current in graph) {
      largest = Math.max(largest, largestComponent(graph, 0, current, visited));
    }
  } else {
    if (!visited.has(node)) {
      largest++;
      visited.add(node);
      for (let current of graph[node]) {
        largest = largestComponent(graph, largest, current, visited);
      }
    }
  }
  return largest
};
console.log(largestComponent(graph))
