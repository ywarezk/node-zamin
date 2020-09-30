/**
we will try to take our Model
and interact with the database
 */
 
require('./connect');
const UserModel = require('./entities/user.schema');
 
async function main() {
	const user = await UserModel.create({
		firstName: 'Yariv',
		lastName: 'Katz',
		settings1: {
			idAds: false
		}
	});
	
	const users = await UserModel.find();
	
	console.log(JSON.stringify(users));
}

main();