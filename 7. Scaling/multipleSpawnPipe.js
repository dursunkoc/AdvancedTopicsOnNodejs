'use strict';

const {spawn} = require('child_process');

let ls = spawn('ls');
let wc = spawn('wc');
ls.stdout.pipe(wc.stdin);
ls.stdout.pipe(process.stdout);
wc.stdout.pipe(process.stdout);