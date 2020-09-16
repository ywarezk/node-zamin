/**
our server wants to send static file
js, css, img, font
 */
 
const createApplication = require('express');
const { static } = require('express'); 

const app = createApplication();

// app.get('/public/logo.png', function(req, res) {
// 	res.sendFile(...)
// })


// (req, res, next) =>  ...
app.use('/public', static('public'));

app.listen(3000, function () {
	console.log('we are now listening');
})