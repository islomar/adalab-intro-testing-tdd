var expect = require('chai').expect;

beforeEach(function() {
  this.fizzBuzz = new FizzBuzz();
});

describe('FizzBuzz()', function() {

  describe("should return input for numbers not divisible by 3 or 5", function() {

      it("for example 0", function() {
          expect(this.fizzBuzz.calculate(0)).to.equal(0);
      });

      it("for example 1", function() {
          expect(this.fizzBuzz.calculate(1)).to.equal(1);
      });

  });

  describe("should return 'fizz' for numbers divisible by 3", function() {

      it("for example 3", function() {
          expect(this.fizzBuzz.calculate(3)).to.equal('fizz');
      });

      it("for example 6", function() {
          expect(this.fizzBuzz.calculate(6)).to.equal('fizz');
      });

  });

  describe("should return 'buzz' for numbers divisible by 5", function() {

    it("for example 5", function() {
      expect(this.fizzBuzz.calculate(5)).to.equal('buzz');
    });

    it("for example 10", function() {
      expect(this.fizzBuzz.calculate(10)).to.equal('buzz');
    });

  });

  describe("should return 'fizzbuzz' for numbers divisible by 3 and 5", function() {

      it("for example 15", function() {
          expect(this.fizzBuzz.calculate(15)).to.equal('fizzbuzz');
      });

      it("for example 30", function() {
          expect(this.fizzBuzz.calculate(30)).to.equal('fizzbuzz');
      });

  });

 });

Number.prototype.isDivisibleBy = function(divisor) {
    if (this == 0)
        return false;
    return this % divisor === 0;
}

var FizzBuzz = function() {
    var fizzRule = new FizzBuzzRule(3, 'fizz');
    var buzzRule = new FizzBuzzRule(5, 'buzz');

    return new FizzBuzzCalculator([
        fizzRule,
        buzzRule
    ]);
}

function FizzBuzzCalculator(rules) {
    this.rules = rules;

    this.applyRules = function(input) {
        var output = '';
        _.each(this.rules, function(rule) { output += rule.apply(input); })

        return output;
    }

    this.calculate = function(input) {
        return this.applyRules(input) || input;
    }
}

function FizzBuzzRule(divisor, output) {

    this.apply = function(input) {
        return input.isDivisibleBy(divisor) ? output : '';
    }
}
