const express = require('express');
const app = express();


let path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(8000);
console.log('Running in localhost at port 8000');

const io = require('socket.io')(server);
app.get('/', function (req, res) {
	res.render('index');
});
//array answers
let answers = "socket";// set the correct answer
let answer = [];
let gameWon = false; // flag to indicate if the game is won
io.on('connection', function (socket) {
	io.emit('chatUpdate', answer);

	socket.on('newUser', function (name) {
		socket.broadcast.emit('newUser', name);
		socket.emit('currentUser', name);
	});

	socket.on('postingForm', function (data) {
		let message = data.message.trim().toLowerCase(); // convert the message to lowercase and trim any whitespace
		if (!gameWon && message === answers) { // check if the message matches the answer and the game is not already won
		  gameWon = true; // set the flag to indicate that the game is won
		  answer.push({name: '', message: `${data.currentUser} won! ${answers} is the exact word!` }); // add a special message that indicates the winner
			io.emit('chatUpdate', answer);
		} else {
			answer.push({ name: data.currentUser, message: data.message });
			io.emit('chatUpdate', answer);
		}
	});
});