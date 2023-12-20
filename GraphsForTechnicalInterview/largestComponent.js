//work in progress
const graph = {
  0: ['4','7'],
  1: [],
  2: [],
  3: ['6'],
  4: ['0'],
  6: ['3'],
  7: ['0'],
  8: []};

const largestComponent = (graph) => {
  let max = 0;
  const visited = new Set();
  const explore = (current, currentMax) => {
    currentMax++;
    visited.add(String(current));

    for (let node of graph[current]) {
      if (!visited.has(String(node))) {
        currentMax = explore(node, currentMax);
      }
    }
    return currentMax;
  };
  for (let i in graph) {
    if (!visited.has(i)) {
      max = Math.max(max, explore(i, 0));
    }
  }
  return max;
};

console.log(largestComponent(graph));
