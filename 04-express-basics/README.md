# Express Basics

Let's start building a backend app, Http server that can respond to http requests and return http response.
To achieve this we will use Express.js

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
  