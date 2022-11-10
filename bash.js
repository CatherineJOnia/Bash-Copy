const { cwd } = require('node:process');
// console.log(`Current directory: ${cwd()}`);

//Output a prompt
process.stdout.write('prompt > ');

const pwd =require('./pwd')

const fs = require('./ls')
