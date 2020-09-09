const createExpressApplication = require('express');
const authenticate = require('./auth');
const authorization = require('./authorization');

// authenticate(req) => true / false
// authorization(req) => true / false

const app = createExpressApplication();

// Request --0---+---0---+----0---+-----0-------->
// -----+-----+----+-------->

// middle can do one of the following:
// 1. Return response
// 2. pass to the next middleware
// 3. send an error

app.get('/', function(req, res, next) {
	next()
});

app.get('/', function (req, res, next) {
	res.send('hello world');
});

app.get('/api/users', function(req, res) {
	const authRes = authenticate(req);
	const authorizationRes = authorization(req);
	if (!authRes) {
		res.status(401).json({
			error: '...'
		})
	}
	if (!authorizationRes) {
		res.status(403).json({
			error: '...'
		});
	}
	
	// ... bring the users
});

app.get('/api/todo', function (req, res) {
	authenticateAndAuthorizaResponse(req);

	// ... bring the users
});

// authentication
app.use('/api', function(req, res, next) {
	// user.role = 'admin', 'user', 'guest'
	try {
		const user = authenticate(req);
		if (user) {
			req.user = user;
			next()
		} else {
			res.status(401).json({
				error: 'not authenticated'
			})
		}	
	} catch(databaseError) {
		next(databaseError);
	}	
})

app.use('/api/users', function (req, res) {
	const user = req.user;
	if (user.role === 'admin') {
		next();
	} else {
		res.status(403).json({
			error: 'not authorized'
		});
	}
})

app.get('/api/users', function(req, res) {
	
})

app.get('/api/todo', function (req, res) {

});


app.use(function(err, req, res, next) {
	res.send(err.message);	
})

app.use(function (err, req, res, next) {

})

app.use(function (err, req, res, next) {

});

// app.use('/', function(req, res) {
	
// })

app.listen(3000, function () {
	console.log('we are now listening on port 3000...');
});