// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var staticContents = require('./static.js');

server = http.createServer(function(request, response){
    staticContents(request, response);
});
// tell your server which port to run on
server.listen(7890);
// print to terminal window
console.log("Running in localhost at port 7890");