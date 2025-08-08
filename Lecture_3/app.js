const http=require('http');
const PORT=3000;
const serverListner=(req,res)=>{
  res.setHeader('Content-Type','text/html');
  // res.write('<html>');
  // res.write('<head><title>My First WebPage</title></head>');
  // res.write('<body>');
  // res.write('<p style="color:blue;background-color:black;">This is the body of the page</p>');
  // res.write('</body>');
  // res.write('</html>');
  // res.end();
    
  res.end(`
    <html>
      <head><title>My First WebPage</title></head>
      <body style="background-color:black;">
        <p style="color:white;margin:50px">This is the body of the page</p>
      </body>
    </html>
  `);

  // console.log(req.url, req.method, req.headers);
};
const server=http.createServer(serverListner);
server.listen(PORT,()=>{
  console.log(`Server is running at port ${PORT}`);
})