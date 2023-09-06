// var http = require('http');
// var server = http.createServer(                                //create a server object
// function (req, res) {
//   res.write('Hello World!');                //write a response to the client
//   res.end();                                         //end the response can be empty or include string
// }).listen(8080);                                 //the server object listens on port 8080 
// //(or server.listen(5051) instead of listen());

var http = require('http');
var server = http.createServer(                                //create a server object
function (req, res) {
  res.write('Hello World!');                //write a response to the client
  res.end();                                         //end the response can be empty or include string
})                                //the server object listens on port 8080 
server.listen(8080);