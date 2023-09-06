var e=require("events");
var ee=new e();
// var SetConnect=function ()
// {
    
//     console.log("Connection successfully");
//     ee.emit("data-received");
// }
ee.on("connection",function(){
    console.log("Connection successfully");
    ee.emit("data-received");
});
ee.on("data-received",function()
{
    console.log("data received successfully");
})
ee.emit("connection");
console.log("thanks");