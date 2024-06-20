const express = require('express');

const app = express()
const port = 7865

app.get('/', (req, res) => {
	res.status(200);
	res.type('Content-Type', 'text/plain');
	res.write('Welcome to the payment system');
	res.end()
});

app.listen(port, () => {
	console.log('API available on localhost port 7865')
});

module.exports = app;
