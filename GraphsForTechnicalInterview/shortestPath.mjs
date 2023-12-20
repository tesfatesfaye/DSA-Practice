import { buildGraph } from "./buildGraph.mjs";
const graph =buildGraph( [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
]);

const shortestPath = (edges, nodeA, nodeB) => {
  const visited = new Set();
  const queue = [[nodeA, 0]];
  while (queue.length) {
    let [node, distance] = queue.shift();
    visited.add(node);
    if (node === nodeB) return distance;
    for (let neighbor of edges[node]) {
      if (visited.has(neighbor)) continue;
      queue.push([neighbor, distance + 1]);
    }
  }

  return -1;
};
console.log(shortestPath(graph, "w", "z"));
