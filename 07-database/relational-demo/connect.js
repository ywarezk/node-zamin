/**
 * we are connecting to an sqlite database
 */

const { Sequelize } = require('sequelize');

// new Sequelize(process.env.DATABASE_URL)
// new Sequelize('mssql://username:password@mimshal-zamin.db.com:1443/dbName');
const sequelize = new Sequelize({
	dialect: 'sqlite',
	// username: '...',
	// password: '...',
	// host: '',
	// port: 5432,
	storage: 'db.sqlite'
});

sequelize.authenticate().then(
	function() {
		// this will run if you successfully connected to the db
		console.log('we are connected to the db');
	},
	function(err) {
		console.log(`Failed to connect to the db: ${err.message}`);
	}
)

module.exports = sequelize; 