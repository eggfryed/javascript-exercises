const leapYears = function(year) {

console.log(year);

//leap years are divisible by four
if ((year % 4 != 0) || (year % 100 == 0)) {
    return false;
} else return true;
};

// Do not edit below this line
module.exports = leapYears;
