'use strict'
const fs = require('fs');


var readFileAsArray = function(fileName, cb){
    fs.readFile(fileName, (err, data)=>{
        if(err) {
            return cb(err)
        }
        cb(null, data.toString().trim().split('\n'));
    });
} 

readFileAsArray('./numbers', (err, lines)=>{
    if (err){
        throw err;
    }
    let odds = lines.map(Number).filter(n=>n%2===1);
    console.log(`There are ${odds.length} odd numbers`);
})