const { cwd } = require('node:process');
// console.log(`Current directory: ${cwd()}`);

//Output a prompt
process.stdout.write('prompt > ');

const pwd =require('./pwd')

const fs = require('./ls')

// const cat = require('./cat')

const { readFile } = require('node:fs/promises');
process.stdin.on('data', async (data) => {
    const cmd = data.toString().trim(); //remove the newline
    let myVar = "none"

   if(cmd.startsWith("cat")) {
    let cmdParts = cmd.split(' ');
    var myText = await readFile(cmdParts[1], { encoding: 'utf8' });

    console.log(myText);
   }

console.log(cmd);

  if(cmd === "pwd") {
    myVar = process.cwd();
    console.log(myVar);
  }
  process.stdout.write('Here' + myVar);
  process.stdout.write('You typed: ' + myVar);
  process.stdout.write('\nprompt > ');
});

