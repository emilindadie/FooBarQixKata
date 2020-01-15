const DivisibleRules = require('./divisible_rules');
const SpecialCharacterRules = require('./add_special_character_rules');
const CompleteEachDigitRules = require('./complete_each_digit_rules');

const FooBarQix = {
    compute : function(number){
        const divisibleRules = Object.create(DivisibleRules);
        const specialCharacterRules = Object.create(SpecialCharacterRules);
        const completeEachDigitRules = Object.create(CompleteEachDigitRules);

        const divisiblevalue = divisibleRules.returnFooBarQixWhenNumberIsDivisibleBy357(number);
        if(divisiblevalue == number){
            return number;
        }
        let tab = [];
        tab.push(divisiblevalue);
        number.split('').map(letter => {
            tab.push(completeEachDigitRules.completeEachDigit(letter));
            if(letter === "0"){
                let tmpTab = specialCharacterRules.replaceZeroByStarCharacterWhenfoundZero(tab.join('').concat("0"));
                tab = [];
                tab.push(tmpTab);
            }
        });
        return tab.join('');
    },
}

module.exports = FooBarQix;