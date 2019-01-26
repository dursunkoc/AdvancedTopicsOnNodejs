const EventEmitter = require('events');
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const client = new EventEmitter();
const server = require('./server')(client);

rl.on('line', (line)=>{
    let [command, ...args] = line.split(' ');
    client.emit('command', command, args)
});
server.on('response',resp=>{
    process.stdout.write('\u001B[2J\u001B[0;0f');
    process.stdout.write(`${resp}`);
    process.stdout.write('\n\> ')
})