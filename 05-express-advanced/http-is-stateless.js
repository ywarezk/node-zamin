/**
http is stateless
session
cookies
 */
 
const createApplication = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = createApplication();

app.use(cookieParser());

/**

session id        |    data
------------------------
1                       {hello: 'world'}
2                        {foo: 'bar'}
3                       'stam data'

 */
app.use(session({
	secret: 'hello world'
})) // req.session


// what is cookies
// cookie is set either by the server or the client
// the browser will automatically send the cookie in the request headers
//    Cookie: 

app.get('/hello', function(req, res) {
	res.cookie('hello', 'world', {
		path: '/foo',
		httpOnly: true
	});
	req.session['hello'] = 'hello session';
	res.send('world');
})

app.get('/foo', function (req, res) {
	// req.headers['Cookie']
	// {hello: 'world'}
	// req.cookie
	res.send(`bar ${req.cookies.hello} ${req.session.hello}` );
})

app.listen(3000, function () {
	console.log('we are now listening');
});