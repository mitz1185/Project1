// var u=require("url");
// var addr="http://localhost:8080/default.html?year=2025&month=feb";
// //var addr="https://www.google.com/search?q=sbi+netbanking&oq=&aqs=chrome.2.69i59i450l8.192589690j0j15&sourceid=chrome&ie=UTF-8"
// var q=u.parse(addr,true);
// console.log(q);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// var qdata=q.query;
// console.log(qdata);
// //console.log(qdata.year);
// console.log(q.query.year);
// if(qdata.year%4==0)
// {
//    console.log("Its a leap year")
// }
// else{
//    console.log("Its not a leap year")
// }


// var http = require('http');
//  var url = require('url');
// // var addr="http://localhost:8080/default.html?year=2024&month=feb";
// // http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   /*Use the url module to get the querystring*/
// //   var q = url.parse(addr, true).query;
// //   /*Return the year and month from the query object:*/
// //   var txt = q.year + " " + q.month;
// //   res.end(txt);
// // }).listen(6001);

// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   console.log(q);
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(6001);

// var u=require("url");
// var ps=require("fs");
// var adr1=" http://localhost:8080/default.html?year=2027&month=May";
// var q1=u.parse(adr1,false);
// var qdata=q1.query;
//   console.log(qdata);
// ps.writeFile("fsd2.txt",qdata,(err)=>
// {
//    	console.log("completed");
// });


var h=require("http");
var ps=require("fs");
var u=require("url");
var addr="http://localhost:8080/setinterval.html";
var q=u.parse(addr,true);
data=ps.readFileSync("."+q.pathname);
var server=h.createServer(
    function(req,res)
    {
    res.writeHead(200,{"content-type":"text/html"});
    //res.writeHead(200,{"content-type":"text/plain"}); gives content of file(Whole program      will display in port)
    res.write(data);
    res.end();

});
server.listen(7001);



