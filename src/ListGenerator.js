/**
* Author: Jordi Anguela, 2014
*/ 

function ListGenerator() {
};

ListGenerator.prototype.generateList = function() {
};

ListGenerator.prototype.generateNumber = function(number) {
  if (number % 15 == 0) {
    return "FizzBuzz"
  } 
  else if (number % 3 == 0) {
    return "Fizz"
  }
  else if (number % 5 == 0) {
    return "Buzz"
  } 
  else {
    return "" + number;
  }
};

module.exports.ListGenerator = ListGenerator;