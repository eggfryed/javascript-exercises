const removeFromArray = function (array, ...toRemove) {
  //new array
  let newArray = [];

  //create iterable loop
  array.forEach(remove => {
    if (!toRemove.includes(remove)) newArray.push(remove);
  })
 
  //return new array
  return newArray;
}


// Do not edit below this line
module.exports = removeFromArray;
