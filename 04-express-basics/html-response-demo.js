const createExpressApplication = require('express');
const path = require('path');

const app = createExpressApplication();

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, 'templates'));

app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'hello.html'));
	// res.status(404).sendFile(path.resolve(__dirname, 'hello.html'));
})

app.get('/dynamic', function (req, res) {
	res.render('dynamic-html', {
		name: 'Pigletshvily Chaitovsky',
		layout: false
	});
})

app.listen(3000, function () {
	console.log('we are now listening on port 3000...');
});