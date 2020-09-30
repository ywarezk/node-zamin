/**
 * we have a table in our database - todos
 * We want to create a class to map the table to OOP
 */

const { Model, DataTypes } = require('sequelize')
const sequelizeInstance = require('../connect')
 
class Todo extends Model {
	
}

Todo.init({
	// how our table will look like
	title: DataTypes.STRING,
	description: DataTypes.STRING,
	when: DataTypes.DATE
}, {
	sequelize: sequelizeInstance
});

module.exports = Todo;
