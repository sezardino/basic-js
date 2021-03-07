const CustomError = require('../extensions/custom-error');

module.exports = function countCats(array) {
  let count = 0;
  array.forEach((item) => {
    item.map((item) => {
      if (item === '^^') {
        count++;
      }
    });
  });
  return count;
};
