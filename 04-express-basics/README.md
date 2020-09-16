# Express Basics

Let's start building a backend app, Http server that can respond to http requests and return http response.
To achieve this we will use Express.js

## What we are building

- we are building Http servers.

## what we will use to build the http servers.

ExpressJS
set of tools for building http server
client -----> Server
       <-----
	   
## Hello world

our first http server will get request and respond with `hello world`

## What is REST

REST communication protocol between client and server

- Resource - usually a table from the database

- http protocol + REST we can answer the following questions:

  - which resource the client wants to interact? 
  - What the client wants to do with resource?
  - Through REST the response has a well defined structure...
  
- REST defines how the  Request ---> Response looks like

- Resource -> users db table

Request method we can answer what the client wants to do with the resource
- Request: GET => client wants to read data
- Request: POST => client want to add a row to the table
- Request: PUT => client wants to update a row in the table
- Request: DELETE => clients want to delete a row from the table

Request path: which resource we want to interact with
- Request: /api/users
- Request: /api/todo
- Request: /api/users/:id

Response
status code + body
- status: 200 + json
- status: 201 + json
- status: 200 + json
- status: 204

## How to use and install handlebars

1. 
```
npm install hbs
```

2. 
```
app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, 'templates'));
```

3. 
```
res.render('error-404', {error: new Error(), layout: false})
```

## Lesson Plan

- What is express
- basic hello world server
- Application
- Middleware
- Request
- Response
- EX 1
- Next
- Router
- Error handling
- Template
- Ex 2 + 3

## Summary Express

1.
```
> npm install express
```

2. import express and create application
```
const createApplication = require('express');
const app = createApplication()
```

3. which requests are server needs to handle?
  - Request Method: (GET, POST, PUT...)
  - Request Path: /, /hello
  
```
app.get('/hello', function(req, res, next) {
	next(new Error('something happened in my server')) // it's like throw in express
})
```

```
app.use(function(err, req, res, next){
	// its like catch
	
})
```

4. 2 middleware chains
  - logic middleware chain
  - error middlewares

5. if we want to use a template engine:
```
> npm install handlebars

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, 'templates'));
``` 





## EX. REST Server

In this ex. you will build your first REST server.
- Create a new folder for this ex.
- Use the same `user.service.js` we created in the modules ex. That service will manage an array of users. (If you didn't complete that ex you can use the solution service that is pushed in our repository)
- Create a REST server that can respond to the following requests
  - `GET` request to the url: `/api/users` should return all the users we have in a `json` format along with status code of `200`
  
  - `DELETE` request to the url: `/api/user/:id` should delete the user with the passed id.
  The response should send a status code of 204 with no content
  
  - `GET` request to the url: `/api/user/:id`  should get a single user and send it in the response. the status code is 200.

## EX. Error middleware

- In the server you created before add an Error middleware that will catch the cases where the `:id` does not exist
- you will need to return an HTML page of 404 error
- That page should be created using handlebars
- you should pass handlebars in the context a variable of the error message

## EX. Router

- Try and make your app more organized and modular. 
- Create the folder: `routes`
- in that folder create the file: `users.route.js`
- the logic for the REST api of the users should sit in that router. so remove the logic from `app.js` and move it to the `Router`
- Attach your app to the router you created.
  