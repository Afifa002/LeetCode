/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;

  
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  
  let prev = null;
  while (slow !== null) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  
  let firstHalf = head;
  let secondHalf = prev; 

  while (secondHalf !== null) {
    if (firstHalf.val !== secondHalf.val) {
      return false; 
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true; 
};