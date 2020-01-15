
const FooBarQixRules = require('../src/foobarqix_rules');

describe('FooBarQix compute Test', () => {
    it('should return FooBarBar', () => {
        // Arrange 
        const fooBarQixRules = Object.create(FooBarQixRules);
        const input = "15";
    
        // Act
        const output = fooBarQixRules.compute(input);

        //Assert
        expect(output).toBe("FooBarBar");
    });

    it('should return FooFooFoo', () => {
        const fooBarQixRules = Object.create(FooBarQixRules);
        const input = "33";
    
        const output = fooBarQixRules.compute(input);

        expect(output).toBe("FooFooFoo");
    });

    it('should return FooFoo*Foo', () => {
        const fooBarQixRules = Object.create(FooBarQixRules);
        const input = "303";
    
        const output = fooBarQixRules.compute(input);

        expect(output).toBe("FooFoo*Foo");
    });
  });