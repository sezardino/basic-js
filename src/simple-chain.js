/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [], // Store links in the array

  getLength() {
    return this.chain.length; // Return the length of the chain
  },

  addLink(value) {
    // If value is not provided, add an empty link
    if (value === undefined) {
      this.chain.push("(  )");
    } else {
      this.chain.push(`( ${String(value)} )`);
    }
    return this; // Return the object itself for chaining
  },

  removeLink(position) {
    // Check if position is a valid integer within the allowed range
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.chain.length
    ) {
      this.chain = []; // Clear the chain in case of an error
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1); // Remove the element at the given position (array indices start from 0)
    return this; // Return the object itself for chaining
  },

  reverseChain() {
    this.chain.reverse(); // Reverse the array
    return this; // Return the object itself for chaining
  },

  finishChain() {
    const result = this.chain.join("~~"); // Join all elements into a string
    this.chain = []; // Clear the chain
    return result; // Return the result
  },
};

module.exports = {
  chainMaker,
};
