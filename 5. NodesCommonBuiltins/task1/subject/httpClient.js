const http = require('http');

//http.ClientRequest
let req = http.request({
    hostname:'www.google.com'
}, (res)=>{
    //http.IncomingMessage
    console.log(res.statusCode);
    console.log(res.headers);
    res.on('data', data=>{
        console.log(data.toString())
        //http.Agent
        console.log('Agent: '+JSON.stringify(req.agent));
    })

});

req.on('error', err=>console.error(err));
req.end();
