const fs = require('fs')

const convMap={
    88: 65,
    89: 66,
    90: 67
}

fs.readFile(__filename, (err, data)=>{
    let tag = data.slice(-4);
    console.log(tag.toString());
    for(let i=0;i<=tag.length;i++){
        tag[i] = convMap[tag[i]];
    }
    console.log(data.toString());
});

// TAG: XYZ