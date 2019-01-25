console.log('In index.js')
// require.resolve('find-me') //finds and resolve the find-me module but does not execute it.
require('find-me')
require('find-me-dir')
require('./lib/find-me')
console.log("------------------")
console.log(module)