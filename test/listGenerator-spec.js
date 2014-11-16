/**
* Author: Jordi Anguela, 2014
*/ 
var ListGenerator = require('../src/ListGenerator.js').ListGenerator;

describe("ListGenerator", function() {
  var listGenerator;

  beforeEach(function() {
    listGenerator = new ListGenerator();
    listGenerator.generateList();
  });  

  it("generates 'Fizz' for numbers multiples of 3", function() {
    expect(listGenerator.generateNumber(3)).toEqual("Fizz");
    expect(listGenerator.generateNumber(6)).toEqual("Fizz");
    expect(listGenerator.generateNumber(9)).toEqual("Fizz");
    expect(listGenerator.generateNumber(12)).toEqual("Fizz");
    expect(listGenerator.generateNumber(15)).toEqual("Fizz");
  });

});