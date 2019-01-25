require('./cachingRequire')
require('./cachingRequire')
console.log("--------DELETING CACHE--------")
delete require.cache['D:\\dev\\workspaces\\nodejs\\learn\\advNjs\\1. basics\\cachingRequire.js']
require('./cachingRequire')
require('./cachingRequire')()