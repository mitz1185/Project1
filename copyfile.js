var ps=require("fs");
ps.writeFileSync("TextFiles/source.txt","Hello Mitesh \n");
ps.appendFileSync("TextFiles/dest.txt"," How Are You");
data=ps.readFileSync("TextFiles/dest.txt","utf-8");
ps.appendFileSync("TextFiles/source.txt",data);
data1=ps.readFileSync("TextFiles/source.txt","utf-8");
ps.writeFileSync("TextFiles/new.txt",data1);
