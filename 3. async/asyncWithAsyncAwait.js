const fs = require('fs');

var readFileAsArray = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                return reject(err)
            }
            resolve(data.toString().trim().split('\n'));
        });
    });
}

const countOdds = async function (fileName) {
    try {
        const lines = await readFileAsArray(fileName)
        const odds = lines.map(Number).filter(n => n % 2 === 1)
        console.log(`There are ${odds.length} odd numbers`);    
    } catch (error) {
        console.error(error)
    }
}
countOdds('./numbers')
console.log("finito.")