/**
* Transform a list into pairwise sums of contiguous entries:
*
* Input: A list of numbers. An example is [1, 9, 2, 4, 1, 4].
* Output: The pairwise sums of the elements. For the given example, 
* the return value is a list containing [10, 11, 6, 5, 5].
* @function getPairwiseSums
* @param {Array} nums one dimensional list of numerical values. 
* An example is [1, 9, 2, 4, 1, 4]
* @yield {Array} A list containing the pairwise sum of the input. For the 
* given example, the return value is a list containing [10, 11, 6, 5, 5].
*/

function* getPairwiseSums(nums){
    const sums=[];
    for (let i = 0; i < nums.length-1; i++) {
        sums.push(nums[i]+nums[i+1]);        
    }
    yield sums;
}


module.exports = getPairwiseSums