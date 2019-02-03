const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const {Transform} = require('stream');

let pathToBigFile = path.join(__dirname, 'BIG_FILE.txt');
let pathToZippedBigFile = path.join(__dirname, 'BIG_FILE.gzip');

let progress = new Transform({
    transform(chunk, encoding, callback){
        process.stdout.write('\n-');
        callback(null, chunk);
    }
})

fs.createReadStream(pathToBigFile)
    .on('data', () => process.stdout.write("."))
    .pipe(zlib.createGzip())
    .pipe(progress)
    .pipe(fs.createWriteStream(pathToZippedBigFile))
    .on('finish', ()=>process.stdout.write('\nDone!\n'));