var e=require("events");
var ps=require("fs");
var ee=new e.EventEmitter();

ee.on("connection",function()
{
    ps.writeFile("b.txt","This is data",(err)=> {console.log()});
    console.log("File Written");
    ee.emit("data-received");
    ee.emit("data-received1");
});
ee.on("data-received",function()
{
    
    ps.appendFile("b.txt","That is data",(err)=> {console.log()});
    console.log("File Appended");
   
});
ee.on("data-received1",function()
{
    ps.readFile("b.txt",(err,data)=>
    {
        console.error(); 
        console.log(data.toString());
        console.log("thanks for using my program on console");
    });
   
});
   

ee.emit("connection");
