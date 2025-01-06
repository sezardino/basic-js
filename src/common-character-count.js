/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const map1 = {};

  // Count the frequency of characters in the first string
  for (let char of s1) {
    map1[char] = (map1[char] || 0) + 1;
  }

  // For each character in the second string, check if it exists in the first string
  for (let char of s2) {
    if (map1[char] > 0) {
      count++;
      map1[char]--; // Decrease the counter for the character
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
