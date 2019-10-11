const express = require('express')
const app = express()
var cors = require('cors')
const path = require('path');
const http = require('http');

const port = 5000
const server = http.Server(app);

app.use(cors())

app.use('/', express.static(path.join(__dirname, 'expressFakturino')));

app.get('/welcome', (req, res) => {
    
    res.status(200).send('Tillsammans gör vi det lättare för ditt företag att växa');
});

app.get('/', (req, res) => {
    res.send('main route')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))