def getPairwiseSums(nums):
    """ Transforms a list into pairwise sums of contiguous entries:

        Parameters
        ----------
        nums : list
            A 1 dimensional list of numbers
    """
    
    pairwiseSums = [] #declare a list to hold the sums of the consecutive list items
    #[:-1] returns all the elements of the list but the last one
    for i, _ in enumerate(nums[:-1]):  #use enumerate to create an indexed pair list and iterate
                                         # through that list to get the sums of the consecutive numbers
        pairwiseSums.append(nums[i] + nums[i+1]) #append the sum of the 2 consecutive numbers to the pairwiseSums list
    yield pairwiseSums

sums = getPairwiseSums([1,9,2,4,1,4])
print(next(sums))