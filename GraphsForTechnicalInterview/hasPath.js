const graph = { f: ["g", "i"], g: ["h"], h: [], i: ["g", "k"], j: ["i"],k:[] };

const DFS = (graph, src, dst) => {
 
  const passed = new Set();

  const helper = (key) => {

    if (!passed.has(key)) {
      passed.add(key);
      for (let i of graph[key]) {
        if (i === dst) {
          return true;
        } else {
          let newNode = helper(i);
          if (newNode === true) return true;
        }
      }
    }
     return false
  };
  return helper(src)
};

console.log(DFS(graph, "j", "f"));
