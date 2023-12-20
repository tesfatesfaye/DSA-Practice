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

const largestComponent = (graph) => {
  let max = 0;
  const visited = new Set();
  const explore = (current, currentMax) => {
    for (let node of graph[current]) {
      if (!visited.has(String(node))) {
        visited.add(String(current));
        explore(node, currentMax + 1);
      }
    }
    return currentMax;
  };
  for (let i in graph) {
    if (!visited.has(i)) {
      visited.add(i);
      max = Math.max(max, explore(i, max + 1));
    }
  }
  return max;
};

// console.log(largestComponent(graph));
