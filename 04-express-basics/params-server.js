/**
  client -------> server
         request
		 /hello?foo=bar&dog=piglet // query params
		 /hello/bar/piglet // path params
 */
 
const createExpressApplication = require('express');

const app = createExpressApplication();

// /qparams?foo=bar
app.get('/qparams', function(req, res) {
	// {foo: 'bar'}
	const foo = req.query.foo;
	res.send(foo);
});

app.get('/pparams/:foo', function(req, res) {
	// { foo: 'bar' } // pparams/bar
	const foo = req.params.foo;
	res.status(200).json({
		// foo: foo
		foo
	});
	
	// res.status(204).end()
});

app.listen(3000, function () {
	console.log('we are now listening on port 3000...');
});

