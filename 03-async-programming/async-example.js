const fs = require('fs');

const readFile = fs.promises.readFile

readFile('./README.md')
	.then(
		function(data) {
			console.log(data.toString());
		},
		function(err) {
			console.log(err.message);
		}
	)
	.then(() => {
		// return axios.get('...')
	})
	.catch(() => {
		return []
	})
	.then()
	.then()

/**
 * @returns {Promise<number>}
 */	
async function readReadme() {
	// yield
	try{
		const contentOffile = await readFile('./README.md');	
	} catch(err) {
		throw new Error();
	}
	
	// const someVar = await promise2;
	// const someVarFromPromise3 = await promise3;
	
	const arrayOfValues = await Promise.all(
		[promise2, promise3]
	)
	console.log(contentOffile.toString());
}

const numPromise = readReadme();
numPromise.then(
	(number42) => {
		
	}
)
