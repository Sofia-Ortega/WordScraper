
/*
    + Web-scrape french words and store it in csv file. Only necessary to do once.
    + Includes practice on scraping a table
    + Website: https://1000mostcommonwords.com/1000-most-common-french-words/
 */

const request = require('request-promise');
const cheerio = require('cheerio');

var data = [];
async function practice() {
    //scraped practice table
    const result = await request.get("http://codingwithstefan.com/table-example");
    const $ = cheerio.load(result);
    let str = "";
    $("body > table > tbody > tr").each( async (index, element) => {
        str = $(element).text();
        //console.log(str)
        return await str;


    });
}


async function frenchWords() {
    //scraped french words table and created csv file to store
    const result = await request.get("https://1000mostcommonwords.com/1000-most-common-french-words/");
    const $ = cheerio.load(result);
    let str = "";
    let mini = {};
    //#post-34 > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1)
    $("#post-34 > div > div > table > tbody > tr > td").each((index, element) => {
        //for each element, place in mini dict w appropriate id
        //console.log('within the loop')
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
            //console.log(mini)
            data.push(mini);
            mini = {}
        }
    })

    //console.log(data)
    return data;
    //console.log(data)

    //write csv of stored french words data
    // const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    // const csvWriter = createCsvWriter({
    //     path: 'frenchWords.csv',
    //     header: [
    //         {id: 'number'},
    //         {id: 'french'},
    //         {id: 'english'}
    //     ]
    // })
    //
    // csvWriter
    //     .writeRecords(data)
    //     .then(() => console.log('Csv file successfully created'));

}


// let word = frenchWords();
// console.log(word) //pending
// word.then((i) => {console.log(i)})

//practice();


exports.scrapeWords = frenchWords;
