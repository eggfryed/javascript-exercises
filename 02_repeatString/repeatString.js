const repeatString = function(greeting, times) {
    if (times < 0)
        return "ERROR";

    let greet = "";
    
    for (i = 0; i < times; i++) {
        greet += greeting;
    }

    return greet;
};

// Do not edit below this lineS
module.exports = repeatString;
