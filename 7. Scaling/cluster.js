const cluster = require('cluster');
const os = require('os');

if (cluster.isWorker) {
    require('./singleHttpServer.js');
    return;
}

const updateNumberOfUsers = (noUpdate) => {
    if(noUpdate) return this.count;
    this.count = this.count || 5;
    this.count = this.count + this.count;
    return this.count;
}


let numberOfCpus = os.cpus().length;
for (i = 0; i < numberOfCpus; i++) {
    cluster.fork();
}

const updateWorkers = () => {
    let count = updateNumberOfUsers()
    Object.values(cluster.workers).forEach(worker => {
        console.log(`updating worker ${worker.id} with ${count}`);
        worker.send({'numberOfUsers': count});
    });
};

setInterval(updateWorkers, 10000);
setTimeout(updateWorkers, 3000);

cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.id} is crashed!`)
    if (code !== 0 && !worker.exitedAfterDisconnect) {
        console.log(`\tstarting a new process!`)
        cluster.fork().on('listening',()=>{
            let count = updateNumberOfUsers(true);
            let wArray = Object.values(cluster.workers);
            wArray[wArray.length-1].send({'numberOfUsers': count});
        });
    }
});