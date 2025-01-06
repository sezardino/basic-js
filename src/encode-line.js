/**
 * Given a string, return its encoded version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let count = 1; // Counter for consecutive identical characters

  // Loop through the string from the first to the second last character
  for (let i = 0; i < str.length; i++) {
    // If the current character is the same as the next one
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      // If the characters are different or it's the last character
      result += count > 1 ? count + str[i] : str[i];
      count = 1; // Reset the counter
    }
  }

  return result;
}

module.exports = {
  encodeLine,
};
