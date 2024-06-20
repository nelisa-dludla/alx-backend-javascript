const chai = require('chai');
const sinon = require('sinon');
const request = require('request');
const { expect } = chai;

describe('index page', function () {
	let consoleSpy;
	before(() => {
		consoleSpy = sinon.spy(console, 'log');
	});

	after(() => {
		consoleSpy.restore();
	});

	it('should return the message Welcome to the payment system', function (done) {
		const url = 'http://localhost:7865/';
		request(url, (err, res, body) => {
			if (err) {
				done(err);
			};
			// Check status code
			expect(res.statusCode).to.equal(200);
			// Check content
			expect(body).to.equal('Welcome to the payment system');
			// Check console log
			expect(consoleSpy.calledWith('API available on localhost port 7865'));

			done();
		});
	});
});

describe('cart page', function () {
	let consoleSpy;
	beforeEach(() => {
		consoleSpy = sinon.spy(console, 'log');
	});

	afterEach(() => {
		consoleSpy.restore();
	});

	describe('cart id is a number', function () {
		it('should return Payment methods for cart :id', function (done) {
			const url = 'http://localhost:7865/cart/12';
			request(url, (err, res, body) => {
				if (err) {
					done(err);
				};
				// Check status code
				expect(res.statusCode).to.equal(200);
				// Check content
				expect(body).to.equal('Payment methods for cart 12');
				// Check console log
				expect(consoleSpy.calledWith('API available on localhost port 7865'));

				done();
			});
		});
	});

	describe('cart id is not a number', function () {
		it('should return a status code of 404', function (done) {
			const url = 'http://localhost:7865/cart/hello';
			request(url, (err, res, body) => {
				if (err) {
					done(err);
				};
				// Check status code
				expect(res.statusCode).to.equal(404);
				// Check console log
				expect(consoleSpy.calledWith('API available on localhost port 7865'));

				done();
			});
		});
	});
});
