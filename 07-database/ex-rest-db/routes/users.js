var express = require('express');
const bcrypt = require('bcrypt');
const authorizedRoles = require('../auth/role.authorization');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

var router = express.Router();

/* GET users listing. */
// /api/users/
router.route('/')
	.get(passport.authenticate('jwt', {session: false}), async function (req, res) {
		const users = await User.findAll();
		res.json(users);
	})
	// we need req.body
	.post(async function(req, res) {
		// {firstName: '...', lastName: '...'}
		const encryptedPassword = await bcrypt.hash(req.body.password, 10)
		const user = await User.create({
			...req.body,
			password: encryptedPassword
		})
		
		// {firstName: ...}
		// const user = userService.createUser(
		// 	req.body.firstName, 
		// 	req.body.lastName,
		// 	req.body.email,
		// 	encryptedPassword,
		// 	req.body.role,
		// );
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
	.all(passport.authenticate('jwt', {session: false}), async function (req, res, next) {
		const user = await User.findByPk(req.params.id)
		if (!user) {
			next(new Error('User not found'))
		} else {
			req.userFromDb = user 
			next();
		}
	})
	.get(function (req, res, next) {
		const user = req.userFromDb;
		res.json(user);
	})
	.delete(authorizedRoles(['admin']), async function(req, res, next) {
		await req.userFromDb.destroy()
		res.status(204).end();
	})
	// req.body
	.put(async function(req, res) {
		const user = req.userFromDb;
		Object.assign(user, req.body);
		await user.save();
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

// { email: 'yariv@nerdeez.com', password: '12345678'}
// route for login
router.post('/login', passport.authenticate('local', {session: false}) ,function(req, res, next) {
	const user = req.user;
	jwt.sign({
			userId: user.id
		},
		'some secret',
		function(err, token) {
			if (err) {
				next(err)
			} else {
				res.status(200).json({
					...user,
					token
				})
			}
		}
	)
})

module.exports = router;
