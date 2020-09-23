const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const jwtFromRequest = require('passport-jwt').ExtractJwt
const userService = require('../services/users.service');

passport.use(new JwtStrategy({
	secretOrKey: 'some secret',
	jwtFromRequest: jwtFromRequest.fromAuthHeaderAsBearerToken()
}, function(payload, done) {
	const user = userService.getSingleUser(payload.userId)
	if (user) {
		done(null, user);
	} else {
		done(null, false);
	}
}));