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
  const values = new Set();
  const helper = (key) => {
    if (!values.has(key)) {
      values.add(key);
      for (let i of graph[key]) {
        helper(i);
      }
    }
  };
  helper(key);

  return [...values.values()];
};
console.log(dft("a", al));

const dftIterative = (graph, source) => {
  // iterative depth first
  const stack = [source];
  const values = new Set([source]);
  while (stack.length > 0) {
    const current = stack.pop();

    for (let i of graph[current]) {
      values.add(i);
      stack.push(i);
    }
  }

  return [...values.values()];
};

console.log(dftIterative(al, "a"));

const bfs = (key, graph) => { // breadth first search
  const queue = [key];
  const values = new Set([key]);
  while (queue.length) {
    let currentNode = queue.shift();
    for (let i of graph[currentNode]) {
      values.add(i)
      queue.push(i)

    }
  }
  return [...values.keys()]
};

console.log(bfs("a",al))