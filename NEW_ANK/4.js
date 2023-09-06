var dns=require("dns");
dns.resolve4("www.google.com",(err,addr,family)=>
{
    console.log("Address1="+addr);
    console.log("Family1="+family);
});
dns.lookup("www.google.com",(err,addr,family)=>
{
    console.log("Address2="+addr);
    console.log("Family2="+family);
});
dns.lookupService("127.0.0.1",80,(err,hostname)=>
{
    console.log(hostname);
});
dns.resolve4("www.google.com",(err,addr)=>
{
    console.log(`Address${JSON.stringify(addr)}`);
   addr.forEach((a)=>
   {
    dns.reverse(a,(err,hostname)=>
    {
        console.log(`Reverse of${a} is ${JSON.stringify(hostname)}`);
    });
   });
});
