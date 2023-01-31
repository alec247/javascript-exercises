const convertToCelsius = function(tempInput) {
  // (tempInput − 32) × 5/9 = result
  // must round to 1 decimal and work with negatives
  let result = (tempInput - 32) * (5 / 9);

  return Math.round(result*10)/10;
};

const convertToFahrenheit = function(tempInput) {
  // (tempInput × 9/5 + 32) = result
  let result = (tempInput * (9 / 5) + 32);

  return Math.round(result*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
