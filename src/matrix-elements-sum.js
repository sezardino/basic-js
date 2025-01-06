/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  // Iterate over all rows and columns
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // If there is no 0 above in the current column, add the current element to the sum
      if (row === 0 || matrix[row - 1][col] !== 0) {
        sum += matrix[row][col];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
