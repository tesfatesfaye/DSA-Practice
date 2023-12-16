const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const hasPath = (graph, src, dst, set = new Set()) => {
  // recursive
  if (src === dst) return true;
  for (let neighbor of graph[src]) {
    if (!set.has(neighbor)) {
      set.add(neighbor);
      if (hasPath(graph, neighbor, dst, set) === true) return true;
    }
  }
  return false;
};

const hasPathBfs = (graph, src, dst) => {
  const queue = [src];
  const values = new Set(src);
  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      if (!values.has(neighbor)) {
        queue.push(neighbor);
        values.add(neighbor);
      }
    }
  }
  return false;
};

const hasPathTwo = (graph, src, dst, set = new Set([src])) => {
  if (src === dst) return true;
  for (let neighbor of graph[src]) {
    if (!set.has(neighbor)) {
      set.add(neighbor)
      if (hasPathTwo(graph, neighbor, dst, set)===true) return true;
    }
  }
  return false
};

console.log(hasPathBfs(graph, "f", "k"));
console.log(hasPathTwo(graph, "f", "j"));
