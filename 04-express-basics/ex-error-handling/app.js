const applicationCreator = require('express');
const UsersService = require('./services/users.service');
const { resolve } = require('path');

const app = applicationCreator();
const userService = UsersService.getInstance();

app.set('view engine', 'hbs');
app.set('views', resolve(__dirname, 'views'))

userService.createUser('Yariv', 'Katz');
userService.createUser('Piglet', 'Chaitovsky');
userService.createUser('Sweetness', 'Fluffy belly');

app.get('/api/users', function(req, res) {
	const users = userService.getUsers();
	res.json(users);
});

// //api/users/:id/hello
// app.use('/api/users/:id', function(req, res, next) {
// 	// check if id exists and if not "throw"
// });

// /api/users/10
// /api/users/delete * from sometable
// sql injection
app.route('/api/users/:id(\\d+)')
	.all(function(req, res, next) {
		const user = userService.getSingleUser(req.params.id);
		if (!user) {
			next(new Error('User not found'))
		} else {
			next();
		}
	})
	.get(function(req, res, next) {
		const id = req.params.id;
		const user = userService.getSingleUser(id);
		res.json(user);
	})
	.delete(function (req, res, next) {
		const id = req.params.id;
		userService.deleteUser(id);
		res.status(204).end();
	})

// app.get('/api/users/:id', function (req, res) {
// 	const id = req.params.id;
// 	const user = userService.getSingleUser(id);
// 	if (user) {
// 		res.json(user);	
// 	} else {
// 		res.status(404).json({
// 			error: 'user not found'
// 		})
// 	}
	
// });

// app.delete('/api/users/:id', function(req, res) {
// 	const id = req.params.id;
// 	userService.deleteUser(id);
// 	res.status(204).end();
// });

app.use(function(err, req, res, next) {
	res.status(404).render('error-404', {
		layout: false,
		message: err.message
	});
});

app.listen(3000, function() {
	console.log('users rest is now listening...');
})