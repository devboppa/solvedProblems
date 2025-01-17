// indices need not be stored and the min distance can be calculated in the first loop itseld,
//  removing the need to store the indices and then calculate the min distance

// initial approach
class Solution {
  shortestDistance(words, word1, word2) {
    const wordOneIndices = [];
    const wordTwoIndices = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word1) {
        wordOneIndices.push(i);
      }
      if (words[i] === word2) {
        wordTwoIndices.push(i);
      }
    }
    let first = 0;
    let second = 0;
    let minDistance = Infinity;
    while (first < wordOneIndices.length && second < wordTwoIndices.length) {
      const distance = Math.abs(wordOneIndices[first] - wordTwoIndices[second]);
      distance < minDistance ? (minDistance = distance) : null;
      if (wordOneIndices[first] < wordTwoIndices[second]) {
        first++;
      } else {
        second++;
      }
    }
    return minDistance;
  }
}
