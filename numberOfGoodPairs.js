class Solution {
  numGoodPairs(nums) {
    let pairCount = 0;
    let numberFrequency = {};

    for (let number of nums) {
      let match = numberFrequency[number];
      if (match) {
        pairCount += match;
        numberFrequency[number] = match + 1;
      } else {
        numberFrequency[number] = 1;
      }
    }

    return pairCount;
  }
}
