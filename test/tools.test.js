var expect = require('chai').expect;

let countdown = require('../app/scripts/tools.js');
let result;
let notNumbers = ['a', 'abc', 'x23fg', '45', null, 'null', undefined, 'undefined', NaN, 'NaN'];

describe('reduceNumber()', function() {

    it('should return 1 number lower than the one provided', function() {
        for(let i = 1; i <= 10; ++i){
            result = countdown.reduceNumber(i);
            expect(result).to.equal(i-1);
        }
    });

    it('should not provide any number smaller than 0', function() {
        for(let i = -10; i < 0; ++i){
            result = countdown.reduceNumber(i);
            expect(result).to.equal(0);
        }
    });

    it('should accept only numbers', function() {
        for(let i = 0; i < notNumbers.length; ++i){
            result = countdown.reduceNumber(notNumbers[i]);
            expect(result).to.equal(0);
        }
    });

});


describe('incrementNumber()', function() {

    it('should return 1 number higher than the one provided', function() {
        for(let i = 1; i <= 10; ++i){
            result = countdown.incrementNumber(i);
            expect(result).to.equal(i+1);
        }
    });

    it('should not provide any number bigger than 86400', function() {
        for(let i = 86400; i <= 86440; ++i){
            result = countdown.incrementNumber(i);
            expect(result).to.equal(0);
        }
    });

    it('should accept only numbers', function() {
        for(let i = 0; i < notNumbers.length; ++i){
            result = countdown.incrementNumber(notNumbers[i]);
            expect(result).to.equal(0);
        }
    });

});