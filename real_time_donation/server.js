const express = require('express');
const app = express();
const server = app.listen(8000);
let path = require('path');
const socket = require('socket.io')
const io = socket(server);

var donation = 100;

//requuire socket io module
io.on('connection', function (socket) { //2
    socket.on('updateDonation', function(data){
        io.emit('updateAll', {donation: donation});
    });
});

app.use(express.static(__dirname + "/static"));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    donation = 100;
    console.log('Client request to ', req.url);
	res.render('index', {donation: donation});
});
app.get('/donate', function(req, res){
    donation += 10;
    res.send({donation: donation});
});
app.get('/redeem', function(req, res){
    if(donation >= 10){
        donation -= 10;
    }
    res.send({donation: donation});
});


console.log('Running in localhost at port 8000');
