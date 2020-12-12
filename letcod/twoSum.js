// @param {number[]} nums
// @param {number} target
// @return {number[]}

var twoSum = function(nums, target) {
    let sums = [];
    for(x in nums) {
        for(y in nums) {
            if(sums.length > 0 && !sums.includes(x) || !sums.includes(y)) {
                if(nums[x] + nums[y] === target) {
                    sums.push(x, y)                  
                }
            }
        }
    }
    return sums
};