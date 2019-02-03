/**
 * Script to clean old files in a directory.
 * Anything older than 7 days should be deleted.
 */
const path = require('path');
const fs = require('fs');

const pathToSubject = path.join(__dirname, 'subject');
fs.readdir(pathToSubject, (err, files) => {
    if (err) throw err;
    files
        .map((file) => path.join(pathToSubject, file))
        .forEach((pathToFile) => {
            fs.stat(pathToFile, (err, stats) => {
                if (err) throw err;
                let creationDateTime = stats.ctime;
                console.log(`${pathToFile} is created at ${creationDateTime} --> ${((Date.now() - creationDateTime)/(60000)).toPrecision(4)}`);
            })
        });
});