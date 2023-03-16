let express = require("express");
let session = require("express-session");
let path = require("path");
const axios = require('axios');
let app = express();

app.use(
	session({
		secret: "keyboardkitteh",
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 60000 },
	}),
);
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//routes
app.get('/', function(req, res){
	res.render('index');
});
app.get('/exchanges', function(req, res){
    req.session.start = 0;
    req.session.count = 10;
	req.session.url = `https://api.coingecko.com/api/v3/exchanges`;
    axios.get(req.session.url)
    .then(data => {
        let new_data = []
        for(let i = req.session.start; i < req.session.count; i++){
            new_data.push(data.data[i]);
        }
        res.json(new_data);
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});

app.get('/finance', function(req, res){
    req.session.start = 0;
    req.session.count = 10;
	req.session.url = `https://api.coingecko.com/api/v3/asset_platforms`;
    axios.get(req.session.url)
    .then(data => {
        let new_data = []
        for(let i = req.session.start; i < req.session.count; i++){
            new_data.push(data.data[i]);
        }
        res.json(new_data);
    })
    .catch(error => {
        res.json(error);
    })
});

app.get('/next', function(req, res){
    req.session.start += 10;
    req.session.count += 10;
	axios.get(req.session.url)
    .then(data => {
        let new_data = []
        //to prevent adding undefined to the new_data.
        if(req.session.count > data.data.length){
            req.session.count = data.data.length;
        }
        for(let i = req.session.start; i < req.session.count; i++){
            new_data.push(data.data[i]);
        }
        res.json(new_data);
    })
    .catch(error => {
        res.json(error);
    })
});

app.get('/top', function(req, res){
	axios.get(req.session.url)
    .then(data => {
        let new_data = [];
        //to prevent adding undefined to the new_data.
        let length = data.data.length < 100 ? data.data.length : 100;
        for(let i = 0; i < length; i++){
            new_data.push(data.data[i]);
        }
        res.json(new_data);
    })
    .catch(error => {
        res.json(error);
    })
});

app.listen(8000, function () {
	console.log("listening on port 8000");
});
