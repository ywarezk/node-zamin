const Todo = require('./models/todo.model');

async function main() {
	// create our table
	await Todo.sync( { alter: true });
	
	const todo = await Todo.create({
		title: 'hello',
		description: 'world',
		when: new Date()
	})
	
	await Todo.create({
		title: 'foo',
		description: 'bar',
		when: new Date()
	});
	
	const todos = await Todo.findAll();
	
	console.log(JSON.stringify(todos));
}

main();