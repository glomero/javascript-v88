const express = require('express');
const app = express();

let path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('index', {colorRandom: colorRandom});
});

const server = app.listen(8000);
console.log('Running in localhost at port 8000');

// require socket io module
const io = require('socket.io')(server);
const rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
let colorRandom = '#'  //this is what we'll return!
// initial color
let color = 'white';
io.on('connection', function (socket) {
	// emit to all client with a 'color' listener
	socket.emit('color', { color: color, colorRandom: colorRandom });
	// listener for click of clients, emits color update
	socket.on('clicked', function (data) {
		console.log('color mode is: ', data);
        if(data.random){
            colorRandom = '#'; //this will return
            for(let i = 0; i < 6; i++)   // 6 is total number of characters in hex
			{
			    let x = Math.floor((Math.random()*16));  // 16 for hex
                colorRandom += rgb[x];
			}
            io.emit('color', { color: colorRandom }); // Emit the new random color to all clients
			console.log('color random is ', colorRandom);
        }else{
            let color = data.color;
            io.emit('color', { color: color }); // Emit the selected color to all clients
        }
	});
});