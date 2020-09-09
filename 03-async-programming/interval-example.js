// node

// readFile, readFileSync
// 1. stack - V8, Heap, Grabage collector, no stravation main thread
// 2. C++ Node API
// 3. Event loop

setInterval(
	function() {
		console.log('hello interval');
	}, 
	1000
)