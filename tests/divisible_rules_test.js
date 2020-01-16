
const DivisibleRules = require('../src/divisible_rules');

describe('Devisible rules Test', () => {
    it('should return Foo when divisible by 3', () => {
        // Arrange
        const divisibleRules = Object.create(DivisibleRules);
        const input = "3";
        // Act
        const output = divisibleRules.computeDivisibleNumberRule(input);
        // Assert
        expect(output).toBe("Foo");
    });

    it('should return Bar when divisible by 5', () => {
        const divisibleRules = Object.create(DivisibleRules);
        const input = "5";
        const output = divisibleRules.computeDivisibleNumberRule(input);
        expect(output).toBe("Bar");
    });

    it('should return Qix when divisible by 7', () => {
        const divisibleRules = Object.create(DivisibleRules);
        const input = "7";
        const output = divisibleRules.computeDivisibleNumberRule(input);
        expect(output).toBe("Qix");
    });

    it('should return FooBar when divisible by 3 and 5', () => {
        const divisibleRules = Object.create(DivisibleRules);
        const input = "15";
        const output = divisibleRules.computeDivisibleNumberRule(input);
        expect(output).toBe("FooBar");
    });

    it('should return input as-is when not divisible by defined numbers in rules table', () => {
        const divisibleRules = Object.create(DivisibleRules);
        const input = "1";
        const output = divisibleRules.computeDivisibleNumberRule(input);
        expect(output).toBe("1");
    });
});