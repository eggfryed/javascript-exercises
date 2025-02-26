const reverseString = function(message) {

//split message
let splitMessage = message.split("");

//reverse message
let reverseMessage = splitMessage.reverse();


//join message
let joinMessage = reverseMessage.join("");


//return new message
return joinMessage; 
};

// Do not edit below this line
module.exports = reverseString;
