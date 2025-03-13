/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {
  hasCycle(head) {
    let fast = head, slow = head;
    
    while(fast !== null && fast.next !== null){
      slow = slow.next;
      fast = fast.next.next;
      if(fast === slow){
      return true;
    }
    }
    
    return false;  
  }
}
