class Solution {
  // Function to check if given sentence is pangram

  checkIfPangram(sentence) {
    const alphaSet = new Set();
    for (const char of sentence) {
      if (/^[a-zA-Z]$/.test(char)) {
        //>'a' and <'z' can be used for faster checking
        alphaSet.add(char.toLowerCase());
      }
      if (alphaSet.size === 26) {
        return true;
      }
    }
    return false;
  }
}
