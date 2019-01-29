const dgram = require('dgram');
const SIZE = 19
let do_send = function (msg,start) {
    let subMsg = Buffer.from(msg.substring(start,start+SIZE))
    const client = dgram.createSocket('udp4')
    return new Promise((res, rej)=> {
        client.send(subMsg, 8080, 'localhost', (err, bytes) => {
            if (err) {
                rej(err);
            } else {
                res(bytes);
            }
            client.close();
            if(msg.length > (start+SIZE) ){
                do_send(msg, start+SIZE)
                .then((v)=>{
                    console.log(v);
                })
                .catch(err=>console.error(err));
            }
        })
    });
}

do_send("Hello world, mars, jupyter and uranüs",0)
.then((v)=>{
    console.log(v);
})
.catch(err=>console.error(err))