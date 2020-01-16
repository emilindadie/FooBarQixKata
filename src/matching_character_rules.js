const Dictionary = require('./dictionary');

const MatchingCharacterRules = {
    computeMatchingCharacterRule : function(number){
        const dictionary = Object.create(Dictionary);
        let completeDigit = "";
        number.split('').forEach(caract => {
            dictionary.defaultValue().forEach(defaultValueItem => {
                if(caract == defaultValueItem[0]){
                    completeDigit = completeDigit.concat('', defaultValueItem[1]);
                }
            });
        })
        return completeDigit;
    },
}

module.exports = MatchingCharacterRules;