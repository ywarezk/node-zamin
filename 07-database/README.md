# Connecting to database and sequelize

In this lesson we will connect our express server to a database.

## db families

- relational database, SQL
  - mysql, mssql, oracle, postgres
- non relational, NoSQL
  - mongo, couchdb, dynamodb, casandra, cockroachdb
- memory based db
  - Redis, MemCached
- graph
  - neo4J
  
## Relational

the data is arranged in
dbs, tables, rows

id     |   firstName     | lastName
---------------------------------------
1.         Yariv            Katz

## NonRelational

the data is arranged in
dbs, collections, documents

```
[
	{
		_id: ObjectId('sfdasdfasd'),
		firstName: 'Yariv',
		lastName: 'Katz'
	}
]
```

## ORM

We will use ORM - Object Relational Mapping

```
1. connect('...');

2. class User {
	firstName: string
	lastName: string
	id: number
}

3. User.find()
const user = new User();
user.firstName = 'yariv'
user.save() // insert ... into ... values()
```

## Sequelize

we will use sequelize to interact with sqlite db.
but you can replace it with another supported db.

## Mongoose




TypeORM, mongoose

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