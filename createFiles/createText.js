const fs = require('fs');
const info = require('../Info.js');


function createText(data) {
    //takes in json data and creates a wordFile w/ data
    let string = "";
    //data = JSON.stringify(data);

    for (let i = 0; i < data.length; i++) {
        //console.log(data[i].french, data[i].english);
        string += data[i].french + "  -------  " + data[i].english + '\n';
    }

    fs.writeFile( 'wordFile.txt', string, (err) => {
        if (err) throw err;
    })
    //return true;
}


//formatJson();
//createText(info)
exports.text = createText;