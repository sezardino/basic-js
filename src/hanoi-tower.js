/**
 * Calculate the number of turns and the time (in seconds) required
 * to solve the puzzle.
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns per hour)
 * @return {Object} object with properties turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // Minimum number of turns
  const turns = Math.pow(2, disksNumber) - 1;

  // Time in seconds (rounded down)
  const seconds = Math.floor((turns / turnsSpeed) * 3600);

  // Return an object with two properties: turns and seconds
  return { turns, seconds };
}

module.exports = {
  calculateHanoi,
};
