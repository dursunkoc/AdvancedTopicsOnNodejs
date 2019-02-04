/**
 * This script does not properly work on windows machines.
 */
const {spawn} = require('child_process');

let child = spawn('wc');

process.stdin.pipe(child.stdin);

child.stdout.on('data',(data)=>{
    console.log(`Recevied from child process: ${data}`);
});