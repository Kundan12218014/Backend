const express = require('express');
const app = express();

// define a route
app.get('/', (req, res) => {
  console.log('This is call from the root route');
  res.send('Hello World from Express!');
});

app.get('/about',(req,res)=>{
   console.log('This is about page call');
   res.send('<p>This is About us page</p>')  
});
app.post('/submit',(req,res)=>{
  console.log('This is submit page');
  res.send('<p>This is form submit page and form is submit sucessfully. </p>');
})

app.get('/search',(req,res)=>{
  const name= req.query.name;
  const age= req.query.age;
  console.log(`query is searched : ${name}, ${age}`);
  res.json({ name,age });

})

app.post('/user/:id',(req,res)=>{
  const id=req.params.id;
  if(!id){
    res.status(400).send('id paramenter is required');
  }
  console.log('User Route has been hitted with id = ',id);
  res.json({id});
})
// start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
