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
