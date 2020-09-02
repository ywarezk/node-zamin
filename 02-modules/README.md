# Modules

When creating backend apps with Node.js, we will usually want to split our project to multiple files.
In this lesson we will learn how to do that.

## Lesson Plan

- What is a module
- importing and exporting
- folder structure
- built in modules
- process
- error handling
- npm
- community modules

## Types of Modules

1. Your project files - node can tell with the relative in require
2. built in modules
3. community modules - we install using npm

## NPM

node package manager

- install community packages
- npm can publish our package
- version management

every package we install is identified: name:version


## NPM commands

```
> npm init --yes
> npm set registry https://npm.zamin.co.il
> npm login
> npm install lodash
> npm install # 

> npm publish
```

when installing the package is download from a server - registry


## EX.

- create an empty new folder for this ex.
- In that folder create another folder called `models`
- In the `models` folder create a new file: `user.model.js`
- In the `user.model.js` file you need to create a class that represents a user, a user in our system contains `firstName`, `lastName`, `id`
- In our project folder create another folder called `services`
- In the `services` folder create a new file: `user.service.js`
- In that file create a singleton class
- That class should manage an array that will hold a list of our users and expose methods to CRUD the users array.
- In our root project folder create the file `main.js` that will require the service we created and use the service methods to CRUD the users.