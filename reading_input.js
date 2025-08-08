//1st way to read input using readline module to read the input from the user
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter Your Name: ', (name) => {
  name.trim();
  if (name.length > 0) {
    console.log(`Hello ${name}`);
    rl.close();
  }
  else {
    console.log('Name cannot be empty');
    rl.close();
  }
});

//2nd way to read input 
process.stdin.setEncoding('utf8');

console.log('Enter Your Name: ');

process.stdin.on('data',(data)=>{
  const name=data.toString().trim();
  if (name.length > 0) {
    console.log(`Hello ${name}`);
  }
  else{
    console.log('Name cannot be empty');
  }
  process.exit();

})