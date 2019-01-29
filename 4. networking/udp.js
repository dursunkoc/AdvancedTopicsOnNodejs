const dgram = require('dgram');
const server = dgram.createSocket('udp4', (msg,rinfo)=>{
    let now = new Date()
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} - msg: ${msg}\nrinfo:${JSON.stringify(rinfo)}`)
});

server.bind(8080,'localhost',()=>{
    console.log('Serving...')
})