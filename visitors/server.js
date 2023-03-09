
// require express
var express = require("express");
var session = require("express-session");

// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//session
app.use(
	session({
		secret: 'iloveyoumiss',
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 60000 },
	})
);
//session counter
app.get('/', function(req, res){
    if(req.session.counter === undefined){
        req.session.counter = 1;
    }else{
        req.session.counter++;
    }
    res.render('index', {counter: req.session.counter});
    console.log("this is counter", req.session.counter);
});
//reset the session counter
app.post('/reset', function(req, res){
    req.session.counter = 0;
    res.redirect('/');
});
app.post('/repeat', function(req, res){
    // res.render('index', {counter: req.session.counter});
    req.session.counter--;
    res.redirect('/');
});
// tell the express app to listen on port 8000
app.listen(9000, function() {
    console.log("listening on port 9000");
});