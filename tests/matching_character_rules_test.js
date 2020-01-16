
const MatchingCharacterRules = require('../src/matching_character_rules');

describe('MatchingCharacterRules rules Test', () => {
    it('should return Foo when match 3', () => {
        const matchingCharacterRules = Object.create(MatchingCharacterRules);
        const input = "3";
        const output = matchingCharacterRules.computeMatchingCharacterRule(input);
        expect(output).toBe("Foo");
    });

    it('should return Bar when match 5', () => {
        const matchingCharacterRules = Object.create(MatchingCharacterRules);
        const input = "5";
        const output = matchingCharacterRules.computeMatchingCharacterRule(input);
        expect(output).toBe("Bar");
    });

    it('should return Bar when match 7', () => {
        const matchingCharacterRules = Object.create(MatchingCharacterRules);
        const input = "7";
        const output = matchingCharacterRules.computeMatchingCharacterRule(input);
        expect(output).toBe("Qix");
    });

    it('should return FooFoo when match 3', () => {
        const matchingCharacterRules = Object.create(MatchingCharacterRules);
        const input = "33";
        const output = matchingCharacterRules.computeMatchingCharacterRule(input);
        expect(output).toBe("FooFoo");
    });

    it('should return BarBar when match 5', () => {
        const matchingCharacterRules = Object.create(MatchingCharacterRules);
        const input = "55";
        const output = matchingCharacterRules.computeMatchingCharacterRule(input);
        expect(output).toBe("BarBar");
    });

    it('should return QixQix when match 7', () => {
        const matchingCharacterRules = Object.create(MatchingCharacterRules);
        const input = "77";
        const output = matchingCharacterRules.computeMatchingCharacterRule(input);
        expect(output).toBe("QixQix");
    });


    it('should return FooBarQix when match 3 , 5 and 7', () => {
        const matchingCharacterRules = Object.create(MatchingCharacterRules);
        const input = "357";
        const output = matchingCharacterRules.computeMatchingCharacterRule(input);
        expect(output).toBe("FooBarQix");
    });

});