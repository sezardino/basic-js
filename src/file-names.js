/**
 * There's a list of files, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  let nameCount = {}; // Object to track the number of times each name has been encountered

  names.forEach((name) => {
    if (!nameCount[name]) {
      result.push(name);
      nameCount[name] = 1; // If the name hasn't been encountered, add it to the result
    } else {
      let newName = `${name}(${nameCount[name]})`;
      while (nameCount[newName]) {
        // If the new name already exists, increment the number
        nameCount[name]++;
        newName = `${name}(${nameCount[name]})`;
      }
      result.push(newName);
      nameCount[newName] = 1; // Record the new unique name
      nameCount[name]++; // Increment the count for the original name
    }
  });

  return result;
}

module.exports = {
  renameFiles,
};
