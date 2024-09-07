/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = new Map();  
  let stack = [];       
    for (let num of nums2) {
    
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      let top = stack.pop();    
      map.set(top, num);
    }
    
    stack.push(num);
  }

  
  while (stack.length > 0) {
    map.set(stack.pop(), -1);
  }

  
  return nums1.map(num => map.get(num));
};