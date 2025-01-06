/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr - The input array with heights.
 * @return {Array} - The array with sorted heights, but -1 values remain in their original positions.
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Filter out all elements that are not -1 and sort them in ascending order
  const sortedHeights = arr
    .filter((height) => height !== -1)
    .sort((a, b) => a - b);

  // Rebuild the array, keeping -1 in place and replacing other elements with the sorted values
  return arr.map((height) => (height === -1 ? -1 : sortedHeights.shift()));
}

module.exports = {
  sortByHeight,
};
