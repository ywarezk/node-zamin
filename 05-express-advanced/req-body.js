/**
 * sometimes we have requests
 that arrives with a body
 req: POST, PUT, PATCH
 Header: Content-Type: application/json
 { json: 'format', hello: 'world' }
 Header: Content-Type: application/urlencoded
 json=format&hello=world
 */

const createApplication = require('express');
const {json, urlencoded} = require('express');

const app = createApplication();

function jsonExample(req, res, next) {
	// if (req.headers['Cote'])
	// ..
}


app.use(json());
app.use(urlencoded());

// email: '...', password: '...'
app.post('/login', function(req, res) {
	// { json: 'format' ....}
	// req.body
	
	res.send(req.body.email);
});

app.listen(3000, function () {
	console.log('we are now listening');
})