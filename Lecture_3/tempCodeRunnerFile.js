const http=require('http');
const PORT=3000;
const server=http.createServer((req,res)=>{
  body=[];
  req.on('data',chunk=>{
    body+=chunk;
    console.log(body);
  })
  
});
server.listen(PORT,()=>{
  console.log(`server is running at port 3000`);
});
