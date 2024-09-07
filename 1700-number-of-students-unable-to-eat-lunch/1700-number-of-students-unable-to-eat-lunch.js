/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let queue = students; 
  let sandwichIndex = 0; 
  let rotations = 0; 

  
  while (queue.length > 0 && rotations < queue.length) {
    if (queue[0] === sandwiches[sandwichIndex]) {
      
      queue.shift(); 
      sandwichIndex++; 
      rotations = 0; 
    } else {
      
      queue.push(queue.shift()); 
      rotations++; 
    }
  }

  
  return queue.length;
};