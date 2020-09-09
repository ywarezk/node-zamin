const applicationCreator = require('express');
const UsersService = require('./services/users.service');

const app = applicationCreator();
const userService = UsersService.getInstance();

userService.createUser('Yariv', 'Katz');
userService.createUser('Piglet', 'Chaitovsky');
userService.createUser('Sweetness', 'Fluffy belly');

app.get('/api/users', function(req, res) {
	const users = userService.getUsers();
	res.json(users);
});

app.get('/api/users/:id', function (req, res) {
	const id = req.params.id;
	const user = userService.getSingleUser(id);
	if (user) {
		res.json(user);	
	} else {
		res.status(404).json({
			error: 'user not found'
		})
	}
	
});

app.delete('/api/users/:id', function(req, res) {
	const id = req.params.id;
	userService.deleteUser(id);
	res.status(204).end();
});

app.listen(3000, function() {
	console.log('users rest is now listening...');
})