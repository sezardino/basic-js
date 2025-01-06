const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of an archaeological find using
 * the given MODERN_ACTIVITY and HALF_LIFE_PERIOD values.
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * if the sampleActivity is invalid
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Check if input is a string and can be converted to a valid number
  if (
    typeof sampleActivity !== "string" ||
    isNaN(sampleActivity) ||
    Number(sampleActivity) <= 0 ||
    Number(sampleActivity) >= MODERN_ACTIVITY
  ) {
    return false;
  }

  const activity = Number(sampleActivity);
  const decayConstant = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / decayConstant);

  return age;
}

module.exports = {
  dateSample,
};
