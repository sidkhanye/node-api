// initialization of node.js dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Mongodb
mongoose.connect('mongodb://localhost/rest_test');

//express.js
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use('/api', require('./routes/api'));

// app.get('/', function(req, res){
//     res.send('server working');
// });

//starting up server on port 8000
app.listen(8000);
console.log('API currently running on port 8000');
