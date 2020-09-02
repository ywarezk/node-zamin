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
- Next
- Router
- Error handling

## EX. REST Server

In this ex. you will build your first REST server.
- Create a new folder for this ex.
- Use the same `user.service.js` we created in the modules ex. That service will manage an array of users. (If you didn't complete that ex you can use the solution service that is pushed in our repository)
- Create a REST server that can respond to the following requests
  - `GET` request to the url: `/api/users` should return all the users we have in a `json` format along with status code of `200`
