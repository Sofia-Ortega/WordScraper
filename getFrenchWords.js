const request = require('request-promise');
const cheerio = require('cheerio');

var data = [];
async function practice() {
    const result = await request.get("http://codingwithstefan.com/table-example");
    const $ = cheerio.load(result);
    let str = "";
    $("body > table > tbody > tr").each((index, element) => {
        str = $(element).text();
        console.log(str + 'yahoo')

    });



}

async function frenchWords() {
    const result = await request.get("https://1000mostcommonwords.com/1000-most-common-french-words/");
    const $ = cheerio.load(result);
    let str = "";
    let mini = {};
    $("#post-34 > div.post-inner.thin > div > table > tbody > tr > td").each((index, element) => {
        str += $(element).text();
        str += " "
        if((index % 3) === 0) {
            mini.number = $(element).text();
        }
        if((index % 3) === 1) {
            mini.french = $(element).text();
        }
        if((index % 3) === 2) {
            mini.english = $(element).text();
            data.push(mini);
            mini = {}
        }
    })

    console.log(data)
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
        path: 'frenchWords.csv',
        header: [
            {id: 'number'},
            {id: 'french'},
            {id: 'english'}
        ]
    })

    csvWriter
        .writeRecords(data)
        .then(() => console.log('Csv file successfully created'));

}


// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: 'frenchWords.csv',
//     header: [
//         {id: 'number'},
//         {id: 'french'},
//         {id: 'english'}
//     ]
// })



//practice();

frenchWords();
//writePractice();