const islandCount = (grid) => {
  const visited=new Set()
  let count=0
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
     if(explore(grid, r, c, visited)===true) count+=1 ;
    }
  }

  return count
};

const explore = (grid, r, c, visited) => {
  const rowInbound = 0 <= r && r < grid.length;
  const colInbound = 0 <= c && c < grid[0].length;
  if (!rowInbound || !colInbound) return false;
  if(grid[r][c]==="0") return false
  const newPos=`${r} , ${c}`
  if(visited.has(newPos)) return false
  visited.add(newPos)

  
  explore(grid, r - 1, c, visited);
  explore(grid,r+1,c,visited)
  explore(grid, r, c-1, visited)
  explore(grid,r,c+1,visited)

  return true

};

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid))