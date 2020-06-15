const fs = require('fs');
let fileContent = fs.readFileSync(process.argv[2]);
let arrayOfSeparatedLines = fileContent.toString().split('\n');
//console.log(arrayOfSeparatedLines);
console.log(arrayOfSeparatedLines.length - 1);