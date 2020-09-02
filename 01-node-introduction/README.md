# Introduction to Node.js

## What is Node.js

Node.js can run js

## Javascript

- async code
- event driven
- single threaded***
  - automatic multi thread
  
## Node Parts

1. V8 - stack - Heap - Garbage collector - main thread
2. Node C++ API - thread pool (4 thread) - kernel
3. Event Loop - queue - I can only push callbacks to the V8 if the stack is empty 

## What's our plan

Part 1:
Node contains:
- js runtime
- global functions
- ships with basic libraries, dll

Part 2:
- Express.js
- Sails.js
- NestJS


## Lesson Plan

- What is Node.js
- Installing Node.js
- verify that node is installed
- Running our first js script
- About the IDE
- Debugging the script
- Stuff we need to remember about Javascript
- Why build the server with Node.js

## EX.

- Download and install Node.js
- Verify that it's installed by typing in the CMD:
```
> node -v
```
- Download and install Visual Studio Code (VSC).
- Create an empty folder and open that folder with VSC
- create a new javascript file
- that file should use `setInterval` and print to the console a countdown from 5 to zero
- after reaching zero use `clearInterval` to cancel the `setInterval`