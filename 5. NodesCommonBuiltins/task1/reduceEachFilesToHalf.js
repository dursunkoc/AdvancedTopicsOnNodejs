/*
Script to fix files in a directory.
Each file has its data duplicated.
Truncate each file in half.
*/
const fs = require('fs');
const path = require('path');

let subjectPath = path.join(__dirname, 'subject');
console.log(`The subject path is ${subjectPath}`);

fs.readdir(subjectPath, (err, files) => {
    if (err) throw err;
    files.forEach((file, _) => {
        let pathToFile = path.join(subjectPath, file);
        fs.stat(pathToFile, (err, stats) => {
            if (err) throw err;

            console.log(`Length of ${file} was ${stats.size}`);
            
            fs.truncate(pathToFile, stats.size / 2, (err) => {
                if (err) throw err;
            });

        });
    });
});