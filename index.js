const express = require('express');
const app = express();

/*
*	Route Handler
*/
app.get('/', (req, res) => {
	res.send({ hi: 'hello page' });
});
const PORT = process.env.PORT || 5000;
console.log('App listent at Port: ', PORT);
app.listen(PORT);