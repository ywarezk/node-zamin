/**
Testing the users api
 */
 
const app = require('../app');
const axios = require('axios');
const { strictEqual, deepStrictEqual } = require('assert')
 
describe('Users API', function() {
	let server;
	
	/*before(function() {
		
	});
	
	after(function() {
		
	})*/
	
	beforeEach(function(done) {
		server = app.listen(3000, function() {
			console.log('we are now listening on port 3000');
			done();
		})
	});
	
	afterEach(function(done) {
		server.close(function() {
			console.log('we closed our server');
			done();
		});
	})
	
	it('POST - /api/users/ - create new user', async function() {
		// app.listen - activate our server
		
		// close our server
		
		const response = await axios.post('http://localhost:3000/api/users/', {
			firstName: 'Yariv',
			lastName: 'Katz'
		});
		strictEqual(response.status, 201);
		deepStrictEqual(response.data, {
			id: 0,
			firstName: 'Yariv',
			lastName: 'Katz'
		});
	});
	
})