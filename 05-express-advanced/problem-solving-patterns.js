/**
We have a problem we need to solve with express
- static files
- cookies
- authentication
- authorization
...
we have repeating patterns in express to solve every problem
Know the pattern know all the solutions
 */
 
const createApplication = require('express');

const app = createApplication();

// middleware creator

// @returns {Promise<() => >}
 function someProblem() {
	return function(req, res, next) {
		
	}	
}

function helloWorld(name, strategy) {
	return function(req, res, next) {
		// res.send('hello ' + name)
		req.greeting = 'hello ' + name;
		next();
	}
}

// app.use('/api/users', async function(req ,res, next) {
	
// });

app.use('/api/users', someProblem()) // wrong => right

app.get('/hello', helloWorld('Yariv'));

// work on all the paths
app.use(helloWorld('Arnaud'));

// 1. middleware creator
// 2. extending the request object 
// 3. strategy pattern




app.listen(3000, function() {
	console.log('we are now listening');
})