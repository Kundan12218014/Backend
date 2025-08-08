const http=require('http');
const PORT=3000;

const requestHandler=require('./requestHandler');

const server=http.createServer(requestHandler);
server.listen(PORT,()=>{
  console.log(`server is running at https://localhost:${PORT}/`);
})