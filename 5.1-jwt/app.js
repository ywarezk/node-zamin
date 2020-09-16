require('./authentication/local.authentication');
require('./authentication/jwt.authentication');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const createApplication = require('express');
const {json} = require('express');


const app = createApplication();

app.use(json());
app.use(passport.initialize());
// app.use(createApplication.urlencoded());


app.post('/login', passport.authenticate('local', { session: false }), async function (req, res) {
	// req.user
	const token = await jwt.sign({
		hello: 'world',
		userId: req.user.id
	}, 'secret string')
	res.send('jwt token: ' + token);
});

app.use('/api', passport.authenticate('jwt', { session: false }));

app.get('/api/users', function (req, res) {
	res.send('users');
});

app.listen(3000, function () {
	console.log('we are now listening');
});