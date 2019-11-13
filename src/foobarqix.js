

const FooBarQix = {
    defaultValue : function (){
        return [
            ["3", "Foo"],
            ["5", "Bar"],
            ["7", "Qix"]
        ];
    },

    containsFooBarQix : function(string){
        let tabString = this.defaultValue().map(value => {
            return value[1];
        });
        tabString.push(tabString.join(''));
        let contains = false;
        tabString.forEach(value => {
            if(value === string)
            contains = true;
        })
        return contains;
    },

    divisible : function(number){
        const divisibleResult = this.defaultValue().map(item => {
            return number % item[0] == 0 ? item[1] : ""; 
        });
        return this.containsFooBarQix(divisibleResult.join(''))? divisibleResult.join('') : number;
    },
}

module.exports = FooBarQix;