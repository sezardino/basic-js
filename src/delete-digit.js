/**
 * Given an integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString(); // Convert the number to a string
  let maxNumber = -Infinity; // Initially set the maximum number to a very small value

  // Loop through all the indices of the string
  for (let i = 0; i < str.length; i++) {
    // Create a new number by removing the current digit
    const newNumber = Number(str.slice(0, i) + str.slice(i + 1));
    maxNumber = Math.max(maxNumber, newNumber); // Update the maximum value
  }

  return maxNumber;
}

module.exports = {
  deleteDigit,
};
