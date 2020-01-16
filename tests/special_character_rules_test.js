
const SpecialCharacterRules = require('../src/special_character_rules');

describe('SpecialCharacterRules Test', () => {
    it('should return * when having 0', () => {
        // Arrange 
        const specialCharacterRules = Object.create(SpecialCharacterRules);
        const input = "0";
        // Act
        const output = specialCharacterRules.computeSpecialCharacterRule(input);
        //Assert
        expect(output).toBe("*");
    });

    it('should return 3* when having 30', () => {
        const specialCharacterRules = Object.create(SpecialCharacterRules);
        const input = "30";
        const output = specialCharacterRules.computeSpecialCharacterRule(input);
        expect(output).toBe("3*");
    });

    it('should return 57** when having 5700', () => {
        const specialCharacterRules = Object.create(SpecialCharacterRules);
        const input = "5700";
        const output = specialCharacterRules.computeSpecialCharacterRule(input);
        expect(output).toBe("57**");
    });

    it('should return **** when having 0000', () => {
        const specialCharacterRules = Object.create(SpecialCharacterRules);
        const input = "0000";
        const output = specialCharacterRules.computeSpecialCharacterRule(input);
        expect(output).toBe("****");
    });
});