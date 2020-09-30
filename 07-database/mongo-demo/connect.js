/**
We need to connect to a mongo server
 */
 
const { connect } = require('mongoose');

connect('mongodb://localhost:27017/test-db-zamin').then(
	() => {
		console.log('we are now connected to the db');
	},
	(err) => {
		console.log(`we failed to connect to the db: ${err.message}`);	
	}
);