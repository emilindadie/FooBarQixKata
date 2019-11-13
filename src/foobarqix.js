

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
}

module.exports = FooBarQix;