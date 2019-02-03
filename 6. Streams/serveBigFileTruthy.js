const http = require('http');
const path = require('path');
const fs = require('fs');
const util = require('util');
const DEBUG = util.debuglog('debug');


DEBUG('Initializing the server');
let pathToBigFile = path.join(__dirname, 'BIG_FILE.txt');

server = http.createServer((req, res)=>{
    DEBUG('Received a request');
    res.writeHead(200, {'Content-Type':'text/plain'});
    DEBUG('READING FILE AND REPSONDING');
    let bigFileStream = fs.createReadStream(pathToBigFile);
    bigFileStream.pipe(res);
});

server.listen(3000, ()=>DEBUG('Server started.'));