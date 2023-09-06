var p=require("fs");
// csv=p.readFileSync("test.csv","utf-8");
// const arr=csv.split("\n");
// let json=JSON.stringify(arr);
// p.writeFileSync("out.json",json);
// json_data=p.readFileSync("out.json","utf-8");
// console.log(json_data);
// jason_parse=JSON.parse(json_data);
// console.log(jason_parse[0]);
// console.log(jason_parse[1]);




// p.writeFileSync("h2.html","<html><body><h1 style='color:red'>hello</h1></body></html>");
// data= p.readFileSync("h1.html","utf-8");
// console.log(data);

p.writeFileSync("xyz.json",'{"name":"Ankita","age":31}');
var data=p.readFileSync("xyz.json");
var data1=JSON.parse(data);
console.log(data1);