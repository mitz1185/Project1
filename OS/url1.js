// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);

var http = require('http');
var url = require('url');
var addr="http://localhost:8080/default.html?year=2024&month=feb";
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to get the querystring*/
  var q = url.parse(addr, true).query;
  /*Return the year and month from the query object:*/
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(3001);


