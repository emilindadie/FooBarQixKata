

const FooBarQix = {
    defaultValue : function (){
        return [
            ["3", "Foo"],
            ["5", "Bar"],
            ["7", "Qix"]
        ];
    },

    // This function take a string and check if the string contains Foo Bar or Qix
    // Its will return true if the string contains Foo or Bar or Qix
    containsFooBarQix : function(string){
        let tabString = this.defaultValue().map(value => {
            return value[1];
        });
        const specialCarac = '\\';
        const regex = "".concat(specialCarac, tabString.join('|\\', 'g')); 
        if(string.match(regex)){
            return true;
        }
        return false;
    },



    // This function take a number of type String and check if the number is divisible by 3 and return "Foo", by 5 and return "bar", by 7 and return "Qix"
    // Its will return the number in params if its not divisible by 3, 5 and 7
    divisible : function(number){
        const divisibleResult = this.defaultValue().map(item => {
            return number % item[0] == 0 ? item[1] : ""; 
        });
        return this.containsFooBarQix(divisibleResult.join(''))? divisibleResult.join('') : number;
    },


    // This function take a number of type String in params
    // For each 3 , 5, or 7 that will be founded, this one add "Foo" for 3, "Bar" for 5 and "Qix" for 7 in digits order
    completeEachDigit : function(number){
        let completeDigit = "";
        number.split('').forEach(caract => {
                this.defaultValue().forEach(defaultValueItem => {
                if(caract == defaultValueItem[0]){
                    completeDigit = completeDigit.concat('', defaultValueItem[1]);
                } 
            });
        })
        return completeDigit;
    },

    // This function take a String in params
    // this check all digits for replace 0 by *
    addSpecialCaracterForeach0 : function(string){
        return string.replace(new RegExp(0, 'g'), '*');
    },


    // This function take a number of type String in params
    // this function is the implementation of FooBarQuix kata (Combinasion of all itération is use in this function)
    compute : function(number){
        let tab = [];
        tab.push(this.divisible(number));
        number.split('').map(letter => {
            tab.push(this.completeEachDigit(letter));
            if(letter === "0"){
                let tmpTab = this.addSpecialCaracterForeach0(tab.join('').concat("0"));
                tab = [];
                tab.push(tmpTab);
            }
        });
        const containsFooBarQix = this.containsFooBarQix(tab.join(''));
        const computeValue = containsFooBarQix? tab.join('') : number;
        return computeValue;
    },
}

module.exports = FooBarQix;