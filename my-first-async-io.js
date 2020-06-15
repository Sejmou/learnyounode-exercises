const { fstat } = require("fs");

const fs = require('fs');

fs.readFile(process.argv[2], {endcoding: 'utf8'}, (err, data) => {
    console.log(data.toString().split('\n').length - 1);
});