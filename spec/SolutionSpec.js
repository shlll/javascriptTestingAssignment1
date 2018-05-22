describe("the solution of the string",function(){
    it("should return itself when there is only 1 characters in the string",function(){
        expect(solution("a")).toBe("a");
        expect(solution("b")).toBe("b");
    })
    it("should return the reversed string when there are multiple characters in the string",function(){
        expect(solution("ab")).toBe("ba");
        expect(solution("def")).toBe("fed");
        expect(solution("hijk")).toBe("kjih");
    })
    it("should return the empty string when there are no characters in the string",function(){
        expect(solution("")).toBe("");
    })
})