const removeFromArray = function (array, toRemove) {

  //find the position of the number to remove
  index = array.indexOf(toRemove);
  console.log (index);

  //remove number from array
  newArray = array.splice(index, 1);
  console.log (newArray);

  //return new array
  return (array);
};


// Do not edit below this line
module.exports = removeFromArray;
