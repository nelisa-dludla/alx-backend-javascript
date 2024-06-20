const sinon = require('sinon');
const expect = require('chai').expect
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('stub calculateNumber', function () {
	it('calculateNumber calculates the same as sendPayment', function () {
		const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
		const consoleSpy = sinon.spy(console, 'log');

		sendPaymentRequestToApi(100, 20);
		sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
		sinon.assert.calledWith(consoleSpy, 'The total is: 10');

		calculateNumberStub.restore();
		consoleSpy.restore();
	});
});
