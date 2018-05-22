describe("reverseSeq of array",function(){
    it("should return an empty sequence when the single array is string",function(){
        expect(reverseSeq(['tom'])).toBe([]);
    })
    it("should return an empty sequence when i contains a negative number",function(){
        expect(reverseSeq([-1],[2],[3],[4],[5])).toBe([]);
        expect(reverseSeq([-2],[-5],[2],[3],[5])).toBe([]);
    })
    it("should return an reversed sequence when push each i to the answer array",function(){
        expect(reverseSeq([2],[3])).toBe([Array(1), 1]);
        expect(reverseSeq([3],[4],[5])).toBe([Array(1), 2, 1]);
        expect(reverseSeq([4],[5],[6],[7])).toBe([Array(1), 3, 2, 1]);
    })
})


    
