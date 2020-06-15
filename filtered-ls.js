const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const extensionToFilterBy = process.argv[3];

if (!dirPath) {
    throw 'No directory path provided as argument!';
}
if (!extensionToFilterBy) {
    throw 'No extension to filter by provided as argument!';
}

function hasExtension (file) {
    return file.includes(`.${extensionToFilterBy}`);
}

fs.readdir(dirPath, (err, list) => {
    if(err) console.error(error);
    else list.filter(hasExtension).forEach(element => console.log(element));
})
