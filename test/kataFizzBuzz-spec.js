/**
* Author: Jordi Anguela, 2014
*/ 
var KataFizzBuzz = require('../src/KataFizzBuzz.js').KataFizzBuzz;

describe("KataFizzBuzz", function() {
  var kataFizzBuzz;
  var listGenerator;
  var display;
  var fizzBuzzListMock = ["1", "2", "Fizz", "4", "Buzz"];

  beforeEach(function() {
    listGenerator = jasmine.createSpyObj('ListGenerator', ['generateList']);
    listGenerator.generateList.andCallFake(function() {
      return fizzBuzzListMock;
    });
    display = jasmine.createSpyObj('Display', ['show']);

    kataFizzBuzz = new KataFizzBuzz(listGenerator, display);

    kataFizzBuzz.execute();
  });

  it("uses ListGenerator module to generates a list of numbers", function() {
    expect(listGenerator.generateList).toHaveBeenCalled();
  });

  it("uses Display module to show the generated list of numbers", function() {
    expect(display.show).toHaveBeenCalledWith(fizzBuzzListMock);
  });

});