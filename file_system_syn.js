
var ps=require("fs");
//ps.mkdirSync("TextFiles");
ps.writeFileSync("TextFiles/hello.txt","Hello Mitesh1");
ps.appendFileSync("TextFiles/hello1.txt"," How Are You");
data=ps.readFileSync("TextFiles/hello1.txt","utf-8");
console.log(data);
console.log(data.toString());
ps.renameSync("TextFiles/hello.txt","TextFiles/hihello.txt");
ps.unlinkSync("TextFiles/hihello.txt");