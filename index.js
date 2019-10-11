const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000


app.use(cors())

app.get('/welcome', (req, res) => {
    
    res.status(200).send('Tillsammans gör vi det lättare för ditt företag att växa');
});

app.get('/', (req, res) => {
    res.send('main route')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))