// (function(module, require, __dirname, __filename, exports) {

	const { User } = require('./models/user.model');

	// const User = obj.User;

	const me = new User(1, 'yariv', 'katz');
	console.log(me.firstName);
	console.log(__dirname);
	console.log(__filename);
	
// })()

