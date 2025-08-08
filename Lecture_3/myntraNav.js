const http = require('http');
const PORT=3000;
const server = http.createServer((req, res) => {
  if (req.url.toLowerCase() === '/home' && req.method === 'GET') {
   return  res.end(`
    <title>home</title>
    <h1>Welcome to home Section</h1>`);
  }
  else if(req.url.toLowerCase() === '/men' && req.method === 'GET'){
    return res.end(`<h1>Welcome to men Section</h1>`);
  }
  else if (req.url.toLowerCase() === '/women' && req.method === 'GET') {
   return res.end(`<h1>Welcome to women Section</h1>`);
}
else if (req.url.toLowerCase() === '/cart' && req.method === 'GET') {
  return res.end(`<h1>Welcome to Cart Section</h1>`);
}
else if (req.url.toLowerCase() === '/kids' && req.method === 'GET') {
    return res.end(`<h1>Welcome to Kids Section</h1>`);
}
  res.end(`<html>
  <head>
    <title>Navigation Bar</title>
     <style>
      body {
        margin: 0;
        font-family: 'Arial', sans-serif;
        background-color: #e9eef2;
      }
      nav {
        background-color: #49b67fff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        padding: 1em 0;
      }
      nav ul {
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 40px;
        margin: 0;
        padding: 0;
      }
      nav ul li a {
        text-decoration: none;
        color: #f0f0f0;
        font-weight: 600;
        font-size: 1.05rem;
        padding: 8px 12px;
        border-radius: 5px;
        transition: background-color 0.25s, color 0.25s;
      }
      nav ul li a:hover {
        background-color: #4c5c68;
        color: #ffffff;
      }
    </style>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </body>
</html>`)
  })

server.listen(PORT, () => {
  console.log(`server is running at url=localhost:${PORT}`);
})