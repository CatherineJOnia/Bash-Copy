const cat = require('cat');

// module.exports = fs.readdir('./', 'utf8', (err, files) => {
//   if (err) {
//     throw err;
//   } else {
//     process.stdout.write(files.forEach((val) => val)
//     .join('\n'));
//     process.stdout.write('prompt > ');
//   }
// });

// function evaluateCmd(userInput){
//   const userInputArray = userInput.split(" ");
//   const command = userInputArray[0]; //select command name
//   switch (command) {
//     case "echo": commandLibrary.echo(userInputArray.slice(1).join(" "));
//      break;
//     case "cat": commandLibrary.cat(userInputArray.slice(1));
//     break;
//   }
// }

// function cat(fullPath){
//   const fileName = fullPath[0];
//   fs.readFile(fileName, (err, data) => {
//       if (err) throw err;
//       console.log(data);
//       done(data);
//   })
