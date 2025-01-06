/**
 * In the popular Minesweeper game, you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines,
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be the following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // Determine the size of the field
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Create a new matrix for the result
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // For each cell, check its neighbors
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // If there is a mine in the current cell, increase the count for neighboring cells
      if (matrix[i][j]) {
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            // Check if the neighbor is within bounds and avoid counting the mine itself
            if (
              i + x >= 0 &&
              i + x < rows &&
              j + y >= 0 &&
              j + y < cols &&
              (x !== 0 || y !== 0)
            ) {
              result[i + x][j + y] += 1;
            }
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
