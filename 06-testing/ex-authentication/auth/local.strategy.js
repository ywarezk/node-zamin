/**
we want to configure passport with passport-local
 */
 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userService = require('../services/users.service');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy({
	usernameField: 'email'
}, async function(email, password, done) {
	const users = userService.getUsers();
	const user = users.find(function(user) {
		return user.email === email
	});
	if (!user) done(null, false);
	
	const isPasswordMatch = await bcrypt.compare(password, user.password)
	if (isPasswordMatch) {
		done(null, user);
	} else {
		done(null, false);
	}
}))