const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  console.log(members);
  if (members.length) {
    if (members.some((item) => typeof item !== 'string')) {
      return false;
    } else {
      let solution = '';
      const newArr = members.map((item) => item.toLowerCase());
      newArr.sort();
      newArr.map((item) => (solution += item.trim().slice(0, 1).toUpperCase()));
      return solution;
    }
  } else {
    return false;
  }
};
