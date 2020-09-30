todo
users

## Associations

when a table refers to data from another table.

## What kind of association do we have?

- 1:1 one to one

    Users

id   |   firstName  

10.         Yariv


    UserSettings
	
id   |     isAds    |   userId

42.         true           10

- 1:M one to many
one user can have many rows of todos

    Todo
	
id    |    title     |    description    | userId

1          ...               ...              10
2          ...               ...              10
3          ...               ...              10

- M:N Many to Many

    Tags
	
id     |   tagName

1.        shopping
2.          dogs
3.          work


    TodoTags
	
id     |    tagId     |    todoId
1.            1				1
2.            1				3
3.            2             2
3.            3             2


EX. Association

one to many

create a user model connected to todo model with a one to many relation.
Use:

https://sequelize.org/master/manual/assocs.html