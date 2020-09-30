/**
Schema user
how a user object look like
 */
 
const { Schema, model, SchemaTypes } = require('mongoose');

const TodoSchema = new Schema({
	title: String,
	when: Date
})

const UserSchema = new Schema({
	firstName: String,
	lastName: String,
	settings1: SchemaTypes.Mixed,
	todos: [TodoSchema]
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;