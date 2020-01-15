
const SpecialCharacterRules = require('../src/add_special_character_rules');

describe('FooBarQix Add special Character Test', () => {
    it('should return 3*3', () => {
        // Arrange 
        const specialCharacterRules = Object.create(SpecialCharacterRules);
        const input = "303";
    
        // Act
        const output = specialCharacterRules.replaceZeroByStarCharacterWhenfoundZero(input);

        //Assert
        expect(output).toBe("3*3");
    });

    it('should return 57**', () => {
        const specialCharacterRules = Object.create(SpecialCharacterRules);
        const input = "5700";
    
        const output = specialCharacterRules.replaceZeroByStarCharacterWhenfoundZero(input);

        expect(output).toBe("57**");
    });

    it('should return ****', () => {
        const specialCharacterRules = Object.create(SpecialCharacterRules);
        const input = "0000";
    
        const output = specialCharacterRules.replaceZeroByStarCharacterWhenfoundZero(input);

        expect(output).toBe("****");
    });
});