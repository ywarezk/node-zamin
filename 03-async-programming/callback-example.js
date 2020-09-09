// setInterval(() => {
	
// }, 1000)

const fs = require('fs');


// callback for dealing with async code
// the callback has a repeating signature
// err: {Error}
fs.readFile('./README.md', function(err, contentOfFile) {
	if (err) {
		// ... deal with the error
	}
});

