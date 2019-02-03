const fs = require('fs');
const path = require('path');


const pathToFile = path.join(__dirname, 'log', 'out.log');
fsWatch = fs.watchFile(pathToFile,{interval: 500}, (curr, prev)=>{
    let rs = fs.createReadStream(pathToFile,{start:prev.size, end:curr.size});
    rs.on('data',(...args)=>{
        console.log(args.toString());
    });
});
