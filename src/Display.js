/**
* Author: Jordi Anguela, 2014
*/ 

function Display(console) {
  this.console = console;
};

Display.prototype.show = function(list) {
  this.console.log(list);
};

module.exports.Display = Display;