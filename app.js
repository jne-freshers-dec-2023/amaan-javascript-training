// app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api-request.js'); 

let app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes); 


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports= app;