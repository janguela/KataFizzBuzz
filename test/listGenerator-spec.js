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

  it("generates 'FizzBuzz' for numbers multiples of 3 and 5", function() {
    expect(listGenerator.generateNumber(15)).toEqual("FizzBuzz");
    expect(listGenerator.generateNumber(30)).toEqual("FizzBuzz");
    expect(listGenerator.generateNumber(45)).toEqual("FizzBuzz");
    expect(listGenerator.generateNumber(60)).toEqual("FizzBuzz");
  });

  it("returns the same number in any other case", function() {
    expect(listGenerator.generateNumber(1)).toEqual("1");
    expect(listGenerator.generateNumber(2)).toEqual("2");
    expect(listGenerator.generateNumber(4)).toEqual("4");
    expect(listGenerator.generateNumber(7)).toEqual("7");
    expect(listGenerator.generateNumber(8)).toEqual("8");
    expect(listGenerator.generateNumber(11)).toEqual("11");
    expect(listGenerator.generateNumber(13)).toEqual("13");
  });

});