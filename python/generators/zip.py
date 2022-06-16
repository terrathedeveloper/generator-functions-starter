def getZippedSequence(items):
    """ function that accepts a 2-dimentional rectangular list and generates
        the sequence of elements returned one at a time of the transpose of the array 
        navigated in row-first order

        Parameters
        ----------
        items : list
           A 2-d rectangular list of numbers
    """
    seqIterator = list(zip(*items))  #use the zip method to zip the arrays, convert them to a list to iterate through
    for it in seqIterator: #iterate through the zipped 2d list
        for i in it: #iterate through each item in the list
            yield i  #yield that item


seq = getZippedSequence([[1,2,3],[4,5,6],[7,8,9]])
print(next(seq))
print(next(seq))
print(next(seq))
print(next(seq))
print(next(seq))