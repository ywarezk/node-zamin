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
  - `POST` request to the following url: `/api/user/` the request should contain a body
  ```
  {
	  firstName: 'some name',
	  lastName: 'some last name'
  }
  ```
  id is automatically created by your service.
  You should return a response with status code: `201` and json response of the item that is just created.
  - `DELETE` request to the url: `/api/user/:id` should delete the user with the passed id.
  The response should send a status code of 204 with no content
  - `PUT` request to the url: `/api/user/:id` should update a user in the array that is identified with the id passed as a url param.
  The request should contain in the body the new values:
  ```
  {
	  firstName: 'some different name'
  }
  ```
  the response should send with status code of `200` and send the full item
