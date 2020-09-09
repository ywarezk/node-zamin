

// Promise<string> => https://nztodo.herokuapp.com/api/tasks/?format=json
function serverUrl(t) {
	return new Promise(function(resolve) {
		
		setTimeout(function() {
			resolve('https://nztodo.herokuapp.com/api/tasks/?format=json');
		}, t)
		
	});
}

module.exports = serverUrl;