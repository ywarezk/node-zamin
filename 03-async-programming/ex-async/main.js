const serverUrl = require('./server-url');
const axios = require('axios');

// axios.get(url: string) : Promise<Response>
// Promise#then


async function main() {
	// url: string
	const url = await serverUrl(2000);
	
	try {
		// response: Response
		const response = await axios.get(url);
		console.log(response.data);	
	} catch(err) {
		console.log('error requesting from server: ' + err.message)
	}
	
}

// function main2() {
// 	serverUrl(2000).then(function(url) {
		
// 	})
// }

main();