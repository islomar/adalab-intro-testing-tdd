var expect = require('chai').expect;

beforeEach(function() {
  this.fizzBuzz = new FizzBuzz();
});

describe('fizzbuzz()', function() {

  describe("should return 'buzz' for numbers divisible by 5", function() {

    it("for example 5", function() {
      expect(this.fizzBuzz.calculate(5)).to.equal('buzz');
    });

    it("for example 10", function() {
      expect(this.fizzBuzz.calculate(10)).to.equal('buzz');
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
