// const E = require('events');
// const ee = new E();
// ee.on('start', () => {
//  console.log('started');
//  });
//  ee.emit('start');

//  const E = require('events');
// const ee = new E();
// ee.on('start', (start, end) => {
// console.log(`started from ${start} to ${end}`);
// });
// ee.emit('start', 1, 100);

// var e=require("events");
// var ee=new e();
// ee.on("connection",function(){
// console.log("Connection successfully");
// ee.emit("data-received");
// });
// ee.on("data-received",function()
// {
// console.log("data received successfully");
// })
// ee.emit("connection");
// console.log("thanks")

// const EventEmitter = require('events');
// // Initializing event emitter instances
// var eventEmitter = new EventEmitter();
// var fun1 = (msg) => {
// console.log("Message from fun1: " + msg);
// };
// var fun2 = (msg) => {
// console.log("Message from fun2: " + msg);
// };
// // Registering fun1, fun2
// eventEmitter.on('myEvent', fun1); //executes fun1 function on event myEvent "Line A"
// eventEmitter.on('myEvent', fun2); //executes fun2 function on event myEvent "Line B"
// eventEmitter.on('myEvent', fun1); //executes fun1 function on event myEvent "Line C"
// eventEmitter.on('myEvent2', fun2); //executes fun2 function on event myEvent2 " Line D"
// // Removing listener fun2
// eventEmitter.removeListener('myEvent', fun2); //remove fun2 "line B"
// // Triggering myEvent
// eventEmitter.emit('myEvent', "LJU"); //Executes two functions fun1 (Line A) and fun1 (Line C)
// // Removing all the listeners to myEvent
// eventEmitter.removeAllListeners('myEvent'); // This will remove all listened events. Means fun1 (Line A) and fun1 (Line C)
// eventEmitter.emit('myEvent2', "LJU"); // Executes function fun2 Line D

var e=require("events");
var fs=require("fs");
var ee=new e();
ee.on("connection",function()
{
fs.writeFile("b.txt","This is data",(err)=> {console.log()});
console.log("File Written");
ee.emit("data-append");
ee.emit("data-read");
});
ee.on("data-append",function()
{
fs.appendFile("b.txt","That is data",(err)=> {console.log()});
console.log("File Appended");
});
ee.on("data-read",function()
{
fs.readFile("b.txt",(err,data)=>
{
if(err){
console.error(err);
} 
console.log(data.toString()); 
});
});
ee.emit("connection")
