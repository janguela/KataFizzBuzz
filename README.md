### Introduction

This is my first Kata ever so I wanted to apply a few concepts that I have been playing with lately.

Basically I want to use a Testing approach. With TDD we test the state. With BDD we test the interactions.

As in this kata we will not have many interaction we will mostly make use of the TDD technique (Mocks will not be used).

### Kata Objectives

- Think before all
- Write a design
- Test before coding
- Use [preemptive commits](http://arialdomartini.wordpress.com/2012/09/03/pre-emptive-commit-comments/) :
  - Talk about the feature, not about yourself: __Tell me what the software does (not what you did)__
  - __Don’t refer to the past:__ don’t describe what the state of the software was: __tell what the state is right now.__ Use the present tense.
- First: finish the Kata. After that: Refactor
  - do small refactors —> tests always green. (commit often)
- Follow [SOLID](http://en.wikipedia.org/wiki/SOLID_(object-oriented_design) principles: single-responsibility, ...
- Do a Post mortem analysis to review the work done with my friend Luis.
- Write down the conclusions of this Kata

### Tools used
- NodeJS
- jasmine : testing
- istanbul : test coverage

### Design
I think that 3 simple modules will do the work:
- KataFizzBuzz : main module to drive the flow with 2 dependencies
  - ListGenerator.js : module to encasulate the business logic that generates the FizzBuzz list.
  - Display.js : module that displays the FizzBuzz list

### Setup and code execution
```
npm install
node src/app.js
```

### Post mortem analysis
TBD

### Conclusions
TBD



