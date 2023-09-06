var ps=require("fs");
ps.writeFileSync("task.txt","0 1 99 20 33 -44 50");
data=ps.readFileSync("task.txt","utf-8")
  console.log(data);
data=data.split(" ");
  console.log(data);
for(i=0;i<data.length;i++)
{
    data[i]=parseInt(data[i]);
}
d1=data.sort();
  console.log(d1);
