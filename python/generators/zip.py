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


#python -m pytest zip.py
def test():
    seq = getZippedSequence([[1,2,3],[4,5,6],[7,8,9]])
    assert(next(seq)) == 1
    assert(next(seq)) == 4
    assert(next(seq)) == 7
    assert(next(seq)) == 2
    assert(next(seq)) == 5
    assert(next(seq)) == 8
    assert(next(seq)) == 3
    assert(next(seq)) == 6
    assert(next(seq)) == 9
   