//dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

//schema
var item_schema = new mongoose.Schema({
    brand: String,
    name: String,
    price: Number,
    SKU: String
});

//return model
module.exports = restful.model('Items', item_schema);
