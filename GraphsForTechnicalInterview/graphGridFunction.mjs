const generateGrid = (rows, cols) => {
  let counter = 0;
  let grid = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(counter++);
    }
    grid.push(row);
  }
  return grid;
};

const grid = generateGrid(5, 5);
console.log(grid);

const returnGridValue = (grid, row, col) => {
  const cell = grid[row][col];
  return cell;
};
console.log(returnGridValue(grid, 2, 2));
