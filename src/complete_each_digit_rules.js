const CommonValue = require('../src/common_value');

const CompleteEachDigitRules = {
    completeEachDigit : function(number){
        const commonValue = Object.create(CommonValue);
        let completeDigit = "";
        number.split('').forEach(caract => {
                commonValue.defaultValue().forEach(defaultValueItem => {
                if(caract == defaultValueItem[0]){
                    completeDigit = completeDigit.concat('', defaultValueItem[1]);
                }
            });
        })
        return completeDigit;
    },
}

module.exports = CompleteEachDigitRules;