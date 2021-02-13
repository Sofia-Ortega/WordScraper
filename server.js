
const http = require('http');
const express = require('express');

const bodyParser = require('body-parser')
const app = express();
cors = require("cors");
const server = http.Server(app);
const fs = require('fs');

const scraper = require("./webscrape/getFrenchWords");
const info = require('./Info.js');
const createFile = require("./createFiles/createText");

const PORT = process.env.port || 9000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(cors())

app.get('/', (req, res) => {
    //send french data in json
    let scrape = scraper.scrapeWords();
    scrape
      .then((data) => {
          res.send(data);
      })
      .catch((err) => {
          console.log(err);
      })

})

app.get('/test', (req, res) => {
  //send dummy info
    res.send([{"number":"23","french":"certains","english":"some"},{"number":"24","french":"est","english":"is"},{"number":"25","french":"il","english":"it"}])
})

app.get('/api/words/:number', (req, res) => {
    console.log(req.params.number);
    res.json(info.filter(word => word.number === parseInt(req.params.number)));
})

app.post('/contact', (req, res) => {

    console.log('Processing')
    console.log(req.body)
    // var firstName = req.body.firstName;
    // var lastName = req.body.lastName;
    // info.push({firstName, lastName})
    // console.log(info);
    res.sendFile('wordFile.txt', {root: __dirname});

})



app.post('/scraper', (req, res) => {
    //console.log(req.body)
    console.log('creating wordFile.txt');
    res.sendFile('public/scraper.html', {root: __dirname});

    let scrape = scraper.scrapeWords();
    scrape
        .then((i) => {
            createFile.text(i)
                .then(() => {
                    console.log('success');
                    res.send(true)
                    //res.sendFile('wordFile.txt', {root: __dirname});

                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err))
    console.log()


})




server.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`))



