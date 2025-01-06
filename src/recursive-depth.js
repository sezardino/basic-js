/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0; // If it's not an array, return 0 (though this context shouldn't be the case)
    }

    let depth = 1; // Initial depth (if the array is not nested)
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Recursively calculate the depth of nested arrays
        const currentDepth = this.calculateDepth(arr[i]);
        depth = Math.max(depth, currentDepth + 1); // Track the maximum depth
      }
    }
    return depth; // Return the maximum depth found
  }
}

module.exports = {
  DepthCalculator,
};
