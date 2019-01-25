'use strict'
const fs = require('fs')
var fileSize = function (fileName, cb){
    if(typeof fileName !== 'string'){
        return process.nextTick(cb, new TypeError(`The fileName should be string value instead of ${fileName}`));
    }
    fs.stat(fileName,(err, stats)=>{
        if(err){
            cb(err)
        }
        cb(err, stats.size)
    })
}

fileSize(1, (err, size)=>{
    if(err) throw err
    console.log(`The size of ${__filename} is ${size}`)
});

fileSize(__filename, (err, size)=>{
    if(err) throw err
    console.log(`The size of ${__filename} is ${size}`)
});


console.log("The last line!")