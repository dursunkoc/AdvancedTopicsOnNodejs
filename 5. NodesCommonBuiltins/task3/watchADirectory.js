/**
 * Watch a directory and report 3 types of events.
 * file was added, deleted, or modified.
 */
const fs = require('fs')
const path = require('path')

let pathToSubject = path.join(__dirname, 'subject');
console.log(`Will be watching ${pathToSubject}`);
let fsWatch = fs.watch(pathToSubject);
fsWatch.on('change', (eventType, fileName)=>{
    console.log(`${fileName} is ${eventType}.`)
})