describe("the sum of positive numbers", function () {
    it("should return the sum of all the numbers when the numbers are all positive", function () {
        expect(positiveSum([1, 2, 3, 4, 5])).toEqual(15);
    })
    it("should not be included as part of the sum when here is a negative number in the provided array", function () {
        expect(positiveSum([1, -3, 5, 7, 10])).toEqual(23);
        expect(positiveSum([-2,1,2,3,5,7])).toEqual(18);
    })
    it("should return a sum of 0 when the provided array is empty", function () {
        expect(positiveSum([])).toEqual(0);
    })
    it("should return a sum of 0 when the provided array is all negative numbers", function () {
        expect(positiveSum([-1, -3, -5, -7, -9])).toEqual(0);
    })
})

