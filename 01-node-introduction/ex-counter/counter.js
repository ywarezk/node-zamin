let counter = 5;

const intervalId = setInterval(function() {
	console.log(counter);
	console.log(process.env['HELLO']);
	if (counter === 0) {
		clearInterval(intervalId);
	}
	counter--;
}, 1000)