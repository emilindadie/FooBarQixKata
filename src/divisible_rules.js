const CommonValue = require('../src/common_value');

const DivisibleRules = {
    returnFooBarQixWhenNumberIsDivisibleBy357 : function(number){
        const commonValue = Object.create(CommonValue);
        let divisibleByOne = false;
        const divisibleResult = commonValue.defaultValue().map(item => {
            if(number % item[0] == 0){
                divisibleByOne = true;
                return item[1];
            } 
            return "";
        });
        return divisibleByOne? divisibleResult.join('') : number;
    },
}

module.exports = DivisibleRules;