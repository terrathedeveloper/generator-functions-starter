def getPairBySum(nums,targetSum):
    """ Finds two consecutive entries in a list (it doesn’t have to be unique) that sum to a specified value.

        Parameters
        ----------
        nums : list
            A 1 dimensional list of numbers
        targetSum : number
            A number representing the target sum that we are searching for in the array of nums
    """

    #[:-1] returns all the elements of the list but the last one
    for i, _ in enumerate(nums[:-1]):  #use enumerate to create an indexed pair list and iterate
                                        # through that list to get the sums of the consecutive numbers
        if nums[i] + nums[i+1]==targetSum:
            yield "({}, {})".format(nums[i], nums[i+1])
        elif list[i-1] and nums[i] + nums[i-1]==targetSum: #check to make sure the previous elment exists 
                                                    #before checking to see if the elements equal the sum
            yield "({}, {})".format(nums[i], nums[i-1])
           
    

pair = getPairBySum([1, 9, 2, 4, 7, 4], 11)
print(next(pair))
print(next(pair))
print(next(pair))
print(next(pair))