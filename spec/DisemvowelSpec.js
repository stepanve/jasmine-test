describe("Disemvowel", function() {
    it("should remove all lowercase vowles", function() {
        expect(disemvowel("Hello world")).toEqual("Hll wrld");
    });
    it("should remove all uppercase vowels", function() {
        expect(disemvowel("Artistic Eagle")).toEqual("rtstc gl");
    });
    it("shouldn't change empty string", function() {
        expect(disemvowel("")).toEqual("");
    });
    it("shouldn't change strings with no vowels", function() {
        expect(disemvowel("Mhmm")).toEqual("Mhmm");
    });


    // it("test", function() {
    //     var fakeHello = function() {
    //         alert('test');
    //         return 'hello'
    //     }
    //     var test = {
    //         hello: function() {
    //             return 'hello';
    //         }
    //     };
    //     spyOn(test, "hello").and.callFake(fakeHello);
    //     test.hello();
    // });
});