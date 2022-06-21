const getPairBySum= require('../src/pairsum');


describe("pairSumFunction()",()=>{
    test('return any of the possible pairs of the array that produce the sum',()=>{
        let pairs = getPairBySum([1, 9, 2, 4, 7, 4],11);
        const solutions = ['(9, 2)', '(2, 9)', '(4, 7)','(7, 4)'];
        expect(solutions.includes(pairs.next().value)).toBeTruthy();
        expect(solutions.includes(pairs.next().value)).toBeTruthy();
        expect(solutions.includes(pairs.next().value)).toBeTruthy();
        expect(solutions.includes(pairs.next().value)).toBeTruthy();
        expect(pairs.next().done).toBeTruthy()
    })
})