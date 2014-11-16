/**
* Author: Jordi Anguela, 2014
*/ 

function KataFizzBuzz(listGenerator, display) {
  this.listGenerator = listGenerator;
  this.display = display;
};

KataFizzBuzz.prototype.execute = function() {
  var fizzBuzzList = this.listGenerator.generateList();
  this.display.show(fizzBuzzList);
};

module.exports.KataFizzBuzz = KataFizzBuzz;