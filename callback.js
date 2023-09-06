// const message = function() {  
//     console.log("This message is shown after 3 seconds");
// }
// setTimeout(message, 3000);

// const message = ()=> {  
//     console.log("This message is shown after 3 seconds");
// }
// setTimeout(message, 3000);

// setTimeout(function() {  
//     console.log("This message is shown after 3 seconds");
// }, 3000);

// setTimeout(() => { 
//     console.log("This message is shown after 3 seconds");
// }, 3000);

// var fs = require('fs');

// fs.writeFile('test.txt', 'Hello World!', function (err) { 
//     if (err)
//         console.log(err);
//     else
//         console.log('Write operation complete.');
// });


var ps=require("fs");
ps.readFile("test.txt",function(err,data)
{
    if(err)
    {
        return console.error(err);
        
    }
    console.log(data.toString());
    console.log("completed");
}
);
console.log("Program ended");



