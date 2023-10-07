const convertToCelsius = function(tempInFahr) {
  let ans = (tempInFahr - 32) * (5/9);
  return Math.round(ans * 10)/10; //Rounds to 1 decimal place
  //Example: 135.678
  //Math.round(135.678 * 10)/10
  //Math.round(1356.78)/10
  //1357/10
  //135.7
  //Basically Math.round only rounds to nearest integer so you need to do the *10 thing to round the decimal places after the first
  //For 2 decimal places, use *100 and ecetera
};

const convertToFahrenheit = function(tempInCel) {
  let ans = (tempInCel * 9/5) + 32;
  return Math.round(ans *10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
