var assert = require('assert');
var calculateNumber = require('./0-calcul.js');

describe('calculateNumber test', function() {
	// simple positive integers
	describe('simple positive integers', function() {
		it('expecting 3', function() {
			const expected = calculateNumber(2, 1);
			assert.equal(expected, 3);
		});
	});
	// only a needs to be rounded
	describe('a to be rounded', function() {
		it('expecting 2', function() {
			const expected = calculateNumber(1.4, 1);
			assert.equal(expected, 2);
		});
	});
	// only b needs to be rounded
	describe('b to be rounded', function() {
		it('expecting 4', function() {
			const expected = calculateNumber(1, 2.7);
			assert.equal(expected, 4);
		});
	});
	// both a and b need to be rounded
	describe('a and b to be rounded', function() {
		it('expecting 10', function() {
			const expected = calculateNumber(1.5, 7.9);
			assert.equal(expected, 10);
		});
	});
});
