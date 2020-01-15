
const DivisibleRules = require('../src/divisible_rules');

describe('Devisible Test rules', () => {
    it('should return Foo', () => {
        // Arrange
        const divisibleRules = Object.create(DivisibleRules);
        const input = "3";
    
        // Act
        const output = divisibleRules.returnFooBarQixWhenNumberIsDivisibleBy357(input);

        // Assert
        expect(output).toBe("Foo");
    });

    it('should return Bar', () => {
        const divisibleRules = Object.create(DivisibleRules);
        const input = "5";
    
        const output = divisibleRules.returnFooBarQixWhenNumberIsDivisibleBy357(input);

        expect(output).toBe("Bar");
    });

    it('should return Qix', () => {
        const divisibleRules = Object.create(DivisibleRules);
        const input = "7";
    
        const output = divisibleRules.returnFooBarQixWhenNumberIsDivisibleBy357(input);

        expect(output).toBe("Qix");
    });

    it('should return FooBar', () => {
            const divisibleRules = Object.create(DivisibleRules);
            const input = "15";
        
            const output = divisibleRules.returnFooBarQixWhenNumberIsDivisibleBy357(input);

            expect(output).toBe("FooBar");
    });

    it('should return 1', () => {
        const divisibleRules = Object.create(DivisibleRules);
        const input = "1";
    
        const output = divisibleRules.returnFooBarQixWhenNumberIsDivisibleBy357(input);

        expect(output).toBe("1");
    });
});