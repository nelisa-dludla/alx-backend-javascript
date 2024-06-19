import assert from 'assert';
import calculateNumber from './0-calcul.js';

describe('calculateNumber test', function() {
	// simple positive integers
	describe('simple positive integers', function() {
		it('expecting 3', function() {
			const expected = calculateNumber(2, 1);
			assert.equal(expected, 3);
		});
	});
	// only a needs to be rounded (floor)
	describe('a to be rounded', function() {
		it('expecting 2', function() {
			const expected = calculateNumber(1.4, 1);
			assert.equal(expected, 2);
		});
	});
	// only a needs to be rounded (ceil)
	describe('a to be rounded', function() {
		it('expecting 3', function() {
			const expected = calculateNumber(1.8, 1);
			assert.equal(expected, 3);
		});
	});
	// only b needs to be rounded (ceil)
	describe('b to be rounded (ceil)', function() {
		it('expecting 4', function() {
			const expected = calculateNumber(1, 2.7);
			assert.equal(expected, 4);
		});
	});
	// only b needs to be rounded (floor)
	describe('b to be rounded (floor)', function() {
		it('expecting 3', function() {
			const expected = calculateNumber(1, 2.4);
			assert.equal(expected, 3);
		});
	});
	// both a and b need to be rounded (ceil)
	describe('a and b to be rounded (ceil)', function() {
		it('expecting 10', function() {
			const expected = calculateNumber(1.5, 7.9);
			assert.equal(expected, 10);
		});
	});
	// both a and b need to be rounded (floor)
	describe('a and b to be rounded (floor)', function() {
		it('expecting 10', function() {
			const expected = calculateNumber(2.1, 8.4);
			assert.equal(expected, 10);
		});
	});
});
