
// import result from './sum.js'; // Use .js explicitly
const result = require('./sum');
const requestHandler = (req, res) => {
  const URL = req.url;
  const method = req.method;
  res.setHeader('Content-Type', 'text/html');
  if (req.url.toLowerCase() === '/') {
    res.end(`<a href="/calculate">Click here for calculate</>`);
  }
  else if (req.url.toLowerCase() === "/calculate" && method==='GET') {
    res.end(`<html>
      <head>
        <title>This is calculator app doing sum</title>
        <style>
        body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  background: #ffffff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

form h2 {
  margin-bottom: 20px;
  color: #333;
}

label {
  font-weight: 600;
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
  color: #555;
}

input[type="text"] {
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;
}

button {
  margin-top: 20px;
  padding: 12px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

        </style>
      </head>
      <body>
        <form action="/calculator" method="POST">
        <label for="A">A: </label>
        <input type="text" id="A" name="A" />
        <br></br>
        <label for="B">B: </label>
        <input type="text" id="B" name="B" />
        <button type='submit'>Add</button>
        </form>
      </body>
    </html>`)
  }
  else if (URL.toLowerCase() == "/calculator" && method == "POST") {
    const body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
      const parsed = new URLSearchParams(Buffer.concat(body).toString());
      const A = parsed.get("A");
      const B = parsed.get("B");
      console.log(A, B);
      const total = result(A, B);
      // res.writeHead(302, { Location: "/home" });
      res.write(`<p>Sum is : ${total}</p>`);
      console.log("Received POST to /calculator");

      res.end(`<a href="/home">click here for home page</a>`)
    })
  }
  else if (URL.toLowerCase() === "/home") {
    res.end(`
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Welcome to the Home Page</h1>
        <p>Return to <a href="/">Main Menu</a></p>
      </body>
    </html>
  `);
  }


}
module.exports=requestHandler;