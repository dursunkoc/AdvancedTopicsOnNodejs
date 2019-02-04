const http = require('http');
const pid = process.pid;
let numberOfUser=0;

server = http.createServer((_, res)=>{
//    for (i=0;i<1e6;i++);
    res.write(`There are ${numberOfUser} avaliable!\n`)
    res.end(`Handled by ${pid}`);
});

server.listen(3000, ()=>{console.log(`Server started at ${pid}`);})

process.on('message', (message)=>{
    console.log(`Recevied message ${JSON.stringify(message)}, previous value was: ${numberOfUser}`);
    numberOfUser = message["numberOfUsers"];
})

process.on('exit',(code)=>{
    console.log(`exiting ${pid} with exit code ${code}`);
});

setTimeout(()=>{
    process.exit(1);
}, Math.random()*100000);