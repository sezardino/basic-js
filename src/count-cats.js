/**
 * Given a matrix, find cats by their ears "^^".
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3
 *
 */
function countCats(matrix) {
  let count = 0;

  // Iterate through each row and each cell in the matrix
  for (let row of matrix) {
    for (let cell of row) {
      if (cell === "^^") {
        count++; // Increment count if the cell contains "^^"
      }
    }
  }

  return count;
}

module.exports = {
  countCats,
};
