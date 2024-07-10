/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let lar = 0;
    let slar = 0;
    for(let i =0; i<nums.length; i++){
if(nums[i]>lar){
    slar = lar;
lar = nums[i];

}
    else{
 slar = Math.max(slar, nums[i]);
    }
   }
     return (lar-1)*(slar-1);
};