const converter = (arr) => {
  const graph = {};
  for (let i of arr) {
    for (let j of i) {
      let values = i.filter((x) => x !== j);
      if (graph[j]!==undefined) {
        graph[j] = [...graph[j], ...values];
      } else {
        graph[j] = values;
      }
    }
  }
  return graph;
};

const edges=[['i','j'],['k','i'],['m','k'],['k','l'],['o','n']]
const list=converter(edges)
console.log(list)

