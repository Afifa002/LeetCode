/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    
    
let count = 0;
for(let i = 0; i<nums.length;i++){
    for(let j = i+1; j<nums.length; j++){
if((nums[i]-nums[j]===k || nums[j] -nums[i]===k))
    {
        count++;
    }
    
    }
}
return count;
}
let nums=[3,2,1,5,4];
let k=2;
console.log(countKDifference(nums,k));
