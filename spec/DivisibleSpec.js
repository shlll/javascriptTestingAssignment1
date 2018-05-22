describe("number is divisible", function(){
    it("should return true when a number is divisible by both of the provided divisors",function(){
        expect(isDivisible(50,10,5)).toBe(true);
    })
    it("should return false when the number is smaller then both the provided divisors",function(){
        expect(isDivisible(2,55,25)).toBe(false);
    })
    it("should return false when the number is not divisible by only one of the provided divisors",function(){
        expect(isDivisible(25,5,8)).toBe(false);
        expect(isDivisible(55,11,9)).toBe(false);
    })
    it("should return false when the number is not divisible by any of the provided divisors",function(){
        expect(isDivisible(55,12,2)).toBe(false);
    })
})