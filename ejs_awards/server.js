
var express = require("express");

var app = express();
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.get('/awards', function(request, response){
    response.render('awards');
});
var awardsArr = [
    {course: 'Web Fundamentals', date: '01/10/2001', awardedBy: 'Karen', technologies1: 'HTML', technologies2: 'CSS', technologies3: 'LESS', technologies4: 'Responsive', name: 'web'},
    {course: 'PHP', date: '01/01/2001', awardedBy: 'Karen', technologies1: 'PHP', technologies2: 'CodeIgniter', technologies3: 'Ajax', technologies4: 'jQuery', name: 'php'},
    {course: 'Javascript', date: '01/20/2001', awardedBy: 'Karen', technologies1: 'Node.js', technologies2: 'Express.js', technologies3: 'Socket.io', technologies4: 'Docker', name: 'js'}
];
app.get('/web', function(request,response){
    response.render('details', {awards: awardsArr[0]});
});
app.get('/PHP', function(request,response){
    response.render('details', {awards: awardsArr[1]});
});
app.get('/js', function(request,response){
    response.render('details', {awards: awardsArr[2]});
});
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
});
