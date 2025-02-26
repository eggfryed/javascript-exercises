const reverseString = function(original) {
//message
original = "hello";

//split message
let splitMessage = original.split("");

//reverse message
let reverseMessage = splitMessage.reverse();

//join message
let joinMessage = reverseMessage.join("");

//return new message
return joinMessage; 

};


// Do not edit below this line
module.exports = reverseString;
