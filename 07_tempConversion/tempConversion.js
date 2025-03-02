const convertToCelsius = function(f) {
  //conversion
  const cTemp = ((f-32)*(5/9));
  //to one d.p
  const celsius = Math.round(cTemp * 10) /10;

  console.log (celsius);

  //return
  return celsius;
};

const convertToFahrenheit = function(c) {
  //conversion
  const fTemp = ((c*9/5)+32);
  //to one d.p
  const fahrenheit = Math.round(fTemp * 10) /10;

  console.log (fahrenheit);

  //return
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
