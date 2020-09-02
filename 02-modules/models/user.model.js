
function sayHello() {
	console.log('hello world');
}

class User {
	constructor(id, firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.id = id;
	}
}

// wrong
// exports = {
// 	// User: User,
// 	User,
// 	// sayHello: sayHello,
// 	sayHello
// };

// OK
// exports['User'] = User

module.exports = {
	// User: User,
	User,
	// sayHello: sayHello,
	sayHello
};