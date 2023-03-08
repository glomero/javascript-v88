// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// invoke express and store the result in the variable app
var app = express();
// use app's get method and pass it the base route '/' and a callback
app.use(express.static(__dirname + '/static'));
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.get('/movies', function(request, response){
    response.render('movies');
});
app.get('/theaters', function(request, response){
    response.render('theaters');
});
app.get('/movies/new', function(request, response){
    response.render('form');
});
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
});
