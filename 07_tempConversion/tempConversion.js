const convertToCelsius = function(f) {
  //conversion
  const celsius = ((f-32)*(5/9));

  console.log (celsius);

  //return
  return celsius;
};

const convertToFahrenheit = function(c) {
  //conversion
  const fahrenheit = (c*((9/5)+32));

  console.log (fahrenheit);

  //return
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
