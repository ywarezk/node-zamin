var express = require('express');
const userService = require('../services/users.service');
const bcrypt = require('bcrypt');
const authorizedRoles = require('../auth/role.authorization');

var router = express.Router();

/* GET users listing. */
// /api/users/
router.route('/')
	.get(function (req, res) {
		const users = userService.getUsers();
		res.json(users);
	})
	// we need req.body
	.post(async function(req, res) {
		// {firstName: '...', lastName: '...'}
		const encryptedPassword = await bcrypt.hash(req.body.password, 10)
		const user = userService.createUser(
			req.body.firstName, 
			req.body.lastName,
			req.body.email,
			encryptedPassword,
			req.body.role,
		);
		res.status(201).json(user);
	})

// //api/users/:id/hello
// app.use('/api/users/:id', function(req, res, next) {
// 	// check if id exists and if not "throw"
// });

// /api/users/10
// /api/users/delete * from sometable
// sql injection
router.route('/:id(\\d+)')
	.all(function (req, res, next) {
		const user = userService.getSingleUser(req.params.id);
		if (!user) {
			next(new Error('User not found'))
		} else {
			next();
		}
	})
	.get(function (req, res, next) {
		const id = req.params.id;
		const user = userService.getSingleUser(id);
		res.json(user);
	})
	.delete(authorizedRoles(['admin']), function(req, res, next) {
		const id = req.params.id;
		userService.deleteUser(id);
		res.status(204).end();
	})
	// req.body
	.put(function(req, res) {
		const user = userService.updateUser(req.params.id, req.body);
		res.status(200).json(user);
	})
	
// create a new user
// don't duplicate urls
// use route
/*

router.post('/', function(req, res) {
	
});

// update an existing user
router.put('/:id', function(req, res) {
	
}) */

module.exports = router;
