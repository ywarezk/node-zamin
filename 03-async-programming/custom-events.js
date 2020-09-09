const EventEmitter = require('events');

const myEvent = new EventEmitter();

setTimeout(() => {
	myEvent.emit('hello', 'hello Arnaud', 30, 100);	
}, 1000)

setInterval(() => {
	myEvent.emit('node course', 'Michal');
	myEvent.emit('error', new Error('something happened'))
}, 1000)


myEvent.on('hello', function(hello, age, grade) {
	
});

myEvent.on('hello', function (hello, age, grade) {

});

myEvent.on('error', function(err) {
	
});


class SomeAsyncStuff extends EventEmitter {
	
}

