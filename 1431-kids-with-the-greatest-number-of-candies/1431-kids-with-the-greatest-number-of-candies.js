/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let ans = [];
    let max = candies[0];
    for(let i = 1; i<candies.length; i++){
if(candies[i]>=max){
max = candies[i];
}}
    for(let val of candies){
ans.push(val +extraCandies>=max);
    }
    return ans;
};