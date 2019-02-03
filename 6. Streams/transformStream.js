const {Transform} = require('stream');

let toUpperStream = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(toUpperStream).pipe(process.stdout);