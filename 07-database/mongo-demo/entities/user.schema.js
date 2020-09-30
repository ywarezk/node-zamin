/**
Schema user
how a user object look like
 */
 
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
	firstName: String,
	lastName: String,
	settings1: {
		isAds: Boolean
	}
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;