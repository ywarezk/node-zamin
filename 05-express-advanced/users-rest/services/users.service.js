const User = require('../models/user.model');

class UserService {
	static instance = null;

	_users = [];

	static getInstance() {
		if (UserService.instance) {
			return UserService.instance;
		}
		UserService.instance = new UserService();
		return UserService.instance;
	}

	getUsers() {
		return this._users;
	}
	
	getSingleUser(id) {
		return this._users.find(function(user) {
			return user.id == id;
		})
	}

	createUser(firstName, lastName) {
		const id = this._users.length;
		const newUser = new User(id, firstName, lastName);
		this._users.push(newUser);
		return newUser;
	}

	deleteUser(id) {
		let indexInArray = 0;
		this._users.find(function (user, index) {
			indexInArray = index;
			return user.id == id;
		});
		this._users.splice(indexInArray, 1);
	}

	// {firstName: 'some new value'}
	updateUser(id, newUser) {
		const user = this._users.find(function (user) {
			return user.id == id;
		});
		Object.assign(user, newUser);
		return user;
	}
}

module.exports = UserService.getInstance();