const {Writable} = require('stream');

const outstream = new Writable({
    write(chunk, encoding, callback){
        console.log(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(outstream);

process.stdin.pipe(process.stdout)