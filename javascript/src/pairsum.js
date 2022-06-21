/**
* Finds two consecutive entries in a list (it doesn’t have to be unique) that
* sum to a specified value.
*
* Input: A list of numbers. An example is [1, 9, 2, 4, 7, 4] and a specified
* target sum of 11.
* Output: The procedure will identify any of these pairs: (9, 2), (2, 9), 
* (4, 7), or (7, 4).
* @function getPairBySum
* @param {Array} nums A one dimensional list of numerical values. An example 
* is [1, 9, 2, 4, 7, 4]
* @param {Number} targetSum A number representing the target sum that we are 
* searching for in the array of nums
* @yield {String} A pair of numbers found in the array nums that have a sum 
* equal to targetSum.
*/

function* getPairBySum(nums, targetSum){
   for (let i = 1; i < nums.length-1; i++) {
        const prev = nums[i-1], curr = nums[i], next=nums[i+1];
        if(prev+curr === targetSum){
            yield `(${prev}, ${curr})`;
        } else if(curr+next === targetSum){
            yield `(${curr}, ${next})`;
        }
    
   }
}



module.exports = getPairBySum