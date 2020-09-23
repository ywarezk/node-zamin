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
	
	it.only('POST - /api/users/ - create new user', async function() {
		// app.listen - activate our server
		
		// close our server
		
		let response = await axios.post('http://localhost:3000/api/users/', {
			firstName: 'Yariv',
			lastName: 'Katz',
			email: 'yariv@nerdeez.com',
			role: 'admin',
			password: '12345678'
		});
		strictEqual(response.status, 201);
		const user = response.data;
		
		try {
			response = await axios.post('http://localhost:3000/api/users/login', {
				email: 'yariv@nerdeez.com',
				password: '123456789'
			});
			
		} catch(err) {
			strictEqual(err.response.status, 401);
		}
		
		response = await axios.post('http://localhost:3000/api/users/login', {
			email: 'yariv@nerdeez.com',
			password: '12345678'
		});
		strictEqual(response.status, 200);
		const token = response.data.token;
		
		try {
			response = await axios.get('http://localhost:3000/api/users/');
		} catch(err) {
			strictEqual(err.response.status, 401);
		}
		
		response = await axios.get('http://localhost:3000/api/users/', {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		strictEqual(response.status, 200);
		
		response = await axios.delete(`http://localhost:3000/api/users/${user.id}`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		strictEqual(response.status, 204);
		
		
		
		
		
	});
	
})