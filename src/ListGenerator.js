/**
* Author: Jordi Anguela, 2014
*/ 

function ListGenerator() {
}

ListGenerator.prototype.generateList = function() {
};

ListGenerator.prototype.generateNumber = function(number) {
  if (number % 15 == 0) {
    return "FizzBuzz"
  } 
  else if (number % 3 == 0) {
    return "Fizz"
  }
  else {
    return "Buzz"
  }
};

module.exports.ListGenerator = ListGenerator;