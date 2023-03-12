// require express
var express = require('express');
// require session
var session = require('express-session');
// path module -- try to figure out where and why we use this
var path = require('path');
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, './static')));
// session use
app.use(
	session({
		secret: 'iloveyou',
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 60000 },
	})
);
//set ejs in view folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//route for index page/home page

//post route for guess post
app.get('/', function (req, res) {
	let message = '';
	res.render('index', {counter: req.session.counter = 10, message: message});
	console.log('counter:', req.session.counter);
});
//result submitted
app.post('/result', function(req, res){
	// Decrement the counter in the session
	if(req.session.counter === undefined){
		req.session.counter = 10;
	}else{
		req.session.counter--;
	}
	let message = '';
	// Check if name is empty
	if (!req.body.name) {
		message = 'Please enter your name!';
		req.session.counter++;
	}else {
		let randomNum = Math.floor(Math.random() * 9000000) + 1000000;
		message = '50% Discount '  + randomNum;
	}
	res.render('index', { counter: req.session.counter, message: message});
	console.log("POST DATA \n\n", req.body);
});
app.get('/reset', function(req, res){
	let message = '';
	req.session.counter = 10;
	res.render('index', {counter: req.session.counter, message: message})
});
app.get('/claim', function(req, res){
	let message = '';
	if(req.session.counter <= 0){
		message = 'Sorry, all coupons have been claimed!';

	}
	res.render('index', { counter: req.session.counter, message: message});
	console.log("POST DATA \n\n", req.body);
	console.log('counter:', req.session.counter);
});
// tell the express app to listen on port 8000
app.listen(9000, function () {
	console.log('listening on port 9000');
});
