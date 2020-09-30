/**
Testing the users api
 */
 
const app = require('../app');
const axios = require('axios');
const { strictEqual, deepStrictEqual } = require('assert')
const { User } = require('../models'); 
const jwt = require('jsonwebtoken')
 
describe('Users API', function() {
	let server;
	let token;
	
	/*before(function() {
		
	});
	
	after(function() {
		
	})*/
	
	/**
	 * create a new Users table
	 */
	beforeEach(async () => {
		await User.sync({
			force: true
		});
	});
	
	/**
	 * populate the users table with a single user
	 */
	beforeEach(async () => {
		await User.create({
			"firstName": "Yariv",
			"lastName": "Katz",
			"email": "yariv@nerdeez.com",
			"password": "$2b$10$1PkAIOGuVS2rmElUa.2HJet6bHSjOfGX4ZY1UKEMBmk0AaHUMGDXa",
			"age": 35
		});
	})
	
	beforeEach(function(done) {
		server = app.listen(3000, function() {
			console.log('we are now listening on port 3000');
			done();
		})
	});
	
	beforeEach((done) => {
		jwt.sign({
			userId: 1
		}, 'some secret',
		function (err, t) {
			token = t;
			done();
		})
	})
	
	afterEach(function(done) {
		server.close(function() {
			console.log('we closed our server');
			done();
		});
	})
	
	it('should get all the users', async () => {
		const response = await axios.get('http://localhost:3000/api/users/', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		const data = response.data;
		strictEqual(data.length, 1);
	});
	
	it('POST - /api/users/ - create new user', async function() {
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
		const users = await User.findAll();
		strictEqual(users.length, 2);
	});
	
	
	it('get single user', async () => {
		const response = await axios.get('http://localhost:3000/api/users/1');
		strictEqual(response.data.firstName, 'Yariv');
	});
	
	it('delete a single user', async () => {
		const response = await axios.delete('http://localhost:3000/api/users/1');
		strictEqual(response.status, 204);
		const users = await User.findAll();
		strictEqual(users.length, 0);
	})
})


/**

try {
	response = await axios.post('http://localhost:3000/api/users/login', {
		email: 'yariv@nerdeez.com',
		password: '123456789'
	});

} catch (err) {
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
} catch (err) {
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

 */