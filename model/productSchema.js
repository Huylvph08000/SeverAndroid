let mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    quanlyti: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },

})
module.exports = productSchema
