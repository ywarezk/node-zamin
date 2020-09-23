// mocha will run this file
// mocha will expose global functions we can use to write the test

const assert = require('assert')

// describe - group of tests
describe('UserService', function() {
	
	// it - we are writing a single test
	it('createUser', function() {
		assert.strictEqual('hello world1', 'hello world');
	})
	
})