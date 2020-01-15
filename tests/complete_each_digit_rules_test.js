
const CompleteEachDigitRules = require('../src/complete_each_digit_rules');

describe('Complete each digit Test', () => {
    it('should return FooBarQix', () => {
        // Arrange
        const completeEachDigitRules = Object.create(CompleteEachDigitRules);
        const input = "357";
    
        // Act
        const output = completeEachDigitRules.completeEachDigit(input);

        // Assert
        expect(output).toBe("FooBarQix");
    });

    it('should return FooFooFoo', () => {
        const completeEachDigitRules = Object.create(CompleteEachDigitRules);
        const input = "333";
    
        const output = completeEachDigitRules.completeEachDigit(input);

        expect(output).toBe("FooFooFoo");
    });

    it('should return BarBarBar', () => {
        const completeEachDigitRules = Object.create(CompleteEachDigitRules);
        const input = "555";
    
        const output = completeEachDigitRules.completeEachDigit(input);

        expect(output).toBe("BarBarBar");
    });

    it('should return QixQixQix', () => {
        const completeEachDigitRules = Object.create(CompleteEachDigitRules);
        const input = "777";
    
        const output = completeEachDigitRules.completeEachDigit(input);

        expect(output).toBe("QixQixQix");
    });
});