/**
 * Create the name of a dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * if the input is incorrect
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Check if the input is an array
  if (!Array.isArray(members)) {
    return false;
  }

  // Iterate through each element of the array
  const initials = members
    .filter((member) => typeof member === "string") // Filter only strings
    .map((member) => member.trim()[0].toUpperCase()) // Take the first letter and convert it to uppercase
    .sort() // Sort the letters alphabetically
    .join(""); // Join the letters to form a string

  return initials;
}

module.exports = {
  createDreamTeam,
};
