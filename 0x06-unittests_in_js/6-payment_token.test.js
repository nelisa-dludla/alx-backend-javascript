const expect = require('chai').expect
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function () {
	it('should always resolve', function () {
		const expectedData = {data: 'Successful response from the API' };
		getPaymentTokenFromAPI(true)
		.then((data) => {
			expect(data).to.equal(expectedData);
			done();
		})
	});
});
