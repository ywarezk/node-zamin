const fs = require('fs');

fs.readFile('./README.md', function(err, data) {
	console.log(data.toString());
});