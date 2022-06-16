const getPairwiseSums= require('../src/pairwise');


describe("getPairwiseSums()",()=>{
    test('return an array with the pairwise sum of elements',()=>{
        let sums = getPairwiseSums([1, 9, 2, 4, 1, 4]);
        expect(sums.next().value).toEqual([10, 11, 6, 5, 5]);//deep comparison
    })
})