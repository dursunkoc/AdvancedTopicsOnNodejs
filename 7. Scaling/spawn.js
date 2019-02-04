const {spawn} = require('child_process');

let cp = spawn('pwd')
// cp.stdout.on('data',(data)=>{
//     process.stdout.write(data);
// })
cp.stdout.pipe(process.stdout)

cp.on('exit',(code, signal)=>{
    console.log(`child process is exited with exit code of ${code}, and signal of ${signal}`);
});