// mocha will run this file
// mocha will expose global functions we can use to write the test

const assert = require('assert')
const userService = require('../services/users.service');

// describe - group of tests
describe('UserService', function() {
	
	// it - we are writing a single test
	it('hello world', function() {
		assert.strictEqual('hello world1', 'hello world');
	});
	
	it('createUser', function() {
		const user = userService.createUser('Yariv', 'Katz');
		assert.strictEqual(user.firstName, 'Yariv');
		assert.strictEqual(user.lastName, 'Katz');
		assert.strictEqual(user.id, 0);
		assert.strictEqual(userService._users.length, 1);
	});
	
})