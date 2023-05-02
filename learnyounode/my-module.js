module.exports = function(dir, ext, callback) {
    const fs = require('fs');
    const path = require('path');
    
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        }
        const filteredList = list.filter(file => path.extname(file) === '.' + ext);
        callback(null, filteredList);
    });
};