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