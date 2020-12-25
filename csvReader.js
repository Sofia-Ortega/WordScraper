
const csv = require('csv-parser');
const fs = require('fs');
const results = [];

console.log('beginning parse')
fs.createReadStream('frenchWords.csv')
    .pipe(csv())
    .on('data', data => console.log(data))
    // .on('end', () => {
    //     console.log(results);
    // })

