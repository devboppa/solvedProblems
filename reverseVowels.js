class Solution {
  //two pointer approach

  vowels = "aeiouAEIOU";

  reverseVowels(s) {
    let first = 0;
    let last = s.length - 1;
    let array = s.split("");

    while (first < last) {
      while (first < last && this.vowels.indexOf(array[first]) === -1) {
        first++;
      }
      while (first < last && this.vowels.indexOf(array[last]) === -1) {
        last--;
      }
      [array[first], array[last]] = [array[last], array[first]];
      first++;
      last--;
    }

    return array.join("");
  }
}

// initial appproach

class Solution {
  reverseVowels(s) {
    const vowelPositions = [];
    const resultArray = [...s];

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (/[aeiouAEIOU]/.test(char)) {
        vowelPositions.push({ char: char, index: i });
      }
    }

    const length = vowelPositions.length;
    for (let i = 0; i < length; i++) {
      resultArray[vowelPositions[i].index] =
        vowelPositions[length - 1 - i].char;
    }
    return resultArray.join("");
  }
}
