const fs = require('fs');
const info = require('../Info.js');


function createText(data) {
    //takes in json data and creates a wordFile w/ data

    data = JSON.stringify(data);

    fs.writeFile( 'wordFile.txt', data, (err) => {
        if (err) throw err;
    })
    return true;
}

//console.log(createText(info));
exports.text = createText;