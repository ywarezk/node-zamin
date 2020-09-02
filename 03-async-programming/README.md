# Async Programming in Javascript

Javascript is going to be filled with async code.
We better learn how to deal with async code properly.

## Async code

```
setTimeout(() => {
	
}, 1000)
```

```
fs.readFile('./README.md', (err, data) => {
	
})
```


Bad Patterns
```
10. setTimeout(() => {
	12. fs.readFile('README.md', () => {
		axios.get('https://...').then(() => {
			
		});
		
		process.on('uncaughtException', () => {
			
		})	
	});
}, 1000)
11. console.log('')
```

Good pattern
```
async function goodPattern() {	
	await timer();
	await readFile();
	await Promise.all([
		axios,
		process
	])
}
```

```
timer()
	.then(
		() => readFile()
	)
	.then(
		() => Promise.all([
			axios,
			process
		])
	)
```

```
setInterval(() => {
	
}, 1000)
```

## Classify your async code

- how many times will the callback be called
- infinite?
- can my async code fail

## Toolbox

- Promise - async / await
- RXJS - Observable - stage1 soon stage 2
  - https://www.youtube.com/watch?v=rLPW1VowY1E
- callbacks
- Events

## Promises



## Lesson Plan

- Promise
- Promise chaining
- async await
- error handling
- Error first callback
- Event emitter

## EX.

- create an empty folder for this ex
- in that folder init npm
- using npm install the library: [axios](https://github.com/axios/axios)
- create a function that returns a promise that is resolved after `t` second and returns the string of the following url: `https://nztodo.herokuapp.com/api/tasks/?format=json`
```typescript
function serverUrl(t: number) : Promise<string>;
``` 
- In your project entry file create an `async function` that will use `await` to get the url from the `serverUrl` function and then use `await` on axios to send a request to our server which will return a json response.
- print that json response to the console.