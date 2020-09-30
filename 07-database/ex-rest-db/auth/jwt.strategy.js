const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const jwtFromRequest = require('passport-jwt').ExtractJwt
const { User } = require('../models');

passport.use(new JwtStrategy({
	secretOrKey: 'some secret',
	jwtFromRequest: jwtFromRequest.fromAuthHeaderAsBearerToken()
}, async function(payload, done) {
	const user = await User.findByPk(payload.userId)
	if (user) {
		done(null, user);
	} else {
		done(null, false);
	}
}));