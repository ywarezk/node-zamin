/**
 http server the respond hello world to client
 */
 
const createExpressApplication = require('express');

const app = createExpressApplication();

// GET /hello
// { json: () => ... }

app.get('*', function(req, res) {
	res.send('hello world');
});

app.listen(3000, function() {
	console.log('we are now listening on port 3000...');
});

// app.post