# Connecting to database and sequelize

In this lesson we will connect our express server to a database.

## Lesson Plan

- Choosing a database
- NoSQL and SQL databases
- ORM
- Entity Relational Diagram
- Query analysis
- Sequelize
- Connecting 
- Models
- Validation
- Associations
- Migrations
- Index

## REST EX with database

Time to connect our users REST server to a database.
- Create a sequelize model of a user
- In the model add validation and validate the email is in the correct email format.
- In the `users.service.js` replace all the CRUD methods by using the model you created. all those methods should return a Promise.
- Your REST API should work with an sqlite database.