'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: {
    	type: DataTypes.STRING,
		validate: {
			notEmpty: true
		}
    },
    lastName: DataTypes.STRING,
    email: {
		type: DataTypes.STRING,
		validate: {
			isEmail: true
		}
	},
    password: DataTypes.STRING,
    role: DataTypes.STRING,
	age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};