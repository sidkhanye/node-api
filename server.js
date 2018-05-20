// node dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//mongodb
mongoose.connect('mongodb://localhost/rest_test');

//express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use('/api', require('./routes/api'));

// app.get('/', function(req, res){
//     res.send('server working');
// });

//testing/ starting up server
app.listen(8000);
console.log('API currently running on port 8000');