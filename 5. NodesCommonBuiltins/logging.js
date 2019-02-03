const fs = require('fs')
const util = require('util');

const DEBUG = util.debuglog('LD');

const outLogStream = fs.createWriteStream('./log/out.log');
const errLogStream = fs.createWriteStream('./log/err.log');

const LOG = new console.Console(outLogStream, errLogStream);

let index = 0;

LOG.log('Hello World!');
LOG.error('Hello World!');
DEBUG('Started');
setInterval(()=>{
    index = index + 1;
    DEBUG('Execution on %d', index);
    LOG.log(`log: ${index}`);
    LOG.error(`err: ${index}`);
}, 2000);