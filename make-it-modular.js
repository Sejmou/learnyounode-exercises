const fs = require('fs');
const mymodule = require('./mymodule');

const dirPath = process.argv[2];
const extensionToFilterBy = process.argv[3];

mymodule(dirPath, extensionToFilterBy, 
(err, list) => {
    if (err) return console.error(err);
    list.forEach(element => console.log(element))
});