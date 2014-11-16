/**
* Author: Jordi Anguela, 2014
*/ 

function KataFizzBuzz(listGenerator) {
  this.listGenerator = listGenerator;
}

KataFizzBuzz.prototype.execute = function() {
  this.listGenerator.generateList();
};

module.exports.KataFizzBuzz = KataFizzBuzz;