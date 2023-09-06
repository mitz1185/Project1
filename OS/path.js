// var pm=require("path");
// path1=pm.dirname("D:/FSD-2/Notes/Node/abc2.txt");
//   console.log("Path: " + path1);
// path2=pm.extname("D:/FSD-2/Notes/Node/abc2.txt");
//   console.log("Extension: "+path2);
// path2=pm.basename("D:/FSD-2/Notes/Node/abc2.txt");
//   console.log("Basename: "+ path2);
// path2=pm.parse("D:/FSD-2/Notes/Node/abc2.txt");
//   console.log(path2);
//   console.log(path2.root);
//   console.log(path2.dir);
//   console.log(path2.base);
//   console.log(path2.ext);
//   console.log(path2.name);

  var pm=require("path");
path=pm.dirname("D:/LJ/abc.html");
console.log(path);
path=pm.basename("D:/LJ/abc.txt");
console.log(path);
ext = pm.extname("D:/LJ/abc.txt")
console.log(ext);
path=pm.parse("D:/LJ/abc.html");
console.log(path);

if(path.ext == ".txt"){
    console.log("Text Document");
}else{
    console.log("Not a text Document");
}

