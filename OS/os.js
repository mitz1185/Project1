// os=require("os");
//   console.log(os.arch());
//   console.log(os.hostname());
//   console.log(os.platform());
//   console.log(os.tmpdir());
//   console.log(os.freemem());
// a1=os.freemem();
//   console.log(`${a1/1024/1024/1024}`);


  var ps=require("fs");
var os=require("os");
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
f = os.tmpdir();
freemem=os.freemem()/1024/1024/1024;
 console.log(freemem);
ps.mkdirSync(f+"/AE");

if(freemem > 1){
ps.writeFileSync(f+"/AE/temp.txt","Sufficient memory")
}
else{
    ps.writeFileSync(f+"/AE/temp.txt","Low memory")
}
