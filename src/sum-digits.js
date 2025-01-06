/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one-digit number.
 *
 * @param {Number} n - The input number.
 * @return {Number} - The one-digit number obtained by repeatedly summing the digits.
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 */
function getSumOfDigits(n) {
  // While the number is greater than or equal to 10, sum its digits
  while (n >= 10) {
    n = n
      .toString() // Convert number to string
      .split("") // Split into an array of digits
      .reduce((sum, digit) => sum + Number(digit), 0); // Sum the digits
  }
  return n;
}

module.exports = {
  getSumOfDigits,
};
