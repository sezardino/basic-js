/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description.
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect; // Set whether the machine is direct or reverse
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!"); // Check if both message and key are provided
    }

    let result = "";
    message = message.toUpperCase(); // Convert message to uppercase
    key = key.toUpperCase(); // Convert key to uppercase

    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let messageChar = message[i];

      // Only letters are encrypted
      if (/[A-Z]/.test(messageChar)) {
        const messageCharCode = messageChar.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0);

        // Shift the character by the key's character position in the alphabet
        const shiftedCharCode =
          ((messageCharCode - 65 + (keyCharCode - 65)) % 26) + 65;
        result += String.fromCharCode(shiftedCharCode);

        keyIndex++; // Move to the next character in the key
      } else {
        result += messageChar; // Add non-letter characters as they are
      }
    }

    // If the machine is in reverse mode, reverse the result
    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!"); // Check if both encrypted message and key are provided
    }

    let result = "";
    encryptedMessage = encryptedMessage.toUpperCase(); // Convert encrypted message to uppercase
    key = key.toUpperCase(); // Convert key to uppercase

    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let encryptedChar = encryptedMessage[i];

      // Only letters are decrypted
      if (/[A-Z]/.test(encryptedChar)) {
        const encryptedCharCode = encryptedChar.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0);

        // Reverse shift of the character based on the key's character position
        const shiftedCharCode =
          ((encryptedCharCode - 65 - (keyCharCode - 65) + 26) % 26) + 65;
        result += String.fromCharCode(shiftedCharCode);

        keyIndex++; // Move to the next character in the key
      } else {
        result += encryptedChar; // Add non-letter characters as they are
      }
    }

    // If the machine is in reverse mode, reverse the result
    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
