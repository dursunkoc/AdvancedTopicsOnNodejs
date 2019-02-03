const server = require('net').createServer();
let socketId=1;
let sockets = {};
function timestamp(){
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
server.on('connection', socket=>{
    
    socket.id = socketId++;

    console.log("Client connected!");
    socket.write('******************************\n');
    socket.write('* =|=   Welcomet new Client! *\n');
    socket.write('* / \\   Simple Chat v1.0.0!  *\n');
    socket.write('*                            *\n');
    socket.write('******************************\n');
    socket.write('Please type your nick:!\n');

    socket.on('data', (data)=>{
        if(sockets[socket.id] == null){
            sockets[socket.id] = socket;
            socket.name = data.toString().trim();
            return;
        }
        console.log(`Recevied: ${data}`);
        Object.entries(sockets).forEach(([i,sock]) => {
            if(sock != socket){
                sock.write(`${socket.name}-${timestamp()}->: ${data}\n`)
            }
        });
    });

    socket.on('end', ()=>{
        delete(sockets[socket.id]);
        console.log("Client disconnected!\n");
    })
});

server.listen(8000, ()=>{console.log("Server started!")})