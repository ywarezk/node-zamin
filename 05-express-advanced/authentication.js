const createApplication = require('express');
require('./auth/local.authentication');
require('./auth/jwt.authentication');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const app = createApplication();

app.use(createApplication.json());
app.use(createApplication.urlencoded());

app.use(passport.initialize());

// bcrypt
// 


// authentication - who am I? 
// authorization - Am I allowed ?

// there are many ways to authenticate the user
//   - username password
//   - facebook
//   - openid ...

// who is the user == Yariv.

// authentication ways:
//    - authenticate every request - JWT
//    - session authentication - username password, facebook, openid, saml

// middleware creator
// strategies
// passport
// req.user

// JWT
// 1. authentication with some other strategy
// 2. you are producing a token: JWT format for creating a token

/**
           email + password
client -------------------------->server

                jwt token
client <------------------------- server
              
			  jwt token
client--------------------------->server

				jwt token
client--------------------------->server

Headers: Authorization: Bearer <token>




 */

// req.user
app.post('/login', passport.authenticate('local', { session: false, prompt: 'you are not authenticated '}), async function(req, res) {
	// req.user
	const token = await jwt.sign({
		hello: 'world',
		userId: req.user.id
	}, 'secret string')
	res.send('jwt token: ' + token);
});

app.use('/api', passport.authenticate('jwt', { session: false }));

app.get('/api/users', function(req, res) {
	res.send('users');
});

app.listen(3000, function () {
	console.log('we are now listening');
});

// console.log('stam');
