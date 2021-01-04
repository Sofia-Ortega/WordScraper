
const http = require('http');
const express = require('express');

const bodyParser = require('body-parser')
const app = express();
const server = http.Server(app);

const scraper = require("./webscrape/getFrenchWords");
const info = require('./Info.js');

const PORT = process.env.port || 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('public/main.html', {root: __dirname});
})

app.get('/landing', (req, res) => {
    res.sendFile('public/scraper.html', {root: __dirname});
})


app.get('/api/myjson', (req, res) => {
    res.json(info);
})

app.post('/contact', (req, res) => {

    console.log('Processing')
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    info.push({firstName, lastName})
    console.log(info);
    res.end()
})

app.get('/test', () => res.send('test successful'));

app.post('/scraper', (req, res) => {
    //console.log(req.body)
    //scraper.practice();
    console.log(req.body.firstName)
    res.end();
})

server.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`))



