const UserService = require('./services/user.service');

const userService = UserService.getInstance();

userService.createUser('Yariv', 'Katz');
userService.createUser('Piglet', 'Chaitovsky');
userService.createUser('Sweetness', 'Fluffy belly');

console.log(userService.getUsers());

userService.deleteUser(2);

console.log(userService.getUsers());

userService.updateUser(1, {firstName: 'Pigletshvily'});

console.log(userService.getUsers());