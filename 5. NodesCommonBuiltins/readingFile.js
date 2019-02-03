const fs = require('fs');

let promise = new Promise((resolve, reject) => {
    fs.readFile(__filename, (err, data) => {
        if (err) reject(err);
        resolve(data);

    })
});

promise
    .then(data => console.log(data.toString()))
    .catch(err => console.error(error));

let data =  fs.readFileSync(__filename);
console.log(data.toString());