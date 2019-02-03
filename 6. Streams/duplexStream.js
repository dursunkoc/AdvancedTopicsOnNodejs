const {Duplex} = require('stream');

let inoutStream = new Duplex({
    read(size){
        if(this.currentCharCode>90){
            this.push(null);
            return;
        }
        this.push(String.fromCharCode(this.currentCharCode++));
    },
    write(chunk, encoding, callback){
        console.log(chunk.toString());
        callback();
    }
});

inoutStream.currentCharCode=65;

process.stdin.pipe(inoutStream).pipe(process.stdout);