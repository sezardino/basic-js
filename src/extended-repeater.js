/**
 * Create a repeating string based on the given parameters.
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Convert str and addition to strings if they are not strings
  str = String(str);
  if (options.addition !== undefined) {
    options.addition = String(options.addition);
  }

  // Set default values for options
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  const addition = options.addition !== undefined ? options.addition : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";

  // Create the addition string with repetitions
  let additionString = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  // Create the final string with repetitions of str
  let resultString = Array(repeatTimes)
    .fill(str + additionString)
    .join(separator);

  return resultString;
}

module.exports = {
  repeater,
};
