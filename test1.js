const ps=require("fs");
var data=ps.readFileSync("Hello.txt","utf-8");
console.log(data)
 //console.log(data.toString());
// console.log("Program ended");

 ps.writeFileSync("write.txt","This is data to be written");
 ps.appendFileSync("write.txt","After Append");
//ps.renameSync("hi.txt","xyz.txt");
//ps.unlinkSync("xyz.txt");
