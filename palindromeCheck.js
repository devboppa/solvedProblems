class Solution {
  isPalindrome(s) {
    let first = 0;
    let last = s.length - 1;
    console.log(first, last);

    function isValid(char) {
      return /[a-z0-9]/.test(char);
    }

    while (first < last) {
      while (first < last && !isValid(s[first].toLowerCase())) {
        first++;
      }
      while (first < last && !isValid(s[last].toLowerCase())) {
        last--;
      }
      if (s[first].toLowerCase() != s[last].toLowerCase()) {
        return false;
      }
      first++;
      last--;
    }
    return true;
  }
}
