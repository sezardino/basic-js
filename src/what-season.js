/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // Check if the input is a valid date
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date!"); // Throw an error if the input is not a valid date
  }

  const month = date.getMonth(); // Get the month from the date (0-based index)

  // Return the corresponding season based on the month
  if (month === 11 || month === 0 || month === 1) {
    return "winter"; // December, January, and February
  } else if (month >= 2 && month <= 4) {
    return "spring"; // March, April, and May
  } else if (month >= 5 && month <= 7) {
    return "summer"; // June, July, and August
  } else if (month >= 8 && month <= 10) {
    return "autumn"; // September, October, and November
  }

  return "Unable to determine the time of year!"; // Return an error message if the month is invalid (this shouldn't happen)
}

module.exports = {
  getSeason,
};
