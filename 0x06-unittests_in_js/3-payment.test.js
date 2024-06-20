const sinon = require('sinon');
const expect = require('chai').expect
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function () {
	it('both are equal', function () {
		const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
		const consoleSpy = sinon.spy(console, 'log');

		sendPaymentRequestToApi(100, 20)

		// Check if calculateNumber has been called with the correct arguments
		expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

		const result = calculateNumberSpy('SUM', 100, 20);
		const expectedMsg = `The total is: ${result}`;

		// Check if consoleSpy is the same as Utils.calculateNumber result
		expect(consoleSpy.calledWith(expectedMsg)).to.be.true;

		calculateNumberSpy.restore();
		consoleSpy.restore();
	});
});
