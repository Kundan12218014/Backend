//core Module
const path=require('path');
//external Module
const express = require('express');
const app = express();

const rootDir=require('./utils/rootPath');

app.set('view engine', 'ejs');
app.set('views',path.join(rootDir,'views'));

//Middleware
app.use(express.json());// Parse JSON bodies
app.use(express.static(path.join(__dirname, 'public')));
//Local Module
const userRouter=require('./routes/userRouter');
const hostRouter=require('./routes/hostRouter');
const contactRouter=require('./routes/contactRouter');
const PORT = 3000;



app.use(userRouter);

app.use((req, res, next) => {
  console.log(`[LOG] ${req.url} ${req.method}`)
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use('/hosts',hostRouter);
app.use(contactRouter);

app.use((req,res)=>{
   res.render("404", { title: "Page Not Found" });
})



app.listen(PORT, () => {
  console.log(`server is running at port localhost:${PORT}`);
})