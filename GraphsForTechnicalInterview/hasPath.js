const graph = { f: ["g", "i"], g: ["h"], h: [], i: ["g", "k"], j: ["i"],k:[] };

const hasPath=(graph,src,dst,set=new Set())=>{
    if(src===dst) return true
    for(let neighbor of graph[src]){
        if(!set.has(neighbor)){
            set.add(neighbor)
            if(hasPath(graph,neighbor,dst,set)===true) return true
        }
    }
    return false
}








const hasPathTwo = (graph, src, dst) => {
 
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

console.log(hasPath(graph, "j", "f"));
