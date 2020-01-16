const Dictionary = require('./dictionary');

const DivisibleRules = {
    computeDivisibleNumberRule : function(number){
        const dictionary = Object.create(Dictionary);
        let divisibleByOne = false;
        const divisibleResult = dictionary.defaultValue().map(item => {
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