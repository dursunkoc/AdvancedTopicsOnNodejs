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
                let creationDateTime = stats.mtime;
                let dateDiffInDays = (Date.now() - creationDateTime)/(60000*60*24);
                console.log(`${pathToFile} is created at ${creationDateTime} --> ${(dateDiffInDays).toFixed(2)}`);
                if(dateDiffInDays>=.02){
                    console.log(`${pathToFile} will be deleted!`);
                    fs.unlink(pathToFile, (err)=>{
                        if (err) console.error(`Error in deleting file ${pathToFile}: ${err}`);
                        console.log(`Deleted file ${pathToFile}`);
                    })
                }
            })
        });
});