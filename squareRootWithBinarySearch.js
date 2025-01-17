class Solution {
  mySqrt(x) {
    if (x < 2) {
      return x;
    }

    let low = 0;
    let high = Math.floor(x / 2);

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midSquared = mid * mid;

      if (midSquared === x) {
        return mid;
      } else if (midSquared > x) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return high;
  }
}
