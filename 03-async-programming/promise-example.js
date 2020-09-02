/**

 --------------------------> Pending
 
 ----------0-|--------------> Resolved
 
 ----------X--------------> Rejected


 */
 
 // Promise<string>
const timerPromise = new Promise(function(resolve, reject) {
	
	setTimeout(function() {
		resolve('hello world');
		resolve('please call resolve once please');
		// reject(new Error('something happened'))
	}, 1000)
	
});

// Promise<number | boolean>
const anotherpromise = timerPromise.then(
	function(msg) {
		console.log(msg);
		return 42;
	},
	function(err) {
		return true
	}
);

timerPromise.then(function (msg) {
	console.log(msg);
});

timerPromise.then(function (msg) {
	console.log(msg);
});


