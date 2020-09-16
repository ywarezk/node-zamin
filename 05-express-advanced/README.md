# Express advanced

during your backend development, you will stumble on common problems that
will repeat in many backend apps. 
In this lesson we will go over some of those common problems and how we solve them
with express.

## Lesson plan

- app.use
- middleware creator
- serving static files
- extending the request object
- req.body
- http is stateless
- cookies
- session
- authentication
- passport

## Passport

```
npm install passport passport-jwt
```



## EX REST with body

In the same REST server you created earlier. Add the following urls (you will need to deal with the request body):

- try to use express generator for creating your app.
- all the users api should be in a different router

- `POST` request to the following url: `/api/user/` the request should contain a body
  ```
  {
	  firstName: 'some name',
	  lastName: 'some last name'
  }
  ```
  id is automatically created by your service.
  You should return a response with status code: `201` and json response of the item that is just created.
  
  - `PUT` request to the url: `/api/user/:id` should update a user in the array that is identified with the id passed as a url param.
  The request should contain in the body the new values:
  ```
  {
	  firstName: 'some different name'
  }
  ```
  the response should send with status code of `200` and send the full item

## EX Register

- Add the following fields to each user:
	```
	{
		id: number;
		firstName: string;
		lastName: string;
		email: string;
		password: string;
		role: string
	}
	```
- The post request to create a new user will use [bcrypt](https://www.npmjs.com/package/bcrypt) to save the encrypted password

## EX Authorization

- create the following middleware creator:
```
authorizedRoles(roles: string[]): (req: Request, res: Response, next: Next) => void
```
- this middleware creator should check the `req.user` if the user role match one of the roles in the array we got
- if it match we call the next
- if it doesn't match we return and 403 status code with a json error message

## EX Authentication

- add the following route to the `users.route.js`
  - POST request to the url: `/api/user/login`
  - with the body:
  ```
  {
	  email: 'some@email.com',
	  password: 'some-password'
  }
  ``` 
- Add [Passport](http://www.passportjs.org/) along with [passport-local](http://www.passportjs.org/packages/passport-local/) to authenticate the user (remember to use `bcrypt.compare`) 
- if the user is authenticated return a JWT token

## EX JWT + Authorization

- For the delete API add authentication using `passport-jwt`
- also add authorization and approve only the users with role: `admin`
