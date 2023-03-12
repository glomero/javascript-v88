
// require express
var express = require("express");
// path module -- try to figure out where and why we use this
// create the express app
var app = express();

var path = require("path");
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
// feedback form index page
app.get('/', function(req, res) {
    res.render("index");
});

const server = app.listen(1337);
console.log('Running in localhost at port 1337');

const io = require('socket.io')(server);

io.on('connection', function (socket) { 
    // set event listener for submitting a form from client
    socket.on('posting_form', function (data) {
		// emit data from form to the updated_message listener of the client
		socket.emit('updateMessage', { message: data.data });
		// emit data with a random number to the random_number listener of the client
		socket.emit('randomNumber', { randomNumber: Math.floor(Math.random() * 1000) });
	});
});