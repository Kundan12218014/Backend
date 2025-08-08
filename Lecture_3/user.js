const http = require("http");
const path=require('path');
const fs = require("fs");
const PORT = 3000;
const serverListner = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/home") {
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Message Form</title>
      </head>
      <body style="font-family:'Segoe UI',sans-serif;background:#f4f6f8; display:flex;justify-content:center; align-items:center; height:100vh; margin:0;">

      <form action="/submitmessage" method="POST" style="background:white;padding:30px;border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1) ; width: 100%; max-width: 400px;">

        <h2 style="margin-bottom: 20px ; color: #333;">Contact Us</h2> 

        <label for="name" style="display:block;margin-bottom:5px color: #666;">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" style="width:100%;padding:10px;margin-bottom:15px ;border:1px solid #ccc; border-radius:5px; ">

        <label for="email" style="display: block ;margin-bottom: 5px; color: #666;">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email"  style="width:100%;padding:10px;margin-bottom: 15px; border:1px solid #ccc; border-radius: 5px;">

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows=4 placeholder="your message..." style="width:100%;padding:10px;margin-bottom:15px; border:1px solid #ccc; border-radius:5px;"> </textarea>
          
        <button type="submit" style="width :100% ; padding:12px; background-color: #0078D4; color: white; border:none border-radius: 5px; font-weight: bold; cursor: pointer;">
        send message
        </button>
      </body>
    </html>
  `);
  }
  else if (
    req.url.toLowerCase() === "/submitmessage" && req.method === "POST"
  ) {
    let body=[];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    })

    req.on("end",()=>{
      const fullBody=Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      // for(const [key,val] of params.entries()){
        //   obj[key]=val;
        // }
        const obj=Object.fromEntries(params);
      
      console.log(obj);
      fs.writeFileSync(path.join(__dirname,"user.txt"), `${obj.name} ${obj.email} ${obj.message}${JSON.stringify(obj)}`);
      console.log(__dirname);
      res.writeHead(302, { Location: "/home" });
      console.log(req.url, req.method);
      return res.end(); 
    })
  } else {
    res.end("<h1>Welcome to home page</h1>");
  }

  // console.log(req.url, req.method, req.headers);
};
const server = http.createServer(serverListner);
server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
