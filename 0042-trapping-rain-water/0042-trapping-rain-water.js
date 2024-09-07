/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = []; 
  let waterTrapped = 0; 
  let current = 0; 
  while (current < height.length) {
    
    while (stack.length > 0 && height[current] > height[stack[stack.length - 1]]) {
      let top = stack.pop(); 

      if (stack.length === 0) {
        break; 
      }

      let distance = current - stack[stack.length - 1] - 1; 
      let boundedHeight = Math.min(height[current], height[stack[stack.length - 1]]) - height[top]; 
      waterTrapped += distance * boundedHeight; 
    }
    stack.push(current);
    current++;
  }

  return waterTrapped;
};