process.on('message',(message=>{
    console.log(`Message from parent ${JSON.stringify(message)}`);
}));

let counter = 0;

setInterval(()=>{
    process.send({counter: counter++});
}, 1000);