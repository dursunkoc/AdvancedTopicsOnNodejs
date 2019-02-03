const http = require('http');
const fs = require('fs');
const path = require('path');
const util = require('util');

let DEBUG = util.debuglog('debug');

let pathToBigFile = path.join(__dirname, 'BIG_FILE.txt');

let server = http.createServer((req, res) => {
    DEBUG(`received request`);
    fs.readFile(pathToBigFile,(err, data)=>{
        if(err) throw err;
        DEBUG(`File Loaded`);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);
        DEBUG(`RESPOND BACK!`);    
    });
});

server.listen(3001,()=>DEBUG('Server started'));