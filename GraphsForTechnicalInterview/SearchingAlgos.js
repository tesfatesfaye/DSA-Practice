const al = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const dft = (key, graph) => {
  // recursive
  if (graph[key] === undefined) return [];
  const visited = new Set();
  const helper = (key) => {
    if (!visited.has(key)) {
      visited.add(key);
      for (let i of graph[key]) {
        helper(i);
      }
    }
  };
  helper(key);

  return Array.from(visited);
};
console.log(dft("a", al));

const dftIterative = (graph, source) => {
  // iterative depth first
  const stack = [source];
  const visited = new Set([source]);
  while (stack.length > 0) {
    const current = stack.pop();

    for (let i of graph[current]) {
      visited.add(i);
      stack.push(i);
    }
  }

  return Array.from(visited);
};

console.log(dftIterative(al, "a"));

const bfs = (key, graph) => { // breadth first search
  const queue = [key];
  const visited = new Set([key]);
  while (queue.length) {
    let currentNode = queue.shift();
    for (let i of graph[currentNode]) {
      visited.add(i)
      queue.push(i)

    }
  }
  return Array.from(visited)
};

console.log(bfs("a",al))