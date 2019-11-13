
const FoobarQix = require('../src/foobarqix');

describe('FooBarQix Devisible Test', () => {
    it('should be divisibe', () => {
            // Arrange 
            const foobarQix = Object.create(FoobarQix);
            const input = "303";
            let output = "";
        
            // Act
            output = foobarQix.divisible(input);

            //Assert
            expect(output).toBe("Foo");
    });

    it('should not be divisibe', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "1";
        let output = "";
    
        // Act
        output = foobarQix.divisible(input);

        //Assert
        expect(output).toBe("1");
    });
});