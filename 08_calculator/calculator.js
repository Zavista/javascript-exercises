const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => {
    total = total + num;
    return total;
  }, 0)

  //using reduce to iterate through each element in the array and add it to total, start with a total of 0.
};

const multiply = function(arr) {
  return arr.reduce((total, num) => {
    total = total*num;
    return total;
  })
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
  let total = 1; //cause 0! is still 1, its our base case
	for (let i = n; i > 0; i--){
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
