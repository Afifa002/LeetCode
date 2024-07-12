/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let temp = new Array(101).fill(0);
    let CountPair = 0;
    for(let i = 0; i<nums.length; i++){
        CountPair +=temp[nums[i]];
        temp[nums[i]]++;
    }
    return CountPair;
};