class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const charcount = {};

    for (const char of s) {
      charcount[char] = (charcount[char] || 0) + 1;
    }

    for (const char of t) {
      if (!charcount[char]) {
        return false;
      }
      charcount[char]--;
    }

    return true;
  }
}
