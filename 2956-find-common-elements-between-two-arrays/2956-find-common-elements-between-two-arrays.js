/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
const linearSearch = (nums, key)=>{
for(let i = 0;i<nums.length; i++){
if(nums[i]==key){
return true;
}
}
return false;
}
let count1 = 0;
    let count2 = 0;
    for(let i = 0;i<nums1.length; i++){
        if(linearSearch(nums2, nums1[i])){
            count1++;
        }
    }
    for(let i = 0;i<nums2.length; i++){
        if(linearSearch(nums1, nums2[i])){
            count2++;
        }
    }
    return[count1, count2];
    
};