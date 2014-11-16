/**
* Author: Jordi Anguela, 2014
*/ 
var KataFizzBuzz = require('../src/KataFizzBuzz.js').KataFizzBuzz;

describe("KataFizzBuzz", function() {
  var kataFizzBuzz;

  beforeEach(function() {
    listGenerator = jasmine.createSpyObj('ListGenerator', ['generateList']);

    kataFizzBuzz = new KataFizzBuzz(listGenerator);

    kataFizzBuzz.execute();
  });

  it("uses ListGenerator module to generates a list of numbers", function() {
    expect(listGenerator.generateList).toHaveBeenCalled();
  });

});