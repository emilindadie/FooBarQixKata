
const FoobarQix = require('../src/foobarqix');

describe('FooBarQix compute Test', () => {

    it('should compute step1', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "15";
        let output = "";
    
        // Act
        output = foobarQix.compute(input);

        //Assert
        expect(output).toBe("FooBarBar");
    });

    it('should compute step1', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "33";
        let output = "";
    
        // Act
        output = foobarQix.compute(input);

        //Assert
        expect(output).toBe("FooFooFoo");
    });

    it('should compute step2', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "303";
        let output = "";
    
        // Act
        output = foobarQix.compute(input);

        //Assert
        expect(output).toBe("FooFoo*Foo");
    });
  });