
const FooBarQixRules = require('../src/foobarqix_rules');

describe('FooBarQix rules Test', () => {
    it('should return Foo when having 3', () => {
        // Arrange 
        const fooBarQixRules = Object.create(FooBarQixRules);
        const input = "3";
        // Act
        const output = fooBarQixRules.compute(input);
        //Assert
        expect(output).toBe("FooFoo");
    });

    it('should return Bar when having 5', () => {
        const fooBarQixRules = Object.create(FooBarQixRules);
        const input = "5";
        const output = fooBarQixRules.compute(input);
        expect(output).toBe("BarBar");
    });

    it('should return Qix when having 7', () => {
        const fooBarQixRules = Object.create(FooBarQixRules);
        const input = "7";
        const output = fooBarQixRules.compute(input);
        expect(output).toBe("QixQix");
    });

    it('should return * when having 0', () => {
        const fooBarQixRules = Object.create(FooBarQixRules);
        const input = "0";
        const output = fooBarQixRules.compute(input);
        expect(output).toBe("FooBarQix*");
    });

    it('should return FooBarBar when having 15', () => {
        const fooBarQixRules = Object.create(FooBarQixRules);
        const input = "15";
        const output = fooBarQixRules.compute(input);
        expect(output).toBe("FooBarBar");
    });

    it('should return FooFooFoo when having 33', () => {
        const fooBarQixRules = Object.create(FooBarQixRules);
        const input = "33";
        const output = fooBarQixRules.compute(input);
        expect(output).toBe("FooFooFoo");
    });

    it('should return FooFoo*Foo when having 303', () => {
        const fooBarQixRules = Object.create(FooBarQixRules);
        const input = "303";
        const output = fooBarQixRules.compute(input);
        expect(output).toBe("FooFoo*Foo");
    });
  });