
const FoobarQix = require('../src/foobarqix');

describe('FooBarQix contains Test', () => {


    it('should contains Foo Bar or Qix', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "FooBarQix";
        let output = "";
    
        // Act
        output = foobarQix.containsFooBarQix(input);

        //Assert
        expect(output).toBe(true);
    });

    it('should contains Foo Bar or Qix', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "Foo";
        let output = "";
    
        // Act
        output = foobarQix.containsFooBarQix(input);

        //Assert
        expect(output).toBe(true);
    });

    it('should contains Foo Bar or Qix', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "Bar";
        let output = "";
    
        // Act
        output = foobarQix.containsFooBarQix(input);

        //Assert
        expect(output).toBe(true);
    });

    it('should contains Foo Bar or Qix', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "Qix";
        let output = "";
    
        // Act
        output = foobarQix.containsFooBarQix(input);

        //Assert
        expect(output).toBe(true);
    });

    it('should not contains Foo Bar or Qix', () => {
        // Arrange 
        const foobarQix = Object.create(FoobarQix);
        const input = "";
        let output = "";
    
        // Act
        output = foobarQix.containsFooBarQix(input);

        //Assert
        expect(output).toBe(false);
    });
  });