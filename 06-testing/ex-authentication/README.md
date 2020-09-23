# Testing your server

- unit tests
- integration tests
- E2E tests - Swagger / postman

## Testing Framework

- tools to write tests
- run the tests

mocha, Jasmine, Jest ...

each support tests for:
- node
- browser?

we will choose mocha

## To run the tests with the IDE

place this inside the `launch.json`
inside the `configurations` array

```
{
	"args": [
		"-u",
		"bdd",
		"--timeout",
		"999999",
		"--colors",
		"${workspaceFolder}/**/*.spec.js"
	],
	"internalConsoleOptions": "openOnSessionStart",
	"name": "Run Tests",
	"program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
	"request": "launch",
	"skipFiles": [
		"<node_internals>/**"
	],
	"type": "pwa-node"
}
```


