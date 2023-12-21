export const buildGraph = (arr) => {
  const graph = {};
  for (let edge of arr) {
    for (let node of edge) {
      if (graph[node] === undefined) graph[node] = new Set();
      for (let value of edge) {
        if (value !== node) {
          graph[node].add(value);
        }
      }
    }
  }
  for (let node in graph) {
    graph[node] = Array.from(graph[node]);
  }

  return graph;
};
