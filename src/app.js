/**
* Author: Jordi Anguela, 2014
*/ 
var KataFizzBuzz = require('./KataFizzBuzz.js').KataFizzBuzz;
var ListGenerator = require('./ListGenerator.js').ListGenerator;
var Display = require('./Display.js').Display;

var listGenerator = new ListGenerator();
var display = new Display(console);
var kataFizzBuzz = new KataFizzBuzz(listGenerator, display);

kataFizzBuzz.execute();