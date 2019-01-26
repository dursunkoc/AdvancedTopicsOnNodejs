const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter{
    execute(asyncTask, ...args){
        console.time('execute')
        this.emit('begin')
        asyncTask(...args, (err, result)=>{
            if(err){
                return this.emit('error', err)
            }
            this.emit('data', result);
            this.emit('end');
            console.timeEnd('execute');
        })
    }
}

const withTime = new WithTime();

withTime.on('begin', ()=>{
    console.log('Execution about to start');
});
withTime.on('end', ()=>{
    console.log('Execution about to end');
});
withTime.on('data', (data)=>{
    console.log(`Read data size is ${data.length}`);
});
withTime.on('data', (data)=>{
    console.log(`Read data contains ${data.toString().length} characters`);
});
withTime.on('error', (err)=>{
    console.err(err);
})

withTime.execute(fs.readFile, './numbers')