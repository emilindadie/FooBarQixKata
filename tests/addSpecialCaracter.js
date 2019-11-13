
const FoobarQix = require('../src/foobarqix');

describe('FooBarQix Add special caracter Test', () => {
    it('should add * for each 0', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "303";
        let output = "";
    
        // Act
        output = foobarQix.addSpecialCaracterForeach0(input);

        //Assert
        expect(output).toBe("3*3");
    });

    it('should add * for each 0', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "5700";
        let output = "";
    
        // Act
        output = foobarQix.addSpecialCaracterForeach0(input);

        //Assert
        expect(output).toBe("57**");
    });

    it('should add * for each 0', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "0000";
        let output = "";
    
        // Act
        output = foobarQix.addSpecialCaracterForeach0(input);

        //Assert
        expect(output).toBe("****");
    });
});