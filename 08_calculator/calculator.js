const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const sumArray = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  return sumArray;
};

const multiply = function(array) {
  const multipliedArray = array.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
  });

  return multipliedArray;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let value = 0;
  let num = a;

  if (a === 0 || a === 1) {
    return 1;
  }

  for (let i = 0; i < a; i++) {
    console.log(i, num, value);
    if (num === a) {
      value += (num * (num - 1));
      num--;
    } else if (num > 1) {
      value *= (num - 1);
      num--;
    }
  }

  return value;
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
