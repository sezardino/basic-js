/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {}; // Object for counting DNS occurrences

  // Loop through each domain in the list
  domains.forEach((domain) => {
    const parts = domain.split(".").reverse(); // Split the domain into parts and reverse the order

    // Build the DNS chain for each level
    let chain = "";
    parts.forEach((part, index) => {
      // Add a dot only after the first part of the chain
      chain = index === 0 ? `.${part}` : `.${part}${chain}`;
      stats[chain] = (stats[chain] || 0) + 1; // Increment the counter for this chain
    });
  });

  return stats;
}

module.exports = {
  getDNSStats,
};
