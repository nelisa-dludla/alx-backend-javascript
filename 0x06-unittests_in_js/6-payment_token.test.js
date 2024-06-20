const expect = require('chai').expect
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function () {
	// When true is passed
	it('should resolve', function () {
		const expectedData = {data: 'Successful response from the API' };
		getPaymentTokenFromAPI(true)
		.then((data) => {
			expect(data).to.equal(expectedData);
			done();
		})
	});
	// When false is passed
	it('should do nothing', function () {
		const expectedData = {data: 'Successful response from the API' };
		getPaymentTokenFromAPI(false)
		.then((data) => {
			expect(data).to.equal(undefined);
			done();
		})
	});
});
