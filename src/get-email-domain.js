/**
 * Given an email address, return its domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const atIndex = email.lastIndexOf("@"); // Find the last occurrence of the '@' symbol
  return email.slice(atIndex + 1); // Return everything after the '@'
}

module.exports = {
  getEmailDomain,
};
