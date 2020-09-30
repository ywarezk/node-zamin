## ORM - mongoose



```
users
[
	{
		firstName: '',
		...	
	}
]

todo
[
	{
		title: 'do something',
		when: new Date()
	}
]
```

one to many

```
users
[
	{
		firstName: 'yariv',
		todos: [
			{title: '...', when: new Date()},
					
		]
	}
]
```

```
users
[
	{
		_id: ObjectId('111111')
		firstName: 'yariv',
		todos: [
			{ _id: ObjectId('asdfsfda'), title: 'something' }	
		]
	}
]


todo
[
	{
		_id: ObjectId('asdfsfda'),
		title: 'something',
		userId: ObjectId('111111')
	}
]
```