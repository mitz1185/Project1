var e=require("events");
var ee=new e.EventEmitter();
var connectHandler1=function connect()
{
    
    console.log("Connection-1 successfully");
    ee.emit("data-received");
}
var connectHandler2=function connect()
{
    
    console.log("Connection-2 successfully");
    ee.emit("data-received");
}
ee.on("connection",connectHandler1);
ee.on("connection",connectHandler2);
ee.on("data-received",function()
{
        console.log("data received successfully");
})
ee.emit("connection");
ee.removeListener("connection",connectHandler1);
ee.emit("connection");