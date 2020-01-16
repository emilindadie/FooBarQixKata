const DivisibleRules = require('./divisible_rules');
const SpecialCharacterRules = require('./special_character_rules');
const MatchingCharacterRules = require('./matching_character_rules');

const FooBarQix = {
    compute : function(number){
        const divisibleRules = Object.create(DivisibleRules);
        const specialCharacterRules = Object.create(SpecialCharacterRules);
        const matchingCharacterRules = Object.create(MatchingCharacterRules);

        const divisiblevalue = divisibleRules.computeDivisibleNumberRule(number);
        if(divisiblevalue == number){
            return number;
        }
        let tab = [];
        tab.push(divisiblevalue);
        number.split('').map(character => {
            tab.push(matchingCharacterRules.computeMatchingCharacterRule(character));
            if(character === "0"){
                let tmpTab = specialCharacterRules.computeSpecialCharacterRule(tab.join('').concat("0"));
                tab = [];
                tab.push(tmpTab);
            }
        });
        return tab.join('');
    },
}

module.exports = FooBarQix;