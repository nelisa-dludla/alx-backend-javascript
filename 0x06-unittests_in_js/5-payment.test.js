const sinon = require('sinon');
const expect = require('chai').expect
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('hooks sendPayment', function () {
	let consoleSpy;

	beforeEach(function () {
		consoleSpy = sinon.spy(console, 'log');
	});
	afterEach(function () {
		consoleSpy.restore()
	});

	it('first test', function () {
		sendPaymentRequestToApi(100, 20);
		sinon.assert.calledWith(consoleSpy, 'The total is: 120');
		sinon.assert.calledOnce(consoleSpy);
	});

	it('second test', function () {
		sendPaymentRequestToApi(10, 10);
		sinon.assert.calledWith(consoleSpy, 'The total is: 20');
		sinon.assert.calledOnce(consoleSpy);
	});
});
