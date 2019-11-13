
const FoobarQix = require('../src/foobarqix');

describe('FooBarQix contains Test', () => {
    it('should contains Foo Bar or Qix', () => {
            // Arrange 
            const foobarQix = Object.create(FoobarQix);
            const input = "FooBar";
            let output = "";
        
            // Act
            output = foobarQix.containsFooBarQix(input);

            //Assert
            expect(output).toBe(true);
    });
  });