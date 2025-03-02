const sumAll = function(num1, num2) {
    //value of result
    let result = 0

    //define num values
    let maxNum = Math.max(num1, num2);
    let minNum = Math.min(num1, num2);

    //parameter values
    console.log (minNum);
    console.log (maxNum);
    
    //iterable loop

    if ((minNum < 0 || maxNum < 0) || (!Number.isInteger(num1)) || (!Number.isInteger(num2))) {
        return "ERROR";
    } else {
        for (let i = minNum; i <= maxNum ; i++) {
        result += i;
    }
}

    //return result
    return result;
}
// Do not edit below this line
module.exports = sumAll;
