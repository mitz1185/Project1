// var ps=require("fs");
// ps.writeFileSync("TextFiles/s1.txt","50 -1 -2 99 20 0 56 78 59");
// data=ps.readFileSync("TextFiles/s1.txt","utf-8");
// data=data.split(" ");

// //console.log(data);
// data=data.sort();
// for(i in data){
//     console.log(data[i]);
// }
// console.log(data);

var ps=require("fs");
ps.writeFileSync("s1.txt","0 -1 -2 99 20 33 -44 9");
data=ps.readFileSync("s1.txt","utf-8")
  console.log(data);
data=data.split(" ");
  console.log(data);
for(i=0;i<data.length;i++)
{
    data[i]=parseInt(data[i]);
}
for(x=0;x<data.length;x++)
{
    for(y=0;y<data.length-1;y++)
    {
        if(data[y]>data[y+1])
        {
           temp=data[y];
           data[y]=data[y+1];
           data[y+1]=temp;

        }
    }
}
//d1=data.sort();
  console.log(data);
  ps.writeFileSync("sorted.txt",JSON.stringify(data));



