const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber test', function() {
	// SUM
	// simple positive integers
	describe('simple positive integers (SUM)', function() {
		it('should return 4', function() {
			const expected = calculateNumber('SUM', 2, 2);
			assert.equal(expected, 4);
		});
	});
	// a needs to be rounded
	describe('a needs to be rounded (SUM)', function() {
		it('should return 4', function() {
			const expected = calculateNumber('SUM', 1.5, 2);
			assert.equal(expected, 4);
		});
	});
	// b needs to be rounded
	describe('b needs to be rounded (SUM)', function() {
		it('should return 4', function() {
			const expected = calculateNumber('SUM', 2, 1.5);
			assert.equal(expected, 4);
		});
	});
	// a and b need to be rounded
	describe('a and b need to be rounded (SUM)', function() {
		it('should return 3', function() {
			const expected = calculateNumber('SUM', 1.4 , 1.5);
			assert.equal(expected, 3);
		});
	});
	// SUBTRACT
	// simple positive integers
	describe('simple positive integers (SUBTRACT)', function() {
		it('should return 0', function() {
			const expected = calculateNumber('SUBTRACT', 2, 2);
			assert.equal(expected, 0);
		});
	});
	// a needs to be rounded
	describe('a needs to be rounded (SUBTRACT)', function() {
		it('should return 0', function() {
			const expected = calculateNumber('SUBTRACT', 1.5, 2);
			assert.equal(expected, 0);
		});
	});
	// b needs to be rounded
	describe('b needs to be rounded (SUBTRACT)', function() {
		it('should return 0', function() {
			const expected = calculateNumber('SUBTRACT', 2, 1.5);
			assert.equal(expected, 0);
		});
	});
	// a and b need to be rounded
	describe('a and b need to be rounded (SUBTRACT)', function() {
		it('should return 0', function() {
			const expected = calculateNumber('SUBTRACT', 2.4, 1.5);
			assert.equal(expected, 0);
		});
	});
	// DIVIDE
	// simple positive integers
	describe('simple positive integers (DIVIDE)', function() {
		it('should return 4', function() {
			const expected = calculateNumber('DIVIDE', 8, 2);
			assert.equal(expected, 4);
		});
	});
	// a needs to be rounded
	describe('a needs to be rounded (DIVIDE)', function() {
		it('should return 4', function() {
			const expected = calculateNumber('DIVIDE', 7.5, 2);
			assert.equal(expected, 4);
		});
	});
	// b needs to be rounded
	describe('b needs to be rounded (DIVIDE)', function() {
		it('should return 4', function() {
			const expected = calculateNumber('DIVIDE', 8, 1.5);
			assert.equal(expected, 4);
		});
	});
	// a and b need to be rounded
	describe('a and b need to be rounded (DIVIDE)', function() {
		it('should return 4', function() {
			const expected = calculateNumber('DIVIDE', 7.5, 1.5);
			assert.equal(expected, 4);
		});
	});
	// b is 0 when rounded
	describe('b is 0 (DIVIDE)', function() {
		it('should error string', function() {
			const expected = calculateNumber('DIVIDE', 8, 0.4);
			assert.equal(expected, 'Error');
		});
	});
});

