const express = require('express');

const app = express()
const port = 7865

app.get('/', (req, res) => {
	res.status(200);
	res.type('Content-Type', 'text/plain');
	res.write('Welcome to the payment system');
	res.end()
});

app.get('/cart/:id(\\d+)', (req, res) => {
	const cartId = parseInt(req.params.id);
	if (isNaN(cartId)) {
		res.status(404);
		res.end();
	};
	res.status(200);
	res.write(`Payment methods for cart ${cartId}`);
	res.end();
});

app.listen(port, () => {
	console.log('API available on localhost port 7865')
});

module.exports = app;
