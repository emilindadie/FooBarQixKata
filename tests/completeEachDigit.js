
const FoobarQix = require('../src/foobarqix');

describe('FooBarQix Complete each digit Test', () => {
    it('should complete each digit', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "357";
        let output = "";
    
        // Act
        output = foobarQix.completeEachDigit(input);

        //Assert
        expect(output).toBe("FooBarQix");
    });
});