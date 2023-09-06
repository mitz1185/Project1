var fs=require("fs");
fs.writeFile("abc.txt","Today is a good day",(err)=> {if(err){console.log("completed")}console.log("Hello")});
fs.appendFile("abc.txt","Today is a good day",function(err)
{
   if(err){console.log("completed")
}
console.log("Hello1")
});
fs.readFile("abc.txt",(err,data)=>{ 
if(err){ 
   console.error(err);
}
console.log(data.toString())
});
console.log("File Operations ended")


