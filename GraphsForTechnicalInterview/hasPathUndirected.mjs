import { buildGraph } from "./buildGraph.mjs";
const edges = [
  ["i", "j", "k"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const hasPath = (graph, src, dst, set = new Set([src])) => {
  if (Array.isArray(graph)) graph = buildGraph(graph);
  if (src === dst) return true;
  for (let node of graph[src]) {
    if (!set.has(node)) {
      set.add(node);
      if (hasPath(graph, node, dst, set) === true) return true;
    }
  }
  return false;
};

console.log(hasPath(edges, "i", "m"));
console.log(hasPath(edges, "i", "o"));
