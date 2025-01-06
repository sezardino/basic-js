/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check whether the given string inputString
 * is a MAC-48 address or not.
 *
 * @param {String} inputString
 * @return {Boolean}
 *
 * @example
 * For '00-1B-63-84-45-E6', the output should be true.
 *
 */
function isMAC48Address(inputString) {
  // Check if the string matches the MAC-48 format using a regular expression
  const regex = /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/;
  return regex.test(inputString);
}

module.exports = {
  isMAC48Address,
};
