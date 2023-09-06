const student = 
    [
        {
            name: "ABC",
            age: 30
        },
        {
            name: "XYZ",
            age: 32
        }
    ] 
var ps=require("fs");

ps.writeFileSync("student.txt",JSON.stringify(student));
data=ps.readFileSync("student.txt","utf-8");
console.log(data);
b=JSON.parse(data);
console.log(b);

// var ps=require("fs");
// var data={"Name":"PSP"}
// ps.writeFileSync("abc183.txt",JSON.stringify(data));
// console.log("Entered data=")
// console.log(data) //check same data will be stored in abc183.txt
// var data2=ps.readFileSync("abc183.txt","utf-8");
// console.log("Read data=")
// var obj=JSON.parse(data2)
// console.log(obj);

