/**
* Author: Jordi Anguela, 2014
*/ 
var Display = require('../src/Display.js').Display;

describe("Display", function() {
  var display;
  var console;

  beforeEach(function() {
    console = jasmine.createSpyObj('console', ['log']);
    display = new Display(console);
    var list = ["1", "2", "Fizz", "4", "Buzz"];
    display.show(list);
  });  

  it("shows the list in the console", function() {
    expect(console.log).toHaveBeenCalled();
  });

});