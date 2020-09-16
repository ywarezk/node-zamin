var express = require('express');
var router = express.Router();

/* GET users listing. */
// /api/users/
router.get('/', function (req, res) {
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
	.delete(function (req, res, next) {
		const id = req.params.id;
		userService.deleteUser(id);
		res.status(204).end();
	})

module.exports = router;
