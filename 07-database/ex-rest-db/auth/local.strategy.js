/**
we want to configure passport with passport-local
 */
 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('../models');

passport.use(new LocalStrategy({
	usernameField: 'email'
}, async function(email, password, done) {
	const user = await User.findOne({
		where: {
			email
		}
	});
	if (!user) done(null, false);
	
	const isPasswordMatch = await bcrypt.compare(password, user.password)
	if (isPasswordMatch) {
		done(null, user);
	} else {
		done(null, false);
	}
}))