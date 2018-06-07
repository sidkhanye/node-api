// initialization of node.js dependencies
const express = require('express');
const router = express.Router();

//models
var item = require('../models/item');

//routes
Item.methods(['get', 'post', 'delete']);
Product.register(router, '/items');

// router.get('/products', function(req, res){
// res.send('API is fuctioning');

// return router
module.exports = router;
