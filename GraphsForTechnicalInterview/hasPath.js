const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const hasPath = (graph, src, dst, visited = new Set()) => {
  if (src === dst) return true;
  for (let neighbor of graph[src]) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      if (hasPath(graph, neighbor, dst, visited) === true) return true;
    }
  }
  return false;
};

const hasPathBfs = (graph, src, dst) => {
  const queue = [src];
  const visited = new Set(src);
  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
  return false;
};

console.log(hasPathBfs(graph, "f", "k"));
console.log(hasPath(graph, "f", "j"));
