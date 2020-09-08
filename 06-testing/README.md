# Testing

Testing is an important of every quality software we want to deliver.
The fact that we are dealing with http which is a stateless protocol, the fact that we will often use REST as our communication protocol, makes testing even easier and more important.

Testing increate the quality of our app, reduce the amount of checking our software will need, increase the app stability and reduce the amount of bugs.
With testing we can use CI-CD to deliver quicker updates.

## Lesson Plan

- The importance of testing
- unit test, integration test, E2E test
- Mocha
- Chai

## Testing EX.

- Write the following test for the users api
  - test the register api and register a user
  - test the login api to login a user and get a jwt token
  - test the delete api that only authorize users to delete with a valid jwt token and the right role.
  
