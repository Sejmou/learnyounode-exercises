'use strict'

const fs = require('fs');
const path = require('path');

module.exports = function (dirPath, extensionToFilterBy, callback) {
    fs.readdir(dirPath, (err, list) => {
        if (err) return callback(err);
        callback(null, list.filter(hasExtension));
    });

    if (!dirPath) {
        return callback('No directory path provided!');
    }
    if (!extensionToFilterBy) {
        return callback('No extension to filter by provided!');
    }

    function hasExtension(file) {
        return path.extname(file) === `.${extensionToFilterBy}`;
    }
}