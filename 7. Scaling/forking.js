const { fork } = require('child_process');

const forked = fork('child.js');

forked.send({hello: 'world!'});

forked.on('message',(message)=>{
    console.log(`Message from child ${JSON.stringify(message)}`);
});