const repeatString = function(greeting, times) {
    if (times < 0)
        return "more greetings please";

    let greet = "hey";
    
    for (i = 1; i < times; i++) {
        greet += greeting;
    }

    return greet;
};

// Do not edit below this lineS
module.exports = repeatString;
