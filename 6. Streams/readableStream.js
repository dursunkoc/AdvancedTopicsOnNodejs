const {
    Readable
} = require('stream')

/* ****************************************
const inStream = new Readable()
inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
inStream.push(null);
*  **************************************** */
const inStream = new Readable({
    read(size) {
        setInterval(() => {
            if (this.currentCharCode > 90) {
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.currentCharCode++));
        }, 200);
    }
});
inStream.currentCharCode = 65;

inStream.pipe(process.stdout);