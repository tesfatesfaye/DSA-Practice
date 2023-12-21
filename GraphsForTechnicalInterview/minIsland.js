const minimumIsland = (grid) => {
  let minSize = Infinity;
  const visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "L") {
        let size = explore(grid, r, c, visited)|| Infinity;

        minSize = Math.min(minSize, size);
      }
    }
  }
  return minSize;
};

const explore = (grid, r, c, visited) => {
  const rowInbound = 0 <= r && r < grid.length;
  if (!rowInbound) return 0;
  const colInbound = 0 <= c && c < grid[r].length;
  if (grid[r][c] === "W" || !colInbound) return 0;

  const newPos = `${r} , ${c}`;
  if (visited.has(newPos)) return 0;

  visited.add(newPos);
  let size = 1;
  size = size + explore(grid, r - 1, c, visited);
  size = size + explore(grid, r + 1, c, visited);
  size = size + explore(grid, r, c - 1, visited);
  size = size + explore(grid, r, c + 1, visited);

  return size;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid));
