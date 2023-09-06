var h=require("http");
var server=h.createServer(
function(req,res){
if(req.url=="/")
{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<b> Home page 11123 </b>");
    res.end();
}
else if(req.url=="/student")
{
    res.writeHead(200,{"content-type":"text/html"}); //plain shows code as it is
    res.write("<i> Home page1 </i>");
    res.end();
}
else 
{
    res.writeHead(404,{"content-type":"text/html"});
    res.write("<h1> Page Not found </h1>");
    res.end("Thanks");
   res.write("Bye");
 }
 });
server.listen(6003);
console.log("Thanks for run");
