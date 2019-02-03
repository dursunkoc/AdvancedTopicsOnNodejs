const https = require('https');
const fs = require('fs');

let server = https.createServer({
    key: fs.readFileSync(__dirname+'/../key.pem'),
    cert: fs.readFileSync(__dirname+'/../cert.pem')
},(request, response)=>{
    response.writeHead(200, {'Content-Type':'text/plain'})
    setTimeout(()=>{response.write('Hello Dursun!\n')},1000)
    setTimeout(()=>{response.write('Hello Yasemin!\n')},3000)
    setTimeout(()=>{response.write('Hello Elif Nisa!\n')},5000)
    setTimeout(()=>{response.write('Hello Beyza!\n')},7000)
    setTimeout(()=>{response.end('Hello Erzincan!\n')},11000)
});
server.listen(3000,()=>{console.log("Server started!")});