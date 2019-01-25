process.on('exit', code=>{
    console.log(`About to exit with ${code}`);
});

process.on('uncaughtException', (err)=>{
    console.error(`Uncaught exception:
message: ${err} 
details:\n`, err)
    process.exit(1);
});

process.stdin.resume();
console.dog();//intensionally invalid code for uncaughtException!!!