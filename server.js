

const http = require('http');
const express = require('express');

const bodyParser = require('body-parser')
const app = express();
const server = http.Server(app);

const scraper = require("./webscrape/getFrenchWords")

const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('public/main.html', {root: __dirname});
})

app.post('/contact', (req, res) => {

    console.log('Processing')
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    console.log(firstName, lastName)
    res.end()
})

app.post('/scraper', (req, res) => {
    console.log('testing 1, 2')
    scraper.practice();
    res.end();
})

server.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`))



