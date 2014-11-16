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
  });

  it("generates 'Buzz' for numbers multiples of 5", function() {
    expect(listGenerator.generateNumber(5)).toEqual("Buzz");
    expect(listGenerator.generateNumber(10)).toEqual("Buzz");
    expect(listGenerator.generateNumber(20)).toEqual("Buzz");
    expect(listGenerator.generateNumber(25)).toEqual("Buzz");
  });

});